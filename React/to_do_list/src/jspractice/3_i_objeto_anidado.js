// Desestructura email y telefono directamente en variables.
const usuario = {
  id: 1,
  info: { email: "user@example.com", telefono: "123456" },
};

const {id}=usuario;
const {info: {email,telefono}}=usuario;

console.log(email)
console.log(telefono)
console.log(id);