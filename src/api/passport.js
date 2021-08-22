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

export function sendMessage(phone) {
  return request({
    url: "messageCode/sendMessageCode",
    data: {
      phone,
    },
    method: "post",
  });
}
