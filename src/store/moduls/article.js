import EVENT from "../mutation-types";
import { getNewArticle } from "@/api/article";
import { Message } from "element-ui";

const { ARTICLE_TEST } = EVENT;

const state = {
  articleArray: [],
  test: "test",
  uniqueSet: new Set(),
  articleNumber: 4,
  articleParams: {
    skip: 0,
    limit: 4,
  },
};

const mutations = {
  [ARTICLE_TEST](state) {
    console.log(state);
  },
  /**
   * 添加文章到全局对象中
   * @uniqueSet 用于判断获取文章是否已经显示了，如果已经显示就不push到文章数组中
   */
  pushArticle(state, articleArray) {
    articleArray.forEach((item) => {
      const uniqueSymbol = item._id;
      if (state.uniqueSet.has(uniqueSymbol)) {
        return;
      }
      state.uniqueSet.add(uniqueSymbol);
      state.articleArray.push(item);
    });
    console.log(state.uniqueSet);
    console.log(state.articleArray);
  },
  clearArticle(state) {
    state.articleArray = [];
    state.uniqueSet.clear();
  },
  [EVENT.ARTICLE_NUMBER_ADD](state) {
    state.articleParams.skip += state.articleNumber;
  },
};

const actions = {
  async [EVENT.ARTICLE_GET]({ commit }, params = { skip: 0, limit: 0 }) {
    const { data } = await getNewArticle(params.skip, params.limit);
    if (!data || !data.length) {
      Message({
        type: "warning",
        message: "已经没有更多数据啦！",
      });
      return false;
    }
    commit("pushArticle", data);
    return true;
  },
};

const getters = {
  articleArray: (state) => {
    return state.articleArray;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
