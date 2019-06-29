import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MovieItem from "./MovieItem";

class Movies extends Component {
  render() {
    return this.props.movielist.map(item => (
      <Container key={item.id}>
        <MovieItem movieItem={item}></MovieItem>
        <hr />
      </Container>
    ));
  }
}

export default Movies;
