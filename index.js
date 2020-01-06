const express = require("express")
const bodyParser = require("body-parser")
var morgan = require("morgan")
const cors = require("cors")

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

app.use(express.static('build'))

let persons = [
	{
		name: "Arto Hellas",
		number: "040-123456",
		id: 1
	},
	{
		name: "Ada Lovelace",
		number: "39-44-5323523",
		id: 5
	},
	{
		name: "Mary Poppendieck",
		number: "39-23-6423122",
		id: 3
	}
]

app.get("/api/persons", (req, res) => {
	res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
	const note = persons.find(person => person.id === Number(req.params.id))
	console.log(note)

	if (note) res.json(note)
	else res.status(404).end()
})

app.delete("/api/persons/:id", (req, res) => {
	// console.log(req.params.id)
	persons = persons.filter(person => person.id !== Number(req.params.id))
	// console.log(persons)
	res.status(204).end()
})

app.post("/api/persons", (req, res) => {
	const body = req.body

	if (!body.name || !body.number) {
		return res.status(400).json({
			error: "name or number missing"
		})
	}

	for (i = 0; i < persons.length; i++) {
		if (persons[i].name === body.name)
			return res.status(400).json({
				error: "name must be unique"
			})
	}

	const person = {
		name: body.name,
		number: body.number,
		id: Math.floor(Math.random() * 12345678)
	}

	persons = persons.concat(person)

	res.json(person)
})

app.get("/info", (req, res) => {
	res.send(`Phonebook has info for ${persons.length} people <br> ${Date()}`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: "unknown endpoint" })
}

app.use(unknownEndpoint)

