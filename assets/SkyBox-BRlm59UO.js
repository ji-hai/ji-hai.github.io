import"./index-BnHiHPD0.js";import{_ as B}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BB62F2Sv.js";import{_ as S,u as _}from"./useCesium-Cl5_bCxu.js";import{C as c}from"./index-Cjfam9dp.js";import{c as f}from"./element-plus-t0Lc7SBq.js";import{l as C,r as b,m as E,S as $,R as n,q as y,O as i,u as a,V as l}from"./vue-chunks-DuYwYYUM.js";/* empty css                  */const w={class:"flex w-[100%] flex-wrap"},P={class:"h-[calc(100vh-280px)]"},F=C({name:"SkyBox",__name:"SkyBox",setup(R){const{mapRegister:k,mapMethods:g}=_(),{getMap:t}=g,v=r=>{},o=b(0),x=r=>{let e=null,s=t().scene.postProcessStages;for(let d=0;d<s._stages.length;d++){let u=s.get(d);if(u.name==r){e=u;break}}return e},m=r=>{let e=x(r);e&&t().scene.postProcessStages.remove(e)},p=r=>{switch(m("darkEffect"),m("rainEffect"),m("snowEffect"),m("fogEffect"),m("blur_x_direction"),o.value=r,r){case 1:t().scene.skyBox=c.setOneSkyBox();break;case 2:t().scene.skyBox=c.setTwoSkyBox();break;case 3:t().scene.skyBox=c.setThreeSkyBox();break;case 4:t().scene.postProcessStages.add(c.setDarkEffect());break;case 6:t().scene.postProcessStages.add(c.setRainEffect());break;case 7:t().scene.postProcessStages.add(c.setSnowEffect());break;case 8:t().scene.postProcessStages.add(c.setFogEffect());break}};return(r,e)=>(E(),$(a(B),{title:"天空盒"},{default:n(()=>[y("div",w,[i(a(f),{type:o.value===1?"primary":"",onClick:e[0]||(e[0]=s=>p(1))},{default:n(()=>[l("天空盒1")]),_:1},8,["type"]),i(a(f),{type:o.value===2?"primary":"",onClick:e[1]||(e[1]=s=>p(2))},{default:n(()=>[l("天空盒2")]),_:1},8,["type"]),i(a(f),{type:o.value===3?"primary":"",onClick:e[2]||(e[2]=s=>p(3))},{default:n(()=>[l("天空盒3")]),_:1},8,["type"]),i(a(f),{type:o.value===4?"primary":"",onClick:e[3]||(e[3]=s=>p(4))},{default:n(()=>[l("黑夜特效")]),_:1},8,["type"]),i(a(f),{type:o.value===6?"primary":"",onClick:e[4]||(e[4]=s=>p(6))},{default:n(()=>[l("雨天特效")]),_:1},8,["type"]),i(a(f),{type:o.value===7?"primary":"",onClick:e[5]||(e[5]=s=>p(7))},{default:n(()=>[l("雪天特效")]),_:1},8,["type"]),i(a(f),{type:o.value===8?"primary":"",onClick:e[6]||(e[6]=s=>p(8))},{default:n(()=>[l("雾天特效")]),_:1},8,["type"])]),y("div",P,[i(S,{onRegister:a(k),config:{},tiandituTk:"80cd3c8ae46ae32fa0ac19f6d739d310",cesiumLoadCB:v},null,8,["onRegister"])])]),_:1}))}});export{F as default};
//# sourceMappingURL=SkyBox-BRlm59UO.js.map
