import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products'
import Services from './pages/Services'
import SignUp from './pages/SignUp'


function App() {
  return (
    <div className='App'>
      
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/services' exact component={Services} />
          <Route path='/signup' exact component={SignUp} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
