BEGIN;


DROP TABLE IF EXISTS "user",
"quiz",
"user_has_quiz",
"category",
"answer",
"question",
"user_has_question";


-- -----------------------------------------------------
-- Table "user"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL,
  "firstname" text NOT NULL,
  "lastname" text NOT NULL,
  "password" text NOT NULL
);

-- -----------------------------------------------------
-- Table "quiz"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "quiz" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" text NOT NULL,
  "category_id" int NOT NULL
);

-- -----------------------------------------------------
-- Table "utilisateur_has_quiz"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_has_quiz" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "scorequiz" int,
  "doOrNot" boolean NOT NULL,
  "user_id" int NOT NULL REFERENCES "user"("id"),
  "quiz_id" int NOT NULL REFERENCES "quiz"("id")
);

-- -----------------------------------------------------
-- Table "categorie"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "category" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL
);

-- -----------------------------------------------------
-- Table "question"
CREATE TABLE IF NOT EXISTS "question" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "thequestion" text NOT NULL,
  "article_link" text NOT NULL,
  "article_title" text NOT NULL,
  "quiz_id" int NOT NULL REFERENCES "quiz" ("id")
);

-- -----------------------------------------------------
-- Table "reponse"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "answer" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "rightOrWrong" boolean NOT NULL,
  "question_id" int NOT NULL REFERENCES "question" ("id")
);

-- -----------------------------------------------------
-- Table "utilisateur_has_question"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user_has_question" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "readOrNot" boolean NOT NULL,
  "user_id" int NOT NULL REFERENCES "user"("id"),
  "question_id" int NOT NULL REFERENCES "question"("id")
);

ALTER TABLE "quiz"
  ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");  


COMMIT;