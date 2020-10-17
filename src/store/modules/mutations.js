
const mutations = {
    loginSuccess(state, user) {
        state.status.loggedIn = true;
        state.user = user;
    },
    loginFailure(state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    registerSuccess(state) {
        state.status.loggedIn = false;
    },
    registerFailure(state) {
        state.status.loggedIn = false;
    },
    logout(state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    updateUserLists(state, payload) {
        state.userLists = payload;
    }
};

export default mutations;