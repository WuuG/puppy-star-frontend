<template>
  <div class="index-box flex">
    <div class="w-12" v-if="avatarSrc">
      <el-avatar :src="avatarSrc"></el-avatar>
    </div>
    <div class="flex-1">
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
        :auto-upload="autoUpload"
        @http-request="httpRequest"
        @remove="handleImageRemove"
      ></upload-images>
      <div class="index-box-options">
        <ul class="left">
          <li class="options">
            <emoji-picker @select="selectedEmoji" v-if="emojiPicker">
              <template #reference>
                <el-button circle>☺</el-button>
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
            :loading="submitLoading"
            @click="onSubmit"
            >{{ btnText }}
          </el-button>
        </div>
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
      imagesURL: [],
      submitLoading: false,
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
    btnText: {
      type: String,
      default: "发送",
    },
    avatarSrc: {
      type: String,
      default: "",
    },
    autoUpload: {
      type: Boolean,
      default: true,
    },
    uploadImageFunction: Function,
    submit: Function,
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
    async onSubmit() {
      const form = {
        text: this.text,
        images: this.imagesURL,
      };
      this.submitLoading = true;
      const res = await this.submit(form);
      this.submitLoading = false;
      if (!res) return;
      this.$refs["upload"].clearImages([]);
      this.resetText();
    },
    // 子组件通信
    async onShowUpload() {
      this.$refs["upload"].click();
    },
    // 子组件http-request
    async httpRequest(param, ref, _this) {
      // this.$emit("http-request", param, ref, _this);
      const file = param.file;
      const form = new FormData();
      form.append("files", file);
      try {
        const url = await this.uploadImageFunction(form);
        this.imagesURL.push({ uid: file.uid, url: url });
      } catch (error) {
        console.log("upload image http error", error);
        ref.uploadFiles = ref.uploadFiles.filter(
          (uploadFile) => uploadFile.uid !== file.uid
        );
        if (ref.uploadFiles.length <= 0) {
          _this.showUpload = false;
        }
      }
    },
    /**
     * 重置文本和imagesURL
     */
    resetText() {
      this.text = "";
      this.imagesURL = [];
    },
    /**
     * 处理文件移除时的 imagesURL, 通过先后uid的比较来判断，若是都不匹配，则移除最后一个
     * @fileList 还剩余的文件
     * @this imagesURL 在最后submit时，需要发送的url内容
     * @removeIndex 需要移除的index
     */
    handleImageRemove(fileList) {
      let removeIndex = this.imagesURL.length - 1;
      for (const i in fileList) {
        console.log(fileList[i].uid, this.imagesFile[i].uid);
        if (fileList[i].uid !== this.imagesURL[i].uid) {
          removeIndex = i;
        }
      }
      console.log(removeIndex);
      this.imagesURL.splice(removeIndex, 1);
      debugger;
    },
  },
};
</script>

<style lang="scss" scoped>
.index-box {
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