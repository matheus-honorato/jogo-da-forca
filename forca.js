

var iniciar = document.querySelector("#iniciar-jogo");
var adicionaPalavra = document.querySelector("#nova-palavra");
var palavras = ["ALURA", "ESPERTO", "PASSEI"]; 
var acertos = 0;
var chances = 8;
var erros = 0;

function criaPalavraSecretaAleatoria(){
	var sorteioNumeroArray = Math.floor(Math.random() * palavras.length)
	var palavraRandom = palavras[sorteioNumeroArray];
	//console.log(palavraRandom + ", posicao vetor " + sorteioNumeroArray);
	//console.log(palavraRandom.length);

	return palavraRandom;
}

var palavraAleatoria = criaPalavraSecretaAleatoria();
//console.log(palavraAleatoria + " Palavra aleatoria");

function validaEntrada(tecla){
	const regex = /[a-z]/i;
	var verificacaoArray = [];
	for(var i = 0; i < tecla.length; i++){
		var str = regex.test(tecla[i]);
		if (!str){
			verificacaoArray.push(str);
		}
	}
	if(!verificacaoArray.includes(false)){
		return str;
	}
}

function adicionaPalavraSecreta(){
	var campoPalavra = document.querySelector("#campo-adiciona-palavra");
	campoPalavra = campoPalavra.value;
	if(campoPalavra.length > 0 && validaEntrada(campoPalavra)){
		palavras.push(campoPalavra.toUpperCase());
		alert("Palavra adicionada");
		console.log(campoPalavra);
		console.log(palavras);
	} else {
		alert("Palavra invalida");
	}
}

function permiteDesenhar(){
	var podeDesenhar = true;
	if(erros == 8 || acertos == palavraAleatoria.length){
		podeDesenhar = false	
	}
	return podeDesenhar;
}
var letrasDigitadas = [];
function leTecla(event){
	var posicao = '';
	var teclaPressionada = event.key.toUpperCase();
	var escreveu = letrasDigitadas.includes(teclaPressionada)

	if(permiteDesenhar() && !escreveu && validaEntrada(teclaPressionada)){
		verificaLetraPressionada(teclaPressionada);
	}
	
}

function verificaLetraPressionada(teclaPressionada){
	for (j = 0; j < palavraAleatoria.length; j++){
		if(teclaPressionada == palavraAleatoria[j]){
			posicao = j;
			desenhaLetraCorreta(posicao);
			acertos++;
			console.log(acertos);
		}
	}
	if (!palavraAleatoria.includes(teclaPressionada)){
		desenhaLetraIncorreta(teclaPressionada);
		if (chances > 0){
			chances--;
		}
		erros++;
		//console.log(erros);
	}
	desenhaForca(erros);
	

	//console.log(chances + " quantidade de chances");
	//console.log(acertos + " Você acertou");
}



function desenhaForca(erros){
	console.log(erros);
	switch (erros){
		case 1: 
			desenhaBase();
			break;
		case 2:
			desenhaBaseTronco();
			break;
		case 3:
			desenhaCabeca();
			break;
		case 4:
			desenhaTroncoCorpo();
			break;
		case 5:
			desenhaPernaEsquerda();
			break;
		case 6:
			desenhaPernaDireita();
			break;
		case 7:
			desenhaBracoEsquerdo();
			break;
		case 8:
			desenhaBracoDireito();
			break;
	}
	if (erros == 8){ // Exibe a mensagem fim de jogo na tela do usuário
		fimDoJogo();
	}
	verificaVencedor();

}

function verificaVencedor(){
	if (acertos == palavraAleatoria.length){
		vencedorDoJogo();

	}
}


function desenhaTabuleiro(){
	window.scrollBy(800, 1200);
	permiteDesenhar();
	tabuleiro();
	desenhaTracinhos(palavraAleatoria.length);
	document.addEventListener("keypress", leTecla);
	

}


iniciar.addEventListener("click", desenhaTabuleiro, false); // Dá inicio ao jogo
adicionaPalavra.addEventListener("click", adicionaPalavraSecreta, false); // Adiciona palavra nova no vetor


