const express = require('express')
const fetch = require('node-fetch')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get("/", (req, res) => {
    fetch("https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/8901")
        .then((resp) => resp.json())
        .then(index => {
            let html = index.content.rendered
            res.render('index.ejs')
        }).catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
