<template>
<nav class="app-nav">
    <!-- 灰色遮罩 -->
    <transition name="fade">
    <div class="small-cover" v-show="isShow"></div>
    </transition>

    <div class="big-cover"  v-show="isShow" @click="hideNav()"></div>

    <!-- 侧边栏 -->
    <transition name="silde">
    <ul class="nav-menu"  v-show="isShow">
        <li v-for="(navItem, index) in navList" :key="index" 
            @click="changePage(navItem.path,index)">
            {{navItem.title}}
            <b class="iconfont icon-youjiantou"></b>
        </li>
    </ul>
    </transition>
</nav>
</template>

<script>
export default {
    data(){
        return {
            isShow: false,
            navList: [
                {title: '首页', path: '/home'},
                {title: '影片', path: '/films'},
                {title: '影院', path: '/cinemas'},
                {title: '商城', path: '/shop'},
                {title: '我的', path: '/mine'},
                {title: '卖座卡', path: '/card'}
            ]
        }
    },
    created(){
//  	展示侧滑栏收值
        this.$center.$on('show-nav', ()=>{
            this.isShow = true;
        });
    },
    methods: {
        // 隐藏侧边栏的点击事件
        hideNav(){
            this.isShow = false;
        },
        //切换界面
        changePage(path,index){
//      	改变路径
            this.$router.push(path);
//          隐藏侧滑栏
            this.hideNav();
//          改变标题传值,vuex原理
			this.$store.commit('changeTitle',this.navList[index].title);
        }
    }
}
</script>

<style scoped>
.big-cover{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 99;
}
.small-cover{
    width: 100%;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
}
@keyframes fadeIn {
    0%{opacity: 0}
    100%{opacity: 1}
}
@keyframes fadeOut {
    0%{opacity: 1}
    100%{opacity: 0}
}
.fade-enter-active{
    animation: fadeIn 200ms;
}
.fade-leave-active{
    animation: fadeOut 200ms;
}

.nav-menu{
    border-top: 1px solid #222;
    background: #282828;
    width: 70%;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    color: #999;
    z-index: 99;
}
@keyframes sildeIn {
    0%{transform: translateX(-100%)}
    100%{transform: translateX(0)}
}
@keyframes sildeOut {
    0%{transform: translateX(0)}
    100%{transform: translateX(-100%)}
}
.silde-enter-active{
    animation: 200ms sildeIn;
}
.silde-leave-active{
    animation: 200ms sildeOut;
}
.nav-menu li{
    line-height: 50px;
    border-bottom: 1px dotted #333;
    padding-left: 10px;
    font-size: 14px;
    position: relative;
}
.nav-menu li b.iconfont{
	font-size: 26px;
	position: absolute;
	right: 10px;
	top: 0px;
}
</style>
