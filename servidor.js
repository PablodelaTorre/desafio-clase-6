const express = require('express')
const Container = require('./container.js')

const app = express()
const PORT = 8080
app.listen(PORT)
console.log(`Servidor escuchando en el puerto ${PORT}`)
app.get('/', (req,res) => {
    res.send("Hola pablito")
})

let contenedor = new Container("./productos.txt")


const productos = contenedor.getAll()

let numRandom = Math.floor(Math.random() * (4-1) + 1)
console.log(numRandom)
const prodRand = contenedor.getById(numRandom)

app.get('/productos', (req,res) => {
    productos.then(res.send.bind(res))
})

app.get('/productoRandom', (req,respuesta) => {
    prodRand.then(respuesta.send.bind(respuesta))
})