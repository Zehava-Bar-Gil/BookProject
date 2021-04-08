import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Components/Search/Search';
import WishList from './Components/WishList/WishList';
import './Components/Style/Style.css';


export default function App() {
  return (
        <div>
          <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component=
           {Home}/>
           <Route path='/search' 
           component=
           {Search} />
          <Route path='/wishList' component=
           {WishList} />
         </Switch>
         </Router>     
    </div>
  )
}

