<template>
  <div class="index-box">
    <el-input
      type="textarea"
      v-model="text"
      :placeholder="placeholder"
      resize="none"
      :autosize="size"
      @blur="onBlur"
    ></el-input>
    <div class="index-box-options">
      <ul class="left">
        <li class="options">
          <emoji-picker :show="emojiShow" @select="selectedEmoji">
            <template #reference>
              <el-button circle
                ><i class="el-icon-ice-cream-round"></i
              ></el-button>
            </template>
          </emoji-picker>
        </li>
        <li>
          <emoji-picker :show="emojiShow" @select="selectedEmoji">
            <template #reference>
              <el-button circle
                ><i class="el-icon-ice-cream-round"></i
              ></el-button>
            </template>
          </emoji-picker>
        </li>
      </ul>
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
import { splice } from "@/utils/utils";
export default {
  name: "IndexBox",
  data() {
    return {
      placeholder: "有什么新鲜事想分享给大家呢？",
      text: "",
      textSelectionStart: 0,
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
      this.text = splice(this.text, this.selectionStart, emoji.native);
    },
    onBlur(event) {
      this.selectionStart = event.srcElement.selectionStart;
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
      display: flex;
      .options {
        margin-right: 10px;
      }
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