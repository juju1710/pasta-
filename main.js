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
