<template>
	<div class="swiper-container" ref='banner'>
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in data">
	        	<img :src="item.imageUrl"/>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		props:{
			data:Array
		},
		mounted(){
			this.bannerSwiper = new Swiper(this.$refs.banner,{
//				无限滚动
				loop:true,
				autoplayDisableOnInteraction:false,
				autoplay:1002,
				speed:1000,
			});
//			此处轮播图有一个bug,不能自动播放
		},
//		watch只是数据发生变化而已,而结构发生变化得用updated或者nextTick
		updated(){
//			更新
			this.bannerSwiper.update();
//			重新计算滚动
			this.bannerSwiper.reLoop();
//			滑动到某一张
			this.bannerSwiper.slideTo(1,0);
		},
		activated(){
			this.bannerSwiper = new Swiper(this.$refs.banner,{
//				无限滚动
				loop:true,
				autoplayDisableOnInteraction:false,
				autoplay:1002,
				speed:1000,
			});
		}
		
	}
</script>

<style >

img{
	width: 100%;
	
}
</style>