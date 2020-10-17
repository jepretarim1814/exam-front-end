
import state from "./modules/state";
import actions from "./modules/actions";
import getters from "./modules/getters";
import mutations from "./modules/mutations";

export const auth = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};