import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({benches, requestBenches}) => {
  console.log(benches);

  return (
  <div>
    <BenchMap />
    <BenchIndex benches={benches} requestBenches = {requestBenches} />
  </div>
  );
}

export default Search;
