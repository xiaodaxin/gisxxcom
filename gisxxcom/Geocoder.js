define(["dojo/_base/declare","dojo/request/script","dojo/json","dojo/dom"],function(declare,script,JSON,dom){
	 return declare("gisxxcom.Geocoder",null, {

	 	ak: null,

	 	constructor: function(ak){
	 		this.ak=ak;
	 	},

	 	constructor: function(){
	 		this.ak="WtSZiDjE0KEgfSMsxGY7pxng";
	 	},
       
        getLocation: function(opt){

        	var point=opt.point;
        	var domID=opt.domId;
        	var detailed=("detailed" in opt)?opt.detailed:false;              //默认为false，不显示详细地址信息

        	var result={};

        		script.get("http://api.map.baidu.com/geocoder/v2/?coordtype=wgs84ll&location="+opt.point.getLatitude()+","+opt.point.getLongitude()+"&output=json&pois=1&ak="+this.ak, {
    			jsonp: "callback"
  			}).then(function(data){
  				
    			result["description"]=data.result.sematic_description;
    			result["address"]=data.result.formatted_address;

    			console.log(result)

    			if(detailed){
    				dom.byId(opt.domId).innerHTML=result.address+","+result.description;
    			}else{
    				dom.byId(opt.domId).innerHTML=result.description;
    			}
  			})
        
        },

        getWeather: function(opt){
        	var result={};

        	var point =opt.point;
        	var domID=opt.domId;
        	var detailed=("detailed" in opt)?opt.detailed:false;   //默认为false，不显示详细天气信息

        	script.get("http://api.map.baidu.com/telematics/v3/weather?location="+point.getLongitude()+","+point.getLatitude()+"&output=json&ak="+this.ak+"&coord_type=wgs84",{
        		jsonp:"callback"
        	}).then(function(data){

        		result.date=data.results[0].weather_data[0].date;
        		result.temperature=data.results[0].weather_data[0].temperature;
        		result.weather=data.results[0].weather_data[0].weather;
        		result.wind=data.results[0].weather_data[0].wind;
        		result.pm25=data.results[0].pm25;

        		if(detailed){
    				dom.byId(opt.domId).innerHTML=result.date+"，"+result.temperature+"，"+result.weather+"，"+result.wind+"，"+result.pm25+"(pm2.5)";
    			}else{
    				dom.byId(opt.domId).innerHTML=result.date;
    			}


        	});
        },

        getPicture: function(opt){

        	var point=opt.point;
        	var domId=opt.domId;
        	var fov=("fov" in opt)?opt.fov:180;    //默认180度视角
        	var quality=("quality" in opt)?opt.quality:5;    // 默认质量为50
        	var width;
        	if(quality>10){
        		width=1024
        	}else if(quality<2){
        		width=20
        	}else{
        		width=quality*100
        	}
        	var height=width/2;

        	var url= "http://api.map.baidu.com/panorama/v2?ak="+this.ak+"&width="+width+"&height="+height+"&location="+point.getLongitude()+","+point.getLatitude()+"&fov="+fov+"&coordtype=wgs84ll";

        	dom.byId(domId).src=url;

        }
    })
})

