import"./index-BnHiHPD0.js";import{_ as S}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BB62F2Sv.js";import{_ as x,u as C}from"./useCesium-Cl5_bCxu.js";import{C as l}from"./index-Cjfam9dp.js";import{c}from"./element-plus-t0Lc7SBq.js";import{l as _,r as b,m as $,S as w,R as r,q as y,O as n,u as a,V as f}from"./vue-chunks-DuYwYYUM.js";/* empty css                  */const E={class:"w-[100%] h-[50px]"},P={class:"h-[calc(100vh-280px)]"},F=_({name:"SkyBox",__name:"widgetDemo",setup(R){const{mapRegister:k,mapMethods:g}=C(),{getMap:t}=g,v=p=>{},o=b(0),B=p=>{let e=null,s=t().scene.postProcessStages;for(let m=0;m<s._stages.length;m++){let u=s.get(m);if(u.name==p){e=u;break}}return e},d=p=>{let e=B(p);e&&t().scene.postProcessStages.remove(e)},i=p=>{switch(d("darkEffect"),d("rainEffect"),d("snowEffect"),d("fogEffect"),d("blur_x_direction"),o.value=p,p){case 1:t().scene.skyBox=l.setOneSkyBox();break;case 2:t().scene.skyBox=l.setTwoSkyBox();break;case 3:t().scene.skyBox=l.setThreeSkyBox();break;case 4:t().scene.postProcessStages.add(l.setDarkEffect());break;case 5:t().scene.postProcessStages.add(l.setBlurBloom({width:.5,height:.5}));break;case 6:t().scene.postProcessStages.add(l.setRainEffect());break;case 7:t().scene.postProcessStages.add(l.setSnowEffect());break;case 8:t().scene.postProcessStages.add(l.setFogEffect());break}};return(p,e)=>($(),w(a(S),{title:"天空盒"},{default:r(()=>[y("div",E,[n(a(c),{type:o.value===1?"primary":"",onClick:e[0]||(e[0]=s=>i(1))},{default:r(()=>[f("天空盒1")]),_:1},8,["type"]),n(a(c),{type:o.value===2?"primary":"",onClick:e[1]||(e[1]=s=>i(2))},{default:r(()=>[f("天空盒2")]),_:1},8,["type"]),n(a(c),{type:o.value===3?"primary":"",onClick:e[2]||(e[2]=s=>i(3))},{default:r(()=>[f("天空盒3")]),_:1},8,["type"]),n(a(c),{type:o.value===4?"primary":"",onClick:e[3]||(e[3]=s=>i(4))},{default:r(()=>[f("黑夜特效")]),_:1},8,["type"]),n(a(c),{type:o.value===5?"primary":"",onClick:e[4]||(e[4]=s=>i(5))},{default:r(()=>[f("场景蓝光")]),_:1},8,["type"]),n(a(c),{type:o.value===6?"primary":"",onClick:e[5]||(e[5]=s=>i(6))},{default:r(()=>[f("雨天特效")]),_:1},8,["type"]),n(a(c),{type:o.value===7?"primary":"",onClick:e[6]||(e[6]=s=>i(7))},{default:r(()=>[f("雪天特效")]),_:1},8,["type"]),n(a(c),{type:o.value===8?"primary":"",onClick:e[7]||(e[7]=s=>i(8))},{default:r(()=>[f("雾天特效")]),_:1},8,["type"])]),y("div",P,[n(x,{onRegister:a(k),config:{},tiandituTk:"80cd3c8ae46ae32fa0ac19f6d739d310",cesiumLoadCB:v},null,8,["onRegister"])])]),_:1}))}});export{F as default};
//# sourceMappingURL=widgetDemo-CzBqvcew.js.map