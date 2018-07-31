<template>
  <div id="home">
    	
    <header>
    	<i class="iconfont icon-liebiao" @click="listAction" ></i>
    	<router-link class="title" :to="{name: 'home'}">卖座电影</router-link>
    	<router-link class="iconfont icon-wode" :to="{name: 'person'}"></router-link>
    	<router-link class="pro" :to="{name:'locat'}">{{locatMsg}}</router-link>
    </header>
    <router-view></router-view>
    <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
	    <ul class="menu" v-show="isShow">
	    	<li>
	    		<router-link class="tab" :to="{name: 'home'}">首页</router-link>
	    	</li>
	    	<li>
	    		<router-link class="tab" :to="{name: 'film'}">影片</router-link>
	    	</li>
	    	<li>
	    		<router-link class="tab" :to="{name: 'cinema'}">影院</router-link>
	    	</li>
	    	<li>
	    		<router-link class="tab" :to="{name: 'shop'}">商场</router-link>
	    	</li>
	    	<li>
	    		<router-link class="tab" :to="{name: 'my'}">我的</router-link>
	    	</li>
	    	<li>
	    		<router-link class="tab" :to="{name: 'mzCar'}">卖座卡</router-link>
	    	</li>
	    </ul>
    </transition>
  </div>
</template>

<script scoped>
export default {
  name: 'App',
  data(){
  	return {
  		isShow:false,
  		locatMsg:'定位',
  	}
  },
  methods:{
  	listAction(){
  		if (this.isShow) {
  			this.isShow = false;
  		}else{
  			this.isShow = true;
  		}
  	}
  },
  created(){
  	console.log(this.locatMsg)
  	this.$center.$on('send-location',(city)=>{
  		this.locatMsg = city
  	})
  },
//activated(){
//	this.$center.$on('send-location',(city)=>{
//		this.locatMsg = city
//	})
//},
  watch:{

  }
}

</script>

<style>

header{
	width: 100%;
	height: 44px;
	background-color: #282828;
	position: relative;
	top: 0;
	left: 0;
	color: #eee;
	float: left;
	text-align: center;
}

.iconfont{
	width: 40px;
	line-height: 44px;
	text-align:center;	
	font-size: 23px;
	color: #ccc;
	float: right;
}
header i.iconfont{
	font-size: 23px;
	color: #ccc;
	width: 50px;
	height: 44px;
	line-height: 44px;
	float: left;
}
.title{
	float: left;
	width: 100px;
	height: 100%px;
	line-height: 44px;
	color: #ccc;
}
.pro{
	width: 40px;
	height: 100%;
	font-size: 12px;
	line-height: 44px;
	float: right;
	text-align:center;
	color: #ccc;
}
.menu{
	width: 60%;
	position: absolute;
	top:44px;
	bottom: 0;
	background-color: #282828;
}
.menu li{
	width: 100%;
	border-bottom: 1px solid #333;
}
.menu li:nth-of-type(1){
	border-top: 1px solid #333;
}
.menu .tab{
	width: 100%;
	height: 40px;
	line-height: 40px;
	font-size: 12px;
	padding-left: 15px;
	box-sizing: border-box;
	color: #ccc;
}
.slideInLeft, .slideOutLeft{
    animation-duration: 500ms;
}
</style>
