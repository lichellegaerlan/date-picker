import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './Components/Landing';
import ChooseDate from './Components/ChooseDate';
import AddDate from './Components/AddDate';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/choose" component={ChooseDate} />
          <Route path="/add" component={AddDate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

