import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './Components/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

