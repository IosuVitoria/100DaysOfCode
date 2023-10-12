import { ThemeProvider } from "@mui/material"
import Calculator from "./components/Calculator/Calculator"
import theme from "./components/Themeprovider/Themeprovider"
import "./App.css"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
          <Calculator />
      </div>
   </ThemeProvider>
  )
}

export default App
