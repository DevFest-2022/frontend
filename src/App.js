import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './core';
import { Home } from './modules/Home';
import { Results } from './modules/Results';

function App() {
  console.log(ROUTES);
  return (
    <div>
      {/* <Results /> */}
      <Router>
        <Routes>
          <Route path={ROUTES.HOME_PATH} element={<Home />} />
          <Route path={ROUTES.RESULTS_PATH} element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
