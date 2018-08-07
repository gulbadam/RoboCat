import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Scroll from "./Scroll";
import Cardlist from "./Cardlist";
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount(){
    this.props.onRequestRobots();
}
filterRobots = () => {
     return this.props.robots.filter(robots => {
         return robots.name.toLowerCase().includes(this.props.searchField.toLowerCase())
     })
}
  render(){ 
    const {onSearchChange, isPending} = this.props;
    // const filteredRobots = robots.filter(robots => {
    //   return robots.name.toLowerCase().includes(searchField.toLowerCase())
    // })
    return isPending?
      <h1>loading</h1> :
    (<div className="tc">
      <Header/>
  <SearchBox searchChange={onSearchChange} />
  <Scroll>
  <ErrorBoundary>
  <Cardlist robots={this.filterRobots()}/>
  </ErrorBoundary>
  </Scroll>
</div>)
}
}
export default MainPage;
