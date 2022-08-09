"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var node_fetch_1 = require("node-fetch");
var response = await (0, node_fetch_1["default"])("https://pro-api.coinmarketcap.com/v1/cryptocurrency/category");
app.listen(3000, "Server running on 3000 port");
