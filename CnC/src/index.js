const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const path = require('path');
const sequelize = require('./database/index');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('public', path.join(__dirname, 'public'));

app.use(cors());
app.use(body_parser.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(app.get('public')));

app.use('/usuario', require('./app/Usuarios/rute'));
app.use('/planes', require('./app/Planes/rute'));

app.listen(3000, ()=>{
    sequelize.authenticate()
    .then(() => {
        console.log("se conecto con exito!!");
    })
    .catch((err) => {
        console.log(err);
    });
    console.log(`listen app on port ${app.get('port')}`);
})