<template>
  <div id="app">
  	<div class="lcpsPlayer-div">
  		<v-lcpsPlayer :player="player">header</v-lcpsPlayer>
  	</div>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
	import lcpsPlayer from './components/lcpsPlayer/lcpsPlayer.vue';
	export default {
		data() {
			return {
				player: {
					types: 'allpreview',
					playerId: 'lcpsPlayer',	
				}
			};
		},
	  name: 'app',	  
		components: {'v-lcpsPlayer': lcpsPlayer}
	} 
</script>

<style>
	.lcpsPlayer-div{width: 500px;height:300px;}
</style>
