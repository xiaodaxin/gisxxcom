# gisxxcom

gisxxcom是ArcGIS API for JavaScript的扩展，功能不断升级中。

## 如何使用
将gisxxcom文件夹放在部署的API目录中（arcgis_js_api/library/3.20/3.20/），然后就可以想引用其它模块一样使用gisxxcom了

```javascript
require([
  "gisxxcom/Geocoder"
], function(Geocoder, ... ) {

  var geocoder = new Geocoder("WtSZDjE0KEgfSMsxGY7pxnlk");
});
```


---

## 类：Geocoder

> Geocoder类主要封装调用百度API，实现位置逆编码、位置天气信息、位置静态全景图展示。

### 属性
| 名称 | 类型 | 介绍 |
| :---:| :---: | :---: |
| ak | String | 从百度地图获得的密钥，调用百度API必须要有百度的密钥 |

### 方法

| 名称 | 返回 | 介绍 |
| :---:| :---: | :---: |
| getLocation(opt) | None | 获得对应位置的位置信息 |
| getWeather(opt) | None | 获得对应位置的天气信息 |
| getPicture(opt) | None | 获得对应位置的全景静态图片 |

### 详细

#### 构造方法
Geocoder(ak)
- **ak**：String类型，表示从[百度API官网](http://lbsyun.baidu.com/)申请的密钥。

```JavaScript
require([
  "gisxxcom/Geocoder", ... 
], function(Geocoder, ... ) {
  var geocoder = new Geocoder("WtSZDjE0KEgfSMsxGY7pxnlk");
  ...
});
```


#### 属性介绍
- **ak**：String类型，表示从[百度API官网](http://lbsyun.baidu.com/)申请的密钥。
例如：

```JavaScript
Geocoder.ak=WtSZDjE0KEgfSMsxGY7pxnlk
```

#### 方法介绍

**getLocation(opt)**  opt指定了执行该方法的配置，为Object类型，包含的属性：

| 名称 | 类型 | 介绍 |
| :---:| :---: | :---: |
| point | Point | 必须指定，代表要获得哪个位置的信息 |
| domId | String | 必须指定，代表将结果信息插入到HTML哪个标签中，指定标签的ID |
| detailed | Boolean | 默认为false，如果为true则显示该位置详细信息，为false只显示简要信息 |

**getWeather(opt)**  opt指定了执行该方法的配置，为Object类型，包含的属性：

| 名称 | 类型 | 介绍 |
| :---:| :---: | :---: |
| point | Point | 必须指定，代表要获得哪个位置的天气信息 |
| domId | String | 必须指定，代表将结果信息插入到HTML哪个标签中，指定标签的ID |
| detailed | Boolean | 默认为false，如果为true则显示该位置详细天气信息，为false只显示简要信息 |

**getPicture(opt)**  opt指定了执行该方法的配置，为Object类型，包含的属性：

| 名称 | 类型 | 介绍 |
| :---:| :---: | :---: |
| point | Point | 必须指定，代表要获得哪个位置的全景静态图片 |
| domId | String | 必须指定，代表将全景静态图片的URL插入到HTML哪个IMG标签中，指定IMG标签的ID |
| fov | Number | 默认为180，图片水平方向范围，范围[10,360]，fov=360即可显示整幅全景图 |
| quality | Number | 默认为5，代表图片质量，范围为[1-10 ] ，数值越大图片越精细|
