import * as types from '../constants/ui';

const initialState = {
  isShowLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING: {
      return {
        ...state,
        isShowLoading: true
      };
    }
    case types.HIDE_LOADING: {
      return {
        ...state,
        isShowLoading: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
