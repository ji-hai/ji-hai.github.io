import{l as o,b as r,z as c,m as u,p as m,aq as l}from"./vue-chunks-DuYwYYUM.js";const p={tiandituTk:{type:String,required:!0},config:{type:Object,default:()=>{}},cesiumLoadCB:{type:Function,default:()=>{}}},d={id:"cesiumContainer",class:"h-[100%] w-[100%]"},I=o({__name:"Cesium.component",props:p,emits:["register"],setup(i,{emit:n}){const t=n,s=i;let e;return r(()=>{Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNGQ2MjhmMC0xODkzLTQ4MjMtODIxZi1iOTE1M2NhOWQxOGUiLCJpZCI6MTMyNzIwLCJpYXQiOjE2ODA5NDEwOTh9.rLP-HzxFfCPja-7UWE45ZFYS_cHByWT3B-cwRxCvjIg",e=new Cesium.Viewer("cesiumContainer",Object.assign({contextOptions:{requestWebgl1:!0},shouldAnimate:!0,animation:!0,homeButton:!1,geocoder:!1,baseLayerPicker:!1,timeline:!0,fullscreenButton:!1,infoBox:!1,sceneModePicker:!0,navigationInstructionsInitiallyVisible:!1,navigationHelpButton:!1,selectionIndicator:!1},s.config)),e._cesiumWidget._creditContainer.style.display="none",e.clock.currentTime=Cesium.JulianDate.addHours(Cesium.JulianDate.now(new Date),8,new Cesium.JulianDate),e.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK),e.camera.setView({destination:Cesium.Cartesian3.fromDegrees(116.435314,40.960521,5e7)}),t("register",e),s.cesiumLoadCB(e)}),c(()=>{e.destroy()}),(C,f)=>(u(),m("div",d))}}),a=l({map:""}),O=()=>({mapRegister:t=>{a.map=t},mapMethods:{getMap:()=>a.map}});export{I as _,O as u};
//# sourceMappingURL=useCesium-Cl5_bCxu.js.map