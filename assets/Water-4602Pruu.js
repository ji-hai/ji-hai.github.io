import{_ as i}from"./ContentWrap.vue_vue_type_script_setup_true_lang-8pi8A__b.js";import{_ as r,u as n}from"./useCesium-Cl5_bCxu.js";import{l as o,m,S as c,R as p,q as u,O as l,u as a}from"./vue-chunks-DuYwYYUM.js";import"./index-DKupAHv7.js";import"./element-plus-t0Lc7SBq.js";/* empty css                  */const d={class:"h-[calc(100vh-280px)]"},x=o({name:"Water",__name:"Water",setup(f){const{mapRegister:t,mapMethods:C}=n(),s=e=>{e.camera.setView({destination:Cesium.Cartesian3.fromDegrees(120,30,5e3),orientation:{heading:Cesium.Math.toRadians(350.4202942851978),pitch:Cesium.Math.toRadians(-89.74026687972041),roll:Cesium.Math.toRadians(.1)},complete:()=>{}}),e.scene.primitives.add(new Cesium.Primitive({geometryInstances:new Cesium.GeometryInstance({geometry:new Cesium.RectangleGeometry({rectangle:Cesium.Rectangle.fromDegrees(120,30,120.1,30.1),vertexFormat:Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT})}),appearance:new Cesium.EllipsoidSurfaceAppearance({material:new Cesium.Material({fabric:{type:"Water",uniforms:{baseWaterColor:new Cesium.Color(64/255,157/255,253/255,.5),normalMap:"src/assets/image/water.jpg",frequency:1e3,animationSpeed:.1,amplitude:10,specularIntensity:10}}})})}))};return(e,_)=>(m(),c(a(i),{title:"Water"},{default:p(()=>[u("div",d,[l(r,{onRegister:a(t),config:{},tiandituTk:"80cd3c8ae46ae32fa0ac19f6d739d310",cesiumLoadCB:s},null,8,["onRegister"])])]),_:1}))}});export{x as default};
//# sourceMappingURL=Water-4602Pruu.js.map