import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderBar from "./Layout/HeaderBar";
import Todos from "./Todos/Todos";
import Movies from "./Movies/Movies";
import About from "./About/About";
import Footer from "./Layout/FooterBar";
import Banner from "./Home/Banner/Banner";
import Contents from "./Home/Content/Contents";
import ContentDetail from "./Home/Content/ContentDetail";
import LogIn from "./LogIn/LogIn";

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderBar />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
                {/* <Banner /> */}
                <Contents />
            </React.Fragment>
          )}
        />
        <Route path="/movies" component={Movies} />
        <Route path="/todos" component={Todos} />
        <Route path="/about" component={About} />
        <Route path="/contentDetail" component={ContentDetail} />
        <Route path="/login" component={LogIn} />
        <br />
        <Footer />
      </Router>
    );
  }
}

export default App;
