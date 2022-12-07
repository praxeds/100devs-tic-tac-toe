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

vsComputerButton.addEventListener('click', () => {
  hideVsButtons()
  document.querySelector('#player-2-name').style.display = 'none'
  document.querySelector('label[for="player-2-name"]').style.display = 'none'
  showStartActions()
  vsComputer = true
})

vsFriendButton.addEventListener('click', () => {
  hideVsButtons()
  showStartActions()
  vsComputer = false
})




//! Functions /////////////////////////////////////////////////////
const toggleClass = (element, className) => {
    element.classList.toggle(className)
}

/**
 * Hides the "Play vs Computer" and "Play vs Friend" Buttons
 */
function hideVsButtons(){
  vsComputerButton.style.display = 'none';
  vsFriendButton.style.display = 'none';
}

