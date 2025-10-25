import express from 'express';
import dotenv from 'dotenv/config'
import contactroute from "./routes/contactRoutes.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactroute )

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});