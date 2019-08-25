const express = require('express');
const app = express();

//Configuracion
app.set('port', process.env.PORT ||3000)
//Middlewares

//Routes

//Static files

//Init
app.listen(app.get('port'), ()=>{
    console.log('Server en puerto 3000');
})
