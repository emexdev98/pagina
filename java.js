function realParaDolar(real,cotacaoDolar){
    return real * cotacaoDolar;
}


var ValorReal=0.29;
var cotacao=4.81;

var total=realParaDolar(ValorReal,cotacao);

document.getElementById("texto").innerHTML=total


function alertahello(){
    alert("Olá pissual")
}