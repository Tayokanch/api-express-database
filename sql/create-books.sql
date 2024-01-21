
CREATE TABLE  books (
  id                SERIAL         PRIMARY KEY,
  title             VARCHAR(255)   NOT NULL,
  type              VARCHAR(255)   NOT NULL,
  author            VARCHAR(255)   NOT NULL,
  topic             VARCHAR(255)   NOT NULL,
  publication_date DATE           NOT NULL,
  pages             INTEGER        NOT NULL
);
