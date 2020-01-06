(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=t(14),l=t(2),i=function(e){var n=e.handleSearchChange;return r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{onChange:n,type:"text"})," ")},m=function(e){var n=e.numbersToShow,t=e.deletePerson;return n.map(function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number,r.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){window.confirm("Delete ".concat(e.name))&&t(e.id)}},"delete"))})},f=function(e){var n=e.addPerson,t=e.newNumber,a=e.newName,c=e.handleNameChange,o=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=t(3),d=t.n(s),b="/api/persons",h=function(){return d.a.get(b).then(function(e){return e.data})},p=function(e){return d.a.post(b,e).then(function(e){return e.data})},w=function(e){return d.a.delete("".concat(b,"/").concat(e))},O=function(e){return d.a.put("".concat(b,"/").concat(e.id),e).then(function(e){return e.data})},v=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:"notification",style:{color:"success"===t?"green":"red"}},n)};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}var E=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),d=s[0],b=s[1],E=Object(a.useState)(""),j=Object(l.a)(E,2),y=j[0],C=j[1],P=Object(a.useState)(""),S=Object(l.a)(P,2),N=S[0],k=S[1],D=Object(a.useState)(null),T=Object(l.a)(D,2),x=T[0],L=T[1],I=Object(a.useState)(null),J=Object(l.a)(I,2),A=J[0],B=J[1];Object(a.useEffect)(function(){h().then(function(e){return c(e)})},[]);var q=t.filter(function(e){return e.name.toLowerCase().includes(N.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:x,type:"success"}),r.a.createElement(v,{message:A,type:"error"}),r.a.createElement(i,{handleSearchChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(f,{addPerson:function(e){e.preventDefault();var n=!0;t.forEach(function(e){e.name===d&&(n=!1,window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&O(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach(function(n){Object(u.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},e,{number:y})).then(function(n){c(t.map(function(t){return t.id===e.id?n:t})),L("Changed Number of ".concat(e.name)),setTimeout(function(){L(null)},5e3)}).catch(function(n){B("Information of ".concat(e.name," has already been removed from server")),setTimeout(function(){B(null)},5e3)}))}),n&&(p({name:d,number:y}).then(function(e){return c(t.concat(e))}),L("Added ".concat(d)),setTimeout(function(){L(null)},5e3)),b(""),C("")},newNumber:y,newName:d,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{numbersToShow:q,deletePerson:function(e){w(e).then(c(t.filter(function(n){return n.id!==e})))}}))};t(37);o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3e17999f.chunk.js.map