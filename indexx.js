// UNSAFE APPROACH  
router.get('/:id', async (req, res) => {  
    // localhost:3030/movies/1
    const { id } = req.params;
  
    // Using string interpolation is BAD because it leaves us vulnerable to "SQL Injection"
    const result = await db.query(`SELECT * FROM movies WHERE id = ${id}`);
    // e.g. localhost:3030/movies/1; drop table movies
    res.json({ data: result.rows[0] });
  })
  
  // SAFE APPROACH using "parameterised queries"
  router.get('/:id', async (req, res) => {  
    // localhost:3030/movies/1
    const { id } = req.params;
    // The second parameter of the client `query` method takes an array of values
    const result = await db.query("SELECT * FROM movies WHERE id = $1", [id]);
    res.json({ data: result.rows[0] });
  })