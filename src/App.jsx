import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import Home from './Components/Home/Home';
import './Components/Style/Style.css';


export default function App() {
  return (
        <div>
          <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component=
           {Home}/>
         </Switch>
         </Router>
       <Search/>
        </div>
  )
}

