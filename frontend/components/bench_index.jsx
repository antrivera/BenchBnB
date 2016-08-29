import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    const benches = this.props.benches.map((bench, idx) => (
      <BenchIndexItem key={bench + idx} bench={bench} />
    ));

    return (
      <ul>
        {benches}
      </ul>
    );
  }
};

export default BenchIndex;
