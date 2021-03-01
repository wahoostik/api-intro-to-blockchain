// Modèle Active Record
const db = require('../database.js');

class User {
    id;
    email;
    firstname;
    lastname;
    password;


    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAllArticle() {

        const { rows } = await db.query('SELECT article_title, article_link FROM question;');

        return rows.map(allArticle => new Question(allArticle));
    }

    static async findOneArticle(id) {
        const { rows } = await db.query(`SELECT article_title, article_link FROM question WHERE id = $1;`, [id]);

        return new Question(rows[0]);
    }


}

module.exports = User;