<template>
  <div>
    <index-box :imageUpload="true" :emojiPicker="true"></index-box>
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
</style>