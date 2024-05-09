class g{static setOneSkyBox(){return new Cesium.SkyBox({sources:{positiveX:"src/assets/SkyBox/00h+00.jpg",negativeX:"src/assets/SkyBox/12h+00.jpg",positiveY:"src/assets/SkyBox/06h+00.jpg",negativeY:"src/assets/SkyBox/18h+00.jpg",positiveZ:"src/assets/SkyBox/06h+90.jpg",negativeZ:"src/assets/SkyBox/06h-90.jpg"}})}static setTwoSkyBox(){return new Cesium.SkyBox({sources:{positiveX:"src/assets/SkyBox/Version2_dark_px.jpg",negativeX:"src/assets/SkyBox/Version2_dark_mx.jpg",positiveY:"src/assets/SkyBox/Version2_dark_py.jpg",negativeY:"src/assets/SkyBox/Version2_dark_my.jpg",positiveZ:"src/assets/SkyBox/Version2_dark_pz.jpg",negativeZ:"src/assets/SkyBox/Version2_dark_mz.jpg"}})}static setThreeSkyBox(){return new Cesium.SkyBox({sources:{positiveX:"src/assets/SkyBox/tycho2t3_80_pxs.jpg",negativeX:"src/assets/SkyBox/tycho2t3_80_mxs.jpg",positiveY:"src/assets/SkyBox/tycho2t3_80_pys.jpg",negativeY:"src/assets/SkyBox/tycho2t3_80_mys.jpg",positiveZ:"src/assets/SkyBox/tycho2t3_80_pzs.jpg",negativeZ:"src/assets/SkyBox/tycho2t3_80_mzs.jpg"}})}static setDarkEffect(t){t=t||{};const r=`uniform sampler2D colorTexture;
varying vec2 v_textureCoordinates;
uniform float scale;
uniform vec3 offset;
void main() {
 // vec4 color = texture2D(colorTexture, v_textureCoordinates);
 vec4 color = texture2D(colorTexture, v_textureCoordinates);
 // float gray = 0.2989*color.r+0.5870*color.g+0.1140*color.b;
 // gl_FragColor = vec4(gray,gray,2.0*(gray+1.0), 1.0);
 gl_FragColor = vec4(color.r*0.2,color.g * 0.4,color.b*0.6, 1.0);
}
`;return new Cesium.PostProcessStage({name:"darkEffect",fragmentShader:r,uniforms:{scale:t.scale||1,offset:t.offset||new Cesium.Cartesian3(.1,.2,.3)}})}static setRainEffect(){const t=`uniform sampler2D colorTexture;
                varying vec2 v_textureCoordinates;
                
                float hash(float x){
                return fract(sin(x*23.3)*13.13);
                }
                
                void main(){
                    float time = czm_frameNumber / 60.0;
                    vec2 resolution = czm_viewport.zw;
                    vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
                    vec3 c=vec3(.6,.7,.8);
                    float a=-.4;
                    float si=sin(a),co=cos(a);
                    uv*=mat2(co,-si,si,co);
                    uv*=length(uv+vec2(0,4.9))*.3+1.;
                    float v=1.-sin(hash(floor(uv.x*100.))*2.);
                    float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;
                    c*=v*b;
                    gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c, 1), 0.2);
                }
                `;return new Cesium.PostProcessStage({name:"rainEffect",fragmentShader:t})}static setSnowEffect(){const t=`uniform sampler2D colorTexture;
    varying vec2 v_textureCoordinates;
    
    float snow(vec2 uv,float scale){
        float time = czm_frameNumber / 60.0;
        float w=smoothstep(1.,0.,-uv.y*(scale/10.));
        if(w<.1)return 0.;
        uv+=time/scale;
        uv.y+=time*2./scale;
        uv.x+=sin(uv.y+time*.5)/scale;
        uv*=scale;
        vec2 s=floor(uv),f=fract(uv),p;
        float k=3.,d;
        p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;
        d=length(p);
        k=min(d,k);
        k=smoothstep(0.,k,sin(f.x+f.y)*0.01);
        return k*w;
    }
    
    void main(){
        vec2 resolution = czm_viewport.zw;
        vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
        vec3 finalColor=vec3(0);
        float c = 0.0;
        c+=snow(uv,30.)*.0;
        c+=snow(uv,20.)*.0;
        c+=snow(uv,15.)*.0;
        c+=snow(uv,10.);
        c+=snow(uv,8.);
        c+=snow(uv,6.);
        c+=snow(uv,5.);
        finalColor=(vec3(c));
        gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(finalColor,1), 0.3);
        
    }
    `;return new Cesium.PostProcessStage({name:"snowEffect",fragmentShader:t})}static setFogEffect(){const t=`float getDistance(sampler2D depthTexture, vec2 texCoords) 
{ 
    float depth = czm_unpackDepth(texture2D(depthTexture, texCoords)); 
    if (depth == 0.0) { 
        return czm_infinity; 
    } 
    vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth); 
    return -eyeCoordinate.z / eyeCoordinate.w; 
} 
float interpolateByDistance(vec4 nearFarScalar, float distance) 
{ 
    float startDistance = nearFarScalar.x; 
    float startValue = nearFarScalar.y; 
    float endDistance = nearFarScalar.z; 
    float endValue = nearFarScalar.w; 
    float t = clamp((distance - startDistance) / (endDistance - startDistance), 0.0, 1.0); 
    return mix(startValue, endValue, t); 
} 
vec4 alphaBlend(vec4 sourceColor, vec4 destinationColor) 
{ 
    return sourceColor * vec4(sourceColor.aaa, 1.0) + destinationColor * (1.0 - sourceColor.a); 
} 
uniform sampler2D colorTexture; 
uniform sampler2D depthTexture; 
uniform vec4 fogByDistance; 
uniform vec4 fogColor; 
varying vec2 v_textureCoordinates; 
void main(void) 
{ 
    float distance = getDistance(depthTexture, v_textureCoordinates); 
    vec4 sceneColor = texture2D(colorTexture, v_textureCoordinates); 
    float blendAmount = interpolateByDistance(fogByDistance, distance); 
    vec4 finalFogColor = vec4(fogColor.rgb, fogColor.a * blendAmount); 
    gl_FragColor = alphaBlend(finalFogColor, sceneColor); 
} 
`;return new Cesium.PostProcessStage({name:"fogEffect",fragmentShader:t,uniforms:{fogByDistance:new Cesium.Cartesian4(10,0,200,1),fogColor:new Cesium.Color(.8,.8,.8,.5)}})}}const l=e=>{if(e){const r=Cesium.Ellipsoid.WGS84.cartesianToCartographic(e);return{lng:Cesium.Math.toDegrees(r.longitude),lat:Cesium.Math.toDegrees(r.latitude),alt:r.height}}},v=(e,t)=>{if(e)return e?e.map(function(r){return c(r,t)}):[]},c=(e,t)=>e?Cesium.Cartesian3.fromDegrees(e.lng||e.lon,e.lat,e.alt=t||e.alt,Cesium.Ellipsoid.WGS84):Cesium.Cartesian3.ZERO,d=e=>{if(e)return e?e.map(function(t){return l(t)}):[]},i=e=>e?Cesium.Cartographic.fromDegrees(e.lng||e.lon,e.lat,e.alt):Cesium.Cartographic.ZERO,C=(e,t)=>{if(e&&t){const r=e.scene.pick(t);let o=null,n=!1,a=!1;if(r instanceof Cesium.Cesium3DTileFeature&&(n=!0),n&&(o=e.scene.pickPosition(t),o)){const s=Cesium.Cartographic.fromCartesian(o);s.height<0&&(s.height=0);const u=Cesium.Math.toDegrees(s.longitude),f=Cesium.Math.toDegrees(s.latitude),m=s.height;o=c({lng:u,lat:f,alt:m})}if(!r&&!e.terrainProvide instanceof Cesium.EllipsoidTerrainProvider){const s=e.scene.camera.getPickRay(t);if(!s)return null;o=e.scene.globe.pick(s,e.scene),a=!0}if(!n&&!a&&(o=e.scene.camera.pickEllipsoid(t,e.scene.globe.ellipsoid)),o){const s=l(o);return s.alt<0&&(o=c(s,.1)),o}return!1}},h=e=>{let t=0;for(let r=0;r<e.length-1;r++){const o=i(e[r]),n=i(e[r+1]),a=new Cesium.EllipsoidGeodesic;a.setEndPoints(o,n);let s=a.surfaceDistance;s=Math.sqrt(Math.pow(s,2)+Math.pow(n.height-o.height,2)),t=t+s}return t.toFixed(3)},p=e=>{let t=0;if(e){let r=0;const o=Cesium.Ellipsoid.WGS84;e.push(e[0]);for(let n=1;n<e.length;n++){const a=o.cartographicToCartesian(i(e[n-1])),s=o.cartographicToCartesian(i(e[n]));r+=a.x*s.y-s.x*a.y}t=Math.abs(r).toFixed(2)}return t};class x{constructor(t){this._viewer=t}_icrf(){if(this._viewer.scene.mode!==Cesium.SceneMode.SCENE3D)return ture;const t=Cesium.Transforms.computeIcrfToFixedMatrix(this._viewer.clock.currentTime);if(t){const r=this._viewer.camera,o=Cesium.Cartesian3.clone(r.position),n=Cesium.Matrix4.fromRotationTranslation(t);r.lookAtTransform(n,o)}}_bindEvent(){this._viewer.clock.multiplier=15*1e3,this._viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY),this._viewer.scene.postUpdate.addEventListener(this._icrf,this)}_unbindEvent(){this._viewer.clock.multiplier=1,this._viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY),this._viewer.scene.postUpdate.removeEventListener(this._icrf,this)}start(){return this._viewer.clock.shouldAnimate=!0,this._unbindEvent(),this._bindEvent(),this}stop(){return this._unbindEvent(),this}}export{g as C,x as G,l as a,c as b,d as c,h as d,p as e,C as g,v as t};
//# sourceMappingURL=index-Cjfam9dp.js.map
