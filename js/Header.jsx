// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange: Function,
  searchTerm: string
}) => {
  let utilSpace;

  if (props.showSearch) {
    utilSpace = (
      <input
        value={props.searchTerm}
        type="text"
        placeholder="Search"
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = <h2><Link to="/search">Back</Link></h2>;
  }

  return (
    <header>
      <h1><Link to="/">sVideo</Link></h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(e) {
    dispatch(setSearchTerm(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
