import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from 'url';


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.get('/api/v1/data', (req, res) => {
    const filePath = path.join(__dirname, '/constant/data.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        const jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(jsonData);
    });
});

export {app}