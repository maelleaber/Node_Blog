const express = require('express');

// Instanciation d'un nouveau Routeur Express
const blogRouter = new express.Router();

blogRouter.get('/', (request, response) => {
    const name = "Maelle"
    response.render('./admin/write.pug', { name });
});

blogRouter.get('/admin', (request, response) => {
    response.send('Bienvenue sur l\'espace d\'administration !');
});

// Exporte le routeur
module.exports = blogRouter;