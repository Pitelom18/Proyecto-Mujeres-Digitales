const { application } = require("express");

application.get('/suma',function(request,response){
    response.json({mensajes:'Hola mundo'})
})