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
const vsComputerButton = document.querySelector('#vs-computer');
const vsFriendButton = document.querySelector('#vs-friend');
const vsCompStartButton = document.querySelector('#vsComp-start-button');
const vsHumanStartButton = document.querySelector('#vsHuman-start-button');
const vsCompPopup = document.querySelector('#humanVsComputerPopupMessage');
const vsFriendPopup = document.querySelector('#humanVsHumanPopupMessage');
const startGameSection = document.getElementById('startGameSection');
const board = document.getElementById('gameplaySection');
const boardCells = document.getElementById('gameboard');
let vsComputer;
let game;

vsCompPopup.style.display = 'none';
vsFriendPopup.style.display = 'none';
board.style.display = 'none';

vsComputerButton.addEventListener('click', () => {
  //hideVsButtons()
  showStartActions()
  hideVsFriendPopup()
  vsComputer = true
})

vsFriendButton.addEventListener('click', () => {
  //hideVsButtons()
  showStartActions()
  hideVsComputerPopup()
  vsComputer = false
})

vsCompStartButton.addEventListener('click', () => {
  startGameSection.style.display = 'none';
  vsFriendPopup.style.display = 'none';
  vsCompPopup.style.display = 'none';
  board.style.display = 'block';
  handleGameInitClass()
  game.startGame(); //function in gameLogic.js
})

vsHumanStartButton.addEventListener('click', () => {
  startGameSection.style.display = 'none';
  vsFriendPopup.style.display = 'none';
  vsCompPopup.style.display = 'none';
  board.style.display = 'block';
  handleGameInitClass()
  game.startGame(); //function in gameLogic.js
})

boardCells.addEventListener("click", (event) => {
  game.handleClick(event);
});

boardCells.addEventListener("mouseover", (event) => {
  game.handleMouseOver(event);
});

boardCells.addEventListener("mouseout", (event) => {
  game.handleMouseOut(event);
});


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
    gmae = new Game()
  
  }
}

/**
 * Hides the "Play vs Computer" and "Play vs Friend" Buttons when clicked
 * Also hides the opposite popup from the other
 */
function hideVsButtons(){
  vsFriendButton.style.display = 'none';
  vsComputerButton.style.display = 'none';
}

function hideVsFriendPopup(){
  vsFriendPopup.style.display = 'none';
}

function hideVsComputerPopup(){
  vsCompPopup.style.display = 'none';
}


/**
 * Displays the player name input fields and the start game button
 */
 function showStartActions(){
  vsCompPopup.style.display = 'block';
  vsFriendPopup.style.display = 'block';
  vsCompStartButton.style.display = 'inline-block';
  vsHumanStartButton.style.display = 'inline-block';
}