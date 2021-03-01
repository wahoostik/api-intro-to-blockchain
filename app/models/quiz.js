// Modèle Active Record
const db = require('../database.js');

class Quiz {
    id;
    title;
    categoryId;

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
        WHERE category.id = $1;`, [id]);

        return new Quiz(rows[0]);
    }

    // pas statique car propre à chaque instance
    async modifyQuiz() {
        const { rows } = await db.query(`UPDATE quiz SET title = $2, category_id = $3
        WHERE id = $1;`, [this.id, this.title, this.categoryId]);
    }

    async save() {
        // props de this => insérer une ligne dans la bdd
        const { rows } = await db.query(`INSERT INTO quiz (title, category_id)
        VALUES ($1, $2) RETURNING id;`, [this.title, this.categoryId]);

        this.id = rows[0].id;
    }

    async delete() {
        const { rows } = await db.query(`DELETE FROM quiz WHERE id = $1;`, [this.id]);
    }

}

module.exports = Quiz;