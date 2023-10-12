import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',  
    },
    secondary: {
      main: '#212121',  
    },
    error: {
      main: '#f44336',  
    },
    warning: {
      main: '#ff9800',  
    },
    info: {
      main: '#2196f3',  
    },
    success: {
      main: '#4caf50',  
    },
    text: {
      primary: '#212121',  
      secondary: '#757575',  
    },
    background: {
      default: '#f9f9f9', 
      paper: '#ffffff',  
    },
  },
});

export default theme;
