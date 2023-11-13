# Chess Code Test

This app uses vite and react to implement a chess game experience. Board is [Chessboard.jsx](https://chessboardjsx.com/), logic is [chess.js](https://github.com/jhlywa/chess.js).

When the page loads, the player (white) makes a move, and then the computer (black) makes a random move.

Illegal moves are blocked.

# Running the app

1. Clone this repo.
2. Run `yarn`
3. run `yarn dev`

# How to play

1. Move a white piece.
2. Wait for the computer to move a black piece.
3. Note: The computer makes bad moves.

# Test Plan

1. Validate that invalid moves are not allowed, and the user
2. Validate that nav turns yellow while
   computer move is being selected with correct text.

# Next steps

1. Replace the alert for bad moves with something more subtle
