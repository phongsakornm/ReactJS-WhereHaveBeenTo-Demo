import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <Container>
        <React.Fragment>
          <h1>About</h1>
          <p>This is the site development. It is part of a React JS.</p>
        </React.Fragment>
      </Container>
    )
  }
}

export default About