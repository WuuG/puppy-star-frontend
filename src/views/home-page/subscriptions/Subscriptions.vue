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
    async submit(form) {
      console.log(form);
      console.log(this.id);
      return false;
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