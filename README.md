# 🍎 API de Frutas con Express

## 📝 Descripción

Este proyecto es una API RESTful desarrollada con Express.js que proporciona información sobre diferentes frutas. Es parte del curso de Diplomatura Backend de UNTreF.

## 🚀 Características

- ✨ API RESTful con Express.js
- 🔍 Búsqueda de frutas por ID y nombre
- 📊 Verificación de existencia de frutas
- 📝 Logging con Morgan
- 🎯 Manejo de errores 404

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- Morgan (para logging)
- JSON (para almacenamiento de datos)

## 📋 Endpoints Disponibles

### GET /

- Muestra la página de bienvenida

### GET /frutas/all

- Retorna el listado completo de frutas

### GET /frutas/id/:id

- Busca una fruta por su ID
- Retorna la fruta encontrada o un error 404

### GET /frutas/nombre/:nombre

- Busca frutas por nombre (búsqueda parcial)
- Retorna un array con las frutas encontradas

### GET /frutas/existe/:nombre

- Verifica si existe una fruta específica
- Retorna un mensaje de confirmación

## 🚀 Instalación

1. Clona el repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instala las dependencias

```bash
pnpm install
```

3. Inicia el servidor

```bash
pnpm start
```

Para desarrollo:

```bash
pnpm dev
```

## 🌐 Uso

El servidor se ejecuta en `http://localhost:3000`

## 📝 Ejemplos de Uso

### Obtener todas las frutas

```http
GET http://localhost:3000/frutas/all
```

### Buscar fruta por ID

```http
GET http://localhost:3000/frutas/id/1
```

### Buscar fruta por nombre

```http
GET http://localhost:3000/frutas/nombre/manzana
```

### Verificar existencia de fruta

```http
GET http://localhost:3000/frutas/existe/banana
```

## 👨‍💻 Autor

UNTreF - Diplomatura Backend

## 📄 Licencia

ISC
