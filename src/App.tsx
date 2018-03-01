import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Cities from './components/Cities';
import City from './components/City';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Cities}/>
          <Route path="/cities/:id" component={City}/>
        </Switch>
      </div>
    );
  }
}

export default App;
