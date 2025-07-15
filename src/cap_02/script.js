// Desenhando Retângulos Simples
const ex01_2 = document.getElementById('ex_01_2');
let canvasEx01_2 = ex01_2.querySelector('canvas');
let contextEx01_2 = canvasEx01_2.getContext('2d');

contextEx01_2.lineJoin = 'round';
contextEx01_2.lineWidth = 30;

contextEx01_2.font = '24px Helvetica';
contextEx01_2.fillText('Clique em qualquer lugar para apagar', 125, 150);

contextEx01_2.strokeStyle = 'goldenrod';
contextEx01_2.fillStyle = 'rgba(0, 0, 255, 0.5)';

contextEx01_2.strokeRect(100, 100, 100, 100);
contextEx01_2.fillRect(300, 100, 100, 100);

contextEx01_2.canvas.addEventListener('mousedown', () => {
    contextEx01_2.clearRect(0, 0, canvasEx01_2.width, canvasEx01_2.height);
});

// Desenhando Gradientes Lineares
const ex02_2 = document.getElementById('ex_02_2');
let canvasEx02_2 = ex02_2.querySelector('canvas');
let contextEx02_2 = canvasEx02_2.getContext('2d');
let gradientEx02_2 = contextEx02_2.createLinearGradient(0, 0, canvasEx02_2.width, canvasEx02_2.height); //Essas alterações refletem as alterações da forma do gradiente

gradientEx02_2.addColorStop(0, 'blue');
gradientEx02_2.addColorStop(0.25, 'white');
gradientEx02_2.addColorStop(0.5, 'purple');
gradientEx02_2.addColorStop(0.75, 'red');
gradientEx02_2.addColorStop(1, 'yellow');

contextEx02_2.fillStyle = gradientEx02_2;
contextEx02_2.rect(0, 0, canvasEx02_2.width, canvasEx02_2.height);
contextEx02_2.fill();

// Desenhando Gradientes Radiais
const ex03_2 = document.getElementById('ex_03_2');
let canvasEx03_2 = ex03_2.querySelector('canvas');
let contextEx03_2 = canvasEx03_2.getContext('2d');
let gradientEx03_2 = contextEx03_2.createRadialGradient(canvasEx03_2.width / 2, canvasEx03_2.height, 10, canvasEx03_2.width / 2, 0, 100);

gradientEx03_2.addColorStop(0, 'rgba(255, 0, 0, 1)');
gradientEx03_2.addColorStop(0.15, 'rgba(255, 127, 0, 1)');
gradientEx03_2.addColorStop(0.3, 'rgba(255, 255, 0, 1)');
gradientEx03_2.addColorStop(0.45, 'rgba(0, 255, 0, 1)');
gradientEx03_2.addColorStop(0.6, 'rgba(0, 0, 255, 1)');
gradientEx03_2.addColorStop(0.75, 'rgba(75, 0, 130, 1)');
gradientEx03_2.addColorStop(1, 'rgba(148, 0, 211, 1)');

contextEx03_2.fillStyle = gradientEx03_2;
contextEx03_2.rect(0, 0, canvasEx03_2.width, canvasEx03_2.height);
contextEx03_2.fill();

// Desenhando com Padrões
const ex04_2 = document.getElementById('ex_04_2');
let canvasEx04_2 = ex04_2.querySelector('canvas');
let contextEx04_2 = canvasEx04_2.getContext('2d');

const repeatRadio = ex04_2.querySelector('#repeatRadio');
const repeatXRadio = ex04_2.querySelector('#repeatXRadio');
const repeatYRadio = ex04_2.querySelector('#repeatYRadio');
const noRepeatRadio = ex04_2.querySelector('#noRepeatRadio');

let imageEx04_2 = new Image();

function fillCanvasWithPattern(repeatType) {
    let pattern = contextEx04_2.createPattern(imageEx04_2, repeatType);
    contextEx04_2.clearRect(0, 0, canvasEx04_2.width, canvasEx04_2.height);
    contextEx04_2.fillStyle = pattern;
    contextEx04_2.fillRect(0, 0, canvasEx04_2.width, canvasEx04_2.height);
    contextEx04_2.fill();
}

// Funções
repeatRadio.addEventListener('click', () => {
    fillCanvasWithPattern('repeat');
});
repeatXRadio.addEventListener('click', () => {
    fillCanvasWithPattern('repeat-x');
});
repeatYRadio.addEventListener('click', () => {
    fillCanvasWithPattern('repeat-y');
});
noRepeatRadio.addEventListener('click', () => {
    fillCanvasWithPattern('no-repeat');
});

