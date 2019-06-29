import React, { Component } from "react";
import FacebookLogin from "react-facebook-login"; //developers.facebook.com
import GoogleLogin from "react-google-login"; //console.developers.google.com

export class LogIn extends Component {
  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      console.log(response);
    };
    return (
      <div className="App" style={{ height: "100%" }}>
        <hr />
        <FacebookLogin
          appId="2062483434052657" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />

        <GoogleLogin
          clientId="578159265923-a0ljj3pvnbige9rg2d8diro2nt97ffkr.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default LogIn;
