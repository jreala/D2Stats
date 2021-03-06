import fetchAccount from './fetchAccount';
import updateInput from './updateInput';
import fetchBegin from './fetchBegin';
import fetchDone from './fetchDone';
import fetchProfile from './fetchProfile';
import fetchCharacter from './fetchCharacter';
import fetchStats from './fetchStats';
import updateSearchType from './updateSearchType';
import {
    ACTION_STATS_FETCH_ACCOUNT,
    ACTION_STATS_UPDATE_INPUT,
    ACTION_STATS_FETCH_BEGIN,
    ACTION_STATS_FETCH_DONE,
    ACTION_STATS_FETCH_PROFILE,
    ACTION_STATS_FETCH_CHARACTER,
    ACTION_STATS_FETCH_STATS,
    ACTION_STATS_UPDATE_SEARCH_TYPE
} from '../../../lib/constants';


// Assigns a reducer to actions
export default {
    [ACTION_STATS_FETCH_ACCOUNT]: fetchAccount,
    [ACTION_STATS_UPDATE_INPUT]: updateInput,
    [ACTION_STATS_FETCH_BEGIN]: fetchBegin,
    [ACTION_STATS_FETCH_DONE]: fetchDone,
    [ACTION_STATS_FETCH_PROFILE]: fetchProfile,
    [ACTION_STATS_FETCH_CHARACTER]: fetchCharacter,
    [ACTION_STATS_FETCH_STATS]: fetchStats,
    [ACTION_STATS_UPDATE_SEARCH_TYPE]: updateSearchType
};
