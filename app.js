const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();


const db = require('./database/db');

const registration_route = require('./route/registration_route');
const productRoute = require('./route/product_route')

const subscribeRoute = require('./route/subscribe_route')






app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(registration_route)
app.use(productRoute)
app.use(subscribeRoute)

app.use(express.static('ProductImages'))
app.listen(90);