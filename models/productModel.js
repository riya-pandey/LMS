const mongoose = require("mongoose")

const product = mongoose.model('Product', {

    productName: {
        type: String,
        required: true
    },

    productImage: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    }

})

module.exports = product;