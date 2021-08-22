<template>
  <div v-show="showUpload">
    <el-upload
      action=""
      list-type="picture-card"
      ref="upload"
      :class="uploadClass"
      :limit="5"
      :multiple="true"
      :auto-upload="autoUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-change="onChange"
      :on-exceed="onExceed"
      :http-request="httpRequest"
    >
      <i class="el-icon-plus upload-plus-icon" ref="trigger"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" width="80vw">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      showAddIcon: false,
      showUpload: false,
    };
  },
  props: {
    files: Array,
    autoUpload: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    uploadClass() {
      return {
        "content-upload": true,
        "content-hidden-upload": this.showAddIcon,
      };
    },
  },
  methods: {
    handleRemove(file, fileList) {
      this.$emit("remove", fileList);
      setTimeout(() => {
        this.fileListChangeHandler(fileList);
      }, 1000);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    clearImages(fileList) {
      this.$refs["upload"].clearFiles();
      this.fileListChangeHandler(fileList);
    },
    onExceed() {
      this.$message({
        type: "warning",
        message: "最多只能上传5张图片",
      });
    },
    onChange(file, fileList) {
      this.fileListChangeHandler(fileList);
      this.$emit("update:files", fileList);
    },
    fileListChangeHandler(fileList) {
      this.showUpload = fileList.length > 0 ? true : false;
      this.showAddIcon = fileList.length < 5 ? false : true;
    },
    async click() {
      this.$refs["trigger"].click();
    },
    httpRequest(param) {
      this.$emit("http-request", param, this.$refs["upload"], this);
    },
  },
};
</script>

<style lang="scss" scoped>
.upload {
  width: 20%;
}
</style>
<style lang="scss">
.content-upload {
  margin-top: 10px;
  .el-upload-list__item,
  .el-upload {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
}
.content-hidden-upload {
  .el-upload {
    display: none;
  }
}
</style>