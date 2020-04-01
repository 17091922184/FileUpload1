<template>
    <div class="login-container">
        <el-form class="login-form" label-width="100px" :model="form" :rules="rules" ref="registerForm">
            <div class="title-container">
                <img src="/logo/png" alt="">
            </div>
            <el-form-item preos="email" lanel="邮箱">
                <el-iput v-model="form.email" placeholder="请输入邮箱"></el-iput>
            </el-form-item>

            <el-form-item preos="captcha" lanel="验证码" class="captcha-container">
                <div class="captcha">
                    <img :src="code.captcha" alt="">
                </div>
                <el-iput v-model="form.email" placeholder="请输入验证码"></el-iput>
            </el-form-item>

            <el-form-item preos="nickname" lanel="昵称">
                <el-iput v-model="form.nickname" placeholder="请输入昵称"></el-iput>
            </el-form-item>

            <el-form-item preos="passwd" lanel="密码">
                <el-iput v-model="form.passwd" placeholder="请输入密码"></el-iput>
            </el-form-item>

            <el-form-item preos="repasswd" lanel="确认密码">
                <el-iput v-model="form.repasswd" placeholder="请再次输入密码"></el-iput>
            </el-form-item>

            <el-form-item preos="repasswd" lanel="">
                <el-button>注册</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        layout:'login',
        data(){
            return{
                form:{
                    email:"",
                    nickname:""
                },
                rules:{
                    email:[
                        { required:true,message:"请输入邮箱" },
                        { type:'email',message:"请输入正确的邮箱格式" },
                    ]
                },
                code:{
                    captcha:"/api/captcha"
                }

            }
        }
        
    }
</script>

<style scoped>

</style>