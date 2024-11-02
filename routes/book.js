const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const Book = require('../models/Book');

router.get('/', bookController.homepage);
router.get('/add', bookController.addBook);
router.post('/add', bookController.postBook);
router.get('/edit/:id', bookController.edit);
router.put('/edit/:id', bookController.editPost);
router.put('/toggleRead/:id', bookController.toggleRead);
router.delete('/edit/:id', bookController.deleteBook);

router.get('/search', async (req, res) => {
    try {
        const searchTerm = req.query.q ? req.query.q.toLowerCase() : '';
        

        const results = await Book.find({
            title: { $regex: searchTerm, $options: 'i' }  
        });

        res.json(results); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Ошибка сервера');
    }
});

router.get('*', bookController.getErrorPage);

module.exports = router;