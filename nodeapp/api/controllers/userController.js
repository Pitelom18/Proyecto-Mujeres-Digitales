var MD5 = require('md5')



var userController = {}

userController.Guardar=function(request,response) {
    var post = {
        nombre:request.body.nombre,
        email:request.body.email,
        edad:request.body.edad

        if (post.nombre) {
            
        }
    }
}

//hay datos que no se modifican por ser como identificadores primarios entre ellos el email y el usuario.
userController.Modificar=function(request,response) {
    var post = {
        nombre:request.body.nombre,
        edad:request.body.edad 
}

userController.Eliminar=function(request,response) {
    
}

userController.Listar=function(request,response) {
    
}












module.exports.usuario = userController
// var misdatos= [];

// userController.guardar = function(request,response){

//     //para peticiones GET usamos params. Para POST body
//     var datos = {
//         name:request.body.nombre
//     }

//     console.log(datos)
//     //response.json({mensaje:'respuesta desde el controlador',nombre:datos.name})

//     if(datos.name == "" || null || undefined){
//         response.json({state:false, mensaje: "el nombre es obligatorio"})
//         return false
//     }

//     if(datos.name.length <=3){
//         response.json({state:false, mensaje:" El nombre debe tener minimo 3 caracteres"})
//         return false
//     }

//     if(datos.name.length >=15){
//         response.json({state:false,mensaje:"El nombre no debe pasar los 15 caracteres"})
//         return false
//     }

//     misdatos.push(datos.name)

//     //se reemplaza nombre:datos.name por usuarios:misdatos porque no se van a guardar de ahi en adelante solo nombres sino mas datos.
//     response.json({state:true,mensaje:"usuario guardado", usuarios:misdatos})

// }

// userController.activar = function(request,response){
//     response.json({datos:misdatos,autor:request.params.nombre})
// }



// var user =[]
// userController.registro = function(request,response){
//     var post={
//         email:request.body.email,
//         password:request.body.password
//     }

    
    
//     if (post.email== "" || post.email== null || post.email == undefined){
//     response.json({state:false,mensaje:'El campo email es obligatotio'})
//     return false
//     }

//     if (post.password== "" || post.password== null || post.password == undefined){
//     response.json({state:false,mensaje:'El campo password es obligatotio'})
//     return false
//     }

//     user.push({email:post.email,password:MD5(post.password)})

//     console.log(user)
    
//     //cambiamos state:true por registrados:user ya que user es el objeto que contiene todos los datos
//     response.json({registrados:user})
//     }

//     userController.login = function(request,response){
//         var post={
//             email:request.body.email,
//             password:request.body.password
//         }
//         if (post.email== "" || post.email== null || post.email == undefined){
//         response.json({state:false,mensaje:'El campo email es obligatotio'})
//         return false
//         }
    
//         if (post.password== "" || post.password== null || post.password == undefined){
//         response.json({state:false,mensaje:'El campo password es obligatotio'})
//         return false
//         }
        
//         for (var i = 0; i<user.length; i++) {

//             console.log(user[i].email)
//             console.log(user[i].password)

//             console.log(MD5(post.password))
            
//             if (user[i].email== post.email && user[i].password==MD5(post.password)) {
//                 response.json({mensaje:'usuario logueado correctamente'})
//                 return true;
//             }

//             if (i==user.length-1) {
//                 response.json({mensaje:'usuario no valido'})
//             }
            
//         }
//     }
    


