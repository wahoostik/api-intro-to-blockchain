const { Router } = require('express');

const quizController = require('./controllers/quizController');
const articleController = require('./controllers/articleController');

const router = Router();

// Page d'accueil
router.get('/');

// Pages quiz
router.get('/quizzes', quizController.allQuiz);
router.get('/quiz/:id', quizController.quizById);
router.get('/quiz/category/:id', quizController.quizByCategoryId);

// Pages article
router.get('/articles', articleController.allArticles);
router.get('/articles/:id', articleController.findOneArticle);

module.exports = router;