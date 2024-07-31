const express = require('express');

const router = express.Router();

const { upload } = require('#utils');

const { get, find, insert, update, remove } = require('./controller');

router.get('/get', get);
router.get('/find/:id', find);
router.post('/insert', upload('event').single('gambar'), insert);
router.patch('/update/:id', upload('event').single('gambar'), update);
router.delete('/remove/:id', remove);

module.exports = router;