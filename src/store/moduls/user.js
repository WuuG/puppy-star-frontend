// import EVENT from "../mutation-types";
import { getLocalStorage, key } from "@/utils/localStorage.js";

const state = {
  name: getLocalStorage(key.USER_INFO)?.login_name || "",
  avatar: "https://pic3.zhimg.com/22b797a33ce00581e37f9376cf37609b_is.jpg",
  location: null,
  id: "111",
};
const mutations = {};
const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
