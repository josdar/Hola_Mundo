function sumarValores(){
    try{
        var valor1;
        var valor2;
        valor1 = document.getElementById("valor1");
        valor2 = document.getElementById("valor2");
        var total = valor1 + valor2;
        document.getElementById("result").value = total;
    }catch(e){
        alert("Se presento un error");
    }
}


