const express = require('express')
const dotenv = require('dotenv')

// config dotenv file
dotenv.config()

// create express app
const app = express();
const port = process.env.PORT || 8000;

// define the first route of the app
app.get('/', (req, res) => {
    // send hello world
    res.send('Welcome to API RESFTUL + APP exp + TS + swagger + mongoose')
})

// execute app and listen 
app.listen(port, () => {
    console.log(`express srv: running at http://localhost:${port}`)
})