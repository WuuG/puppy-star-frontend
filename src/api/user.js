import request from "@/utils/request";

export function getUserInfoById(id) {
  return request({
    url: `user`,
    method: "get",
    params: {
      id,
    },
  });
}
