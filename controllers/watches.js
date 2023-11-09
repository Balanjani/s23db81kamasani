var watches = require('../models/watches');
// List of all watches
exports.watches_list = async function(req, res) {
 try{
 watches = await watches.find();
 res.send(watches);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};
// List of all watches
/*exports.watches_list = function(req, res) {
 res.send('NOT IMPLEMENTED: watches list');
};*/
// for a specific watch.
exports.watches_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: watches detail: ' + req.params.id);
};
// Handle watch create on POST.
exports.watches_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: watches create POST');
};
// Handle watch delete form on DELETE.
exports.watches_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: watches delete DELETE ' + req.params.id);
};
// Handle watch update form on PUT.
exports.watches_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: watches update PUT' + req.params.id);
};
