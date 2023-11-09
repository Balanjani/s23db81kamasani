const mongoose = require("mongoose")
const watchesSchema = mongoose.Schema({
watch_brand: String,
watch_model: String,
watch_price: Number
})
module.exports = mongoose.model("watches", watchesSchema);