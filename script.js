var print = function(msg){
  document.getElementById("output").innerHTML = "La longueur est" + msg;

}

document.getElementById("btn").onclick = function(event){

    print(document.getElementById("str").value.length);
}
