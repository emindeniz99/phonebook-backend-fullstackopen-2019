require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
var morgan = require("morgan")
const cors = require("cors")
const Person = require("./models/person")

morgan.token("requestBody", function(req, res) {
	return JSON.stringify(req.body)
})

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(
	morgan(
		":method :url :status :res[content-length] - :response-time ms :requestBody"
	)
)

app.use(express.static("build"))

app.get("/api/persons", (req, res) => {
	Person.find({}).then(result => {
		res.json(result.map(person => person.toJSON()))
	})
})

app.get("/api/persons/:id", (req, res, next) => {
	Person.findById(req.params.id)
		.then(result => {
			if (result) res.json(result.toJSON())
			else res.status(404).end()
		})
		.catch(err => next(err))
})

app.delete("/api/persons/:id", (req, res, next) => {
	Person.findByIdAndRemove(req.params.id)
		.then(result => {
			res.status(204).end()
		})
		.catch(error => next(err))
})

app.post("/api/persons", (req, res) => {
	const body = req.body

	if (!body.name || !body.number) {
		return res.status(400).json({
			error: "name or number missing"
		})
	}

	const person = new Person({
		name: body.name,
		number: body.number,
		id: Math.floor(Math.random() * 12345678)
	})

	person.save().then(savedPerson => {
		res.json(person)
	})
})

app.put("/api/persons/:id", (req, res, next) => {
	const body = req.body
	const person = {
		name: body.name,
		number: body.number
	}
	Person.findByIdAndUpdate(req.params.id, person, { new: true })
		.then(updatedPerson => {
			res.json(updatedPerson.toJSON())
		})
		.catch(err => next(err))
})

app.get("/info", (req, res) => {
	Person.find({}).then(persons => {
		res.send(
			`Phonebook has info for ${persons.length} people <br> ${Date()}`
		)
	})
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: "unknown endpoint" })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
	console.error(error.message)

	if (error.name === "CastError" && error.kind === "ObjectId") {
		return response.status(400).send({ error: "malformatted id" })
	}

	next(error)
}

app.use(errorHandler)
