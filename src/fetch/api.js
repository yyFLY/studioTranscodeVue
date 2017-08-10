  import axios from 'axios'
	import qs from 'qs'
  import * as types from './../store/types'
  // axios 配置
  axios.defaults.timeout = 5000;
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

	
  axios.defaults.baseURL = 'http://'+types.LCPS_HOST+':3000';
  axios.defaults.withCredentials = false;
  
  
  //POST传参序列化
	axios.interceptors.request.use((config) => {
	    if(config.method  === 'post'){
	       //config.data = qs.stringify(config.data);
	       config.data = JSON.stringify(config.data);
	    }
	    return config;
	},(error) =>{
	     _.toast("错误的传参", 'fail');
	    return Promise.reject(error);
	});
	
	//返回状态判断
	axios.interceptors.response.use((res) =>{
		 
	    if(!res.data.status){
	       // return Promise.reject(res);
	    }
	    return res;
	}, (error) => {
	    return Promise.reject(error);
	});

  export function fetch(params) {
  		var type = typeof params.type !='undefinded' ? params.type : 'post';
  		var url = params.url;
  		var data = typeof params.data !='undefinded' ? params.data : {a:2};
  		if(type == 'post'){
				return post(url, data);  			
  		}else{
				return get(url, data); 
  		}
  }
  function get(url, params){
        return new Promise((resolve, reject) => {
          axios.get(url, params)
               .then(response => {
             	 		  messgage({type:'success',method:url,result:'success'});
	             			resolve(response.data);
	             	})
							 .catch((error) => {
							 				messgage({type:'log',method:url,result:error})//reject(error);
							 })
			   });	
  }
  
  function post(url, params){ 
        return new Promise((resolve, reject) => {
          axios.post(url, params)
             .then(response => {
             	 		messgage({type:'success',method:url,result:'success'});
               		resolve(response.data);
			  			})
						 .catch((error) => {
						 			messgage({type:'log',method:url,result:error})
						      reject(error);
						  })
				});	
  } 
 	
 	function messgage(params){
 			var type = params.type;
 			var method = params.method;
 			var result =  params.result;
 			if(type == 'error'){
				console.warn(method+' 请求发送失败，失败原因：',result); 				
 			}
 			else if(type == 'success'){
				console.log(method+' 请求发送成功, 返回值',result);
 			}
 			else{
				console.log(method+' 请求, 返回值',result);
 				
 			}
 	}
  export default {
    // 获取我的页面的后台数据
      testApi(url, params) {
      	console.log('进入api.js');
      	
        var url = 'https://weixin.jirengu.com/weather';
        return fetch({
        	url: url,
        	type: 'get'
        });
      },
      GetConfig (option) {
      	return fetch({
      		url:"/getConfig",
        	type: 'get'
      	});
    	},
    	GetOSInfo (option) {
      	return fetch({
      		url:"/getStatus",
        	type: 'post',
        	data: {}
      	});
    	},
    	 GetStatus (option) {
      	return fetch({
      		url:"/getStatus",
        	type: 'post',
        	data: {}
      	});
    	},
    	 IsNeedPassward (option) {
      	return fetch({
      		url:"/isNeedPassward",
        	type: 'post',
        	data: {}
      	});
    	},
    	SetAudioPreviewVolume (option) {
      	return fetch({
      		url:"/setAudioPreviewVolume",
        	type: 'post',
        	data: option.data
      	});
    	},
    	
      
  }