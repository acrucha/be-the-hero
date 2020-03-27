const express = require('express');

const OngController = require('./controllers/OngController'); 
const IncidentsController = require('./controllers/IncidentsController'); 
const ProfileController = require('./controllers/ProfileController'); 
const SessionController = require('./controllers/SessionController'); 

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//listagem de ongs:
routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentsController.index);

routes.get('/profile', ProfileController.index);//listar todos os casos de uma ong

//criar uma ong:
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);
//route params!! recebe o id do caso que quer deletar


//exportar para o index.js
module.exports = routes;
