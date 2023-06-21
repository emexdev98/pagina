function quedia(){
    var dia= new Date().getDay();

    switch (dia){
        case (2):
            document.getElementById("teste").innerHTML="Hoje é Terça-feira."
            break;
            case (3):
             document.getElementById("teste").innerHTML="Hoje é Quarta-feira"
            break;
            default:
                document.getElementById("teste").innerHTML= "Não sei que dia é hoje.."

    }

    

}
