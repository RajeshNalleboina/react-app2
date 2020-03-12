import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Resume from './components/Resume';
import Home from './components/Home';
import {BrowserRouter,Route,Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <Home/>
    <BrowserRouter>
    <Route exact path= "/resume" component={Resume} />
    <Route exact path= "/" component={Cards}/>

    </BrowserRouter>
    </div>
  );
}

export default App;
