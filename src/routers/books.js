const express = require('express')
const router = express.Router()
const db = require("../../db");

router.get('/', async (req, res) => {
    const books = await db.query('SELECT * FROM books')
    res.json({books: books.rows})
})

router.get('/:id', async(req, res)=>{
    const {id} = req.params
    const book = await db.query('SELECT * FROM books WHERE id = $1', [id])
    res.json({data: book.rows[0]})
})

router.post('/', async(req, res) => {
   
    const { title, type, author, topic, publication_date, pages } = req.body;

     const newBook = await db.query(
        'INSERT INTO books (title, type, author, topic, publication_date, pages) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [title, type, author, topic, publication_date, pages]
    );

    res.json({ data: newBook.rows[0] }); 
    
});

router.put('/:id', async(req, res)=>{
    const {id} = req.params
    const {title, type, author, topic, publication_date, pages } = req.body
    const updateBook = await db.query(
        'UPDATE books SET title = $1, type = $2, author = $3, topic = $4, publication_date = $5, pages = $6 WHERE id = $7 RETURNING *',
        [title, type, author, topic, publication_date, pages, id]
    )
    res.json({data: updateBook.rows[0]})
})



module.exports = router
