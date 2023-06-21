function quedia(){
    var dia= new Date().getDay();

    switch (dia){
        case (0):
            document.getElementById("teste").innerHTML="Hoje é Domingo."
            break;
        case (1):
             document.getElementById("teste").innerHTML="Hoje é Segunda-feira"
            break;
        case (2):
             document.getElementById("teste").innerHTML="Hoje é Terça-feira"
            break;
        case (3):
             document.getElementById("teste").innerHTML="Hoje é Quarta-feira"
            break;
        case (4):
             document.getElementById("teste").innerHTML="Hoje é Quinta-feira"
            break;
        case (5):
             document.getElementById("teste").innerHTML="Hoje é Sexta-feira"
            break;
        case (6):
             document.getElementById("teste").innerHTML="Hoje é Sábado"
            break;
            
            default:
                document.getElementById("teste").innerHTML= "Não sei que dia é hoje.."

    }

    

}
