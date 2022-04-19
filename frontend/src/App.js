import { ThemeProvider, createTheme } from '@mui/material';
import Homepage from './Pages/Homepage/Homepage';


const theme = createTheme({
  palette: {
    
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
