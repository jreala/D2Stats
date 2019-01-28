import fetchAccount from './fetchAccount';
import fetchProfile from './fetchProfile';

const fetchAllData = (displayName, membershipType) => async (dispatch, getState) => (
    dispatch(fetchAccount(displayName, membershipType)).then(() => {
        const statsState = getState().Stats;
        const membershipId = statsState.memberIdByName[displayName.toLowerCase()];
        return dispatch(fetchProfile(membershipType, membershipId));
    })
);

export default fetchAllData;
