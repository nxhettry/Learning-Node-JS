import express from "express";
import fs from "fs";

const app = express.Router(); //Router is a function that we're using

app.use((req, res, next) => {
    fs.appendFileSync("log_blog.txt", `Timestamp : ${Date.now()}\nReuest type : ${req.method}\n\n`);
    next();
});

app.get("/", (req, res) => {
    res.send("This is a homepage for blog website");
}).get("/about", (req, res) => {
    res.send("This is an aboutpage for blog website");
}).get("/contact", (req, res) => {
    res.send("This is a contactpage for blog website");
});

export default app;