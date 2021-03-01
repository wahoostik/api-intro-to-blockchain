const { request } = require('express');
const Question = require('../models/question');

const questionController = {
    allArticles : async (request, response) => {
        try {
            const article = await Question.findAllArticle();
            response.json(article);
        } catch (error) {
            response.status(404).json(error.message);
            console.log('Erreur dans le controller article : ', error);
        }
    },

    findOneArticle : async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const theArticle = await Question.findOneArticle(id);
            
            response.json(theArticle);
        } catch (error) {
            response.status(404).json(error.message);
            console.log('Erreur dans le controller article : ', error);
        }
    }

};

module.exports = questionController;