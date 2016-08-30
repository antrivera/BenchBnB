import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({benches, requestBenches}) => (
  <div>
    <BenchMap />
    <BenchIndex benches={benches} requestBenches = {requestBenches} />
  </div>
);

export default Search;
