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

// LINHAS
const ex10_2 = document.getElementById('ex_10_2');
let canvasEx10_2 = ex10_2.querySelector('canvas');
let contextEx10_2 = canvasEx10_2.getContext('2d');

contextEx10_2.lineWidth = 1;
contextEx10_2.beginPath();
contextEx10_2.moveTo(50, 10); // Move o cursor para a coordenada (50, 10)
contextEx10_2.lineTo(450, 10); // Desenha uma linha reta do ponto atual até as coordenadas (450, 10)
contextEx10_2.stroke(); // Faz o traçado linear

contextEx10_2.beginPath();
contextEx10_2.moveTo(50.5, 50.5);
contextEx10_2.lineTo(450.5, 50.5);
contextEx10_2.stroke();

drawGrid(contextEx10_2, '#ccc', 10, 10);
// EIXOS DE DESENHO
const AXIS_MARGIN = 40;
const AXIS_ORIGIN = {x: AXIS_MARGIN, y: canvasEx10_2.height - AXIS_MARGIN};
const AXIS_TOP = AXIS_MARGIN;
const AXIS_RIGHT = canvasEx10_2.width - AXIS_MARGIN;
const HORIZONTAL_TICK_SPACING = 10;
const VERTICAL_TICK_SPACING = 10;
const AXIS_WIDTH = AXIS_RIGHT - AXIS_ORIGIN.x;
const AXIS_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP;
const NUM_VERTICAL_TICKS = AXIS_HEIGHT / VERTICAL_TICK_SPACING;
const NUM_HORIZONTAL_TICKS = AXIS_WIDTH / HORIZONTAL_TICK_SPACING;
const TICK_WIDTH = 10;
const TICKS_LINEWIDTH = 0.5;
const TICKS_COLOR = 'navy';
const AXIS_LINEWIDTH = 1.0;
const AXIS_COLOR = 'blue';

function drawAxis(context) {
    context.save();
    context.strokeStyle = AXIS_COLOR;
    context.lineWidth = AXIS_LINEWIDTH;
    
    drawHorizontalAxis(context);
    drawVerticalAxis(context);

    context.lineWidth = 0.5;
    context.lineWidth = TICKS_LINEWIDTH;
    context.strokeStyle = TICKS_COLOR;

    drawVerticalAxisTicks(context);
    drawHorizontalAxisTicks(context);

    context.restore();
}

function drawHorizontalAxis(context) {
    context.beginPath();
    context.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
    context.lineTo(AXIS_RIGHT, AXIS_ORIGIN.y);
    context.stroke();
}

function drawVerticalAxis(context) {
    context.beginPath();
    context.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y);
    context.lineTo(AXIS_ORIGIN.x, AXIS_TOP);
    context.stroke();
}

function drawVerticalAxisTicks(context) {
    let deltaX;
    for(let i = 0; i <= NUM_VERTICAL_TICKS; i++) {
        context.beginPath();
        if(i % 5 === 0) {
            deltaX = TICK_WIDTH;
        } else {
            deltaX = TICK_WIDTH / 2;
        }
            context.moveTo(AXIS_ORIGIN.x - deltaX, AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);
            context.lineTo(AXIS_ORIGIN.x + deltaX, AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);
            context.stroke();
    }
}

function drawHorizontalAxisTicks(context) {
    let deltaY;
    for(let i = 0; i <= NUM_HORIZONTAL_TICKS; i++) {
        context.beginPath();
        if(i % 5 === 0) {
            deltaY = TICK_WIDTH;
        } else {
            deltaY = TICK_WIDTH / 2;
        }
        context.moveTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING, AXIS_ORIGIN.y - deltaY);
        context.lineTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING, AXIS_ORIGIN.y + deltaY);
        context.stroke();
    }
}

drawAxis(contextEx10_2);

// LINHAS DE ELÁSTICO
const ex11_2 = document.getElementById('ex_11_2');
let canvasEx11_2 = ex11_2.querySelector('canvas');
let contextEx11_2 = canvasEx11_2.getContext('2d', { willReadFrequently: true });
const eraseAllButton = ex11_2.querySelector('#eraseAllButton');
const guidewireCheckbox = ex11_2.querySelector('#guidewireCheckbox');
const strokeStyleColor = ex11_2.querySelector('#strokeStyleColor');
let drawingSurfaceImageData;
let mousedown = {};
let rubberbandRect = {};
let dragging = false;
let guidewire = guidewireCheckbox.checked;

//Funções
function saveDrawingSurface(){
    drawingSurfaceImageData = contextEx11_2.getImageData(0, 0, canvasEx11_2.width, canvasEx11_2.height);
}

function restoreDrawingSurface() {
    contextEx11_2.putImageData(drawingSurfaceImageData, 0, 0);
}

function updateRubberbandRectangle(loc){
    rubberbandRect.width = Math.abs(loc.x - mousedown.x);
    rubberbandRect.height = Math.abs(loc.y - mousedown.y);

    if(loc.x > mousedown.x) {
        rubberbandRect.left = mousedown.x;
    }
    else {
        rubberbandRect.left = loc.x;
    }
    if(loc.y > mousedown.y) {
        rubberbandRect.top = mousedown.y;
    }
    else {
        rubberbandRect.top = loc.y;
    }
}

