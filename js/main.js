//! Dark Mode Event ///////////////////////////////////////////////
const darkModeToggleBtn = document.querySelector('#darkModeToggle')
darkModeToggleBtn.addEventListener('click', () => {
    //the circle that moves when the toggle is clicked
    const toggleCircle = document.querySelector('#toggleCircle')
    //sunny icon
    const sunnyIcon = document.querySelector('ion-icon[name="sunny"]')
    //moon icon
    const moonIcon = document.querySelector('ion-icon[name="moon"]')
    //all elements in the page that contains the class 'lightBackground'
    const lightBackgroundEl = document.querySelectorAll('.lightBackground')
    //all elements in the page that contains the class 'lightText'
    const lightTextEl = document.querySelectorAll('.lightText')
    //all elements in the page that contains the class 'lightBorder'
    const lightBorderEl = document.querySelectorAll('.lightBorder')
    //all elements in the page that contains the class 'darkBackground'
    const darkBackgroundEl = document.querySelectorAll('.darkBackground')
    //all elements in the page that contains the class 'darkText'
    const darkTextEl = document.querySelectorAll('.darkText')
    //all elements in the page that contains the class 'darkBorder'
    const darkBorderEl = document.querySelectorAll('.darkBorder')

    for (const element of lightBackgroundEl) {
        toggleClass(element, 'darkBackground')
        toggleClass(element, 'lightBackground')
    }
    for (const element of darkBackgroundEl) {
        toggleClass(element, 'darkBackground')
        toggleClass(element, 'lightBackground')
    }
    for (const element of lightTextEl) {
        toggleClass(element, 'darkText')
        toggleClass(element, 'lightText')
    }
    for (const element of darkTextEl) {
        toggleClass(element, 'darkText')
        toggleClass(element, 'lightText')
    }
    for (const element of lightBorderEl) {
        toggleClass(element, 'darkBorder')
        toggleClass(element, 'lightBorder')
    }
    for (const element of darkBorderEl) {
        toggleClass(element, 'darkBorder')
        toggleClass(element, 'lightBorder')
    }
    toggleClass(toggleCircle, 'darkMode')
    toggleClass(toggleCircle, 'lightMode')
    toggleClass(sunnyIcon, 'noDisplay')
    toggleClass(moonIcon, 'noDisplay')
})


/**
 * 
 * Connecting to the DOM
 */
const backBtn = document.querySelector('#backBtn');

const vsComputerBtn = document.querySelector('button#vsComputer');
const vsComputerPopup = document.querySelector('#humanVsComputerPopupMessage');
const vsComputerStartButton = document.querySelector('#humanVsComputerPopupMessage button');


const vsHumanBtn = document.querySelector('button#vsHuman');
const vsHumanPopup = document.querySelector('#humanVsHumanPopupMessage');
const vsHumanStartButton = document.querySelector('#humanVsHumanPopupMessage button');


const startGameSection = document.getElementById('startGameSection');
const gameplaySection = document.getElementById('gameplaySection');
const gameboard = document.getElementById('gameboard');
const boardCells = document.querySelectorAll('.boardCell');

const gameOverPopup = document.getElementById('gameoverPopupMessage');
let vsComputer;
let game;


vsComputerBtn.addEventListener('click', () => {
  //hideVsButtons()
  vsComputer = true
  vsHumanPopup.classList.add('noDisplay')
  toggleClass(vsComputerPopup, 'noDisplay')
})
vsComputerStartButton.addEventListener('click', () => {
  toggleClass(backBtn, 'transparent')
  toggleClass(vsComputerPopup, 'noDisplay')
  toggleClass(startGameSection, 'noDisplay')
  toggleClass(gameplaySection, 'noDisplay')
  handleGameInitClass()
  game.startGame(); //function in gameLogic.js
})


vsHumanBtn.addEventListener('click', () => {
  //hideVsButtons()
  vsComputer = true
  vsComputerPopup.classList.add('noDisplay')
  toggleClass(vsHumanPopup, 'noDisplay')
})
vsHumanStartButton.addEventListener('click', () => {
  toggleClass(backBtn, 'transparent')
  toggleClass(vsHumanPopup, 'noDisplay')
  toggleClass(startGameSection, 'noDisplay')
  toggleClass(gameplaySection, 'noDisplay')
  handleGameInitClass()
  game.startGame(); //function in gameLogic.js
})

for (const boardCell of boardCells) {
  boardCell.addEventListener("click", (event) => {
    game.handleClick(event);
  });
  
  boardCell.addEventListener("mouseover", (event) => {
    game.handleMouseOver(event);
  });
  
  boardCell.addEventListener("mouseout", (event) => {
    game.handleMouseOut(event);
  });   
}

backBtn.addEventListener('click', () => {
  if (startGameSection.classList.contains('noDisplay')) {
    toggleClass(backBtn, 'transparent')
    toggleClass(startGameSection, 'noDisplay')
    toggleClass(gameplaySection, 'noDisplay')
    game.resetGame()
  } else return
})

//! Functions /////////////////////////////////////////////////////
const toggleClass = (element, className) => {
    element.classList.toggle(className)
}
/**
 * Initiates instance of the game. it passes a boolean to the game constructor
 * to determine if the player chose to play vs the computer or vs a human
 */
 function handleGameInitClass(){
  if(vsComputer){
    game = new Game(vsComputer)
  } else {
    game = new Game()
  }
}