<template>
  <div class="index-box">
    <el-input
      type="textarea"
      v-model="text"
      resize="none"
      :placeholder="placeholder"
      :autosize="textareaSize"
      @blur="onBlur"
    ></el-input>
    <upload-images
      :files.sync="imagesFile"
      ref="upload"
      v-if="imageUpload"
    ></upload-images>
    <div class="index-box-options">
      <ul class="left">
        <li class="options">
          <emoji-picker @select="selectedEmoji" v-if="emojiPicker">
            <template #reference>
              <el-button circle
                ><i class="el-icon-ice-cream-round"></i
              ></el-button>
            </template>
          </emoji-picker>
        </li>
        <li class="options" v-if="imageUpload">
          <el-button circle @click="onShowUpload"
            ><i class="el-icon-picture-outline"></i
          ></el-button>
        </li>
      </ul>
      <div class="right">
        <el-button
          type="primary"
          round
          :disabled="sendBtnDisabled"
          @click="submit"
          >发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiPicker from "./child-comps/EmojiPicker.vue";
import { splice } from "@/utils/utils";
import UploadImages from "./child-comps/UploadImages.vue";

export default {
  name: "IndexBox",
  data() {
    return {
      placeholder: "有什么新鲜事想分享给大家呢？",
      text: "",
      textSelectionStart: 0,
      imagesFile: [],
    };
  },
  props: {
    imageUpload: {
      type: Boolean,
      default: false,
    },
    emojiPicker: {
      type: Boolean,
      default: false,
    },
    textareaSize: {
      type: Object,
      default() {
        return {
          minRows: 2,
          maxRows: 6,
        };
      },
    },
  },
  computed: {
    sendBtnDisabled: function () {
      return this.text.length > 0 ? false : true;
    },
  },
  components: {
    EmojiPicker,
    UploadImages,
  },
  methods: {
    // 页面逻辑
    selectedEmoji(emoji) {
      console.log(this.text, this.textSelectionStart);
      this.text = splice(this.text, this.textSelectionStart, emoji.native);
    },
    onBlur(event) {
      this.textSelectionStart = event.srcElement.selectionStart;
    },
    submit() {
      console.log(this.imagesFile);
      console.log(this.text);
      this.$refs["upload"].clearImages();
    },
    // 子组件通信
    async onShowUpload() {
      this.$refs["upload"].click();
    },
    // 父组件通信
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