// Inicialização
imageEx04_2.src = '../../images/sprites/running-sprite-sheet.png';
imageEx04_2.onload = () => {
    fillCanvasWithPattern('no-repeat');
};

// Desenhando com Sombras
const ex05_2 = document.getElementById('ex_05_2');
let canvasEx05_2 = ex05_2.querySelector('canvas');
let contextEx05_2 = canvasEx05_2.getContext('2d');
let corSombra = 'rgba(0, 0, 255, 0.7)';

contextEx05_2.shadowColor = corSombra;
contextEx05_2.shadowOffsetX = 4;
contextEx05_2.shadowOffsetY = 4;
contextEx05_2.shadowBlur = 5;

contextEx05_2.strokeStyle = 'black';
contextEx05_2.strokeRect(100, 100, 100, 100);

contextEx05_2.fillStyle = '#d3d3d3';
contextEx05_2.fillRect(300, 100, 100, 100);

// Função para definir os atributos de um possível apagador (porém não possuí a função de apagar)
function setEraserAttributes(){
    contextEx05_2.lineWidth = 3;
    contextEx05_2.shadowColor = 'blue';
    contextEx05_2.shadowOffsetX = -5;
    contextEx05_2.shadowOffsetY = -5;
    contextEx05_2.shadowBlur = 20;
    contextEx05_2.strokeStyle = 'rgba(0, 0, 255, 0.6)';
}

function drawEraser(x, y) {
    contextEx05_2.save();
    setEraserAttributes();

    contextEx05_2.beginPath();
    contextEx05_2.arc(x, y, 60, 0, Math.PI*2, false);
    contextEx05_2.clip(); // Restringe o desenho ao círculo (sombra)
    contextEx05_2.stroke();

    contextEx05_2.restore();
}

ex05_2.addEventListener('click', (event) => {
    const rect = canvasEx05_2.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    drawEraser(x, y);
});

// Traçado e Preenchimento
const ex06_2 = document.getElementById('ex_06_2');
let canvasEx06_2 = ex06_2.querySelector('canvas');
let contextEx06_2 = canvasEx06_2.getContext('2d');

drawGrid(contextEx06_2, '#ccc', 10, 10);

contextEx06_2.font = '48px Helvetica';
contextEx06_2.strokeStyle = 'blue';
contextEx06_2.fillStyle = 'red';
contextEx06_2.lineWidth = 2;

contextEx06_2.strokeText('Stroke', 60, 110);
contextEx06_2.fillText('Fill', 440, 110);
contextEx06_2.strokeText('Stroke and Fill', 650, 110);
contextEx06_2.fillText('Stroke and Fill', 650, 110);

contextEx06_2.lineWidth = '5';
contextEx06_2.beginPath();
contextEx06_2.rect(80, 150, 150, 100);
contextEx06_2.stroke();

contextEx06_2.beginPath();
contextEx06_2.rect(400, 150, 150, 100);
contextEx06_2.fill();

contextEx06_2.beginPath();
contextEx06_2.rect(720, 150, 150, 100);
contextEx06_2.stroke();
contextEx06_2.fill();

contextEx06_2.beginPath();
contextEx06_2.arc(150, 350, 60, 0, Math.PI * 3/2, false);
contextEx06_2.stroke();

contextEx06_2.beginPath();
contextEx06_2.arc(475, 350, 60, 0, Math.PI * 3/2, false);
contextEx06_2.fill();

contextEx06_2.beginPath();
contextEx06_2.arc(800, 350, 60, 0, Math.PI * 3/2, false);
contextEx06_2.stroke();
contextEx06_2.fill();

contextEx06_2.beginPath();
contextEx06_2.arc(150, 500, 60, 0, Math.PI * 3/2, false);
contextEx06_2.closePath();
contextEx06_2.stroke();

contextEx06_2.beginPath();
contextEx06_2.arc(475, 500, 60, 0, Math.PI * 3/2, false);
contextEx06_2.closePath();
contextEx06_2.fill();

contextEx06_2.beginPath();
contextEx06_2.arc(800, 500, 60, 0, Math.PI * 3/2, false);
contextEx06_2.closePath();
contextEx06_2.stroke();
contextEx06_2.fill();

// Caminhos e Subcaminhos
const ex07_2 = document.getElementById('ex_07_2');
let canvasEx07_2 = ex07_2.querySelector('canvas');
let contextEx07_2 = canvasEx07_2.getContext('2d');

