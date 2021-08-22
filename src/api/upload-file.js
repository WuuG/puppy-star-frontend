import request from "@/utils/request";

export function uploadImage(formData) {
  return request({
    url: "upload",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
}
