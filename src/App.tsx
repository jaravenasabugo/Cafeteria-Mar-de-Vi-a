import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica_privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
