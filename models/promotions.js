const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var promotionShema = new Schema ({
    name: {
        type: String,
        required:  true
    },
    image: {
        type: String,
        required:  true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required:  true,
        min: 0
    },
    description: {
        type: String,
        required:  true
    },
    featured: {
        type: Boolean,
        required:  true
    },
},
{
    timestamps: true
});

var Promotions = mongoose.model('promotion',promotionShema);

module.exports = Promotions;