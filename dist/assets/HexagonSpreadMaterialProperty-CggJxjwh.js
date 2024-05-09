var L=Object.defineProperty;var E=(i,e,t)=>e in i?L(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>(E(i,typeof e!="symbol"?e+"":e,t),t);class y{constructor(e){e=Cesium.defaultValue(e,Cesium.defaultValue.EMPTY_OBJECT),this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=e.color,this.duration=Cesium.defaultValue(e.duration,1e3),this._time=void 0,this.image=e.image,this.init()}init(){Cesium.Material.PolylineCustomMaterialType="PolylineCustomMaterial",Cesium.Material._materialCache.addMaterial("PolylineCustomMaterial",{fabric:{type:"PolylineCustomMaterial",uniforms:{color:new Cesium.Color(1,0,0,1),image:this.image,time:20},source:`czm_material czm_getMaterial(czm_materialInput materialInput)
                    {
                        czm_material material = czm_getDefaultMaterial(materialInput);
                        vec2 st = materialInput.st;
                        
                        if(texture2D(image, vec2(0.0, 0.0)).a == 1.0){
                            discard;
                        }else{
                            material.alpha = texture2D(image, vec2(1.0 - fract(time - st.s), st.t)).a * color.a;
                        }
                        
                        material.diffuse = max(color.rgb * material.alpha * 3.0, color.rgb);
                        
                        return material;
                    }
                    `},translucent:function(e){return!0}})}getType(){return Cesium.Material.PolylineCustomMaterialType}getValue(e,t){return Cesium.defined(t)||(t={}),t.color=Cesium.Property.getValueOrClonedDefault(this._color,e,Cesium.Color.WHITE,t.color),t.image=this.image,this._time===void 0&&(this._time=e.secondsOfDay),t.time=(e.secondsOfDay-this._time)*1e3/this.duration,t}equals(e){return this===e||e instanceof y&&Cesium.Property.equals(this._color,e._color)}get isvarant(){return!1}get definitionChanged(){return this._definitionChanged}}Object.defineProperties(y.prototype,{color:Cesium.createPropertyDescriptor("color")});const O=i=>new y(i),n=class n{static getInstance(e){return Cesium.defined(n.instance)||(n.instance=new n(e)),n.instance}constructor(e){e=Cesium.defaultValue(e,Cesium.defaultValue.EMPTY_OBJECT),this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=e.color,this.duration=Cesium.defaultValue(e.duration,1e3),this.count=Cesium.defaultValue(e.count,2),this.count<=0&&(this.count=1),this.gradient=Cesium.defaultValue(e.gradient,.1),this.gradient<0?this.gradient=0:this.gradient>1&&(this.gradient=1),this._time=performance.now(),this.init()}init(){Cesium.Material.CircleWaveMaterialType="CircleWaveMaterial",Cesium.Material._materialCache.addMaterial("CircleWaveMaterial",{fabric:{type:"CircleWaveMaterial",uniforms:{color:new Cesium.Color(1,0,0,1),time:1,count:1,gradient:.1},source:`czm_material czm_getMaterial(czm_materialInput materialInput)
 
                                        {
 
                                            czm_material material = czm_getDefaultMaterial(materialInput);
 
                                            material.diffuse = 1.5 * color.rgb;
 
                                            vec2 st = materialInput.st;
 
                                            vec3 str = materialInput.str;
 
                                            float dis = distance(st, vec2(0.5, 0.5));
 
                                            float per = fract(time);
 
                                            if (abs(str.z) > 0.001) {
 
                                                discard;
 
                                            }
 
                                            if (dis > 0.5) {
 
                                                discard;
 
                                            } else {
 
                                                float perDis = 0.5 / count;
 
                                                float disNum;
 
                                                float bl = .0;
 
                                                for (int i = 0; i <= 999; i++) {
 
                                                    if (float(i) <= count) {
 
                                                      disNum = perDis * float(i) - dis + per / count;
 
                                                        if (disNum > 0.0) {
 
                                                            if (disNum < perDis) {
 
                                                                bl = 1.0 - disNum / perDis;
 
                                                            }
 
                                                          else if (disNum - perDis < perDis) {
 
                                                                    bl = 1.0 - abs(1.0 - disNum / perDis);
 
                                                            }
 
                                                            material.alpha = pow(bl, gradient);
 
                                                        }
 
                                                    }
 
                                                }
 
                                            }
 
                                        return material;
 
                                    }`},translucent:function(e){return!0}})}getType(){return Cesium.Material.CircleWaveMaterialType}getValue(e,t){return Cesium.defined(t)||(t={}),t.color=Cesium.Property.getValueOrClonedDefault(this._color,e,Cesium.Color.WHITE,t.color),t.time=(performance.now()-this._time)/this.duration,t.count=this.count,t.gradient=1+10*(1-this.gradient),t}equals(e){return this===e||e instanceof n&&Cesium.Property.equals(this._color,e._color)}get isDestroyed(){return!1}get definitionChanged(){return this._definitionChanged}};r(n,"instance");let g=n;Object.defineProperties(g.prototype,{color:Cesium.createPropertyDescriptor("color")});const k=i=>new g(i),o=class o{static getInstance(e){return Cesium.defined(o.instance)||(o.instance=new o(e)),o.instance}constructor(e){e=Cesium.defaultValue(e,Cesium.defaultValue.EMPTY_OBJECT),this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=Cesium.defaultValue(e.color,new Cesium.Color(0,0,0,0)),this.duration=Cesium.defaultValue(e.duration,1e3),this._time=void 0,this.init()}init(){Cesium.Material.CircleFadeMaterialType="CircleFadeMaterial",Cesium.Material._materialCache.addMaterial("CircleFadeMaterial",{fabric:{type:"CircleFadeMaterial",uniforms:{color:new Cesium.Color(1,0,0,1),time:1},source:`czm_material czm_getMaterial(czm_materialInput materialInput)

                    {

                        czm_material material = czm_getDefaultMaterial(materialInput);

                        material.diffuse = 1.5 * color.rgb;

                        vec2 st = materialInput.st;

                        float dis = distance(st, vec2(0.5, 0.5));

                        float per = fract(time);

                        if(dis > per * 0.5){

                            //material.alpha = 0.0;

                            discard;

                        }else {

                            material.alpha = color.a  * dis / per / 2.0;

                        }

                        return material;

                    }`},translucent:function(e){return!0}})}getType(){return Cesium.Material.CircleFadeMaterialType}getValue(e,t){return Cesium.defined(t)||(t={}),t.color=Cesium.Property.getValueOrClonedDefault(this._color,e,new Cesium.Color(0,0,0,0),t.color),t.time=(performance.now()-this._time)/this.duration,t}equals(e){return this===e||e instanceof o&&Cesium.Property.equals(this._color,e._color)}get isDestroyed(){return!1}get definitionChanged(){return this._definitionChanged}};r(o,"instance");let h=o;Object.defineProperties(h.prototype,{color:Cesium.createPropertyDescriptor("color")});const q=i=>new h(i);function u(i){this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=i.color,this.duration=i.duration,this.viewer=i.viewer,this._time=new Date().getTime()}Object.defineProperties(u.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color")});u.prototype.getType=function(i){return"TrailLine"};u.prototype.getValue=function(i,e){return Cesium.defined(e)||(e={}),e.color=Cesium.Property.getValueOrClonedDefault(this._color,i,Cesium.Color.WHITE,e.color),this.duration&&(e.time=(new Date().getTime()-this._time)%this.duration/this.duration),this.viewer.scene.requestRender(),e};u.prototype.equals=function(i){return this===i||i instanceof u&&Cesium.Property.equals(this._color,i._color)};Cesium.Material.TrailLineMaterialProperty=u;Cesium.Material.TrailLineType="TrailLine";Cesium.Material.TrailLineImage="/src/assets/image/arrow.png";Cesium.Material.TrailLineSource=`czm_material czm_getMaterial(czm_materialInput materialInput)
{
   czm_material material = czm_getDefaultMaterial(materialInput);
   vec2 st = materialInput.st;
   vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));
   material.alpha = colorImage.a * color.a;
   material.diffuse = (colorImage.rgb+color.rgb)/2.0;
   return material;
}`;Cesium.Material._materialCache.addMaterial(Cesium.Material.TrailLineType,{fabric:{type:Cesium.Material.TrailLineType,uniforms:{color:new Cesium.Color(1,1,1,1),image:Cesium.Material.TrailLineImage,time:0},source:Cesium.Material.TrailLineSource},translucent:function(i){return!0}});function m(i){this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=i.color,this.duration=i.duration,this.trailImage=i.trailImage,this.viewer=i.viewer,this._time=new Date().getTime()}Object.defineProperties(m.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color")});m.prototype.getType=function(i){return"DynamicWall"};m.prototype.getValue=function(i,e){return Cesium.defined(e)||(e={}),e.color=Cesium.Property.getValueOrClonedDefault(this._color,i,Cesium.Color.WHITE,e.color),this.trailImage?e.image=this.trailImage:e.image=Cesium.Material.DynamicWallImage,this.duration&&(e.time=(new Date().getTime()-this._time)%this.duration/this.duration),this.viewer.scene.requestRender(),e};m.prototype.equals=function(i){return this===i||i instanceof m&&Cesium.Property.equals(this._color,i._color)};Cesium.Material.DynamicWallMaterialProperty=m;Cesium.Material.DynamicWallType="DynamicWall";Cesium.Material.DynamicWallImage="./colors.png";Cesium.Material.DynamicWallSource=`czm_material czm_getMaterial(czm_materialInput materialInput)
                                            {
                                            czm_material material = czm_getDefaultMaterial(materialInput);
                                            vec2 st = materialInput.st;
                                            vec4 colorImage = texture2D(image, vec2(fract(st.t - time), st.t));
                                            vec4 fragColor;
                                            fragColor.rgb = color.rgb / 1.0;
                                            fragColor = czm_gammaCorrect(fragColor);
                                            material.alpha = colorImage.a * color.a;
                                            material.diffuse = color.rgb;
                                            material.emission = fragColor.rgb;
                                            return material;
                                            }`;Cesium.Material._materialCache.addMaterial(Cesium.Material.DynamicWallType,{fabric:{type:Cesium.Material.DynamicWallType,uniforms:{color:new Cesium.Color(1,1,1,1),image:Cesium.Material.DynamicWallImage,time:0},source:Cesium.Material.DynamicWallSource},translucent:function(i){return!0}});function p(i,e,t,l){this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=e,this.duration=i,this._time=new Date().getTime(),this._repeat=void 0,this.repeat=t,this.image=l}Object.defineProperties(p.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color"),repeat:Cesium.createPropertyDescriptor("repeat")});p.prototype.getType=function(i){return"PolylineTrailLink"};p.prototype.getValue=function(i,e){return Cesium.defined(e)||(e={}),e.color=Cesium.Property.getValueOrClonedDefault(this._color,i,Cesium.Color.WHITE,e.color),e.repeat=Cesium.Property.getValueOrClonedDefault(this._repeat,i,new Cesium.Cartesian2(1,1),e.repeat),e.image=this.image,e.time=(new Date().getTime()-this._time)%this.duration/this.duration,e};p.prototype.equals=function(i){return this===i||i instanceof p&&Cesium.Property.equals(this._color,i._color)};Cesium.Material.PolylineTrailLinkMaterialProperty=p;Cesium.Material.PolylineTrailLinkType="PolylineTrailLink";Cesium.Material.PolylineTrailLinkImage="src/assets/image/line8.png";Cesium.Material.PolylineTrailLinkSource=`czm_material czm_getMaterial(czm_materialInput materialInput)
{
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = repeat * materialInput.st;
  vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));
  material.alpha = colorImage.a * color.a;
  material.diffuse = (colorImage.rgb+color.rgb)/2.0;
  return material;
}`;Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailLinkType,{fabric:{type:Cesium.Material.PolylineTrailLinkType,uniforms:{color:new Cesium.Color(255,255,255,1),image:Cesium.Material.PolylineTrailLinkImage,repeat:new Cesium.Cartesian2(1,1),time:0},source:Cesium.Material.PolylineTrailLinkSource},translucent:function(i){return!0}});function d(i,e){this._definitionChanged=new Cesium.Event,this.duration=i,this.image=e,this._time=performance.now()}Object.defineProperties(d.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color"),duration:Cesium.createPropertyDescriptor("duration")});d.prototype.getType=function(i){return"Spriteline1"};d.prototype.getValue=function(i,e){return Cesium.defined(e)||(e={}),e.image=this.image,e.time=(performance.now()-this._time)%this.duration/this.duration,e};d.prototype.equals=function(i){return this===i||i instanceof d&&this.duration===i.duration};Cesium.Material.Spriteline1MaterialProperty=d;Cesium.Material.Spriteline1Type="Spriteline1";Cesium.Material.Spriteline1Source=`
czm_material czm_getMaterial(czm_materialInput materialInput)
{
czm_material material = czm_getDefaultMaterial(materialInput);
vec2 st = materialInput.st;
vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));
material.alpha = colorImage.a;
material.diffuse = colorImage.rgb * 1.5 ;
return material;
}
`;Cesium.Material._materialCache.addMaterial(Cesium.Material.Spriteline1Type,{fabric:{type:Cesium.Material.Spriteline1Type,uniforms:{color:new Cesium.Color(1,0,0,.5),image:"",transparent:!0,time:20},source:Cesium.Material.Spriteline1Source},translucent:function(i){return!0}});class M{constructor(e){this._definitionChanged=new Cesium.Event,this._color=void 0,this._speed=void 0,this.color=e.color,this.speed=e.speed}get isConstant(){return!1}get definitionChanged(){return this._definitionChanged}getType(e){return Cesium.Material.LineFlickerMaterialType}getValue(e,t){return Cesium.defined(t)||(t={}),t.color=Cesium.Property.getValueOrDefault(this._color,e,Cesium.Color.RED,t.color),t.speed=Cesium.Property.getValueOrDefault(this._speed,e,5,t.speed),t}equals(e){return this===e||e instanceof M&&Cesium.Property.equals(this._color,e._color)&&Cesium.Property.equals(this._speed,e._speed)}}Object.defineProperties(M.prototype,{color:Cesium.createPropertyDescriptor("color"),speed:Cesium.createPropertyDescriptor("speed")});Cesium.Material.LineFlickerMaterialProperty=M;Cesium.Material.LineFlickerMaterialProperty="LineFlickerMaterialProperty";Cesium.Material.LineFlickerMaterialType="LineFlickerMaterialType";Cesium.Material.LineFlickerMaterialSource=`
uniform vec4 color;
uniform float speed;
czm_material czm_getMaterial(czm_materialInput materialInput){
  czm_material material = czm_getDefaultMaterial(materialInput);
  float time = fract( czm_frameNumber  *  speed / 1000.0);
  vec2 st = materialInput.st;
  float scalar = smoothstep(0.0,1.0,time);
  material.diffuse = color.rgb * scalar;
  material.alpha = color.a * scalar ;
  return material;
}
`;Cesium.Material._materialCache.addMaterial(Cesium.Material.LineFlickerMaterialType,{fabric:{type:Cesium.Material.LineFlickerMaterialType,uniforms:{color:new Cesium.Color(1,0,0,1),speed:5},source:Cesium.Material.LineFlickerMaterialSource},translucent:function(i){return!0}});class _{constructor(e){this._definitionChanged=new Cesium.Event,this._color=void 0,this._speed=void 0,this._percent=void 0,this._gradient=void 0,this.color=e.color,this.speed=e.speed,this.percent=e.percent,this.gradient=e.gradient}get isConstant(){return!1}get definitionChanged(){return this._definitionChanged}getType(e){return Cesium.Material.LineFlowMaterialType}getValue(e,t){return Cesium.defined(t)||(t={}),t.color=Cesium.Property.getValueOrDefault(this._color,e,Cesium.Color.RED,t.color),t.speed=Cesium.Property.getValueOrDefault(this._speed,e,5,t.speed),t.percent=Cesium.Property.getValueOrDefault(this._percent,e,.1,t.percent),t.gradient=Cesium.Property.getValueOrDefault(this._gradient,e,.01,t.gradient),t}equals(e){return this===e||e instanceof _&&Cesium.Property.equals(this._color,e._color)&&Cesium.Property.equals(this._speed,e._speed)&&Cesium.Property.equals(this._percent,e._percent)&&Cesium.Property.equals(this._gradient,e._gradient)}}Object.defineProperties(_.prototype,{color:Cesium.createPropertyDescriptor("color"),speed:Cesium.createPropertyDescriptor("speed"),percent:Cesium.createPropertyDescriptor("percent"),gradient:Cesium.createPropertyDescriptor("gradient")});Cesium.Material.LineFlowMaterialProperty=_;Cesium.Material.LineFlowMaterialProperty="LineFlowMaterialProperty";Cesium.Material.LineFlowMaterialType="LineFlowMaterialType";Cesium.Material.LineFlowMaterialSource=`
    uniform vec4 color;
    uniform float speed;
    uniform float percent;
    uniform float gradient;
    
    czm_material czm_getMaterial(czm_materialInput materialInput){
      czm_material material = czm_getDefaultMaterial(materialInput);
      vec2 st = materialInput.st;
      float t =fract(czm_frameNumber * speed / 1000.0);
      t *= (1.0 + percent);
      float alpha = smoothstep(t- percent, t, st.s) * step(-t, -st.s);
      alpha += gradient;
      material.diffuse = color.rgb;
      material.alpha = alpha;
      return material;
    }
    `;Cesium.Material._materialCache.addMaterial(Cesium.Material.LineFlowMaterialType,{fabric:{type:Cesium.Material.LineFlowMaterialType,uniforms:{color:new Cesium.Color(1,0,0,1),speed:10,percent:.1,gradient:.01},source:Cesium.Material.LineFlowMaterialSource},translucent:function(i){return!0}});class V{constructor(e,t){r(this,"viewer");r(this,"id");r(this,"duration");r(this,"maxRadius");r(this,"pointDraged");r(this,"leftDownFlag");r(this,"update_position");this.viewer=e,this.id=t,this.duration=1e3,this.maxRadius=1e3,this.pointDraged=null,this.leftDownFlag=!1}change_duration(e){this.duration=e}change_color(e){const t=this.viewer.entities.getById(this.id);t._ellipse._material.color=new Cesium.Color.fromCssColorString(e)}change_position(e){const t=Cesium.Cartesian3.fromDegrees(parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2])),l=this.viewer.entities.getById(this.id);l.position=t}del(){this.viewer.entities.removeById(this.id)}add(e,t,l,D,v=!1){const a=this;if(this.duration=D,this.maxRadius=l,!v)return;function s(C){a.pointDraged=a.viewer.scene.pick(C.position),a.pointDraged&&a.pointDraged.id&&a.pointDraged.id.id===a.id&&(a.leftDownFlag=!0,a.viewer.scene.screenSpaceCameraController.enableRotate=!1)}function P(C){a.leftDownFlag=!1,a.pointDraged=null,a.viewer.scene.screenSpaceCameraController.enableRotate=!0}function I(C){if(a.leftDownFlag===!0&&a.pointDraged!==null&&a.pointDraged!==void 0){const b=a.viewer.camera.getPickRay(C.endPosition),w=a.viewer.scene.globe.pick(b,a.viewer.scene);a.pointDraged.id.position=w;const T=a.viewer.scene.globe.ellipsoid.cartesianToCartographic(w),S=Cesium.Math.toDegrees(T.latitude),z=Cesium.Math.toDegrees(T.longitude);let f=T.height;f=f<0?0:f,a.update_position&&a.update_position([z.toFixed(8),S.toFixed(8),f])}}this.viewer.screenSpaceEventHandler.setInputAction(s,Cesium.ScreenSpaceEventType.LEFT_DOWN),this.viewer.screenSpaceEventHandler.setInputAction(P,Cesium.ScreenSpaceEventType.LEFT_UP),this.viewer.screenSpaceEventHandler.setInputAction(I,Cesium.ScreenSpaceEventType.MOUSE_MOVE)}}function c(i){this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this.color=i,this._time=new Date().getTime()}Object.defineProperties(c.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}},color:Cesium.createPropertyDescriptor("color")});c.prototype.getType=function(i){return Cesium.Material.HexagonSpreadMaterialType};c.prototype.getValue=function(i,e){return Cesium.defined(e)||(e={}),e.color=Cesium.Property.getValueOrClonedDefault(this._color,i,Cesium.Color.WHITE,e.color),e.image=Cesium.Material.HexagonSpreadMaterialImage,e};c.prototype.equals=function(i){return this===i||i instanceof c&&Cesium.Property.equals(this._color,i._color)};Cesium.Material.HexagonSpreadMaterialProperty=c;Cesium.Material.HexagonSpreadMaterialType="HexagonSpreadMaterial";Cesium.Material.HexagonSpreadMaterialImage="src/assets/image/hexagon.png";Cesium.Material.HexagonSpreadSource=`
  czm_material czm_getMaterial(czm_materialInput materialInput)
  {
       czm_material material = czm_getDefaultMaterial(materialInput);
       vec2 st = materialInput.st;
       vec4 colorImage = texture2D(image,  vec2(st));
       material.alpha = colorImage.a * color.a * 0.5;
       material.diffuse =  1.8 * color.rgb  ;
       return material;
   }
   `;Cesium.Material._materialCache.addMaterial(Cesium.Material.HexagonSpreadMaterialType,{fabric:{type:Cesium.Material.HexagonSpreadMaterialType,uniforms:{color:new Cesium.Color(1,0,0,.5),image:Cesium.Material.HexagonSpreadMaterialImage},source:Cesium.Material.HexagonSpreadSource},translucent:function(i){return!0}});class W extends V{constructor(e,t){super(e,t)}add(e,t,l,D,v=!1){super.add(e,t,l,D,v);const a=this;let s=1;this.viewer.entities.add({id:a.id,position:Cesium.Cartesian3.fromDegrees(e[0],e[1],e[2]),ellipse:{semiMajorAxis:new Cesium.CallbackProperty(function(P){return s+=1e3/a.duration*50,s>a.maxRadius&&(s=1),s},!1),semiMinorAxis:new Cesium.CallbackProperty(function(P){return s},!1),material:new c(new Cesium.Color.fromCssColorString(t))}})}}export{q as C,W as H,M as L,p as P,d as S,k as W,O as a,_ as b};
//# sourceMappingURL=HexagonSpreadMaterialProperty-CggJxjwh.js.map
