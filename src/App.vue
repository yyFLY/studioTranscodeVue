<template>
  <div id="app">
  	<div class="lcpsPlayer-div">
  		<v-lcpsPlayer :player="player">header</v-lcpsPlayer>
  	</div>
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
	.el-select{width: 100%;}
	.u-text-lightsilver{color: #99A9BF;}

	.lcpsPlayer-div{width: 500px;height:300px;}
</style>
