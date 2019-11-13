// import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchListTaskFail = error => {
  return {
    type: taskConstants.FETCH_TASK_FAIL,
    payload: {
      error
    }
  };
};

export const filterTask = keyword => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword
    }
  };
};

export const filterTaskSuccess = data => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then(res => {
//         const { data } = res;
//         dispatch(fetchListTaskSuccess(data));
//       })
//       .catch(error => {
//         dispatch(fetchListTaskFail(error));
//       });
//   };
// };
