<template>
  <div>
    <index-box :imageUpload="true" :emojiPicker="true"></index-box>
    <index-box
      :emojiPicker="true"
      class="index-box-out"
      :textareaSize="{ minRows: 1, maxRows: 2 }"
    ></index-box>
  </div>
</template>

<script>
import IndexBox from "@/components/content/IndexBox.vue";
export default {
  name: "Subscriptions",
  components: {
    IndexBox,
  },
};
</script>


<style lang="scss" scoped>
.index-box-out {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>