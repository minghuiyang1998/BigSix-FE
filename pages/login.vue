<template>
  <section class="background d-flex flex-justify-center flex-items-center">
    <div class="col-md-5 col-lg-5">
      <div class="text-gray bg-white py-4 px-4" >
        <div style="width:200px;height:200px;" class="mx-auto">
          <lottie
            :options="defaultOptions"
            :height="200"
            :width="200"
            v-on:animCreated="handleAnimation"
          />
        </div>
        <el-form :model="user">
          <el-form-item prop="name">
            <label class="form-label f5">username</label>
            <el-input type="username" v-model="user.name" autocomplete="off" required="true"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <label class="form-label f5">password</label>
            <el-input type="password" v-model="user.pass" autocomplete="off" required="true"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary btn-block" @click="submitForm()">login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script>
import lottie from "vue-lottie";
import animationData from "../assets/lottie/dino_dance.json";
export default {
  components: {
      lottie: lottie,
  },
  data() {
    return {
      user: {
        name: "",
        pass: ""
      },
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
      anim: {}
    };
  },
  methods: {
    submitForm() {},
    handleAnimation: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    }
  }
};
</script>

<style>
.background {
  background: url("../assets/image/new-york-basketball.png");
  background-position: center;
  background-size: 100vw;
  height: 100vh;
}
</style>
