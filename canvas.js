var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");


function tabuleiro(){

	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(100, 650);
	pincel.lineTo(250, 650);
	pincel.lineTo(180, 600);
	pincel.closePath();
	pincel.stroke();
}

function desenhaCadaLetra(letra, x, y, cor){
	pincel.fillStyle = cor;
	pincel.font = '48px serif';
	pincel.fillText(letra, x + 5, y);


}
var letras = [];
function desenhaTracinhos(quantidade){

	var xComeca = 350;
	var xTermina = 400;
	var x = 0
	while (x < quantidade){
		xComeca += 100;
		xTermina += 100;
		pincel.lineWidth = 6;
		pincel.beginPath();
		pincel.moveTo(xComeca, 650);
		pincel.lineTo(xTermina, 650);
		pincel.stroke();
		letras.push(palavraAleatoria[x]);
		x+=1; // condição do while
		//console.log(letras);

	}
}


function desenhaLetraCorreta(posicaoDaLetra){
	var x = 350;
	for(var i = 0; i < palavraAleatoria.length; i++ ){
		x += 100;
		if(i == posicaoDaLetra){
			desenhaCadaLetra(letras[i], x, 640, "black");
			letrasDigitadas.push(letras[i]);
			console.log(letrasDigitadas);
		}
	}
}
var letraIncorreta = [];
function desenhaLetraIncorreta(teclaPressionada){
	var x = 600;
	letraIncorreta.push(teclaPressionada);
	console.log(letraIncorreta + " Letras incorretas ");
	for(var i = 0; i < letraIncorreta.length; i++){
		x += 50;
		desenhaCadaLetra(letraIncorreta[i], x, 300, "red");
		letrasDigitadas.push(letraIncorreta[i]);
	}
}

function desenhaBase(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(180, 200);
	pincel.lineTo(180, 600);
	pincel.stroke();
}
function desenhaBaseTronco(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(177, 200);
	pincel.lineTo(500, 200);
	pincel.moveTo(500, 197);
	pincel.lineTo(500, 250);
	pincel.stroke();
}
function desenhaCabeca(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.arc(500, 288, 40, 0, 2*Math.PI);
	pincel.stroke();
}

function desenhaTroncoCorpo(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(500, 330);
	pincel.lineTo(500, 450);
	pincel.stroke();
}

function desenhaPernaEsquerda(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(420, 500);
	pincel.lineTo(500, 450);
	pincel.stroke();
}

function desenhaPernaDireita(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(499, 450);
	pincel.lineTo(575, 500);
	pincel.stroke();
}

function desenhaBracoEsquerdo(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(420, 320);
	pincel.lineTo(500, 380);
	pincel.stroke();
}

function desenhaBracoDireito(){
	pincel.lineWidth = 6;
	pincel.beginPath();
	pincel.moveTo(580, 320);
	pincel.lineTo(500, 380);
	pincel.stroke();
}

function fimDoJogo(){
	desenhaCadaLetra("Você perdeu! ", 700, 500, "red");
}
function vencedorDoJogo(){
	desenhaCadaLetra("Você venceu! ", 550, 450, "green");
}
