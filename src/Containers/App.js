import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Radio from './Radio';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Radio} />
      </Router>
    )
  }
}

export default App;
