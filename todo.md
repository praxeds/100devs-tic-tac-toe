<h1>Files to do</h1>
<h2>Board.js > change it to gameboard.js not to make it identical to Frankrose's</h2>

* probably creating the spaces and rendering it onto the DOM wouldn't be necessary because our project already has both the board and its respective spaces in the html
* findSpace method to target each individual square on the board

<h2>Space.js > change it to square.js because it's a bit easier to understand what it's referring to</h2>

* checks if space is currently taken by a player or empty
* gets marked with player's token once clicked on

<h2>Token.js</h2>

<h2>Player.js</h2>

* adds name to player according to what user writes in the name input 
* stores what token player has

<h2>Computer.js</h2>

* extension of class Player
* makeMove method to randomly choose a free space on the board to put a token on

<h2>Game.js</h2>

* determines whose turn is it
* switches turn once players makes a move

<h2>main.js</h2>

* should handle event listeners (dark mode toggle, back to menu button, etc)
* user cannot click on already occupied squares
* available squares are highlighted with player's symbol when moused over


<h1>Game flow goes:</h1>

<ol>
    User clicks on person vs person button</li>
    a popup div will appear asking users to write their names</li>
    users click on start game button</li>
    popup div and #startGameSection will disappear</li>
    #gameplaySection will appear with user's names in place of Player 1 and Player 2</li>
    game ends with a popup div saying who won or declaring a tie</li>
</ol>

* if user clicks on "play again", the game will start again with the same settings (players' names)

* if user clicks on "back to menu", #gameplaySection will disappear and #startGameSection will appear