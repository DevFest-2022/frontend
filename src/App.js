import React from 'react';
import GridLines from 'react-gridlines';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './core';
import { Home } from './modules/Home';
import { Results } from './modules/Results';
import { colors } from './core/constants/Colors';

function App() {
  return (
    <div style={{ backgroundColor: 'rgba(200, 200, 200, 0.25)' }}>
      <GridLines
        cellWidth={90}
        strokeWidth={1.5}
        cellWidth2={18}
        lineColor={colors.primary}
        lineColor2={colors.primary}
      >
        <Router>
          <Routes>
            <Route path={ROUTES.HOME_PATH} element={<Home />} />
            <Route path={ROUTES.RESULTS_PATH} element={<Results />} />
          </Routes>
        </Router>
      </GridLines>
    </div>
  );
}

export default App;
