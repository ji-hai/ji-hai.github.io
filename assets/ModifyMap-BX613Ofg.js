import{_ as d}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BB62F2Sv.js";import{_ as u,u as f}from"./useCesium-Cl5_bCxu.js";import{l as g,m as h,S as _,R as y,q as p,O as v,u as s}from"./vue-chunks-DuYwYYUM.js";import"./index-BnHiHPD0.js";import"./element-plus-t0Lc7SBq.js";/* empty css                  */const b={class:"h-[calc(100vh-280px)]"},I=g({name:"ModifyMap",__name:"ModifyMap",setup(C){const{mapRegister:c,mapMethods:M}=f(),l=(a,e)=>{const t=a.imageryLayers.get(0);t.brightness=e.brightness||.6,t.contrast=e.contrast||1.8,t.gamma=e.gamma||.3,t.hue=e.hue||1,t.saturation=e.saturation||0;const o=a.scene.globe._surfaceShaderSet.baseFragmentShaderSource.sources;for(let r=0;r<o.length;r++){const n=`color = czm_saturation(color, textureSaturation);
#endif
`;let i=`color = czm_saturation(color, textureSaturation);
#endif
`;e.invertColor&&(i+=`
      color.r = 1.0 - color.r;
      color.g = 1.0 - color.g;
      color.b = 1.0 - color.b;
      `),e.filterRGB.length>0&&(i+=`
      color.r = color.r * ${e.filterRGB[0]}.0/255.0;
      color.g = color.g * ${e.filterRGB[1]}.0/255.0;
      color.b = color.b * ${e.filterRGB[2]}.0/255.0;
      `),o[r]=o[r].replace(n,i)}},m=a=>{a.camera.setView({destination:Cesium.Cartesian3.fromDegrees(120.84,30.15,5e3),orientation:{heading:Cesium.Math.toRadians(350.4202942851978),pitch:Cesium.Math.toRadians(-89.74026687972041),roll:Cesium.Math.toRadians(.1)},complete:()=>{}});const e=["0","1","2","3","4","5","6","7"];a.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({url:"http://t{s}.tianditu.gov.cn/vec_w/wmts?tk=80cd3c8ae46ae32fa0ac19f6d739d310",subdomains:e,layer:"vec",style:"default",tileMatrixSetID:"w",format:"tiles",maximumLevel:18})),a.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({url:"http://t{s}.tianditu.gov.cn/cva_w/wmts?tk=80cd3c8ae46ae32fa0ac19f6d739d310",subdomains:e,layer:"cva",style:"default",tileMatrixSetID:"w",format:"tiles",maximumLevel:18})),l(a,{invertColor:!0,filterRGB:[60,145,172]})};return(a,e)=>(h(),_(s(d),{title:"反色滤镜"},{default:y(()=>[p("div",b,[v(u,{onRegister:s(c),config:{},tiandituTk:"80cd3c8ae46ae32fa0ac19f6d739d310",cesiumLoadCB:m},null,8,["onRegister"])])]),_:1}))}});export{I as default};
//# sourceMappingURL=ModifyMap-BX613Ofg.js.map