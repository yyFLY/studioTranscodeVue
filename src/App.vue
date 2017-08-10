<template>
  <div id="app">
  	<v-lcpsPlayer>header</v-lcpsPlayer>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
	import lcpsPlayer from './components/lcpsPlayer/lcpsPlayer.vue';
	export default {
	  name: 'app',	  
		components: {'v-lcpsPlayer': lcpsPlayer}
	}
</script>

<style>
</style>
