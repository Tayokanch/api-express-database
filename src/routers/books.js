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


module.exports = router
