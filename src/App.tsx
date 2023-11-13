import React, { useState } from "react";
import "./App.css";
import { Chess } from 'chess.js'
import { ShortMove, ChessInstance} from '../node_modules/@types/chess.js';
import Chessboard from "chessboardjsx";

const App: React.FC = () => {
  const [chess] = useState<ChessInstance>(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );

  const [fen, setFen] = useState(chess.fen());
  const [isPlayerMove, setIsPlayerMove] = useState(true);

  const handleMove = (move: ShortMove) => {
    try {
      if (chess.move(move)) {
        setIsPlayerMove(false)
        setTimeout(() => {
          const moves = chess.moves();
          // Lines 33-28: Computer random move.
          if (moves.length > 0) {
            const computerMove = moves[Math.floor(Math.random() * moves.length)];
            chess.move(computerMove);
            setFen(chess.fen());
            setIsPlayerMove(true)
          }
        }, 2000);
        setFen(chess.fen());
      }
    } catch(e) {
        if(isPlayerMove) {
          setIsPlayerMove(true);
        }
        alert('Invalid Move!');
        console.error(e);
    }
  };

  return (
    <>
    <div className={`navBar ${!isPlayerMove ? 'thinking' : null}`}>{isPlayerMove ? 'Your Turn' : 'Thinking...'}</div>

    <div className="board">
      <Chessboard
        width={400}
        position={fen}
        darkSquareStyle={{background: '#00a856'}}
        lightSquareStyle={{background: '#fff'}}
        // onDrop prop tracks everytime a piece is moved.
        // The rest is handled in the the handleMove function.
        onDrop={(move) =>
          handleMove({
            from: move.sourceSquare,
            to: move.targetSquare,
            // This promotion attribute changes pawns to a queen if they reach the other side of the board.
            promotion: "q",
          })
        }
      />
    </div>
    </>
  );
};

export default App;