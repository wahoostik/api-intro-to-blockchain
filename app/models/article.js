// Modèle Active Record
const db = require('../database');

class Article {
    id;
    title;
    link;

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAllArticle() {

        const { rows } = await db.query('SELECT * FROM article;');

        return rows.map(allArticle => new Article(allArticle));
    }

    static async findOneArticle(id) {
        const { rows } = await db.query(`SELECT * FROM article
        WHERE id = $1;`, [id]);

        return new Article(rows[0]);
    }


}

module.exports = Article;