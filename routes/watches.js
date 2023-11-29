var express = require('express');
const watches_controllers= require('../controllers/watches');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

/* GET watches */
router.get('/', watches_controllers.watches_view_all_Page);

// GET request for one watches.
router.get('/watches/:id', watches_controllers.watches_detail);
module.exports = router;

/* GET detail watches page */
router.get('/detail', watches_controllers.watches_view_one_Page);

/* GET create costume page */
router.get('/create', watches_controllers.watches_create_Page);

/* GET delete watches page */
router.get('/delete', watches_controllers.watches_delete_Page);

/* GET update watches page */
//router.get('/update', watches_controllers.watches_update_Page);


router.get('/update', secured, watches_controllers.watches_update_Page);





