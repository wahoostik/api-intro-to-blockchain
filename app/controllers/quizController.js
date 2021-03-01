const { request } = require('express');
const Quiz = require('../models/quiz');

const quizController = {
    allQuiz : async (request, response) => {
        try {
            const quiz = await Quiz.findAllQuiz();
            response.json(quiz);
        } catch (error) {
            //si la page n'existe pas
            response.status(404).json(error.message);
            console.log("Erreur dans le quiz controller : ", error);
        }
    },

    quizById : async (request, response) => {
        try {
        const id = parseInt(request.params.id, 10);
        const theQuiz = await Quiz.findOneQuiz(id);

        response.json(theQuiz);
        } catch (error) {
        // si le jeu n'existe pas
        response.status(404).json(error.message);
        console.log("Erreur dans l'id demandé : ", error);
        }
    },

    quizByCategoryId : async (request, response) => {
        try {
        const id = parseInt(request.params.id, 10);
        const theQuiz = await Quiz.findOneQuizByCategory(id);

        console.log(theQuiz);
        response.json(theQuiz);
        } catch (error) {
        // si le jeu n'existe pas
        response.status(404).json(error.message);
        console.log("Erreur dans l'id demandé : ", error);
        }
    },

};

module.exports = quizController;