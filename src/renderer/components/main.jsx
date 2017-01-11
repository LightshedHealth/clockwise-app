import React from 'react';
import {shell} from 'electron';

export default class Main extends React.Component {
  state = {
    message: 'Hello, Electron'
  }

  openGithub() {
    shell.openExternal('https://www.clockwisemd.com');
  }

  render() {
    return (
      <div className="container">
        <webview id="webview" src="https://www.clockwisemd.com/" autosize="on"></webview>
      </div>
    );
  }
}


// Provided by <a href="#" onClick={this.openGithub.bind(this)}>me<span className="glyphicon glyphicon-heart"></span></a>;
