var f=(g,d,i)=>new Promise((c,n)=>{var u=a=>{try{e(i.next(a))}catch(r){n(r)}},h=a=>{try{e(i.throw(a))}catch(r){n(r)}},e=a=>a.done?c(a.value):Promise.resolve(a.value).then(u,h);e((i=i.apply(g,d)).next())});import{_ as w}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BB62F2Sv.js";import{_ as y,u as b}from"./useCesium-Cl5_bCxu.js";import{P as E}from"./HexagonSpreadMaterialProperty-CggJxjwh.js";import{S as R}from"./index-BnHiHPD0.js";import{l as N,m as D,S as T,R as S,q as M,O as k,u as _}from"./vue-chunks-DuYwYYUM.js";/* empty css                  */import"./element-plus-t0Lc7SBq.js";const L={class:"h-[calc(100vh-280px)]"},P=N({name:"Demo2",__name:"Demo2",setup(g){const{mapRegister:d,mapMethods:i}=b(),c=e=>{e=Number(e)/1e3,e=e/2;for(var a=0,r=360,C=e/3,m=[],t=a;t<=r;t++){var o=Cesium.Math.toRadians(t);m.push(new Cesium.Cartesian2(e*Math.cos(o),e*Math.sin(o)))}for(var t=r;t>=a;t--){var s=Cesium.Math.toRadians(t);m.push(new Cesium.Cartesian2((e-C)*Math.cos(s),(e-C)*Math.sin(s)))}return m},n=(e=2)=>f(this,null,function*(){return yield R.post({url:"http://42.192.73.101:7933/api/sewage/SewageMapScreen/outWellSiteList",headers:{"Content-Type":"application/json"},data:{outWellType:e},params:{token:"0263563941e58bfa562f22e1776ffbd6"}})}),u=(e=2)=>f(this,null,function*(){return yield R.post({url:"http://42.192.73.101:7933/api/sewage/SewageMapScreen/netWorkSiteList",headers:{"Content-Type":"application/json"},data:{pipeNetworkType:e},params:{token:"0263563941e58bfa562f22e1776ffbd6"}})}),h=e=>f(this,null,function*(){e.camera.setView({destination:Cesium.Cartesian3.fromDegrees(119.858963,30.801224,5e3)});const a=yield n(2),r=yield n(1),C=yield u(2),m=yield u(1);a.data.forEach(t=>{e.entities.add({position:Cesium.Cartesian3.fromDegrees(Number(t.lon),Number(t.lat),0),cylinder:{length:10,topRadius:5,bottomRadius:5,material:Cesium.Color.fromCssColorString("#0bbabb"),heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,outline:!1,outlineColor:Cesium.Color.WHITE,numberOfVerticalLines:1}})}),r.data.forEach(t=>{e.entities.add({position:Cesium.Cartesian3.fromDegrees(Number(t.lon),Number(t.lat),0),cylinder:{length:10,topRadius:5,bottomRadius:5,material:Cesium.Color.fromCssColorString("#af15e3"),heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,outline:!1,outlineColor:Cesium.Color.WHITE,numberOfVerticalLines:1}})}),C.data.forEach(t=>{fetch(decodeURIComponent(t.pipeNetworkUrl).replace(new RegExp("&amp;","g"),"&"),{method:"get"}).then(o=>o.json()).then(o=>{o.features.forEach(s=>{let l=[];s.geometry.coordinates[0].forEach(p=>{l.push(Cesium.Cartesian3.fromDegrees(p[0],p[1],0))}),e.entities.add({polylineVolume:{positions:l,cornerType:Cesium.CornerType.ROUNDED,shape:c(3e3),material:new E(2e3,new Cesium.Color(1,36,46),new Cesium.Cartesian2(20,1),"src/assets/image/line15.png"),outline:!0,outlineColor:Cesium.Color.BLUE.withAlpha(.3)}})})})}),m.data.forEach(t=>{fetch(decodeURIComponent(t.pipeNetworkUrl).replace(new RegExp("&amp;","g"),"&"),{method:"get"}).then(o=>o.json()).then(o=>{o.features.forEach(s=>{let l=[];s.geometry.coordinates[0].forEach(p=>{l.push(Cesium.Cartesian3.fromDegrees(p[0],p[1],0))}),e.entities.add({polylineVolume:{positions:l,cornerType:Cesium.CornerType.ROUNDED,shape:c(3e3),material:Cesium.Color.fromCssColorString("#af15e3")}})})})})});return(e,a)=>(D(),T(_(w),{title:"和平管网演示"},{default:S(()=>[M("div",L,[k(y,{onRegister:_(d),config:{},tiandituTk:"80cd3c8ae46ae32fa0ac19f6d739d310",cesiumLoadCB:h},null,8,["onRegister"])])]),_:1}))}});export{P as default};
//# sourceMappingURL=Demo2-DOz0jYKT.js.map