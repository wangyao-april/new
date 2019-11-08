<template>
    <div class="login">
        <div class="header">
            圈子登录
        </div>
        <div class="ipt">
            <input type="text" placeholder="用户名" v-model="userName" @blur="checkUserName">
            <input type="password" placeholder="登录密码" v-model="userPwd">
            <button @click="login">登录</button>
        </div>
        <router-link to="/register">没有账号,快速注册</router-link>
    </div>
</template>

<script>
import {login} from '@/service/index'
export default {
    data(){
        return {
            userName:'',
            userPwd:''
        }
    },
    methods:{
        async login(){
            let {userName,userPwd}=this;
            let result=await login({userName,userPwd});
            if(result && result.data.code===1){
                window.sessionStorage.setItem('isLogin','true');
                this.$router.replace('/');
            }
            this.$toast(result.data.msg);
        },
        checkUserName(){
            if(!/\w{3,20}/.test(this.userName)){
                this.$toast('请输入正确的用户名')
            }
        }
    }
}
</script>
<style>
    .header{
        width:100%;
        height:45px;
        background:#ccc;
        font-size:20px;
        line-height: 45px;
        text-align: center;
    }
    .ipt input{
        width:90%;
        height:45px;
        background:#ccc;
        outline: none;
        border:none;
        margin:0 5%;
    }
    .ipt button{
        width:90%;
        height:45px;
        margin:0 5%;
        background:#F76968;
        border:none;
        outline: none;
        color:#fff;
    }
    a{
        font-size:16px;
        padding-left:20px;
    }
</style>