<template>
  <div>
    <!-- <div>导航</div> -->
    <nuxt></nuxt>
    <!-- <div>底部信息</div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.login-container {
  width: 100%;
  min-height: 100%;

  .title-font {
    width: 150px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    color: #ffffff;
    font-weight: bold;
    background: linear-gradient(to right, #68b3ff, #06f, #113da0);
    border-radius: 5px;
  }

  .login-form {
    width: 520px;
    padding: 160px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .title-container {
    text-align: center;
    margin-bottom: 20px;

    img {
      width: 200px;
    }
  }

  .captcha-container {
    width: 340px;
    position: relative;

    .el-button {
      width: 90px;
      padding: 0;
      line-height: 40px;
    }

    .captcha {
      position: absolute;
      right: -110px;

      img {
        width: 90px;
        height: 40px;
        cursor: pointer;
      }
    }
  }
}
</style>