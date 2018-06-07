//import React, { Component } from 'react';
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import {robots} from './robots';
import SearchBox from './components/SearchBox'

import Cardlist from "./components/Cardlist";
// const state ={
//   robots: robots,
//   searchfiels: ""
// }
import './App.css';



 class App extends Component {
   constructor() {
     super()
     this.state = {
       robots: robots,
       searchfield: ""
     }
   }
   onSearchChange=(event)=> {
     this.setState({searchfield: event.target.value})
     
   }
   render(){ 
     const filteredRobots = this.state.robots.filter(robots => {
       return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     })
     //console.log(filterRobots);
     return(
  <div className="tc">
         <h1 className="bg-washed-red self-center f1  pa3 mh5 shadow-3 hover-bg-gold">Cats</h1>
  <SearchBox searchChange={this.onSearchChange} />
  <Cardlist robots={filteredRobots}/>
    </div>
     )
}
 }
//class App extends Component {
 // render() {
    //return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    //);
  //}
//}

export default App;
