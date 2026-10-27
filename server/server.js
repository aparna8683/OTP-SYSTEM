import "dotenv/config"

import app from "./app.js"
import connectDB from "./src/config/db.js"
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);



const PORT=process.env.PORT || 5000;

const startServer = async()=>{
  await connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT:${PORT}`)
})
}

startServer();