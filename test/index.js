const express = require("express");
const app = express()
import fetch from "node-fetch";

function init() {
    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/category", { method: 'GET' })
    .then((res) => {
        const json = res.json
        console.log(json)
    }).catch((err) => {
        console.log(err)
    })
}


app.listen(3000, (req, res) => {
    console.log("Server rodando")
    init()
})