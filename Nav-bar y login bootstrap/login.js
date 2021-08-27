var Iniciarsesion = function(){
    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value

    console.log(email);
    console.log(password)

    if (email== null ||email== "" || email== undefined){
        alert('email es obligatorio')
        return false;  
    }

    if (password== null || password== "" || password == undefined){
        alert('contraseña es obligatoria')
        return false;
    }

    var regex = emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (emailRegex.test(email)) {
      alert ("correo válido")
    } else {
      alert ("correo invalido")
      return false
    }
}