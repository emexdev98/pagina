function diaHj(){
    var dia= new Date().getDay();

    switch (dia){
        case (0):
            document.getElementById("dia").innerHTML="Hoje é Domingo."
            break;
        case (1):
             document.getElementById("dia").innerHTML="Hoje é Segunda-feira"
            break;
        case (2):
             document.getElementById("dia").innerHTML="Hoje é Terça-feira"
            break;
        case (3):
             document.getElementById("dia").innerHTML="Hoje é Quarta-feira"
            break;
        case (4):
             document.getElementById("dia").innerHTML="Hoje é Quinta-feira"
            break;
        case (5):
             document.getElementById("dia").innerHTML="Hoje é Sexta-feira"
            break;
        case (6):
             document.getElementById("dia").innerHTML="Hoje é Sábado"
            break;
            
            default:
                document.getElementById("dia").innerHTML= "Não sei que dia é hoje.."

    }

    

}