(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const or="160",Fo=0,yr=1,Oo=2,Ya=1,$a=2,en=3,_n=0,Ae=1,sn=2,pn=0,Zn=1,Er=2,Tr=3,br=4,Bo=5,wn=100,Go=101,zo=102,wr=103,Ar=104,ko=200,Ho=201,Vo=202,Wo=203,js=204,Ks=205,Xo=206,qo=207,Yo=208,$o=209,jo=210,Ko=211,Zo=212,Jo=213,Qo=214,tc=0,ec=1,nc=2,ji=3,ic=4,sc=5,rc=6,ac=7,ja=0,oc=1,cc=2,mn=0,lc=1,hc=2,uc=3,Ka=4,dc=5,fc=6,Za=300,Qn=301,ti=302,Zs=303,Js=304,es=306,Qs=1e3,Ve=1001,tr=1002,Te=1003,Cr=1004,ds=1005,Oe=1006,pc=1007,mi=1008,gn=1009,mc=1010,gc=1011,cr=1012,Ja=1013,dn=1014,fn=1015,gi=1016,Qa=1017,to=1018,Cn=1020,_c=1021,We=1023,vc=1024,xc=1025,Rn=1026,ei=1027,Mc=1028,eo=1029,Sc=1030,no=1031,io=1033,fs=33776,ps=33777,ms=33778,gs=33779,Rr=35840,Lr=35841,Pr=35842,Dr=35843,so=36196,Ir=37492,Ur=37496,Nr=37808,Fr=37809,Or=37810,Br=37811,Gr=37812,zr=37813,kr=37814,Hr=37815,Vr=37816,Wr=37817,Xr=37818,qr=37819,Yr=37820,$r=37821,_s=36492,jr=36494,Kr=36495,yc=36283,Zr=36284,Jr=36285,Qr=36286,ro=3e3,Ln=3001,Ec=3200,Tc=3201,ao=0,bc=1,Be="",me="srgb",an="srgb-linear",lr="display-p3",ns="display-p3-linear",Ki="linear",Jt="srgb",Zi="rec709",Ji="p3",In=7680,ta=519,wc=512,Ac=513,Cc=514,oo=515,Rc=516,Lc=517,Pc=518,Dc=519,ea=35044,na="300 es",er=1035,rn=2e3,Qi=2001;class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vs=Math.PI/180,nr=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function Ic(s,t){return(s%t+t)%t}function xs(s,t,e){return(1-e)*s+e*t}function ia(s){return(s&s-1)===0&&s!==0}function ir(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,r,o,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],u=i[6],S=i[1],x=i[4],E=i[7],L=i[2],w=i[5],A=i[8];return r[0]=o*_+a*S+c*L,r[3]=o*p+a*x+c*w,r[6]=o*u+a*E+c*A,r[1]=l*_+h*S+d*L,r[4]=l*p+h*x+d*w,r[7]=l*u+h*E+d*A,r[2]=f*_+m*S+g*L,r[5]=f*p+m*x+g*w,r[8]=f*u+m*E+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=e*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ms.makeScale(t,e)),this}rotate(t){return this.premultiply(Ms.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ms.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ms=new Gt;function co(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uc(){const s=ts("canvas");return s.style.display="block",s}const sa={};function fi(s){s in sa||(sa[s]=!0,console.warn(s))}const ra=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),aa=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yi={[an]:{transfer:Ki,primaries:Zi,toReference:s=>s,fromReference:s=>s},[me]:{transfer:Jt,primaries:Zi,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ns]:{transfer:Ki,primaries:Ji,toReference:s=>s.applyMatrix3(aa),fromReference:s=>s.applyMatrix3(ra)},[lr]:{transfer:Jt,primaries:Ji,toReference:s=>s.convertSRGBToLinear().applyMatrix3(aa),fromReference:s=>s.applyMatrix3(ra).convertLinearToSRGB()}},Nc=new Set([an,ns]),Yt={enabled:!0,_workingColorSpace:an,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Nc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=yi[t].toReference,i=yi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return yi[s].primaries},getTransfer:function(s){return s===Be?Ki:yi[s].transfer}};function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Un;class lo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=ts("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fc=0;class ho{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=_i(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ys(i[o].image)):r.push(ys(i[o]))}else r=ys(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ys(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;class Ue extends ii{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Ve,i=Ve,r=Oe,o=mi,a=We,c=gn,l=Ue.DEFAULT_ANISOTROPY,h=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=_i(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ln?me:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Za)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qs:t.x=t.x-Math.floor(t.x);break;case Ve:t.x=t.x<0?0:1;break;case tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qs:t.y=t.y-Math.floor(t.y);break;case Ve:t.y=t.y<0?0:1;break;case tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===me?Ln:ro}set encoding(t){fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ln?me:Be}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Za;Ue.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,i=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,E=(m+1)/2,L=(u+1)/2,w=(h+f)/4,A=(d+_)/4,z=(g+p)/4;return x>E&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=A/n):E>L?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=w/i,r=z/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=A/r,i=z/r),this.set(n,i,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(f-h)/S,this.w=Math.acos((l+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bc extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ln?me:Be),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class uo extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gc extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=Ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==f||l!==m||h!==g){let p=1-a;const u=c*f+l*m+h*g+d*_,S=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const L=Math.sqrt(x),w=Math.atan2(L,u*S);p=Math.sin(p*w)/L,a=Math.sin(a*w)/L}const E=a*S;if(c=c*p+f*E,l=l*p+m*E,h=h*p+g*E,d=d*p+_*E,p===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*m-l*f,t[e+1]=c*g+h*f+l*d-a*m,t[e+2]=l*g+h*m+a*f-c*d,t[e+3]=h*g-a*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Es.copy(this).projectOnVector(t),this.sub(Es)}reflect(t){return this.sub(Es.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Es=new R,oa=new vi;class xi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(r,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ei.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ei.copy(n.boundingBox)),Ei.applyMatrix4(t.matrixWorld),this.union(Ei)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ci),Ti.subVectors(this.max,ci),Nn.subVectors(t.a,ci),Fn.subVectors(t.b,ci),On.subVectors(t.c,ci),on.subVectors(Fn,Nn),cn.subVectors(On,Fn),Mn.subVectors(Nn,On);let e=[0,-on.z,on.y,0,-cn.z,cn.y,0,-Mn.z,Mn.y,on.z,0,-on.x,cn.z,0,-cn.x,Mn.z,0,-Mn.x,-on.y,on.x,0,-cn.y,cn.x,0,-Mn.y,Mn.x,0];return!Ts(e,Nn,Fn,On,Ti)||(e=[1,0,0,0,1,0,0,0,1],!Ts(e,Nn,Fn,On,Ti))?!1:(bi.crossVectors(on,cn),e=[bi.x,bi.y,bi.z],Ts(e,Nn,Fn,On,Ti))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new R,new R,new R,new R,new R,new R,new R,new R],Ge=new R,Ei=new xi,Nn=new R,Fn=new R,On=new R,on=new R,cn=new R,Mn=new R,ci=new R,Ti=new R,bi=new R,Sn=new R;function Ts(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Sn.fromArray(s,r);const a=i.x*Math.abs(Sn.x)+i.y*Math.abs(Sn.y)+i.z*Math.abs(Sn.z),c=t.dot(Sn),l=e.dot(Sn),h=n.dot(Sn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const zc=new xi,li=new R,bs=new R;class is{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;li.subVectors(t,this.center);const e=li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(li,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(li.copy(t.center).add(bs)),this.expandByPoint(li.copy(t.center).sub(bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new R,ws=new R,wi=new R,ln=new R,As=new R,Ai=new R,Cs=new R;class fo{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ws.copy(t).add(e).multiplyScalar(.5),wi.copy(e).sub(t).normalize(),ln.copy(this.origin).sub(ws);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wi),a=ln.dot(this.direction),c=-ln.dot(wi),l=ln.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ws).addScaledVector(wi,f),m}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),i=Ze.dot(Ze)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,i,r){As.subVectors(e,t),Ai.subVectors(n,t),Cs.crossVectors(As,Ai);let o=this.direction.dot(Cs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,t);const c=a*this.direction.dot(Ai.crossVectors(ln,Ai));if(c<0)return null;const l=a*this.direction.dot(As.cross(ln));if(l<0||c+l>o)return null;const h=-a*ln.dot(Cs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,o,a,c,l,h,d,f,m,g,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,f,m,g,_,p)}set(t,e,n,i,r,o,a,c,l,h,d,f,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Bn.setFromMatrixColumn(t,0).length(),r=1/Bn.setFromMatrixColumn(t,1).length(),o=1/Bn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,m=c*d,g=l*h,_=l*d;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,m=c*d,g=l*h,_=l*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,m=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kc,t,Hc)}lookAt(t,e,n){const i=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),hn.crossVectors(n,Le),hn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),hn.crossVectors(n,Le)),hn.normalize(),Ci.crossVectors(Le,hn),i[0]=hn.x,i[4]=Ci.x,i[8]=Le.x,i[1]=hn.y,i[5]=Ci.y,i[9]=Le.y,i[2]=hn.z,i[6]=Ci.z,i[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],S=n[3],x=n[7],E=n[11],L=n[15],w=i[0],A=i[4],z=i[8],M=i[12],T=i[1],B=i[5],k=i[9],Q=i[13],P=i[2],I=i[6],V=i[10],Y=i[14],W=i[3],X=i[7],$=i[11],et=i[15];return r[0]=o*w+a*T+c*P+l*W,r[4]=o*A+a*B+c*I+l*X,r[8]=o*z+a*k+c*V+l*$,r[12]=o*M+a*Q+c*Y+l*et,r[1]=h*w+d*T+f*P+m*W,r[5]=h*A+d*B+f*I+m*X,r[9]=h*z+d*k+f*V+m*$,r[13]=h*M+d*Q+f*Y+m*et,r[2]=g*w+_*T+p*P+u*W,r[6]=g*A+_*B+p*I+u*X,r[10]=g*z+_*k+p*V+u*$,r[14]=g*M+_*Q+p*Y+u*et,r[3]=S*w+x*T+E*P+L*W,r[7]=S*A+x*B+E*I+L*X,r[11]=S*z+x*k+E*V+L*$,r[15]=S*M+x*Q+E*Y+L*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*m-n*c*m)+_*(+e*c*m-e*l*f+r*o*f-i*o*m+i*l*h-r*c*h)+p*(+e*l*d-e*a*m-r*o*d+n*o*m+r*a*h-n*l*h)+u*(-i*a*h-e*c*d+e*a*f+i*o*d-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],S=d*p*l-_*f*l+_*c*m-a*p*m-d*c*u+a*f*u,x=g*f*l-h*p*l-g*c*m+o*p*m+h*c*u-o*f*u,E=h*_*l-g*d*l+g*a*m-o*_*m-h*a*u+o*d*u,L=g*d*c-h*_*c-g*a*f+o*_*f+h*a*p-o*d*p,w=e*S+n*x+i*E+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=S*A,t[1]=(_*f*r-d*p*r-_*i*m+n*p*m+d*i*u-n*f*u)*A,t[2]=(a*p*r-_*c*r+_*i*l-n*p*l-a*i*u+n*c*u)*A,t[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*m-n*c*m)*A,t[4]=x*A,t[5]=(h*p*r-g*f*r+g*i*m-e*p*m-h*i*u+e*f*u)*A,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*u-e*c*u)*A,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*m+e*c*m)*A,t[8]=E*A,t[9]=(g*d*r-h*_*r-g*n*m+e*_*m+h*n*u-e*d*u)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*u+e*a*u)*A,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*m-e*a*m)*A,t[12]=L*A,t[13]=(h*_*i-g*d*i+g*n*f-e*_*f-h*n*p+e*d*p)*A,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*p-e*a*p)*A,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,S=c*l,x=c*h,E=c*d,L=n.x,w=n.y,A=n.z;return i[0]=(1-(_+u))*L,i[1]=(m+E)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(m-E)*w,i[5]=(1-(f+u))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(g+x)*A,i[9]=(p-S)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Bn.set(i[0],i[1],i[2]).length();const o=Bn.set(i[4],i[5],i[6]).length(),a=Bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ze.copy(this);const l=1/r,h=1/o,d=1/a;return ze.elements[0]*=l,ze.elements[1]*=l,ze.elements[2]*=l,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=d,ze.elements[9]*=d,ze.elements[10]*=d,e.setFromRotationMatrix(ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=rn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(a===rn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qi)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=rn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),f=(e+t)*l,m=(n+i)*h;let g,_;if(a===rn)g=(o+r)*d,_=-2*d;else if(a===Qi)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bn=new R,ze=new oe,kc=new R(0,0,0),Hc=new R(1,1,1),hn=new R,Ci=new R,Le=new R,ca=new oe,la=new vi;class ss{constructor(t=0,e=0,n=0,i=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ca.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ca,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return la.setFromEuler(this),this.setFromQuaternion(la,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vc=0;const ha=new R,Gn=new vi,Je=new oe,Ri=new R,hi=new R,Wc=new R,Xc=new vi,ua=new R(1,0,0),da=new R(0,1,0),fa=new R(0,0,1),qc={type:"added"},Yc={type:"removed"};class pe extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new R,e=new ss,n=new vi,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Gt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(ua,t)}rotateY(t){return this.rotateOnAxis(da,t)}rotateZ(t){return this.rotateOnAxis(fa,t)}translateOnAxis(t,e){return ha.copy(t).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ua,t)}translateY(t){return this.translateOnAxis(da,t)}translateZ(t){return this.translateOnAxis(fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ri.copy(t):Ri.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(hi,Ri,this.up):Je.lookAt(Ri,hi,this.up),this.quaternion.setFromRotationMatrix(Je),i&&(Je.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Je),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,t,Wc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,Xc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new R(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new R,Qe=new R,Rs=new R,tn=new R,zn=new R,kn=new R,pa=new R,Ls=new R,Ps=new R,Ds=new R;let Li=!1;class He{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ke.subVectors(t,e),i.cross(ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ke.subVectors(i,e),Qe.subVectors(n,e),Rs.subVectors(t,e);const o=ke.dot(ke),a=ke.dot(Qe),c=ke.dot(Rs),l=Qe.dot(Qe),h=Qe.dot(Rs),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(t,e,n,i,r,o,a,c){return Li===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Li=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,tn.x),c.addScaledVector(o,tn.y),c.addScaledVector(a,tn.z),c)}static isFrontFacing(t,e,n,i){return ke.subVectors(n,e),Qe.subVectors(t,e),ke.cross(Qe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),ke.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Li===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Li=!0),He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;zn.subVectors(i,n),kn.subVectors(r,n),Ls.subVectors(t,n);const c=zn.dot(Ls),l=kn.dot(Ls);if(c<=0&&l<=0)return e.copy(n);Ps.subVectors(t,i);const h=zn.dot(Ps),d=kn.dot(Ps);if(h>=0&&d<=h)return e.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(zn,o);Ds.subVectors(t,r);const m=zn.dot(Ds),g=kn.dot(Ds);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(kn,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return pa.subVectors(r,i),a=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(pa,a);const u=1/(p+_+f);return o=_*u,a=f*u,e.copy(n).addScaledVector(zn,o).addScaledVector(kn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Is(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Ic(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Is(o,r,t+1/3),this.g=Is(o,r,t),this.b=Is(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=mo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Yt.fromWorkingColorSpace(ve.copy(this),t),Math.round(we(ve.r*255,0,255))*65536+Math.round(we(ve.g*255,0,255))*256+Math.round(we(ve.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,i=ve.g,r=ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=me){Yt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,i=ve.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Pi);const n=xs(un.h,Pi.h,e),i=xs(un.s,Pi.s,e),r=xs(un.l,Pi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new yt;yt.NAMES=mo;let $c=0;class si extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Zn,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Ks,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=In,this.stencilZFail=In,this.stencilZPass=In,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==js&&(n.blendSrc=this.blendSrc),this.blendDst!==Ks&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==In&&(n.stencilFail=this.stencilFail),this.stencilZFail!==In&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==In&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ie extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new R,Di=new Ht;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ea,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Di.fromBufferAttribute(this,e),Di.applyMatrix3(t),this.setXY(e,Di.x,Di.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ea&&(t.usage=this.usage),t}}class go extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _o extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jc=0;const Fe=new oe,Us=new pe,Hn=new R,Pe=new xi,ui=new xi,fe=new R;class Ce extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(co(t)?_o:go)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Us.lookAt(t),Us.updateMatrix(),this.applyMatrix4(Us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Pe.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ui.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Pe.min,ui.min),Pe.expandByPoint(fe),fe.addVectors(Pe.max,ui.max),Pe.expandByPoint(fe)):(Pe.expandByPoint(ui.min),Pe.expandByPoint(ui.max))}Pe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fe.fromBufferAttribute(a,l),c&&(Hn.fromBufferAttribute(t,l),fe.add(Hn)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new R,h[T]=new R;const d=new R,f=new R,m=new R,g=new Ht,_=new Ht,p=new Ht,u=new R,S=new R;function x(T,B,k){d.fromArray(i,T*3),f.fromArray(i,B*3),m.fromArray(i,k*3),g.fromArray(o,T*2),_.fromArray(o,B*2),p.fromArray(o,k*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Q),S.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(Q),l[T].add(u),l[B].add(u),l[k].add(u),h[T].add(S),h[B].add(S),h[k].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let T=0,B=E.length;T<B;++T){const k=E[T],Q=k.start,P=k.count;for(let I=Q,V=Q+P;I<V;I+=3)x(n[I+0],n[I+1],n[I+2])}const L=new R,w=new R,A=new R,z=new R;function M(T){A.fromArray(r,T*3),z.copy(A);const B=l[T];L.copy(B),L.sub(A.multiplyScalar(A.dot(B))).normalize(),w.crossVectors(z,B);const Q=w.dot(h[T])<0?-1:1;c[T*4]=L.x,c[T*4+1]=L.y,c[T*4+2]=L.z,c[T*4+3]=Q}for(let T=0,B=E.length;T<B;++T){const k=E[T],Q=k.start,P=k.count;for(let I=Q,V=Q+P;I<V;I+=3)M(n[I+0]),M(n[I+1]),M(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Xe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new oe,yn=new fo,Ii=new is,ga=new R,Vn=new R,Wn=new R,Xn=new R,Ns=new R,Ui=new R,Ni=new Ht,Fi=new Ht,Oi=new Ht,_a=new R,va=new R,xa=new R,Bi=new R,Gi=new R;class q extends pe{constructor(t=new Ce,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ui.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Ns.fromBufferAttribute(d,t),o?Ui.addScaledVector(Ns,h):Ui.addScaledVector(Ns.sub(e),h))}e.add(Ui)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere),Ii.applyMatrix4(r),yn.copy(t.ray).recast(t.near),!(Ii.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Ii,ga)===null||yn.origin.distanceToSquared(ga)>(t.far-t.near)**2))&&(ma.copy(r).invert(),yn.copy(t.ray).applyMatrix4(ma),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,L=x;E<L;E+=3){const w=a.getX(E),A=a.getX(E+1),z=a.getX(E+2);i=zi(this,u,t,n,l,h,d,w,A,z),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const S=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);i=zi(this,o,t,n,l,h,d,S,x,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,L=x;E<L;E+=3){const w=E,A=E+1,z=E+2;i=zi(this,u,t,n,l,h,d,w,A,z),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const S=p,x=p+1,E=p+2;i=zi(this,o,t,n,l,h,d,S,x,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Kc(s,t,e,n,i,r,o,a){let c;if(t.side===Ae?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===_n,a),c===null)return null;Gi.copy(a),Gi.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Gi);return l<e.near||l>e.far?null:{distance:l,point:Gi.clone(),object:s}}function zi(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Vn),s.getVertexPosition(c,Wn),s.getVertexPosition(l,Xn);const h=Kc(s,t,e,n,Vn,Wn,Xn,Bi);if(h){i&&(Ni.fromBufferAttribute(i,a),Fi.fromBufferAttribute(i,c),Oi.fromBufferAttribute(i,l),h.uv=He.getInterpolation(Bi,Vn,Wn,Xn,Ni,Fi,Oi,new Ht)),r&&(Ni.fromBufferAttribute(r,a),Fi.fromBufferAttribute(r,c),Oi.fromBufferAttribute(r,l),h.uv1=He.getInterpolation(Bi,Vn,Wn,Xn,Ni,Fi,Oi,new Ht),h.uv2=h.uv1),o&&(_a.fromBufferAttribute(o,a),va.fromBufferAttribute(o,c),xa.fromBufferAttribute(o,l),h.normal=He.getInterpolation(Bi,Vn,Wn,Xn,_a,va,xa,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};He.getNormal(Vn,Wn,Xn,d.normal),h.face=d}return h}class zt extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(_,p,u,S,x,E,L,w,A,z,M){const T=E/A,B=L/z,k=E/2,Q=L/2,P=w/2,I=A+1,V=z+1;let Y=0,W=0;const X=new R;for(let $=0;$<V;$++){const et=$*B-Q;for(let nt=0;nt<I;nt++){const H=nt*T-k;X[_]=H*S,X[p]=et*x,X[u]=P,l.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[u]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(nt/A),d.push(1-$/z),Y+=1}}for(let $=0;$<z;$++)for(let et=0;et<A;et++){const nt=f+et+I*$,H=f+et+I*($+1),j=f+(et+1)+I*($+1),ct=f+(et+1)+I*$;c.push(nt,H,ct),c.push(H,j,ct),W+=6}a.addGroup(m,W,M),m+=W,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ni(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(s){const t={};for(let e=0;e<s.length;e++){const n=ni(s[e]);for(const i in n)t[i]=n[i]}return t}function Zc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function vo(s){return s.getRenderTarget()===null?s.outputColorSpace:Yt.workingColorSpace}const Jc={clone:ni,merge:Ee};var Qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qc,this.fragmentShader=tl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=Zc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xo extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class De extends xo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qn=-90,Yn=1;class el extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new De(qn,Yn,t,e);i.layers=this.layers,this.add(i);const r=new De(qn,Yn,t,e);r.layers=this.layers,this.add(r);const o=new De(qn,Yn,t,e);o.layers=this.layers,this.add(o);const a=new De(qn,Yn,t,e);a.layers=this.layers,this.add(a);const c=new De(qn,Yn,t,e);c.layers=this.layers,this.add(c);const l=new De(qn,Yn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mo extends Ue{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Qn,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nl extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ln?me:Be),this.texture=new Mo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zt(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:pn});r.uniforms.tEquirect.value=e;const o=new q(i,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=Oe),new el(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Fs=new R,il=new R,sl=new Gt;class Tn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Fs.subVectors(n,e).cross(il.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sl.getNormalMatrix(t),i=this.coplanarPoint(Fs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new is,ki=new R;class hr{constructor(t=new Tn,e=new Tn,n=new Tn,i=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],u=i[12],S=i[13],x=i[14],E=i[15];if(n[0].setComponents(c-r,f-l,p-m,E-u).normalize(),n[1].setComponents(c+r,f+l,p+m,E+u).normalize(),n[2].setComponents(c+o,f+h,p+g,E+S).normalize(),n[3].setComponents(c-o,f-h,p-g,E-S).normalize(),n[4].setComponents(c-a,f-d,p-_,E-x).normalize(),e===rn)n[5].setComponents(c+a,f+d,p+_,E+x).normalize();else if(e===Qi)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(t){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(t.matrixWorld),this.intersectsSphere(En)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ki.x=i.normal.x>0?t.max.x:t.min.x,ki.y=i.normal.y>0?t.max.y:t.min.y,ki.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function So(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function rl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,f=l.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,l),m.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];e?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class rs extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,f=e/c,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const S=u*f-o;for(let x=0;x<l;x++){const E=x*d-r;g.push(E,-S,0),_.push(0,0,1),p.push(x/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<a;S++){const x=S+l*u,E=S+l*(u+1),L=S+1+l*(u+1),w=S+1+l*u;m.push(x,E,w),m.push(E,L,w)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.widthSegments,t.heightSegments)}}var al=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ol=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ll=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ul=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pl=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ml=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_l=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ml=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Al=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ll=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ul=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ol=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Bl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ql=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$l=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ql=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ah=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Eh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Th=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ch=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ph=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ih=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$h=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ru=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,au=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,du=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Au=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ou=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:al,alphahash_pars_fragment:ol,alphamap_fragment:cl,alphamap_pars_fragment:ll,alphatest_fragment:hl,alphatest_pars_fragment:ul,aomap_fragment:dl,aomap_pars_fragment:fl,batching_pars_vertex:pl,batching_vertex:ml,begin_vertex:gl,beginnormal_vertex:_l,bsdfs:vl,iridescence_fragment:xl,bumpmap_pars_fragment:Ml,clipping_planes_fragment:Sl,clipping_planes_pars_fragment:yl,clipping_planes_pars_vertex:El,clipping_planes_vertex:Tl,color_fragment:bl,color_pars_fragment:wl,color_pars_vertex:Al,color_vertex:Cl,common:Rl,cube_uv_reflection_fragment:Ll,defaultnormal_vertex:Pl,displacementmap_pars_vertex:Dl,displacementmap_vertex:Il,emissivemap_fragment:Ul,emissivemap_pars_fragment:Nl,colorspace_fragment:Fl,colorspace_pars_fragment:Ol,envmap_fragment:Bl,envmap_common_pars_fragment:Gl,envmap_pars_fragment:zl,envmap_pars_vertex:kl,envmap_physical_pars_fragment:Ql,envmap_vertex:Hl,fog_vertex:Vl,fog_pars_vertex:Wl,fog_fragment:Xl,fog_pars_fragment:ql,gradientmap_pars_fragment:Yl,lightmap_fragment:$l,lightmap_pars_fragment:jl,lights_lambert_fragment:Kl,lights_lambert_pars_fragment:Zl,lights_pars_begin:Jl,lights_toon_fragment:th,lights_toon_pars_fragment:eh,lights_phong_fragment:nh,lights_phong_pars_fragment:ih,lights_physical_fragment:sh,lights_physical_pars_fragment:rh,lights_fragment_begin:ah,lights_fragment_maps:oh,lights_fragment_end:ch,logdepthbuf_fragment:lh,logdepthbuf_pars_fragment:hh,logdepthbuf_pars_vertex:uh,logdepthbuf_vertex:dh,map_fragment:fh,map_pars_fragment:ph,map_particle_fragment:mh,map_particle_pars_fragment:gh,metalnessmap_fragment:_h,metalnessmap_pars_fragment:vh,morphcolor_vertex:xh,morphnormal_vertex:Mh,morphtarget_pars_vertex:Sh,morphtarget_vertex:yh,normal_fragment_begin:Eh,normal_fragment_maps:Th,normal_pars_fragment:bh,normal_pars_vertex:wh,normal_vertex:Ah,normalmap_pars_fragment:Ch,clearcoat_normal_fragment_begin:Rh,clearcoat_normal_fragment_maps:Lh,clearcoat_pars_fragment:Ph,iridescence_pars_fragment:Dh,opaque_fragment:Ih,packing:Uh,premultiplied_alpha_fragment:Nh,project_vertex:Fh,dithering_fragment:Oh,dithering_pars_fragment:Bh,roughnessmap_fragment:Gh,roughnessmap_pars_fragment:zh,shadowmap_pars_fragment:kh,shadowmap_pars_vertex:Hh,shadowmap_vertex:Vh,shadowmask_pars_fragment:Wh,skinbase_vertex:Xh,skinning_pars_vertex:qh,skinning_vertex:Yh,skinnormal_vertex:$h,specularmap_fragment:jh,specularmap_pars_fragment:Kh,tonemapping_fragment:Zh,tonemapping_pars_fragment:Jh,transmission_fragment:Qh,transmission_pars_fragment:tu,uv_pars_fragment:eu,uv_pars_vertex:nu,uv_vertex:iu,worldpos_vertex:su,background_vert:ru,background_frag:au,backgroundCube_vert:ou,backgroundCube_frag:cu,cube_vert:lu,cube_frag:hu,depth_vert:uu,depth_frag:du,distanceRGBA_vert:fu,distanceRGBA_frag:pu,equirect_vert:mu,equirect_frag:gu,linedashed_vert:_u,linedashed_frag:vu,meshbasic_vert:xu,meshbasic_frag:Mu,meshlambert_vert:Su,meshlambert_frag:yu,meshmatcap_vert:Eu,meshmatcap_frag:Tu,meshnormal_vert:bu,meshnormal_frag:wu,meshphong_vert:Au,meshphong_frag:Cu,meshphysical_vert:Ru,meshphysical_frag:Lu,meshtoon_vert:Pu,meshtoon_frag:Du,points_vert:Iu,points_frag:Uu,shadow_vert:Nu,shadow_frag:Fu,sprite_vert:Ou,sprite_frag:Bu},st={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Ye={basic:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new yt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Ee([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Ee([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new yt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Ee([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Ee([st.points,st.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Ee([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Ee([st.common,st.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Ee([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Ee([st.sprite,st.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Ee([st.common,st.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Ee([st.lights,st.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Ye.physical={uniforms:Ee([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Hi={r:0,b:0,g:0};function Gu(s,t,e,n,i,r,o){const a=new yt(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(p,u){let S=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),S=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===es)?(h===void 0&&(h=new q(new zt(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ni(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(x.colorSpace)!==Jt,(d!==x||f!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new q(new rs(2,2),new Dn({name:"BackgroundMaterial",uniforms:ni(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(x.colorSpace)!==Jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,f=x.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,u){p.getRGB(Hi,vo(s)),n.buffers.color.setClear(Hi.r,Hi.g,Hi.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function zu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function d(P,I,V,Y,W){let X=!1;if(o){const $=_(Y,V,I);l!==$&&(l=$,m(l.object)),X=u(P,Y,V,W),X&&S(P,Y,V,W)}else{const $=I.wireframe===!0;(l.geometry!==Y.id||l.program!==V.id||l.wireframe!==$)&&(l.geometry=Y.id,l.program=V.id,l.wireframe=$,X=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,z(P,I,V,Y),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,I,V){const Y=V.wireframe===!0;let W=a[P.id];W===void 0&&(W={},a[P.id]=W);let X=W[I.id];X===void 0&&(X={},W[I.id]=X);let $=X[Y];return $===void 0&&($=p(f()),X[Y]=$),$}function p(P){const I=[],V=[],Y=[];for(let W=0;W<i;W++)I[W]=0,V[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:Y,object:P,attributes:{},index:null}}function u(P,I,V,Y){const W=l.attributes,X=I.attributes;let $=0;const et=V.getAttributes();for(const nt in et)if(et[nt].location>=0){const j=W[nt];let ct=X[nt];if(ct===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor)),j===void 0||j.attribute!==ct||ct&&j.data!==ct.data)return!0;$++}return l.attributesNum!==$||l.index!==Y}function S(P,I,V,Y){const W={},X=I.attributes;let $=0;const et=V.getAttributes();for(const nt in et)if(et[nt].location>=0){let j=X[nt];j===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const ct={};ct.attribute=j,j&&j.data&&(ct.data=j.data),W[nt]=ct,$++}l.attributes=W,l.attributesNum=$,l.index=Y}function x(){const P=l.newAttributes;for(let I=0,V=P.length;I<V;I++)P[I]=0}function E(P){L(P,0)}function L(P,I){const V=l.newAttributes,Y=l.enabledAttributes,W=l.attributeDivisors;V[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),W[P]!==I&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),W[P]=I)}function w(){const P=l.newAttributes,I=l.enabledAttributes;for(let V=0,Y=I.length;V<Y;V++)I[V]!==P[V]&&(s.disableVertexAttribArray(V),I[V]=0)}function A(P,I,V,Y,W,X,$){$===!0?s.vertexAttribIPointer(P,I,V,W,X):s.vertexAttribPointer(P,I,V,Y,W,X)}function z(P,I,V,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const W=Y.attributes,X=V.getAttributes(),$=I.defaultAttributeValues;for(const et in X){const nt=X[et];if(nt.location>=0){let H=W[et];if(H===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const j=H.normalized,ct=H.itemSize,gt=e.get(H);if(gt===void 0)continue;const mt=gt.buffer,Rt=gt.type,Pt=gt.bytesPerElement,Et=n.isWebGL2===!0&&(Rt===s.INT||Rt===s.UNSIGNED_INT||H.gpuType===Ja);if(H.isInterleavedBufferAttribute){const Vt=H.data,U=Vt.stride,Me=H.offset;if(Vt.isInstancedInterleavedBuffer){for(let vt=0;vt<nt.locationSize;vt++)L(nt.location+vt,Vt.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let vt=0;vt<nt.locationSize;vt++)E(nt.location+vt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let vt=0;vt<nt.locationSize;vt++)A(nt.location+vt,ct/nt.locationSize,Rt,j,U*Pt,(Me+ct/nt.locationSize*vt)*Pt,Et)}else{if(H.isInstancedBufferAttribute){for(let Vt=0;Vt<nt.locationSize;Vt++)L(nt.location+Vt,H.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Vt=0;Vt<nt.locationSize;Vt++)E(nt.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Vt=0;Vt<nt.locationSize;Vt++)A(nt.location+Vt,ct/nt.locationSize,Rt,j,ct*Pt,ct/nt.locationSize*Vt*Pt,Et)}}else if($!==void 0){const j=$[et];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(nt.location,j);break;case 3:s.vertexAttrib3fv(nt.location,j);break;case 4:s.vertexAttrib4fv(nt.location,j);break;default:s.vertexAttrib1fv(nt.location,j)}}}}w()}function M(){k();for(const P in a){const I=a[P];for(const V in I){const Y=I[V];for(const W in Y)g(Y[W].object),delete Y[W];delete I[V]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const V in I){const Y=I[V];for(const W in Y)g(Y[W].object),delete Y[W];delete I[V]}delete a[P.id]}function B(P){for(const I in a){const V=a[I];if(V[P.id]===void 0)continue;const Y=V[P.id];for(const W in Y)g(Y[W].object),delete Y[W];delete V[P.id]}}function k(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:k,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:E,disableUnusedAttributes:w}}function ku(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function l(h,d,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Hu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||t.has("OES_texture_float"),L=x&&E,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:w}}function Vu(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Tn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const S=r?0:n,x=S*4;let E=u.clippingState||null;c.value=E,E=h(g,f,x,m);for(let L=0;L!==x;++L)E[L]=e[L];u.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=m+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,E=m;x!==_;++x,E+=4)o.copy(d[x]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Wu(s){let t=new WeakMap;function e(o,a){return a===Zs?o.mapping=Qn:a===Js&&(o.mapping=ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zs||a===Js)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new nl(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yo extends xo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const jn=4,Ma=[.125,.215,.35,.446,.526,.582],An=20,Os=new yo,Sa=new yt;let Bs=null,Gs=0,zs=0;const bn=(1+Math.sqrt(5))/2,$n=1/bn,ya=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,bn,$n),new R(0,bn,-$n),new R($n,0,bn),new R(-$n,0,bn),new R(bn,$n,0),new R(-bn,$n,0)];class Ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Bs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bs,Gs,zs),t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qn||t.mapping===ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:gi,format:We,colorSpace:an,depthBuffer:!1},i=Ta(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ta(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xu(r)),this._blurMaterial=qu(r,t,e)}return i}_compileMaterial(t){const e=new q(this._lodPlanes[0],t);this._renderer.compile(e,Os)}_sceneToCubeUV(t,e,n,i){const a=new De(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Sa),h.toneMapping=mn,h.autoClear=!1;const m=new Ie({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new q(new zt,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Sa),_=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):S===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const x=this._cubeSize;Vi(i,S*x,u>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Qn||t.mapping===ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ba());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Vi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Os)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ya[(i-1)%ya.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new q(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*An-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):An;p>An&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${An}`);const u=[];let S=0;for(let A=0;A<An;++A){const z=A/_,M=Math.exp(-z*z/2);u.push(M),A===0?S+=M:A<p&&(S+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const E=this._sizeLods[i],L=3*E*(i>x-jn?i-x+jn:0),w=4*(this._cubeSize-E);Vi(e,L,w,3*E,2*E),c.setRenderTarget(e),c.render(d,Os)}}function Xu(s){const t=[],e=[],n=[];let i=s;const r=s-jn+1+Ma.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-jn?c=Ma[o-s+jn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,S=new Float32Array(_*g*m),x=new Float32Array(p*g*m),E=new Float32Array(u*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,z=w>2?0:-1,M=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];S.set(M,_*g*w),x.set(f,p*g*w);const T=[w,w,w,w,w,w];E.set(T,u*g*w)}const L=new Ce;L.setAttribute("position",new Xe(S,_)),L.setAttribute("uv",new Xe(x,p)),L.setAttribute("faceIndex",new Xe(E,u)),t.push(L),i>jn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ta(s,t,e){const n=new Pn(s,t,e);return n.texture.mapping=es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function qu(s,t,e){const n=new Float32Array(An),i=new R(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ba(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function wa(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ur(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zs||c===Js,h=c===Qn||c===ti;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Ea(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ea(s));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $u(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ju(s,t,e,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],s.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let x=0,E=S.length;x<E;x+=3){const L=S[x+0],w=S[x+1],A=S[x+2];f.push(L,w,w,A,A,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,E=S.length/3-1;x<E;x+=3){const L=x+0,w=x+1,A=x+2;f.push(L,w,w,A,A,L)}}else return;const p=new(co(f)?_o:go)(f,1);p.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ku(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*c),e.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*c,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/c,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let u=0;for(let S=0;S<_;S++)u+=g[S];e.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Zu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ju(s,t){return s[0]-t[0]}function Qu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function td(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new Qt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let I=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",I)};var m=I;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),E===!0&&(M=2),L===!0&&(M=3);let T=h.attributes.position.count*M,B=1;T>t.maxTextureSize&&(B=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const k=new Float32Array(T*B*4*_),Q=new uo(k,T,B,_);Q.type=fn,Q.needsUpdate=!0;const P=M*4;for(let V=0;V<_;V++){const Y=w[V],W=A[V],X=z[V],$=T*B*4*V;for(let et=0;et<Y.count;et++){const nt=et*P;x===!0&&(o.fromBufferAttribute(Y,et),k[$+nt+0]=o.x,k[$+nt+1]=o.y,k[$+nt+2]=o.z,k[$+nt+3]=0),E===!0&&(o.fromBufferAttribute(W,et),k[$+nt+4]=o.x,k[$+nt+5]=o.y,k[$+nt+6]=o.z,k[$+nt+7]=0),L===!0&&(o.fromBufferAttribute(X,et),k[$+nt+8]=o.x,k[$+nt+9]=o.y,k[$+nt+10]=o.z,k[$+nt+11]=X.itemSize===4?o.w:1)}}p={count:_,texture:Q,size:new Ht(T,B)},r.set(h,p),h.addEventListener("dispose",I)}let u=0;for(let x=0;x<f.length;x++)u+=f[x];const S=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",S),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[h.id]=_}for(let E=0;E<g;E++){const L=_[E];L[0]=E,L[1]=f[E]}_.sort(Qu);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Ju);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const L=a[E],w=L[0],A=L[1];w!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+E)!==p[w]&&h.setAttribute("morphTarget"+E,p[w]),u&&h.getAttribute("morphNormal"+E)!==u[w]&&h.setAttribute("morphNormal"+E,u[w]),i[E]=A,S+=A):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),u&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),i[E]=0)}const x=h.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ed(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Eo extends Ue{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Rn,h!==Rn&&h!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rn&&(n=dn),n===void 0&&h===ei&&(n=Cn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Te,this.minFilter=c!==void 0?c:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const To=new Ue,bo=new Eo(1,1);bo.compareFunction=oo;const wo=new uo,Ao=new Gc,Co=new Mo,Aa=[],Ca=[],Ra=new Float32Array(16),La=new Float32Array(9),Pa=new Float32Array(4);function ri(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Aa[i];if(r===void 0&&(r=new Float32Array(i),Aa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function le(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function he(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function as(s,t){let e=Ca[t];e===void 0&&(e=new Int32Array(t),Ca[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function nd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function id(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2fv(this.addr,t),he(e,t)}}function sd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;s.uniform3fv(this.addr,t),he(e,t)}}function rd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4fv(this.addr,t),he(e,t)}}function ad(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(le(e,n))return;Pa.set(n),s.uniformMatrix2fv(this.addr,!1,Pa),he(e,n)}}function od(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(le(e,n))return;La.set(n),s.uniformMatrix3fv(this.addr,!1,La),he(e,n)}}function cd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(le(e,n))return;Ra.set(n),s.uniformMatrix4fv(this.addr,!1,Ra),he(e,n)}}function ld(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2iv(this.addr,t),he(e,t)}}function ud(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;s.uniform3iv(this.addr,t),he(e,t)}}function dd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4iv(this.addr,t),he(e,t)}}function fd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2uiv(this.addr,t),he(e,t)}}function md(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;s.uniform3uiv(this.addr,t),he(e,t)}}function gd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4uiv(this.addr,t),he(e,t)}}function _d(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?bo:To;e.setTexture2D(t||r,i)}function vd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ao,i)}function xd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Co,i)}function Md(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wo,i)}function Sd(s){switch(s){case 5126:return nd;case 35664:return id;case 35665:return sd;case 35666:return rd;case 35674:return ad;case 35675:return od;case 35676:return cd;case 5124:case 35670:return ld;case 35667:case 35671:return hd;case 35668:case 35672:return ud;case 35669:case 35673:return dd;case 5125:return fd;case 36294:return pd;case 36295:return md;case 36296:return gd;case 35678:case 36198:case 36298:case 36306:case 35682:return _d;case 35679:case 36299:case 36307:return vd;case 35680:case 36300:case 36308:case 36293:return xd;case 36289:case 36303:case 36311:case 36292:return Md}}function yd(s,t){s.uniform1fv(this.addr,t)}function Ed(s,t){const e=ri(t,this.size,2);s.uniform2fv(this.addr,e)}function Td(s,t){const e=ri(t,this.size,3);s.uniform3fv(this.addr,e)}function bd(s,t){const e=ri(t,this.size,4);s.uniform4fv(this.addr,e)}function wd(s,t){const e=ri(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ad(s,t){const e=ri(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cd(s,t){const e=ri(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rd(s,t){s.uniform1iv(this.addr,t)}function Ld(s,t){s.uniform2iv(this.addr,t)}function Pd(s,t){s.uniform3iv(this.addr,t)}function Dd(s,t){s.uniform4iv(this.addr,t)}function Id(s,t){s.uniform1uiv(this.addr,t)}function Ud(s,t){s.uniform2uiv(this.addr,t)}function Nd(s,t){s.uniform3uiv(this.addr,t)}function Fd(s,t){s.uniform4uiv(this.addr,t)}function Od(s,t,e){const n=this.cache,i=t.length,r=as(e,i);le(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||To,r[o])}function Bd(s,t,e){const n=this.cache,i=t.length,r=as(e,i);le(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ao,r[o])}function Gd(s,t,e){const n=this.cache,i=t.length,r=as(e,i);le(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Co,r[o])}function zd(s,t,e){const n=this.cache,i=t.length,r=as(e,i);le(n,r)||(s.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wo,r[o])}function kd(s){switch(s){case 5126:return yd;case 35664:return Ed;case 35665:return Td;case 35666:return bd;case 35674:return wd;case 35675:return Ad;case 35676:return Cd;case 5124:case 35670:return Rd;case 35667:case 35671:return Ld;case 35668:case 35672:return Pd;case 35669:case 35673:return Dd;case 5125:return Id;case 36294:return Ud;case 36295:return Nd;case 36296:return Fd;case 35678:case 36198:case 36298:case 36306:case 35682:return Od;case 35679:case 36299:case 36307:return Bd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return zd}}class Hd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sd(e.type)}}class Vd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kd(e.type)}}class Wd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ks=/(\w+)(\])?(\[|\.)?/g;function Da(s,t){s.seq.push(t),s.map[t.id]=t}function Xd(s,t,e){const n=s.name,i=n.length;for(ks.lastIndex=0;;){const r=ks.exec(n),o=ks.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Da(e,l===void 0?new Hd(a,s,t):new Vd(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Wd(a),Da(e,d)),e=d}}}class Yi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Xd(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ia(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const qd=37297;let Yd=0;function $d(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function jd(s){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(s);let n;switch(t===e?n="":t===Ji&&e===Zi?n="LinearDisplayP3ToLinearSRGB":t===Zi&&e===Ji&&(n="LinearSRGBToLinearDisplayP3"),s){case an:case ns:return[n,"LinearTransferOETF"];case me:case lr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ua(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+$d(s.getShaderSource(t),o)}else return i}function Kd(s,t){const e=jd(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zd(s,t){let e;switch(t){case lc:e="Linear";break;case hc:e="Reinhard";break;case uc:e="OptimizedCineon";break;case Ka:e="ACESFilmic";break;case fc:e="AgX";break;case dc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Jd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Kn).join(`
`)}function Qd(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Kn).join(`
`)}function tf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ef(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Kn(s){return s!==""}function Na(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nf=/^[ \t]*#include +<([\w\d./]+)>/gm;function sr(s){return s.replace(nf,rf)}const sf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rf(s,t){let e=It[t];if(e===void 0){const n=sf.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sr(e)}const af=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oa(s){return s.replace(af,of)}function of(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ba(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ya?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$a?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function lf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qn:case ti:t="ENVMAP_TYPE_CUBE";break;case es:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ti:t="ENVMAP_MODE_REFRACTION";break}return t}function uf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case oc:t="ENVMAP_BLENDING_MIX";break;case cc:t="ENVMAP_BLENDING_ADD";break}return t}function df(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ff(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=cf(e),l=lf(e),h=hf(e),d=uf(e),f=df(e),m=e.isWebGL2?"":Jd(e),g=Qd(e),_=tf(r),p=i.createProgram();let u,S,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Kn).join(`
`),u.length>0&&(u+=`
`),S=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Kn).join(`
`),S.length>0&&(S+=`
`)):(u=[Ba(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kn).join(`
`),S=[m,Ba(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?It.tonemapping_pars_fragment:"",e.toneMapping!==mn?Zd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Kd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kn).join(`
`)),o=sr(o),o=Na(o,e),o=Fa(o,e),a=sr(a),a=Na(a,e),a=Fa(a,e),o=Oa(o),a=Oa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===na?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=x+u+o,L=x+S+a,w=Ia(i,i.VERTEX_SHADER,E),A=Ia(i,i.FRAGMENT_SHADER,L);i.attachShader(p,w),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function z(k){if(s.debug.checkShaderErrors){const Q=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(w).trim(),I=i.getShaderInfoLog(A).trim();let V=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,A);else{const W=Ua(i,w,"vertex"),X=Ua(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+W+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||I==="")&&(Y=!1);Y&&(k.diagnostics={runnable:V,programLog:Q,vertexShader:{log:P,prefix:u},fragmentShader:{log:I,prefix:S}})}i.deleteShader(w),i.deleteShader(A),M=new Yi(i,p),T=ef(i,p)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,qd)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let pf=0;class mf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gf(t),e.set(t,n)),n}}class gf{constructor(t){this.id=pf++,this.code=t,this.usedTimes=0}}function _f(s,t,e,n,i,r,o){const a=new po,c=new mf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,B,k,Q){const P=k.fog,I=Q.geometry,V=M.isMeshStandardMaterial?k.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),W=Y&&Y.mapping===es?Y.image.height:null,X=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=$!==void 0?$.length:0;let nt=0;I.morphAttributes.position!==void 0&&(nt=1),I.morphAttributes.normal!==void 0&&(nt=2),I.morphAttributes.color!==void 0&&(nt=3);let H,j,ct,gt;if(X){const Se=Ye[X];H=Se.vertexShader,j=Se.fragmentShader}else H=M.vertexShader,j=M.fragmentShader,c.update(M),ct=c.getVertexShaderID(M),gt=c.getFragmentShaderID(M);const mt=s.getRenderTarget(),Rt=Q.isInstancedMesh===!0,Pt=Q.isBatchedMesh===!0,Et=!!M.map,Vt=!!M.matcap,U=!!Y,Me=!!M.aoMap,vt=!!M.lightMap,At=!!M.bumpMap,dt=!!M.normalMap,te=!!M.displacementMap,Ut=!!M.emissiveMap,b=!!M.metalnessMap,v=!!M.roughnessMap,F=M.anisotropy>0,J=M.clearcoat>0,Z=M.iridescence>0,tt=M.sheen>0,ft=M.transmission>0,ot=F&&!!M.anisotropyMap,ht=J&&!!M.clearcoatMap,St=J&&!!M.clearcoatNormalMap,Nt=J&&!!M.clearcoatRoughnessMap,K=Z&&!!M.iridescenceMap,qt=Z&&!!M.iridescenceThicknessMap,kt=tt&&!!M.sheenColorMap,wt=tt&&!!M.sheenRoughnessMap,_t=!!M.specularMap,ut=!!M.specularColorMap,Dt=!!M.specularIntensityMap,Xt=ft&&!!M.transmissionMap,ne=ft&&!!M.thicknessMap,Ot=!!M.gradientMap,it=!!M.alphaMap,C=M.alphaTest>0,rt=!!M.alphaHash,at=!!M.extensions,Tt=!!I.attributes.uv1,xt=!!I.attributes.uv2,jt=!!I.attributes.uv3;let Kt=mn;return M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Kt=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:j,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:gt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Pt,instancing:Rt,instancingColor:Rt&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:an,map:Et,matcap:Vt,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:W,aoMap:Me,lightMap:vt,bumpMap:At,normalMap:dt,displacementMap:f&&te,emissiveMap:Ut,normalMapObjectSpace:dt&&M.normalMapType===bc,normalMapTangentSpace:dt&&M.normalMapType===ao,metalnessMap:b,roughnessMap:v,anisotropy:F,anisotropyMap:ot,clearcoat:J,clearcoatMap:ht,clearcoatNormalMap:St,clearcoatRoughnessMap:Nt,iridescence:Z,iridescenceMap:K,iridescenceThicknessMap:qt,sheen:tt,sheenColorMap:kt,sheenRoughnessMap:wt,specularMap:_t,specularColorMap:ut,specularIntensityMap:Dt,transmission:ft,transmissionMap:Xt,thicknessMap:ne,gradientMap:Ot,opaque:M.transparent===!1&&M.blending===Zn,alphaMap:it,alphaTest:C,alphaHash:rt,combine:M.combine,mapUv:Et&&_(M.map.channel),aoMapUv:Me&&_(M.aoMap.channel),lightMapUv:vt&&_(M.lightMap.channel),bumpMapUv:At&&_(M.bumpMap.channel),normalMapUv:dt&&_(M.normalMap.channel),displacementMapUv:te&&_(M.displacementMap.channel),emissiveMapUv:Ut&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:ot&&_(M.anisotropyMap.channel),clearcoatMapUv:ht&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:St&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(M.sheenRoughnessMap.channel),specularMapUv:_t&&_(M.specularMap.channel),specularColorMapUv:ut&&_(M.specularColorMap.channel),specularIntensityMapUv:Dt&&_(M.specularIntensityMap.channel),transmissionMapUv:Xt&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:it&&_(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(dt||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Tt,vertexUv2s:xt,vertexUv3s:jt,pointsUvs:Q.isPoints===!0&&!!I.attributes.uv&&(Et||it),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===Jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sn,flipSided:M.side===Ae,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:at&&M.extensions.derivatives===!0,extensionFragDepth:at&&M.extensions.fragDepth===!0,extensionDrawBuffers:at&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(S(T,M),x(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function S(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){const T=g[M.type];let B;if(T){const k=Ye[T];B=Jc.clone(k.uniforms)}else B=M.uniforms;return B}function L(M,T){let B;for(let k=0,Q=l.length;k<Q;k++){const P=l[k];if(P.cacheKey===T){B=P,++B.usedTimes;break}}return B===void 0&&(B=new ff(s,T,M,r),l.push(B)),B}function w(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:z}}function vf(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function xf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ga(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function za(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,f,m,g,_,p){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function a(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):e.push(u)}function c(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||xf),n.length>1&&n.sort(f||Ga),i.length>1&&i.sort(f||Ga)}function h(){for(let d=t,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Mf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new za,s.set(n,[o])):i>=r.length?(o=new za,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Sf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new yt};break;case"SpotLight":e={position:new R,direction:new R,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function yf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ef=0;function Tf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bf(s,t){const e=new Sf,n=yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,o=new oe,a=new oe;function c(h,d){let f=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,p=0,u=0,S=0,x=0,E=0,L=0,w=0,A=0,z=0,M=0;h.sort(Tf);const T=d===!0?Math.PI:1;for(let k=0,Q=h.length;k<Q;k++){const P=h[k],I=P.color,V=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=I.r*V*T,m+=I.g*V*T,g+=I.b*V*T;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],V);M++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const $=P.shadow,et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.directionalShadow[_]=et,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=P.shadow.matrix,E++}i.directional[_]=X,_++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(I).multiplyScalar(V*T),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[u]=X;const $=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&z++),i.spotLightMatrix[u]=$.matrix,P.castShadow){const et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.spotShadow[u]=et,i.spotShadowMap[u]=W,w++}u++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(I).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=X,S++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*T),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,et=n.get(P);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=P.shadow.matrix,L++}i.point[p]=X,p++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(V*T),X.groundColor.copy(P.groundColor).multiplyScalar(V*T),i.hemi[x]=X,x++}}S>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==S||B.hemiLength!==x||B.numDirectionalShadows!==E||B.numPointShadows!==L||B.numSpotShadows!==w||B.numSpotMaps!==A||B.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=u,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=w+A-z,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=M,B.directionalLength=_,B.pointLength=p,B.spotLength=u,B.rectAreaLength=S,B.hemiLength=x,B.numDirectionalShadows=E,B.numPointShadows=L,B.numSpotShadows=w,B.numSpotMaps=A,B.numLightProbes=M,i.version=Ef++)}function l(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const E=h[S];if(E.isDirectionalLight){const L=i.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),f++}else if(E.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),g++}else if(E.isRectAreaLight){const L=i.rectArea[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const L=i.hemi[p];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:i}}function ka(s,t){const e=new bf(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function wf(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new ka(s,t),e.set(r,[c])):o>=a.length?(c=new ka(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Af extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cf extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pf(s,t,e){let n=new hr;const i=new Ht,r=new Ht,o=new Qt,a=new Af({depthPacking:Tc}),c=new Cf,l={},h=e.maxTextureSize,d={[_n]:Ae,[Ae]:_n,[sn]:sn},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Rf,fragmentShader:Lf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new q(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let u=this.type;this.render=function(w,A,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),T=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),k=s.state;k.setBlending(pn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Q=u!==en&&this.type===en,P=u===en&&this.type!==en;for(let I=0,V=w.length;I<V;I++){const Y=w[I],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const X=W.getFrameExtents();if(i.multiply(X),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||Q===!0||P===!0){const et=this.type!==en?{minFilter:Te,magFilter:Te}:{};W.map!==null&&W.map.dispose(),W.map=new Pn(i.x,i.y,et),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const $=W.getViewportCount();for(let et=0;et<$;et++){const nt=W.getViewport(et);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),k.viewport(o),W.updateMatrices(Y,et),n=W.getFrustum(),E(A,z,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===en&&S(W,z),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(M,T,B)};function S(w,A){const z=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,z,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,z,m,_,null)}function x(w,A,z,M){let T=null;const B=z.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)T=B;else if(T=z.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=T.uuid,Q=A.uuid;let P=l[k];P===void 0&&(P={},l[k]=P);let I=P[Q];I===void 0&&(I=T.clone(),P[Q]=I,A.addEventListener("dispose",L)),T=I}if(T.visible=A.visible,T.wireframe=A.wireframe,M===en?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=s.properties.get(T);k.light=z}return T}function E(w,A,z,M,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===en)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld);const Q=t.update(w),P=w.material;if(Array.isArray(P)){const I=Q.groups;for(let V=0,Y=I.length;V<Y;V++){const W=I[V],X=P[W.materialIndex];if(X&&X.visible){const $=x(w,X,M,T);w.onBeforeShadow(s,w,A,z,Q,$,W),s.renderBufferDirect(z,null,Q,$,w,W),w.onAfterShadow(s,w,A,z,Q,$,W)}}}else if(P.visible){const I=x(w,P,M,T);w.onBeforeShadow(s,w,A,z,Q,I,null),s.renderBufferDirect(z,null,Q,I,w,null),w.onAfterShadow(s,w,A,z,Q,I,null)}}const k=w.children;for(let Q=0,P=k.length;Q<P;Q++)E(k[Q],A,z,M,T)}function L(w){w.target.removeEventListener("dispose",L);for(const z in l){const M=l[z],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Df(s,t,e){const n=e.isWebGL2;function i(){let C=!1;const rt=new Qt;let at=null;const Tt=new Qt(0,0,0,0);return{setMask:function(xt){at!==xt&&!C&&(s.colorMask(xt,xt,xt,xt),at=xt)},setLocked:function(xt){C=xt},setClear:function(xt,jt,Kt,ue,Se){Se===!0&&(xt*=ue,jt*=ue,Kt*=ue),rt.set(xt,jt,Kt,ue),Tt.equals(rt)===!1&&(s.clearColor(xt,jt,Kt,ue),Tt.copy(rt))},reset:function(){C=!1,at=null,Tt.set(-1,0,0,0)}}}function r(){let C=!1,rt=null,at=null,Tt=null;return{setTest:function(xt){xt?Pt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(xt){rt!==xt&&!C&&(s.depthMask(xt),rt=xt)},setFunc:function(xt){if(at!==xt){switch(xt){case tc:s.depthFunc(s.NEVER);break;case ec:s.depthFunc(s.ALWAYS);break;case nc:s.depthFunc(s.LESS);break;case ji:s.depthFunc(s.LEQUAL);break;case ic:s.depthFunc(s.EQUAL);break;case sc:s.depthFunc(s.GEQUAL);break;case rc:s.depthFunc(s.GREATER);break;case ac:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=xt}},setLocked:function(xt){C=xt},setClear:function(xt){Tt!==xt&&(s.clearDepth(xt),Tt=xt)},reset:function(){C=!1,rt=null,at=null,Tt=null}}}function o(){let C=!1,rt=null,at=null,Tt=null,xt=null,jt=null,Kt=null,ue=null,Se=null;return{setTest:function(Zt){C||(Zt?Pt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Zt){rt!==Zt&&!C&&(s.stencilMask(Zt),rt=Zt)},setFunc:function(Zt,ye,qe){(at!==Zt||Tt!==ye||xt!==qe)&&(s.stencilFunc(Zt,ye,qe),at=Zt,Tt=ye,xt=qe)},setOp:function(Zt,ye,qe){(jt!==Zt||Kt!==ye||ue!==qe)&&(s.stencilOp(Zt,ye,qe),jt=Zt,Kt=ye,ue=qe)},setLocked:function(Zt){C=Zt},setClear:function(Zt){Se!==Zt&&(s.clearStencil(Zt),Se=Zt)},reset:function(){C=!1,rt=null,at=null,Tt=null,xt=null,jt=null,Kt=null,ue=null,Se=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,S=null,x=null,E=null,L=null,w=null,A=null,z=null,M=new yt(0,0,0),T=0,B=!1,k=null,Q=null,P=null,I=null,V=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),W=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=X>=2);let et=null,nt={};const H=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ct=new Qt().fromArray(H),gt=new Qt().fromArray(j);function mt(C,rt,at,Tt){const xt=new Uint8Array(4),jt=s.createTexture();s.bindTexture(C,jt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<at;Kt++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(rt,0,s.RGBA,1,1,Tt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(rt+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return jt}const Rt={};Rt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pt(s.DEPTH_TEST),c.setFunc(ji),Ut(!1),b(yr),Pt(s.CULL_FACE),dt(pn);function Pt(C){f[C]!==!0&&(s.enable(C),f[C]=!0)}function Et(C){f[C]!==!1&&(s.disable(C),f[C]=!1)}function Vt(C,rt){return m[C]!==rt?(s.bindFramebuffer(C,rt),m[C]=rt,n&&(C===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=rt),C===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=rt)),!0):!1}function U(C,rt){let at=_,Tt=!1;if(C)if(at=g.get(rt),at===void 0&&(at=[],g.set(rt,at)),C.isWebGLMultipleRenderTargets){const xt=C.texture;if(at.length!==xt.length||at[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,Kt=xt.length;jt<Kt;jt++)at[jt]=s.COLOR_ATTACHMENT0+jt;at.length=xt.length,Tt=!0}}else at[0]!==s.COLOR_ATTACHMENT0&&(at[0]=s.COLOR_ATTACHMENT0,Tt=!0);else at[0]!==s.BACK&&(at[0]=s.BACK,Tt=!0);Tt&&(e.isWebGL2?s.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Me(C){return p!==C?(s.useProgram(C),p=C,!0):!1}const vt={[wn]:s.FUNC_ADD,[Go]:s.FUNC_SUBTRACT,[zo]:s.FUNC_REVERSE_SUBTRACT};if(n)vt[wr]=s.MIN,vt[Ar]=s.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(vt[wr]=C.MIN_EXT,vt[Ar]=C.MAX_EXT)}const At={[ko]:s.ZERO,[Ho]:s.ONE,[Vo]:s.SRC_COLOR,[js]:s.SRC_ALPHA,[jo]:s.SRC_ALPHA_SATURATE,[Yo]:s.DST_COLOR,[Xo]:s.DST_ALPHA,[Wo]:s.ONE_MINUS_SRC_COLOR,[Ks]:s.ONE_MINUS_SRC_ALPHA,[$o]:s.ONE_MINUS_DST_COLOR,[qo]:s.ONE_MINUS_DST_ALPHA,[Ko]:s.CONSTANT_COLOR,[Zo]:s.ONE_MINUS_CONSTANT_COLOR,[Jo]:s.CONSTANT_ALPHA,[Qo]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(C,rt,at,Tt,xt,jt,Kt,ue,Se,Zt){if(C===pn){u===!0&&(Et(s.BLEND),u=!1);return}if(u===!1&&(Pt(s.BLEND),u=!0),C!==Bo){if(C!==S||Zt!==B){if((x!==wn||w!==wn)&&(s.blendEquation(s.FUNC_ADD),x=wn,w=wn),Zt)switch(C){case Zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Er:s.blendFunc(s.ONE,s.ONE);break;case Tr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case br:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Er:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case br:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,L=null,A=null,z=null,M.set(0,0,0),T=0,S=C,B=Zt}return}xt=xt||rt,jt=jt||at,Kt=Kt||Tt,(rt!==x||xt!==w)&&(s.blendEquationSeparate(vt[rt],vt[xt]),x=rt,w=xt),(at!==E||Tt!==L||jt!==A||Kt!==z)&&(s.blendFuncSeparate(At[at],At[Tt],At[jt],At[Kt]),E=at,L=Tt,A=jt,z=Kt),(ue.equals(M)===!1||Se!==T)&&(s.blendColor(ue.r,ue.g,ue.b,Se),M.copy(ue),T=Se),S=C,B=!1}function te(C,rt){C.side===sn?Et(s.CULL_FACE):Pt(s.CULL_FACE);let at=C.side===Ae;rt&&(at=!at),Ut(at),C.blending===Zn&&C.transparent===!1?dt(pn):dt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const Tt=C.stencilWrite;l.setTest(Tt),Tt&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(C){k!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),k=C)}function b(C){C!==Fo?(Pt(s.CULL_FACE),C!==Q&&(C===yr?s.cullFace(s.BACK):C===Oo?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),Q=C}function v(C){C!==P&&(W&&s.lineWidth(C),P=C)}function F(C,rt,at){C?(Pt(s.POLYGON_OFFSET_FILL),(I!==rt||V!==at)&&(s.polygonOffset(rt,at),I=rt,V=at)):Et(s.POLYGON_OFFSET_FILL)}function J(C){C?Pt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Z(C){C===void 0&&(C=s.TEXTURE0+Y-1),et!==C&&(s.activeTexture(C),et=C)}function tt(C,rt,at){at===void 0&&(et===null?at=s.TEXTURE0+Y-1:at=et);let Tt=nt[at];Tt===void 0&&(Tt={type:void 0,texture:void 0},nt[at]=Tt),(Tt.type!==C||Tt.texture!==rt)&&(et!==at&&(s.activeTexture(at),et=at),s.bindTexture(C,rt||Rt[C]),Tt.type=C,Tt.texture=rt)}function ft(){const C=nt[et];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ot(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(C){ct.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),ct.copy(C))}function Xt(C){gt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),gt.copy(C))}function ne(C,rt){let at=d.get(rt);at===void 0&&(at=new WeakMap,d.set(rt,at));let Tt=at.get(C);Tt===void 0&&(Tt=s.getUniformBlockIndex(rt,C.name),at.set(C,Tt))}function Ot(C,rt){const Tt=d.get(rt).get(C);h.get(rt)!==Tt&&(s.uniformBlockBinding(rt,Tt,C.__bindingPointIndex),h.set(rt,Tt))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},et=null,nt={},m={},g=new WeakMap,_=[],p=null,u=!1,S=null,x=null,E=null,L=null,w=null,A=null,z=null,M=new yt(0,0,0),T=0,B=!1,k=null,Q=null,P=null,I=null,V=null,ct.set(0,0,s.canvas.width,s.canvas.height),gt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Pt,disable:Et,bindFramebuffer:Vt,drawBuffers:U,useProgram:Me,setBlending:dt,setMaterial:te,setFlipSided:Ut,setCullFace:b,setLineWidth:v,setPolygonOffset:F,setScissorTest:J,activeTexture:Z,bindTexture:tt,unbindTexture:ft,compressedTexImage2D:ot,compressedTexImage3D:ht,texImage2D:_t,texImage3D:ut,updateUBOMapping:ne,uniformBlockBinding:Ot,texStorage2D:kt,texStorage3D:wt,texSubImage2D:St,texSubImage3D:Nt,compressedTexSubImage2D:K,compressedTexSubImage3D:qt,scissor:Dt,viewport:Xt,reset:it}}function If(s,t,e,n,i,r,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return m?new OffscreenCanvas(b,v):ts("canvas")}function _(b,v,F,J){let Z=1;if((b.width>J||b.height>J)&&(Z=J/Math.max(b.width,b.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const tt=v?ir:Math.floor,ft=tt(Z*b.width),ot=tt(Z*b.height);d===void 0&&(d=g(ft,ot));const ht=F?g(ft,ot):d;return ht.width=ft,ht.height=ot,ht.getContext("2d").drawImage(b,0,0,ft,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ft+"x"+ot+")."),ht}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return ia(b.width)&&ia(b.height)}function u(b){return a?!1:b.wrapS!==Ve||b.wrapT!==Ve||b.minFilter!==Te&&b.minFilter!==Oe}function S(b,v){return b.generateMipmaps&&v&&b.minFilter!==Te&&b.minFilter!==Oe}function x(b){s.generateMipmap(b)}function E(b,v,F,J,Z=!1){if(a===!1)return v;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=v;if(v===s.RED&&(F===s.FLOAT&&(tt=s.R32F),F===s.HALF_FLOAT&&(tt=s.R16F),F===s.UNSIGNED_BYTE&&(tt=s.R8)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(tt=s.R8UI),F===s.UNSIGNED_SHORT&&(tt=s.R16UI),F===s.UNSIGNED_INT&&(tt=s.R32UI),F===s.BYTE&&(tt=s.R8I),F===s.SHORT&&(tt=s.R16I),F===s.INT&&(tt=s.R32I)),v===s.RG&&(F===s.FLOAT&&(tt=s.RG32F),F===s.HALF_FLOAT&&(tt=s.RG16F),F===s.UNSIGNED_BYTE&&(tt=s.RG8)),v===s.RGBA){const ft=Z?Ki:Yt.getTransfer(J);F===s.FLOAT&&(tt=s.RGBA32F),F===s.HALF_FLOAT&&(tt=s.RGBA16F),F===s.UNSIGNED_BYTE&&(tt=ft===Jt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function L(b,v,F){return S(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==Te&&b.minFilter!==Oe?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function w(b){return b===Te||b===Cr||b===ds?s.NEAREST:s.LINEAR}function A(b){const v=b.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function z(b){const v=b.target;v.removeEventListener("dispose",z),B(v)}function M(b){const v=n.get(b);if(v.__webglInit===void 0)return;const F=b.source,J=f.get(F);if(J){const Z=J[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(b),Object.keys(J).length===0&&f.delete(F)}n.remove(b)}function T(b){const v=n.get(b);s.deleteTexture(v.__webglTexture);const F=b.source,J=f.get(F);delete J[v.__cacheKey],o.memory.textures--}function B(b){const v=b.texture,F=n.get(b),J=n.get(v);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let tt=0;tt<F.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(F.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)s.deleteFramebuffer(F.__webglFramebuffer[Z]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,tt=v.length;Z<tt;Z++){const ft=n.get(v[Z]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(v[Z])}n.remove(v),n.remove(b)}let k=0;function Q(){k=0}function P(){const b=k;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),k+=1,b}function I(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function V(b,v){const F=n.get(b);if(b.isVideoTexture&&te(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(F,b,v);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function Y(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ct(F,b,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function W(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ct(F,b,v);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function X(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){gt(F,b,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}const $={[Qs]:s.REPEAT,[Ve]:s.CLAMP_TO_EDGE,[tr]:s.MIRRORED_REPEAT},et={[Te]:s.NEAREST,[Cr]:s.NEAREST_MIPMAP_NEAREST,[ds]:s.NEAREST_MIPMAP_LINEAR,[Oe]:s.LINEAR,[pc]:s.LINEAR_MIPMAP_NEAREST,[mi]:s.LINEAR_MIPMAP_LINEAR},nt={[wc]:s.NEVER,[Dc]:s.ALWAYS,[Ac]:s.LESS,[oo]:s.LEQUAL,[Cc]:s.EQUAL,[Pc]:s.GEQUAL,[Rc]:s.GREATER,[Lc]:s.NOTEQUAL};function H(b,v,F){if(F?(s.texParameteri(b,s.TEXTURE_WRAP_S,$[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,$[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,$[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,et[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,et[v.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==Ve||v.wrapT!==Ve)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,w(v.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Te&&v.minFilter!==Oe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Te||v.minFilter!==ds&&v.minFilter!==mi||v.type===fn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===gi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function j(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",A));const J=v.source;let Z=f.get(J);Z===void 0&&(Z={},f.set(J,Z));const tt=I(v);if(tt!==b.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[tt].usedTimes++;const ft=Z[b.__cacheKey];ft!==void 0&&(Z[b.__cacheKey].usedTimes--,ft.usedTimes===0&&T(v)),b.__cacheKey=tt,b.__webglTexture=Z[tt].texture}return F}function ct(b,v,F){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const Z=j(b,v),tt=v.source;e.bindTexture(J,b.__webglTexture,s.TEXTURE0+F);const ft=n.get(tt);if(tt.version!==ft.__version||Z===!0){e.activeTexture(s.TEXTURE0+F);const ot=Yt.getPrimaries(Yt.workingColorSpace),ht=v.colorSpace===Be?null:Yt.getPrimaries(v.colorSpace),St=v.colorSpace===Be||ot===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Nt=u(v)&&p(v.image)===!1;let K=_(v.image,Nt,!1,i.maxTextureSize);K=Ut(v,K);const qt=p(K)||a,kt=r.convert(v.format,v.colorSpace);let wt=r.convert(v.type),_t=E(v.internalFormat,kt,wt,v.colorSpace,v.isVideoTexture);H(J,v,qt);let ut;const Dt=v.mipmaps,Xt=a&&v.isVideoTexture!==!0&&_t!==so,ne=ft.__version===void 0||Z===!0,Ot=L(v,K,qt);if(v.isDepthTexture)_t=s.DEPTH_COMPONENT,a?v.type===fn?_t=s.DEPTH_COMPONENT32F:v.type===dn?_t=s.DEPTH_COMPONENT24:v.type===Cn?_t=s.DEPTH24_STENCIL8:_t=s.DEPTH_COMPONENT16:v.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Rn&&_t===s.DEPTH_COMPONENT&&v.type!==cr&&v.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=dn,wt=r.convert(v.type)),v.format===ei&&_t===s.DEPTH_COMPONENT&&(_t=s.DEPTH_STENCIL,v.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Cn,wt=r.convert(v.type))),ne&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,_t,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,_t,K.width,K.height,0,kt,wt,null));else if(v.isDataTexture)if(Dt.length>0&&qt){Xt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ot,_t,Dt[0].width,Dt[0].height);for(let it=0,C=Dt.length;it<C;it++)ut=Dt[it],Xt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ut.width,ut.height,kt,wt,ut.data):e.texImage2D(s.TEXTURE_2D,it,_t,ut.width,ut.height,0,kt,wt,ut.data);v.generateMipmaps=!1}else Xt?(ne&&e.texStorage2D(s.TEXTURE_2D,Ot,_t,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,kt,wt,K.data)):e.texImage2D(s.TEXTURE_2D,0,_t,K.width,K.height,0,kt,wt,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,_t,Dt[0].width,Dt[0].height,K.depth);for(let it=0,C=Dt.length;it<C;it++)ut=Dt[it],v.format!==We?kt!==null?Xt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,K.depth,kt,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,_t,ut.width,ut.height,K.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,K.depth,kt,wt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,_t,ut.width,ut.height,K.depth,0,kt,wt,ut.data)}else{Xt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ot,_t,Dt[0].width,Dt[0].height);for(let it=0,C=Dt.length;it<C;it++)ut=Dt[it],v.format!==We?kt!==null?Xt?e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,ut.width,ut.height,kt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,it,_t,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,ut.width,ut.height,kt,wt,ut.data):e.texImage2D(s.TEXTURE_2D,it,_t,ut.width,ut.height,0,kt,wt,ut.data)}else if(v.isDataArrayTexture)Xt?(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,_t,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,kt,wt,K.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,K.width,K.height,K.depth,0,kt,wt,K.data);else if(v.isData3DTexture)Xt?(ne&&e.texStorage3D(s.TEXTURE_3D,Ot,_t,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,kt,wt,K.data)):e.texImage3D(s.TEXTURE_3D,0,_t,K.width,K.height,K.depth,0,kt,wt,K.data);else if(v.isFramebufferTexture){if(ne)if(Xt)e.texStorage2D(s.TEXTURE_2D,Ot,_t,K.width,K.height);else{let it=K.width,C=K.height;for(let rt=0;rt<Ot;rt++)e.texImage2D(s.TEXTURE_2D,rt,_t,it,C,0,kt,wt,null),it>>=1,C>>=1}}else if(Dt.length>0&&qt){Xt&&ne&&e.texStorage2D(s.TEXTURE_2D,Ot,_t,Dt[0].width,Dt[0].height);for(let it=0,C=Dt.length;it<C;it++)ut=Dt[it],Xt?e.texSubImage2D(s.TEXTURE_2D,it,0,0,kt,wt,ut):e.texImage2D(s.TEXTURE_2D,it,_t,kt,wt,ut);v.generateMipmaps=!1}else Xt?(ne&&e.texStorage2D(s.TEXTURE_2D,Ot,_t,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,kt,wt,K)):e.texImage2D(s.TEXTURE_2D,0,_t,kt,wt,K);S(v,qt)&&x(J),ft.__version=tt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function gt(b,v,F){if(v.image.length!==6)return;const J=j(b,v),Z=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+F);const tt=n.get(Z);if(Z.version!==tt.__version||J===!0){e.activeTexture(s.TEXTURE0+F);const ft=Yt.getPrimaries(Yt.workingColorSpace),ot=v.colorSpace===Be?null:Yt.getPrimaries(v.colorSpace),ht=v.colorSpace===Be||ft===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const St=v.isCompressedTexture||v.image[0].isCompressedTexture,Nt=v.image[0]&&v.image[0].isDataTexture,K=[];for(let it=0;it<6;it++)!St&&!Nt?K[it]=_(v.image[it],!1,!0,i.maxCubemapSize):K[it]=Nt?v.image[it].image:v.image[it],K[it]=Ut(v,K[it]);const qt=K[0],kt=p(qt)||a,wt=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),ut=E(v.internalFormat,wt,_t,v.colorSpace),Dt=a&&v.isVideoTexture!==!0,Xt=tt.__version===void 0||J===!0;let ne=L(v,qt,kt);H(s.TEXTURE_CUBE_MAP,v,kt);let Ot;if(St){Dt&&Xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ne,ut,qt.width,qt.height);for(let it=0;it<6;it++){Ot=K[it].mipmaps;for(let C=0;C<Ot.length;C++){const rt=Ot[C];v.format!==We?wt!==null?Dt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C,0,0,rt.width,rt.height,wt,rt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C,ut,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C,0,0,rt.width,rt.height,wt,_t,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C,ut,rt.width,rt.height,0,wt,_t,rt.data)}}}else{Ot=v.mipmaps,Dt&&Xt&&(Ot.length>0&&ne++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ne,ut,K[0].width,K[0].height));for(let it=0;it<6;it++)if(Nt){Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,K[it].width,K[it].height,wt,_t,K[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ut,K[it].width,K[it].height,0,wt,_t,K[it].data);for(let C=0;C<Ot.length;C++){const at=Ot[C].image[it].image;Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C+1,0,0,at.width,at.height,wt,_t,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C+1,ut,at.width,at.height,0,wt,_t,at.data)}}else{Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt,_t,K[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ut,wt,_t,K[it]);for(let C=0;C<Ot.length;C++){const rt=Ot[C];Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C+1,0,0,wt,_t,rt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,C+1,ut,wt,_t,rt.image[it])}}}S(v,kt)&&x(s.TEXTURE_CUBE_MAP),tt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function mt(b,v,F,J,Z,tt){const ft=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ht=E(F.internalFormat,ft,ot,F.colorSpace);if(!n.get(v).__hasExternalTextures){const Nt=Math.max(1,v.width>>tt),K=Math.max(1,v.height>>tt);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,ht,Nt,K,v.depth,0,ft,ot,null):e.texImage2D(Z,tt,ht,Nt,K,0,ft,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),dt(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,n.get(F).__webglTexture,0,At(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,n.get(F).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(b,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let J=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||dt(v)){const Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===fn?J=s.DEPTH_COMPONENT32F:Z.type===dn&&(J=s.DEPTH_COMPONENT24));const tt=At(v);dt(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,J,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,J,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const J=At(v);F&&dt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,v.width,v.height):dt(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<J.length;Z++){const tt=J[Z],ft=r.convert(tt.format,tt.colorSpace),ot=r.convert(tt.type),ht=E(tt.internalFormat,ft,ot,tt.colorSpace),St=At(v);F&&dt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,ht,v.width,v.height):dt(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,ht,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ht,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const J=n.get(v.depthTexture).__webglTexture,Z=At(v);if(v.depthTexture.format===Rn)dt(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===ei)dt(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Et(b){const v=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(v.__webglFramebuffer,b)}else if(F){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=s.createRenderbuffer(),Rt(v.__webglDepthbuffer[J],b,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Rt(v.__webglDepthbuffer,b,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(b,v,F){const J=n.get(b);v!==void 0&&mt(J.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Et(b)}function U(b){const v=b.texture,F=n.get(b),J=n.get(v);b.addEventListener("dispose",z),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,o.memory.textures++);const Z=b.isWebGLCubeRenderTarget===!0,tt=b.isWebGLMultipleRenderTargets===!0,ft=p(b)||a;if(Z){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ht=0;ht<v.mipmaps.length;ht++)F.__webglFramebuffer[ot][ht]=s.createFramebuffer()}else F.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)F.__webglFramebuffer[ot]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(tt)if(i.drawBuffers){const ot=b.texture;for(let ht=0,St=ot.length;ht<St;ht++){const Nt=n.get(ot[ht]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&dt(b)===!1){const ot=tt?v:[v];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ht=0;ht<ot.length;ht++){const St=ot[ht];F.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);const Nt=r.convert(St.format,St.colorSpace),K=r.convert(St.type),qt=E(St.internalFormat,Nt,K,St.colorSpace,b.isXRRenderTarget===!0),kt=At(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,qt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,F.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),H(s.TEXTURE_CUBE_MAP,v,ft);for(let ot=0;ot<6;ot++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)mt(F.__webglFramebuffer[ot][ht],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else mt(F.__webglFramebuffer[ot],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);S(v,ft)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const ot=b.texture;for(let ht=0,St=ot.length;ht<St;ht++){const Nt=ot[ht],K=n.get(Nt);e.bindTexture(s.TEXTURE_2D,K.__webglTexture),H(s.TEXTURE_2D,Nt,ft),mt(F.__webglFramebuffer,b,Nt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),S(Nt,ft)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ot=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,J.__webglTexture),H(ot,v,ft),a&&v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)mt(F.__webglFramebuffer[ht],b,v,s.COLOR_ATTACHMENT0,ot,ht);else mt(F.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,ot,0);S(v,ft)&&x(ot),e.unbindTexture()}b.depthBuffer&&Et(b)}function Me(b){const v=p(b)||a,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,Z=F.length;J<Z;J++){const tt=F[J];if(S(tt,v)){const ft=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ot=n.get(tt).__webglTexture;e.bindTexture(ft,ot),x(ft),e.unbindTexture()}}}function vt(b){if(a&&b.samples>0&&dt(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,J=b.height;let Z=s.COLOR_BUFFER_BIT;const tt=[],ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=n.get(b),ht=b.isWebGLMultipleRenderTargets===!0;if(ht)for(let St=0;St<v.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let St=0;St<v.length;St++){tt.push(s.COLOR_ATTACHMENT0+St),b.depthBuffer&&tt.push(ft);const Nt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Nt===!1&&(b.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ht&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ot.__webglColorRenderbuffer[St]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ft]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ft])),ht){const K=n.get(v[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,F,J,0,0,F,J,Z,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let St=0;St<v.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,ot.__webglColorRenderbuffer[St]);const Nt=n.get(v[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function At(b){return Math.min(i.maxSamples,b.samples)}function dt(b){const v=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(b){const v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Ut(b,v){const F=b.colorSpace,J=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===er||F!==an&&F!==Be&&(Yt.getTransfer(F)===Jt?a===!1?t.has("EXT_sRGB")===!0&&J===We?(b.format=er,b.minFilter=Oe,b.generateMipmaps=!1):v=lo.sRGBToLinear(v):(J!==We||Z!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=dt}function Uf(s,t,e){const n=e.isWebGL2;function i(r,o=Be){let a;const c=Yt.getTransfer(o);if(r===gn)return s.UNSIGNED_BYTE;if(r===Qa)return s.UNSIGNED_SHORT_4_4_4_4;if(r===to)return s.UNSIGNED_SHORT_5_5_5_1;if(r===mc)return s.BYTE;if(r===gc)return s.SHORT;if(r===cr)return s.UNSIGNED_SHORT;if(r===Ja)return s.INT;if(r===dn)return s.UNSIGNED_INT;if(r===fn)return s.FLOAT;if(r===gi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===_c)return s.ALPHA;if(r===We)return s.RGBA;if(r===vc)return s.LUMINANCE;if(r===xc)return s.LUMINANCE_ALPHA;if(r===Rn)return s.DEPTH_COMPONENT;if(r===ei)return s.DEPTH_STENCIL;if(r===er)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Mc)return s.RED;if(r===eo)return s.RED_INTEGER;if(r===Sc)return s.RG;if(r===no)return s.RG_INTEGER;if(r===io)return s.RGBA_INTEGER;if(r===fs||r===ps||r===ms||r===gs)if(c===Jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===fs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===fs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ps)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ms)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rr||r===Lr||r===Pr||r===Dr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Rr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===so)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ir||r===Ur)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ir)return c===Jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ur)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Nr||r===Fr||r===Or||r===Br||r===Gr||r===zr||r===kr||r===Hr||r===Vr||r===Wr||r===Xr||r===qr||r===Yr||r===$r)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Nr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Or)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Br)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yr)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$r)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_s||r===jr||r===Kr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===_s)return c===Jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yc||r===Zr||r===Jr||r===Qr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===_s)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Nf extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ff={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Of extends ii{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,u=null;const S=[],x=[],E=new Ht;let L=null;const w=new De;w.layers.enable(1),w.viewport=new Qt;const A=new De;A.layers.enable(2),A.viewport=new Qt;const z=[w,A],M=new Nf;M.layers.enable(1),M.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=S[H];return j===void 0&&(j=new Hs,S[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=S[H];return j===void 0&&(j=new Hs,S[H]=j),j.getGripSpace()},this.getHand=function(H){let j=S[H];return j===void 0&&(j=new Hs,S[H]=j),j.getHandSpace()};function k(H){const j=x.indexOf(H.inputSource);if(j===-1)return;const ct=S[j];ct!==void 0&&(ct.update(H.inputSource,H.frame,l||o),ct.dispatchEvent({type:H.type,data:H.inputSource}))}function Q(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",P);for(let H=0;H<S.length;H++){const j=x[H];j!==null&&(x[H]=null,S[H].disconnect(j))}T=null,B=null,t.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Pn(m.framebufferWidth,m.framebufferHeight,{format:We,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ct=null,gt=null;_.depth&&(gt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?ei:Rn,ct=_.stencil?Cn:dn);const mt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(mt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new Pn(f.textureWidth,f.textureHeight,{format:We,type:gn,depthTexture:new Eo(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Rt=t.properties.get(u);Rt.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(H){for(let j=0;j<H.removed.length;j++){const ct=H.removed[j],gt=x.indexOf(ct);gt>=0&&(x[gt]=null,S[gt].disconnect(ct))}for(let j=0;j<H.added.length;j++){const ct=H.added[j];let gt=x.indexOf(ct);if(gt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=x.length){x.push(ct),gt=Rt;break}else if(x[Rt]===null){x[Rt]=ct,gt=Rt;break}if(gt===-1)break}const mt=S[gt];mt&&mt.connect(ct)}}const I=new R,V=new R;function Y(H,j,ct){I.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(ct.matrixWorld);const gt=I.distanceTo(V),mt=j.projectionMatrix.elements,Rt=ct.projectionMatrix.elements,Pt=mt[14]/(mt[10]-1),Et=mt[14]/(mt[10]+1),Vt=(mt[9]+1)/mt[5],U=(mt[9]-1)/mt[5],Me=(mt[8]-1)/mt[0],vt=(Rt[8]+1)/Rt[0],At=Pt*Me,dt=Pt*vt,te=gt/(-Me+vt),Ut=te*-Me;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ut),H.translateZ(te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const b=Pt+te,v=Et+te,F=At-Ut,J=dt+(gt-Ut),Z=Vt*Et/v*b,tt=U*Et/v*b;H.projectionMatrix.makePerspective(F,J,Z,tt,b,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=A.near=w.near=H.near,M.far=A.far=w.far=H.far,(T!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,B=M.far);const j=H.parent,ct=M.cameras;W(M,j);for(let gt=0;gt<ct.length;gt++)W(ct[gt],j);ct.length===2?Y(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),X(H,M,j)};function X(H,j,ct){ct===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(ct.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=nr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let $=null;function et(H,j){if(h=j.getViewerPose(l||o),g=j,h!==null){const ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let gt=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,gt=!0);for(let mt=0;mt<ct.length;mt++){const Rt=ct[mt];let Pt=null;if(m!==null)Pt=m.getViewport(Rt);else{const Vt=d.getViewSubImage(f,Rt);Pt=Vt.viewport,mt===0&&(t.setRenderTargetTextures(u,Vt.colorTexture,f.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(u))}let Et=z[mt];Et===void 0&&(Et=new De,Et.layers.enable(mt),Et.viewport=new Qt,z[mt]=Et),Et.matrix.fromArray(Rt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Rt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),mt===0&&(M.matrix.copy(Et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),gt===!0&&M.cameras.push(Et)}}for(let ct=0;ct<S.length;ct++){const gt=x[ct],mt=S[ct];gt!==null&&mt!==void 0&&mt.update(gt,j,l||o)}$&&$(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const nt=new So;nt.setAnimationLoop(et),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}}function Bf(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,vo(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,S,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,S,x):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ae&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ae&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const S=t.get(u).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,S,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ae&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const S=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gf(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){const E=x.program;n.uniformBlockBinding(S,E)}function l(S,x){let E=i[S.id];E===void 0&&(g(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",p));const L=x.program;n.updateUBOMapping(S,L);const w=t.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function h(S){const x=d();S.__bindingPointIndex=x;const E=s.createBuffer(),L=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,L,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],E=S.uniforms,L=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,A=E.length;w<A;w++){const z=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,T=z.length;M<T;M++){const B=z[M];if(m(B,w,M,L)===!0){const k=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let P=0;for(let I=0;I<Q.length;I++){const V=Q[I],Y=_(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,k+P,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,x,E,L){const w=S.value,A=x+"_"+E;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{const z=L[A];if(typeof w=="number"||typeof w=="boolean"){if(z!==w)return L[A]=w,!0}else if(z.equals(w)===!1)return z.copy(w),!0}return!1}function g(S){const x=S.uniforms;let E=0;const L=16;for(let A=0,z=x.length;A<z;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,B=M.length;T<B;T++){const k=M[T],Q=Array.isArray(k.value)?k.value:[k.value];for(let P=0,I=Q.length;P<I;P++){const V=Q[P],Y=_(V),W=E%L;W!==0&&L-W<Y.boundary&&(E+=L-W),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Y.storage}}}const w=E%L;return w>0&&(E+=L-w),S.__size=E,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function u(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:u}}class rr{constructor(t={}){const{canvas:e=Uc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const x=this;let E=!1,L=0,w=0,A=null,z=-1,M=null;const T=new Qt,B=new Qt;let k=null;const Q=new yt(0);let P=0,I=e.width,V=e.height,Y=1,W=null,X=null;const $=new Qt(0,0,I,V),et=new Qt(0,0,I,V);let nt=!1;const H=new hr;let j=!1,ct=!1,gt=null;const mt=new oe,Rt=new Ht,Pt=new R,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return A===null?Y:1}let U=n;function Me(y,D){for(let O=0;O<y.length;O++){const G=y[O],N=e.getContext(G,D);if(N!==null)return N}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${or}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",rt,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),U=Me(D,y),U===null)throw Me(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let vt,At,dt,te,Ut,b,v,F,J,Z,tt,ft,ot,ht,St,Nt,K,qt,kt,wt,_t,ut,Dt,Xt;function ne(){vt=new $u(U),At=new Hu(U,vt,t),vt.init(At),ut=new Uf(U,vt,At),dt=new Df(U,vt,At),te=new Zu(U),Ut=new vf,b=new If(U,vt,dt,Ut,At,ut,te),v=new Wu(x),F=new Yu(x),J=new rl(U,At),Dt=new zu(U,vt,J,At),Z=new ju(U,J,te,Dt),tt=new ed(U,Z,J,te),kt=new td(U,At,b),Nt=new Vu(Ut),ft=new _f(x,v,F,vt,At,Dt,Nt),ot=new Bf(x,Ut),ht=new Mf,St=new wf(vt,At),qt=new Gu(x,v,F,dt,tt,f,c),K=new Pf(x,tt,At),Xt=new Gf(U,te,At,dt),wt=new ku(U,vt,te,At),_t=new Ku(U,vt,te,At),te.programs=ft.programs,x.capabilities=At,x.extensions=vt,x.properties=Ut,x.renderLists=ht,x.shadowMap=K,x.state=dt,x.info=te}ne();const Ot=new Of(x,U);this.xr=Ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(I,V,!1))},this.getSize=function(y){return y.set(I,V)},this.setSize=function(y,D,O=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=y,V=D,e.width=Math.floor(y*Y),e.height=Math.floor(D*Y),O===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(I*Y,V*Y).floor()},this.setDrawingBufferSize=function(y,D,O){I=y,V=D,Y=O,e.width=Math.floor(y*O),e.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy($)},this.setViewport=function(y,D,O,G){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,D,O,G),dt.viewport(T.copy($).multiplyScalar(Y).floor())},this.getScissor=function(y){return y.copy(et)},this.setScissor=function(y,D,O,G){y.isVector4?et.set(y.x,y.y,y.z,y.w):et.set(y,D,O,G),dt.scissor(B.copy(et).multiplyScalar(Y).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){dt.setScissorTest(nt=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){X=y},this.getClearColor=function(y){return y.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(y=!0,D=!0,O=!0){let G=0;if(y){let N=!1;if(A!==null){const lt=A.texture.format;N=lt===io||lt===no||lt===eo}if(N){const lt=A.texture.type,pt=lt===gn||lt===dn||lt===cr||lt===Cn||lt===Qa||lt===to,Mt=qt.getClearColor(),bt=qt.getClearAlpha(),Ft=Mt.r,Ct=Mt.g,Lt=Mt.b;pt?(m[0]=Ft,m[1]=Ct,m[2]=Lt,m[3]=bt,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Ft,g[1]=Ct,g[2]=Lt,g[3]=bt,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}D&&(G|=U.DEPTH_BUFFER_BIT),O&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ht.dispose(),St.dispose(),Ut.dispose(),v.dispose(),F.dispose(),tt.dispose(),Dt.dispose(),Xt.dispose(),ft.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Se),Ot.removeEventListener("sessionend",Zt),gt&&(gt.dispose(),gt=null),ye.stop()};function it(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=te.autoReset,D=K.enabled,O=K.autoUpdate,G=K.needsUpdate,N=K.type;ne(),te.autoReset=y,K.enabled=D,K.autoUpdate=O,K.needsUpdate=G,K.type=N}function rt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function at(y){const D=y.target;D.removeEventListener("dispose",at),Tt(D)}function Tt(y){xt(y),Ut.remove(y)}function xt(y){const D=Ut.get(y).programs;D!==void 0&&(D.forEach(function(O){ft.releaseProgram(O)}),y.isShaderMaterial&&ft.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,G,N,lt){D===null&&(D=Et);const pt=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Do(y,D,O,G,N);dt.setMaterial(G,pt);let bt=O.index,Ft=1;if(G.wireframe===!0){if(bt=Z.getWireframeAttribute(O),bt===void 0)return;Ft=2}const Ct=O.drawRange,Lt=O.attributes.position;let re=Ct.start*Ft,Re=(Ct.start+Ct.count)*Ft;lt!==null&&(re=Math.max(re,lt.start*Ft),Re=Math.min(Re,(lt.start+lt.count)*Ft)),bt!==null?(re=Math.max(re,0),Re=Math.min(Re,bt.count)):Lt!=null&&(re=Math.max(re,0),Re=Math.min(Re,Lt.count));const de=Re-re;if(de<0||de===1/0)return;Dt.setup(N,G,Mt,O,bt);let je,ee=wt;if(bt!==null&&(je=J.get(bt),ee=_t,ee.setIndex(je)),N.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*Vt()),ee.setMode(U.LINES)):ee.setMode(U.TRIANGLES);else if(N.isLine){let Bt=G.linewidth;Bt===void 0&&(Bt=1),dt.setLineWidth(Bt*Vt()),N.isLineSegments?ee.setMode(U.LINES):N.isLineLoop?ee.setMode(U.LINE_LOOP):ee.setMode(U.LINE_STRIP)}else N.isPoints?ee.setMode(U.POINTS):N.isSprite&&ee.setMode(U.TRIANGLES);if(N.isBatchedMesh)ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)ee.renderInstances(re,de,N.count);else if(O.isInstancedBufferGeometry){const Bt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,cs=Math.min(O.instanceCount,Bt);ee.renderInstances(re,de,cs)}else ee.render(re,de)};function jt(y,D,O){y.transparent===!0&&y.side===sn&&y.forceSinglePass===!1?(y.side=Ae,y.needsUpdate=!0,Si(y,D,O),y.side=_n,y.needsUpdate=!0,Si(y,D,O),y.side=sn):Si(y,D,O)}this.compile=function(y,D,O=null){O===null&&(O=y),p=St.get(O),p.init(),S.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights);const G=new Set;return y.traverse(function(N){const lt=N.material;if(lt)if(Array.isArray(lt))for(let pt=0;pt<lt.length;pt++){const Mt=lt[pt];jt(Mt,O,N),G.add(Mt)}else jt(lt,O,N),G.add(lt)}),S.pop(),p=null,G},this.compileAsync=function(y,D,O=null){const G=this.compile(y,D,O);return new Promise(N=>{function lt(){if(G.forEach(function(pt){Ut.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){N(y);return}setTimeout(lt,10)}vt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Kt=null;function ue(y){Kt&&Kt(y)}function Se(){ye.stop()}function Zt(){ye.start()}const ye=new So;ye.setAnimationLoop(ue),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(y){Kt=y,Ot.setAnimationLoop(y),y===null?ye.stop():ye.start()},Ot.addEventListener("sessionstart",Se),Ot.addEventListener("sessionend",Zt),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(D),D=Ot.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,D,A),p=St.get(y,S.length),p.init(),S.push(p),mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(mt),ct=this.localClippingEnabled,j=Nt.init(this.clippingPlanes,ct),_=ht.get(y,u.length),_.init(),u.push(_),qe(y,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,j===!0&&Nt.beginShadows();const O=p.state.shadowsArray;if(K.render(O,y,D),j===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(_,y),p.setupLights(x._useLegacyLights),D.isArrayCamera){const G=D.cameras;for(let N=0,lt=G.length;N<lt;N++){const pt=G[N];gr(_,y,pt,pt.viewport)}}else gr(_,y,D);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(x,y,D),Dt.resetDefaultState(),z=-1,M=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function qe(y,D,O,G){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||H.intersectsSprite(y)){G&&Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(mt);const pt=tt.update(y),Mt=y.material;Mt.visible&&_.push(y,pt,Mt,O,Pt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||H.intersectsObject(y))){const pt=tt.update(y),Mt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pt.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(y.matrixWorld).applyMatrix4(mt)),Array.isArray(Mt)){const bt=pt.groups;for(let Ft=0,Ct=bt.length;Ft<Ct;Ft++){const Lt=bt[Ft],re=Mt[Lt.materialIndex];re&&re.visible&&_.push(y,pt,re,O,Pt.z,Lt)}}else Mt.visible&&_.push(y,pt,Mt,O,Pt.z,null)}}const lt=y.children;for(let pt=0,Mt=lt.length;pt<Mt;pt++)qe(lt[pt],D,O,G)}function gr(y,D,O,G){const N=y.opaque,lt=y.transmissive,pt=y.transparent;p.setupLightsView(O),j===!0&&Nt.setGlobalState(x.clippingPlanes,O),lt.length>0&&Po(N,lt,D,O),G&&dt.viewport(T.copy(G)),N.length>0&&Mi(N,D,O),lt.length>0&&Mi(lt,D,O),pt.length>0&&Mi(pt,D,O),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Po(y,D,O,G){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const lt=At.isWebGL2;gt===null&&(gt=new Pn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?gi:gn,minFilter:mi,samples:lt?4:0})),x.getDrawingBufferSize(Rt),lt?gt.setSize(Rt.x,Rt.y):gt.setSize(ir(Rt.x),ir(Rt.y));const pt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(Q),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Mt=x.toneMapping;x.toneMapping=mn,Mi(y,O,G),b.updateMultisampleRenderTarget(gt),b.updateRenderTargetMipmap(gt);let bt=!1;for(let Ft=0,Ct=D.length;Ft<Ct;Ft++){const Lt=D[Ft],re=Lt.object,Re=Lt.geometry,de=Lt.material,je=Lt.group;if(de.side===sn&&re.layers.test(G.layers)){const ee=de.side;de.side=Ae,de.needsUpdate=!0,_r(re,O,G,Re,de,je),de.side=ee,de.needsUpdate=!0,bt=!0}}bt===!0&&(b.updateMultisampleRenderTarget(gt),b.updateRenderTargetMipmap(gt)),x.setRenderTarget(pt),x.setClearColor(Q,P),x.toneMapping=Mt}function Mi(y,D,O){const G=D.isScene===!0?D.overrideMaterial:null;for(let N=0,lt=y.length;N<lt;N++){const pt=y[N],Mt=pt.object,bt=pt.geometry,Ft=G===null?pt.material:G,Ct=pt.group;Mt.layers.test(O.layers)&&_r(Mt,D,O,bt,Ft,Ct)}}function _r(y,D,O,G,N,lt){y.onBeforeRender(x,D,O,G,N,lt),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(x,D,O,G,y,lt),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=Ae,N.needsUpdate=!0,x.renderBufferDirect(O,D,G,N,y,lt),N.side=_n,N.needsUpdate=!0,x.renderBufferDirect(O,D,G,N,y,lt),N.side=sn):x.renderBufferDirect(O,D,G,N,y,lt),y.onAfterRender(x,D,O,G,N,lt)}function Si(y,D,O){D.isScene!==!0&&(D=Et);const G=Ut.get(y),N=p.state.lights,lt=p.state.shadowsArray,pt=N.state.version,Mt=ft.getParameters(y,N.state,lt,D,O),bt=ft.getProgramCacheKey(Mt);let Ft=G.programs;G.environment=y.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(y.isMeshStandardMaterial?F:v).get(y.envMap||G.environment),Ft===void 0&&(y.addEventListener("dispose",at),Ft=new Map,G.programs=Ft);let Ct=Ft.get(bt);if(Ct!==void 0){if(G.currentProgram===Ct&&G.lightsStateVersion===pt)return xr(y,Mt),Ct}else Mt.uniforms=ft.getUniforms(y),y.onBuild(O,Mt,x),y.onBeforeCompile(Mt,x),Ct=ft.acquireProgram(Mt,bt),Ft.set(bt,Ct),G.uniforms=Mt.uniforms;const Lt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=Nt.uniform),xr(y,Mt),G.needsLights=Uo(y),G.lightsStateVersion=pt,G.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ct,G.uniformsList=null,Ct}function vr(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Yi.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function xr(y,D){const O=Ut.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Do(y,D,O,G,N){D.isScene!==!0&&(D=Et),b.resetTextureUnits();const lt=D.fog,pt=G.isMeshStandardMaterial?D.environment:null,Mt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:an,bt=(G.isMeshStandardMaterial?F:v).get(G.envMap||pt),Ft=G.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!O.morphAttributes.position,re=!!O.morphAttributes.normal,Re=!!O.morphAttributes.color;let de=mn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(de=x.toneMapping);const je=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=je!==void 0?je.length:0,Bt=Ut.get(G),cs=p.state.lights;if(j===!0&&(ct===!0||y!==M)){const Ne=y===M&&G.id===z;Nt.setState(G,y,Ne)}let ie=!1;G.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==cs.state.version||Bt.outputColorSpace!==Mt||N.isBatchedMesh&&Bt.batching===!1||!N.isBatchedMesh&&Bt.batching===!0||N.isInstancedMesh&&Bt.instancing===!1||!N.isInstancedMesh&&Bt.instancing===!0||N.isSkinnedMesh&&Bt.skinning===!1||!N.isSkinnedMesh&&Bt.skinning===!0||N.isInstancedMesh&&Bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Bt.instancingColor===!1&&N.instanceColor!==null||Bt.envMap!==bt||G.fog===!0&&Bt.fog!==lt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Nt.numPlanes||Bt.numIntersection!==Nt.numIntersection)||Bt.vertexAlphas!==Ft||Bt.vertexTangents!==Ct||Bt.morphTargets!==Lt||Bt.morphNormals!==re||Bt.morphColors!==Re||Bt.toneMapping!==de||At.isWebGL2===!0&&Bt.morphTargetsCount!==ee)&&(ie=!0):(ie=!0,Bt.__version=G.version);let vn=Bt.currentProgram;ie===!0&&(vn=Si(G,D,N));let Mr=!1,ai=!1,ls=!1;const ge=vn.getUniforms(),xn=Bt.uniforms;if(dt.useProgram(vn.program)&&(Mr=!0,ai=!0,ls=!0),G.id!==z&&(z=G.id,ai=!0),Mr||M!==y){ge.setValue(U,"projectionMatrix",y.projectionMatrix),ge.setValue(U,"viewMatrix",y.matrixWorldInverse);const Ne=ge.map.cameraPosition;Ne!==void 0&&Ne.setValue(U,Pt.setFromMatrixPosition(y.matrixWorld)),At.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,ai=!0,ls=!0)}if(N.isSkinnedMesh){ge.setOptional(U,N,"bindMatrix"),ge.setOptional(U,N,"bindMatrixInverse");const Ne=N.skeleton;Ne&&(At.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),ge.setValue(U,"boneTexture",Ne.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(ge.setOptional(U,N,"batchingTexture"),ge.setValue(U,"batchingTexture",N._matricesTexture,b));const hs=O.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0&&At.isWebGL2===!0)&&kt.update(N,O,vn),(ai||Bt.receiveShadow!==N.receiveShadow)&&(Bt.receiveShadow=N.receiveShadow,ge.setValue(U,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(xn.envMap.value=bt,xn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),ai&&(ge.setValue(U,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&Io(xn,ls),lt&&G.fog===!0&&ot.refreshFogUniforms(xn,lt),ot.refreshMaterialUniforms(xn,G,Y,V,gt),Yi.upload(U,vr(Bt),xn,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Yi.upload(U,vr(Bt),xn,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(U,"center",N.center),ge.setValue(U,"modelViewMatrix",N.modelViewMatrix),ge.setValue(U,"normalMatrix",N.normalMatrix),ge.setValue(U,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ne=G.uniformsGroups;for(let us=0,No=Ne.length;us<No;us++)if(At.isWebGL2){const Sr=Ne[us];Xt.update(Sr,vn),Xt.bind(Sr,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function Io(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Uo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,D,O){Ut.get(y.texture).__webglTexture=D,Ut.get(y.depthTexture).__webglTexture=O;const G=Ut.get(y);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=O===void 0,G.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,D){const O=Ut.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,O=0){A=y,L=D,w=O;let G=!0,N=null,lt=!1,pt=!1;if(y){const bt=Ut.get(y);bt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):bt.__webglFramebuffer===void 0?b.setupRenderTarget(y):bt.__hasExternalTextures&&b.rebindTextures(y,Ut.get(y.texture).__webglTexture,Ut.get(y.depthTexture).__webglTexture);const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);const Ct=Ut.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[D])?N=Ct[D][O]:N=Ct[D],lt=!0):At.isWebGL2&&y.samples>0&&b.useMultisampledRTT(y)===!1?N=Ut.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?N=Ct[O]:N=Ct,T.copy(y.viewport),B.copy(y.scissor),k=y.scissorTest}else T.copy($).multiplyScalar(Y).floor(),B.copy(et).multiplyScalar(Y).floor(),k=nt;if(dt.bindFramebuffer(U.FRAMEBUFFER,N)&&At.drawBuffers&&G&&dt.drawBuffers(y,N),dt.viewport(T),dt.scissor(B),dt.setScissorTest(k),lt){const bt=Ut.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,bt.__webglTexture,O)}else if(pt){const bt=Ut.get(y.texture),Ft=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,O||0,Ft)}z=-1},this.readRenderTargetPixels=function(y,D,O,G,N,lt,pt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ut.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){dt.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const bt=y.texture,Ft=bt.format,Ct=bt.type;if(Ft!==We&&ut.convert(Ft)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Ct===gi&&(vt.has("EXT_color_buffer_half_float")||At.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Ct!==gn&&ut.convert(Ct)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ct===fn&&(At.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-G&&O>=0&&O<=y.height-N&&U.readPixels(D,O,G,N,ut.convert(Ft),ut.convert(Ct),lt)}finally{const bt=A!==null?Ut.get(A).__webglFramebuffer:null;dt.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(y,D,O=0){const G=Math.pow(2,-O),N=Math.floor(D.image.width*G),lt=Math.floor(D.image.height*G);b.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,y.x,y.y,N,lt),dt.unbindTexture()},this.copyTextureToTexture=function(y,D,O,G=0){const N=D.image.width,lt=D.image.height,pt=ut.convert(O.format),Mt=ut.convert(O.type);b.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,y.x,y.y,N,lt,pt,Mt,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,y.x,y.y,D.mipmaps[0].width,D.mipmaps[0].height,pt,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,y.x,y.y,pt,Mt,D.image),G===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(y,D,O,G,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const lt=y.max.x-y.min.x+1,pt=y.max.y-y.min.y+1,Mt=y.max.z-y.min.z+1,bt=ut.convert(G.format),Ft=ut.convert(G.type);let Ct;if(G.isData3DTexture)b.setTexture3D(G,0),Ct=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)b.setTexture2DArray(G,0),Ct=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Lt=U.getParameter(U.UNPACK_ROW_LENGTH),re=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Re=U.getParameter(U.UNPACK_SKIP_PIXELS),de=U.getParameter(U.UNPACK_SKIP_ROWS),je=U.getParameter(U.UNPACK_SKIP_IMAGES),ee=O.isCompressedTexture?O.mipmaps[N]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ee.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,y.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,y.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,y.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(Ct,N,D.x,D.y,D.z,lt,pt,Mt,bt,Ft,ee.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ct,N,D.x,D.y,D.z,lt,pt,Mt,bt,ee.data)):U.texSubImage3D(Ct,N,D.x,D.y,D.z,lt,pt,Mt,bt,Ft,ee),U.pixelStorei(U.UNPACK_ROW_LENGTH,Lt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),U.pixelStorei(U.UNPACK_SKIP_ROWS,de),U.pixelStorei(U.UNPACK_SKIP_IMAGES,je),N===0&&G.generateMipmaps&&U.generateMipmap(Ct),dt.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),dt.unbindTexture()},this.resetState=function(){L=0,w=0,A=null,dt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===lr?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===me?Ln:ro}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ln?me:an}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zf extends rr{}zf.prototype.isWebGL1Renderer=!0;class dr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new dr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kf extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ro extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ha=new oe,ar=new fo,Wi=new is,Xi=new R;class Hf extends pe{constructor(t=new Ce,e=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(i),Wi.radius+=r,t.ray.intersectsSphere(Wi)===!1)return;Ha.copy(i).invert(),ar.copy(t.ray).applyMatrix4(Ha);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=l.getX(g);Xi.fromBufferAttribute(d,p),Va(Xi,p,c,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Xi.fromBufferAttribute(d,g),Va(Xi,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Va(s,t,e,n,i,r,o){const a=ar.distanceSqToPoint(s);if(a<e){const c=new R;ar.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class fr extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,h=new Ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*i;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ae extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let u=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(m,2));function S(){const E=new R,L=new R;let w=0;const A=(e-t)/n;for(let z=0;z<=r;z++){const M=[],T=z/r,B=T*(e-t)+t;for(let k=0;k<=i;k++){const Q=k/i,P=Q*c+a,I=Math.sin(P),V=Math.cos(P);L.x=B*I,L.y=-T*n+p,L.z=B*V,d.push(L.x,L.y,L.z),E.set(I,A,V).normalize(),f.push(E.x,E.y,E.z),m.push(Q,1-T),M.push(g++)}_.push(M)}for(let z=0;z<i;z++)for(let M=0;M<r;M++){const T=_[M][z],B=_[M+1][z],k=_[M+1][z+1],Q=_[M][z+1];h.push(T,B,Q),h.push(B,k,Q),w+=6}l.addGroup(u,w,0),u+=w}function x(E){const L=g,w=new Ht,A=new R;let z=0;const M=E===!0?t:e,T=E===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),g++;const B=g;for(let k=0;k<=i;k++){const P=k/i*c+a,I=Math.cos(P),V=Math.sin(P);A.x=M*V,A.y=p*T,A.z=M*I,d.push(A.x,A.y,A.z),f.push(0,T,0),w.x=I*.5+.5,w.y=V*.5*T+.5,m.push(w.x,w.y),g++}for(let k=0;k<i;k++){const Q=L+k,P=B+k;E===!0?h.push(P,P+1,Q):h.push(P+1,P,Q),z+=3}l.addGroup(u,z,E===!0?1:2),u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $e extends ae{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new $e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pr extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new R,E=new R,L=new R;for(let w=0;w<e.length;w+=3)m(e[w+0],x),m(e[w+1],E),m(e[w+2],L),c(x,E,L,S)}function c(S,x,E,L){const w=L+1,A=[];for(let z=0;z<=w;z++){A[z]=[];const M=S.clone().lerp(E,z/w),T=x.clone().lerp(E,z/w),B=w-z;for(let k=0;k<=B;k++)k===0&&z===w?A[z][k]=M:A[z][k]=M.clone().lerp(T,k/B)}for(let z=0;z<w;z++)for(let M=0;M<2*(w-z)-1;M++){const T=Math.floor(M/2);M%2===0?(f(A[z][T+1]),f(A[z+1][T]),f(A[z][T])):(f(A[z][T+1]),f(A[z+1][T+1]),f(A[z+1][T]))}}function l(S){const x=new R;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(S),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){const S=new R;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const E=p(S)/2/Math.PI+.5,L=u(S)/Math.PI+.5;o.push(E,1-L)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){const x=o[S+0],E=o[S+2],L=o[S+4],w=Math.max(x,E,L),A=Math.min(x,E,L);w>.9&&A<.1&&(x<.2&&(o[S+0]+=1),E<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function m(S,x){const E=S*3;x.x=t[E+0],x.y=t[E+1],x.z=t[E+2]}function g(){const S=new R,x=new R,E=new R,L=new R,w=new Ht,A=new Ht,z=new Ht;for(let M=0,T=0;M<r.length;M+=9,T+=6){S.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),w.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),z.set(o[T+4],o[T+5]),L.copy(S).add(x).add(E).divideScalar(3);const B=p(L);_(w,T+0,S,B),_(A,T+2,x,B),_(z,T+4,E,B)}}function _(S,x,E,L){L<0&&S.x===1&&(o[x]=S.x-1),E.x===0&&E.z===0&&(o[x]=L/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.vertices,t.indices,t.radius,t.details)}}class os extends pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new os(t.radius,t.detail)}}class xe extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,f=new R,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const S=[],x=u/n;let E=0;u===0&&o===0?E=.5/e:u===n&&c===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){const w=L/e;d.x=-t*Math.cos(i+w*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+w*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(w+E,1-x),S.push(l++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<e;S++){const x=h[u][S+1],E=h[u][S],L=h[u+1][S],w=h[u+1][S+1];(u!==0||o>0)&&m.push(x,E,w),(u!==n-1||c<Math.PI)&&m.push(E,L,w)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pi extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new R,d=new R,f=new R;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,u=(i+1)*(m-1)+g,S=(i+1)*m+g;o.push(_,p,S),o.push(p,u,S)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $t extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mr extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Vf extends mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vs=new oe,Wa=new R,Xa=new R;class Lo{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wa),Xa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xa),e.updateMatrixWorld(),Vs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qa=new oe,di=new R,Ws=new R;class Wf extends Lo{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),di.setFromMatrixPosition(t.matrixWorld),n.position.copy(di),Ws.copy(n.position),Ws.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ws),n.updateMatrixWorld(),i.makeTranslation(-di.x,-di.y,-di.z),qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa)}}class Xf extends mr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qf extends Lo{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yf extends mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new qf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:or}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=or);class $f{constructor(t,e){this.canvas=t,this.sound=e,this.canvas||(this.canvas=document.getElementById("game-canvas"));try{this.renderer=new rr({canvas:this.canvas,antialias:!0,powerPreference:"default"})}catch(n){console.warn("Falling back to basic WebGL renderer:",n),this.renderer=new rr({canvas:this.canvas,antialias:!1,powerPreference:"low-power"})}this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=Ka,this.renderer.toneMappingExposure=1.1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$a,this.scene=new kf,this.fog=new dr(1715750,.012),this.scene.fog=this.fog,this.camera=new De(60,window.innerWidth/window.innerHeight,.1,400),this.hemiLight=new Vf(8843180,1332013,.6),this.scene.add(this.hemiLight),this.sunLight=new Yf(16707722,1.8),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=120,this.sunLight.shadow.camera.left=-40,this.sunLight.shadow.camera.right=40,this.sunLight.shadow.camera.top=40,this.sunLight.shadow.camera.bottom=-40,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.isRaining=!1,this.rainParticles=null,this.rainCount=2e3,this.setupRain(),this.dayTime=.35,this.dayDurationSeconds=360,this.setupResize()}setupResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}setupRain(){const t=new Ce,e=new Float32Array(this.rainCount*3);for(let i=0;i<this.rainCount*3;i+=3)e[i]=(Math.random()-.5)*60,e[i+1]=Math.random()*30,e[i+2]=(Math.random()-.5)*60;t.setAttribute("position",new Xe(e,3));const n=new Ro({color:9684477,size:.15,transparent:!0,opacity:.65});this.rainParticles=new Hf(t,n),this.rainParticles.visible=!1,this.scene.add(this.rainParticles)}updateAtmosphere(t,e){this.dayTime=(this.dayTime+t/this.dayDurationSeconds)%1;const n=this.dayTime*Math.PI*2,i=65,r=Math.cos(n)*i,o=Math.sin(n)*i;this.sunLight.position.set(e.x+r,e.y+o,e.z+20),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld();const c=Math.sin(n);if(c>.2?(this.scene.background=new yt(3718648),this.fog.color.set(8246268),this.sunLight.color.set(16707722),this.sunLight.intensity=1.8,this.hemiLight.color.set(8843180),this.hemiLight.groundColor.set(1332013),this.hemiLight.intensity=.7):c>-.1?(this.scene.background=new yt(16347926),this.fog.color.set(16486972),this.sunLight.color.set(16007006),this.sunLight.intensity=1.2,this.hemiLight.color.set(16498468),this.hemiLight.intensity=.5):(this.scene.background=new yt(329485),this.fog.color.set(659485),this.sunLight.color.set(6333946),this.sunLight.intensity=.4,this.hemiLight.color.set(1976635),this.hemiLight.groundColor.set(132631),this.hemiLight.intensity=.25),Math.random()<3e-4&&this.toggleRain(!this.isRaining),this.isRaining&&this.rainParticles){this.rainParticles.position.x=e.x,this.rainParticles.position.z=e.z;const l=this.rainParticles.geometry.attributes.position;for(let h=1;h<l.count*3;h+=3)l.array[h]-=28*t,l.array[h]<0&&(l.array[h]=30);l.needsUpdate=!0,Math.random()<.001&&this.triggerLightning()}}toggleRain(t){this.isRaining=t,this.rainParticles&&(this.rainParticles.visible=t),t?this.fog.density=.022:this.fog.density=.012}triggerLightning(){const t=this.renderer.toneMappingExposure;this.renderer.toneMappingExposure=3.5,setTimeout(()=>{this.renderer.toneMappingExposure=t,this.sound&&this.sound.playThunder()},100)}updateCamera(t,e){const n=e.zoom,i=e.yaw,r=e.pitch,o=t.x-Math.sin(i)*Math.cos(r)*n,a=t.y+Math.sin(r)*n+1.6,c=t.z-Math.cos(i)*Math.cos(r)*n;this.camera.position.lerp(new R(o,a,c),.15);const l=new R(t.x,t.y+1.4,t.z);this.camera.lookAt(l)}getClockFormatted(){const t=Math.floor(this.dayTime*24*60),e=Math.floor(t/60),n=t%60,i=e.toString().padStart(2,"0"),r=n.toString().padStart(2,"0");return`${e>=6&&e<18?"☀️":"🌙"} ${i}:${r}`}render(){this.renderer.render(this.scene,this.camera)}}class jf{constructor(){this.ctx=null,this.muted=!1,this.masterGain=null,this.ambientGain=null,this.sfxGain=null,this.musicGain=null,this.ambientOscillators=[],this.isInitialized=!1}init(){if(!this.isInitialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(.25,this.ctx.currentTime),this.ambientGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(.6,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.musicGain.connect(this.masterGain),this.startAmbientDrone(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}toggleMute(){return this.muted=!this.muted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.muted?0:.7,this.ctx.currentTime),this.muted}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startAmbientDrone(){if(!this.ctx)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(55,this.ctx.currentTime),e.gain.setValueAtTime(.12,this.ctx.currentTime),t.connect(e),e.connect(this.ambientGain),t.start(),this.ambientOscillators.push(t);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(110,this.ctx.currentTime),i.gain.setValueAtTime(.06,this.ctx.currentTime),n.connect(i),i.connect(this.ambientGain),n.start(),this.ambientOscillators.push(n),setInterval(()=>{if(this.ctx&&!this.muted){const r=this.ctx.currentTime,o=108+Math.random()*8;n.frequency.linearRampToValueAtTime(o,r+4)}},4e3)}playFootstep(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(80+Math.random()*30,t),e.frequency.exponentialRampToValueAtTime(30,t+.08),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.09)}playAttackSwing(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(450,t),e.frequency.exponentialRampToValueAtTime(120,t+.18),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.19)}playHitImpact(t=!1){if(!this.ctx||this.muted)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();if(n.type="square",n.frequency.setValueAtTime(t?180:120,e),n.frequency.exponentialRampToValueAtTime(40,e+.14),i.gain.setValueAtTime(t?.35:.22,e),i.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.16),t){const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(880,e),r.frequency.exponentialRampToValueAtTime(440,e+.2),o.gain.setValueAtTime(.25,e),o.gain.exponentialRampToValueAtTime(.001,e+.2),r.connect(o),o.connect(this.sfxGain),r.start(e),r.stop(e+.22)}}playHarvest(t="wood"){if(!this.ctx||this.muted)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();t==="wood"?(n.type="triangle",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(70,e+.12),i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.001,e+.12)):t==="stone"?(n.type="square",n.frequency.setValueAtTime(650,e),n.frequency.exponentialRampToValueAtTime(180,e+.15),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.15)):(n.type="sine",n.frequency.setValueAtTime(400,e),n.frequency.exponentialRampToValueAtTime(250,e+.1),i.gain.setValueAtTime(.18,e),i.gain.exponentialRampToValueAtTime(.001,e+.1)),n.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.16)}playCraftSuccess(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime;[523.25,659.25,783.99].forEach((n,i)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,t+i*.09),o.gain.setValueAtTime(.16,t+i*.09),o.gain.exponentialRampToValueAtTime(.001,t+i*.09+.35),r.connect(o),o.connect(this.sfxGain),r.start(t+i*.09),r.stop(t+i*.09+.36)})}playBuildPlace(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(50,t+.18),n.gain.setValueAtTime(.24,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.2)}playDodgeRoll(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(260,t),e.frequency.exponentialRampToValueAtTime(90,t+.25),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.26)}playThunder(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(60,t),e.frequency.exponentialRampToValueAtTime(25,t+1.8),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.001,t+2),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+2.1)}playQuestFanfare(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime;[392,523.25,659.25,1046.5].forEach((n,i)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,t+i*.12),o.gain.setValueAtTime(.2,t+i*.12),o.gain.exponentialRampToValueAtTime(.001,t+i*.12+.45),r.connect(o),o.connect(this.sfxGain),r.start(t+i*.12),r.stop(t+i*.12+.46)})}playUIClick(){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,t),e.frequency.exponentialRampToValueAtTime(400,t+.04),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.05)}}class Kf{constructor(t){this.canvas=t,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.isCrouched=!1,this.isJumping=!1,this.isAttacking=!1,this.isInteracting=!1,this.yaw=0,this.pitch=.25,this.zoom=5.5,this.isMouseDown=!1,this.lastMouseX=0,this.lastMouseY=0,this.touchJoyId=null,this.touchJoyOrigin={x:0,y:0},this.touchJoyVector={x:0,y:0},this.touchLookId=null,this.lastTouchLookX=0,this.lastTouchLookY=0,this.onKeyDownCallbacks=[],this.setupListeners()}setupListeners(){window.addEventListener("keydown",t=>{if(!(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))switch(t.code){case"KeyW":case"ArrowUp":this.moveForward=!0;break;case"KeyS":case"ArrowDown":this.moveBackward=!0;break;case"KeyA":case"ArrowLeft":this.moveLeft=!0;break;case"KeyD":case"ArrowRight":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!0;break;case"Space":this.isJumping=!0;break;case"KeyC":this.isCrouched=!this.isCrouched,this.emit("toggleCrouch",this.isCrouched);break;case"KeyE":this.isInteracting=!0,this.emit("interact");break;case"KeyF":this.isAttacking=!0,this.emit("attack");break;default:this.emit("keyDown",t.code);break}}),window.addEventListener("keyup",t=>{switch(t.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break;case"Space":this.isJumping=!1;break;case"KeyE":this.isInteracting=!1;break;case"KeyF":this.isAttacking=!1;break}}),this.canvas.addEventListener("mousedown",t=>{t.button===0?(this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY,this.isAttacking=!0,this.emit("attack")):t.button===2&&(this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("mouseup",()=>{this.isMouseDown=!1,this.isAttacking=!1}),window.addEventListener("mousemove",t=>{if(this.isMouseDown){const e=t.clientX-this.lastMouseX,n=t.clientY-this.lastMouseY;this.yaw-=e*.006,this.pitch=Math.max(.05,Math.min(1.2,this.pitch+n*.005)),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY}}),window.addEventListener("wheel",t=>{this.zoom=Math.max(3,Math.min(12,this.zoom+t.deltaY*.005))},{passive:!0}),this.setupMobileTouch()}setupMobileTouch(){const t=document.getElementById("joy-move-base"),e=document.getElementById("joy-move-thumb"),n=document.getElementById("joy-move-zone");if(!n)return;n.addEventListener("touchstart",o=>{o.preventDefault();const a=o.changedTouches[0];this.touchJoyId=a.identifier;const c=t.getBoundingClientRect();this.touchJoyOrigin={x:c.left+c.width/2,y:c.top+c.height/2},this.updateJoystick(a.clientX,a.clientY,e)},{passive:!1}),window.addEventListener("touchmove",o=>{for(let a=0;a<o.changedTouches.length;a++){const c=o.changedTouches[a];if(c.identifier===this.touchJoyId)o.preventDefault(),this.updateJoystick(c.clientX,c.clientY,e);else if(c.identifier===this.touchLookId){const l=c.clientX-this.lastTouchLookX,h=c.clientY-this.lastTouchLookY;this.yaw-=l*.008,this.pitch=Math.max(.05,Math.min(1.2,this.pitch+h*.006)),this.lastTouchLookX=c.clientX,this.lastTouchLookY=c.clientY}}},{passive:!1});const i=o=>{for(let a=0;a<o.changedTouches.length;a++){const c=o.changedTouches[a];c.identifier===this.touchJoyId&&(this.touchJoyId=null,this.touchJoyVector={x:0,y:0},e&&(e.style.transform="translate(0px, 0px)")),c.identifier===this.touchLookId&&(this.touchLookId=null)}};window.addEventListener("touchend",i),window.addEventListener("touchcancel",i),this.canvas.addEventListener("touchstart",o=>{for(let a=0;a<o.changedTouches.length;a++){const c=o.changedTouches[a];c.clientX>window.innerWidth*.35&&this.touchLookId===null&&(this.touchLookId=c.identifier,this.lastTouchLookX=c.clientX,this.lastTouchLookY=c.clientY)}},{passive:!0});const r=(o,a,c)=>{const l=document.getElementById(o);l&&(l.addEventListener("touchstart",h=>{h.preventDefault(),a&&a()},{passive:!1}),c&&l.addEventListener("touchend",h=>{h.preventDefault(),c()},{passive:!1}))};r("m-btn-attack",()=>{this.isAttacking=!0,this.emit("attack")},()=>{this.isAttacking=!1}),r("m-btn-interact",()=>{this.isInteracting=!0,this.emit("interact")},()=>{this.isInteracting=!1}),r("m-btn-dodge",()=>{this.isJumping=!0,this.emit("dodge")},()=>{this.isJumping=!1}),r("m-btn-crouch",()=>{this.isCrouched=!this.isCrouched,this.emit("toggleCrouch",this.isCrouched)}),r("m-btn-inv",()=>{this.emit("toggleInventory")})}updateJoystick(t,e,n){let r=t-this.touchJoyOrigin.x,o=e-this.touchJoyOrigin.y;const a=Math.sqrt(r*r+o*o);a>45&&(r=r/a*45,o=o/a*45),n&&(n.style.transform=`translate(${r}px, ${o}px)`),this.touchJoyVector.x=r/45,this.touchJoyVector.y=-o/45}getMovementVector(){let t=0,e=0;this.moveForward&&(t+=1),this.moveBackward&&(t-=1),this.moveRight&&(e+=1),this.moveLeft&&(e-=1),this.touchJoyId!==null&&(t+=this.touchJoyVector.y,e+=this.touchJoyVector.x);const n=Math.sqrt(t*t+e*e);return n>1&&(t/=n,e/=n),{forward:t,right:e}}on(t,e){this.onKeyDownCallbacks[t]||(this.onKeyDownCallbacks[t]=[]),this.onKeyDownCallbacks[t].push(e)}emit(t,e){this.onKeyDownCallbacks[t]&&this.onKeyDownCallbacks[t].forEach(n=>n(e))}}class Zf{constructor(t){this.scene=t,this.worldSize=300,this.segments=120,this.nodes=[],this.staticDecor=[],this.materials={ground:new $t({color:2242596,roughness:.9,metalness:.05,flatShading:!0}),water:new $t({color:1981066,roughness:.1,metalness:.8,transparent:!0,opacity:.85}),ruinConcrete:new $t({color:4674921,roughness:.85,metalness:.15}),rustMetal:new $t({color:8138002,roughness:.75,metalness:.6}),woodTrunk:new $t({color:4140577,roughness:.9}),leaves:new $t({color:1409085,roughness:.6}),boulder:new $t({color:6583435,roughness:.8,metalness:.2}),ironVein:new $t({color:9741240,roughness:.3,metalness:.9}),hazardRed:new Ie({color:15680580})},this.buildTerrain(),this.buildWater(),this.populateForestNodes(),this.populateRuinNodes(),this.buildBunkerOmega()}getHeight(t,e){const n=Math.sqrt((t-45)**2+(e-45)**2);let i=Math.sin(t*.04)*2.5+Math.cos(e*.04)*2.5;if(i+=Math.sin(t*.1)*1+Math.cos(e*.1)*1,t<-30&&e<-30){const r=Math.sqrt((t+70)**2+(e+70)**2);i+=Math.max(0,16-r*.3)}return n<35&&(i-=(35-n)*.3),i}buildTerrain(){const t=new rs(this.worldSize,this.worldSize,this.segments,this.segments);t.rotateX(-Math.PI/2);const e=t.attributes.position;for(let i=0;i<e.count;i++){const r=e.getX(i),o=e.getZ(i),a=this.getHeight(r,o);e.setY(i,a)}e.needsUpdate=!0,t.computeVertexNormals();const n=new q(t,this.materials.ground);n.receiveShadow=!0,this.scene.add(n),this.terrainMesh=n}buildWater(){const t=new fr(32,24);t.rotateX(-Math.PI/2);const e=new q(t,this.materials.water);e.position.set(45,-.6,45),this.scene.add(e)}populateForestNodes(){for(let t=0;t<65;t++){const e=Math.random()*Math.PI*2,n=10+Math.random()*110,i=Math.cos(e)*n,r=Math.sin(e)*n;if(Math.hypot(i-45,r-45)<30||i<-50&&r<-50)continue;const o=this.getHeight(i,r);this.createTree(i,o,r)}for(let t=0;t<45;t++){const e=(Math.random()-.5)*220,n=(Math.random()-.5)*220;if(Math.hypot(e-45,n-45)<28)continue;const i=this.getHeight(e,n);this.createBoulder(e,i,n,Math.random()>.65?"iron":"stone")}for(let t=0;t<35;t++){const e=(Math.random()-.5)*200,n=(Math.random()-.5)*200;if(Math.hypot(e-45,n-45)<26)continue;const i=this.getHeight(e,n);this.createBush(e,i,n,Math.random()>.5?"herb":"berry")}}createTree(t,e,n){const i=new Wt,r=4+Math.random()*2.5,o=new ae(.35,.5,r,7),a=new q(o,this.materials.woodTrunk);a.position.y=r/2,a.castShadow=!0,i.add(a);for(let c=0;c<3;c++){const l=new $e(2.4-c*.45,2.2,7),h=new q(l,this.materials.leaves);h.position.y=r*.6+c*1.3,h.castShadow=!0,i.add(h)}i.position.set(t,e,n),this.scene.add(i),this.nodes.push({type:"wood",name:"Carvalho Antigo",mesh:i,position:new R(t,e,n),hp:3,maxHp:3,gives:{item:"wood",count:4,name:"Madeira"},isHarvested:!1})}createBoulder(t,e,n,i="stone"){const r=new Wt,o=1+Math.random()*.7,a=new os(o,1),c=i==="iron"?this.materials.ironVein:this.materials.boulder,l=new q(a,c);if(l.scale.set(1.1,.8,1.2),l.position.y=o*.6,l.castShadow=!0,r.add(l),i==="iron"){const h=new zt(.3,.3,.3),d=new q(h,this.materials.hazardRed);d.position.set(.3,o*.8,.2),r.add(d)}r.position.set(t,e,n),this.scene.add(r),this.nodes.push({type:i,name:i==="iron"?"Filão de Ferro Puro":"Pedregulho de Granito",mesh:r,position:new R(t,e,n),hp:4,maxHp:4,gives:{item:i==="iron"?"iron_ore":"stone",count:i==="iron"?2:4,name:i==="iron"?"Minério de Ferro":"Pedra"},isHarvested:!1})}createBush(t,e,n,i="berry"){const r=new Wt,o=new xe(.9,7,7);o.scale(1.2,.8,1.1);const a=new q(o,this.materials.leaves);a.position.y=.6,r.add(a);const c=new Ie({color:i==="berry"?16007006:3718648});for(let l=0;l<6;l++){const h=new q(new xe(.12,5,5),c);h.position.set((Math.random()-.5)*1.2,.6+Math.random()*.5,(Math.random()-.5)*1.2),r.add(h)}r.position.set(t,e,n),this.scene.add(r),this.nodes.push({type:i,name:i==="berry"?"Arbusto de Frutas Silvestres":"Erva Medicinal dos Ermos",mesh:r,position:new R(t,e,n),hp:1,maxHp:1,gives:{item:i==="berry"?"berry":"herb",count:3,name:i==="berry"?"Frutas Silvestres":"Erva Medicinal"},isHarvested:!1})}populateRuinNodes(){for(let t=0;t<7;t++){const e=-30+t*10,n=40+t%3*8,i=this.getHeight(e,n),r=new zt(2.5,6,2.5),o=new q(r,this.materials.ruinConcrete);o.position.set(e,i+2.5,n),o.rotation.z=(Math.random()-.5)*.3,o.castShadow=!0,this.scene.add(o);const a=new Wt,c=new q(new zt(3.6,1.2,1.8),this.materials.rustMetal);c.position.y=.6,a.add(c);const l=new q(new zt(2,.9,1.6),this.materials.ruinConcrete);l.position.set(-.2,1.4,0),a.add(l),a.position.set(e+4,i,n+2),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,this.scene.add(a),this.nodes.push({type:"scrap",name:"Carcaça de Veículo Militar",mesh:a,position:new R(e+4,i,n+2),hp:3,maxHp:3,gives:{item:"scrap",count:3,name:"Sucata & Peças Eletrônicas"},isHarvested:!1})}}buildBunkerOmega(){const n=this.getHeight(-68,-68),i=new Wt,r=new zt(10,8,4),o=new q(r,this.materials.ruinConcrete);o.position.set(0,4,0),i.add(o);const a=new zt(6,6,.5),c=new q(a,this.materials.rustMetal);c.position.set(0,3.5,1.8),i.add(c);const l=new ae(.3,.3,.6,8),h=new q(l,this.materials.hazardRed);h.position.set(0,7.5,2),i.add(h),i.position.set(-68,n,-68),i.rotation.y=Math.PI*.25,this.scene.add(i),this.bunkerPosition=new R(-68,n,-68)}harvestNode(t,e=1){if(t.isHarvested)return null;t.hp-=e;const n=t.mesh.position.y;if(t.mesh.position.y+=.2,setTimeout(()=>{t.mesh.position.y=n},100),t.hp<=0){t.isHarvested=!0;let i=1;const r=setInterval(()=>{i-=.15,i<=.05?(clearInterval(r),this.scene.remove(t.mesh)):t.mesh.scale.set(i,i,i)},30);return t.gives}return null}}class Jf{constructor(t,e){this.scene=t,this.sound=e,this.placedStructures=[],this.activeGhostMesh=null,this.selectedBuildingType="campfire",this.rotationAngle=0,this.isBuildModeActive=!1,this.woodMat=new $t({color:8736014,roughness:.85}),this.stoneMat=new $t({color:4674921,roughness:.9,metalness:.1}),this.fireMat=new Ie({color:16347926}),this.ghostValidMat=new Ie({color:2278750,wireframe:!0,transparent:!0,opacity:.6}),this.ghostInvalidMat=new Ie({color:15680580,wireframe:!0,transparent:!0,opacity:.6}),this.blueprints={campfire:{id:"campfire",name:"Fogueira Acolhedora",desc:"Aquece a sobrevivente, ilumina a noite e assa carnes.",cost:{wood:5,stone:3},icon:"🔥"},foundation:{id:"foundation",name:"Fundação de Madeira",desc:"Base nivelada para erguer paredes e abrigos.",cost:{wood:8},icon:"🪵"},wall:{id:"wall",name:"Parede de Troncos Reforçada",desc:"Bloqueia o vento frio e ataques de feras.",cost:{wood:6},icon:"🧱"},door:{id:"door",name:"Portal com Tranca Tática",desc:"Entrada segura para seu abrigo.",cost:{wood:7,iron_ore:1},icon:"🚪"},chest:{id:"chest",name:"Baú de Suprimentos",desc:"Armazena com segurança recursos e armas valiosas.",cost:{wood:10,scrap:2},icon:"📦"},workbench:{id:"workbench",name:"Bancada de Armas Avançada",desc:"Desbloqueia receitas bélicas de nível superior.",cost:{wood:12,iron_ore:3,scrap:4},icon:"🔨"},spikes:{id:"spikes",name:"Estacas Defensivas",desc:"Armadilha pontiaguda que perfura invasores.",cost:{wood:6},icon:"⚔️"}}}createStructureMesh(t){const e=new Wt;if(t==="campfire"){const n=new Wt;for(let h=0;h<8;h++){const d=h/8*Math.PI*2,f=new q(new os(.2,0),this.stoneMat);f.position.set(Math.cos(d)*.7,.1,Math.sin(d)*.7),n.add(f)}e.add(n);const i=new ae(.08,.08,1,6),r=new q(i,this.woodMat);r.rotation.set(.4,.4,.8),r.position.y=.2,e.add(r);const o=new q(i,this.woodMat);o.rotation.set(-.4,-.4,.8),o.position.y=.2,e.add(o);const a=new $e(.35,.7,6),c=new q(a,this.fireMat);c.position.y=.45,e.add(c);const l=new Xf(16347926,2,16);l.position.y=.8,l.castShadow=!0,e.add(l),e.userData.light=l}else if(t==="foundation"){const n=new zt(4,.4,4),i=new q(n,this.woodMat);i.position.y=.2,i.castShadow=!0,i.receiveShadow=!0,e.add(i)}else if(t==="wall"){const n=new zt(4,3.2,.35),i=new q(n,this.woodMat);i.position.y=1.6,i.castShadow=!0,i.receiveShadow=!0,e.add(i)}else if(t==="door"){const n=new q(new zt(1.2,3.2,.35),this.woodMat);n.position.set(-1.4,1.6,0),e.add(n);const i=new q(new zt(1.2,3.2,.35),this.woodMat);i.position.set(1.4,1.6,0),e.add(i);const r=new q(new zt(4,.8,.35),this.woodMat);r.position.set(0,2.8,0),e.add(r);const o=new q(new zt(1.5,2.3,.15),this.stoneMat);o.position.set(0,1.2,0),e.add(o)}else if(t==="chest"){const n=new zt(1.2,.8,.8),i=new q(n,this.woodMat);i.position.y=.4,e.add(i);const r=new zt(1.22,.1,.82),o=new q(r,this.stoneMat);o.position.y=.4,e.add(o)}else if(t==="workbench"){const n=new zt(2,.9,1.2),i=new q(n,this.woodMat);i.position.y=.45,e.add(i);const r=new zt(.5,.3,.3),o=new q(r,this.stoneMat);o.position.set(-.5,1.05,0),e.add(o)}else if(t==="spikes")for(let n=-1;n<=1;n++){const i=new q(new $e(.18,1.2,5),this.woodMat);i.rotation.x=.4,i.position.set(n*.8,.5,0),e.add(i)}return e}setBuildMode(t,e="campfire"){this.isBuildModeActive=t,this.selectedBuildingType=e,this.activeGhostMesh&&(this.scene.remove(this.activeGhostMesh),this.activeGhostMesh=null),t&&(this.activeGhostMesh=this.createStructureMesh(e),this.activeGhostMesh.traverse(n=>{n.isMesh&&(n.material=this.ghostValidMat)}),this.scene.add(this.activeGhostMesh))}updateGhost(t,e=!0){if(!this.activeGhostMesh)return;this.activeGhostMesh.position.copy(t),this.activeGhostMesh.rotation.y=this.rotationAngle;const n=e?this.ghostValidMat:this.ghostInvalidMat;this.activeGhostMesh.traverse(i=>{i.isMesh&&(i.material=n)})}rotateBuilding(){this.rotationAngle+=Math.PI/4}placeStructure(t,e){const n=this.blueprints[this.selectedBuildingType];if(!n)return!1;for(const[r,o]of Object.entries(n.cost))if((e[r]||0)<o)return{success:!1,reason:`Requer ${o} de ${r}!`};for(const[r,o]of Object.entries(n.cost))e[r]-=o;const i=this.createStructureMesh(this.selectedBuildingType);return i.position.copy(t),i.rotation.y=this.rotationAngle,this.scene.add(i),this.placedStructures.push({type:this.selectedBuildingType,mesh:i,position:t.clone(),hp:100}),this.sound&&this.sound.playBuildPlace(),{success:!0,name:n.name}}update(t){this.placedStructures.forEach(e=>{e.type==="campfire"&&e.mesh.userData.light&&(e.mesh.userData.light.intensity=1.8+Math.sin(t*12)*.4+Math.cos(t*7)*.3)})}}class $i{constructor(t={}){this.config=Object.assign({skinColor:"#d49b7a",hairStyle:"ponytail",hairColor:"#2b1b17",makeup:"guerreira",lipstick:"#9e2a2b",outfitStyle:"leather",outfitColor:"#1e293b",bootsStyle:"combat",accessory:"holster",weaponType:"machete",scale:1},t),this.root=new Wt,this.materials={},this.bones={},this.weaponMesh=null,this.animState="idle",this.animTimer=0,this.attackPhase=0,this.attackProgress=0,this.buildMaterials(),this.buildCharacterMesh(),this.updateOutfit()}buildMaterials(){this.materials.skin=new $t({color:new yt(this.config.skinColor),roughness:.65,metalness:.05}),this.materials.hair=new $t({color:new yt(this.config.hairColor),roughness:.5,metalness:.1}),this.materials.outfit=new $t({color:new yt(this.config.outfitColor),roughness:.6,metalness:.15}),this.materials.armor=new $t({color:new yt("#334155"),roughness:.35,metalness:.75}),this.materials.leather=new $t({color:new yt("#3d2b1f"),roughness:.7,metalness:.1}),this.materials.boots=new $t({color:new yt("#1a1a1a"),roughness:.5,metalness:.3}),this.materials.eyes=new $t({color:new yt("#10b981"),roughness:.2,metalness:.1}),this.materials.warpaint=new Ie({color:new yt("#ef4444")}),this.materials.lipstick=new $t({color:new yt(this.config.lipstick),roughness:.4}),this.materials.gold=new $t({color:new yt("#fbbf24"),roughness:.3,metalness:.85})}buildCharacterMesh(){for(;this.root.children.length>0;)this.root.remove(this.root.children[0]);const t=this.config.scale,e=new Wt;e.position.y=1*t,this.root.add(e),this.bones.pelvis=e;const n=new ae(.24*t,.22*t,.22*t,10),i=new q(n,this.materials.outfit);e.add(i);const r=new Wt;r.position.y=.15*t,e.add(r),this.bones.spine=r;const o=new ae(.2*t,.23*t,.22*t,10),a=new q(o,this.materials.outfit);a.position.y=.11*t,r.add(a);const c=new Wt;c.position.y=.28*t,r.add(c),this.bones.chest=c;const l=new ae(.23*t,.2*t,.24*t,10),h=new q(l,this.materials.outfit);h.position.y=.1*t,c.add(h);const d=new xe(.13*t,8,8),f=new q(d,this.materials.outfit);f.position.set(-.09*t,.12*t,.12*t),f.scale.set(.9,.9,.7),c.add(f);const m=new q(d,this.materials.outfit);m.position.set(.09*t,.12*t,.12*t),m.scale.set(.9,.9,.7),c.add(m);const g=new Wt;g.position.y=.28*t,c.add(g);const _=new ae(.08*t,.09*t,.14*t,8),p=new q(_,this.materials.skin);p.position.y=.07*t,g.add(p);const u=new Wt;u.position.y=.18*t,g.add(u),this.bones.head=u;const S=new xe(.18*t,16,14);S.scale(.85,1.05,.95);const x=new q(S,this.materials.skin);u.add(x);const E=new $e(.03*t,.07*t,5);E.rotateX(Math.PI/2);const L=new q(E,this.materials.skin);L.position.set(0,.01*t,.18*t),u.add(L);const w=new xe(.032*t,8,8),A=new q(w,this.materials.eyes);A.position.set(-.065*t,.05*t,.15*t),u.add(A);const z=new q(w,this.materials.eyes);z.position.set(.065*t,.05*t,.15*t),u.add(z);const M=new Ie({color:1118481}),T=new zt(.055*t,.012*t,.02*t),B=new q(T,M);B.position.set(-.065*t,.09*t,.155*t),B.rotation.z=-.15,u.add(B);const k=new q(T,M);k.position.set(.065*t,.09*t,.155*t),k.rotation.z=.15,u.add(k);const Q=new zt(.055*t,.016*t,.025*t),P=new q(Q,this.materials.lipstick);P.position.set(0,-.07*t,.17*t),u.add(P),this.buildMakeup(u,t),this.buildHair(u,t),this.buildArm(c,!0,t),this.buildArm(c,!1,t),this.buildLeg(e,!0,t),this.buildLeg(e,!1,t),this.buildAccessories(t),this.buildWeapon(t),this.root.traverse(I=>{I.isMesh&&(I.castShadow=!0,I.receiveShadow=!0)})}buildMakeup(t,e){if(this.config.makeup==="guerreira"){const n=new zt(.05*e,.015*e,.01*e),i=new q(n,this.materials.warpaint);i.position.set(-.09*e,.02*e,.145*e),i.rotation.y=-.5,i.rotation.z=.2,t.add(i);const r=new q(n,this.materials.warpaint);r.position.set(.09*e,.02*e,.145*e),r.rotation.y=.5,r.rotation.z=-.2,t.add(r)}else if(this.config.makeup==="rainha"){const n=new xe(.02*e,6,6),i=new q(n,this.materials.gold);i.position.set(0,.13*e,.16*e),t.add(i)}else if(this.config.makeup==="sombra"){const n=new Ie({color:1973790}),i=new zt(.07*e,.012*e,.01*e),r=new q(i,n);r.position.set(-.07*e,.015*e,.155*e),t.add(r);const o=new q(i,n);o.position.set(.07*e,.015*e,.155*e),t.add(o)}}buildHair(t,e){const n=new Wt;t.add(n),this.hairGroup=n;const i=new xe(.19*e,14,12);i.scale(.92,1.05,.98);const r=new q(i,this.materials.hair);if(r.position.set(0,.03*e,-.02*e),n.add(r),this.config.hairStyle==="ponytail"){const o=new pi(.04*e,.015*e,6,12),a=new q(o,this.materials.gold);a.position.set(0,.16*e,-.16*e),n.add(a);const c=new ae(.04*e,.08*e,.45*e,8);c.rotateX(-.5);const l=new q(c,this.materials.hair);l.position.set(0,.05*e,-.32*e),n.add(l),this.ponytailMesh=l}else if(this.config.hairStyle==="braid")for(let o=0;o<6;o++){const a=new xe((.05-o*.005)*e,8,8);a.scale(1,1.4,.9);const c=new q(a,this.materials.hair);c.position.set(.08*e,(.05-o*.09)*e,(-.12+o*.02)*e),n.add(c)}else if(this.config.hairStyle==="undercut"){const o=new zt(.14*e,.16*e,.28*e),a=new q(o,this.materials.hair);a.position.set(-.06*e,.18*e,-.02*e),a.rotation.z=-.25,n.add(a)}else if(this.config.hairStyle==="afro"){const o=new xe(.26*e,12,12),a=new q(o,this.materials.hair);a.position.set(0,.06*e,-.04*e),n.add(a)}else if(this.config.hairStyle==="bob"){const o=new $e(.24*e,.32*e,10);o.rotateX(Math.PI);const a=new q(o,this.materials.hair);a.position.set(0,.02*e,-.04*e),n.add(a)}else{const o=new ae(.12*e,.22*e,.55*e,8),a=new q(o,this.materials.hair);a.position.set(0,-.1*e,-.12*e),n.add(a)}}buildArm(t,e,n){const i=e?-1:1,r=new Wt;r.position.set(i*.26*n,.22*n,0),t.add(r),e?this.bones.leftShoulder=r:this.bones.rightShoulder=r;const o=new ae(.06*n,.055*n,.28*n,8),a=new q(o,this.materials.skin);a.position.y=-.14*n,r.add(a);const c=new xe(.09*n,8,8);c.scale(1,.8,1);const l=new q(c,this.materials.armor);l.position.y=.02*n,r.add(l);const h=new Wt;h.position.y=-.28*n,r.add(h),e?this.bones.leftElbow=h:this.bones.rightElbow=h;const d=new ae(.055*n,.05*n,.26*n,8),f=new q(d,this.materials.leather);f.position.y=-.13*n,h.add(f);const m=new Wt;m.position.y=-.26*n,h.add(m),e?this.bones.leftHand=m:this.bones.rightHand=m;const g=new zt(.06*n,.09*n,.05*n),_=new q(g,this.materials.skin);_.position.y=-.04*n,m.add(_)}buildLeg(t,e,n){const i=e?-1:1,r=new Wt;r.position.set(i*.13*n,-.05*n,0),t.add(r),e?this.bones.leftHip=r:this.bones.rightHip=r;const o=new ae(.09*n,.075*n,.45*n,8),a=new q(o,this.materials.outfit);a.position.y=-.22*n,r.add(a);const c=new Wt;c.position.y=-.45*n,r.add(c),e?this.bones.leftKnee=c:this.bones.rightKnee=c;const l=new ae(.075*n,.065*n,.42*n,8),h=new q(l,this.materials.outfit);h.position.y=-.21*n,c.add(h);const d=new zt(.08*n,.1*n,.04*n),f=new q(d,this.materials.armor);f.position.set(0,0,.07*n),c.add(f);const m=new Wt;m.position.y=-.42*n,c.add(m);const g=new zt(.09*n,.14*n,.22*n),_=new q(g,this.materials.boots);_.position.set(0,-.03*n,.04*n),m.add(_)}buildAccessories(t){if(this.config.accessory==="holster"){if(this.bones.rightHip){const e=new zt(.08*t,.18*t,.07*t),n=new q(e,this.materials.leather);n.position.set(.12*t,-.22*t,.02*t),n.rotation.z=-.1,this.bones.rightHip.add(n)}}else if(this.config.accessory==="scarf"){if(this.bones.chest){const e=new $t({color:12456508,roughness:.8}),n=new pi(.14*t,.06*t,8,12),i=new q(n,e);i.position.set(0,.28*t,.02*t),i.rotation.x=Math.PI/2,this.bones.chest.add(i)}}else if(this.config.accessory==="goggles"&&this.bones.head){const e=new $t({color:988970,roughness:.3,metalness:.8}),n=new zt(.16*t,.05*t,.06*t),i=new q(n,e);i.position.set(0,.11*t,.14*t),this.bones.head.add(i)}}buildWeapon(t){if(this.bones.rightHand){if(this.weaponMesh&&(this.bones.rightHand.remove(this.weaponMesh),this.weaponMesh=null),this.config.weaponType==="machete"){const e=new Wt,n=new ae(.02*t,.02*t,.16*t,8),i=new q(n,this.materials.leather);i.position.y=-.05*t,e.add(i);const r=new zt(.08*t,.02*t,.04*t),o=new q(r,this.materials.gold);o.position.y=.04*t,e.add(o);const a=new $t({color:14870768,metalness:.95,roughness:.2}),c=new zt(.045*t,.65*t,.012*t),l=new q(c,a);l.position.set(0,.36*t,0),e.add(l);const h=new $e(.025*t,.1*t,4),d=new q(h,a);d.position.set(0,.73*t,0),e.add(d),e.rotation.x=Math.PI/2,e.position.set(0,-.05*t,.04*t),this.bones.rightHand.add(e),this.weaponMesh=e}else if(this.config.weaponType==="bow"){const e=new Wt,n=new $t({color:4674921,metalness:.5}),i=new pi(.45*t,.02*t,6,16,Math.PI*.7),r=new q(i,n);r.rotation.z=Math.PI*.65,e.add(r);const o=new Ie({color:16777215}),a=new ae(.003*t,.003*t,.7*t),c=new q(a,o);c.position.x=-.15*t,e.add(c),e.position.set(0,-.05*t,0),this.bones.rightHand.add(e),this.weaponMesh=e}}}updateOutfit(){this.materials.skin.color.set(this.config.skinColor),this.materials.hair.color.set(this.config.hairColor),this.materials.outfit.color.set(this.config.outfitColor),this.materials.lipstick.color.set(this.config.lipstick)}updateAnimation(t,e="idle",n=0){this.animTimer+=t;const i=this.animTimer,{pelvis:r,spine:o,chest:a,head:c,leftShoulder:l,rightShoulder:h,leftElbow:d,rightElbow:f,leftHip:m,rightHip:g,leftKnee:_,rightKnee:p}=this.bones;if(r){if(this.animState==="attack"){this.attackProgress+=t*6;const u=this.attackProgress;if(u<1){const S=Math.sin(u*Math.PI);h.rotation.x=-1.2+S*2.2,h.rotation.y=-.5+S*1,h.rotation.z=.4,o.rotation.y=S*.5,c.rotation.y=-S*.2}else this.animState=e,this.attackProgress=0;return}if(this.animState==="dodge"){this.attackProgress+=t*4,this.attackProgress<1?(r.position.y=.5+Math.sin(this.attackProgress*Math.PI)*.3,this.root.rotation.x=this.attackProgress*Math.PI*2):(this.animState=e,this.attackProgress=0,this.root.rotation.x=0,r.position.y=1);return}if(this.root.rotation.x=0,e==="run"||e==="walk"&&n>2){const u=n>4?12:8,S=n>4?.75:.45,x=n>4?.65:.35,E=Math.sin(i*u);r.position.y=1+Math.abs(Math.sin(i*u))*.06,o.rotation.x=.15,m.rotation.x=E*S,g.rotation.x=-E*S,_.rotation.x=Math.max(0,-E*S*1.2),p.rotation.x=Math.max(0,E*S*1.2),l.rotation.x=-E*x,h.rotation.x=E*x,d.rotation.x=-.4,f.rotation.x=-.4,this.ponytailMesh&&(this.ponytailMesh.rotation.x=-.5+Math.abs(E)*.25)}else if(e==="crouch")r.position.y=.65,o.rotation.x=.4,m.rotation.x=-.6,g.rotation.x=-.6,_.rotation.x=1.1,p.rotation.x=1.1,l.rotation.x=.3,h.rotation.x=.3,d.rotation.x=-.7,f.rotation.x=-.7;else{const u=Math.sin(i*2.2);r.position.y=1+u*.015,a.scale.set(1+u*.02,1,1+u*.02),o.rotation.x=.02+u*.01,c.rotation.y=Math.sin(i*.8)*.06,l.rotation.x=.1+u*.02,h.rotation.x=.1+u*.02,l.rotation.z=-.1,h.rotation.z=.1,d.rotation.x=-.2,f.rotation.x=-.3,m.rotation.x=.04,g.rotation.x=-.04,_.rotation.x=.04,p.rotation.x=.04}}}triggerAttack(){this.animState="attack",this.attackProgress=0}triggerDodge(){this.animState="dodge",this.attackProgress=0}}class Qf{constructor(t,e,n={}){this.scene=t,this.sound=e,this.vitals={health:100,maxHealth:100,stamina:100,maxStamina:100,hunger:90,maxHunger:100,thirst:95,maxThirst:100,temperature:24,isCold:!1,isStarving:!1,isDehydrated:!1},this.level=1,this.xp=0,this.xpToLevel=100,this.kills=0,this.harvestedCount=0,this.daysSurvived=1,this.position=new R(0,0,0),this.velocity=new R(0,0,0),this.moveSpeed=4.2,this.sprintMultiplier=1.7,this.rotationY=0,this.isCrouched=!1,this.isDodgeRolling=!1,this.dodgeCooldown=0,this.baseDamage=20,this.weaponDamage=15,this.defense=10,this.isInvulnerable=!1,this.attackCooldown=0,this.model=new $i(n),this.scene.add(this.model.root)}update(t,e,n,i,r){if(this.vitals.health<=0)return;this.attackCooldown=Math.max(0,this.attackCooldown-t),this.dodgeCooldown=Math.max(0,this.dodgeCooldown-t);const o=e.isSprinting&&(e.moveForward||e.moveBackward||e.moveLeft||e.moveRight)&&this.vitals.stamina>5;o?this.vitals.stamina=Math.max(0,this.vitals.stamina-t*18):this.isDodgeRolling||(this.vitals.stamina=Math.min(this.vitals.maxStamina,this.vitals.stamina+t*22));const a=o?1.8:1;this.vitals.hunger=Math.max(0,this.vitals.hunger-t*.18*a),this.vitals.thirst=Math.max(0,this.vitals.thirst-t*.28*a),this.vitals.hunger<=0&&this.takeDamage(t*1.5,"Fome Extrema"),this.vitals.thirst<=0&&this.takeDamage(t*2.5,"Desidratação Severa"),this.vitals.hunger>60&&this.vitals.thirst>60&&this.vitals.health<this.vitals.maxHealth&&(this.vitals.health=Math.min(this.vitals.maxHealth,this.vitals.health+t*1));let c=!1;if(i&&i.placedStructures){for(const g of i.placedStructures)if(g.type==="campfire"&&g.position.distanceTo(this.position)<6){c=!0;break}}this.vitals.temperature=c?28:22;const l=e.getMovementVector(),h=Math.hypot(l.forward,l.right)>.05;let d=this.moveSpeed;if(this.isCrouched?d*=.55:o&&(d*=this.sprintMultiplier),h){const g=e.yaw,_=Math.atan2(l.right,l.forward)+g,p=Math.sin(_)*d,u=Math.cos(_)*d;this.position.x+=p*t,this.position.z+=u*t;let x=_-this.rotationY;for(;x<-Math.PI;)x+=Math.PI*2;for(;x>Math.PI;)x-=Math.PI*2;this.rotationY+=x*12*t,Math.random()<t*(o?3.5:2.2)&&this.sound&&this.sound.playFootstep()}const f=n.getHeight(this.position.x,this.position.z);this.position.y=f,this.model.root.position.copy(this.position),this.model.root.rotation.y=this.rotationY;let m="idle";this.isDodgeRolling?m="dodge":this.isCrouched?m="crouch":h&&(m=o?"run":"walk"),this.model.updateAnimation(t,m,h?o?5.5:3:0),this.vitals.health<=0&&r&&r()}triggerAttack(){return this.attackCooldown>0||this.vitals.stamina<8?!1:(this.attackCooldown=.45,this.vitals.stamina=Math.max(0,this.vitals.stamina-8),this.model.triggerAttack(),this.sound&&this.sound.playAttackSwing(),!0)}triggerDodge(){if(this.dodgeCooldown>0||this.vitals.stamina<20)return!1;this.dodgeCooldown=.8,this.isDodgeRolling=!0,this.isInvulnerable=!0,this.vitals.stamina-=20;const t=4.5;return this.position.x+=Math.sin(this.rotationY)*t*.4,this.position.z+=Math.cos(this.rotationY)*t*.4,this.model.triggerDodge(),this.sound&&this.sound.playDodgeRoll(),setTimeout(()=>{this.isDodgeRolling=!1,this.isInvulnerable=!1},450),!0}toggleCrouch(t){this.isCrouched=t}takeDamage(t,e="Inimigo"){if(this.isInvulnerable)return;const n=Math.max(1,t*(100/(100+this.defense)));return this.vitals.health=Math.max(0,this.vitals.health-n),this.sound&&this.sound.playHitImpact(),Math.round(n)}heal(t){this.vitals.health=Math.min(this.vitals.maxHealth,this.vitals.health+t)}eat(t){this.vitals.hunger=Math.min(this.vitals.maxHunger,this.vitals.hunger+t)}drink(t){this.vitals.thirst=Math.min(this.vitals.maxThirst,this.vitals.thirst+t)}gainXp(t,e){for(this.xp+=t;this.xp>=this.xpToLevel;)this.xp-=this.xpToLevel,this.level+=1,this.xpToLevel=Math.round(this.xpToLevel*1.5),this.vitals.maxHealth+=15,this.vitals.health=this.vitals.maxHealth,this.baseDamage+=4,e&&e(this.level)}getAttackHitbox(){return{center:new R(this.position.x+Math.sin(this.rotationY)*2.6,this.position.y+.8,this.position.z+Math.cos(this.rotationY)*2.6),radius:2}}}class tp{constructor(t,e){this.scene=t,this.sound=e,this.enemies=[],this.materials={mutantSkin:new $t({color:4016442,roughness:.8}),sporePustule:new Ie({color:8702998}),wolfFur:new $t({color:3359061,roughness:.9}),raiderGear:new $t({color:4674921,roughness:.7,metalness:.3}),bossRoot:new $t({color:2042167,roughness:.85}),bossSporeCore:new Ie({color:11032055})},this.spawnAllEnemies()}spawnAllEnemies(){[{x:-15,z:25},{x:-28,z:35},{x:10,z:50},{x:-35,z:60},{x:-50,z:30}].forEach(i=>this.createSporeMutant(i.x,i.z)),[{x:25,z:30},{x:55,z:25},{x:35,z:65}].forEach(i=>this.createTimberWolf(i.x,i.z)),[{x:-20,z:45},{x:-10,z:62},{x:-40,z:48}].forEach(i=>this.createRaider(i.x,i.z)),this.createBossMatriarch(-55,-55)}createSporeMutant(t,e){const n=new Wt,i=new zt(.7,.9,.5),r=new q(i,this.materials.mutantSkin);r.position.y=1,r.rotation.x=.25,n.add(r);const o=new xe(.18,6,6),a=new q(o,this.materials.sporePustule);a.position.set(.3,1.4,.1),n.add(a);const c=new q(o,this.materials.sporePustule);c.position.set(-.25,1.2,.2),n.add(c);const l=new xe(.24,8,8),h=new q(l,this.materials.mutantSkin);h.position.set(0,1.6,.2),n.add(h);const d=new zt(.18,.8,.18),f=new q(d,this.materials.mutantSkin);f.position.set(-.5,.9,.1),n.add(f);const m=new q(d,this.materials.mutantSkin);m.position.set(.5,.9,.1),n.add(m);const g=new zt(.22,.75,.22),_=new q(g,this.materials.mutantSkin);_.position.set(-.22,.4,0),n.add(_);const p=new q(g,this.materials.mutantSkin);p.position.set(.22,.4,0),n.add(p),n.position.set(t,0,e),this.scene.add(n),this.enemies.push({id:`mutant_${Math.random().toString(36).substr(2,6)}`,name:"Mutante dos Esporos",type:"mutant",mesh:n,spawnPos:new R(t,0,e),pos:n.position,hp:45,maxHp:45,damage:12,speed:3.4,aggroDist:14,attackDist:2,attackCooldown:1.5,lastAttackTime:0,state:"patrol",patrolTimer:Math.random()*5,patrolTarget:new R(t,0,e),limbs:{armL:f,armR:m,legL:_,legR:p,head:h},drops:{item:"spore_essence",count:1,name:"Essência Fúngica"}})}createTimberWolf(t,e){const n=new Wt,i=new zt(.5,.5,1.3),r=new q(i,this.materials.wolfFur);r.position.y=.65,n.add(r);const o=new $e(.24,.55,5);o.rotateX(Math.PI/2);const a=new q(o,this.materials.wolfFur);a.position.set(0,.85,.8),n.add(a);const c=new ae(.06,.05,.55,6),l=new q(c,this.materials.wolfFur);l.position.set(-.2,.28,.45),n.add(l);const h=new q(c,this.materials.wolfFur);h.position.set(.2,.28,.45),n.add(h);const d=new q(c,this.materials.wolfFur);d.position.set(-.2,.28,-.45),n.add(d);const f=new q(c,this.materials.wolfFur);f.position.set(.2,.28,-.45),n.add(f),n.position.set(t,0,e),this.scene.add(n),this.enemies.push({id:`wolf_${Math.random().toString(36).substr(2,6)}`,name:"Lobo Cinzento dos Ermos",type:"wolf",mesh:n,spawnPos:new R(t,0,e),pos:n.position,hp:35,maxHp:35,damage:15,speed:4.8,aggroDist:18,attackDist:2.2,attackCooldown:1.2,lastAttackTime:0,state:"patrol",patrolTimer:Math.random()*4,patrolTarget:new R(t,0,e),limbs:{fl:l,fr:h,bl:d,br:f},drops:{item:"meat",count:2,name:"Carne Crua de Caça"}})}createRaider(t,e){const n=new Wt,i=new q(new zt(.65,.9,.4),this.materials.raiderGear);i.position.y=1,n.add(i);const r=new q(new xe(.22,8,8),this.materials.raiderGear);r.position.y=1.6,n.add(r);const o=new q(new ae(.08,.04,.9,6),this.materials.raiderGear);o.position.set(.45,1.1,.3),o.rotation.x=.5,n.add(o),n.position.set(t,0,e),this.scene.add(n),this.enemies.push({id:`raider_${Math.random().toString(36).substr(2,6)}`,name:"Saqueador Renegado",type:"raider",mesh:n,spawnPos:new R(t,0,e),pos:n.position,hp:60,maxHp:60,damage:18,speed:3.6,aggroDist:15,attackDist:2.4,attackCooldown:1.6,lastAttackTime:0,state:"patrol",patrolTimer:Math.random()*5,patrolTarget:new R(t,0,e),drops:{item:"scrap",count:3,name:"Sucata & Munição"}})}createBossMatriarch(t,e){const n=new Wt,i=new ae(1.2,1.8,3.5,8),r=new q(i,this.materials.bossRoot);r.position.y=1.75,r.castShadow=!0,n.add(r);const o=new xe(.8,10,10),a=new q(o,this.materials.bossSporeCore);a.position.set(0,2.8,.3),n.add(a);const c=new Wt;for(let l=0;l<6;l++){const h=l/6*Math.PI*2,d=new q(new $e(.25,1.8,5),this.materials.bossRoot);d.position.set(Math.cos(h)*1,3.8,Math.sin(h)*1),d.rotation.z=Math.cos(h)*.4,c.add(d)}n.add(c),n.position.set(t,0,e),this.scene.add(n),this.boss={id:"boss_matriarch",name:"A Matriarca dos Esporos (CHEFE DOS ERMOS)",type:"boss",mesh:n,spawnPos:new R(t,0,e),pos:n.position,hp:350,maxHp:350,damage:32,speed:2.6,aggroDist:26,attackDist:3.8,attackCooldown:2.2,lastAttackTime:0,state:"idle",coreMesh:a,drops:{item:"omega_keycard",count:1,name:"Cartão de Acesso Ômega"}},this.enemies.push(this.boss)}update(t,e,n,i){const r=performance.now()*.001;for(let o=this.enemies.length-1;o>=0;o--){const a=this.enemies[o];if(a.isDead)continue;const c=a.pos.distanceTo(e),l=n?a.aggroDist*.45:a.aggroDist;if(a.type==="boss"&&a.coreMesh){const h=1+Math.sin(r*4)*.15;a.coreMesh.scale.set(h,h,h)}if(c<l){a.state="chase";const h=new R().subVectors(e,a.pos).normalize();h.y=0,a.mesh.rotation.y=Math.atan2(h.x,h.z),c>a.attackDist?a.pos.addScaledVector(h,a.speed*t):r-a.lastAttackTime>=a.attackCooldown&&(a.lastAttackTime=r,i&&i(a.damage,a.name),this.sound&&this.sound.playHitImpact())}else{if(a.state="patrol",a.patrolTimer-=t,a.patrolTimer<=0){a.patrolTimer=3+Math.random()*4;const d=Math.random()*Math.PI*2,f=Math.random()*8;a.patrolTarget.set(a.spawnPos.x+Math.cos(d)*f,0,a.spawnPos.z+Math.sin(d)*f)}if(a.pos.distanceTo(a.patrolTarget)>.8){const d=new R().subVectors(a.patrolTarget,a.pos).normalize();d.y=0,a.mesh.rotation.y=Math.atan2(d.x,d.z),a.pos.addScaledVector(d,a.speed*.45*t)}}}}damageEnemy(t,e,n=!1){const i=this.enemies.find(r=>r.id===t);if(!i||i.isDead)return null;if(i.hp-=e,i.mesh.traverse(r=>{if(r.isMesh&&r.material){const o=r.material.color?r.material.color.clone():null;o&&(r.material.color.set(16711680),setTimeout(()=>{r.material.color.copy(o)},120))}}),i.hp<=0){i.isDead=!0,i.hp=0;let r=0;const o=setInterval(()=>{r+=.2,i.mesh.rotation.z=r,r>=Math.PI/2&&(clearInterval(o),setTimeout(()=>{this.scene.remove(i.mesh)},2500))},30);return{killed:!0,enemy:i,drops:i.drops}}return{killed:!1,enemy:i}}}class ep{constructor(t,e){this.scene=t,this.sound=e,this.npcs=[],this.activeFollower=null,this.initQueens()}initQueens(){const t=new $i({skinColor:"#e0ac69",hairStyle:"undercut",hairColor:"#f59e0b",makeup:"guerreira",lipstick:"#9e2a2b",outfitStyle:"valkyrie",outfitColor:"#0f172a",accessory:"goggles",weaponType:"machete",scale:1.05});t.root.position.set(-25,.5,12),this.scene.add(t.root);const e={id:"elena",name:'Elena "Valkyrie"',title:"Líder da Resistência Tática",role:"Engenheira Militar & Mestra em Fortificações",avatar:"🛡️",model:t,pos:t.root.position,affinity:35,isFollower:!1,dialogues:{intro:{text:'"Sobreviveu à névoa de esporos da noite passada? Você tem sangue frio, garota. Nosso mundo ruiu, mas nós não. Está pronta para lutar ao meu lado ou prefere arriscar a sorte sozinha?"',options:[{text:"Estou pronta para lutar. O que você precisa?",next:"quest_offer",repGain:15},{text:"Como você sobreviveu tanto tempo aqui fora?",next:"lore_elena",repGain:10},{text:"Preciso de você na minha equipe. Venha comigo!",next:"recruit_check",repGain:5},{text:"Apenas explorando por enquanto. Até logo.",next:"exit",repGain:0}]},quest_offer:{text:'"Os Saqueadores estão roubando peças eletrônicas da rodovia. Se você me trouxer 5 Sucatas Metálicas, vou calibrar sua bancada para forjar lâminas de titânio puro."',options:[{text:"Considere feito. Já estou a caminho.",next:"accept_quest",repGain:10},{text:"Preciso me equipar melhor primeiro.",next:"exit",repGain:0}]},lore_elena:{text:'"Eu liderava a guarda militar de Nova Éden quando as plantas romperam o concreto. Vi os homens em pânico abandonarem tudo. Nós, mulheres, nos unimos e criamos as Wild Queens. Não nos curvamos a monstros nem a tiranos."',options:[{text:"Sua coragem me inspira, Elena. Vamos reinar juntas.",next:"intro",repGain:15}]},recruit_check:{text:a=>a>=40?'"Sua determinação me convenceu, irmã de armas. Minha lâmina é sua. Vamos caçar juntas!"':'"Você ainda precisa provar seu valor nos ermos. Ganhe mais experiência e me ajude primeiro."',options:[{text:"Perfeito! Vamos em frente.",next:"toggle_follow",repGain:10}]}}};this.npcs.push(e);const n=new $i({skinColor:"#8d5524",hairStyle:"braid",hairColor:"#171717",makeup:"sombra",lipstick:"#581c87",outfitStyle:"huntress",outfitColor:"#14532d",accessory:"scarf",weaponType:"bow",scale:.98});n.root.position.set(22,1.2,-18),this.scene.add(n.root);const i={id:"maya",name:'Maya "Sombra"',title:"Guardiã da Floresta Ancestral",role:"Rastreadora Mística & Arqueira Silenciosa",avatar:"🏹",model:n,pos:n.root.position,affinity:40,isFollower:!1,dialogues:{intro:{text:'"Seus passos na relva são como trovões para as feras, viajante. Mas vejo fogo nos seus olhos. A floresta está agitada... a Matriarca dos Esporos espalha sementes venenosas."',options:[{text:"Ensine-me a caminhar sem ser ouvida como você.",next:"stealth_training",repGain:15},{text:"O que você sabe sobre a Matriarca no cume?",next:"boss_hint",repGain:10},{text:"Venha comigo, precisamos unir forças.",next:"recruit_maya",repGain:5},{text:"Vou seguir meu caminho em silêncio.",next:"exit",repGain:0}]},stealth_training:{text:'"Agache-se entre as samambaias altas. Respire no ritmo da brisa. Quando o inimigo virar as costas, sua flecha deve encontrar o coração antes que ele perceba sua sombra."',options:[{text:"Obrigada pelo ensinamento, Maya.",next:"intro",repGain:10}]},boss_hint:{text:'"A Matriarca alimenta-se das raízes radioativas do Bunker Ômega. Suas cascas são imunes a ataques fracos, mas seu núcleo bioluminescente é vulnerável a cortes rápidos e fogo!"',options:[{text:"Vou queimar esse monstro e libertar a montanha.",next:"intro",repGain:15}]},recruit_maya:{text:a=>a>=45?'"A floresta aprova nossa aliança. Meu arco cobrirá suas costas de onde a luz não alcança."':'"Ainda sinto o cheiro do medo em você. Respire a terra e volte quando estiver em harmonia."',options:[{text:"Vamos caçar juntas.",next:"toggle_follow",repGain:10}]}}};this.npcs.push(i);const r=new $i({skinColor:"#f5d0b5",hairStyle:"bob",hairColor:"#451a03",makeup:"rainha",lipstick:"#b91c1c",outfitStyle:"cyber",outfitColor:"#1e3a8a",accessory:"none",weaponType:"none",scale:1});r.root.position.set(-50,4.2,-45),this.scene.add(r.root);const o={id:"vanessa",name:"Dra. Vanessa Rios",title:"Cientista-Chefe do Projeto Gênesis",role:"Bioquímica & Reveladora da Verdade",avatar:"🧬",model:r,pos:r.root.position,affinity:50,isFollower:!1,dialogues:{intro:{text:'"Graças aos céus, você conseguiu chegar até aqui! Pensei que era a última mulher viva com a mente lúcida. O mundo não foi destruído por bombas... foram esporos botânicos geneticamente modificados que saíram do controle no laboratório."',options:[{text:"Existe uma cura para o Colapso Verde?",next:"cure_info",repGain:20},{text:"Como abrimos a porta blindada do Bunker Ômega?",next:"bunker_key",repGain:15},{text:"Você causou essa destruição?",next:"blame_dialogue",repGain:-5},{text:"Vou me preparar e retorno logo.",next:"exit",repGain:0}]},cure_info:{text:'"Sim! Eu sintetizei a fórmula do Antídoto Gênesis, mas preciso do Cartão de Acesso Ômega e do Núcleo Puro da Matriarca para iniciar os biorreatores subterrâneos. Derrote a criatura e salvaremos este planeta!"',options:[{text:"Conte comigo, Dra. Vanessa. A salvação começa agora.",next:"intro",repGain:20}]},bunker_key:{text:'"A Matriarca dos Esporos engoliu o oficial de segurança que portava o Cartão Ômega. Para abrir as portas blindadas, ela deve tombar primeiro."',options:[{text:"Ela não verá o amanhecer.",next:"intro",repGain:15}]},blame_dialogue:{text:'"Eu tentei avisar a corporação! Quando os executivos fugiram em seus jatos, fui eu quem ficou para trás tentando salvar as pessoas. Não me julgue sem conhecer minha dor."',options:[{text:"Peço desculpas. Vamos focar em consertar isso juntas.",next:"intro",repGain:10}]}}};this.npcs.push(o)}getNearestNPC(t,e=3.5){for(const n of this.npcs)if(n.pos.distanceTo(t)<=e)return n;return null}update(t,e,n){for(const i of this.npcs)if(i.isFollower){if(i.pos.distanceTo(e)>3){const o=new R().subVectors(e,i.pos).normalize();o.y=0,i.model.root.rotation.y=Math.atan2(o.x,o.z),i.pos.addScaledVector(o,4*t),i.model.updateAnimation(t,"run",5)}else i.model.updateAnimation(t,"idle");n&&n.length>0&&n.find(a=>!a.isDead&&a.pos.distanceTo(i.pos)<4)&&(i.model.triggerAttack(),this.sound&&this.sound.playAttackSwing())}else i.model.updateAnimation(t,"idle")}toggleFollower(t){const e=this.npcs.find(n=>n.id===t);return e?e.isFollower?(e.isFollower=!1,this.activeFollower=null,{following:!1,name:e.name}):(this.npcs.forEach(n=>n.isFollower=!1),e.isFollower=!0,this.activeFollower=e,{following:!0,name:e.name}):!1}}const nn={wood:{id:"wood",name:"Madeira Firme",desc:"Tronco resistente colhido das árvores antigas. Essencial para abrigos e ferramentas.",category:"materials",icon:"🪵",maxStack:99},stone:{id:"stone",name:"Pedra de Granito",desc:"Mineral denso usado para afiar lâminas e construir fogueiras.",category:"materials",icon:"🪨",maxStack:99},iron_ore:{id:"iron_ore",name:"Minério de Ferro",desc:"Metal bruto para forjar lâminas pesadas e armaduras reforçadas.",category:"materials",icon:"⚙️",maxStack:99},scrap:{id:"scrap",name:"Sucata & Circuitos",desc:"Componentes recolhidos de carcaças da antiga civilização.",category:"materials",icon:"🔩",maxStack:99},herb:{id:"herb",name:"Erva Medicinal",desc:"Planta nativa com propriedades regenerativas e antitóxicas.",category:"materials",icon:"🌿",maxStack:99},berry:{id:"berry",name:"Frutas Silvestres",desc:"Bagas frescas e doces. Restaura um pouco de fome e sede.",category:"consumables",icon:"🍓",maxStack:50,effect:{hunger:15,thirst:10,hp:5}},meat:{id:"meat",name:"Carne Crua de Caça",desc:"Carne fresca obtida de animais. Deve ser cozida em fogueira para evitar doenças.",category:"materials",icon:"🥩",maxStack:30},cooked_meat:{id:"cooked_meat",name:"Bife Assado na Fogueira",desc:"Refeição suculenta e nutritiva. Restaura muita fome e vida.",category:"consumables",icon:"🍖",maxStack:30,effect:{hunger:45,hp:20}},water_flask:{id:"water_flask",name:"Cantil de Água Purificada",desc:"Água límpida filtrada. Sacie a sede imediatamente.",category:"consumables",icon:"🍶",maxStack:10,effect:{thirst:50}},bandage:{id:"bandage",name:"Atadura de Ervas",desc:"Faixa estéril com infusão de ervas que estanca sangramentos.",category:"consumables",icon:"🩹",maxStack:20,effect:{hp:35}},medkit:{id:"medkit",name:"Kit Médico Militar",desc:"Soro e analgésicos avançados pré-colapso. Cura quase toda a vida.",category:"consumables",icon:"💉",maxStack:5,effect:{hp:80}},stone_axe:{id:"stone_axe",name:"Machado de Pedra",desc:"Corta árvores duas vezes mais rápido.",category:"equipment",icon:"🪓",maxStack:1,stats:{atk:15}},titanium_machete:{id:"titanium_machete",name:"Machete Tática de Titânio",desc:"Lâmina afiada mortal com equilíbrio impecável.",category:"equipment",icon:"🗡️",maxStack:1,stats:{atk:35}},hunting_bow:{id:"hunting_bow",name:"Arco Composto das Rainhas",desc:"Dispara flechas silenciosas a longa distância.",category:"equipment",icon:"🏹",maxStack:1,stats:{atk:30}},arrows:{id:"arrows",name:"Flechas Emplumadas (x5)",desc:"Projéteis afiados para arco.",category:"materials",icon:"🎯",maxStack:99},tactical_vest:{id:"tactical_vest",name:"Colete Blindado Valkyrie",desc:"Proteção balística leve com placas de cerâmica.",category:"equipment",icon:"🦺",maxStack:1,stats:{def:25}},spore_essence:{id:"spore_essence",name:"Essência Fúngica Pura",desc:"Extraída de mutantes. Usada para sintetizar antídotos com a Dra. Vanessa.",category:"materials",icon:"🧪",maxStack:30},omega_keycard:{id:"omega_keycard",name:"Cartão de Acesso Ômega",desc:"Cartão criptografado da Matriarca. Abre o laboratório subterrâneo!",category:"equipment",icon:"💳",maxStack:1}};class np{constructor(t){this.sound=t,this.items={},this.hotbar=["titanium_machete","berry","bandage","water_flask",null,null],this.selectedHotbarIndex=0,this.equipped={weapon:"titanium_machete",armor:"tactical_vest",boots:"combat",accessory:"holster"},this.addItem("wood",12),this.addItem("stone",6),this.addItem("berry",8),this.addItem("water_flask",2),this.addItem("bandage",3),this.addItem("titanium_machete",1)}addItem(t,e=1){return nn[t]?(this.items[t]=(this.items[t]||0)+e,!0):!1}removeItem(t,e=1){return!this.items[t]||this.items[t]<e?!1:(this.items[t]-=e,this.items[t]<=0&&delete this.items[t],!0)}getCount(t){return this.items[t]||0}has(t,e=1){return this.getCount(t)>=e}useItem(t,e){var i;const n=nn[t];return!n||!this.has(t,1)?!1:n.category==="consumables"&&n.effect?(n.effect.hp&&e.heal(n.effect.hp),n.effect.hunger&&e.eat(n.effect.hunger),n.effect.thirst&&e.drink(n.effect.thirst),this.removeItem(t,1),this.sound&&this.sound.playUIClick(),{success:!0,message:`Usou ${n.name}`}):n.category==="equipment"&&(t.includes("machete")||t.includes("bow")||t.includes("axe"))?(this.equipped.weapon=t,e.weaponDamage=((i=n.stats)==null?void 0:i.atk)||15,e.model.config.weaponType=t.includes("bow")?"bow":"machete",e.model.buildWeapon(e.model.config.scale),{success:!0,message:`Equipou ${n.name}`}):!1}}const ip=[{id:"craft_bandage",result:"bandage",count:2,category:"survival",name:"Atadura de Ervas (x2)",desc:"Bandeja medicinal feita de folhas e fibras para tratar feridas.",req:{herb:2,wood:1},time:1},{id:"craft_cooked_meat",result:"cooked_meat",count:1,category:"survival",name:"Carne Assada Nutritiva",desc:"Cozinhe a carne caçada para consumo seguro e rico em proteínas.",req:{meat:1,wood:1},time:1.5},{id:"craft_water_flask",result:"water_flask",count:1,category:"survival",name:"Cantil de Água Purificada",desc:"Filtra e armazena água fresca para longas expedições.",req:{scrap:2,wood:1},time:1.5},{id:"craft_medkit",result:"medkit",count:1,category:"survival",name:"Kit Médico Militar",desc:"Combina ataduras com essência fúngica para máxima recuperação biológica.",req:{bandage:2,spore_essence:1,scrap:2},time:3},{id:"craft_axe",result:"stone_axe",count:1,category:"tools",name:"Machado de Pedra Afiado",desc:"Permite derrubar árvores com maior velocidade e eficiência.",req:{wood:5,stone:3},time:2},{id:"craft_bow",result:"hunting_bow",count:1,category:"weapons",name:"Arco Composto das Rainhas",desc:"Arma silenciosa ideal para caça e combate furtivo.",req:{wood:8,scrap:3},time:2.5},{id:"craft_arrows",result:"arrows",count:10,category:"weapons",name:"Flechas Emplumadas (x10)",desc:"Projéteis de alta penetração com ponta de sílex.",req:{wood:4,stone:2},time:1},{id:"craft_machete",result:"titanium_machete",count:1,category:"weapons",name:"Machete Tática de Titânio",desc:"Lâmina militar resistente, causa cortes profundos e sangramento.",req:{wood:6,iron_ore:4,scrap:2},time:3.5},{id:"craft_vest",result:"tactical_vest",count:1,category:"clothing",name:"Colete Blindado Valkyrie",desc:"Placas reforçadas que absorvem impactos de feras e armas de fogo.",req:{scrap:6,iron_ore:3},time:4}];class sp{constructor(t,e){this.inv=t,this.sound=e}canCraft(t){for(const[e,n]of Object.entries(t.req))if(this.inv.getCount(e)<n)return!1;return!0}craft(t){if(!this.canCraft(t))return{success:!1,reason:"Materiais insuficientes!"};for(const[n,i]of Object.entries(t.req))this.inv.removeItem(n,i);this.inv.addItem(t.result,t.count),this.sound&&this.sound.playCraftSuccess();const e=nn[t.result];return{success:!0,name:e?e.name:t.name,count:t.count}}}const rp=[{id:"quest_1",title:"O Despertar da Rainha",tag:"SOBREVIVÊNCIA BÁSICA",desc:"Colete 10 Madeiras e 5 Pedras para erguer sua primeira Fogueira Acolhedora.",req:{type:"harvest",wood:10,stone:5},reward:{xp:120,text:"+120 XP • Desbloqueio da Bancada de Armas"}},{id:"quest_2",title:"A Aliança de Nova Éden",tag:"EXPLORAÇÃO & COMBATE",desc:'Localize Elena "Valkyrie" nas ruínas e derrote 3 Mutantes dos Esporos.',req:{type:"combat",kills:3,talkTo:"elena"},reward:{xp:250,text:"+250 XP • Aliança Tática com Elena • Esquema Militar"}},{id:"quest_3",title:"A Sabedoria das Sombras",tag:"FLORESTA ANCESTRAL",desc:'Fale com Maya "Sombra" no bosque e colete 4 Ervas Medicinais.',req:{type:"harvest",herb:4,talkTo:"maya"},reward:{xp:350,text:"+350 XP • Arco Composto • Camuflagem Mística"}},{id:"quest_4",title:"O Fim do Colapso Verde",tag:"CHEFE FINAL & VERDADE",desc:"Fale com a Dra. Vanessa Rios e derrote A Matriarca dos Esporos para obter o Cartão Ômega.",req:{type:"boss",killBoss:!0,talkTo:"vanessa"},reward:{xp:1e3,text:"+1000 XP • Título Lendário: Rainha Soberana dos Ermos!"}}];class ap{constructor(t){this.sound=t,this.currentQuestIndex=0,this.progress={wood:0,stone:0,herb:0,kills:0,spokeToElena:!1,spokeToMaya:!1,spokeToVanessa:!1,bossDefeated:!1}}getCurrentQuest(){return rp[this.currentQuestIndex]||null}getProgressFraction(){const t=this.getCurrentQuest();if(!t)return 1;if(t.id==="quest_1"){const e=Math.min(1,this.progress.wood/10),n=Math.min(1,this.progress.stone/5);return(e+n)/2}else if(t.id==="quest_2"){const e=Math.min(1,this.progress.kills/3),n=this.progress.spokeToElena?1:0;return(e+n)/2}else if(t.id==="quest_3"){const e=Math.min(1,this.progress.herb/4),n=this.progress.spokeToMaya?1:0;return(e+n)/2}else if(t.id==="quest_4"){const e=this.progress.bossDefeated?1:0,n=this.progress.spokeToVanessa?1:0;return(e+n)/2}return 0}checkCompletion(t,e){const n=this.getCurrentQuest();if(!n)return;let i=!1;(n.id==="quest_1"&&this.progress.wood>=10&&this.progress.stone>=5||n.id==="quest_2"&&this.progress.kills>=3&&this.progress.spokeToElena||n.id==="quest_3"&&this.progress.herb>=4&&this.progress.spokeToMaya||n.id==="quest_4"&&this.progress.bossDefeated&&this.progress.spokeToVanessa)&&(i=!0),i&&(t.gainXp(n.reward.xp),this.sound&&this.sound.playQuestFanfare(),e&&e(n),this.currentQuestIndex++)}registerHarvest(t,e=1){this.progress[t]!==void 0&&(this.progress[t]+=e)}registerKill(t=!1){this.progress.kills+=1,t&&(this.progress.bossDefeated=!0)}registerNPCTalk(t){t==="elena"&&(this.progress.spokeToElena=!0),t==="maya"&&(this.progress.spokeToMaya=!0),t==="vanessa"&&(this.progress.spokeToVanessa=!0)}}const Xs=[{name:"Ébano Profundo",color:"#3b2219"},{name:"Bronze Radiante",color:"#754326"},{name:"Dourada Quente",color:"#b87333"},{name:"Morena Mel",color:"#d49b7a"},{name:"Oliva Selvagem",color:"#c89d7c"},{name:"Porcelana Clara",color:"#f5d0b5"}],qs=[{name:"Preto Ônix",color:"#171717"},{name:"Castanho Escuro",color:"#3a2016"},{name:"Loiro Platinado",color:"#f59e0b"},{name:"Ruivo Cobre",color:"#b45309"},{name:"Violeta Néon",color:"#9333ea"},{name:"Verde Esmeralda",color:"#10b981"}],Ys=[{name:"Preto Tático",color:"#0f172a"},{name:"Verde Militar",color:"#166534"},{name:"Couro Desgastado",color:"#78350f"},{name:"Vermelho Renegado",color:"#991b1b"},{name:"Cinza Asfalto",color:"#334155"}],$s=[{name:"Vinho Selvagem",color:"#881337"},{name:"Vermelho Rubi",color:"#e11d48"},{name:"Nude Natural",color:"#b45309"},{name:"Preto Gótico",color:"#09090b"}];class op{constructor(t,e){this.model=t,this.onConfigChange=e,this.currentConfig={name:"Isadora",title:"A Fênix Renegada",personality:"Destemida",skinColor:"#d49b7a",hairStyle:"ponytail",hairColor:"#171717",makeup:"guerreira",lipstick:"#881337",outfitStyle:"leather",outfitColor:"#0f172a",bootsStyle:"combat",accessory:"holster",perkClass:"guerreira"},this.loadSavedConfig(),this.buildUI(),this.bindEvents()}loadSavedConfig(){try{const t=localStorage.getItem("wild_queens_hero");t&&(this.currentConfig=Object.assign(this.currentConfig,JSON.parse(t)))}catch(t){console.warn("Storage read error:",t)}}saveConfig(){try{localStorage.setItem("wild_queens_hero",JSON.stringify(this.currentConfig))}catch(t){console.warn("Storage save error:",t)}}buildUI(){const t=document.getElementById("palette-skin");t&&(t.innerHTML="",Xs.forEach(a=>{const c=document.createElement("div");c.className=`color-swatch ${this.currentConfig.skinColor===a.color?"active":""}`,c.style.backgroundColor=a.color,c.title=a.name,c.addEventListener("click",()=>{this.currentConfig.skinColor=a.color,this.refreshPreview(),t.querySelectorAll(".color-swatch").forEach(l=>l.classList.remove("active")),c.classList.add("active")}),t.appendChild(c)}));const e=document.getElementById("picker-hair");if(e){const a=[{id:"ponytail",name:"Rabo de Cavalo Tático"},{id:"braid",name:"Trança Guerreira"},{id:"undercut",name:"Undercut Selvagem"},{id:"afro",name:"Cachos Volumosos"},{id:"bob",name:"Bob Desfiado"},{id:"long",name:"Longo ao Vento"}];e.innerHTML="",a.forEach(c=>{const l=document.createElement("div");l.className=`style-card ${this.currentConfig.hairStyle===c.id?"active":""}`,l.textContent=c.name,l.addEventListener("click",()=>{this.currentConfig.hairStyle=c.id,this.refreshPreview(),e.querySelectorAll(".style-card").forEach(h=>h.classList.remove("active")),l.classList.add("active")}),e.appendChild(l)})}const n=document.getElementById("palette-hair-color");n&&(n.innerHTML="",qs.forEach(a=>{const c=document.createElement("div");c.className=`color-swatch ${this.currentConfig.hairColor===a.color?"active":""}`,c.style.backgroundColor=a.color,c.title=a.name,c.addEventListener("click",()=>{this.currentConfig.hairColor=a.color,this.refreshPreview(),n.querySelectorAll(".color-swatch").forEach(l=>l.classList.remove("active")),c.classList.add("active")}),n.appendChild(c)}));const i=document.getElementById("palette-lipstick");i&&(i.innerHTML="",$s.forEach(a=>{const c=document.createElement("div");c.className=`color-swatch ${this.currentConfig.lipstick===a.color?"active":""}`,c.style.backgroundColor=a.color,c.title=a.name,c.addEventListener("click",()=>{this.currentConfig.lipstick=a.color,this.refreshPreview(),i.querySelectorAll(".color-swatch").forEach(l=>l.classList.remove("active")),c.classList.add("active")}),i.appendChild(c)}));const r=document.getElementById("picker-outfit");if(r){const a=[{id:"leather",name:"Jaqueta Renegade"},{id:"valkyrie",name:"Tático Valkyrie"},{id:"huntress",name:"Caçadora dos Ermos"},{id:"cyber",name:"Nômade Cibernética"}];r.innerHTML="",a.forEach(c=>{const l=document.createElement("div");l.className=`style-card ${this.currentConfig.outfitStyle===c.id?"active":""}`,l.textContent=c.name,l.addEventListener("click",()=>{this.currentConfig.outfitStyle=c.id,this.refreshPreview(),r.querySelectorAll(".style-card").forEach(h=>h.classList.remove("active")),l.classList.add("active")}),r.appendChild(l)})}const o=document.getElementById("palette-outfit-color");o&&(o.innerHTML="",Ys.forEach(a=>{const c=document.createElement("div");c.className=`color-swatch ${this.currentConfig.outfitColor===a.color?"active":""}`,c.style.backgroundColor=a.color,c.title=a.name,c.addEventListener("click",()=>{this.currentConfig.outfitColor=a.color,this.refreshPreview(),o.querySelectorAll(".color-swatch").forEach(l=>l.classList.remove("active")),c.classList.add("active")}),o.appendChild(c)}))}bindEvents(){document.querySelectorAll(".custom-tab").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".custom-tab").forEach(d=>d.classList.remove("active")),document.querySelectorAll(".tab-panel").forEach(d=>d.classList.remove("active")),c.classList.add("active");const l=`tab-${c.dataset.tab}`,h=document.getElementById(l);h&&h.classList.add("active")})});const t=document.getElementById("cust-name");t&&(t.value=this.currentConfig.name,t.addEventListener("input",c=>{this.currentConfig.name=c.target.value.trim()||"Isadora"}));const e=document.getElementById("cust-title");e&&(e.value=this.currentConfig.title,e.addEventListener("change",c=>{this.currentConfig.title=c.target.value}));const n=document.getElementById("picker-makeup");n&&n.querySelectorAll(".badge-option").forEach(c=>{c.addEventListener("click",()=>{n.querySelectorAll(".badge-option").forEach(l=>l.classList.remove("active")),c.classList.add("active"),this.currentConfig.makeup=c.dataset.val,this.refreshPreview()})});const i=document.getElementById("picker-boots");i&&i.querySelectorAll(".badge-option").forEach(c=>{c.addEventListener("click",()=>{i.querySelectorAll(".badge-option").forEach(l=>l.classList.remove("active")),c.classList.add("active"),this.currentConfig.bootsStyle=c.dataset.val,this.refreshPreview()})});const r=document.getElementById("picker-acc");r&&r.querySelectorAll(".badge-option").forEach(c=>{c.addEventListener("click",()=>{r.querySelectorAll(".badge-option").forEach(l=>l.classList.remove("active")),c.classList.add("active"),this.currentConfig.accessory=c.dataset.val,this.refreshPreview()})});const o=document.getElementById("picker-class");o&&o.querySelectorAll(".class-card").forEach(c=>{c.addEventListener("click",()=>{o.querySelectorAll(".class-card").forEach(l=>l.classList.remove("active")),c.classList.add("active"),this.currentConfig.perkClass=c.dataset.class})});const a=document.getElementById("btn-custom-randomize");a&&a.addEventListener("click",()=>{this.randomize()})}randomize(){const t=Xs[Math.floor(Math.random()*Xs.length)],e=["ponytail","braid","undercut","afro","bob","long"][Math.floor(Math.random()*6)],n=qs[Math.floor(Math.random()*qs.length)],i=["guerreira","rainha","sombra","natural"][Math.floor(Math.random()*4)],r=["leather","valkyrie","huntress","cyber"][Math.floor(Math.random()*4)],o=Ys[Math.floor(Math.random()*Ys.length)],a=$s[Math.floor(Math.random()*$s.length)];this.currentConfig.skinColor=t.color,this.currentConfig.hairStyle=e,this.currentConfig.hairColor=n.color,this.currentConfig.makeup=i,this.currentConfig.outfitStyle=r,this.currentConfig.outfitColor=o.color,this.currentConfig.lipstick=a.color,this.buildUI(),this.refreshPreview()}refreshPreview(){this.model&&(this.model.config=Object.assign(this.model.config,this.currentConfig),this.model.buildMaterials(),this.model.buildCharacterMesh()),this.onConfigChange&&this.onConfigChange(this.currentConfig)}}class cp{constructor(t){this.game=t,this.selectedInvItem=null,this.selectedRecipe=null,this.bindHUDButtons(),this.setupMinimap(),this.setupWorldMap(),this.setupBuildingPalette()}bindHUDButtons(){var t,e,n,i,r,o,a,c,l,h,d;(t=document.getElementById("btn-open-map"))==null||t.addEventListener("click",()=>this.toggleModal("modal-map")),(e=document.getElementById("btn-open-crafting"))==null||e.addEventListener("click",()=>{this.populateCrafting(),this.toggleModal("modal-crafting")}),(n=document.getElementById("btn-open-build"))==null||n.addEventListener("click",()=>this.toggleBuildHUD()),(i=document.getElementById("btn-open-journal"))==null||i.addEventListener("click",()=>this.showToast("📜 Missões em andamento rastreadas no HUD!")),(r=document.getElementById("btn-toggle-sound"))==null||r.addEventListener("click",()=>{const f=this.game.sound.toggleMute(),m=document.getElementById("btn-toggle-sound");m&&(m.textContent=f?"🔇":"🔊"),this.showToast(f?"Áudio Desativado":"Áudio Ativado")}),(o=document.getElementById("minimap-toggle-btn"))==null||o.addEventListener("click",()=>this.toggleModal("modal-map")),document.querySelectorAll(".btn-close-modal").forEach(f=>{f.addEventListener("click",()=>{var g;const m=f.dataset.close;m&&((g=document.getElementById(m))==null||g.classList.add("hidden"))})}),(a=document.getElementById("btn-inv-use"))==null||a.addEventListener("click",()=>{if(!this.selectedInvItem)return;const f=this.game.inventory.useItem(this.selectedInvItem,this.game.player);f&&f.success&&(this.showToast(`✨ ${f.message}`),this.updateInventoryGrid(),this.updateHUDVitals())}),(c=document.getElementById("btn-inv-drop"))==null||c.addEventListener("click",()=>{var f;this.selectedInvItem&&(this.game.inventory.removeItem(this.selectedInvItem,1),this.showToast(`🗑️ Descartou 1x ${(f=nn[this.selectedInvItem])==null?void 0:f.name}`),this.updateInventoryGrid())}),document.querySelectorAll(".inv-filter-btn").forEach(f=>{f.addEventListener("click",()=>{document.querySelectorAll(".inv-filter-btn").forEach(m=>m.classList.remove("active")),f.classList.add("active"),this.updateInventoryGrid(f.dataset.filter)})}),(l=document.getElementById("btn-rotate-build"))==null||l.addEventListener("click",()=>{this.game.buildings.rotateBuilding()}),(h=document.getElementById("btn-cancel-build"))==null||h.addEventListener("click",()=>{this.toggleBuildHUD(!1)}),(d=document.getElementById("btn-respawn"))==null||d.addEventListener("click",()=>{this.game.respawnPlayer()})}toggleModal(t){const e=document.getElementById(t);if(!e)return;const n=e.classList.contains("hidden");document.querySelectorAll(".game-modal").forEach(i=>i.classList.add("hidden")),n&&(e.classList.remove("hidden"),t==="modal-inventory"&&this.updateInventoryGrid(),t==="modal-map"&&this.drawWorldMap())}toggleBuildHUD(t){const e=document.getElementById("building-hud");if(!e)return;(t!==void 0?t:e.classList.contains("hidden"))?(e.classList.remove("hidden"),this.game.buildings.setBuildMode(!0,"campfire"),this.showToast("🏠 Modo Construção Ativado! Clique no chão para posicionar.")):(e.classList.add("hidden"),this.game.buildings.setBuildMode(!1))}setupBuildingPalette(){const t=document.getElementById("build-palette");if(!t)return;t.innerHTML="";const e=this.game.buildings.blueprints;Object.values(e).forEach((n,i)=>{const r=document.createElement("button");r.className=`build-item-btn ${i===0?"active":""}`,r.dataset.type=n.id,r.innerHTML=`<span>${n.icon}</span><span>${n.name.split(" ")[0]}</span>`,r.addEventListener("click",()=>{t.querySelectorAll(".build-item-btn").forEach(o=>o.classList.remove("active")),r.classList.add("active"),this.game.buildings.setBuildMode(!0,n.id)}),t.appendChild(r)})}updateHUDVitals(){const t=this.game.player;if(!t)return;const e=Math.max(0,Math.min(100,t.vitals.health/t.vitals.maxHealth*100)),n=document.getElementById("bar-hp");n&&(n.style.width=`${e}%`);const i=document.getElementById("val-hp");i&&(i.textContent=`${Math.round(t.vitals.health)}/${t.vitals.maxHealth}`);const r=t.vitals.stamina/t.vitals.maxStamina*100,o=document.getElementById("bar-stamina");o&&(o.style.width=`${r}%`);const a=document.getElementById("val-stamina");a&&(a.textContent=`${Math.round(t.vitals.stamina)}/${t.vitals.maxStamina}`);const c=document.getElementById("bar-hunger");c&&(c.style.width=`${t.vitals.hunger}%`);const l=document.getElementById("val-hunger");l&&(l.textContent=`${Math.round(t.vitals.hunger)}%`);const h=document.getElementById("bar-thirst");h&&(h.style.width=`${t.vitals.thirst}%`);const d=document.getElementById("val-thirst");d&&(d.textContent=`${Math.round(t.vitals.thirst)}%`);const f=document.getElementById("val-time");f&&(f.textContent=`${this.game.engine.getClockFormatted()} • Dia ${t.daysSurvived}`);const m=document.getElementById("val-temp");m&&(m.textContent=`${t.vitals.temperature}°C • Confortável`);const g=document.getElementById("hud-level");g&&(g.textContent=t.level);const _=document.getElementById("stealth-indicator");_&&(t.isCrouched?_.classList.remove("hidden"):_.classList.add("hidden"));const p=document.getElementById("hud-biome-name");if(p){const S=t.position.x,x=t.position.z;S<-40&&x<-40?p.textContent="Bunker Ômega (Cume)":S<0&&x>15?p.textContent="Ruínas de Nova Éden":Math.hypot(S-45,x-45)<35?p.textContent="Lago da Névoa":p.textContent="Bosque dos Sussurros"}const u=this.game.quests.getCurrentQuest();if(u){const S=document.getElementById("quest-title"),x=document.getElementById("quest-desc"),E=document.getElementById("quest-progress-fill");S&&(S.textContent=u.title),x&&(x.textContent=u.desc),E&&(E.style.width=`${this.game.quests.getProgressFraction()*100}%`)}this.updateHotbar()}updateHotbar(){const t=document.getElementById("hud-hotbar");if(!t)return;t.innerHTML="";const e=this.game.inventory;for(let n=0;n<6;n++){const i=document.createElement("div");i.className=`hotbar-slot ${e.selectedHotbarIndex===n?"active":""}`,i.innerHTML=`<span class="hotbar-num">${n+1}</span>`;const r=e.hotbar[n];if(r&&nn[r]){const o=nn[r],a=e.getCount(r);i.innerHTML+=`
          <span class="hotbar-icon">${o.icon}</span>
          ${a>1?`<span class="hotbar-count">${a}</span>`:""}
        `}i.addEventListener("click",()=>{e.selectedHotbarIndex=n,r&&(e.useItem(r,this.game.player),this.updateHUDVitals())}),t.appendChild(i)}}updateInventoryGrid(t="all"){const e=document.getElementById("inv-grid");if(!e)return;e.innerHTML="";const i=this.game.inventory.items;Object.entries(i).forEach(([a,c])=>{const l=nn[a];if(!l||t!=="all"&&l.category!==t)return;const h=document.createElement("div");h.className=`inv-item-card ${this.selectedInvItem===a?"selected":""}`,h.innerHTML=`
        <span class="item-icon">${l.icon}</span>
        <span class="item-qty">${c}</span>
      `,h.title=`${l.name} - ${l.desc}`,h.addEventListener("click",()=>{this.selectedInvItem=a,e.querySelectorAll(".inv-item-card").forEach(m=>m.classList.remove("selected")),h.classList.add("selected");const d=document.getElementById("btn-inv-use"),f=document.getElementById("btn-inv-drop");d&&(d.disabled=!1),f&&(f.disabled=!1)}),e.appendChild(h)});const r=document.getElementById("stat-atk");r&&(r.textContent=this.game.player.baseDamage+this.game.player.weaponDamage);const o=document.getElementById("stat-def");o&&(o.textContent=this.game.player.defense)}populateCrafting(t="survival"){const e=document.getElementById("recipe-list");if(!e)return;e.innerHTML="",ip.filter(i=>i.category===t).forEach((i,r)=>{const o=document.createElement("div");o.className=`recipe-row ${r===0?"selected":""}`;const a=nn[i.result]||{};o.innerHTML=`
        <span class="r-icon">${a.icon||"🔨"}</span>
        <div class="r-info">
          <h5>${i.name}</h5>
          <span>${i.desc}</span>
        </div>
      `,o.addEventListener("click",()=>{e.querySelectorAll(".recipe-row").forEach(c=>c.classList.remove("selected")),o.classList.add("selected"),this.showRecipeDetail(i)}),e.appendChild(o),r===0&&this.showRecipeDetail(i)}),document.querySelectorAll(".craft-cat-btn").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".craft-cat-btn").forEach(r=>r.classList.remove("active")),i.classList.add("active"),this.populateCrafting(i.dataset.cat)})})}showRecipeDetail(t){var r;const e=document.getElementById("recipe-detail");if(!e)return;const n=this.game.crafting.canCraft(t);let i="";for(const[o,a]of Object.entries(t.req)){const c=this.game.inventory.getCount(o),l=c>=a,h=nn[o]||{name:o,icon:"📦"};i+=`
        <div class="req-item-row" style="color: ${l?"#a7f3d0":"#fca5a5"};">
          <span>${h.icon} ${h.name}</span>
          <span>${c}/${a}</span>
        </div>
      `}e.innerHTML=`
      <div class="detail-content">
        <h4>${t.name}</h4>
        <p style="font-size: 0.85rem; color: #94a3b8;">${t.desc}</p>
        <div class="req-item-list">
          <div style="font-size: 0.75rem; color: #cbd5e1; font-weight: 700;">MATERIAIS NECESSÁRIOS:</div>
          ${i}
        </div>
      </div>
      <button id="btn-do-craft" class="btn-primary" ${n?"":'disabled style="opacity: 0.5;"'}>
        FABRICAR AGORA
      </button>
    `,(r=document.getElementById("btn-do-craft"))==null||r.addEventListener("click",()=>{const o=this.game.crafting.craft(t);o.success?(this.showToast(`🔨 Fabricou: ${o.count}x ${o.name}!`),this.showRecipeDetail(t),this.updateHUDVitals()):this.showToast(`❌ ${o.reason}`)})}setupMinimap(){this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCanvas&&(this.minimapCtx=this.minimapCanvas.getContext("2d"))}updateMinimap(){if(!this.minimapCtx)return;const t=this.minimapCtx,e=this.minimapCanvas.width,n=this.minimapCanvas.height,i=this.game.player;if(!i)return;t.clearRect(0,0,e,n),t.fillStyle="#0b1610",t.fillRect(0,0,e,n);const r=e/2,o=n/2,a=.9,c=r+(45-i.position.x)*a,l=o+(45-i.position.z)*a;t.fillStyle="#1e3a8a",t.beginPath(),t.arc(c,l,25*a,0,Math.PI*2),t.fill();const h=r+(-68-i.position.x)*a,d=o+(-68-i.position.z)*a;t.fillStyle="#a855f7",t.fillRect(h-5,d-5,10,10),this.game.npcs&&this.game.npcs.npcs.forEach(f=>{const m=r+(f.pos.x-i.position.x)*a,g=o+(f.pos.z-i.position.z)*a;t.fillStyle="#f59e0b",t.beginPath(),t.arc(m,g,4,0,Math.PI*2),t.fill()}),this.game.enemies&&this.game.enemies.enemies.forEach(f=>{if(f.isDead)return;const m=r+(f.pos.x-i.position.x)*a,g=o+(f.pos.z-i.position.z)*a;t.fillStyle=f.type==="boss"?"#ec4899":"#ef4444",t.beginPath(),t.arc(m,g,f.type==="boss"?6:3,0,Math.PI*2),t.fill()}),t.save(),t.translate(r,o),t.rotate(-i.rotationY),t.fillStyle="#34d399",t.beginPath(),t.moveTo(0,-7),t.lineTo(5,6),t.lineTo(0,3),t.lineTo(-5,6),t.closePath(),t.fill(),t.restore()}setupWorldMap(){this.worldMapCanvas=document.getElementById("world-map-canvas"),this.worldMapCanvas&&(this.worldMapCtx=this.worldMapCanvas.getContext("2d"))}drawWorldMap(){if(!this.worldMapCtx)return;const t=this.worldMapCtx,e=this.worldMapCanvas.width,n=this.worldMapCanvas.height,i=this.game.player;t.fillStyle="#0a1017",t.fillRect(0,0,e,n),t.strokeStyle="rgba(255, 255, 255, 0.05)";for(let h=0;h<e;h+=50)t.beginPath(),t.moveTo(h,0),t.lineTo(h,n),t.stroke();for(let h=0;h<n;h+=50)t.beginPath(),t.moveTo(0,h),t.lineTo(e,h),t.stroke();const r=2.2,o=e/2,a=n/2,c=h=>o+h*r,l=h=>a+h*r;if(t.fillStyle="#1e3a8a",t.beginPath(),t.arc(c(45),l(45),32*r,0,Math.PI*2),t.fill(),t.fillStyle="#60a5fa",t.font="11px sans-serif",t.fillText("Lago da Névoa",c(45)-35,l(45)),t.fillStyle="rgba(71, 85, 105, 0.5)",t.fillRect(c(-40),l(20),45*r,40*r),t.fillStyle="#cbd5e1",t.fillText("Ruínas de Nova Éden",c(-40),l(20)-5),t.fillStyle="#a855f7",t.beginPath(),t.arc(c(-68),l(-68),10,0,Math.PI*2),t.fill(),t.fillText("Bunker Ômega (Laboratório Secreto)",c(-68)-60,l(-68)-14),this.game.npcs&&this.game.npcs.npcs.forEach(h=>{t.fillStyle="#f59e0b",t.beginPath(),t.arc(c(h.pos.x),l(h.pos.z),6,0,Math.PI*2),t.fill(),t.fillText(h.name,c(h.pos.x)+8,l(h.pos.z)+4)}),i){t.fillStyle="#34d399",t.beginPath(),t.arc(c(i.position.x),l(i.position.z),8,0,Math.PI*2),t.fill(),t.strokeStyle="#ffffff",t.stroke();const h=document.getElementById("map-coords");h&&(h.textContent=`X: ${Math.round(i.position.x)} | Z: ${Math.round(i.position.z)}`)}}showDialogue(t,e="intro"){const n=document.getElementById("modal-dialogue");if(!n)return;n.classList.remove("hidden");const i=t.dialogues[e];if(!i){n.classList.add("hidden");return}const r=document.getElementById("npc-name"),o=document.getElementById("npc-role"),a=document.getElementById("npc-avatar"),c=document.getElementById("dialogue-text"),l=document.getElementById("dialogue-options"),h=document.getElementById("npc-rep-fill"),d=document.getElementById("npc-rep-text");r&&(r.textContent=t.name),o&&(o.textContent=t.role),a&&(a.textContent=t.avatar);const f=typeof i.text=="function"?i.text(t.affinity):i.text;c&&(c.textContent=f),h&&(h.style.width=`${t.affinity}%`),d&&(d.textContent=t.affinity>50?"Aliada Fiel":"Amigável"),l&&(l.innerHTML="",i.options.forEach(m=>{const g=document.createElement("button");g.className="dialogue-opt-btn",g.innerHTML=`<span>💬</span> <span>${m.text}</span>`,g.addEventListener("click",()=>{t.affinity=Math.min(100,Math.max(0,t.affinity+(m.repGain||0))),m.next==="exit"?n.classList.add("hidden"):m.next==="toggle_follow"?(this.game.npcs.toggleFollower(t.id).following?this.showToast(`🤝 ${t.name} agora está seguindo e lutará ao seu lado!`):this.showToast(`👋 ${t.name} voltou ao seu acampamento.`),n.classList.add("hidden")):this.showDialogue(t,m.next)}),l.appendChild(g)})),this.game.quests.registerNPCTalk(t.id)}showInteractionPrompt(t,e){const n=document.getElementById("interaction-prompt"),i=document.getElementById("prompt-key"),r=document.getElementById("prompt-text");n&&i&&r&&(i.textContent=t,r.textContent=e,n.classList.remove("hidden"))}hideInteractionPrompt(){const t=document.getElementById("interaction-prompt");t&&t.classList.add("hidden")}spawnDamageNumber(t,e=!1){const n=document.getElementById("combat-log");if(!n)return;const i=document.createElement("div");i.className=`dmg-number ${e?"crit-number":""}`,i.textContent=e?`CRÍTICO! -${t}`:`-${t}`,n.appendChild(i),setTimeout(()=>{i.remove()},900)}showToast(t){const e=document.getElementById("toast-container");if(!e)return;const n=document.createElement("div");n.className="toast-msg",n.textContent=t,e.appendChild(n),setTimeout(()=>{n.remove()},3200)}showGameOver(){const t=document.getElementById("game-over-screen");if(!t)return;const e=document.getElementById("death-days"),n=document.getElementById("death-kills"),i=document.getElementById("death-harvested");e&&(e.textContent=this.game.player.daysSurvived),n&&(n.textContent=this.game.player.kills),i&&(i.textContent=this.game.player.harvestedCount),t.classList.remove("hidden")}hideGameOver(){const t=document.getElementById("game-over-screen");t&&t.classList.add("hidden")}}class lp{constructor(){this.canvas=document.getElementById("game-canvas"),this.sound=new jf,this.engine=new $f(this.canvas,this.sound),this.input=new Kf(this.canvas),this.inventory=new np(this.sound),this.crafting=new sp(this.inventory,this.sound),this.quests=new ap(this.sound),this.terrain=null,this.buildings=null,this.player=null,this.enemies=null,this.npcs=null,this.ui=null,this.customizer=null,this.gameState="loading",this.lastTime=performance.now(),this.init()}async init(){var t;try{this.updateLoadingProgress(25,"Gerando relevo e biomas da floresta..."),await this.wait(100),this.terrain=new Zf(this.engine.scene),this.buildings=new Jf(this.engine.scene,this.sound),this.updateLoadingProgress(55,"Configurando sistemas de sobrevivência e atmosfera..."),await this.wait(100);let e={};try{const o=localStorage.getItem("wild_queens_hero");o&&(e=JSON.parse(o))}catch{}this.player=new Qf(this.engine.scene,this.sound,e),this.applyClassPerks(e.perkClass||"guerreira"),this.updateLoadingProgress(80,"Populando rainhas aliadas, fauna e colônias de esporos..."),await this.wait(100),this.enemies=new tp(this.engine.scene,this.sound),this.npcs=new ep(this.engine.scene,this.sound),this.ui=new cp(this),this.customizer=new op(this.player.model,o=>{this.applyClassPerks(o.perkClass);const a=document.getElementById("hud-hero-name"),c=document.getElementById("hud-hero-title");a&&(a.textContent=o.name),c&&(c.textContent=o.title)}),this.bindGameEvents(),this.updateLoadingProgress(100,"Os ermos aguardam sua liderança!"),await this.wait(150);const n=document.getElementById("btn-start-game"),i=document.getElementById("loading-screen"),r=()=>{this._hasEnteredMenu||(this._hasEnteredMenu=!0,this.sound.init(),i==null||i.classList.add("hidden"),this.showMainMenu())};n&&(n.style.display="inline-block",n.addEventListener("click",r)),i==null||i.addEventListener("click",r),setTimeout(r,1200)}catch(e){console.error("Init error:",e);const n=document.getElementById("loading-tip");n&&(n.innerHTML=`<span style="color: #ef4444;">Aviso: ${e.message}</span><br><button id="btn-force-enter" class="btn-primary" style="margin-top: 10px;">ENTRAR NO JOGO</button>`,(t=document.getElementById("btn-force-enter"))==null||t.addEventListener("click",()=>{var i;(i=document.getElementById("loading-screen"))==null||i.classList.add("hidden"),this.showMainMenu()}))}}wait(t){return new Promise(e=>setTimeout(e,t))}updateLoadingProgress(t,e){const n=document.getElementById("loading-progress"),i=document.getElementById("loading-tip");n&&(n.style.width=`${t}%`),i&&e&&(i.textContent=e)}showMainMenu(){var e,n,i,r;this.gameState="menu";const t=document.getElementById("main-menu");t&&t.classList.remove("hidden"),this._menuEventsBound||(this._menuEventsBound=!0,(e=document.getElementById("btn-menu-new"))==null||e.addEventListener("click",()=>{this.sound.init(),t==null||t.classList.add("hidden"),this.startGame()}),(n=document.getElementById("btn-menu-continue"))==null||n.addEventListener("click",()=>{this.sound.init(),t==null||t.classList.add("hidden"),this.startGame()}),(i=document.getElementById("btn-menu-customize"))==null||i.addEventListener("click",()=>{t==null||t.classList.add("hidden"),this.openCustomizerStudio()}),(r=document.getElementById("btn-menu-lore"))==null||r.addEventListener("click",()=>{alert("WILD QUEENS: O Colapso Verde transformou a Terra em uma selva hostil. Grupos de mulheres formaram irmandades independentes para preservar o conhecimento e reconstruir uma sociedade justa.")}))}openCustomizerStudio(){var e,n;this.gameState="studio";const t=document.getElementById("customizer-screen");t&&t.classList.remove("hidden"),this.engine.camera.position.set(0,1.4,2.8),this.engine.camera.lookAt(0,1.3,0),(e=document.getElementById("btn-custom-back"))==null||e.addEventListener("click",()=>{t==null||t.classList.add("hidden"),this.showMainMenu()}),(n=document.getElementById("btn-custom-save"))==null||n.addEventListener("click",()=>{this.customizer.saveConfig(),t==null||t.classList.add("hidden"),this.startGame()})}startGame(){var e;this.gameState="playing",(e=document.getElementById("game-hud"))==null||e.classList.remove("hidden"),this.sound.resume(),setInterval(()=>this.autosave(),25e3);const t=this.quests.getCurrentQuest();t&&this.ui.showToast(`🎯 Missão Ativa: ${t.title}`),this.loop()}bindGameEvents(){this.input.on("attack",()=>{if(this.gameState!=="playing")return;if(this.buildings.isBuildModeActive){this.attemptPlaceBuilding();return}this.player.triggerAttack()&&(this.checkCombatHits(),this.checkHarvestHits())}),this.input.on("dodge",()=>{this.gameState==="playing"&&this.player.triggerDodge()}),this.input.on("toggleCrouch",t=>{this.player.toggleCrouch(t)}),this.input.on("interact",()=>{this.gameState==="playing"&&this.checkInteractPrompt(!0)}),this.input.on("toggleInventory",()=>{this.ui.toggleModal("modal-inventory")}),this.input.on("keyDown",t=>{this.gameState==="playing"&&(t==="KeyB"?this.ui.toggleBuildHUD():t==="KeyM"?this.ui.toggleModal("modal-map"):t==="KeyI"||t==="Tab"?this.ui.toggleModal("modal-inventory"):t==="Digit1"?this.selectHotbar(0):t==="Digit2"?this.selectHotbar(1):t==="Digit3"?this.selectHotbar(2):t==="Digit4"?this.selectHotbar(3):t==="Digit5"?this.selectHotbar(4):t==="Digit6"&&this.selectHotbar(5))})}selectHotbar(t){this.inventory.selectedHotbarIndex=t;const e=this.inventory.hotbar[t];e&&(this.inventory.useItem(e,this.player),this.ui.updateHUDVitals())}applyClassPerks(t){t==="guerreira"?(this.player.baseDamage=25,this.player.defense=14):t==="cacadora"?(this.player.moveSpeed=4.6,this.player.baseDamage=20):t==="engenheira"?this.player.defense=16:t==="fitoterapeuta"&&(this.player.vitals.maxHunger=120,this.player.vitals.maxThirst=120)}checkCombatHits(){const t=this.player.getAttackHitbox(),e=this.player.isCrouched;for(const n of this.enemies.enemies){if(n.isDead)continue;if(n.pos.distanceTo(t.center)<=t.radius){let r=this.player.baseDamage+this.player.weaponDamage;const o=e||Math.random()<.25;o&&(r=Math.round(r*2.2)),this.ui.spawnDamageNumber(r,o);const a=this.enemies.damageEnemy(n.id,r,o);a&&a.killed&&(this.player.kills+=1,this.player.gainXp(35,c=>{this.ui.showToast(`🎉 NÍVEL ACIMA! Você alcançou o Nível ${c}!`)}),a.drops&&(this.inventory.addItem(a.drops.item,a.drops.count),this.ui.showToast(`🎁 Coletou: ${a.drops.count}x ${a.drops.name}`)),this.quests.registerKill(n.type==="boss"),this.quests.checkCompletion(this.player,c=>{this.ui.showToast(`🏆 Missão Concluída: ${c.title}! ${c.reward.text}`)}));break}}}checkHarvestHits(){const t=this.player.getAttackHitbox();for(const e of this.terrain.nodes){if(e.isHarvested)continue;if(e.position.distanceTo(t.center)<=t.radius+1.2){this.sound.playHarvest(e.type);const i=this.terrain.harvestNode(e,1);i&&(this.inventory.addItem(i.item,i.count),this.player.harvestedCount+=i.count,this.ui.showToast(`📦 +${i.count} ${i.name}`),this.quests.registerHarvest(i.item,i.count),this.quests.checkCompletion(this.player,r=>{this.ui.showToast(`🏆 Missão Concluída: ${r.title}! ${r.reward.text}`)}),this.ui.updateHUDVitals());break}}}checkInteractPrompt(t=!1){const e=this.npcs.getNearestNPC(this.player.position,3.8);if(e){this.ui.showInteractionPrompt("E",`Conversar com ${e.name}`),t&&this.ui.showDialogue(e);return}if(Math.hypot(this.player.position.x-45,this.player.position.z-45)<32&&this.player.vitals.thirst<90){this.ui.showInteractionPrompt("E","Beber Água Limpa [Lago da Névoa]"),t&&(this.player.drink(40),this.ui.showToast("💧 Bebeu água fresca do lago. Sede saciada!"),this.ui.updateHUDVitals());return}let i=null;for(const r of this.terrain.nodes)if(!r.isHarvested&&r.position.distanceTo(this.player.position)<3){i=r;break}if(i){this.ui.showInteractionPrompt("F / Clique",`Coletar [${i.name}]`);return}this.ui.hideInteractionPrompt()}attemptPlaceBuilding(){const t=new R(this.player.position.x+Math.sin(this.player.rotationY)*3.5,0,this.player.position.z+Math.cos(this.player.rotationY)*3.5);t.y=this.terrain.getHeight(t.x,t.z);const e=this.buildings.placeStructure(t,this.inventory.items);e.success?(this.ui.showToast(`✅ Construiu: ${e.name}!`),this.ui.updateHUDVitals()):this.ui.showToast(`❌ ${e.reason}`)}respawnPlayer(){this.player.vitals.health=100,this.player.vitals.hunger=80,this.player.vitals.thirst=80,this.player.position.set(0,0,0),this.player.daysSurvived+=1,this.ui.hideGameOver(),this.gameState="playing",this.ui.showToast("🔥 Você renasceu sob o sol dos ermos!"),this.ui.updateHUDVitals()}autosave(){try{const t={vitals:this.player.vitals,pos:{x:this.player.position.x,z:this.player.position.z},items:this.inventory.items,level:this.player.level,kills:this.player.kills};localStorage.setItem("wild_queens_save",JSON.stringify(t))}catch{}}loop(){requestAnimationFrame(()=>this.loop());const t=performance.now(),e=Math.min(.1,(t-this.lastTime)*.001);if(this.lastTime=t,this.gameState==="studio"){this.player.model.root.rotation.y+=e*.6,this.player.model.updateAnimation(e,"idle"),this.engine.render();return}if(this.gameState==="playing"){if(this.player.update(e,this.input,this.terrain,this.buildings,()=>{this.gameState="dead",this.ui.showGameOver()}),this.engine.updateAtmosphere(e,this.player.position),this.engine.updateCamera(this.player.position,this.input),this.enemies.update(e,this.player.position,this.player.isCrouched,(n,i)=>{const r=this.player.takeDamage(n,i);r&&(this.ui.showToast(`⚠️ Sofreu ${r} de dano de ${i}!`),this.ui.updateHUDVitals())}),this.npcs.update(e,this.player.position,this.enemies.enemies),this.buildings.update(t*.001),this.buildings.isBuildModeActive){const n=new R(this.player.position.x+Math.sin(this.player.rotationY)*3.5,0,this.player.position.z+Math.cos(this.player.rotationY)*3.5);n.y=this.terrain.getHeight(n.x,n.z),this.buildings.updateGhost(n,!0)}this.checkInteractPrompt(!1),this.ui.updateHUDVitals(),this.ui.updateMinimap(),this.engine.render()}}}function qi(){if(!window.__wildQueensInstance)try{window.__wildQueensInstance=new lp}catch(s){console.error("Fatal bootstrap error:",s);const t=document.getElementById("loading-tip");t&&(t.style.color="#ef4444",t.textContent="Erro ao iniciar: "+s.message)}}document.readyState==="complete"||document.readyState==="interactive"?qi():(document.addEventListener("DOMContentLoaded",qi),window.addEventListener("load",qi),setTimeout(qi,300));
