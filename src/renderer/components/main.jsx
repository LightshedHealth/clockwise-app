import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clockwiseUrl = `https://www.clockwisemd.com/hospitals/${this.props.facilityId}`;

    return (
      <div className="container">
        <webview id="webview" src={ clockwiseUrl } autosize="on"></webview>
      </div>
    );
  }
}