contextEx07_2.beginPath();
contextEx07_2.rect(50, 50, 100, 100);
contextEx07_2.stroke();

contextEx07_2.beginPath(); // Ao comentar esta linha, o subcaminho criado será o mesmo e todos os dois quadrados serão preenchidos (redesenha o primeiro retângulo)
contextEx07_2.rect(200, 50, 100, 100);
contextEx07_2.fill();

// Recortes (Usando regra enrolamento diferente de zero)
const ex08_2 = document.getElementById('ex_08_2');
let canvasEx08_2 = ex08_2.querySelector('canvas');
let contextEx08_2 = canvasEx08_2.getContext('2d');

drawGrid(contextEx08_2, 'gray', 10, 10);

function drawTwoArcs(){
    contextEx08_2.beginPath();
    contextEx08_2.arc(300, 190, 150, 0, Math.PI * 2, false); // O último argumento é false para desenhar o arco no sentido horário
    contextEx08_2.arc(300, 190, 100, 0, Math.PI * 2, true); // Como os círculos são desenhados com sentidos diferentes há um corte na área de dentro deles
    contextEx08_2.fill();

    contextEx08_2.shadowColor = undefined;
    contextEx08_2.shadowOffsetX = 0;
    contextEx08_2.shadowOffsetY = 0;
    contextEx08_2.stroke();
}

function drawArcs(){
    contextEx08_2.clearRect(0, 0, canvasEx08_2.width, canvasEx08_2.height);
    drawGrid(contextEx08_2, 'gray', 10, 10);
    contextEx08_2.save();

    contextEx08_2.shadowColor = 'rgba(0, 0, 0, 0.8)';
    contextEx08_2.shadowOffsetX = 12;
    contextEx08_2.shadowOffsetY = 12;
    contextEx08_2.shadowBlur = 15;

    drawTwoArcs();

    contextEx08_2.restore();
}

contextEx08_2.fillStyle = 'rgba(100, 140, 230, 0.5)';
contextEx08_2.strokeStyle = contextEx08_2.fillStyle;
drawArcs();

// Recortes (Outras Formas)
const ex09_2 = document.getElementById('ex_09_2');
let canvasEx09_2 = ex09_2.querySelector('canvas');
let contextEx09_2 = canvasEx09_2.getContext('2d');

function drawOtherForms(){
    contextEx09_2.clearRect(0, 0, canvasEx09_2.width, canvasEx09_2.height);
    drawGrid(contextEx09_2, 'gray', 10, 10);
    contextEx09_2.save();

    contextEx09_2.shadowColor = 'rgba(200, 200, 0, 0.5)';
    contextEx09_2.shadowOffsetX = 12;
    contextEx09_2.shadowOffsetY = 12;
    contextEx09_2.shadowBlur = 15;

    drawCutouts();
    strokeCutoutShapes();
    contextEx09_2.restore();
}

contextEx09_2.fillStyle = 'goldenrod';
drawOtherForms();

function drawCutouts(){
    contextEx09_2.beginPath();
    addOtherRectanglePath(contextEx09_2);
    addRetanglePath();

    addTrianglePath();

    addCirclePath(contextEx09_2);

    contextEx09_2.fill();
}

function addOtherRectanglePath(context){
    context.rect(110, 25, 370, 335);
}

function addRetanglePath(){
    rect(310, 55, 70, 35, true, contextEx09_2);
}

function addTrianglePath(){
    contextEx09_2.moveTo(400, 180);
    contextEx09_2.lineTo(250, 115);
    contextEx09_2.lineTo(200, 180);
    contextEx09_2.closePath();
}

function addCirclePath(context){
    context.arc(300, 250, 40, 0, Math.PI * 2, true);
}



// Função para desenhar uma grade
function drawGrid(context, color, stepx, stepy) {
    context.strokeStyle = color;
    context.lineWidth = 0.5;

    for (var i = stepx +  0.5; i < context.canvas.width; i += stepx) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }
}

// Função para desenhar um rect passando o sentido de desenho
function rect(x, y, w, h, direction, context){
    if(direction){
        context.moveTo(x, y);
        context.lineTo(x, y + h);
        context.lineTo(x + w, y + h);
        context.lineTo(x + w, y);
    } else {
        context.moveTo(x, y);
        context.lineTo(x + w, y);
        context.lineTo(x + w, y + h);
        context.lineTo(x, y);
    }
    context.closePath();
}