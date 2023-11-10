var express = require('express');
const watches_controllers= require('../controllers/watches');
var router = express.Router();
/* GET watches */
router.get('/', watches_controllers.watches_view_all_Page);

// GET request for one costume.
router.get('/watches/:id', watches_controllers.watches_detail);
module.exports = router;
