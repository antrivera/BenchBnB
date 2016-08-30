import React from 'react';

class BenchMap extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    // display SF on map
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };

    // wrap mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  render() {
    return (
      <div id={'map-container'} ref={'map'} ></div>
    );
  }
}

export default BenchMap;
