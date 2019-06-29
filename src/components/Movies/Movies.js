import React, { Component } from 'react'
import MovieList from './MovieList'
import Loading from '../Layout/Loading'
import Axios from "axios";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

export class Movies extends Component {
  componentDidMount() {
    this.search("Avengers");
  }

  state = {
    loading: true,
    movie: []
  };

  search = keyword => {
    setTimeout(() => {
      var dataArray = [];
      var url =
        "https://api.themoviedb.org/3/search/movie?api_key=261651a4c887f2acaa0728792d506b39&query=" +
        keyword;
      Axios.get(url).then(result => {
        result.data.results.forEach(item => {
          item.poster = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
          dataArray.push(item);
        });
        this.setState({ movie: dataArray });
        this.setState({ loading: false });
      });
    },1000)
    
  };

  render() {
    return (
      <React.Fragment>
        <Container style={styleContainer}>
          {this.state.loading
            ? <Loading />
            :
            <div>
              <Row>
                <Col />
                <Col md={7} xs={12}>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>ชื่อหนัง</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      onChange={event => {
                        this.search(event.target.value);
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col />
              </Row>
              <Row>
                <Col />
                <Col md={8} xs={12}>
                  <MovieList movielist={this.state.movie} />
                </Col>
                <Col />
              </Row>
            </div>

          }

        </Container>
      </React.Fragment>
    )
  }
}

const styleContainer = {
  paddingTop: '20px',
  paddingBottom: '50px'
}

export default Movies
