<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>
