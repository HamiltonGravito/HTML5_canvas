// O ELEMENTO CANVAS
// Obtém a referência da tela e o contexto gráfico
const ex01 = document.getElementById('ex_01');
let canvasEx01 = ex01.querySelector('canvas');
let contextEx01 = canvasEx01.getContext('2d');
desenharTextoPadrao(contextEx01)


// TAMANHO DO ELEMENTO DE TELA VS TAMANHO DA SUPERFÍCIE DE DESENHO
const ex02 = document.getElementById('ex_02');
let canvasEx02 = ex02.querySelector('canvas');
let contextEx02 = canvasEx02.getContext('2d');
desenharTextoPadrao(contextEx02)


// Função para desenhar texto padrão dos primeiros exemplos
function desenharTextoPadrao(ctx, texto = 'Hello Canvas') {
    
    // Define os atributos do contexto
    ctx.font = '38pt Arial';
    ctx.fillStyle = 'cornflowerblue';
    ctx.strokeStyle = 'blue';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Calcula posição central
    const x = ctx.canvas.width / 2;
    const y = ctx.canvas.height / 2;

    // Preenche os caracteres do texto
    ctx.fillText(texto, x, y);
    // Traça o contorno dos caracteres
    ctx.strokeText(texto, x, y);
    // Obs.: fillText e strokeText recebem o texto e o local na tela para exibir o texto (x, y)
}

// OPERAÇÕES FUNDAMENTAIS DE DESENHO
const ex03 = document.getElementById('ex_03');
let canvasEx03 = ex03.querySelector('canvas');
let contextEx03 = canvasEx03.getContext('2d');

// Definições do Relógio
const TAMANHO_FONTE = 15;
const MARGEM = 35;
const TRUNCAMENTO_DO_PONTO = canvasEx03.width/25;
const TRUNCAMENTO_DO_PONTO_DAS_HORAS = canvasEx03.width/10;
const ESPACAMENTO_NUMERAL = 20;
const RAIO = canvasEx03.width/2 - MARGEM;
const RAIO_DA_MAO = RAIO + ESPACAMENTO_NUMERAL;

// Funções de Desenho
function drawCircle() {
    contextEx03.beginPath();
    contextEx03.arc(canvasEx03.width / 2, canvasEx03.height / 2, RAIO, 0, Math.PI * 2, true); // Cria um circulo
    contextEx03.stroke();
}

function drawNumerals() {
    const NUMERAIS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let angulo = 0;
    let larguraNumeral = 0;

    NUMERAIS.forEach((numeral) => {
        angulo = Math.PI/6 * (numeral - 3);
        larguraNumeral = contextEx03.measureText(numeral).width;
        contextEx03.fillText(numeral, canvasEx03.width/2 + Math.cos(angulo) * (RAIO_DA_MAO) - larguraNumeral/2, canvasEx03.height/2 + Math.sin(angulo) * (RAIO_DA_MAO) + TAMANHO_FONTE/3);
    })
}

function drawCenter() {
    contextEx03.beginPath();
    contextEx03.arc(canvasEx03.width/2, canvasEx03.height/2, 5, 0, Math.PI*2, true);
    contextEx03.fill();
}

function drawHand(loc, isHour) {
    let angulo = (Math.PI*2) * (loc/60) - Math.PI/2;
    let handRadius = isHour ? RAIO - TRUNCAMENTO_DO_PONTO - TRUNCAMENTO_DO_PONTO_DAS_HORAS : RAIO - TRUNCAMENTO_DO_PONTO;
    contextEx03.moveTo(canvasEx03.width/2, canvasEx03.height/2);
    contextEx03.lineTo(canvasEx03.width/2 + Math.cos(angulo)* handRadius, canvasEx03.height/2 + Math.sin(angulo) * handRadius);
    contextEx03.stroke();
}

