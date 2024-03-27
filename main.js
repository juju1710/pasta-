const botoes =  document ; querySelectorAll ("botao")
const textos =  document ; querySelectorAll (".aba-conteudo")

for(let i=0 ; i < botoes.length ; i ++){
    botoes.onclick = function () {
        for( let j = 0 ; j < botoes.length ; j ++ ){
            botoes[j].classlist.remove( "ativo");
            textos[i].classlist.remove( "ativo");
        }
        botoes[i]. classlist. add ("ativo");
        textos[i]. classlist. add ("ativo");
    }
}

const cotadores = document.querySelectorAll(".contador");
const tempoObjetivo1= new date ("2024-03-25T00:00:00");

contadores [0]. textContent = calculaTempo ( tempoObjetivo1) ;
 function calculaTempo(tempoObjetivo) {
    let tempoAtual = new date ();
    let tempoFinal= tempoObjetivo- tempoAtual;
    let segundos = math.floor(tempoFinal/100);
    let minutos = math.floor(segundos/60);
    let horas = math.floor(miutos/60);
    let dias = math.floor(horas/24);
    segundos % = 60;
    minutos % =60;
    horas % = 24;
    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos"
}