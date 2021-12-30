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
      <h3>Go to <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">corsdemo</a> and click <code>request temporary access to the demo server</code> and you will be ready to roll!</h3>
        
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App