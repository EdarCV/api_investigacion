const express = require('express'); //Sintaxis para importar modulos en nodejs
require('dotenv').config();
const { dbConection } = require('./config/db');

const cors = require('cors');

//Crear el servidor express
const app = express();

//Estableciendo la config de cors
app.use(cors());

//Crear la conexion a la bd
dbConection();

//Verificando variables de entorno
//console.log(process.env);

app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'Bienvenidos a node'
    });
});

//process.env.PORT
app.listen(process.env.PORT, () => {
    console.log('Servidor Nodejs desplegado en el puerto: ' + process.env.PORT)
})

//PASSWORD: Oqi8B8cDcrMNDjgM
//USER: adminprojet