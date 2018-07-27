
import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import SearchBox from './components/SearchBox'
import Scroll from "./components/Scroll"

import Cardlist from "./components/Cardlist";
import './App.css';

import {setSearchField, requestRobots} from './actions';
const mapStateToProps = (state) => {
  return {
   searchField: state.searchRobots.searchField,
   robots: state.requestRobots.robots,
   isPending: state.requestRobots.isPending,
   error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  };
};
class App extends Component {
  componentDidMount(){
    this.props.onRequestRobots();
}
  render(){ 
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending?
      <h1>loading</h1> :
    (<div className="tc">
      <h1 className=" self-center f1  pa3 mh5 shadow-3 hover-bg-gold">Cats</h1>
  <SearchBox searchChange={onSearchChange} />
  <Scroll>
  <Cardlist robots={filteredRobots}/>
  </Scroll>
</div>)
}
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
