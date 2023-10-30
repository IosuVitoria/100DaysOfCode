import  { useState } from 'react';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import "./tictactoe.css"


const TresEnRaya = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningSquares, setWinningSquares] = useState([]);
  const [gameHistory, setGameHistory] = useState([]);
  const [gameCount, setGameCount] = useState(1);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const boardCopy = [...board];
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);

    const newWinner = calculateWinner(boardCopy);
    if (newWinner) {
      setWinner(newWinner);
      setGameHistory([...gameHistory, { winner: newWinner, gameCount }]);
      setWinningSquares(findWinningSquares(boardCopy));
    }

    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <Button
        variant="contained"
        onClick={() => handleClick(index)}
        sx={{
          width: 70,
          height: 70,
          fontSize: '1.5rem',
          borderRadius: 0,
          fontWeight: 'bold',
          backgroundColor: winningSquares.includes(index) ? 'gold' : 'inherit',
        }}
      >
        {board[index]}
      </Button>
    );
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningSquares([]);
    setGameCount(gameCount + 1);
  };

  const clearHistory = () => {
    setGameHistory([]);
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
        <Grid item>
          <Paper sx={{ padding: 2, width: 350, backgroundColor: 'rgba(117, 102, 200, 0.7)', borderRadius:"15px", boxShadow: " 0 0 3px 4px (117, 102, 200, 0.7)" }}>
            <Typography variant="h6" sx={{ color: winner ? 'green' : 'blue', fontWeight: 'bold' }}>
              {winner ? `Ganador: ${winner}` : `Siguiente jugador: ${xIsNext ? 'X' : 'O'}`}
            </Typography>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {board.map((square, index) => (
                <div key={index}>{renderSquare(index)}</div>
              ))}
            </div>
            <Button variant="contained" onClick={restartGame} sx={{ marginTop: 2, background: 'green', color: 'white' }}>
              Reiniciar
            </Button>
            <Button variant="contained" onClick={clearHistory} sx={{ marginTop: 2, background: 'red', color: 'white' }}>
              Borrar Historial
            </Button>
            <TableContainer component={Paper} sx={{ marginTop: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Partida</TableCell>
                    <TableCell>Ganador</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gameHistory.map((game, index) => (
                    <TableRow key={index}>
                      <TableCell>{game.gameCount}</TableCell>
                      <TableCell>{game.winner}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TresEnRaya;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function findWinningSquares(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }

  return [];
}

