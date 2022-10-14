const express = require('express')
const servidor = express();
const port = 4000;

servidor.get('/', (require, response) => {
    response.send(`La vida es un banano 🍌`)       
})//mostrar algo

servidor.listen(port,()=>{
    console.log('Banano');
})