const express = require('express')
const Container = require('./container.js')

let contenedor = new Container("./productos.txt")

const app = express()
const PORT = 8080
app.listen(PORT)
console.log(`Servidor escuchando en el puerto ${PORT}`)
app.get('/', (req,res) => {
    res.send("Hola pablito")
})

const productos = contenedor.getAll()

app.get('/productos', (req,res) => {
    res.send(`<h1>${productos}</h1>`)
})

let numRandom = Math.floor(Math.random() * (4-1) + 1)
console.log(numRandom)

const prodRand = contenedor.getById(numRandom)

app.get('/productoRandom', (req,res) => {
    res.send(`<p>${prodRand}</p>`)
})