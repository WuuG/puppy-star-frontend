/**
 * 参考了vue-element-admin的封装代码
 * 地址:https://github.com/PanJiaChen/vue-element-admin
 */
import axios from "axios";
import { Message } from "element-ui";
// import store from "@/store";

// const baseURL = "https://qcwwpx.app.cloudendpoint.cn/api";
const baseURL = "/local";

// create an axios instance
const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers["Authorization"] = "JWT " + getToken();
    // }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to  http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    if (response.status < 200 && response.status >= 300) {
      console.log(res);
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });

      // Centralized error handling

      return Promise.reject(new Error(res || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    const message = error.response?.data;
    Message({
      message: message || error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
