import request from "@/utils/request";

export function postRegister(form) {
  return request({
    url: "passport/register",
    data: form,
    method: "post",
  });
}

export function postLogin(form) {
  return request({
    url: "passport/login",
    data: form,
    method: "post",
  });
}
