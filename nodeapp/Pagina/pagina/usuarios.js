var cargar = function () {
    var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;



xhr.open("POST", "127.0.0.1:3001/API/Usuarios/Listar");

xhr.send(data);

xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
    
}