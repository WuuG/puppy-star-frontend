<template>
  <div class="overflow-auto">
    <index-box :imageUpload="true" :emojiPicker="true" class="p-5"></index-box>
    <router-view></router-view>
  </div>
</template>

<script>
import IndexBox from "@/components/content/IndexBox.vue";
export default {
  name: "Subscriptions",
  components: {
    IndexBox,
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.index-box-out {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>