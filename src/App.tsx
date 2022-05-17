import { ThemeProvider, createTheme } from '@mui/material';
import Homepage from './Pages/Homepage/Homepage';
import MakiseKirisuPage from './Pages/MakiseKirisuPage/MakiseKirisuPage';
import {Routes, Route} from "react-router-dom";
import ArknightsPage from './Pages/ArknightInfoPage/ArknightsPage';
import TechnicalDocPage from './Pages/TechnicalDocPage/TechnicalDocPage';
import AnimeSurveyPage from './Pages/AnimeSurveyPage/AnimeSurveyPage';
import colors from "./Styles/_color.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.mainColor
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/makise-kirisu" element={<MakiseKirisuPage />} />
        <Route path="/arknights" element={<ArknightsPage />} />
        <Route path="/techdocs" element={<TechnicalDocPage />} />
        <Route path="/animesurvey" element={<AnimeSurveyPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
