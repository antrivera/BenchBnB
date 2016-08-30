/* global google */

import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
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
    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  registerListeners() {
    this.map.addListener('idle', () => {
      let latLngBnds = this.map.getBounds();
      let northEast = latLngBnds.getNorthEast();
      let southWest = latLngBnds.getSouthWest();

      let bounds = {
        northEast: {
          lat: northEast.lat(),
          lng: northEast.lng()
        },
        southWest: {
          lat: southWest.lat(),
          lng: southWest.lng()
        }
      };

      this.props.updateBounds(bounds);
    });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id={'map-container'} ref={'map'} ></div>
    );
  }
}

export default BenchMap;
