import { ThemeProvider, createTheme } from '@mui/material';
import Homepage from './Pages/Homepage/Homepage';
import MakiseKirisuPage from './Pages/MakiseKirisuPage/MakiseKirisuPage';
import {Routes, Route, Link} from "react-router-dom";
import ArknightsPage from './Pages/ArknightInfoPage/ArknightsPage';

const theme = createTheme({
  palette: {
    
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/makise-kirisu" element={<MakiseKirisuPage />} />
        <Route path="/arknights" element={<ArknightsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
