const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const mijson = require('./static/libros.json');

app.set('view_engine', 'pug');

