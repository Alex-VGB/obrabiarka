const Product = require("../models/Product");
const User = require("../models/User");

const makeArrayFromNumber = number => {
    const array = []

    for(let i=1; i<=number; i++) {
        array.push(i)
    }

    return array
}

module.exports = {
    async index (req, res) {
        const page = req.query.page || 1

        const totalDocs = await Product.find().countDocuments()

        const pagination = makeArrayFromNumber(Math.ceil(totalDocs / 12))

        const products = await Product.find().limit(12).skip((page - 1) * 12)

        res.json({ products, pagination })
    },
    
    async indexByCategory (req, res) {
        const { page = 1, category = 'autos e pecas' } = req.query

        const totalDocs = await Product.find({ category }).countDocuments()

        const pagination = makeArrayFromNumber(Math.ceil(totalDocs / 12))
        
        const products = await Product.find({ category }).limit(12).skip((page - 1) * 12)
        
        res.json({ products, pagination })
    },

    async indexByUserId (req, res) {
        const { _id, page = 1 } = req.query
 
        const user = await User.findById(_id)
        if(!user) return res.status(500).json({ error: 'Użytkownik nie znaleziony' })

        const totalDocs = await Product.find({ user: user._id }).countDocuments()

        const pagination = makeArrayFromNumber(Math.ceil(totalDocs / 5))

        const products = await Product.find({ user: user._id }).limit(5).skip((page - 1) * 5)

        res.json({ products, total: totalDocs, pagination })
    }
}
