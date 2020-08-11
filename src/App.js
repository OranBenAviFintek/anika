import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import './App.css';

const Hatspage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  path='/shop/hats' component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
