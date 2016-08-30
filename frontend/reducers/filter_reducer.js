import { FilterConstants } from '../actions/filter_actions';
import { merge } from 'lodash';

const FilterReducer = (state = {}, action) => {
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      let newState = merge({}, state, action.filters);
      return newState;
    default:
      return state;
  }
};

export default FilterReducer;
