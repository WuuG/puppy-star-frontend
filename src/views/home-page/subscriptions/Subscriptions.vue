<template>
  <div class="overflow-auto">
    <index-box
      :imageUpload="true"
      :emojiPicker="true"
      class="p-5"
      :uploadImageFunction="httpRequest"
      :submit="submit"
    ></index-box>
    <router-view></router-view>
  </div>
</template>

<script>
import IndexBox from "@/components/content/IndexBox.vue";
import { uploadImage } from "@/api/upload-file";
import { postArticle } from "@/api/article";
import { mapState } from "vuex";

export default {
  name: "Subscriptions",
  components: {
    IndexBox,
  },
  computed: {
    ...mapState("user", {
      id: "id",
    }),
  },
  methods: {
    async httpRequest(fileFrom) {
      const { data } = await uploadImage(fileFrom);
      console.log(data);
      if (!data || data.length <= 0) throw new Error("can't get files");
      return data[0].url;
    },
    /**
     * 点击提交时进行处理的函数
     * @form text 文本
     * @form iamges 图片数组
     */
    async submit(form) {
      const submitForm = {
        text: form.text,
        images: form.images,
        id: this.id,
      };
      try {
        await postArticle(submitForm);
        return true;
      } catch {
        return false;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.index-box-out {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>