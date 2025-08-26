// Part 1: Variables and Conditionals
let userName = "Harrison Mwai";
let userAge = 21;
let isActive = true;

const variableDisplay = document.getElementById('variable-display');
const setVariableBtn = document.getElementById('set-variable-btn');
const checkConditionBtn = document.getElementById('check-condition-btn');

// Show variables when button is clicked
setVariableBtn.addEventListener('click', function() {
    variableDisplay.textContent = `Name: ${userName}, Age: ${userAge}, Active: ${isActive}`;
});

// Check condition based on age
checkConditionBtn.addEventListener('click', function() {
    if (userAge >= 18) {
        alert("You are an adult");
    } else {
        alert("You are a minor");
    }
});

// Part 2: Functions
const numberInput = document.getElementById('number-input');
const calculateBtn = document.getElementById('calculate-btn');
const greetBtn = document.getElementById('greet-btn');
const functionResult = document.getElementById('function-result');

// Function to calculate square
function calculateSquare(num) {
    return num * num;
}

// Function to show greeting
function showGreeting() {
    return `Hello, ${userName}! Welcome to JavaScript. I'm learning software development!`;
}

// Event listeners for functions
calculateBtn.addEventListener('click', function() {
    const num = Number(numberInput.value);
    if (num) {
        const result = calculateSquare(num);
        functionResult.textContent = `Square of ${num} is ${result}`;
    } else {
        functionResult.textContent = "Please enter a valid number";
    }
});

greetBtn.addEventListener('click', function() {
    functionResult.textContent = showGreeting();
});

// Part 3: Loops
const forLoopBtn = document.getElementById('for-loop-btn');
const whileLoopBtn = document.getElementById('while-loop-btn');
const loopOutput = document.getElementById('loop-output');

// For loop example
forLoopBtn.addEventListener('click', function() {
    loopOutput.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const p = document.createElement('p');
        p.textContent = `Count: ${i}`;
        loopOutput.appendChild(p);
    }
});

// While loop example
whileLoopBtn.addEventListener('click', function() {
    loopOutput.innerHTML = "";
    let count = 1;
    while (count <= 3) {
        const p = document.createElement('p');
        p.textContent = `While loop count: ${count}`;
        loopOutput.appendChild(p);
        count++;
    }
});

// Part 4: DOM Manipulation
const addElementBtn = document.getElementById('add-element-btn');
const changeColorBtn = document.getElementById('change-color-btn');
const toggleBtn = document.getElementById('toggle-btn');
const domArea = document.getElementById('dom-area');

let elementCount = 1;

// Add new element
addElementBtn.addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = `New element ${elementCount}`;
    newElement.style.background = '#e0e0e0';
    newElement.style.padding = '5px';
    newElement.style.margin = '5px 0';
    domArea.appendChild(newElement);
    elementCount++;
});

// Change background color
changeColorBtn.addEventListener('click', function() {
    const colors = ['#ffcccc', '#ccffcc', '#ccccff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    domArea.style.background = randomColor;
});

// Toggle visibility
toggleBtn.addEventListener('click', function() {
    if (domArea.style.display === 'none') {
        domArea.style.display = 'block';
        toggleBtn.textContent = 'Hide Content';
    } else {
        domArea.style.display = 'none';
        toggleBtn.textContent = 'Show Content';
    }
});
