<template>
  <div
    class="league-card box-shadow-medium"
    :class="{ 'league-card__selected': isSelected, 'box-shadow-large': isSelected }">
    <div class="league-avatar">
      <div class="league-avatar__image" :style="`background-image: url(${avatar})`"></div>
    </div>
    <div class="league-info">
      <div class="league-info__name">{{name}}</div>
      <div v-clampy="2" class="league-info__intro">{{intro}}</div>
    </div>
    <el-dropdown trigger="click" @command="handleCommand">
      <div class="league-dropdown-button">
        <font-awesome-icon icon="ellipsis-v" fixed-width :mask="['far', 'circle']" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="upload">上传数据</el-dropdown-item>
        <el-dropdown-item command="detail">查看详情</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    intro: String,
    avatar: String,
    isSelected: Boolean,
  },

  methods: {
    handleCommand(command) {
      if (command === 'upload') {
        this.$emit('upload', this.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.league-card {
  background: #fff;
  margin-bottom: 30px;
  padding: 10px 20px;
  display: flex;
  border-radius: 5px;
  width: 400px;
  height: 120px;
  transition: transform cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.35s, opacity ease-out 0.3s;
  opacity: 0.6;
  align-items: center;
  cursor: pointer;
  &:hover, &__selected {
    transform: scale(1.025);
    opacity: 1;
  }

  &__selected {
    cursor: default;
  }

  &::not(&__selected) {
    .league-dropdown-button {
      user-select: none;
    }
  }
}

.league-avatar {
  width: 80px;
  height: 80px;
  display: flex;
  padding-right: 10px;
  flex-shrink: 0;
  &__image {
    width: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.league-info {
  display: flex;
  flex-direction: column;
  &__name {
    font-size: 24px;
  }

  &__intro {
    color: #444;
    font-size: 0.9em;
  }
}

.league-dropdown-button {
  cursor: pointer;
  text-align: center;
  outline: none;
}
</style>
