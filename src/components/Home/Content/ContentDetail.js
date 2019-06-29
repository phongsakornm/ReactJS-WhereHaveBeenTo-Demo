import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Loading from '../../Layout/Loading'
import Message from "../../Message/Message";
import firebase from "firebase";

export class ContentDetail extends Component {
  constructor(props) {
    super(props);
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "xxxxxxxxx",
      authDomain: "xxxxxxxxx",
      databaseURL: "xxxxxxxxx,
      projectId: "xxxxxxxxx",
      storageBucket: "xxxxxxxxx",
      messagingSenderId: "xxxxxxxxx",
      appId: "xxxxxxxxx"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const query = new URLSearchParams(this.props.location.search);

    this.state = {
      loading: true,
      msgId: query.get("msgId"),
      contents: []
    };
  }

  componentDidMount() {
    this.getContentsById(this.state.msgId);
  }

  getContentsById = id => {
    fetch(
      "https://my-json-server.typicode.com/phongsakornm/myjson/contents/" + id
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ contents: data });
        this.setState({ loading: false });
      })
      .catch(err => console.error(this.props.url, err.toString()));
  };

  render() {
    return (
      <React.Fragment>
        <Container style={styleContainer}>
          {this.state.loading
            ? <Loading />
            : <Row>
              <Col />
              <Col md={8}>
                <br />
                <h1 style={{ textAlign: "center" }}>
                  {this.state.contents.title}
                </h1>
                <Card>
                  <Card.Img
                    variant="top"
                    src={
                      window.location.origin +
                      "/img/connent/" +
                      this.state.contents.imagesName
                    }
                  />
                  <Card.Body>
                    <Card.Text>{this.state.contents.shortDetail}</Card.Text>
                  </Card.Body>
                </Card>
                <br />
                <Message db={firebase} msgId={this.state.msgId} />
              </Col>
              <Col />
            </Row>
          }
        </Container>
      </React.Fragment>
    );
  }
}

const styleContainer = {
  paddingTop: '20px',
  paddingBottom: '50px'
}

export default ContentDetail;
