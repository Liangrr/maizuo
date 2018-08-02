<template>
<div class="film-item">
    <div class="img">
        <img :src="data.poster"/>
    </div>
    <div class="text">
        <h4>{{data.name}}<span class="grade">{{data.grade}}<i class="grade iconfont icon-youjiantou"></i></span></h4>
        <p>{{data.intro}}</p>
        <p v-if="type=='playing'">
            <span>{{data.cinemaCount}}家影院上映</span>
            <span>{{data.watchCount}}人购票</span>
        </p>
        <p v-if="type=='coming'">
            <span>{{data.premiereAt | format-date}}</span>
            <span>{{data.premiereAt | format-date('week')}}</span>
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        data: Object,
        type: String
    }
}
</script>

<style scoped>
.film-item{
    padding: 20px 0;
    display: flex;
    border-bottom: 1px dashed #ddd;
}
.film-item .img{
    width: 80px;
}
.film-item .img img{
    width: 100%;
}
.film-item .text{
    margin-left: 10px;
    flex: 1;
}
.film-item .text h4{
    font-size: 14px;
    color: #333;
    padding: 10px 0;
}
.film-item .text p{
    font-size: 12px;
    color: #999;
    padding: 10px 0;
}
.film-item .text p:last-of-type{
    color: #f78360;
}

.film-item .grade{
	float: right;
	color: #f78360;
	font-size: 16px;
}
.film-item .grade i.iconfont{
	font-size: 26px;
	line-height: 17px;
	color: #ccc;
}
</style>