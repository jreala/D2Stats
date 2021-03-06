import createAction from '../../../store/helpers/createAction';
import { ACTION_STATS_FETCH_DONE } from '../../../lib/constants';

export const notifyFetchDone = payload => createAction(ACTION_STATS_FETCH_DONE, payload);

const fetchDone = requestType => dispatch => dispatch(notifyFetchDone({ isFetching: false, requestType }));

export default fetchDone;
