
const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? { status: { loggedIn: true }, user, userLists: null }
    : { status: { loggedIn: false }, user: null, userLists: null };

export default state;