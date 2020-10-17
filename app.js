const express = require('express')
const connectDB = require('./config/database')

// Khoi dong app
const app = express()

// Khoi dong express middleware
app.use(express.json())

// Ket noi database

connectDB()

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
