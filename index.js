const express = require('express')
const compression = require('compression')


const app = express()
const port = process.env.PORT || 3000

app.use(express.static('static'))
app.use(compression())
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get("/", (req, res) => {
    res.render('index.ejs')
})
app.get("/contact", (req, res) => {
    res.render('contact.ejs')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

