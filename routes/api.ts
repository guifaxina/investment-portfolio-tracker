import * as express from 'express';
const app = express();
import fetch from 'node-fetch';

const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/category")



app.listen(3000, "Server running on 3000 port")