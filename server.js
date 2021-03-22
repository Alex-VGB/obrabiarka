const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')


require('dotenv').config()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, 'uploads')))
app.use('/api', require('./routes'))


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(`${__dirname}/frontend/build/index.html`))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Api running..')
    })
}

const PORT = process.env.PORT || 8080
async function start() {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(() => console.log('Database connected successfully!'))

        app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()