const mongoose = require("mongoose");

const watchesSchema = mongoose.Schema({
    watch_brand: String,
    watch_model: {
        type: String,
        required: true,
        minlength: [3, 'Watch model must be at least 3 characters long'], // Minimum length of 3 characters
        maxlength: [50, 'Watch model cannot exceed 50 characters'], // Maximum length of 50 characters
    },
    watch_price: {
        type: Number,
        required: true,
        min: [0, 'Price must be non-negative'], // Minimum value of 0
        max: [10000, 'Price cannot exceed 10000'], // Maximum value of 10000
    },
});

module.exports = mongoose.model("watches", watchesSchema);
