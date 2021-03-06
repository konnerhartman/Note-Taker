const html = require('express').Router();
const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET to retrieve the landing sight first. 
html.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// If above GET malfunctions, this will be hit and will GET main page.
html.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = html;