function drawRubberbandShape(loc){
    contextEx11_2.beginPath();
    contextEx11_2.moveTo(mousedown.x, mousedown.y);
    contextEx11_2.lineTo(loc.x, loc.y);
    contextEx11_2.strokeStyle = strokeStyleColor.value;
    contextEx11_2.lineWidth = 2.5;
    // contextEx11_2.setLineDash([4, 4, 10, 2]); // Define o estilo de tracejado
    contextEx11_2.stroke();
}

function updateRubberband(loc){
    updateRubberbandRectangle(loc);
    drawRubberbandShape(loc);
}

function drawHorizontalLine(y){
    contextEx11_2.beginPath();
    contextEx11_2.moveTo(0, y + 0.5);
    contextEx11_2.lineTo(contextEx11_2.canvas.width, y + 0.5);
    contextEx11_2.stroke();
}

function drawVerticalLine(x){
    contextEx11_2.beginPath();
    contextEx11_2.moveTo(x + 0.5, 0);
    contextEx11_2.lineTo(x + 0.5, contextEx11_2.canvas.height);
    contextEx11_2.stroke();
}

function drawGuidewire(x, y) {
    contextEx11_2.save();
    contextEx11_2.strokeStyle = 'rgba(0, 0, 230, 1)';
    contextEx11_2.lineWidth = 0.5;
    drawVerticalLine(x);
    drawHorizontalLine(y);
    contextEx11_2.restore();
}

//Eventos
canvasEx11_2.addEventListener('mousedown', (event) => {
    let loc = windowToCanvas(canvasEx11_2, event.clientX, event.clientY);
    event.preventDefault();
    saveDrawingSurface();
    mousedown.x = loc.x;
    mousedown.y = loc.y;
    dragging = true;
});

canvasEx11_2.addEventListener('mousemove', (event) => {
    let loc;
    if(dragging) {
        event.preventDefault();
        loc = windowToCanvas(canvasEx11_2, event.clientX, event.clientY);
        restoreDrawingSurface();
        updateRubberband(loc);
        if(guidewire) {
            drawGuidewire(loc.x, loc.y);
        }
    }
});

canvasEx11_2.addEventListener('mouseup', (event) => {
    loc = windowToCanvas(canvasEx11_2, event.clientX, event.clientY);
    restoreDrawingSurface();
    updateRubberband(loc);
    dragging = false;
});

eraseAllButton.addEventListener('click', () => {
    contextEx11_2.clearRect(0, 0, canvasEx11_2.width, canvasEx11_2.height);
    drawGrid(contextEx11_2, '#ccc', 10, 10);
    saveDrawingSurface();
});

strokeStyleColor.addEventListener('change', (event) => {
    contextEx11_2.strokeStyle = event.target.value;
});

guidewireCheckbox.addEventListener('change', (event) => {
    guidewire = event.target.checked;
});

drawGrid(contextEx11_2, '#ccc', 10, 10);

// Desenhando ARCOS E CÍRCULOS
const ex12_2 = document.getElementById('ex_12_2');
let canvasEx12_2 = ex12_2.querySelector('canvas');
let contextEx12_2 = canvasEx12_2.getContext('2d');

contextEx12_2.beginPath();
contextEx12_2.arc(canvasEx12_2.width / 2, canvasEx12_2.height / 2, 80, Math.PI / 4, Math.PI, false);
contextEx12_2.lineWidth = 10;
contextEx12_2.strokeStyle = 'blue';
contextEx12_2.stroke();

const size = 100;
const radius = 40;

contextEx12_2.beginPath();
contextEx12_2.moveTo(50 + radius, 50); // Começa no canto superior esquerdo, com raio de arredondamento

// Desenha os 4 lados do quadrado com cantos arredondados usando arcTo()
contextEx12_2.arcTo(50 + size, 50, 50 + size, 50 + size, radius);  // Canto superior direito
contextEx12_2.arcTo(50 + size, 50 + size, 50, 50 + size, radius);  // Canto inferior direito
contextEx12_2.arcTo(50, 50 + size, 50, 50, radius);  // Canto inferior esquerdo
contextEx12_2.arcTo(50, 50, 50 + radius, 50, radius);  // Canto superior esquerdo

contextEx12_2.lineWidth = 10;
contextEx12_2.fillStyle = 'rgba(0, 255, 0, 0.5)';
contextEx12_2.fill();

function drawCircle(x, y, context) {
    let radius = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
    context.lineWidth = 10;
    context.fill();
}

ex12_2.addEventListener('click', (event) => {
    const loc = windowToCanvas(canvasEx12_2, event.clientX, event.clientY);
    drawCircle(loc.x, loc.y, contextEx12_2);
});

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

// Função para usar o contexto canvas ao invés de usar o objeto window
function windowToCanvas(canvas, x, y) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: x - rect.left * (canvas.width / rect.width),
        y: y - rect.top * (canvas.height / rect.height)
    };
}