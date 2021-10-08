const express = require('express'); //Sintaxis para importar modulos en nodejs

require('dotenv').config();
const { dbConection } = require('./config/db');

const cors = require('cors');


//Crear el servidor express
const app = express();

//Estableciendo la config de cors
app.use(cors());

app.use(express.json());


//Crear la conexion a la bd
dbConection();

//Verificando variables de entorno
//console.log(process.env);

//Rutas de la API Proyectos
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/login', require('./routes/auth.routes'));
//app.use('/api/investigadores', require('./routes/investigadoresRoutes'));


//Codigo para desplegar servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor Nodejs desplegado en el puerto: ' + process.env.PORT)
})

//PASSWORD: Oqi8B8cDcrMNDjgM
//USER: adminprojet