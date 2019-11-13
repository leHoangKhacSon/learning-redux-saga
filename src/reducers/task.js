import * as taskConstants from '../constants/task';
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listTask: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: []
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      toastSuccess(data);
      return {
        ...state,
        listTask: data
      };
    }
    case taskConstants.FETCH_TASK_FAIL: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: []
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data
      };
    }
    default:
      return state;
  }
};

export default reducer;
