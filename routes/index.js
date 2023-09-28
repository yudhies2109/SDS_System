var express = require('express');
var router = express.Router();
const pool = require('../connection');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/books', async (req, res) => {
  try {
      const query = 'SELECT * FROM book';
      const result = await pool.query(query);
      res.json(result.rows);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Something went wrong!' });
  }
});

module.exports = router;
