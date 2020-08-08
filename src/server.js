
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {
    pageLanging,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
    .use(express.urlencoded({extended: true}))
    .use(express.static("public"))
    .get("/", pageLanging)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)

