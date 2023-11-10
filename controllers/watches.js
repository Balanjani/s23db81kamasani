var watches = require('../models/watches');
// List of all watches
exports.watches_list = async function(req, res) {
 try{
thewatches = await watches.find();
 res.send(thewatches);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};

   // for a specific Costume.
exports.watches_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await watches.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};


   // Handle Costume create on POST.
exports.watches_create_post = async function(req, res) {
    console.log(req.body)
    let document = new watches();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.watch_brand = req.body.brand;
    document.watch_model = req.body.model;
    document.watch_price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
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
//exports.watches_detail = function(req, res) {
 //res.send('NOT IMPLEMENTED: watches detail: ' + req.params.id);
//};
// Handle watch create on POST.
/*exports.watches_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: watches create POST');
};*/

// Handle watch delete form on DELETE.
exports.watches_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: watches delete DELETE ' + req.params.id);
};
/*
// Handle watch update form on PUT.
exports.watches_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: watches update PUT' + req.params.id);
};*/
// Handle watches update form on PUT.
exports.watches_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await watches.findById( req.params.id)
// Do updates of properties
if(req.body.watches_type)
toUpdate.watches_brand = req.body.watches_brand;
if(req.body.watches_model) toUpdate.watches_model = req.body.watches_model;
res.send(toUpdate.watches_model);
if(req.body.watches_price) toUpdate.watches_price = req.body.watches_price;
let result = await toUpdate.save();
console.log("Success " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// VIEWS
// Handle a show all view
exports.watches_view_all_Page = async function(req, res) {
    try{
    thewatches = await watches.find();
    res.render('watches', { title: 'watches Search Results', results: thewatches });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

