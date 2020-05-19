import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

import PageRenderer from './page-renderer';

library.add(faUser, faBars)

function App() {

  const user = {
    firstName: 'Julia',
    lastName: 'Schultz'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={ user } />
        <Switch>
          <Route path='/:page' component={PageRenderer} />
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component = {() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
