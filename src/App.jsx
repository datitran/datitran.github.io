import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ZinePage from './pages/ZinePage';
import Imprint from './components/Imprint/Imprint';
import Privacy from './components/Privacy/Privacy';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={<ZinePage />} />
      </Routes>
    </Router>
    <ThemeSwitcher />
  </div>
);

export default App;
