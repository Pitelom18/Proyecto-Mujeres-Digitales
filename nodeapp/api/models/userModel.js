
var modelUser ={}

var misUsuarios = []

//importamos la libreria
const mongoose = require('mongoose');
//definimos tipo de esquema
const Schema = mongoose.Schema;
// configuramos el esquema
var UserSchema = new Schema({
    firstname:String,
    email:String,
    age:Number
})

//usuarios es el nombre de la coleccion y esta asociado a la variable anterior
const Mymodel = mongoose.model('usuarios',UserSchema)







modelUser.Guardar= function(post,callback){

    //instanciar el modelo
    const instace = new Mymodel

    //configuracion de la instancia
    instace.firstname = post.nombre;
    instace.email = post.email;
    instace.age = post.edad;

    //guardar informacion correspondiente. Aqui no se usa insertOne o Many sino save
    instace.save((error,userCreated) => {
        if(error){
            console.log(error);
        }
        else{
            console.log(userCreated);
            return callback(userCreated)
        }
    })

    //Despues de instanciar estas lineas siguientes ya no serian necesarias
    // misUsuarios.push({
    //     nombre:post.nombre,
    //     email:post.email,
    //     edad:post.edad
    // })
    // console.log(misUsuarios)


    //return callback({state:true,mensaje:"ok"}) esta linea pasa para arriba al else

}

modelUser.Modificar = function(post,callback) {
    
    // misUsuarios[post.posicion].nombre= post.nombre;
    // misUsuarios[post.posicion].edad= post.edad;
    // console.log(misUsuarios)
    // return callback({state:true,mensaje:'usuario actualizado'})

    Mymodel.findByIdAndUpdate(post.id,
    {firstname:post.nombre,
    age:post.edad}
    ,(error,respuesta)=> {

    if(error){
        console.log(error)
        return callback (error)
    }
    else{
        console.log(respuesta);
        return callback({state:true,mensaje:'usuario actualizado'})
    }
})
}

modelUser.Listar = function (post,callback) {
    Mymodel.find({},(error,documentos) =>{
        if(error){
            console.log(error)
            return callback (error)
        }
        else{
            console.log(documentos);
            return callback(documentos)
    
    //si quiero listar todo dejo las llaves vacias({}) de lo contrario ({},{firtsname:1 o 0}) 1 para verlo, 0 para no y asi debo hacerlo con todos los campos.
    
    //console.log(misUsuarios)
    //return callback({datos:misUsuarios})
    //aqui no se recibe informacion por lo que no usamos el post solo va a dar una respuesta.no tiene nada de procesamiento por lo que solo lee y entrega
        }
})
}

modelUser.cargarId = function (post,callback) {
    //aunque copiamos el mismo listar anteriormente en find no tenia parametro ahora necesitamos el id.
    Mymodel.find({_id:post.id},(error,documentos) =>{
        if(error){
            console.log(error)
            return callback (error)
        }
        else{
            console.log(documentos);
            return callback(documentos)
    
    
        }
})
}



modelUser.Eliminar = function(post,callback) {
    // misUsuarios.splice(post.posicion,1)
    //return callback({state:true,mensaje:'usuario eliminado'})

    Mymodel.findByIdAndDelete(post.id,(error,resultado)=> {
    
        if(error){
            console.log(error)
            return callback (error)
        }
        else{
            console.log(resultado);
            return callback({state:true,mensaje:'usuario eliminado'})
        }
    })
}

//la variable usuariob se conecta con el controlador al hacer el require del modelo
module.exports.usuariob = modelUser