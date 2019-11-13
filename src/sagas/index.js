import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select
} from 'redux-saga/effects';

import * as types from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants/index';
import {
  fetchListTaskSuccess,
  fetchListTaskFail,
  filterTaskSuccess
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';

/**
 * B1: Thực thi action fetch task
 * B2: Gọi api
 * B2.1: Hiển thị danh sách tiến trình ( loading )
 * B3: Kiểm tra status code
 * Nếu thành công ...
 * Nếu thất bại ...
 * B4: Tắt loading
 * B5: Thực thi các công việc tiếp theo
 */

function* watchFetchListTaskAction() {
  while (true) {
    yield take(types.FETCH_TASK);
    // ============ blocking =============//
    yield put(showLoading());
    const response = yield call(getList);
    // ============ blocking =============//
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data));
      // ============ blocking =============//
    } else {
      // dispatch action fetchListTaskFail
      yield put(fetchListTaskFail(data));
      // ============ blocking =============//
    }
    yield delay(1000);
    // ============ blocking =============//
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select(state => state.task.listTask);
  const filterTask = list.filter(item =>
    item.title
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())
  );
  yield put(filterTaskSuccess(filterTask));
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(types.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
