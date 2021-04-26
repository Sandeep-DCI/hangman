import './App.css';
import React , { useState} from "react";
import Win from './Win';
import Lose from './Lose';
import Game from './Game';
import Home from './Home/Home';
import Login from "./Login"

// to route to the pages
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router> {/* // to define the routes in the browser */}
        <div className="App">
         <Route path='/' exact component={Login}></Route>
         <Route path='/game' component={Game}></Route> 
         <Route path='/win' component={Win}></Route> 
         <Route path='/lose' component={Lose}></Route> 
         <Route path='/home' component={Home}></Route>
        </div>
    </Router>
  );
}
// const Home = () => (
//   <div>
//     <h1>Home Page</h1> {/* later that will be the home page  */}
//   </div>
// )

export default App