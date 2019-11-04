<template>
    <div class="register">
        <div class="header">
            圈子注册
        </div>
        <div class="ipt">
            <input type="text" placeholder="用户名">
            <input type="text" placeholder="密码">
            <button>注册</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {

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
</style>