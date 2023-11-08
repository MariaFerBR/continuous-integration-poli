import express from "express";

const app = express();

app.get('/', (_req, res) => {
    res.send("Welcome! This is my page😃");
});

app.listen(3000);
console.log("Server on port: ", 3000);