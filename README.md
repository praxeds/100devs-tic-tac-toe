# 100devs tic-tac-toe Group Project  


### Roadmap    

#### index.html    
```
[X] Will handle the structure of the gameboard
[X] Will have 4 sections based on the mockups by Ana:
    ->1st stage gameboard
      -triggered on page load 
      -intro gameboard 
      -displays the game title & player modes
    ->2nd stage gameboard
      -triggered when a player chooses an opponent
      -displays an input player name notification window
      -notification window has an input field for the player(s) name
       and a start button
    ->3rd stage gameboard
      -triggered when a player clicks start
      -displays an empty gameboard with player name(s) below X and O
      -random player starts at this point
    ->4th stage gameboard
      -triggered when a player wins or draws
      -gameboard is full of X and O at this point
      -displays notification window with the winner or draw
      -notification window also has a 'play again' & 'back to menu'
[X] Will have a night/day mode button   
```

#### main.js
```
[X] Will connect objects to the DOM (majority of the event listeners etc)
[X] Will initiate game instances depending on player opponent choice
[X] Will handle swithcing between different gameboard states
[X] Will control dark/light mode
[X] Will control mouse hover actions

```
#### gameBoard.js
```
[X] The gameboard is made up of 9 indidivual cells/squares
[X] No need to render the board since index.html handles the structure
    ->target each individual cell/square on the gameboard

```
#### boardCell.js
```
[X] Will connect the DOM to individual cells
[X] Each cell will hold a reference to a token
[X] Will check to see if a player "owns" a cell and returns the "owner"
    ->will return null if no token is associated otherwise return "owner"
    ->will mark a cell as occupied
```
#### playerToken.js
```
[X] Will keep track of the token owner (not 100% sure)
```
#### player.js
```
[X] 
```

#### gameLogic.js
```
[X] Will initialize the game once the player clicks start
[X] Will create the players once the player(s) enter their name(s)
[X] Will monitor game play state
    ->Will determine whose turn it is; player or computer
    ->Will keep track of players turns.
    ->Will switch players after each play/click.
    ->Will actively check for a 'draw' or a 'win' and update game state
    ->Will display game results in the DOM. 'draw' or 'win'
[X] Will handle various board game-play effects
    ->Will toggle player token during hover depending on game state
    ->Will update and mark gameboard cells
```

### File & Folder Structure   
```
|--README.md  
|--index.html  
|----assets  
    |-fonts  
    |-mockups  
|----js  
    |-boardCell.js   
    |-gameBoard.js   
    |-gameLogic.js   
    |-main.js   
    |-player.js   
    |-playerToken.js   
|----stylesheet   
    |-mediaqueries.css   
    |-mediaqueries.scss   
    |-mixins.css   
    |-mixins.scss   
    |-normalize.css   
    |-stylesheet.css   
    |-stylesheet.scss   
```

   
