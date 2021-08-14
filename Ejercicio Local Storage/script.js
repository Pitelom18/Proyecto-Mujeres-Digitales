var datos_mascota = []

var almacenar = function(){
console.log("verificar")
var nombre = document.getElementById("name_pet").value;
var edad = document.getElementById("age_pet").value;
var dueno = document.getElementById("owner_pet").value;

datos_mascota.push({name:nombre, age:edad, owner:dueno})
var x = JSON.stringify(datos_mascota)
console.log(x)
localStorage.setItem("mascotas",x)

}