const objeto = {
    nombre: "Kus",
    age: 26,
}
  
const usuario = {
    ...objeto,
    plataforma: "Platzi"
}

console.log(objeto);
console.log(usuario);