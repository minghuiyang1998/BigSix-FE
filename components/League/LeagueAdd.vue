<template>
  <div class="league-card box-shadow">
    <font-awesome-icon icon="plus" size="2x" :style="{ color: '#888' }" />
  </div>
</template>


<style lang="scss" scoped>
.league-card {
  background: #fafafa;
  margin-bottom: 30px;
  padding: 10px 20px;
  display: flex;
  border-radius: 5px;
  width: 400px;
  height: 120px;
  border: 1px dashed #ddd;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: transform cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.35s;
  &:hover {
    transform: scale(1.025);
  }
}
</style>
