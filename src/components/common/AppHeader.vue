<template>
<header class="app-header">
<div class="trigger" @click="showNav()">
    <span class="menu-icon iconfont icon-liebiao"></span>
    <h1 class="title">&nbsp;&nbsp;{{$store.state.title}}</h1>
</div>
<span class="city-icon" @click="cityAction()">
    {{$store.state.city}}&nbsp;
    <b class="iconfont icon-xiala2"></b>
</span>
<span class="iconfont icon-wode" @click="loginAction()">
</span>
</header>
</template>

<script>
export default {
    methods: {
        //展示侧边栏
        showNav(){
//      	展示侧边栏传值
            this.$center.$emit('show-nav');
        },
        loginAction(user){
        	user = user || '登录';
//      	跳转到登录界面
        	this.$router.push({ name: 'login'})
        	this.$store.commit('changeTitle',user);
        },
        cityAction(city){
        	city = city || '选择城市';
        	this.$router.push({name:'location'})
        	this.$store.commit('changeTitle',city);
        }
    },

}
</script>

<style scoped>
.app-header{
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
    background: #282828;
    display: flex;
}
.app-header .trigger{
    flex: 1;
    display: flex;
}
.app-header span{
    color: #999;
    width: 50px;
    text-align: center;
    line-height: 50px;
}
.app-header span.iconfont{
	font-size: 24px;
}
.title{
    color: #efefef;
    font-size: 14px;
    line-height: 50px;
    font-weight: normal;
    flex: 1;
}
.city-icon{
    font-size: 14px;
    padding-right: 10px;
    position: relative;
}
.city-icon b{
	position: absolute;
	right: 0;
	top: 0;
}
.app-header b.iconfont{
	font-size: 22px;
}
.person-icon{
    font-size: 18px;  
}

</style>
