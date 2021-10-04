
var express = require('express')
global.application = express()
var path = require ('path')
global.appRoot = path.resolve(__dirname)
//var port= 3001
//reemplazo la variable port a var config, despues de configurar en config.js para enlazar la pagina de configuraciones
//si genera error con var config=, lo cambiamos por global.config
global.config = require('./config.js').config //este ultimo config es la variable en el archivo config.js de module exports




//conectamos con mongo db usando npm mongoose, instalarlo en consola

const mongoose = require('mongoose');

//cabeceras que permiten comunicarse con los datos
application.all('*',function(req, res, next){

    var whitelist = req.headers.origin;
    console.log(whitelist)
  
    res.header('Access-Control-Allow-Origin', whitelist);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');  
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Credentials", "true");
    
next();
})

mongoose.connect('mongodb://127.0.0.1:27017/datosmujeres',{useNewUrlParser:true,useUnifiedTopology:true},(error,res) => {

    if(error){
        console.log(error)
    }
    else{
        console.log('Conexion a Mongo Correcta')
    }

})





require('./routes/routes')


application.use('/',express.static(__dirname + './pagina/index.html'))
//application.get('/*',function(request,response,next){
    //response.sendFile(path.resolve(__dirname + './pagina/index.html'))

//})


//cuando configuro el modelo cambio application.listen(port,function) a application.listen(config.puerto,function)
application.listen(config.puerto, function(){
    console.log('servidor iniciado en el puerto' + ' ' + config.puerto)//ahora es config.puerto en vez de port
})