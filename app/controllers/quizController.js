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

    quizUpdateById : async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const theQuiz = await Quiz.findOneQuiz(id);
            const data = request.body;
    
            if (!theQuiz) {
                response.status(404).json("Nous n'avons pas trouvé l'id : " + id)
            } else {
            for (const prop in data) {
                theQuiz.title = data.title,
                theQuiz.categoryId = data.categoryId
                theQuiz[prop] = data[prop];
           }
    
            await theQuiz.modifyQuiz();
            console.log(theQuiz);
            response.json("Le quiz avec l'id : " + id + ", a bien été modifié");
                
            }
            } catch (error) {
            // si le jeu n'existe pas
            response.status(403).json(error.message);
            console.log("Erreur dans la modification d'un jeu : ", error);
            }
    },

    addQuiz : async (request, response) => {
        try {
        const newQuizData = request.body;

        const addQuiz = new Quiz(newQuizData);    

        
        await addQuiz.save();

        // sans await, il va me manquer
        // la certitude que tout s'est bien passé
        // l'id
        
        response.json(addQuiz);
        console.log("Le quiz avec a bien été rajouté");

        } catch (error) {
        // si le jeu n'existe pas
        response.status(403).json(error.message);
        console.log("Erreur dans l'ajout d'un jeu : ", error);
        }
    },

    deleteQuiz : async (request, response) => {
        try {
        const id = parseInt(request.params.id, 10);
        const theQuiz = await Quiz.findOneQuiz(id);

        if (!theQuiz) {
            response.status(404).json("Nous n'avons pas trouvé l'id : " + id)
        } else {
            await theQuiz.delete();
            response.json("Le quiz avec l'id : " + id + ", a bien été supprimé");
        }
        } catch (error) {
        // si le jeu n'existe pas
        response.status(403).json(error.message);
        console.log("Erreur dans la suppression d'un jeu : ", error);
        }
    },

};

module.exports = quizController;