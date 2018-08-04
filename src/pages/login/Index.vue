<template>
<div id="login" class="page">
    <input id="phone" type="text" placeholder="输入手机号" />
    <div class="inp_bg"></div>
    
    <input id='code' type="text" placeholder="输入验证码" />
    <div class="inp_bg"></div>
    
    <button id="loginBtn">登录</button>
</div>
</template>

<script>
export default {

}
</script>

<style>
#login{
	position: absolute;
	top: 0px;
    min-height: 100%;
    width: 100%;
    background-color: #f6f6f6;
}

#login input{
	width: 78%;
	height: 30px;
	line-height: 30px;
	position: absolute;
	left: 11%;
	padding-left: 15px;
	box-sizing: border-box;
	border: none;
	background-color: transparent;
}
#login input:nth-of-type(1){
	top: 40px;
}
#login input:nth-of-type(2){
	top: 100px;
}
#login .inp_bg{
	position: absolute;
    left: 10%;
    height: 12px;
    width: 80%;
    border: solid #c4c4c4;
    border-width: 0 1px 1px 1px;
}
#login .inp_bg:nth-of-type(1){
    top: 60px;
}
#login .inp_bg:nth-of-type(2){
    top: 120px;
}
#loginBtn{
	width: 40%;
	height: 36px;
	line-height: 36px;
	color: white;
	font-size: 16px;
	border: none;
	border-radius: 20px;
    background-color: #fe8233;
    position: absolute;
    top: 180px;
    left: 30%;
}
</style>
