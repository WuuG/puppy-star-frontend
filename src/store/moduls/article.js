import EVENT from "../mutation-types";

const { ARTICLE_TEST } = EVENT;

const state = {
  test: "test",
  firstLoading: false,
};

const mutations = {
  [ARTICLE_TEST](state) {
    console.log(state);
  },
  [EVENT.CHANGE_LOADING](state, boolean) {
    state.firstLoading = boolean;
  },
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
