<template>
      <div class="search">

        <div class="search-top">
          <el-row>
            <el-col :span="20">
              <el-input v-model="input" placeholder="搜索房间/主播/分类"></el-input>
            </el-col>
            <el-col :span="4">
              <span>搜索</span>
            </el-col>
          </el-row>

        <el-row>
          <el-col :span="24" style="text-align: left;margin-left:8px;">
            <span>最近热搜</span>
          </el-col>
        </el-row>
        </div>
        <div class="search-footer">
           <el-row>
             <el-col :span="12" v-for="(listName,index) in searchPage" :key="listName">
               <strong>
                 {{ index+1 }}
               </strong>
               <span>
                  {{ listName }}
               </span>
             </el-col>
           </el-row>
        </div>
      </div>
</template>

<script>
  import axios from 'axios';

    export default {
        name: "SearchPage",
        data: function () {
            return {
              searchPage:[],
              input: "",
            }
        },
        mounted(){
          // https://m.douyu.com/api/search/getTodayTop?count=10&isAjax=1
          axios.get('/m/api/search/getTodayTop',{
            count:10,
            isAjax:1
          }).then( (val) => {
            console.log(val.data);
            this.searchPage = val.data.data;
          }).catch( (err) =>{
            console.log(err);
          } )
        }
    }
</script>

<style lang="scss" scoped>

  .search-top .el-row {
    border-bottom: 1px solid #eeeeee;
  &:first-child {
     text-align: center;
     height: 7vh;
     line-height: 7vh;
   }
  &:nth-child(2) {
     height: 8vh;
     line-height: 8vh;
     font-size: 14px;
     font-weight: 600;
     padding-left: 3vw;
   }
  &:nth-child(2) span {
     color: #222222;
   }
  }

  .search /deep/ .el-input__inner {
    background-color: #eeeeee;
    border: none;
    border-radius: 0;
    height: 25px;
    line-height: 25px;
    width: 95%;
    color: #000000;
  }

  .el-col-4 span {
    font-size: 14px;
    color: #333333;
  }

  .search-footer .el-col-12 {
    text-align: left;
    padding: 15px 20px;
    font-size: 14px;
    color:#666;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .search-footer .el-col-12 strong {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: #eee;
    text-align: center;
    color:#ccc;
  }

</style>
