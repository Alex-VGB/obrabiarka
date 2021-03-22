const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: { type: String, require: true},
    phone: { type: String, require: true, default: null },
    password: { type: String, require: true,},
    nickname: { type: String},
    date: { type: Date, default: Date.now() },
    avatar: { type: String, default:'' }
    },
        { toJSON: { virtual: true}
})
UserSchema.virtual('img_url').get(function () {
    return `http:localhost:8080/files/${this.avatar}`
})

module.exports = mongoose.model('User', UserSchema)