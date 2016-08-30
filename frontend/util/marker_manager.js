/* global google */

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(benches) {
    this.benches = benches;
    this._benchesToAdd().forEach(this._createMarkerFromBench);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _benchesToAdd() {
    const currentBenchIds = this.markers.map(benchMarker => benchMarker.benchId);
    let benchesToAdd = [];

    this.benches.forEach( bench => {
      if (!currentBenchIds.includes(bench.id)) {
        benchesToAdd.push(bench);
      }
    });

    return benchesToAdd;
  }

  _createMarkerFromBench(bench) {
    const pos = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      benchId: bench.id
    });

    this.markers.push(marker);
  }

  _markersToRemove() {
    return this.markers.filter( marker => {
      let presentFlag = false;
      this.benches.forEach(bench => {
        if (bench.id === marker.benchId) {
          presentFlag = true;
        }
      });

      return !presentFlag;
    });
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf(marker);
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}

export default MarkerManager;
