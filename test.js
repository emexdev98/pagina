//var ano =new Date().getFullYear();
//for (let i=ano; i>=1900; i--){
    //document.getElementById("ano").innerHTML +="<option value '"+i+"'>"+i+"</option>"
//}

    let data = new Date();

    let ano = data.getFullYear();
console.log(ano)
// 0 JANEIRO ATÉ 11 DEZEMBRO
    let mes = data.getMonth();
    //console.log(mes);
//MOSTRAR O MES NO FORMATO ESCRITO
    const mesesdoano = ["Janeiro","Fevereiro","Março","Abril","maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    let mesEscrito = mesesdoano[data.getMonth()]
    console.log(mesEscrito);

    //PEGAR O DIA DO MÉS - 1 ATÉ 31 

    let diames= data.getDate()
    console.log(diames)
//Pegar o dia da semana
    let diaSemana= data.getDay();
    //console.log(diaSemana)

    const diaDaSemana= ["Domingo", "Segunda","Terça","quarta","Quinta","Sexta","Sabado"];
    
    let diaSemanaEscrito= diaDaSemana[data.getDay()];
    
    console.log(diaSemanaEscrito);

    //pegar a hora

    let hora= data.getHours();

    console.log(hora)

    
    d = new Date();

    diames = d.getDate();
    mes = d.getMonth() +1;
    ano= d.getFullYear();

    function addzero(x){
        return x<10 ? "0" + x : '' + x;    }

    let dataPadraoBR = addzero(diames) + "/" + addzero(mes) + "/" + ano;
    console.log(dataPadraoBR);

blo