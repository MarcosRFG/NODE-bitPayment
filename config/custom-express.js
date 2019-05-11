var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var expressVlidator = require('express-validator')


module.exports = function(){
    var app = express()
    
    app.use(bodyParser.urlencoded({extended : true}))
    app.use(bodyParser.json())
    app.use(expressVlidator())

    consign().include('./controller').then('./persistencia').into(app)

    return app

}