import { BenchConstants } from '../actions/bench_actions';
import { FilterConstants } from '../actions/filter_actions';
import { fetchBenches, createBench } from '../util/bench_api_util';
import { receiveBenches, requestBenches, receiveBench } from '../actions/bench_actions';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      const filters = getState().filters;
      const requestBenchesSuccess = data => dispatch(receiveBenches(data));
      fetchBenches(filters, requestBenchesSuccess);
      return next(action);
    case BenchConstants.CREATE_BENCH:
      const createBenchSuccess = data => dispatch(receiveBench(data));
      createBench(action.bench, createBenchSuccess);
      return next(action);
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestBenches());
      break;
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
