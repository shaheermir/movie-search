import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
