import './App.css'
import Container from "./components/Container/Container"
import  ThemeProvider  from "@mui/material/styles/ThemeProvider"
import theme from "./components/ThemeProvider/ThemeProvider"
import Explanation from './components/Explanation/Explanation'

function App() {


  return (
    <div>
      <ThemeProvider theme = {theme}>
          <Explanation />
          <Container />
      </ThemeProvider>
    </div>
  )
}

export default App
