import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);

  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    });  
  }
  
  render() {
    return (
      <div className="App">
        <h1 id="h1-ravenous">insatiable</h1>
      <h3><center>Click <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noopener noreferrer">here</a> and click on the button!</center></h3>
        
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App