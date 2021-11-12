const mongoose = require ('mongoose');

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type:String,
        default: 'Dario Russo',
    },
    date:{
        type: Date,
        default: Date.now,
    },
    article: {
        type: Object,
        required: true,
    }
})

module.exports = mongoose.model('Articles', ArticleSchema);