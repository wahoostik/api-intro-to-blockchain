const { Router } = require('express');

const quizController = require('./controllers/quizController');
const questionController = require('./controllers/questionController');

const router = Router();

// Page d'accueil
router.get('/', (req, res) => {
    res.send('hello');
  });

// Pages quiz
router.get('/quizzes', quizController.allQuiz);
router.get('/quiz/:id', quizController.quizById);
router.patch('/quiz/:id', quizController.quizUpdateById);
router.post('/quiz', quizController.addQuiz);
router.delete('/quiz/:id', quizController.deleteQuiz);
router.get('/quiz/category/:id', quizController.quizByCategoryId);

// Pages article
router.get('/articles', questionController.allArticles);
router.get('/articles/:id', questionController.findOneArticle);

module.exports = router;