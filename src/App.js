//import React, { Component } from 'react';
import React, { Component } from 'react';
import {connect} from 'react-redux';

//import logo from './logo.svg';
import './App.css';
//import Card from "./components/Card";
//import {robots} from './robots';
import SearchBox from './components/SearchBox'
import Scroll from "./components/Scroll"

import Cardlist from "./components/Cardlist";
// const state ={
//   robots: robots,
//   searchfiels: ""
// }
import './App.css';

import {setSearchField} from './actions';
const mapStateToProps = (state) => {
  return {
   searchField: state.searchField
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

 class App extends Component {
   constructor() {
     super()
     this.state = {
       robots: []
       //searchfield: ""
     }
   }
   componentDidMount(){

     fetch('https://jsonplaceholder.typicode.com/users').
     then(response =>  response.json())
     .then(users => this.setState({robots: users})
     )
    
   }
  //  onSearchChange=(event)=> {
  //    this.setState({searchfield: event.target.value})
     
  //  }
   render(){ 
     const {robots} =this.state;
     const {searchField, onSearchChange} = this.props;
     const filteredRobots = robots.filter(robots => {
       return robots.name.toLowerCase().includes(searchField.toLowerCase())
     })
     //console.log(filterRobots);
     if (this.state.robots.lenght ===0) {
       return <h1>loading</h1>
     }else{
     return(
  <div className="tc">
         <h1 className="bg-washed-red self-center f1  pa3 mh5 shadow-3 hover-bg-gold">Cats</h1>
  <SearchBox searchChange={onSearchChange} />
  <Scroll>
  <Cardlist robots={filteredRobots}/>
     </Scroll>

    </div>
     )
    }
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

export default connect(mapStateToProps, mapDispatchToProps) (App);
