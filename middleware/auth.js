const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    
    const { authorization } = req.headers
    //console.log(req)
        if(!authorization) return res.status(401).json({ error: 'Nieautoryzowany użytkownik!' })

        const [scheme, token] = authorization.split(' ')

        if(!/^Bearer$/i.test(scheme)) return res.status(401).json({ error: 'Zniekształcony token' })

        try {
            const decodedData = jwt.verify(token, process.env.SECRET)
            //console.log(decodedData)
            //req.users = decodedData
            next()
        } catch (err) {
            res.status(401).json({ error: 'Nieautoryzowany użytkownik!' })
        }
}