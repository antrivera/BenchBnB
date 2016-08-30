/* global google */

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
  }

  updateMarkers(benches) {
    this.benches = benches;
    this._benchesToAdd().forEach(this._createMarkerFromBench);
  }

  _benchesToAdd() {
    const currentBenchIds = this.markers.map(benchMarker => benchMarker.benchId);
    let benchesToAdd = [];

    this.benches.forEach( bench => {
      if (!currentBenchIds.includes(bench.benchId)) {
        benchesToAdd.push(bench);
      }
    });

    return benchesToAdd;
  }

  _createMarkerFromBench(bench) {
    const pos = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    this.markers.push(marker);
  }
}

export default MarkerManager;
