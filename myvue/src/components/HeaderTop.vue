<template>
    <div class="homeTop">
      <div class="top">
        <el-row :gutter="5">
          <el-col :span="7" class="grid-content bg-purple">
              <img src="../assets/logo.png" alt="">
          </el-col>
          <el-col :span="5" class="grid-content bg-purple">
              <el-button>
                  打开APP
              </el-button>
          </el-col>
          <el-col :span="3" class="grid-content bg-purple">
              <el-button>
                <span>充值</span>
              </el-button>
          </el-col>
          <el-col :span="9" class="grid-content bg-purple">
              <slot></slot>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
    }
</script>

<style lang="scss" scoped>

  .top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
    padding-top: 10px;
    padding-left: 8px;
    background: #fff;
    z-index:999;
  }

  .top .el-row .el-col-7 img {
    width: 100%;
  }

  .top .el-row .el-button {
    padding: 2vw 3vw;
    border-radius: 3px;
    border-color: #ff5d23;
    color: #ff5d23;
    font-size: 14px;
  }

  .top .el-row .el-col-5 {
    border-color: #ff5d23;
    margin-top: 5px;
    color: #ff5d23;
    font-size: 14px;
  }

  .top .el-row .el-col-3 .el-button {
    position: relative;
    top:5px;
    left:14px;
    background:#ff5d23 ;
  }

  .el-col-3 .el-button span {
    color:#fff;
  }

  .el-col-9 {
    text-align: right;
    position: relative;
    top:8px;
    right:10px;
    color:#666;
    cursor: pointer;
  }



</style>
