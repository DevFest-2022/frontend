import React from 'react';
import GridLines from 'react-gridlines';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './core';
import { Home } from './modules/Home';
import { Results } from './modules/Results';
import { colors } from './core/constants/Colors'

function App() {
  return (
    <GridLines
      className='grid-area'
      cellWidth={60}
      strokeWidth={2}
      cellWidth2={12}
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
  );
}

export default App;
