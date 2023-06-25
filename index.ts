// sustituto de index.js
import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'


// config dotenv file
dotenv.config()


// create express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

/**
 * 
 */
// define the first route of the app
app.get('/', (req: Request, res: Response) => {
    // send hello world
    res.send('Welcome to API RESFTUL + APP exp + Jest + TS + swagger + mongoose')
})

// define the first route of the app
app.get('/hello', (req: Request, res: Response) => {
    // send hello world
    res.send('Welcome to hello mf')
})


// execute app and listen 
app.listen(port, () => {
    console.log(`express srv: running at http://localhost:${port}`)
})