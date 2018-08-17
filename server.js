var express = require('express')
var cors = require('cors')
var app = express()
const path = require('path')

const posts = require('./server/routes/posts');


app.use(cors())


app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts', posts)

var corsOptions = {
    origin: 'https://service.madrasmusic.com/',
    optionsSuccessStatus: 200 
}

app.get('*', cors(corsOptions), function (req, res, next) {

    res.sendfile(path.join(__dirname,'dist/index.html'))
   // res.json({ msg: 'This is CORS-enabled for all origins!' })
    console.log('test');
})
const port = process.env.PORT || 4600;
app.listen(port, function () { 
    console.log(`CORS-enabled web server listening on port ${port}`)
})