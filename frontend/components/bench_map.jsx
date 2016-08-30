import React from 'react';

class BenchMap extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id={'map-container'} ref={'map'} ></div>
    );
  }
}

export default BenchMap;
