const express = require ("express");
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use( express.static(publicPath) );

app.listen( 3030, () => console.log('Servidor corriendo') );

app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});