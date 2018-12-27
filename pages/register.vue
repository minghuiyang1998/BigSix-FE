<template>
  <section
    class="d-flex flex-justify-center flex-items-center"
    style="background: linear-gradient(-60deg,#fff 40%,  #57B08F 40%) ; height: 100vh;"
  >
    <div class="position-relative col-md-5 col-lg-5 rounded-1 text-gray bg-white py-6 px-4 border box-shadow-large">
      <!-- <div ref="lavContainer" class="position-absolute left-0 right-0 mx-auto " style="width: 200px; height: 200px; top:-100px;"></div> -->
      <div class="f00-light text-center " > Join us!</div>
      <el-form :model="user" class="mt-6">
        <el-form-item prop="name" required="true">
          <label class="form-label f5">username</label>
          <el-input type="username" v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pass" required="true">
          <label class="form-label f5">password</label>
          <el-input type="password" v-model="user.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success btn-block" @click="submitForm()">regist</el-button>
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
        name: "",
        pass: ""
      },
      anim: {}
    };
  },
  head: {
    title: '注册'
  },
  mounted() {
    // this.anim = lottie.loadAnimation({
    //   container: this.$refs.lavContainer,
    //   renderer: "svg",
    //   loop: true,
    //   autoplay: true,
    //   path: "/dino_dance.json",
    // });
  },
  methods: {
    submitForm() {
      if (!this.user.name | !this.user.pass) {
        this.$message('必须填完噢：）～');
        return
      } else {
        //post here
      }
    }
  }
};
</script>

<style>
</style>
