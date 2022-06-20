const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leadersShema = new Schema ({
    name: {
        type: String,
        required:  true
    },
    image: {
        type: String,
        required:  true
    },
    designation: {
        type: String,
        required:  true
    },
    abbr: {
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

var Leaders = mongoose.model('leaders',leadersShema);

module.exports = Leaders;