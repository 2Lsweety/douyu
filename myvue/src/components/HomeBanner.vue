<template>
    <div>
      <template>
        <el-carousel height="200px" :interval="5000" arrow="never">
          <el-carousel-item v-for="item in 6" :key="item">
            <img :src="`/static/images/picture.${item}.jpg`">
          </el-carousel-item>
        </el-carousel>
      </template>

    </div>
</template>

<script>
    export default {
        name: "ContentHeader",
        data: function () {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

   /deep/ .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius:50%;
  }

  img {
    width: 100%;
    height: 100%;
    /*z-index: 100;*/
  }

</style>