function drawHands(){
    let data = new Date;
    let hora = data.getHours();
    hora = hora > 12 ? hora - 12 : hora;
    drawHand(hora*5 + (data.getMinutes()/60) * 5, true)
    drawHand(data.getMinutes(), false);
    drawHand(data.getSeconds(), false);
}

function drawClock() {
    contextEx03.clearRect(0, 0, canvasEx03.width, canvasEx03.height);
    drawCircle();
    drawNumerals();
    drawCenter();
    drawHands();
}

// Inicialização
contextEx03.font = TAMANHO_FONTE + "px Arial";
loop = setInterval(drawClock, 1000);


// TRATAMENTO DE EVENTOS (MOUSE - Coordenadas)
const ex04 = document.getElementById('ex_04');
let canvasEx04 = ex04.querySelector('canvas');
let contextEx04 = canvasEx04.getContext('2d');
let spriteSheet = new Image();
const readout = ex04.querySelector('#readout');

function windowToCanvas(canvas, x, y) {
    let bbox = canvas.getBoundingClientRect();
    return {
        x: (x - bbox.left) * (canvas.width / bbox.width),
        y: (y - bbox.top) * (canvas.height / bbox.height)
    };
}

function drawBackground(){
    const VERTICAL_LINE_SPACING = 12;
    let i = contextEx04.canvas.height;

    contextEx04.clearRect(0, 0, canvasEx04.width, canvasEx04.height);
    contextEx04.strokeStyle = 'lightgray'
    contextEx04.lineWidth = 0.5;

    while(i > VERTICAL_LINE_SPACING * 4){
        contextEx04.beginPath();
        contextEx04.moveTo(0, i);
        contextEx04.lineTo(contextEx04.canvas.width, i);
        contextEx04.stroke();
        i -= VERTICAL_LINE_SPACING;
    }
}

function drawSpritesheet() {
    contextEx04.drawImage(spriteSheet, 0, 0); // Método para desenhar folha de sprites. Permite copiar toda ou parte de uma imagem armazenada em um local para outro
}

function drawGuidelines(x, y) {
    contextEx04.strokeStyle = 'rgba(0, 0, 230, 0.8)';
    contextEx04.lineWidth = 0.5;
    drawVerticalLine(x);
    drawHorizontalLine(y);
}

function updateReadout(x, y) {
    readout.innerHTML = '(' + x.toFixed(0) + ', ' + y.toFixed(0) + ')';
}

function drawHorizontalLine (y) {
    contextEx04.beginPath();
    contextEx04.moveTo(0,y + 0.5);
    contextEx04.lineTo(contextEx04.canvas.width, y + 0.5);
    contextEx04.stroke();
}

function drawVerticalLine (x) {
    contextEx04.beginPath();
    contextEx04.moveTo(x + 0.5, 0);
    contextEx04.lineTo(x + 0.5, contextEx04.canvas.height);
    contextEx04.stroke();
}

// Evento Handler
canvasEx04.onmousemove = function (e) {
    let loc = windowToCanvas(canvasEx04, e.clientX, e.clientY);

    drawBackground();
    drawSpritesheet();
    drawGuidelines(loc.x, loc.y);
    updateReadout(loc.x, loc.y)
}

// Inicialização
spriteSheet.src = '../../images/sprites/running-sprite-sheet.png';
spriteSheet.onload = function (e) {
    drawSpritesheet();
}

drawBackground();


// USANDO ELEMENTOS HTML EM UM CANVAS
const ex05 = document.getElementById('ex_05');
let canvasEx05 = ex05.querySelector('canvas');
let contextEx05 = canvasEx05.getContext('2d');
const startButton = ex05.querySelector('#startButton');
const glasspane = ex05.querySelector('#glasspane')
let paused = false;

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    paused = ! paused;
    startButton.innerHTML = paused ? "Start" : "Stop";
}, false);

glasspane.addEventListener('mousedown', (event) => {
    event.preventDefault();
}, false);


