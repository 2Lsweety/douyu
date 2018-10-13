<template>
  <div class="sec-list">
    <kind-page v-if="isShow">
    </kind-page>
    <header-top>
      <div @click="Show">
        <i class="fa fa-list"></i>
      </div>
    </header-top>

    <div class="title">
      <el-row>
        <el-col :span="24">
          <i class="fa fa-caret-square-o-right" style="color:#ff5d23"></i>
          {{ name }}
        </el-col>
      </el-row>
    </div>

    <el-container style="display: block;margin-top: 10px;">
      <el-row>
        <el-col :span="12" v-for="(secList,ins) in secLists" :key="ins">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="secList.roomSrc" class="image">
            <span class="left-bottom">
          <i class="fa fa-user-o"></i>
            {{ secList.nickname }}
          </span>
            <span class="right-top">
           <i class="fa fa-thumbs-o-up"></i>
           {{ secList.hn }}
          </span>
            <span class="descrip">{{ secList.roomName }}</span>
          </el-card>
        </el-col>
      </el-row>
    </el-container>

    <el-row style="margin: 8px 10px;">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark" @click="loadMore">
          <span href="" @click="num++">
            加载更多
          </span>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import axios from 'axios';
  import bus from '../bus';
  import HeaderTop from '../components/HeaderTop';
  import KindPage from '../pages/KindPage'


    export default {
        name: "SecList",
        data: function () {
            return {
              secLists:[],
              type:'',
              num:1,
              name:'',
              isShow:false
            }
        },
        components:{
          HeaderTop,
          KindPage
        },
        methods:{
          Show(){
            this.isShow = true;
          },

          firstReq:function(){
            axios.get('/m/api/room/list',{
              params:{
                page:1,
                type:this.type,
              }
            }).then( (val) => {
              // console.log(val.data);
              this.secLists = val.data.data.list;
            }).catch( (err) => {
              console.log(err);
            })
          },
          loadMore(){
            axios.get('/m/api/room/list',{
              params:{
                page:this.num,
                type:this.type,
              }
            }).then( (val) => {
              // console.log(val.data);
              this.secLists = this.secLists.concat(val.data.data.list);
            }).catch( (err) => {
              console.log(err);
            })
          }
        },
      mounted() {
          this.type = this.$route.params.id;
          this.name = this.$route.params.name;
          this.firstReq();
          console.log(this.$route.params.name);

          var that = this;
          bus.$on('sendClose',function (val) {
            that.isShow = val;
          })
      },
      watch:{
        '$route':function (newValue,oldValue) {
          console.log(newValue.params);
          this.type = newValue.params.id;
          this.name = newValue.params.name;
        },
      },
    }
</script>

<style scoped>

  .title .el-col-24 {
    margin-top: 60px;
    text-align: left;
    margin-left:8px;
    font-size:12px;
    color:#666;
  }

  .title .el-col-24 .fa {
    font-size: 14px;
  }

  .el-container {
    position: relative;
    padding-left: 5px;
  }

  .el-card {
    width: 100%;
    height: 120px;
    border: none;
    padding-right: 5px;
    position:relative;
  }

  .image {
    width: 100%;
    height: 85px;
    display: block;
    border-radius: 8px;
  }

  .sec-list .el-card .left-bottom{
    position:absolute;
    bottom:38px;
    left: 10px;
    color: #fff;
    font-size: 11px;
  }

  .sec-list .el-card .left-bottom i {
    color: #ccc;
  }

  .sec-list .right-top {
    position:absolute;
    bottom:100px;
    right:5px;
    color: #fff;
    font-size: 14px;
  }

  .sec-list .el-card .descrip{
    display: block;
    text-align: left;
    padding: 5px 5px;
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .bg-purple-dark {
    padding: 10px 10px;
    border:solid 1px #ddd;
    border-radius: 4px;
    font-size: 12px;
    color: #666;
  }

  .bg-purple-dark span {
    cursor: pointer;
  }

</style>
