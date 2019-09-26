const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/download',(req,res)=> res.download(path.join(__dirname,'web.html')));
app.use('/static', express.static(path.join(__dirname,'static')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'web.html')))
app.listen(port, () => console.log('Done'))

