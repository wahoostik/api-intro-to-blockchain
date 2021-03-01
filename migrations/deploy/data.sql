BEGIN;


INSERT INTO "user" ("email", "firstname", "lastname", "password") VALUES
('azerty@oclock.io', 'tony', 'laperche', '12345'),
('qwerty@oclock.io', 'walter', 'white', 'finger'),
('bitch@oclock.io', 'jesse', 'pinkman', 'test');


INSERT INTO "category" ("name") VALUES
('Bitcoin'),
('Easy Money'),
('Dollar');


INSERT INTO "quiz" ("title", "category_id") VALUES
('Bitcoin pour les nuls', 1),
('Easy Money', 1),
('Dollar', 2);


INSERT INTO "user_has_quiz" ("scorequiz", "do_or_not","user_id", "quiz_id") VALUES
(0, false, 1, 1),
(20, true, 1, 2),
(50, false, 2, 1);


INSERT INTO "question" ("thequestion", "article_link", "article_title", "quiz_id") VALUES
('Qui est le plus fort ? Godzilla ou Sub-Zero ?', 'www.legland.fr', 'Le gland, le maître du bitcoin', 2),
('Qui a le plus de bitcoin ? Elon Musk ou Cyril Hanouna', 'www.nba.com', 'Le gland Partie 2, le retour', 1);


INSERT INTO "user_has_question" ("read_or_not", "user_id", "question_id") VALUES
(false, 1, 1),
(true, 1, 2),
(false, 2, 2);


INSERT INTO "answer" ("name", "right_or_wrong", "question_id") VALUES
('Reponse A : Le doigt qui pue', true, 1),
('Reponse B : Negan', true, 1),
('Reponse C : Breaking Bad', false, 1),
('Reponse D : The Night King', false, 1),
('Reponse A : Godzilla', false, 2),
('Reponse B : Elon Musk', true, 2),
('Reponse C : Le grand Tony', true, 2),
('Reponse D : Cyril Lignac', false, 2);


COMMIT;