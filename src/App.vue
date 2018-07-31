<template>
  <div id="app">
    <keep-alive>
    	<router-view/>
    </keep-alive>
    
    
  </div>
</template>

<script scoped>
export default {
  name: 'App'
}

</script>

<style>
html,body{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
