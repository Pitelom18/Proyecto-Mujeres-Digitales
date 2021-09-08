
var express = require('express')
global.application = express()
var path = require ('path')
global.appRoot = path.resolve(__dirname)
var port= 3001


require('./routes/routes')


application.use('/',express.static(__dirname + '/Pagina/pagina/INDEX/LOGIN'))
//application.get('/*',function(request,response,next){
    //response.sendFile(path.resolve(__dirname + './pagina/INDEX/index.html'))

//})

application.listen(port, function(){
    console.log('servidor iniciado en el puerto' + ' ' + port)
})