// ELEMENTOS HTML INVISÍVEIS
const ex06 = document.getElementById('ex_06');
const canvasEx06 = ex06.querySelector('canvas');
const contextEx06 = canvasEx06.getContext('2d');
const rubberbandDiv = ex06.querySelector('#rubberbandDiv');
const resetButton = ex06.querySelector('#resetButton');
let image = new Image();
let mousedown = {};
let rubberbandRetangle = {};
let dragging = false;

// Funções para efeito Elástico
function rubberbandStart(x, y) {
    mousedown.x = x;
    mousedown.y = y;

    rubberbandRetangle.left = mousedown.x;
    rubberbandRetangle.top = mousedown.y;

    moveRubberbandDiv();
    showRubberbandDiv();

    dragging = true;
}

function rubberbandStretch(x, y) {
    rubberbandRetangle.left = x < mousedown.x ? x : mousedown.x;
    rubberbandRetangle.top = y < mousedown.y ? y : mousedown.y;

    rubberbandRetangle.width = Math.abs(x - mousedown.x);
    rubberbandRetangle.height = Math.abs(y - mousedown.y);

    moveRubberbandDiv();
    resizeRubberbandDiv();
}

function rubberbandEnd() {
    const bbox = canvasEx06.getBoundingClientRect();
    try {
        contextEx06.drawImage(
            canvasEx06,
            rubberbandRetangle.left - bbox.left,
            rubberbandRetangle.top - bbox.top,
            rubberbandRetangle.width,
            rubberbandRetangle.height,
            0, 0, canvasEx06.width, canvasEx06.height
        );
    } catch (error) {
        console.error(error);
    }

    resetRubberbandRectangle();

    rubberbandDiv.style.width = 0;
    rubberbandDiv.style.height = 0;

    hiderubberbandDiv();

    dragging = false;
}

function moveRubberbandDiv(){
    rubberbandDiv.style.top = rubberbandRetangle.top + 'px';
    rubberbandDiv.style.left = rubberbandRetangle.left + 'px';
}

function resizeRubberbandDiv(){
    rubberbandDiv.style.width = rubberbandRetangle.width + 'px';
    rubberbandDiv.style.height = rubberbandRetangle.height + 'px';
}

function showRubberbandDiv() {
    rubberbandDiv.style.display = 'inline';
}

function hiderubberbandDiv(){
    rubberbandDiv.style.display = 'none';
}

function resetRubberbandRectangle(){
    rubberbandRetangle = {top: 0, left: 0, width: 0, height: 0}
}

// Eventos
ex06.addEventListener('mousedown', (event) => {
    let bbox = canvasEx06.getBoundingClientRect();
    let x = (event.clientX - bbox.left) * (canvasEx06.width / bbox.width);
    let y = (event.clientY - bbox.top) * (canvasEx06.height / bbox.height);

    event.preventDefault();

    rubberbandStart(x, y);
}, false);

ex06.addEventListener('mousemove', (event) => {
    let bbox = canvasEx06.getBoundingClientRect();
    let x = (event.clientX - bbox.left) * (canvasEx06.width / bbox.width);
    let y = (event.clientY - bbox.top) * (canvasEx06.height / bbox.height);

    event.preventDefault();

    if(dragging){
        rubberbandStretch(x, y)
    }
}, false);

ex06.addEventListener('mouseup', (event) => {
    event.preventDefault();
    rubberbandEnd();
}, false);

image.addEventListener('load', (event) => {
    event.preventDefault();
    contextEx06.drawImage(image, 0, 0, canvasEx06.width, canvasEx06.height);
}, false);

resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    contextEx06.clearRect(0, 0, contextEx06.canvas.width, contextEx06.canvas.height);
    contextEx06.drawImage(image, 0, 0, canvasEx06.width, canvasEx06.height);
});

// Inicialização
image.src = '../../images/img/desert.png'