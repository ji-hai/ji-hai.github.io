var l=(d,n,t)=>new Promise((c,e)=>{var a=o=>{try{s(t.next(o))}catch(m){e(m)}},i=o=>{try{s(t.throw(o))}catch(m){e(m)}},s=o=>o.done?c(o.value):Promise.resolve(o.value).then(a,i);s((t=t.apply(d,n)).next())});import{_}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DXMj_k4I.js";import{_ as f,u as h}from"./useCesium-BVJiPYa5.js";import{l as g,m as y,p as C,O as u,R as B,q as r,u as p,P as V}from"./vue-chunks-DuYwYYUM.js";import"./index-DrTOaMr6.js";import"./element-plus-t0Lc7SBq.js";/* empty css                  */const k="/assets/lc-DD5BJGMx.mp4",x=r("video",{id:"myVideo",muted:"true",autoplay:"true",loop:"true",style:{display:"none"}},[r("source",{src:k,type:"video/mp4"})],-1),E={class:"h-[calc(100vh-280px)]"},j=g({name:"VideoProjection",__name:"VideoProjection",setup(d){const{mapRegister:n,mapMethods:t}=h(),c=e=>l(this,null,function*(){function a(){const i=document.getElementById("myVideo");new Cesium.VideoSynchronizer({clock:e.clock,element:i}),e.clock.shouldAnimate=!0;const s=e.entities.add({wall:{positions:Cesium.Cartesian3.fromDegreesArrayHeights([120.391418,30.524281,120,120.391918,30.524281,120]),minimumHeights:[90,90],material:i,outline:!0,shadows:Cesium.ShadowMode.ENABLED}});e.zoomTo(s)}a()});return(e,a)=>(y(),C(V,null,[x,u(p(_),{title:"视频投影"},{default:B(()=>[r("div",E,[u(f,{onRegister:p(n),config:{},tiandituTk:"80cd3c8ae46ae32fa0ac19f6d739d310",cesiumLoadCB:c},null,8,["onRegister"])])]),_:1})],64))}});export{j as default};
//# sourceMappingURL=VideoProjection-2BXoZ2Lh.js.map