<template>
  	<div ref="playerBox"></div>
</template>

<script>
		/*播放器*/
//		urlType 播放地址类型(allpreview:播放预览视频流,smallVideo:播放各路输入源的流)
//		playerId 播放器的ID
//		width height volume 播放器的宽高音量
//		channel urlType为smallVideo时,播放的第几路信源		
		
	  import * as types from './../../store/types';
	  import swfobject  from './swfobject';//加载flash的js插件
		export default {
			props: {
				player: {
					type: Object
				}
			},
			mounted: function(){
				this.loadPlayer()
			},
			methods: {
				loadPlayer(){
					var urlType = this.player.types;
	        var playerId = typeof this.player.playerId != 'undefined' ? this.player.playerId : 'LCPS-PLAYER' ;
	        this.$refs.playerBox.id = playerId;
	        var width = typeof this.player.width != 'undefined' ? this.player.width : '100%';
	        var height =  typeof this.player.height != 'undefined' ? this.player.height : '100%';
	        var volume =  typeof this.player.volume != 'undefined' ? this.player.volume : 1;
	        var channel =  typeof this.player.channel != 'undefined' ? this.player.channel : 0;		
					var lcpsUrl = types.LCPS_HOST;	
					var stream ,url ;
					
					if(urlType == 'pgw'){
						  url = 'rtmp://'+lcpsUrl+'/3001' ;
						  stream = '3_pgw';
					}
					else if(urlType == 'allpreview'){
						url = 'rtmp://'+lcpsUrl+'/3001' ;
						stream = 'allpreview';
					}
					else if(urlType == 'smallVideo'){
						  url = 'rtmp://'+lcpsUrl+'/3001' ;
						  stream = channel+'_small'
					}	
				
          studioApp_embedPlayer(width, height,url,stream,volume, playerId);
				}
			}
		}	

    //嵌入播放器插件
    function studioApp_embedPlayer(width, height, url, stream, volume, playerId, bgcolor, bStart, noVideo) {
            
            var time = '201708110';
            // For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection.
            var swfVersionStr = "10.2.0";
            // To use express install, set to playerProductInstall.swf, otherwise the empty string.
            var xiSwfUrlStr = "/static/lcpsPlayerFlash/playerProductInstall.swf?v="+time;
            var flashvars = {
                url: url,
                stream: stream,
                volume: volume,/* 0 - 1 */
                mode: "play", 
            };
            if (bStart != undefined && bStart != null) {
                flashvars['bStart'] = bStart;
            }
            if (noVideo != undefined && noVideo != null) {
                flashvars['noVideo'] = noVideo;
            }
            var params = {};
            params.quality = "high";
            params.bgcolor = "#ffffff";
            params.allowscriptaccess = "sameDomain";
            params.allowfullscreen = "true";
            params.wmode = "Opaque";
            if (bgcolor != undefined && bgcolor != null) {
                params['bgcolor'] = bgcolor;
            }
            var attributes = {};
            attributes.id = playerId;
            attributes.name = playerId;
            // attributes.align = "middle";
            attributes.style = "float:left;padding-right:";
            swfobject().embedSWF(
                "/static/lcpsPlayerFlash/player.swf?v="+time, playerId,
                width, height,
                swfVersionStr, xiSwfUrlStr,
                flashvars, params, attributes);
            // JavaScript enabled so display the flashContent div in case it is not replaced with a swf object.
            swfobject().createCSS("#" + playerId, "display:block;text-align:left;float:left;");
    }

</script>

<style>
</style>
