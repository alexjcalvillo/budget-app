import React from 'react';
import Landing from './views/Landing/Landing';
import Budget from './views/Budget/Budget';

// import for structuring our SPA routes
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/budget" component={Budget} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
