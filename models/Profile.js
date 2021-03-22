const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    avatar: { type: String, default:'' }

})

ProfileSchema.virtual('img_url').get(function () {
    return `http:localhost:8080/files/${this.avatar}`
})


module.exports = mongoose.model('Profile', ProfileSchema)