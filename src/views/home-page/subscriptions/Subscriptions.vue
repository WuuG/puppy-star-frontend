<template>
  <div class="index-box">
    <el-input
      type="textarea"
      v-model="text"
      :placeholder="placeholder"
      resize="none"
      :autosize="size"
    ></el-input>
    <div class="index-box-options">
      <div class="left">
        <emoji-picker :show="emojiShow" @select="selectedEmoji">
          <template #reference>
            <el-button></el-button>
          </template>
        </emoji-picker>
      </div>
      <div class="right">
        <el-button type="primary" round :disabled="sendBtnDisabled"
          >发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiPicker from "@/components/content/EmojiPicker.vue";
export default {
  name: "Subscriptions",
  data() {
    return {
      placeholder: "有什么新鲜事想分享给大家呢？",
      text: "",
      size: {
        minRows: 2,
      },
      emojiShow: true,
    };
  },
  computed: {
    sendBtnDisabled: function () {
      return this.text.length > 0 ? false : true;
    },
  },
  components: {
    EmojiPicker,
  },
  methods: {
    selectedEmoji(emoji) {
      console.log(emoji);
    },
  },
};
</script>

<style lang="scss" scoped>
.index-box {
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
  .index-box-options {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .left {
      flex: 2;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
<style lang="scss">
.index-box {
  textarea {
    background-color: #eee;
    &:focus {
      background-color: #fff;
      border: 1px solid $color-lightRed;
    }
  }
}
</style>