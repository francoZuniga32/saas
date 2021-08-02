const ruta = require('express').Router();
const control = require('./control');

ruta.get('/', control.get);
ruta.post('/', control.post);
ruta.put('/:id', control.update);
ruta.delete('/:id', control.delete);

module.exports = ruta;