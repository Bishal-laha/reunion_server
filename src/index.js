import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config({
    path:'../.env'
});

app.listen(process.env.PORT_NUMBER || 8000, ()=>{console.log(`SERVER IS RUNNING ON ${process.env.PORT_NUMBER}`)});