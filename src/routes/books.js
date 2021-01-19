const express = require('express');
const router = express.Router();

// const BookController 

router.get('/health', BookController.Health);
router.post('/books', BookController.CreateBook);
router.get('/books', BookController.ListBooks);
router.get('/book/:book_id', BookController.GetBookById);
router.delete('/book/:book_id', BookController.DeleteBook);

//perhaps have a single controller file inside a BookController object?

module.exports = router;