<template>
  <section
    class="d-flex flex-justify-center flex-items-center"
    style="background: linear-gradient(-60deg,#fff 40%,  #57B08F 40%) ; height: 100vh;"
  >
    <div class="position-relative col-md-5 col-lg-5 rounded-1 text-gray bg-white py-6 px-4 border box-shadow-large">
      <!-- <div style="width:200px;height:200px;" class="mx-auto">
          <lottie
            :options="defaultOptions"
            :height="200"
            :width="200"
            v-on:animCreated="handleAnimation"
          />
      </div>-->
      <div ref="lavContainer" class="position-absolute left-0 right-0 mx-auto " style="width: 200px; height: 200px; top:-100px;"></div>
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
          <el-button type="success btn-block" @click="submitForm()">login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
// import lottie from "vue-lottie";
// import animationData from "../assets/lottie/dino_dance.json";
import lottie from "lottie-web";

export default {
  // components: {
  //     lottie: lottie,
  // },
  data() {
    return {
      user: {
        name: "",
        pass: ""
      },
      // style: {
      //   width: '200px',
      //   height: '200px',
      //   overflow: "hidden",
      //   margin: "0 auto"
      // }

      // defaultOptions: { animationData: animationData },
      // animationSpeed: 1,
      anim: {}
    };
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/dino_dance.json",
    });
  },
  methods: {
    submitForm() {}
  }
};
</script>

<style>
</style>
