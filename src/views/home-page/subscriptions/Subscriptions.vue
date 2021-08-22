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
import { mapMutations, mapState } from "vuex";
import EVENT from "@/store/mutation-types";

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
     * @form iamges 图片数组 [{uid,url}...]
     */
    async submit(form) {
      const submitForm = {
        text: form.text,
        id: this.id,
        images: [],
      };
      form.images.forEach((imageObjec) => {
        submitForm.images.push(imageObjec.url);
      });
      try {
        await postArticle(submitForm);
        this.reLoadArticle();
        return true;
      } catch {
        return false;
      }
    },
    ...mapMutations("article", {
      reLoadArticle: EVENT.COMMIT_RELOAD,
    }),
  },
};
</script>


<style lang="scss" scoped>
.index-box-out {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>