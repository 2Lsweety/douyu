<template>
    <div>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-light">
              <a href="javascript:scroll(0,0)">
                <i class="el-icon-upload2"></i>
                返回顶部
              </a>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              下载客户端
            </div>
          </el-col>
        </el-row>

         <p>
           客服热线：027-87750710 <br>
           武汉斗鱼网络科技有限公司 <br>
           湖北省武汉市东湖开发区光谷软件园F4栋8楼 <br>
           版权所有 © www.douyu.com 鄂ICP备15011961号-1
         </p>
    </div>
</template>

<script>
    export default {
        name: "HomeFooter",
        data: function () {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

  .el-row {
    margin-bottom: 15px;
    font-size: 14px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #f70;
    color:#fff;
    line-height:40px;
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #fff;
  }
  .bg-purple-light a {
    color:#999;
  }
  p {
    text-align: center;
    font-size: 12px;
    color:#999;
    line-height: 15px;
    margin-bottom: 50px;
  }
</style>
