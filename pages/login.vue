<template>
  <section
    class="d-flex flex-justify-center flex-items-center"
    style="background: linear-gradient(-60deg,#fff 40%,  #57B08F 40%) ; height: 100vh;"
  >
    <div
      class="position-relative col-md-5 col-lg-5 rounded-1 text-gray bg-white pt-6 px-4 border box-shadow-large"
    >
      <div
        ref="lavContainer"
        class="position-absolute left-0 right-0 mx-auto"
        style="width: 200px; height: 200px; top:-100px;"
      ></div>
      <el-form :model="user" class="mt-6">
        <el-form-item prop="username" :required="true">
          <label class="form-label f5">用户名</label>
          <el-input type="username" v-model="user.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" :required="true">
          <label class="form-label f5">密码</label>
          <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary btn-block" @click="submitForm()">login</el-button>
          <div class="mt-2">New to BigSix?
            <nuxt-link to="/register">Create an account.</nuxt-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
import lottie from "lottie-web";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      anim: {}
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/dino_dance.json"
    });
  },
  methods: {
    async submitForm() {
      if (!this.user.username || !this.user.password) {
        this.$message("必须填完噢：）～");
        return;
      } else {

        try {
          let res = await this.$axios.$post(
            "/api/auth/signin",
            this.user
          );

          if (res.ok) {
            this.$store.commit("user/SET_USER", res);
            this.$router.push('/')
          } else {
            this.$message(res.message)
          }
        } catch (err) {
            this.$message(err.message);
        }
      }
    }
  }
};
</script>

<style>
</style>
