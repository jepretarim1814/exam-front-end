
const getters = {
    getCurrentUser(state) {
        return state.user;
    },
    checkIfLoggedIn(state) {
        return state.status.loggedIn;
    },
    getUsers(state) {
        return state.userLists;
    }
};

export default getters;