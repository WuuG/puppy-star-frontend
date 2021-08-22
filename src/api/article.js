import request from "@/utils/request.js";

export function getNewArticle(skip, limit) {
  return request({
    url: "article",
    params: {
      skip,
      limit,
    },
  });
}
