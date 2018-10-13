<template>
    <div class="cateInfro">
      <el-container style="display: block">

        <el-header style="height: 8vh;text-align: left;">
          <el-row style="line-height: 50px;">
            <el-col :span="2">
              <i class="el-icon-close" @click="close"></i>
            </el-col>
            <el-col :span="22" style="text-align: center;color:#666">选择分类</el-col>
          </el-row>
        </el-header>

          <el-main style="padding: 0">

            <el-row>
              <el-col :span="24">
                <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                  <el-menu-item :index="all">全部</el-menu-item>

                  <el-menu-item v-for="(cateList,index) in cate1" :index="`${cateList.cate1Id}`" :key="cateList.cate1Name">
                    {{ cateList.cate1Name }}
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8" v-for="(catelist2,ins2) in cate2" v-if="showId == catelist2 .cate1Id || showId == 111" :key="catelist2.shortName">
                <router-link :to="{name:'cate',params:{id:catelist2.shortName,name:catelist2.cate2Name}}">
                  <el-card :body-style="{ padding: '0px'}">
                    <img :src="catelist2.pic" class="image">
                    <span>{{ catelist2.cate2Name }}</span>
                  </el-card>
                </router-link>
              </el-col>
            </el-row>

          </el-main>

        <el-footer style="height: 43.5vh;">
          <div style="width: 100%;height: 100%;"></div>
        </el-footer>


      </el-container>
    </div>
</template>

<script>
  import axios from 'axios';
  import bus from '../bus';

    export default {
        name: "KindPage",
        data: function () {
            return {
              cate1:[],
              cate2:[],
              isShow:true,
              activeIndex: '111',
              all:'111',
              showId:111
            }
        },
        mounted() {
          axios.get('/m/api/cate/list',{
            // https://m.douyu.com/api/cate/list?type=
            params:{
              type:''
            }
          }).then( (val) => {
            console.log(val.data.data);
            this.cate1 = val.data.data.cate1Info;
            this.cate2 = val.data.data.cate2Info;
          }).catch( (err) => {
            console.log(err);
          })
        },
        methods:{
            close(){
              bus.$emit('sendClose',false);
            },
          handleSelect(key, keyPath) {
            // console.log(key);
            this.showId = Number(key);
          }
        }
    }
</script>

<style scoped>

  .cateInfro{
     width: 100%;
     height: 70%;
     background:#fff;
     z-index: 99999;
     position: fixed;
     top:0;
     left:0;
   }

  .el-header .el-col-2 i {
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }

  .el-menu .el-menu--horizontal {
    border: none;
  }

  .el-col-24 {
    height: 6vh;
    background-color: #ffffff;
    overflow: scroll;
  }

  .el-menu {
    height: 6vh;
    width: 630px;
  }

  .el-menu-item {
    padding: 0 3vw;
  }

  .el-menu--horizontal > .el-menu-item {
    height: 5vh;
    line-height: 5vh;
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    color: #ff630e;
    border-bottom: 2px solid #ff630e;
  }

  .el-main {
    width: 100vw;
    height: 72vh;
    overflow: scroll;
  }

  .el-card {
    width: 33.33vw;
    height: 33.33vw;
    padding-top: 15px;
    border-right: 1px dashed #BBBBBB;
    border-bottom: 1px dashed #BBBBBB;
    background: #f4f4f4;
  }

  .el-card .image {
    width: 18vw;
    height: 18vw;
    border-radius: 50%;
  }

  .el-card span {
    display: block;
    font-size: 12px;
  }

  .el-footer {
    width: 100vw;
    background-color: rgba(0, 0, 0, .2);
  }


</style>
