const { request } = require('express');
const Article = require('../models/article');

const articleController = {
    allArticles : async (request, response) => {
        try {
            const article = await Article.findAllArticle();
            response.json(article);
        } catch (error) {
            response.status(404).json(error.message);
            console.log('Erreur dans le controller article : ', error);
        }
    },

    findOneArticle : async (request, response) => {
        try {
            const theArticle = await Article.findOneArticle();
            response.json(theArticle);
        } catch (error) {
            response.status(404).json(error.message);
            console.log('Erreur dans le controller article : ', error);
        }
    }

};

module.exports = articleController;