const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

 // crear el servidor
const app = express();

// conectar con mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/veterinaria", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connectada");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );

// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
 app.use('/', routes());
    
    // puerto y arranco el servidor 
    app.listen(4000, () => {
        console.log('Servidor funcionando')
    })