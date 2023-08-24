import express from "express";
import bodyParser from "body-parser";

let app = express();
let port = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.send("Hello world from TuanLH");
})
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`);
})
