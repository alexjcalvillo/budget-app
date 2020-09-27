import React from 'react';
import Landing from './views/Landing/Landing';

// import for structuring our SPA routes
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
    </Router>
  );
}

export default App;
