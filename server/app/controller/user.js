const md5 = require('md5')
const BaseController = require('./base')
//随机字符串，暂时设定固定
const HashSalt = ":qiugreat@123!"
const createRule = {
    email: {type:"email"},
    nickname: { type: "string" },
    passwd: { type: "string" },
    captcha: { type: "string" },



}

class UserController extends BaseController{
    async login(){

    }

    async register() {
        const {ctx} = this
        try{
            ctx.validate(createRule)
        }catch(e){
            // console.log(e)
            return this.error('参数校验失败',-1,e.errors)
        }

        const {email,passwd,captcha,nickname} = ctx.request.body
        console.log({ email, passwd, captcha, nickname })
        //验证码校验
        if (captcha.toUpperCase() === ctx.session.captcha.toUpperCase()) {
            //邮箱是否重复
            if (await this.checkEmail(email)) {
                this.error('邮箱重复了')
            } else {
                const ret = await ctx.model.User.create({
                    email,
                    nickname,
                    passwd:md5(passwd+HashSalt)
                })
                if(ret._id){this.message('注册成功')}
            }
            
        }else{
            this.error('验证码错误')
        }

        // this.succexx({name:'qiu'})


    }
    async checkEmail(email){
        const user = await this.ctx.model.User.findOne({email})
        return user
    }
    async verify() {
        //检验用户名是否存在 

    }
    async info() {

    }

}

module.exports = UserController