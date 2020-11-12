import React from 'react';
import Landing from './views/Landing/Landing';
import Budget from './views/Budget/Budget';

// import for structuring our SPA routes
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
        <Switch>
          {/* This route does NOT need to be protected */}
          <Route exact path="/" component={Landing} />
          {/* TODO: This route DOES need to be protected,
          eventually if accounts are made */}
          <Route path="/budget" component={Budget} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
