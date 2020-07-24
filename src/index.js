//Llamamos las librerias

const express = require('express');
const app = express();
const path = require('path');
//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
//proyectos externos
//proyectos que antes que inicien el servidor
//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
//Rutas
//require('./rutas/');
app.use(require('./rutas/'));
//Iniciamos el servidor y si esta escuchando
app.listen(app.get('port'), () => {
    console.log('Server  on port', app.get('port'));
});