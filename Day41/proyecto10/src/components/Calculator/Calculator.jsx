import  { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import "./calculator.css";  // Importa el archivo de estilos
import { spacing } from '@mui/system';


const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

    
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator-container">
      <TextField
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input__field"  
        margin={'normal'}
      />
      <TextField
        variant="outlined"
        fullWidth
        value={result}
        disabled
        className="result__text modifier" 
        marginBottom = {2}
        
      />
      <Grid container spacing={1} className="button-grid">  
        {buttons.map((button) => (
          <Grid item key={button} xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleButtonClick(button)}
              className="button"
              color='primary'
              
            >
              {button}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Calculator;
