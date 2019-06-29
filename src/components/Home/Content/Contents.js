import React, { Component } from "react";
import Icon from "../../../assets/icon.png";
import ContentList from "./ContentList";
import Axios from "axios";
import Loading from '../../Layout/Loading'
import { Container, CardColumns, Card } from "react-bootstrap";

export class Contents extends Component {
  componentDidMount() {
    this.getContents();
  }

  state = {
    loading: true,
    contents: []
  };

  getContents = () => {
    var dataArray = [];
    var url =
      "https://my-json-server.typicode.com/phongsakornm/myjson/contents";
    Axios.get(url).then(result => {
      result.data.forEach(item => {
        dataArray.push(item);
      });
      this.setState({ contents: dataArray });
      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <div>
        <Container style={styleContainer}>
          {this.state.loading
            ? <Loading />
            : <CardColumns>
              <ContentList contentList={this.state.contents} />
            </CardColumns>
          }
        </Container>
      </div>
    );
  }
}

const styleContainer = {
  paddingTop: '20px',
  paddingBottom: '20px'
}

export default Contents;
