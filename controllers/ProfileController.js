//const Profile = require('../models/Profile')
const User = require('../models/User')
// const fs = require('fs')
// const path = require('path')


module.exports = {
    async indexByProfileId (req, res) {
        const { _id } = req.query
        //console.log("main edit", _id)
        try {
            const profile = await User.findById(_id)
            //console.log("main edit profile", profile)
            if(!profile) return res.status(500).json({ error: 'Profile nie znaleziony!' })
            res.json( profile )
        } catch (e) {
            return res.status(500).json({ error: 'Użytkownik nie znaleziony' })
        }

    },

    async indexByProfileUpdate (req, res) {
        const { _id } = req.headers
        const { nickname, email, phone} = req.body
        const { filename } = req.file || {}
        let profile = await User.findById( _id )

        if(!profile) {
            return res.status(401).json({ error: 'Nieautoryzowany użytkownik edycja!' })
        }
        profile = await profile.updateOne({
            avatar: filename ? filename : profile.avatar,
            nickname,
            email,
            phone
        })

        return res.json({ success: 'Dane użytkownika pomyślnie zmieniony!' })

    }
}
