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