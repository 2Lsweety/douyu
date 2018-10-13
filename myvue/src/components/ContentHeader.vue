<template>
  <div>
      <div class="content-main" v-for="(tab,index) in tabNames">
        <el-row style="padding-top:20px;font-size:14px;">
          <el-col :span="2">
            <img :src="tab.icon" alt="">
          </el-col>
          <el-col :span="5">
            <span>{{ tab.tabName }}</span>
          </el-col>

          <el-col :span="12">
            <template v-for="(cate,ins) in tab.cate2Info" v-if="ins < 2">
              <router-link :to="{name:'cate',params:{id:tab.shortName,name:tab.tabName}}">
              <el-button size="mini" round>
                {{ cate.cate2Name }}
              </el-button>
              </router-link>
            </template>
          </el-col>

          <el-col :span="5">

            <router-link :to="{name:'cate',params:{id:tab.shortName,name:tab.tabName}}">
                更多 <i class="fa fa-chevron-circle-right"></i>
            </router-link>

          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12" v-for="(tabList, index) in tab.list" :key="index">
            <content-show :tabList="tabList" :key="tab.roomName"></content-show>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import ContentShow from '../components/ContentShow'


  export default {
    name: "NavIntroduce",
    data: function () {
      return {
        tabNames: [],
      }
    },
    components: {
      ContentShow
    },
    mounted() {
      axios.get('/m/api/home/mix', {}).then((val) => {
        // console.log(val.data);
        this.tabNames = val.data.data;
      }).catch((err) => {
        console.log(err);
      })
    },
    methods:{
      chuan:function () {
        console.log('即将传值');
        //发射一个自定义事件，并将数据传递过去
        bus.$emit('zhi',this.tabNames)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .content-main {
    width: 100%;
    padding: 0 5px;
    z-index: 100;
  }

  .el-row .el-col-2 img {
    width: 22px;
    height: 22px;
    position: relative;
    bottom: 2px;
  }

  .el-row .el-col-5 span {
    position: relative;
    right: 5px;
  }

  .el-row .el-col-12 {
    text-align: left;
  }

  .el-row .el-col-12 .el-button {
    position: relative;
    bottom:3px;
    right: 6px;
    padding: 5px 6px;
    border: 1px solid #f70;
    color: #f70;
    margin-left: 3px;
  }

  .el-row .el-col-5 a {
    display: block;
    text-align: right;
    margin-right: 8px;
    color:#999;
  }

</style>
