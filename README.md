# Simple Maze Game in JavaScript (Console-Based)

This is a very basic text-based maze game written in JavaScript that runs in the console. It prompts the user for their name and then guides them through a simple choice in a maze.

## How to Play

1.  **Save the code:** Save the provided JavaScript code as a `.js` file (e.g., `maze_game.js`).
2.  **Install `prompt-sync`:** If you don't have it already, you need to install the `prompt-sync` module. Open your terminal or command prompt and run:
    ```bash
    npm install prompt-sync
    ```
3.  **Run the game:** Navigate to the directory where you saved the file in your terminal and run the game using Node.js:
    ```bash
    node maze_game.js
    ```
4.  **Follow the prompts:** The game will ask for your name and then present you with choices. Type your answers (`yes`/`no`, `left`/`right`) and press Enter to proceed.

## Game Flow

1.  **Name Input:** The game first asks for your name. It validates that the input is not empty and contains only letters.
2.  **Play Confirmation:** It then asks if you want to play the game (`yes`/`no`).
3.  **Maze Choice:** If you choose to play, you enter a maze and are presented with a choice: go `left` or `right`.
4.  **Left Path:**
    * If you choose `left`, you encounter a bridge and are asked if you want to `cross` it (`yes`/`no`).
        * Choosing `yes` leads to the bridge breaking, and you lose.
        * Choosing `no` is the correct path, and you win.
5.  **Right Path:**
    * If you choose `right`, you fall off a cliff and lose.
6.  **Ending:** The game ends with a message indicating whether you won or lost, or a thank you message if you chose not to play.

## Code Explanation

* `const prompt = require("prompt-sync")()`: This line imports the `prompt-sync` module, which allows the program to take input from the user in the console.
* **Name Validation:** The first `while` loop continuously prompts for the user's name until a valid input (non-empty and containing only letters) is provided.
* **Play Confirmation Validation:** The second `while` loop asks if the user wants to play and validates the input to be either "yes" (or "y") or "no" (or "n").
* **Game Logic (if `shouldWePlay` is yes):**
    * The main game logic is inside another `while` loop that continues until the game ends (win or lose).
    * It prompts the user to choose `left` or `right`.
    * **Left Path Logic:** If the user chooses `left`, a nested `while` loop asks about crossing the bridge.
    * **Right Path Logic:** If the user chooses `right`, the game ends with a loss.
    * Input validation is included for both the `left`/`right` and `cross` choices.
* **No Play Scenario:** If the user chooses not to play, a thank you message is displayed.

## Potential Improvements

This is a very basic game and can be expanded in many ways, such as:

* Adding more complex maze structures with multiple choices.
* Introducing items or obstacles.
* Keeping track of scores or lives.
* Implementing different win/lose conditions.
* Improving the user interface (though this is a console-based game).
