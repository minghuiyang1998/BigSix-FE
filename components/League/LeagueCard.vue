<template>
  <div
    class="league-card box-shadow-medium"
    :class="{ 'league-card__selected': isSelected, 'box-shadow-large': isSelected }">
    <LeagueAvatar :avatar="avatar" />
    <div class="league-info">
      <div class="league-info__name">{{name}}</div>
      <div v-clampy="2" class="league-info__intro">{{introduction}}</div>
    </div>
  </div>
</template>

<script>
import LeagueAvatar from './LeagueAvatar';
export default {
  props: {
    id: Number,
    name: String,
    introduction: String,
    avatar: String,
    isSelected: Boolean,
  },

  components: {
    LeagueAvatar
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
