//rutas
const express = require('express');
const ruta = express.Router();
ruta.get('/', (req, res) => {

    res.render('index.html', { titulo: "Proyecto De Calidad" });
});
ruta.get('/contact', (req, res) => {
    res.render('contact.html', { titulo: "Contacto" })


});
module.exports = ruta;