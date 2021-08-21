<template>
  <div v-show="commentShow">
    <div class="comments border-t">
      <!-- #region 小用户卡片-->
      <div class="little card">
        <index-box
          :textareaSize="{ minRows: 1, maxRows: 3 }"
          :emojiPicker="true"
          :avatarSrc="avatar"
        ></index-box>
        <div class="header">
          <template v-if="comments && comments.length > 0">
            <div class="avatarBox" v-for="item in comments" :key="item.id">
              <img :src="item.avatar" />
            </div>
            <!-- 用户名 -->
            <div class="user" :key="item.id">
              <div class="name">
                item.username<span class="content">这是我评论的内容。</span>
              </div>
              <div class="other">2分钟前</div>
            </div>
          </template>
          <!-- 头像 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexBox from "../IndexBox.vue";

import { mapState } from "vuex";

export default {
  name: "CommandList",
  props: {
    commentShow: {
      type: Boolean,
      required: true,
    },
    comments: Array,
  },
  computed: {
    ...mapState("user", {
      avatar: "avatar",
    }),
  },
  components: {
    IndexBox,
  },
};
</script>

<style lang="scss" scoped>
.comments {
  margin: 0 auto;
  z-index: 0;
  animation: show 0.5s;
  transform: perspective(500px);
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .little.card {
    border-radius: 0 0 20px 20px;
    padding: 20px 10px 20px 10px;
    margin-top: 0px;

    font-weight: normal;
    .name {
      font-size: 14px;
      color: #ed8060;
      .content {
        font-weight: 400;
        color: black;
      }
    }
    > .other {
      font-size: 10px;
    }
  }
}
</style>