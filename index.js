const express = require('express')
const fetch = require('node-fetch')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get("/", (req, res) => {
    res.redirect('/home')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
