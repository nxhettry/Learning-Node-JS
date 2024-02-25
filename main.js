import express from 'express';
import fs from 'fs';
import blog from "./routes/blog.js";

const app = express();
const port = 3000;

app.use("/blog", blog);

//Creating first custom middleware
app.use((req, res, next) => {
    //this adds a log file with the timestamp and the method of request
    fs.appendFileSync("log_main.txt", `Timestamp : ${Date.now()}\n request type : ${req.method}\n\n`);
    next();
});

// creating second custom middleware
app.use((req, res, next) => {
    //This line will modify the request and add the string in it so that when it is accessed below, the modified string will kick in.
    req.Name = " I am a programmer.";
    next();
});

//You can chain like this
app.get("/", (req, res) => {
    res.send(`This is a Homepage ${req.Name}`);
}).get("/about", (req, res) => {
    res.send("This is an aboutpage");
}).get("/contact", (req, res) => {
    res.send("This is a contactpage");
});

app.listen(port, () => {
    console.log(`Listening from port ${port}.`);
});