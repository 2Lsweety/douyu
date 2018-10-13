<template>
  <div class="content">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="tabLists.roomSrc" class="image">
      <span class="left-bottom">
        <i class="fa fa-user-o"></i>
        {{ tabLists.nickname }}
      </span>
      <span class="right-top">
        <i class="fa fa-thumbs-o-up"></i>
        {{ tabLists.hn }}
      </span>
      <span class="descrip">{{ tabLists.roomName }}</span>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "ContentShow",
    data: function () {
      return {
        tabLists: this.tabList
      }
    },
    props: ['tabList'],
  }
</script>

<style scoped>

  .content {
    position: relative;
  }

  .el-card {
    width: 100%;
    height: 120px;
    border: none;
    /*padding-right: 5px;*/
    /*padding:0;*/
    /*margin: 0;*/
  }

  .el-card:nth-child(2n+1){
    padding-right:5px;
  }

  .image {
    width: 100%;
    height: 85px;
    display: block;
    border-radius: 8px;
  }

  .content .el-card .left-bottom{
    position:absolute;
    bottom:35px;
    left: 10px;
    color: #fff;
    font-size: 11px;
  }

  .content .el-card .left-bottom i {
    color: #ccc;
  }

  .content .right-top {
     position:absolute;
     bottom:100px;
     right:10px;
     color: #fff;
    font-size: 14px;
   }

  .content .el-card .descrip{
    display: block;
    text-align: left;
    padding: 5px 5px;
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

</style>
