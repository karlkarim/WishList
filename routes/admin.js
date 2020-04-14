const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const itemsController = require('../controllers/items');
const router = express.Router();

router.get('/add-item', itemsController.getAddItemPage);
router.post('/add-item', itemsController.postAddItems);
router.post('/remove-item/:id', itemsController.deleteATask);
module.exports = router ;
//exports.router = router;
//exports.products = products;