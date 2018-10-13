<template>
        <div class="header-list">
          <el-row>
            <el-col :span="22">
              <ul>
                <li>
                  <a href="">
                    推荐
                  </a>
                </li>
                <li v-for="(kindList, index) in kindLists" >
                  <router-link :to="{name:'cate',params:{id:kindList.shortName,name:kindList.name}}">
                    {{ kindList.name }}
                  </router-link>
                </li>
              </ul>
            </el-col>
            <el-col :span="2">
                <i class="fa fa-list" @click="open"></i>
            </el-col>
          </el-row>
        </div>
</template>

<script>
  import axios from 'axios';
  import bus from '../bus';

    export default {
        name: "HomeHeader",
        data: function () {
            return {
              kindLists:[],
              isShow:true,
              // active:null,
            }
        },
        mounted() {
          // https://m.douyu.com/api/cate/recList?cid=&ct=
          axios.get('/m/api/cate/recList',{
             params:{
               cid:'',
               ct:''
             }
          }).then( (val) => {
            // console.log(val.data);
            this.kindLists = val.data.data;
          }).catch( (err) => {
            console.log(err);
          })
        },
       methods:{
          open(){
            bus.$emit('sendValue',true)
          },
       }
    }
</script>

<style lang="scss" scoped>

  .header-list {
    position: fixed;
    top: 10vh;
    left: 0;
    width: 100%;
    z-index:999;
    background: #fff;
  }

  .header-list .el-row {
    width: 100%;
    line-height: 30px;
  }

  .header-list .el-col-22 {
    overflow: scroll;
  }

  .header-list .el-col-22 ul {
    width: 430vw;
  }

  .header-list .el-col-22 ul li {
    padding:0 6px;
    float: left;
    cursor: pointer;
  }

  .header-list .el-col-22 ul li:first-child a {
    color:#fa7122;
    border-bottom: solid 2px #fa7122;
    padding-bottom:3px;
  }

  .header-list .el-col-22 ul li a {
    font-size: 15px;
    color:#666;
  }

  .header-list .el-col-2 i {
    color:#666;
    cursor: pointer;
    border:solid 1px #eee;
    width: 25px;
    height: 25px;
    padding:5px 8px;
  }

</style>
