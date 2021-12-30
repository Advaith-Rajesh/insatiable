import './SearchBar.css'
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        location: '',
        sortBy: 'best_match'
      }

      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

      this.sortByOptions = {
        'Best Match' : 'best_match',
        'Highest Rated' : 'rating',
        'Most Reviewed' : 'review_count'
      };
    }
    getSortByClass(sortByOption) {
      if (this.state.sortBy===sortByOption) {
        return 'active';
      } else {
        return '';
      }
    }
    handleSortByChange(sortByOption) {
      this.setState({
        sortBy: sortByOption
      }, () => {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      })
    }
    handleTermChange(event) {
      this.setState({
        term:event.target.value
      })
    }
    handleLocationChange(event) {
      this.setState({
        location:event.target.value
      })
    }
    handleSearch(event) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
      if (event) { event.preventDefault() }
    }
    
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }
  handleKeyEnter() {
    
    // Get the input field
    const input = document.getElementById("myInput");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault()
        // Trigger the button element with a click
        document.getElementById("submit").click();
        ;
      }
    });
  }
    render() {
        return ( 
         <><div className="SearchBar">
            <img 
              src="data:image/png;base64,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"
              width="225"
              height="225"
              id="img-ravenous"
              alt="img-ravenous"
              style={{ alignSelf: 'center' }}
              />
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" onChange={this.handleTermChange} />
              <input placeholder="Where?" id="myInput" onChange={this.handleLocationChange} onKeyUp={this.handleKeyEnter} />
            </div>
            <div className="SearchBar-submit" id="submit">
              <a onClick={this.handleSearch} type="submit">Let's Go</a>
            </div>
<></>
          </div></>
     )
    }
}
  
  export default SearchBar