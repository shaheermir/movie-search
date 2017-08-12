// @flow

import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends React.Component {
  state = {
    searchTerm: ''
  };

  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (e: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div className="search">
        <Header
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
        <div>
          {this.props.shows
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
