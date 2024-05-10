const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.homepage);
router.get('/add', bookController.addBook);
router.post('/add', bookController.postBook);
router.get('/edit/:id', bookController.edit);
router.put('/edit/:id', bookController.editPost);
router.put('/toggleRead/:id', bookController.toggleRead);
router.delete('/edit/:id', bookController.deleteBook);

module.exports = router;