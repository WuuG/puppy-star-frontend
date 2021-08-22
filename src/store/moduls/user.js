// import EVENT from "../mutation-types";
import { getLocalStorage, key } from "@/utils/localStorage.js";

const userInfo = getLocalStorage(key.USER_INFO);
const state = {
  name: userInfo?.login_name || "",
  avatar:
    userInfo?.avatar ||
    "https://pic3.zhimg.com/22b797a33ce00581e37f9376cf37609b_is.jpg",
  location: userInfo?.location || "",
  id: userInfo._id || "",
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
