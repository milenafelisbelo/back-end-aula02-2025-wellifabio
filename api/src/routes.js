const express = require('express');

const routes = express.Router();

const Cliente = require('./controllers/cliente');

routes.get('/', (req, res) => {
    res.send('API Clínica Respondendo');
});

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.put('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.del);

module.exports = routes;