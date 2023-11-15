var express = require('express');
const watches_controllers= require('../controllers/watches');
var router = express.Router();
/* GET watches */
router.get('/', watches_controllers.watches_view_all_Page);

// GET request for one watches.
router.get('/watches/:id', watches_controllers.watches_detail);
module.exports = router;

/* GET detail watches page */
router.get('/detail', watches_controllers.watches_view_one_Page);

/* GET create costume page */
router.get('/create', watches_controllers.watches_create_Page);