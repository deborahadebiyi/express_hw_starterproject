const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

// router.get('/health', BookController.Health);
// router.post('/books', controllers.createBook );
// router.get('/books', controllers.listBooks);
// router.get('/book/:book_id', controllers.getBookById);
router.delete('/book/:book_id', controllers.deleteBook);

//perhaps have a single controller file with a BookController object?

module.exports = router;