import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends React.Component {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>sVideo</h1>
          <input
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {preload.shows
            .filter(show =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .includes(this.state.searchTerm.toUpperCase())
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
