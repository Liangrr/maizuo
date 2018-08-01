<template>
<header class="app-header">
<div class="trigger" @click="showNav()">
    <span class="menu-icon iconfont icon-liebiao"></span>
    <h1 class="title">{{title}}</h1>
</div>
<span class="city-icon">
    {{city}}
    <b class="iconfont icon-xiala2"></b>
</span>
<span class="iconfont icon-wode" ></span>
</header>
</template>

<script>
export default {
    data(){
        return {
            title: '卖座电影',
            city: '深圳'
        }
    },
    methods: {
        //展示侧边栏
        showNav(){
            console.log('点击头部，展示侧边栏');
            this.$center.$emit('show-nav');
        }
    }
}
</script>

<style scoped>
.app-header{
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
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
	font-size: 26px;
}
.title{
    color: #efefef;
    font-size: 16px;
    line-height: 50px;
    font-weight: normal;
    flex: 1;
}
.city-icon{
    font-size: 12px;
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
