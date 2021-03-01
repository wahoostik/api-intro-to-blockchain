// Modèle Active Record
const db = require('../database.js');

class Quiz {
    id;
    title;
    category_id;

    set category_id(val) {
        this.categoryId = val;
    }

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAllQuiz() {

        const { rows } = await db.query('SELECT * FROM quiz;');

        return rows.map(allQuiz => new Quiz(allQuiz));
    }

    static async findOneQuiz(id) {
        const { rows } = await db.query(`SELECT * FROM quiz
        JOIN question ON quiz.id = question.quiz_id
		JOIN answer ON question.id = answer.question_id
        WHERE quiz.id = $1;`, [id]);

        return new Quiz(rows[0]);
    }

    static async findOneQuizByCategory(id) {
        const { rows } = await db.query(
        `SELECT * FROM quiz
        JOIN category ON category.id = quiz.category_id
        JOIN question ON quiz.id = question.quiz_id
        JOIN answer ON question.id = answer.question_id
        JOIN article ON article.id = question.article_id
        WHERE category.id = $1;`, [id]);

        return new Quiz(rows[0]);
    }

}

module.exports = Quiz;