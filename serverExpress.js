import express from 'express'
import morgan from 'morgan'
import fs from 'fs'
const app = express()
const port = 3000

const frutas = JSON.parse(fs.readFileSync('./json/frutas.json', 'utf8'))

app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a la API de frutas</h1>')
})

app.get('/frutas/all', (req, res) => {
  //devolver todo el listado de frutas
  res.json(frutas)
})

// Rutas con parámetros
app.get('/frutas/id/:id', (req, res) => {
  //devolver una fruta por su ID usar FIND
  // const id = req.params.id
  const { id } = req.params
  //buscar en el array el elemento con id=id
  const encontrada = frutas.find((fruta) => fruta.id == id)
  if (encontrada) {
    res.json(encontrada)
  } else {
    res.status(404).json({ message: '404 Fruta no encontrada' })
  }
})

app.get('/frutas/nombre/:nombre', (req, res) => {
  //devolver una fruta por su nombre usar INCLUDES
  // const nombre = req.params.nombre
  const { nombre } = req.params
  const encontradas = frutas.filter((fruta) =>
    fruta.nombre.toLowerCase().includes(nombre.toLowerCase())
  )
  if (encontradas.length > 0) {
    res.json(encontradas)
  } else {
    res.status(404).json({ message: '404 ninguna fruta coincide con esa busqueda' })
  }
})

app.get('/frutas/existe/:nombre', (req, res) => {
  // devolver la existencia de una fruta por su nombre usar equals
  // const nombre = req.params.nombre
  const { nombre } = req.params
  const encontrada = frutas.some((fruta) =>
    // localcompare sin sensibilidad a mayusculas y minusculas
    fruta.nombre.localeCompare(nombre, 'es', { sensitivity: 'base' }) === 0
  )
  /* if (encontrada) {
    res.json(encontrada)
  } else {
    res.status(404).send('<h1>404 ninguna fruta coincide con esa busqueda</h1>')
  } */
  encontrada ?
    res.json({ message: 'La fruta existe' }) :
    res.status(404).json({ message: 'La fruta NO existe' })
})

// Metodos no encontrados / Inexistentes
app.use((req, res) => {
  res.status(404).send('Error 404 - Página inexistente')
})

app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`)
})
