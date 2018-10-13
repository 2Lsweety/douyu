<template>
  <div class="home">
    <kind-page v-if="isShow"></kind-page>
    <el-header style="padding:0"  v-else class="head">

     <template>
       <header-top>
         <router-link  to="/search" style="color:#666;">
           <i class="fa fa-search"></i>
         </router-link>
       </header-top>
       <home-header></home-header>
     </template>
    </el-header>

    <el-container style="display: block;margin-top: 40px;">
      <home-banner></home-banner>
    </el-container>

    <el-main style="padding:0">
      <content-header></content-header>
    </el-main>

    <el-footer>
      <home-footer></home-footer>
    </el-footer>
  </div>
</template>

<script>
  import ContentHeader from '../components/ContentHeader.vue';
  import HomeHeader from '../components/HomeHeader.vue';
  import HomeBanner from '../components/HomeBanner.vue';
  import HeaderTop from '../components/HeaderTop.vue';
  import HomeFooter from '../components/HomeFooter.vue';
  import KindPage from '../pages/KindPage';
  import bus from '../bus';


  export default {
    name: "HomePage",
    data: function () {
      return {
        isShow:false
      }
    },
    components: {
      HeaderTop,
      HomeHeader,
      ContentHeader,
      HomeBanner,
      HomeFooter,
      KindPage
    },
    mounted(){
      var that = this;
      bus.$on('sendValue',function (val) {
        that.isShow = val;
      });
      bus.$on('sendClose',function (val) {
        that.isShow = val;
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
