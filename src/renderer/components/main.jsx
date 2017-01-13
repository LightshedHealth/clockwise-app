import React from 'react';
import {shell} from 'electron';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    message: 'Hello, Electron'
  }

  openGithub() {
    shell.openExternal('https://www.clockwisemd.com');
  }

  render() {
    let clockwiseUrl = `https://www.clockwisemd.com/hospitals/${this.props.facilityId}`

    return (
      <div className="container">
        <webview id="webview" src={ clockwiseUrl } autosize="on"></webview>
      </div>
    );
  }
}


// Provided by <a href="#" onClick={this.openGithub.bind(this)}>me<span className="glyphicon glyphicon-heart"></span></a>;
