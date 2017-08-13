// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  props: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string
  };

  render() {
    return (
      <Wrapper>
        <Link to={`/details/${this.props.imdbID}`}>
          {' '}
          <Image
            alt={`${this.props.title} Show Poster`}
            src={`/public/img/posters/${this.props.poster}`}
          />
        </Link>
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
