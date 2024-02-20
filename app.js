let listaDeNumerosSorteados = [];
let numeroDeTentativas = 1;
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let palavraTentativa;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2}); //O que você quer dizer
} //É possívela alterar a velocidade da fala

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial;

function verificarChute() {
    let chute = document.querySelector("input").value; //Utilizamos .value para trabalhar com valores numéricos
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Parabéns!"); //Se o chute for certo, o head1 mudará
        palavraTentativa = numeroDeTentativas > 1 ? "tentativas" : "tentativa";
        let mensagemFinal = ("Você acertou o número secreto em " + numeroDeTentativas + " " + palavraTentativa + "!");
        exibirTextoNaTela("p", mensagemFinal);
        document.getElementById("reiniciar").removeAttribute("disabled");
        numeroDeTentativas = 0;
    }
        else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela("h1", "Tente novamente!");
                exibirTextoNaTela("p", "O número secreto é menor do que " + chute);
            }
                else {
                    exibirTextoNaTela("h1", "Tente novamente!");
                    exibirTextoNaTela("p", "O número secreto é maior do que " + chute);
                }
        }
        limparCampo();
        numeroDeTentativas++;
   
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // Variável para receber em seu conteúdo a quantidade de elementos da lista

    if (quantidadeDeElementosNaLista == numeroLimite) { //Se a quantidade de elementos na lista for igual ao número de possibilidades máximo de números sorteados, a lista será limpa;
        listaDeNumerosSorteados = []; //Como se ela estivesse sendo criada novamente. Uma forma de limitar os números sorteados
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); //Se um escolhido, que no caso é aleatório, já tiver aparecido no game, então um novo número aleatório será 
        //sorteado. É para isto que este if serve
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
   chute =  document.querySelector("input");
   chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo(); //Toda vez que o usuário acertar o número, o campo será limpo
    tentativas = 1; //Toda vez que o jogo for reiniciado, a tentativa será = 1
    exibirMensagemInicial(); //Toda vez que o jogo for reiniciado, aparecerão as mensagens iniciais
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

//Função para deixar a área de entrada de dados (o campo em que o usuário digitará o número) após cada chute.
//A cada vez que usuário chutar um número e errar, o campo será limpo!

/* Alternativa 1
 function verificarChute() {
    let chute = document.querySelector("input").value; //Utilizamos .value para trabalhar com valores numéricos
    let mensagemH1 = chute == numeroSecreto ? "Parabéns" : "Tente novamente!";
    let mensagemP = chute == numeroSecreto ? "Você acertou o número secreto!" :
                                              chute > numeroSecreto ? "O número secreto é menor do que " + chute :
                                                                      "O número secreto é maior do que " + chute;

    exibirTextoNaTela("h1", mensagemH1);
    exibirTextoNaTela("p", mensagemP);
} */


/* 
 Alternativa 2 
    let numeroDeTentativas = 0,
        numeroSecreto = 1,
        palavraTentativa;

    function exibirTextoNaTela(tag, texto) {
        document.querySelector(tag).innerHTML = texto;
    }

    exibirTextoNaTela("h1", 'Jogo do número secreto');
    exibirTextoNaTela("p", 'Escolha um número entre 1 e 10');

    function verificarChute() {
        numeroDeTentativas++;
        palavraTentativa = numeroDeTentativas > 1 ? "tentativas" : "tentativa";
        let chute = document.querySelector("input").value;
        let mensagemH1 = chute == numeroSecreto ? "Parábens" : "Tente novamente!";
        let mensagemP = chute == numeroSecreto ? "Você acertou o número secreto em " + numeroDeTentativas + " " + palavraTentativa + "!" :
            chute > numeroSecreto ? "O número secreto é menor do que " + chute : "O número secreto é maior do que " + chute;
    
        exibirTextoNaTela("h1", mensagemH1);
        exibirTextoNaTela("p", mensagemP);
    }

    function gerarNumeroAleatorio() {
        return parseInt(Math.random() * 10 + 1);
    } 
*/