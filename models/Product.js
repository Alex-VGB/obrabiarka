const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String,required: true,},
    category: {type: String,default: null},
    price: {type: Number,default: 0},
    img: {type: String,default: null},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    date: {type: Date, default: Date.now() }
},
    { toJSON: { virtual: true}
})

ProductSchema.virtual('img_url').get(function () {
    return `http:localhost:8080/files/${this.img}`
})


module.exports = mongoose.model('Products', ProductSchema)