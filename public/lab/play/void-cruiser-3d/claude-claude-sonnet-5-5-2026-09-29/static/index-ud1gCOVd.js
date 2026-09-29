(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,O=1030,k=1031,te=1033,A=33776,ne=33777,j=33778,re=33779,M=35840,ie=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,ue=37488,N=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,Pe=2300,P=2301,Fe=2302,Ie=2303,Le=2400,F=2401,Re=2402,I=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=35048,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,L(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function dt(e,t,n){return e===t?0:(n-e)/(t-e)}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t,n,r){return ft(e,t,1-Math.exp(-n*r))}function mt(e,t=1){return t-Math.abs(lt(e,t*2)-t)}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function _t(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vt(e,t){return e+Math.random()*(t-e)}function yt(e){return e*(.5-Math.random())}function bt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xt(e){return e*ot}function St(e){return e*st}function Ct(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Tt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Et(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var kt={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:z,euclideanModulo:lt,mapLinear:ut,inverseLerp:dt,lerp:ft,damp:pt,pingpong:mt,smoothstep:ht,smootherstep:gt,randInt:_t,randFloat:vt,randFloatSpread:yt,seededRandom:bt,degToRad:xt,radToDeg:St,isPowerOfTwo:Ct,ceilPowerOfTwo:wt,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:Et,normalize:Ot,denormalize:Dt},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new V,Mt=new At,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Nt.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Nt.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Nt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nt=new H,Pt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ft=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function It(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var Lt=It();function Rt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function zt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Bt,Vt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bt===void 0&&(Bt=Ye(`canvas`)),Bt.width=e.width,Bt.height=e.height;let t=Bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Rt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Rt(t[e]/255)*255):t[e]=Rt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ht=0,Ut=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Wt(r[t].image)):e.push(Wt(r[t]))}else e=Wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Vt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Gt=0,Kt=new V,qt=class r extends rt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=ct(),this.name=``,this.source=new Ut(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kt).x}get height(){return this.source.getSize(Kt).y}get depth(){return this.source.getSize(Kt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=300,qt.DEFAULT_ANISOTROPY=1;var Jt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];let r=new qt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ut(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xt=class extends Yt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zt=class extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qt=class extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$t=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],A=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*O+c*ne,i[4]=a*S+o*E+s*k+c*j,i[8]=a*C+o*D+s*te+c*re,i[12]=a*w+o*ee+s*A+c*M,i[1]=l*x+u*T+d*O+f*ne,i[5]=l*S+u*E+d*k+f*j,i[9]=l*C+u*D+d*te+f*re,i[13]=l*w+u*ee+d*A+f*M,i[2]=p*x+m*T+h*O+g*ne,i[6]=p*S+m*E+h*k+g*j,i[10]=p*C+m*D+h*te+g*re,i[14]=p*w+m*ee+h*A+g*M,i[3]=_*x+v*T+y*O+b*ne,i[7]=_*S+v*E+y*k+b*j,i[11]=_*C+v*D+y*te+b*re,i[15]=_*w+v*ee+y*A+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=en.set(r[0],r[1],r[2]).length(),o=en.set(r[4],r[5],r[6]).length(),s=en.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tn.copy(this);let c=1/a,l=1/o,u=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=l,tn.elements[5]*=l,tn.elements[6]*=l,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new V,tn=new $t,nn=new V(0,0,0),rn=new V(1,1,1),an=new V,on=new V,sn=new V,cn=new $t,ln=new At,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},fn=0,pn=new V,mn=new At,hn=new $t,gn=new V,_n=new V,vn=new V,yn=new At,bn=new V(1,0,0),xn=new V(0,1,0),Sn=new V(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new un,r=new At,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new H}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dn.DEFAULT_UP=new V(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=lt(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=jn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}copyLinearToSRGB(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Lt.workingToColorSpace(Fn.copy(this),e),Math.round(z(Fn.r*255,0,255))*65536+Math.round(z(Fn.g*255,0,255))*256+Math.round(z(Fn.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,r=Fn.g,i=Fn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ze){Lt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,r=Fn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=ft(Mn.h,Nn.h,t),r=ft(Mn.s,Nn.s,t),i=ft(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new U;U.NAMES=jn;var In=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ln=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new V,zn=new V,Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V,Jn=new Jt,Yn=new Jt,Xn=new Jt,Zn=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Rn.subVectors(r,t),zn.subVectors(n,t),Bn.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(zn),s=Rn.dot(Bn),c=zn.dot(zn),l=zn.dot(Bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Vn.x),s.addScaledVector(a,Vn.y),s.addScaledVector(o,Vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Jn.setScalar(0),Yn.setScalar(0),Xn.setScalar(0),Jn.fromBufferAttribute(e,t),Yn.fromBufferAttribute(e,n),Xn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jn,i.x),a.addScaledVector(Yn,i.y),a.addScaledVector(Xn,i.z),a}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),zn.subVectors(e,t),Rn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Rn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Hn.subVectors(r,n),Un.subVectors(i,n),Gn.subVectors(e,n);let s=Hn.dot(Gn),c=Un.dot(Gn);if(s<=0&&c<=0)return t.copy(n);Kn.subVectors(e,r);let l=Hn.dot(Kn),u=Un.dot(Kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Hn,a);qn.subVectors(e,i);let f=Hn.dot(qn),p=Un.dot(qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Un,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hn,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,er):er.fromBufferAttribute(r,t),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lr.subVectors(this.max,cr),nr.subVectors(e.a,cr),rr.subVectors(e.b,cr),ir.subVectors(e.c,cr),ar.subVectors(rr,nr),or.subVectors(ir,rr),sr.subVectors(nr,ir);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-sr.z,sr.y,ar.z,0,-ar.x,or.z,0,-or.x,sr.z,0,-sr.x,-ar.y,ar.x,0,-or.y,or.x,0,-sr.y,sr.x,0];return!fr(t,nr,rr,ir,lr)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,nr,rr,ir,lr))?!1:(ur.crossVectors(ar,or),t=[ur.x,ur.y,ur.z],fr(t,nr,rr,ir,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new V,new V,new V,new V,new V,new V,new V,new V],er=new V,tr=new Qn,nr=new V,rr=new V,ir=new V,ar=new V,or=new V,sr=new V,cr=new V,lr=new V,ur=new V,dr=new V;function fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dr.fromArray(e,a);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),s=t.dot(dr),c=n.dot(dr),l=r.dot(dr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pr=new V,mr=new B,hr=0,gr=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},_r=class extends gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},vr=class extends gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yr=class extends gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new Qn,xr=new V,Sr=new V,Cr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new $t,Er=new Dn,Dr=new V,Or=new Qn,kr=new Qn,Ar=new V,jr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?vr:_r)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new yr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new gr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=We,this.updateRanges=[],this.version=0,this.uuid=ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Nr=new V,Pr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix4(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyNormalMatrix(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.transformDirection(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Qe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new gr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=new V,Ir=new V,Lr=new H,Rr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fr.subVectors(n,t).cross(Ir.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Fr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lr.getNormalMatrix(e),r=this.coplanarPoint(Fr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zr=0,Br=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Rr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Vr=class extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hr,Ur=new V,Wr=new V,Gr=new V,Kr=new B,qr=new B,Jr=new $t,Yr=new V,Xr=new V,Zr=new V,Qr=new B,$r=new B,ei=new B,ti=class extends Dn{constructor(e=new Vr){if(super(),this.isSprite=!0,this.type=`Sprite`,Hr===void 0){Hr=new jr;let e=new Mr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute(`position`,new Pr(e,3,0,!1)),Hr.setAttribute(`uv`,new Pr(e,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Wr.setFromMatrixScale(this.matrixWorld),Jr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Gr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ni(Yr.set(-.5,-.5,0),Gr,a,Wr,r,i),ni(Xr.set(.5,-.5,0),Gr,a,Wr,r,i),ni(Zr.set(.5,.5,0),Gr,a,Wr,r,i),Qr.set(0,0),$r.set(1,0),ei.set(1,1);let o=e.ray.intersectTriangle(Yr,Xr,Zr,!1,Ur);if(o===null&&(ni(Xr.set(-.5,.5,0),Gr,a,Wr,r,i),$r.set(0,1),o=e.ray.intersectTriangle(Yr,Zr,Xr,!1,Ur),o===null))return;let s=e.ray.origin.distanceTo(Ur);s<e.near||s>e.far||t.push({distance:s,point:Ur.clone(),uv:Zn.getInterpolation(Ur,Yr,Xr,Zr,Qr,$r,ei,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ni(e,t,n,r,i,a){Kr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?qr.copy(Kr):(qr.x=a*Kr.x-i*Kr.y,qr.y=i*Kr.x+a*Kr.y),e.copy(t),e.x+=qr.x,e.y+=qr.y,e.applyMatrix4(Jr)}var ri=new V,ii=new V,ai=new V,oi=new V,si=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ii.copy(e).add(t).multiplyScalar(.5),ai.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ii);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ai),o=oi.dot(this.direction),s=-oi.dot(ai),c=oi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ii).addScaledVector(ai,d),f}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,te,A,ne;if(y>=b&&y>=x?(w=s,D=u,k=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,te=_,A=v):(S=l,C=c,T=f,E=d,ee=h,O=m,te=v,A=_)):b>=x?(w=c,D=d,k=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,te=v,A=g):(S=s,C=l,T=u,E=f,ee=p,O=h,te=g,A=v)):(w=l,D=f,k=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,te=g,A=_):(S=c,C=s,T=d,E=u,ee=m,O=p,te=_,A=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=ee-j*k,se=O-re*k,ce=te-j*ne,le=A-re*ne,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=M*(ue*D+N*k+de*ne);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},li=new $t,ui=new si,di=new Cr,fi=new V,pi=new V,mi=new V,hi=new V,gi=new V,_i=new V,vi=new V,yi=new V,W=class extends Dn{constructor(e=new jr,t=new ci){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){_i.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(gi.fromBufferAttribute(s,e),a?_i.addScaledVector(gi,r):_i.addScaledVector(gi.sub(t),r))}t.add(_i)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(i),ui.copy(e.ray).recast(e.near),!(di.containsPoint(ui.origin)===!1&&(ui.intersectSphere(di,fi)===null||ui.origin.distanceToSquared(fi)>(e.far-e.near)**2))&&(li.copy(i).invert(),ui.copy(e.ray).applyMatrix4(li),(n.boundingBox===null||ui.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=xi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=xi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=xi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=xi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function bi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;yi.copy(s),yi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(yi);return l<n.near||l>n.far?null:{distance:l,point:yi.clone(),object:e}}function xi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,pi),e.getVertexPosition(c,mi),e.getVertexPosition(l,hi);let u=bi(e,t,n,r,pi,mi,hi,vi);if(u){let e=new V;Zn.getBarycoord(vi,pi,mi,hi,e),i&&(u.uv=Zn.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Zn.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Zn.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Zn.getNormal(pi,mi,hi,t.normal),u.face=t,u.barycoord=e}return u}var Si=class extends qt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ci=class extends gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wi=new $t,Ti=new $t,Ei=[],Di=new Qn,Oi=new $t,ki=new W,Ai=new Cr,ji=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Oi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Di.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(Di)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Ai.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Ai)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(n),e.ray.intersectsSphere(Ai)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,wi),Ti.multiplyMatrices(n,wi),ki.matrixWorld=Ti,ki.raycast(e,Ei);for(let e=0,n=Ei.length;e<n;e++){let n=Ei[e];n.instanceId=i,n.object=this,t.push(n)}Ei.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Si(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mi=new Cr,Ni=new B(.5,.5),Pi=new V,Fi=class{constructor(e=new Rr,t=new Rr,n=new Rr,r=new Rr,i=new Rr,a=new Rr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476+Ni.distanceTo(e.center),Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Pi.x=r.normal.x>0?e.max.x:e.min.x,Pi.y=r.normal.y>0?e.max.y:e.min.y,Pi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ii=class extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Li=new V,Ri=new V,zi=new $t,Bi=new si,Vi=new Cr,Hi=new V,Ui=new V,Wi=class extends Dn{constructor(e=new jr,t=new Ii){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Li.fromBufferAttribute(t,e-1),Ri.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Li.distanceTo(Ri);e.setAttribute(`lineDistance`,new yr(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),Vi.radius+=i,e.ray.intersectsSphere(Vi)===!1)return;zi.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Gi(this,e,Bi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Gi(this,e,Bi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Gi(this,e,Bi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Gi(this,e,Bi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Gi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Li.fromBufferAttribute(s,i),Ri.fromBufferAttribute(s,a),n.distanceSqToSegment(Li,Ri,Hi,Ui)>r)return;Hi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Hi);if(!(c<t.near||c>t.far))return{distance:c,point:Ui.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ki=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},qi=class extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ji=new $t,Yi=new si,Xi=new Cr,Zi=new V,Qi=class extends Dn{constructor(e=new jr,t=new qi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(r),Xi.radius+=i,e.ray.intersectsSphere(Xi)===!1)return;Ji.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Ji);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Zi.fromBufferAttribute(l,n),$i(Zi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Zi.fromBufferAttribute(l,a),$i(Zi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function $i(e,t,n,r,i,a,o){let s=Yi.distanceSqToPoint(e);if(s<n){let n=new V;Yi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ea=class extends qt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ta=class extends qt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},na=class extends qt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ut(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ra=class extends na{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ia=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},aa=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},oa=class e extends jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new yr(a,3)),this.setAttribute(`normal`,new yr(o,3)),this.setAttribute(`uv`,new yr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sa=class e extends jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new yr(u,3)),this.setAttribute(`normal`,new yr(d,3)),this.setAttribute(`uv`,new yr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ca=class e extends sa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},la=class e extends jr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new yr(i,3)),this.setAttribute(`normal`,new yr(i.slice(),3)),this.setAttribute(`uv`,new yr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ua=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new $t;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},da=class extends ua{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fa=class extends da{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function pa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ma=new V,ha=new V,ga=new pa,_a=new pa,va=new pa,ya=class extends ua{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ha.subVectors(r[0],r[1]).add(r[0]),c=ha);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ma.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ma),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ga.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),_a.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),va.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ga.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),_a.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),va.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ga.calc(s),_a.calc(s),va.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ba(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function xa(e,t){let n=1-e;return n*n*t}function Sa(e,t){return 2*(1-e)*e*t}function Ca(e,t){return e*e*t}function wa(e,t,n,r){return xa(e,t)+Sa(e,n)+Ca(e,r)}function Ta(e,t){let n=1-e;return n*n*n*t}function Ea(e,t){let n=1-e;return 3*n*n*e*t}function Da(e,t){return 3*(1-e)*e*e*t}function Oa(e,t){return e*e*e*t}function ka(e,t,n,r,i){return Ta(e,t)+Ea(e,n)+Da(e,r)+Oa(e,i)}var Aa=class extends ua{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,i.x,a.x,o.x),ka(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends ua{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,i.x,a.x,o.x),ka(e,r.y,i.y,a.y,o.y),ka(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends ua{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends ua{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends ua{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wa(e,r.x,i.x,a.x),wa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends ua{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wa(e,r.x,i.x,a.x),wa(e,r.y,i.y,a.y),wa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends ua{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ba(o,s.x,c.x,l.x,u.x),ba(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},La=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:ya,CubicBezierCurve:Aa,CubicBezierCurve3:ja,EllipseCurve:da,LineCurve:Ma,LineCurve3:Na,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:Fa,SplineCurve:Ia}),Ra=class extends ua{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new La[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new La[n.type]().fromJSON(n))}return this}},za=class extends Ra{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ma(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Pa(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Aa(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ia([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new da(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ba=class extends za{constructor(e){super(e),this.uuid=ct(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new za().fromJSON(n))}return this}};function Va(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ha(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ya(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Wa(a,o,n,s,c,l,0),o}function Ha(e,t,n,r,i){let a;if(i===bo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=_o(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=_o(i/r|0,e[i],e[i+1],a);return a&&co(a,a.next)&&(vo(a),a=a.next),a}function Ua(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(co(n,n.next)||so(n.prev,n,n.next)===0)){if(vo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Wa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&eo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ka(e,r,i,a):Ga(e)){t.push(c.i,e.i,l.i),vo(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=qa(Ua(e),t),Wa(e,t,n,r,i,a,2)):o===2&&Ja(e,t,n,r,i,a):Wa(Ua(e),t,n,r,i,a,1);break}}}function Ga(e){let t=e.prev,n=e,r=e.next;if(so(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ao(i,s,a,c,o,l,m.x,m.y)&&so(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ka(e,t,n,r){let i=e.prev,a=e,o=e.next;if(so(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=no(p,m,t,n,r),v=no(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(s,u,c,d,l,f,y.x,y.y)&&so(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ao(s,u,c,d,l,f,b.x,b.y)&&so(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(s,u,c,d,l,f,y.x,y.y)&&so(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ao(s,u,c,d,l,f,b.x,b.y)&&so(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function qa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!co(r,i)&&lo(r,n,n.next,i)&&mo(r,i)&&mo(i,r)&&(t.push(r.i,n.i,i.i),vo(n),vo(n.next),n=e=i),n=n.next}while(n!==e);return Ua(n)}function Ja(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&oo(o,e)){let s=go(o,e);o=Ua(o,o.next),s=Ua(s,s.next),Wa(o,t,n,r,i,a,0),Wa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ya(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ha(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ro(o))}i.sort(Xa);for(let e=0;e<i.length;e++)n=Za(i[e],n);return n}function Xa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Za(e,t){let n=Qa(e,t);if(!n)return t;let r=go(n,e);return Ua(r,r.next),Ua(n,n.next)}function Qa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(co(e,n))return n;do{if(co(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&io(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);mo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&$a(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function $a(e,t){return so(e.prev,e,t.prev)<0&&so(t.next,e,e.next)<0}function eo(e,t,n,r){let i=e;do i.z===0&&(i.z=no(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,to(i)}function to(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function no(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ro(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function io(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ao(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&io(e,t,n,r,i,a,o,s)}function oo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!po(e,t)&&(mo(e,t)&&mo(t,e)&&ho(e,t)&&(so(e.prev,e,t.prev)||so(e,t.prev,t))||co(e,t)&&so(e.prev,e,e.next)>0&&so(t.prev,t,t.next)>0)}function so(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function co(e,t){return e.x===t.x&&e.y===t.y}function lo(e,t,n,r){let i=fo(so(e,t,n)),a=fo(so(e,t,r)),o=fo(so(n,r,e)),s=fo(so(n,r,t));return!!(i!==a&&o!==s||i===0&&uo(e,n,t)||a===0&&uo(e,r,t)||o===0&&uo(n,e,r)||s===0&&uo(n,t,r))}function uo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function fo(e){return e>0?1:e<0?-1:0}function po(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&lo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function mo(e,t){return so(e.prev,e,e.next)<0?so(e,t,e.next)>=0&&so(e,e.prev,t)>=0:so(e,t,e.prev)<0||so(e,e.next,t)<0}function ho(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function go(e,t){let n=yo(e.i,e.x,e.y),r=yo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function _o(e,t,n,r){let i=yo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function vo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function yo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var xo=class{static triangulate(e,t,n=2){return Va(e,t,n)}},So=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Co(e),wo(n,e);let a=e.length;t.forEach(Co);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,wo(n,t[e]);let o=xo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Co(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function wo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var To=class e extends jr{constructor(e=new Ba([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new yr(r,3)),this.setAttribute(`uv`,new yr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Eo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new V,b=new V,x=new V}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!So.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];So.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function ee(e,t,n){return t||R(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new B(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new B(r/a,i/a)}let te=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),te[e]=k(D[e],D[n],D[r]);let A=[],ne,j=te.concat();for(let e=0,t=E;e<t;e++){let t=w[e];ne=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ne[e]=k(t[e],t[r],t[i]);A.push(ne),j=j.concat(ne)}let re;if(p===0)re=So.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=ee(D[t],te[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];ne=A[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=ee(n[e],ne[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=So.triangulateShape(e,t)}let M=re.length,ie=d+f;for(let e=0;e<O;e++){let t=l?ee(C[e],j[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?ee(C[t],j[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=ee(D[e],te[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=A[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],ne[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<M;e++){let n=re[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<M;e++){let n=re[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<M;e++){let t=re[e];le(t[2],t[1],t[0])}for(let e=0;e<M;e++){let t=re[e];le(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Do(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new La[i.type]().fromJSON(i)),new e(r,t.options)}},Eo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new B(a,o),new B(s,c),new B(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new B(o,1-c),new B(l,1-d),new B(f,1-m),new B(h,1-_)]:[new B(s,1-c),new B(u,1-d),new B(p,1-m),new B(g,1-_)]}};function Do(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Oo=class e extends la{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ko=class e extends la{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ao=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},jo=class e extends jr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new yr(s,3)),this.setAttribute(`normal`,new yr(c,3)),this.setAttribute(`uv`,new yr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Mo=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},No=class e extends la{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Po=class e extends jr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Fo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Lo(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Lo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Io(e){let t={};for(let n=0;n<e.length;n++){let r=Fo(e[n]);for(let e in r)t[e]=r[e]}return t}function Lo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ro(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function zo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}var Bo={clone:Fo,merge:Io},Vo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ho=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Uo=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vo,this.fragmentShader=Ho,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=Ro(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Jt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new $t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wo=class extends Uo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Go=class extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ko=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=I,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qo=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Yo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Xo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Zo=class extends Xo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Le,endingEnd:Le}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case F:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case F:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Qo=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},$o=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},es=class extends Xo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=rs(n,t,g,y,r);i[p]=ts(x,o,_,b,m)}return i}};function ts(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ns(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function rs(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ts(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ns(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var is=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Jo(t,this.TimeBufferType),this.values=Jo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jo(e.times,Array),values:Jo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Yo(e.settings)&&(n.settings={inTangents:Jo(e.settings.inTangents,Array),outTangents:Jo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new es(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pe:t=this.InterpolantFactoryMethodDiscrete;break;case P:t=this.InterpolantFactoryMethodLinear;break;case Fe:t=this.InterpolantFactoryMethodSmooth;break;case Ie:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pe;case this.InterpolantFactoryMethodLinear:return P;case this.InterpolantFactoryMethodSmooth:return Fe;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Yo(this.settings)&&(as(this.settings.inTangents,e),as(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Yo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function as(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}is.prototype.ValueTypeName=``,is.prototype.TimeBufferType=Float32Array,is.prototype.ValueBufferType=Float32Array,is.prototype.DefaultInterpolation=P;var os=class extends is{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName=`bool`,os.prototype.ValueBufferType=Array,os.prototype.DefaultInterpolation=Pe,os.prototype.InterpolantFactoryMethodLinear=void 0,os.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends is{constructor(e,t,n,r){super(e,t,n,r)}};ss.prototype.ValueTypeName=`color`;var cs=class extends is{constructor(e,t,n,r){super(e,t,n,r)}};cs.prototype.ValueTypeName=`number`;var ls=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)At.slerpFlat(i,0,a,c-o,a,c,s);return i}},us=class extends is{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ls(this.times,this.values,this.getValueSize(),e)}};us.prototype.ValueTypeName=`quaternion`,us.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends is{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName=`string`,ds.prototype.ValueBufferType=Array,ds.prototype.DefaultInterpolation=Pe,ds.prototype.InterpolantFactoryMethodLinear=void 0,ds.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends is{constructor(e,t,n,r){super(e,t,n,r)}};fs.prototype.ValueTypeName=`vector`;var ps={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ms(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ms(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ms(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var hs=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},gs=class{constructor(e){this.manager=e===void 0?hs:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gs.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var _s=new WeakMap,vs=class extends gs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ps.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=_s.get(a);e===void 0&&(e=[],_s.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ye(`img`);function s(){l(),t&&t(this);let n=_s.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}_s.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),ps.remove(`image:${e}`);let n=_s.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}_s.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ps.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},ys=class extends gs{constructor(e){super(e)}load(e,t,n,r){let i=new qt,a=new vs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},bs=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xs=class extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ss=new $t,Cs=new V,ws=new V,Ts=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fi,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cs.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cs),ws.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ws),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ss.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ss,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Es=new V,Ds=new At,Os=new V,ks=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Es,Ds,Os),Os.x===1&&Os.y===1&&Os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,Ds,Os.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Es,Ds,Os),Os.x===1&&Os.y===1&&Os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,Ds,Os.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new V,js=new B,Ms=new B,Ns=class extends ks{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,js,Ms),t.subVectors(Ms,js)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ps=class extends Ts{constructor(){super(new Ns(90,1,.5,500)),this.isPointLightShadow=!0}},Fs=class extends bs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ps}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Is=class extends ks{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ls=class extends Ts{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Ls}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},zs=class extends jr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Bs=-90,Vs=1,Hs=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ns(Bs,Vs,e,t);r.layers=this.layers,this.add(r);let i=new Ns(Bs,Vs,e,t);i.layers=this.layers,this.add(i);let a=new Ns(Bs,Vs,e,t);a.layers=this.layers,this.add(a);let o=new Ns(Bs,Vs,e,t);o.layers=this.layers,this.add(o);let s=new Ns(Bs,Vs,e,t);s.layers=this.layers,this.add(s);let c=new Ns(Bs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Us=class extends Ns{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ws=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Gs.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Gs(){this._document.hidden===!1&&this.reset()}var Ks=`\\[\\]\\.:\\/`,qs=RegExp(`[\\[\\]\\.:\\/]`,`g`),Js=`[^\\[\\]\\.:\\/]`,Ys=`[^`+Ks.replace(`\\.`,``)+`]`,Xs=`((?:WC+[\\/:])*)`.replace(`WC`,Js),Zs=`(WCOD+)?`.replace(`WCOD`,Ys),Qs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Js),$s=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Js),ec=RegExp(`^`+Xs+Zs+Qs+$s+`$`),tc=[`material`,`materials`,`bones`,`map`],nc=class{constructor(e,t,n){let r=n||rc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(qs,``)}static parseTrackName(e){let t=ec.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);tc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rc.Composite=nc,rc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},rc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},rc.prototype.GetterByBindingType=[rc.prototype._getValue_direct,rc.prototype._getValue_array,rc.prototype._getValue_arrayElement,rc.prototype._getValue_toArray],rc.prototype.SetterByBindingTypeAndVersioning=[[rc.prototype._setValue_direct,rc.prototype._setValue_direct_setNeedsUpdate,rc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rc.prototype._setValue_array,rc.prototype._setValue_array_setNeedsUpdate,rc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rc.prototype._setValue_arrayElement,rc.prototype._setValue_arrayElement_setNeedsUpdate,rc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rc.prototype._setValue_fromArray,rc.prototype._setValue_fromArray_setNeedsUpdate,rc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function ic(e,t,n,r){let i=ac(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case A:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case M:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ac(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function oc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function sc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var cc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},lc={basic:{uniforms:Io([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:cc.meshbasic_vert,fragmentShader:cc.meshbasic_frag},lambert:{uniforms:Io([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:cc.meshlambert_vert,fragmentShader:cc.meshlambert_frag},phong:{uniforms:Io([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:cc.meshphong_vert,fragmentShader:cc.meshphong_frag},standard:{uniforms:Io([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:cc.meshphysical_vert,fragmentShader:cc.meshphysical_frag},toon:{uniforms:Io([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:cc.meshtoon_vert,fragmentShader:cc.meshtoon_frag},matcap:{uniforms:Io([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:cc.meshmatcap_vert,fragmentShader:cc.meshmatcap_frag},points:{uniforms:Io([G.points,G.fog]),vertexShader:cc.points_vert,fragmentShader:cc.points_frag},dashed:{uniforms:Io([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:cc.linedashed_vert,fragmentShader:cc.linedashed_frag},depth:{uniforms:Io([G.common,G.displacementmap]),vertexShader:cc.depth_vert,fragmentShader:cc.depth_frag},normal:{uniforms:Io([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:cc.meshnormal_vert,fragmentShader:cc.meshnormal_frag},sprite:{uniforms:Io([G.sprite,G.fog]),vertexShader:cc.sprite_vert,fragmentShader:cc.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:cc.background_vert,fragmentShader:cc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:cc.backgroundCube_vert,fragmentShader:cc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:cc.cube_vert,fragmentShader:cc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:cc.equirect_vert,fragmentShader:cc.equirect_frag},distance:{uniforms:Io([G.common,G.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:cc.distance_vert,fragmentShader:cc.distance_frag},shadow:{uniforms:Io([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:cc.shadow_vert,fragmentShader:cc.shadow_frag}};lc.physical={uniforms:Io([lc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:cc.meshphysical_vert,fragmentShader:cc.meshphysical_frag};var uc={r:0,b:0,g:0},dc=new $t,fc=new H;fc.set(-1,0,0,0,1,0,0,0,1);function pc(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new aa(1,1,1),new Uo({name:`BackgroundCubeMaterial`,uniforms:Fo(lc.backgroundCube.uniforms),vertexShader:lc.backgroundCube.vertexShader,fragmentShader:lc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fc),l.material.toneMapped=Lt.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new Ao(2,2),new Uo({name:`BackgroundMaterial`,uniforms:Fo(lc.background.uniforms),vertexShader:lc.background.vertexShader,fragmentShader:lc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(uc,zo(e)),n.buffers.color.setClear(uc.r,uc.g,uc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function mc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function hc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function gc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function _c(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Rr,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var vc=4,yc=6,bc=20,xc=256,Sc=new Is,Cc=new U,wc=null,Tc=0,Ec=0,Dc=!1,Oc=new V,kc=new V,Ac=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Oc}=i;wc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,Tc,Ec),this._renderer.xr.enabled=Dc,e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Be,depthBuffer:!1},r=Mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jc(r)),this._blurMaterial=Fc(r,e,t),this._ggxMaterial=Pc(r,e,t)}return r}_compileMaterial(e){let t=new W(new jr,e);this._renderer.compile(t,Sc)}_sceneToCubeUV(e,t,n,r,i){let a=new Ns(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Cc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new aa,new ci({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Cc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Nc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Nc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Sc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-vc?n-d+vc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Nc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Sc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Nc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Sc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Nc(t,3*l*(r>this._lodMax-vc?r-this._lodMax+vc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Sc)}};function jc(e){let t=[],n=[],r=e,i=e-vc+1+yc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?kc.set(1,r,n):e===1?kc.set(-n,1,-r):e===2?kc.set(-n,r,1):e===3?kc.set(-1,r,-n):e===4?kc.set(-n,-1,r):kc.set(n,r,-1),kc.toArray(l,(e*6+t)*3)}}let u=new jr;u.setAttribute(`position`,new gr(c,3)),u.setAttribute(`outputDirection`,new gr(l,3)),n.push(new W(u,null)),r>vc&&r--}return{lodMeshes:n,sizeLods:t}}function Mc(e,t,n){let r=new Xt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Nc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Pc(e,t,n){return new Uo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:xc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fc(e,t,n){return new Uo({name:`SphericalGaussianBlur`,defines:{SAMPLES:bc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ic(){return new Uo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lc(){return new Uo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zc=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ea(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new aa(5,5,5),i=new Uo({name:`CubemapFromEquirect`,uniforms:Fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Hs(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Bc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new zc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ac(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ac(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Vc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Hc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?vr:_r)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Uc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Wc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Gc(e,t,n){let r=new WeakMap,i=new Jt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Zt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new B(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Kc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var qc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Jc(e,t,n,r,i,a){let o=new Xt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new jr;l.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new yr([0,2,0,0,2,0],2));let u=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new Is(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Xt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Lt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=qc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Yc=new qt,Xc=new na(1,1),Zc=new Zt,Qc=new Qt,$c=new ea,el=[],tl=[],nl=new Float32Array(16),rl=new Float32Array(9),il=new Float32Array(4);function al(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=el[i];if(a===void 0&&(a=new Float32Array(i),el[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ol(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function sl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function cl(e,t){let n=tl[t];n===void 0&&(n=new Int32Array(t),tl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ll(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ol(n,t))return;e.uniform2fv(this.addr,t),sl(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ol(n,t))return;e.uniform3fv(this.addr,t),sl(n,t)}}function fl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ol(n,t))return;e.uniform4fv(this.addr,t),sl(n,t)}}function pl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ol(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),sl(n,t)}else{if(ol(n,r))return;il.set(r),e.uniformMatrix2fv(this.addr,!1,il),sl(n,r)}}function ml(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ol(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),sl(n,t)}else{if(ol(n,r))return;rl.set(r),e.uniformMatrix3fv(this.addr,!1,rl),sl(n,r)}}function hl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ol(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),sl(n,t)}else{if(ol(n,r))return;nl.set(r),e.uniformMatrix4fv(this.addr,!1,nl),sl(n,r)}}function gl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function _l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ol(n,t))return;e.uniform2iv(this.addr,t),sl(n,t)}}function vl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ol(n,t))return;e.uniform3iv(this.addr,t),sl(n,t)}}function yl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ol(n,t))return;e.uniform4iv(this.addr,t),sl(n,t)}}function bl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function xl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ol(n,t))return;e.uniform2uiv(this.addr,t),sl(n,t)}}function Sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ol(n,t))return;e.uniform3uiv(this.addr,t),sl(n,t)}}function Cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ol(n,t))return;e.uniform4uiv(this.addr,t),sl(n,t)}}function wl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Xc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Xc):a=Yc,n.setTexture2D(t||a,i)}function Tl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Qc,i)}function El(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||$c,i)}function Dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Zc,i)}function Ol(e){switch(e){case 5126:return ll;case 35664:return ul;case 35665:return dl;case 35666:return fl;case 35674:return pl;case 35675:return ml;case 35676:return hl;case 5124:case 35670:return gl;case 35667:case 35671:return _l;case 35668:case 35672:return vl;case 35669:case 35673:return yl;case 5125:return bl;case 36294:return xl;case 36295:return Sl;case 36296:return Cl;case 35678:case 36198:case 36298:case 36306:case 35682:return wl;case 35679:case 36299:case 36307:return Tl;case 35680:case 36300:case 36308:case 36293:return El;case 36289:case 36303:case 36311:case 36292:return Dl}}function kl(e,t){e.uniform1fv(this.addr,t)}function Al(e,t){let n=al(t,this.size,2);e.uniform2fv(this.addr,n)}function jl(e,t){let n=al(t,this.size,3);e.uniform3fv(this.addr,n)}function Ml(e,t){let n=al(t,this.size,4);e.uniform4fv(this.addr,n)}function Nl(e,t){let n=al(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Pl(e,t){let n=al(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Fl(e,t){let n=al(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Il(e,t){e.uniform1iv(this.addr,t)}function Ll(e,t){e.uniform2iv(this.addr,t)}function Rl(e,t){e.uniform3iv(this.addr,t)}function zl(e,t){e.uniform4iv(this.addr,t)}function Bl(e,t){e.uniform1uiv(this.addr,t)}function Vl(e,t){e.uniform2uiv(this.addr,t)}function Hl(e,t){e.uniform3uiv(this.addr,t)}function Ul(e,t){e.uniform4uiv(this.addr,t)}function Wl(e,t,n){let r=this.cache,i=t.length,a=cl(n,i);ol(r,a)||(e.uniform1iv(this.addr,a),sl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Xc:Yc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Gl(e,t,n){let r=this.cache,i=t.length,a=cl(n,i);ol(r,a)||(e.uniform1iv(this.addr,a),sl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Qc,a[e])}function Kl(e,t,n){let r=this.cache,i=t.length,a=cl(n,i);ol(r,a)||(e.uniform1iv(this.addr,a),sl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||$c,a[e])}function ql(e,t,n){let r=this.cache,i=t.length,a=cl(n,i);ol(r,a)||(e.uniform1iv(this.addr,a),sl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Zc,a[e])}function Jl(e){switch(e){case 5126:return kl;case 35664:return Al;case 35665:return jl;case 35666:return Ml;case 35674:return Nl;case 35675:return Pl;case 35676:return Fl;case 5124:case 35670:return Il;case 35667:case 35671:return Ll;case 35668:case 35672:return Rl;case 35669:case 35673:return zl;case 5125:return Bl;case 36294:return Vl;case 36295:return Hl;case 36296:return Ul;case 35678:case 36198:case 36298:case 36306:case 35682:return Wl;case 35679:case 36299:case 36307:return Gl;case 35680:case 36300:case 36308:case 36293:return Kl;case 36289:case 36303:case 36311:case 36292:return ql}}var Yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ol(t.type)}},Xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jl(t.type)}},Zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function $l(e,t){e.seq.push(t),e.map[t.id]=t}function eu(e,t,n){let r=e.name,i=r.length;for(Ql.lastIndex=0;;){let a=Ql.exec(r),o=Ql.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){$l(n,l===void 0?new Yl(s,e,t):new Xl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Zl(s),$l(n,e)),n=e}}}var tu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);eu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function nu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ru=37297,iu=0;function au(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ou=new H;function su(e){Lt._getMatrix(ou,Lt.workingColorSpace,e);let t=`mat3( ${ou.elements.map(e=>e.toFixed(4))} )`;switch(Lt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function cu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+au(e.getShaderSource(t),r)}return i}function lu(e,t){let n=su(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var uu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function du(e,t){let n=uu[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var fu=new V;function pu(){return Lt.getLuminanceCoefficients(fu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${fu.x.toFixed(4)}, ${fu.y.toFixed(4)}, ${fu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function mu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(_u).join(`
`)}function hu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function gu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function _u(e){return e!==``}function vu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bu=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(e){return e.replace(bu,Cu)}var Su=new Map;function Cu(e,t){let n=cc[t];if(n===void 0){let e=Su.get(t);if(e!==void 0)n=cc[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return xu(n)}var wu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(e){return e.replace(wu,Eu)}function Eu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Du(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ou={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ku(e){return Ou[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Au={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ju(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Au[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Mu={302:`ENVMAP_MODE_REFRACTION`};function Nu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Mu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Pu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Fu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Pu[e.combine]||`ENVMAP_BLENDING_NONE`}function Iu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Lu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ku(n),l=ju(n),u=Nu(n),d=Fu(n),f=Iu(n),p=mu(n),m=hu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(_u).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(_u).join(`
`),_.length>0&&(_+=`
`)):(g=[Du(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(_u).join(`
`),_=[Du(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:cc.tonemapping_pars_fragment,n.toneMapping===0?``:du(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,cc.colorspace_pars_fragment,lu(`linearToOutputTexel`,n.outputColorSpace),pu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(_u).join(`
`)),o=xu(o),o=vu(o,n),o=yu(o,n),s=xu(s),s=vu(s,n),s=yu(s,n),o=Tu(o),s=Tu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=nu(i,i.VERTEX_SHADER,y),S=nu(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=cu(i,x,`vertex`),n=cu(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new tu(i,h),T=gu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ru)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iu++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ru=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}},Bu=class{constructor(e){this.id=Ru++,this.code=e,this.usedTimes=0}};function Vu(e){return e===1030||e===37490||e===36285}function Hu(e,t,n,r,i,a){let o=new dn,s=new zu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=lc[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let te=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,re=!!i.map,M=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Vu(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Lt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=lc[t];n=Bo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Lu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Uu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Wu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ku(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Wu),r.length>1&&r.sort(t||Gu),i.length>1&&i.sort(t||Gu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function qu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ku,e.set(t,[i])):n>=r.length?(i=new Ku,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ju(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Yu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Xu=0;function Zu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Qu(e){let t=new Ju,n=Yu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new $t,o=new $t;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Zu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Xu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function $u(e){let t=new Qu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ed(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new $u(e),t.set(n,[a])):r>=i.length?(a=new $u(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var td=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rd=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],id=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ad=new $t,od=new V,sd=new V;function cd(e,t,n){let i=new Fi,a=new B,s=new B,c=new Jt,l=new Ko,u=new qo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Uo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:td,fragmentShader:nd}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new jr;y.setAttribute(`position`,new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new W(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Xt(a.x,a.y,{format:O,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new na(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new zc(a.x),p.map.depthTexture=new ra(a.x,m)):(p.map=new Xt(a.x,a.y),p.map.depthTexture=new na(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),od.setFromMatrixPosition(d.matrixWorld),e.position.copy(od),sd.copy(e.position),sd.add(rd[t]),e.up.copy(id[t]),e.lookAt(sd),e.updateMatrixWorld(),n.makeTranslation(-od.x,-od.y,-od.z),ad.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(ad,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xt(a.x,a.y,{format:O,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ld(e,t){function n(){let t=!1,n=new Jt,r=null,i=new Jt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Jt().fromArray(ae),ce=new Jt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+A-1),M!==t&&(e.activeTexture(t),M=t)}function Te(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+A-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:Be}}function ud(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ye(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ve:Lt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function A(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),re(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&M(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function M(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ie(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(e,t){let n=f.get(e);if(e.isVideoTexture&&P(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){xe(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){xe(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){Se(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let me={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},he={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ge={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function _e(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,me[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,me[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,me[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,he[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,he[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ge[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ve(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ne));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ue(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&M(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ye(r.start,t.width,4),c=ye(n.start,t.width,4);r.start<=o+1&&s===c&&ye(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function xe(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ve(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Lt.getPrimaries(Lt.workingColorSpace),n=t.colorSpace===``?null:Lt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Fe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=k(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);_e(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=A(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&be(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ic(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ic(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Ie(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Ie(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n){if(t.image.length!==6)return;let r=ve(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Lt.getPrimaries(Lt.workingColorSpace),o=t.colorSpace===``?null:Lt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Fe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=A(t,h);_e(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ie(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ne(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function we(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Pe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.normalized,i.colorSpace);Pe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Te(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,ne)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),_e(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else N(t.depthTexture,0);let a=i.__webglTexture,o=Ne(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Te(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Te(t.__webglFramebuffer[0],e,0):Te(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),we(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),we(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function De(e,t,n){let r=f.get(e);t!==void 0&&Ce(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ee(e)}function Oe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,j);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Pe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ne(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),we(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),_e(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Ce(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Ce(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),_e(o,r),Ce(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),_e(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Ce(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Ce(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&Ee(e)}function ke(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let Ae=[],je=[];function Me(e){if(e.samples>0){if(Pe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ae.length=0,je.length=0,Ae.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Ae.push(a),je.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,je)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ae))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function Pe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function P(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Lt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function dd(e,t){function n(n,r=``){let i,a=Lt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var fd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Uo({vertexShader:fd,fragmentShader:pd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Ao(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hd=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new md,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new B,O=null,k=null,te=new Ns;te.viewport=new Jt;let A=new Ns;A.viewport=new Jt;let ne=[te,A],j=new Us,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function ie(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}re=null,M=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(ee.width,ee.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Xt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new na(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Xt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let se=new V,ce=new V;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=A.near=te.near=t,j.far=A.far=te.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,te.layers.mask=j.layers.mask&-5,A.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ue(j,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(j,te,A):j.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),N(e,j,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let de=null;function fe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new Ns,o.layers.enable(n),o.viewport=new Jt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ia,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let pe=new oc;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},gd=new $t,_d=new H;_d.set(-1,0,0,0,1,0,0,0,1);function vd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,zo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(gd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(_d),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function yd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var bd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xd=null;function Sd(){return xd===null&&(xd=new Si(bd,16,16,O,g),xd.name=`DFG_LUT`,xd.minFilter=o,xd.magFilter=o,xd.wrapS=t,xd.wrapT=t,xd.generateMipmaps=!1,xd.needsUpdate=!0),xd}var Cd=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([te,k,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new V,O=null,A=null,ne=[],j=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=ze;let le=0,ue=0,N=null,de=-1,fe=null,pe=new Jt,me=new Jt,he=null,ge=new U(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new Jt(0,0,ve,ye),we=new Jt(0,0,ve,ye),Te=!1,Ee=new Fi,De=!1,Oe=!1,ke=new $t,Ae=new V,je=new Jt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,Be,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt,rt,it,at,ot,st;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ct()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),R(`WebGLRenderer: `+e.message),e}function ct(){Ie=new Vc(P),Ie.init(),at=new dd(P,Ie),Le=new gc(P,Ie,e,at),F=new ld(P,Ie),Le.reversedDepthBuffer&&h&&F.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),se=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new Wc(P),I=new Uu,Be=new ud(P,Ie,F,I,Le,at,Re),Ve=new Bc(M),He=new sc(P),ot=new mc(P,He),Ue=new Hc(P,He,Re,ot),We=new Kc(P,Ue,He,ot,Re),nt=new Gc(P,Le,Be),Ze=new _c(I),Ge=new Hu(M,Ve,Ie,Le,ot,Ze),qe=new vd(M,I),Je=new qu,Ye=new ed(Ie),et=new pc(M,Ve,F,We,x,s),$e=new cd(M,We,Le),st=new yd(P,Re,Le,F),rt=new hc(P,Ie,Re),it=new Uc(P,Ie,Re),Re.programs=Ge.programs,M.capabilities=Le,M.extensions=Ie,M.properties=I,M.renderLists=Je,M.shadowMap=$e,M.state=F,M.info=Re}S!==1009&&(re=new Jc(S,t.width,t.height,o,r,i));let z=new hd(M,P);this.xr=z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){if(z.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=C.has(t)}if(e){let e=N.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,P.clearBufferuiv(P.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,P.clearBufferiv(P.COLOR,0,E))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),et.dispose(),Je.dispose(),Ye.dispose(),I.dispose(),Ve.dispose(),We.dispose(),ot.dispose(),st.dispose(),Ge.dispose(),z.dispose(),z.removeEventListener(`sessionstart`,vt),z.removeEventListener(`sessionend`,yt),bt.stop()};function lt(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ie=!0}function ut(){Qe(`WebGLRenderer: Context Restored.`),ie=!1;let e=Re.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;ct(),Re.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function dt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),I.remove(e)}function mt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=B(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ot.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=He.get(c),g=it,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),De===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),A=Ye.get(n),A.init(t),j.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),ae!==null&&ae.updateLights(A.state.lightsArray),Oe=this.localClippingEnabled,De=Ze.init(this.clippingPlanes,Oe),De===!0&&Ze.setGlobalState(this.clippingPlanes,t),ae!==null&&$e.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),A=j.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new oc;bt.setAnimationLoop(_t),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){gt=e,z.setAnimationLoop(e),e===null?bt.stop():bt.start()},z.addEventListener(`sessionstart`,vt),z.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=z.enabled===!0&&z.isPresenting===!0,r=re!==null&&(N===null||n)&&re.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(t),t=z.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),A=Ye.get(e,j.length),A.init(t),A.state.textureUnits=Be.getTextureUnits(),j.push(A),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,Ke,t.reversedDepth),Oe=this.localClippingEnabled,De=Ze.init(this.clippingPlanes,Oe),O=Je.get(e,ne.length),O.init(),ne.push(O),z.enabled===!0&&z.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,M.sortObjects)}xt(e,t,0,M.sortObjects),O.finish(),ae!==null&&ae.updateLights(A.state.lightsArray),M.sortObjects===!0&&O.sort(xe,Se),Ne=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ne&&et.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Ze.beginShadows();let i=A.state.shadowsArray;if($e.render(i,e,t),De===!0&&Ze.endShadows(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Ne&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(O,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Ne&&et.render(e),St(O,e,t)}N!==null&&ue===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),ot.resetDefaultState(),de=-1,fe=null,j.pop(),j.length>0?(A=j[j.length-1],Be.setTextureUnits(A.state.textureUnits),De===!0&&Ze.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,ne.pop(),O=ne.length>0?ne[ne.length-1]:null,ae!==null&&ae.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)A.pushLightProbeGrid(e);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=We.update(e),a=e.material;a.visible&&O.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,je.z,s,t)}}else a.visible&&O.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),De===!0&&Ze.setGlobalState(M.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Xt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),u=M.getActiveCubeFace(),d=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ge),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&et.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),De===!0&&Ze.setGlobalState(M.clippingPlanes,r),wt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}M.setRenderTarget(s,u,d),M.setClearColor(ge,_e),p!==void 0&&(r.viewport=p),M.toneMapping=f}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ge.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),Ot(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=A.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=tu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function B(e,t,n,r,i){t.isScene!==!0&&(t=Me),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Lt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=A.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=kt(A.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,Be),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,Be),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,Be));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&nt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Sd()),C){if(T.setValue(P,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,be,ye,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}tu.upload(P,Dt(v),E,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(tu.upload(P,Dt(v),E,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];st.update(n,x),st.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=oe),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Mt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,at.convert(c),at.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,at.convert(l),at.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await tt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=at.convert(t.format),_=at.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,se),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};function wd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new jr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Td(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Td(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Td(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new gr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Ed=(e=0,t=0,n=0)=>({x:e,y:t,z:n}),K=(e,t,n)=>e<t?t:e>n?n:e,Dd=(e,t,n)=>e+(t-e)*n,Od=(e,t,n,r)=>Dd(e,t,1-Math.exp(-n*r));function kd(e,t,n,r,i,a,o){let s=r*r+i*i+a*a,c=0;s>1e-9&&(c=K(-(e*r+t*i+n*a)/s,0,o));let l=e+r*c,u=t+i*c,d=n+a*c;return l*l+u*u+d*d}var Ad=class{s;constructor(e=1){this.s=e>>>0||1}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}pick(e){return e[Math.floor(this.next()*e.length)]}weighted(e,t){let n=0;for(let e of t)n+=e;let r=this.next()*n;for(let n=0;n<e.length;n++)if(r-=t[n],r<=0)return e[n];return e[e.length-1]}};function jd(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Md(e){let t=(t,n,r)=>{let i=t*374761393+n*668265263+r*2147483647+e*1274126177|0;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296},n=e=>e*e*(3-2*e),r=(e,r,i)=>{let a=Math.floor(e),o=Math.floor(r),s=Math.floor(i),c=n(e-a),l=n(r-o),u=n(i-s),d=(e,t,n)=>e+(t-e)*n;return d(d(d(t(a,o,s),t(a+1,o,s),c),d(t(a,o+1,s),t(a+1,o+1,s),c),l),d(d(t(a,o,s+1),t(a+1,o,s+1),c),d(t(a,o+1,s+1),t(a+1,o+1,s+1),c),l),u)};return{noise:r,fbm:(e,t,n,i=3)=>{let a=0,o=.5,s=1,c=0;for(let l=0;l<i;l++)a+=r(e*s,t*s,n*s)*o,c+=o,o*=.5,s*=2.03;return a/c}}}function Nd(e,t){let n=new U(t),r=e.getAttribute(`position`).count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new gr(i,3)),e}function Pd(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&e!==`color`&&t.deleteAttribute(e);return t.getAttribute(`normal`)||t.computeVertexNormals(),t.getAttribute(`color`)||Nd(t,16777215),t}function q(e){return wd(e.map(Pd),!1)}function Fd(e,t,n={}){return n.scale&&e.scale(...n.scale),n.rot&&(e.rotateX(n.rot[0]),e.rotateY(n.rot[1]),e.rotateZ(n.rot[2])),n.pos&&e.translate(...n.pos),Nd(e,t)}function Id(e){let t=e.index?e.toNonIndexed():e;return t.computeVertexNormals(),t}function Ld(e){let t=e.y??0;return[[0,e.top+t],[e.w*.6,e.top*.86+t],[e.w,e.top*.12+t],[e.w*.88,-e.bot*.6+t],[e.w*.42,-e.bot+t],[-e.w*.42,-e.bot+t],[-e.w*.88,-e.bot*.6+t],[-e.w,e.top*.12+t],[-e.w*.6,e.top*.86+t]]}function Rd(e,t,n){let r=e.map(Ld),i=r[0].length,a=[],o=(e,t,n)=>a.push(e,t,n);for(let t=0;t<r.length-1;t++){let n=r[t],a=r[t+1],s=e[t].z,c=e[t+1].z;for(let e=0;e<i;e++){let t=(e+1)%i;o(n[e][0],n[e][1],s),o(a[e][0],a[e][1],c),o(n[t][0],n[t][1],s),o(n[t][0],n[t][1],s),o(a[e][0],a[e][1],c),o(a[t][0],a[t][1],c)}}let s=new jr;s.setAttribute(`position`,new yr(a,3)),s.computeVertexNormals(),Nd(s,t);let c=[s],l=(a,o)=>{let s=r[a],l=e[a].z,u=[],d=0,f=0;for(let e of s)d+=e[0],f+=e[1];d/=i,f/=i;for(let e=0;e<i;e++){let t=(e+1)%i;o?u.push(d,f,l,s[t][0],s[t][1],l,s[e][0],s[e][1],l):u.push(d,f,l,s[e][0],s[e][1],l,s[t][0],s[t][1],l)}let p=new jr;p.setAttribute(`position`,new yr(u,3)),p.computeVertexNormals(),Nd(p,n??t),c.push(p)};return l(0,!0),l(r.length-1,!1),q(c)}function zd(e,t,n,r,i=.02){let a=new To(new Ba(e.map(([e,t])=>new B(e,t))),{depth:t,bevelEnabled:i>0,bevelSize:i,bevelThickness:i,bevelSegments:1,steps:1});return a.rotateX(Math.PI/2),a.translate(0,n,0),Nd(Id(a),r)}function Bd(e,t,n){let r=new To(new Ba(e.map(([e,t])=>new B(e,t))),{depth:t,bevelEnabled:!1});return r.translate(0,0,-t/2),r.rotateY(-Math.PI/2),Nd(Id(r),n)}function J(e,t,n,r,i={}){return Fd(new aa(e,t,n),r,i)}function Vd(e,t,n,r,i,a={}){return Fd(new sa(e,t,n,r,1),i,a)}function Hd(e,t,n,r,i={}){return Fd(new ca(e,t,n,1),r,i)}function Ud(e,t,n,r,i,a={}){return Fd(Id(new Po(e,t,n,r)),i,a)}function Wd(e,t,n,r,i={}){return Fd(Id(new Mo(e,t,n)),r,i)}function Gd(e,t,n={}){return Fd(new ko(e,0),t,n)}function Kd(e){let t=e.index?e.toNonIndexed():e.clone(),n=t.getAttribute(`position`),r=t.getAttribute(`color`);for(let e=0;e<n.count;e++)n.setX(e,-n.getX(e));let i=e=>{for(let t=0;t<e.count;t+=3){let n=e.getX(t+1),r=e.getY(t+1),i=e.getZ(t+1);e.setXYZ(t+1,e.getX(t+2),e.getY(t+2),e.getZ(t+2)),e.setXYZ(t+2,n,r,i)}};return i(n),r&&i(r),t.deleteAttribute(`normal`),t.computeVertexNormals(),t}function qd(e){return q([e,Kd(e)])}var Y={Boulder:0,Shard:1,Slab:2,Ore:3,Nova:4},Jd={Large:0,Medium:1,Small:2,Chunk:3},Yd=[4,2.3,1.25,.62],Xd=[16,7.5,3,1.1],X={Scout:0,Weaver:1,Lancer:2,Layer:3},Zd=[1.25,1.1,2.2,1.9],Qd=[5,8,34,22],Z={Pulse:0,Pellet:1,Lance:2,Missile:3,Enemy:4,Beam:5,Orb:6},Q={Fuel:0,Repair:1,Scrap:2,Weapon:3,Module:4},$d={Pulse:0,Scatter:1,Lance:2,Seeker:3},ef=[`PULSE`,`SCATTER`,`LANCE`,`SEEKER`],tf=[`SHIELD CELL`,`MAGNET`,`RAM FRAME`,`DEEP TANK`,`AFTERBURNER`],nf={Sector:0,Extract:1},rf=class{alive=!1;slot=0;gen=0;id=0;shape=Y.Boulder;size=Jd.Large;variant=0;pos=Ed();vel=Ed();rot=Ed();spin=Ed();r=1;mass=1;hp=1;maxHp=1;flash=0;crack=0;fuse=0;grazed=!1;age=0;seed=0;chained=!1},af=class{alive=!1;slot=0;gen=0;id=0;type=X.Scout;pos=Ed();vel=Ed();r=1;hp=1;maxHp=1;age=0;state=0;fireT=0;telegraph=0;aim=Ed();phase=0;patrol=-1;offset=Ed();stationZ=-55;flash=0;bank=0;grazed=!1;dropsCell=!1;burst=0;layT=0},of=class{alive=!1;slot=0;gen=0;friendly=!0;kind=Z.Pulse;pos=Ed();vel=Ed();r=.3;dmg=1;life=1;pierce=0;hitIds=[];homingId=-1;homingKind=0;grazed=!1;tier=1;age=0},sf=class{alive=!1;slot=0;gen=0;pos=Ed();vel=Ed();r=.95;hp=2;age=0;flash=0;grazed=!1},cf=class{alive=!1;slot=0;gen=0;kind=Q.Fuel;sub=0;pos=Ed();vel=Ed();r=.9;age=0;life=30;tether=-1;beacon=!1},lf=class{alive=!1;slot=0;gen=0;kind=nf.Sector;pos=Ed();r=6.5;passed=!1;missed=!1;index=0},uf=class{alive=!1;gen=0;targets=[0,1,2,3,4].map(()=>({alive:!1,x:0,y:0,z:0,r:1}));pos=Ed();r=15;phase=0;t=0;hp=0;maxHp=0;coreHp=0;coreMax=0;coreOpen=0;flash=0;spin=0;fireT=0;summonT=0;beamT=0;beamAim=Ed();telegraph=0;plates=[];dying=0;entered=!1},df=new Map;function ff(e){let t=e.getAttribute(`position`),n=0;for(let e=0;e<t.count;e++)n+=Math.hypot(t.getX(e),t.getY(e),t.getZ(e));return n/t.count}function pf(e){return e.userData.meanRadius??1}function mf(e,t){let n=new Ad(e),{fbm:r}=Md(e),i=new Oo(1,t.detail),a=i.getAttribute(`position`),o=a.count,s=[];for(let e=0;e<t.craters;e++){let e=new V(n.range(-1,1),n.range(-1,1),n.range(-1,1)).normalize();s.push({c:e,r:n.range(.32,.62),d:t.craterDepth*n.range(.6,1.1)})}let c=new U(t.dark).multiplyScalar(.8),l=new U(t.light).multiplyScalar(.82),u=new Float32Array(o*3),d=new V,f=n.range(0,50),p=n.range(0,50),m=n.range(0,50);for(let e=0;e<o;e++){d.set(a.getX(e),a.getY(e),a.getZ(e)).normalize();let n=1+(r(d.x*1.3+f,d.y*1.3+p,d.z*1.3+m,3)-.5)*t.lumps+(r(d.x*3.4+f,d.y*3.4+p,d.z*3.4+m,2)-.5)*t.fine,i=0;for(let e of s){let t=Math.acos(kt.clamp(d.dot(e.c),-1,1));if(t<e.r){let r=1-t/e.r*(t/e.r);n-=e.d*r*r,i=Math.max(i,r)}else t<e.r*1.3&&(n+=e.d*.25*(1-(t-e.r)/(e.r*.3)))}let o=d.x*n*t.axes[0],h=d.y*n*t.axes[1],g=d.z*n*t.axes[2];if(t.taper){let e=1-t.taper*Math.max(0,d.z);o*=e}a.setXYZ(e,o,h,g);let _=kt.clamp(.25+(n-.7)*1.1-i*.35+d.y*.12,0,1),v=c.clone().lerp(l,_);u[e*3]=v.r,u[e*3+1]=v.g,u[e*3+2]=v.b}i.setAttribute(`color`,new gr(u,3)),i.computeVertexNormals(),i.userData.meanRadius=ff(i);let h=t.facetJitter??.16,g=i.getAttribute(`color`);for(let e=0;e<o;e+=3){let t=1-h/2+n.next()*h;for(let n=0;n<3;n++)g.setXYZ(e+n,g.getX(e+n)*t,g.getY(e+n)*t,g.getZ(e+n)*t)}return i}var hf={boulder:[{detail:2,axes:[1.05,.92,1],lumps:.6,fine:.2,craters:3,craterDepth:.22,dark:4012606,light:10129796},{detail:2,axes:[.95,1,1.08],lumps:.78,fine:.26,craters:2,craterDepth:.26,dark:4208954,light:9142392},{detail:2,axes:[1.1,.85,.95],lumps:.52,fine:.3,craters:4,craterDepth:.2,dark:3816258,light:9342099}],shard:[{detail:1,axes:[.62,.58,1.3],lumps:.7,fine:.25,craters:1,craterDepth:.15,dark:3487295,light:9210528,taper:.5,facetJitter:.24},{detail:1,axes:[.7,.5,1.25],lumps:.9,fine:.3,craters:0,craterDepth:.15,dark:4011328,light:10128024,taper:.35,facetJitter:.24},{detail:2,axes:[.66,.62,1.3],lumps:.8,fine:.2,craters:1,craterDepth:.14,dark:3160127,light:8557212,taper:.6,facetJitter:.2}],slab:[{detail:2,axes:[1.28,.5,1.15],lumps:.4,fine:.16,craters:6,craterDepth:.2,dark:4867392,light:10721930},{detail:2,axes:[1.15,.58,1.3],lumps:.5,fine:.2,craters:5,craterDepth:.24,dark:4538181,light:10129560},{detail:2,axes:[1.35,.45,1.05],lumps:.35,fine:.18,craters:7,craterDepth:.18,dark:4146248,light:9740452}],ore:[{detail:2,axes:[1.02,.95,1],lumps:.62,fine:.22,craters:2,craterDepth:.22,dark:4862249,light:10514514},{detail:2,axes:[.98,1,1.05],lumps:.7,fine:.25,craters:2,craterDepth:.22,dark:5059624,light:10120272},{detail:2,axes:[1.06,.9,.98],lumps:.55,fine:.26,craters:3,craterDepth:.2,dark:4533804,light:10253400}]};function gf(e,t){let n=`${e}:${t}`,r=df.get(n);if(r)return r;let i=t%3;switch(e){case Y.Boulder:r=mf(100+i*31,hf.boulder[i]);break;case Y.Shard:r=mf(200+i*37,hf.shard[i]);break;case Y.Slab:r=mf(300+i*41,hf.slab[i]);break;case Y.Ore:r=mf(400+i*43,hf.ore[i]);break;default:r=vf()}return df.set(n,r),r}function _f(e){let t=`crystals:${e%3}`,n=df.get(t);if(n)return n;let r=new Ad(500+e%3*53),i=[];for(let e=0;e<6;e++){let e=new V(r.range(-1,1),r.range(-.6,1),r.range(-1,1)).normalize(),t=r.range(.32,.55),n=new ca(r.range(.09,.14),t,5,1);n.translate(0,t/2+.8,0);let a=new At().setFromUnitVectors(new V(0,1,0),e);n.applyQuaternion(a);let o=new U(16756768).lerp(new U(16769658),r.next());i.push(Nd(Id(n),o))}return n=q(i),df.set(t,n),n}function vf(){let e=new Oo(1,1).getAttribute(`position`),t=e.count,n=[],r=[],i=new Ad(777),a=new V,o=new V,s=new V,c=new V,l=new U(2761252),u=new U(8006172);for(let d=0;d<t;d+=3){a.fromBufferAttribute(e,d),o.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),c.copy(a).add(o).add(s).multiplyScalar(1/3);let t=1.06+i.range(-.03,.08);for(let e of[a,o,s]){e.sub(c).multiplyScalar(.86).add(c).multiplyScalar(t),n.push(e.x,e.y,e.z);let a=l.clone().lerp(u,i.next()*.5);r.push(a.r,a.g,a.b)}}let d=new jr;return d.setAttribute(`position`,new yr(n,3)),d.setAttribute(`color`,new yr(r,3)),d.computeVertexNormals(),d}function yf(){let e=df.get(`nova-core`);return e||(e=new Oo(.86,2),df.set(`nova-core`,e)),e}function bf(){let e=df.get(`nova-cage`);if(e)return e;let t=[],n=16730658,r=new Po(1.22,.045,6,40);return t.push(Fd(r,n)),t.push(Fd(new Po(1.22,.045,6,40),n,{rot:[Math.PI/2,0,0]})),t.push(Fd(new Po(1.22,.045,6,40),n,{rot:[0,Math.PI/2,0]})),e=q(t),df.set(`nova-cage`,e),e}var xf=`
uniform float uFlash;
uniform float uCrack;
uniform float uFade;
uniform float uScorch;
uniform float uSeed;
uniform float uPulse;
uniform vec3 uRim;
uniform vec3 uCrackColor;
varying vec3 vObj;
float vcHash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vcNoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(vcHash(i), vcHash(i + vec3(1,0,0)), f.x), mix(vcHash(i + vec3(0,1,0)), vcHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(vcHash(i + vec3(0,0,1)), vcHash(i + vec3(1,0,1)), f.x), mix(vcHash(i + vec3(0,1,1)), vcHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
// Cellular noise. Returns the gap between the nearest and second nearest cell (z is the nearest cell's id).
vec3 vcWorley(vec3 p){
  vec3 ip = floor(p); vec3 fp = fract(p);
  float f1 = 9.0; float f2 = 9.0; float id = 0.0;
  for (int k = -1; k <= 1; k++) for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec3 g = vec3(float(i), float(j), float(k));
    vec3 c = ip + g;
    vec3 o = vec3(vcHash(c), vcHash(c + vec3(19.1, 7.3, 3.7)), vcHash(c + vec3(5.3, 23.7, 11.9)));
    vec3 r = g + o - fp;
    float d = dot(r, r);
    if (d < f1) { f2 = f1; f1 = d; id = vcHash(c + 3.3); } else if (d < f2) { f2 = d; }
  }
  return vec3(sqrt(f1), sqrt(f2), id);
}
`;function Sf(e){let t=new Go({vertexColors:!0,metalness:e.metalness,roughness:e.roughness,flatShading:!0,emissive:new U(e.emissive??0),emissiveIntensity:e.emissiveIntensity??1,envMapIntensity:e.envMapIntensity??1}),n=new U(e.rim??5930239).multiplyScalar(e.rimStrength??.5),r={uFlash:{value:0},uCrack:{value:0},uFade:{value:1},uScorch:{value:0},uSeed:{value:Math.random()*40},uRim:{value:n},uCrackColor:{value:new U(e.crackColor??16742938)},uPulse:{value:0}};t.userData.u=r;let i=e.grain===!0,a=e.panels===!0;return t.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vObj;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vObj = position;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${xf}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
        if (uFade < 0.995) {
          float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
          if (ign > uFade) discard;
        }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        ${i?`float vcG = vcNoise(vObj * 2.4 + uSeed) * 0.6 + vcNoise(vObj * 6.5 + uSeed) * 0.4; diffuseColor.rgb *= mix(0.68, 1.2, vcG);`:``}
        diffuseColor.rgb *= 1.0 - uScorch * 0.6 * vcNoise(vObj * 3.7 + uSeed);
        ${a?`{
          float pz = abs(fract(vObj.z * 0.9 + 0.31) - 0.5);
          float px = abs(fract(vObj.x * 1.15 + 0.17) - 0.5);
          float seam = max(smoothstep(0.475, 0.5, pz), smoothstep(0.478, 0.5, px));
          diffuseColor.rgb *= 1.0 - 0.42 * seam;
        }`:``}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        if (uCrack > 0.001) {
          vec3 w1 = vcWorley(vObj * 2.3 + uSeed);
          vec3 w2 = vcWorley(vObj * 4.6 + uSeed * 1.3);
          float e1 = 1.0 - smoothstep(0.0, 0.05 + 0.09 * uCrack, w1.y - w1.x);
          float e2 = 1.0 - smoothstep(0.0, 0.04 + 0.05 * uCrack, w2.y - w2.x);
          float g1 = smoothstep(w1.z * 0.85, w1.z * 0.85 + 0.15, uCrack);
          float g2 = smoothstep(0.35 + w2.z * 0.5, 0.55 + w2.z * 0.5, uCrack);
          float vcLine = e1 * g1 + e2 * g2 * 0.8;
          totalEmissiveRadiance += uCrackColor * vcLine * (0.6 + uCrack) * 2.4;
        }
        totalEmissiveRadiance += vec3(1.0, 0.72, 0.5) * uFlash * 0.55;
        totalEmissiveRadiance += uCrackColor * uPulse;
        float vcRim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.4);
        totalEmissiveRadiance += uRim * vcRim;`)},t.customProgramCacheKey=()=>`vc-surface-${i?`g`:`p`}${a?`s`:``}`,t}function Cf(e,t=1.6,n=!0){return new ci({color:new U(e).multiplyScalar(t),toneMapped:!1,fog:!1,transparent:n,blending:n?2:1,depthWrite:!1})}function wf(e,t=1.8){return new ci({color:new U(e).multiplyScalar(t),toneMapped:!1,fog:!1})}function Tf(e){let t=e.userData.u;t.uFlash.value=0,t.uCrack.value=0,t.uFade.value=1,t.uScorch.value=0,t.uPulse.value=0}var Ef=null;function Df(){if(Ef)return Ef;if(typeof document>`u`)return new qt;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,0.55)`),n.addColorStop(.45,`rgba(255,255,255,0.14)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),Ef=new ta(e),Ef.colorSpace=ze,Ef}function Of(e,t,n=1){let r=new ti(new Vr({map:Df(),color:new U(e).multiplyScalar(n),blending:2,depthWrite:!1,transparent:!0,toneMapped:!1,fog:!1}));return r.scale.setScalar(t),r}var kf=[{name:`Hornet`,hull:12104918,accent:14693439,trim:2829374,canopy:4892415,glow:6211839,wing:`delta`},{name:`W-Wing`,hull:15265268,accent:3110126,trim:2765120,canopy:16757310,glow:8380671,wing:`swept`},{name:`B-Wing`,hull:5922416,accent:15247148,trim:1842729,canopy:5894340,glow:16754250,wing:`broad`}];function Af(e){switch(e){case`delta`:return[[.45,-.95],[2.55,1],[2.62,1.72],[.45,1.78]];case`swept`:return[[.45,-.35],[2.7,-1.35],[2.72,-.35],[.45,1.75]];case`broad`:return[[.45,-.85],[2.3,-.7],[2.95,.7],[2.5,1.95],[.45,1.95]]}}var jf=[{z:-2.75,w:.05,top:.06,bot:.05},{z:-2.2,w:.22,top:.2,bot:.14},{z:-1.5,w:.46,top:.36,bot:.24},{z:-.6,w:.64,top:.5,bot:.3},{z:.4,w:.72,top:.52,bot:.34},{z:1.3,w:.7,top:.46,bot:.34},{z:2.2,w:.56,top:.36,bot:.3}];function Mf(e,t){let n=e.getAttribute(`position`);for(let e=0;e<n.count;e++)n.setY(e,n.getY(e)+Math.max(0,Math.abs(n.getX(e))-.45)*t);return e.computeVertexNormals(),e}var Nf=class{root=new On;body=new On;surfaces=[];flames=[];muzzles=[];podL=new On;podR=new On;finL=new W;finR=new W;shield;navL;navR;wingLamps;flameMats=[];style;damageAnchors=[new V(-2.5,.15,1.3),new V(2.5,.15,1.3),new V(-.6,.45,1),new V(.6,.45,1)];enginePositions=[new V(-.62,-.02,2.5),new V(.62,-.02,2.5)];muzzlePositions=[new V(-1.3,-.12,-.9),new V(1.3,-.12,-.9),new V(0,.05,-2)];constructor(e){this.style=e,this.root.add(this.body);let t=this.surface({metalness:.62,roughness:.36,rim:7310591,rimStrength:.45,panels:!0}),n=this.surface({metalness:.4,roughness:.42,rim:16747120,rimStrength:.35}),r=this.surface({metalness:.75,roughness:.5,rim:7377151,rimStrength:.3}),i=Rd(jf,e.hull,e.trim),a=Mf(zd(Af(e.wing),.1,.03,e.hull,.015),.06),o=Mf(zd([[.4,-2],[.62,-2],[1.6,-.3],[.4,-.3]],.05,.05,e.hull,.01),.02),s=q([J(.16,.12,2.1,e.hull,{pos:[0,.56,.75]}),J(.3,.08,.7,e.trim,{pos:[0,.6,1.5]})]),c=q([i,qd(a),qd(o),s]);this.body.add(new W(c,t));let l=qd(q([J(.05,.05,2.6,e.accent,{pos:[.62,.16,.2]}),J(1.9,.02,.14,e.accent,{pos:[1.5,.1,1]}),Hd(.08,.5,6,e.accent,{pos:[0,0,-2.3],rot:[-Math.PI/2,0,0]})]));this.body.add(new W(l,n));let u=Bd([[.2,.48],[1.75,.5],[2.35,1.3],[1.55,1.38]],.06,e.accent);u.rotateZ(.28),u.translate(-.46,0,0);let d=Bd([[.2,.48],[1.75,.5],[2.35,1.3],[1.55,1.38]],.06,e.accent);d.rotateZ(-.28),d.translate(.46,0,0),this.finL.geometry=u,this.finL.material=n,this.finR.geometry=d,this.finR.material=n,this.body.add(this.finL,this.finR);let f=qd(q([J(.18,.2,1,e.trim,{pos:[1.3,-.14,.05]}),Vd(.065,.065,1.55,8,e.trim,{pos:[1.3,-.15,-.85],rot:[Math.PI/2,0,0]}),Vd(.11,.11,.24,8,e.trim,{pos:[1.3,-.15,-1.55],rot:[Math.PI/2,0,0]})])),p=qd(q([J(.3,.2,.55,e.trim,{pos:[.68,.05,-.55]}),J(.22,.05,.5,e.trim,{pos:[.62,.3,.9]})])),m=q([J(.4,.04,.5,e.trim,{pos:[0,.62,1.55]}),J(.22,.05,.3,e.trim,{pos:[0,.56,-.2]}),J(.9,.03,.06,e.trim,{pos:[1.3,.09,.4]}),J(.9,.03,.06,e.trim,{pos:[-1.3,.09,.4]}),J(.6,.03,.06,e.trim,{pos:[1.6,.1,1.5]}),J(.6,.03,.06,e.trim,{pos:[-1.6,.1,1.5]}),J(.5,.1,1.2,e.trim,{pos:[0,-.38,.4]})]),h=qd(q([Vd(.3,.27,1.5,10,e.trim,{pos:[.62,-.02,1.85],rot:[Math.PI/2,0,0]}),Ud(.3,.05,6,12,e.hull,{pos:[.62,-.02,2.55]}),Vd(.34,.34,.12,10,e.accent,{pos:[.62,-.02,1.3],rot:[Math.PI/2,0,0]})]));this.body.add(new W(q([f,p,m,h]),r));let g=q([J(.22,.16,1.25,e.trim,{pos:[0,.03,0]}),Hd(.11,.4,6,e.hull,{pos:[0,.03,-.8],rot:[-Math.PI/2,0,0]}),Bd([[-.5,0],[.5,0],[.32,.55],[-.2,.6]],.05,e.accent).translate(0,.08,.1)]),_=new W(g,n);this.podR.add(_),this.podR.position.set(2.6,.12,1.15),this.podR.rotation.z=-.2;let v=new W(g,n);this.podL.add(v),this.podL.position.set(-2.6,.12,1.15),this.podL.rotation.z=.2,this.body.add(this.podL,this.podR);let y=new Mo(1,22,12,0,Math.PI*2,0,Math.PI/2);y.scale(.36,.3,.95),y.translate(0,.42,-.75);let b=new Go({color:e.canopy,metalness:.15,roughness:.08,emissive:new U(e.canopy).multiplyScalar(.55),emissiveIntensity:1});this.body.add(new W(y,b));let x=q([J(.04,.05,1.7,e.trim,{pos:[0,.72,-.78]}),J(.62,.04,.05,e.trim,{pos:[0,.5,-.5]}),J(.58,.04,.05,e.trim,{pos:[0,.46,-1]})]);this.body.add(new W(x,r)),this.navL=new W(new Mo(.08,8,6),wf(16724032,2.4)),this.navL.position.set(-2.68,.16,1.25),this.navR=new W(new Mo(.08,8,6),wf(3211120,2.4)),this.navR.position.set(2.68,.16,1.25),this.podL.add(this.navL),this.podR.add(this.navR),this.navL.position.set(-.08,.12,.1),this.navR.position.set(.08,.12,.1),this.wingLamps=wf(e.glow,2);let S=q([J(.05,.03,.9,e.glow,{pos:[1.55,.075,.5]}),J(.05,.03,.9,e.glow,{pos:[-1.55,.075,.5]})]);this.body.add(new W(S,this.wingLamps));for(let e=0;e<3;e++){let t=new W(new Mo(.16,8,6),Cf(11465471,3));t.position.copy(this.muzzlePositions[e]),t.position.z-=.75,t.scale.setScalar(.001),this.muzzles.push(t),this.body.add(t)}let C=new ca(.27,1,14,1,!0);C.translate(0,.5,0),C.rotateX(Math.PI/2);let w=new ca(.15,1,10,1,!0);w.translate(0,.5,0),w.rotateX(Math.PI/2);for(let t of this.enginePositions){let n=Cf(4892927,1.2),r=Cf(16777215,1.8),i=Cf(e.glow,2.4);this.flameMats.push(n,r,i);let a=new W(C,n),o=new W(w,r),s=new W(new oa(.3,12),i);a.position.copy(t),o.position.copy(t),s.position.copy(t),s.position.z-=.02,s.rotation.y=Math.PI,this.flames.push({outer:a,inner:o,glow:s}),this.body.add(a,o,s)}this.shield=new On;let T=new W(new Oo(2.9,2),new ci({color:new U(.25,.6,1.2),transparent:!0,opacity:.12,blending:2,depthWrite:!1,toneMapped:!1,fog:!1})),E=new W(new Oo(2.92,1),new ci({color:new U(.4,.8,1.6),wireframe:!0,transparent:!0,opacity:.35,blending:2,depthWrite:!1,toneMapped:!1,fog:!1}));this.shield.add(T,E),this.shield.visible=!1,this.shield.position.set(0,.1,.1),this.root.add(this.shield)}surface(e){let t=Sf(e);return this.surfaces.push(t),t}update(e,t){let n=this.body;n.rotation.z=e.roll,n.rotation.x=e.pitch,this.root.scale.setScalar(1+.34*e.boost),this.root.visible=!e.dead;let r=e.damage;this.podL.visible=r<.34,this.podR.visible=r<.56,this.finL.visible=r<.76;for(let n of this.surfaces){let i=n.userData.u;i.uFlash.value=Math.max(e.hitFlash,e.invulnerable&&Math.sin(t*60)>0?.28:0),i.uScorch.value=Math.min(1,r*1.15),i.uCrack.value=r>.3?Math.min(.85,(r-.3)*1.4):0}let i=e.thrust,a=.9+.1*Math.sin(t*60)+.05*Math.sin(t*97),o=(.55+i*.9+e.boost*1.2)*a,s=.8+e.boost*.15+(e.overclock?.12:0);for(let t=0;t<this.flames.length;t++){let n=this.flames[t];n.outer.scale.set(s,s,o),n.inner.scale.set(s*.9,s*.9,o*.62),n.glow.scale.setScalar(.8+i*.3+e.boost*.35);let r=n.outer.material,a=n.inner.material;e.stalled?(r.color.setRGB(2.4,.7,.15),a.color.setRGB(2.6,1.4,.4)):e.boost>.05?(r.color.setRGB(.4+e.boost*.4,.9+e.boost*.4,2.2),a.color.setRGB(2,2.2,2.6)):e.overclock?(r.color.setRGB(2.2,.9,.3),a.color.setRGB(3.2,2.4,1.2)):(r.color.setRGB(.3,.7,1.7),a.color.setRGB(1.5,1.8,2.4))}this.wingLamps.color.set(e.overclock?16752688:this.style.glow).multiplyScalar(2),this.navL.visible=Math.sin(t*6)>-.2,this.navR.visible=Math.sin(t*6+2)>-.2;for(let t=0;t<3;t++){let n=this.muzzles[t],r=e.muzzle[t];n.scale.setScalar(Math.max(.001,r*1.3))}if(this.shield.visible=e.shieldUp,e.shieldUp){this.shield.rotation.y=t*.6,this.shield.rotation.x=t*.3;let e=1+Math.sin(t*5)*.015;this.shield.scale.setScalar(e)}}revealAll(){this.shield.visible=!0,this.navL.visible=!0,this.navR.visible=!0,this.podL.visible=!0,this.podR.visible=!0,this.finL.visible=!0}reset(){this.shield.visible=!1;for(let e of this.surfaces)Tf(e);this.podL.visible=!0,this.podR.visible=!0,this.finL.visible=!0,this.root.visible=!0}dispose(){this.root.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose()})}},Pf=class{root=new On;surfaces=[];surface(e){let t=Sf(e);return this.surfaces.push(t),t}applySurface(e){let t=Math.max(0,1-e.hp)*.9;for(let n of this.surfaces){let r=n.userData.u;r.uFlash.value=e.flash,r.uFade.value=e.fade,r.uCrack.value=t,r.uScorch.value=Math.max(0,1-e.hp)*.7}}reset(){for(let e of this.surfaces)Tf(e)}},Ff=class extends Pf{eye;eyeMat;halo;ring;body=new On;constructor(){super();let e=this.surface({metalness:.85,roughness:.28,rim:16730682,rimStrength:.55,crackColor:16734762}),t=this.surface({metalness:.7,roughness:.45,rim:16730682,rimStrength:.4});this.root.add(this.body);let n=q([Wd(1,16,12,1381918,{scale:[.52,1.02,.78],pos:[.62,0,0]}),Ud(.86,.045,5,24,3816786,{scale:[.62,1.2,1],rot:[0,Math.PI/2,0],pos:[.62,0,.05]}),Hd(.13,.7,5,2763834,{pos:[1.05,.92,-.15],rot:[0,0,-.5]}),J(.42,.1,.5,2763834,{pos:[.98,-.1,-.3]})]);this.body.add(new W(qd(n),e));let r=q([J(.2,1.3,.34,2237487,{pos:[0,0,-.35]}),Vd(.13,.17,.5,6,1842728,{pos:[.22,-.72,-.5]}),Vd(.13,.17,.5,6,1842728,{pos:[-.22,-.72,-.5]}),J(.14,.14,.4,3816786,{pos:[0,.75,.05]})]);this.body.add(new W(r,t)),this.eyeMat=wf(16723992,2.2),this.eye=new W(new Mo(.3,14,10),this.eyeMat),this.eye.position.set(0,.02,.3),this.body.add(this.eye),this.ring=new W(new Po(.42,.03,6,20),Cf(16738864,1.6)),this.ring.position.set(0,.02,.32),this.body.add(this.ring),this.halo=Of(16722448,1.7,1),this.halo.position.copy(this.eye.position),this.body.add(this.halo);for(let e of[-.22,.22]){let t=new W(new ca(.1,.55,8,1,!0),Cf(5941503,1.8));t.geometry.rotateX(-Math.PI/2),t.position.set(e,-.72,-.98),t.rotation.y=Math.PI,t.geometry.translate(0,0,.27),this.body.add(t)}this.root.scale.setScalar(1.1)}update(e,t){this.applySurface(e),this.body.rotation.z=-e.bank*.6,this.body.rotation.y=Math.sin(t*1.3+e.spin)*.12,this.body.position.y=Math.sin(t*2.1+e.spin)*.06;let n=e.telegraph;this.eye.scale.setScalar(1+n*.6+e.flash*.3),this.halo.scale.setScalar(1.7+n*1.6),this.eyeMat.color.setRGB(2.2+n*1.2,.5+n*1,.3+n*.8),this.ring.rotation.z=t*(2+n*8)}};function If(e){let t=new Ba,n=1.9,r=1.35,i=-1.05;for(let e=0;e<=10;e++){let r=i+2.1*e/10,a=Math.cos(r)*n-1.2,o=Math.sin(r)*n;e===0?t.moveTo(a,o):t.lineTo(a,o)}for(let e=10;e>=0;e--){let n=i+2.1*e/10;t.lineTo(Math.cos(n)*r-1.05,Math.sin(n)*r*1.02)}let a=new To(t,{depth:.09,bevelEnabled:!1});return a.translate(0,0,-.045),Nd(Id(a),e)}var Lf=class extends Pf{blades=new On;eyeMat;edgeMat;constructor(){super();let e=this.surface({metalness:.8,roughness:.3,rim:16751162,rimStrength:.6,crackColor:16742938}),t=this.surface({metalness:.7,roughness:.38,rim:16752704,rimStrength:.65}),n=q([Fd(new ko(.62,0),1776678,{scale:[.9,.9,1.4]}),Hd(.28,.9,6,2895679,{pos:[0,0,-1],rot:[-Math.PI/2,0,0]}),J(.16,.16,.7,2895679,{pos:[0,.4,-.3]})]);this.root.add(new W(n,e));let r=qd(q([If(2369071)]));this.blades.add(new W(r,t)),this.edgeMat=wf(16747050,1.8);let i=new Po(1.9,.04,4,20,2);i.rotateZ(-1),i.translate(-1.2,0,0);let a=new W(i,this.edgeMat),o=a.clone();o.scale.x=-1,o.geometry=i,this.blades.add(a,o),this.root.add(this.blades),this.eyeMat=wf(16752688,2.2);let s=new W(new Mo(.2,10,8),this.eyeMat);s.position.set(0,0,.72),this.root.add(s);let c=Of(16742938,1.5,.9);c.position.copy(s.position),this.root.add(c);let l=new W(new ca(.16,.8,8,1,!0),Cf(16747066,1.8));l.geometry.translate(0,.4,0),l.geometry.rotateX(-Math.PI/2),l.position.set(0,0,-1.4),this.root.add(l)}update(e,t){this.applySurface(e),this.blades.rotation.z=e.spin+t*1.4+e.bank*.3;let n=e.telegraph;this.eyeMat.color.setRGB(2.2+n*2,1.3+n*2,.4+n*2),this.edgeMat.color.setRGB(2+n*2,.9+n,.25+n)}},Rf=[{z:-1.5,w:.55,top:.4,bot:.35},{z:-.5,w:1,top:.7,bot:.55},{z:.7,w:1.05,top:.72,bot:.55},{z:1.3,w:.8,top:.5,bot:.42}],zf=class extends Pf{lensMat;lens;halo;dish;constructor(){super();let e=this.surface({metalness:.78,roughness:.38,rim:16732224,rimStrength:.5,crackColor:16738848,panels:!0}),t=this.surface({metalness:.7,roughness:.5,rim:16732224,rimStrength:.4,crackColor:16738848}),n=q([Rd(Rf,2830141,1514020),Vd(.32,.36,2.4,10,1842986,{pos:[0,.05,1.6],rot:[Math.PI/2,0,0]}),Vd(.5,.5,.5,10,3093317,{pos:[0,.05,2.75],rot:[Math.PI/2,0,0]}),J(.5,.12,1,1579813,{pos:[0,.9,.2]}),J(1.2,.08,.3,1579813,{pos:[0,-.62,.6]})]);this.root.add(new W(n,e));let r=qd(q([zd([[.9,-1.3],[2.9,-.5],[3.1,.6],[.9,1]],.22,.12,3817298,.03),J(.16,.55,1.4,14170668,{pos:[2.85,.08,.05]}),Vd(.12,.12,1.6,6,1579813,{pos:[1.9,-.05,1.3],rot:[Math.PI/2,0,0]}),J(.7,.05,.14,16728112,{pos:[1.9,.16,.2]})]));this.root.add(new W(r,t)),this.dish=new W(q([Vd(.05,.05,.4,5,2237743,{pos:[0,1.15,.2]}),Fd(new Mo(.35,10,5,0,Math.PI*2,0,Math.PI/2),5593968,{pos:[0,1.35,.2],rot:[-.5,0,0]})]),t),this.root.add(this.dish),this.lensMat=wf(16722456,2),this.lens=new W(new Mo(.34,14,10),this.lensMat),this.lens.position.set(0,.05,3.05),this.root.add(this.lens),this.halo=Of(16722448,2.4,.9),this.halo.position.copy(this.lens.position),this.root.add(this.halo);for(let e of[-1.3,1.3]){let t=new W(new ca(.22,1.1,8,1,!0),Cf(5941503,1.6));t.geometry.translate(0,.55,0),t.geometry.rotateX(-Math.PI/2),t.position.set(e,-.05,-1.3),this.root.add(t)}this.root.scale.setScalar(1.05)}update(e,t){this.applySurface(e);let n=e.telegraph;this.lens.scale.setScalar(1+n*.6),this.halo.scale.setScalar(2.4+n*2.6),this.lensMat.color.setRGB(2+n*1.4,.4+n*.7,.3+n*.6),this.dish.rotation.y=t*1.5,this.root.rotation.z=-e.bank*.4}},Bf=class extends Pf{radar;lampMat;constructor(){super();let e=this.surface({metalness:.6,roughness:.5,rim:10288986,rimStrength:.4,crackColor:16752672}),t=this.surface({metalness:.7,roughness:.5,rim:10288986,rimStrength:.35}),n=q([Vd(.95,.95,3.4,6,5200698,{rot:[0,0,Math.PI/2]}),Vd(.62,.62,.5,6,2896676,{pos:[1.9,0,0],rot:[0,0,Math.PI/2]}),Vd(.62,.62,.5,6,2896676,{pos:[-1.9,0,0],rot:[0,0,Math.PI/2]}),J(3,.14,.5,15254058,{pos:[0,.92,.3]}),J(.8,.5,.9,2896676,{pos:[0,.75,.35]})]);this.root.add(new W(n,e));let r=q([J(.24,.6,.96,1710618,{pos:[-1.1,0,.7],rot:[0,0,.5]}),J(.24,.6,.96,1710618,{pos:[-.5,0,.7],rot:[0,0,.5]}),J(.24,.6,.96,1710618,{pos:[.1,0,.7],rot:[0,0,.5]}),J(.24,.6,.96,1710618,{pos:[.7,0,.7],rot:[0,0,.5]}),J(.24,.6,.96,1710618,{pos:[1.3,0,.7],rot:[0,0,.5]})]);this.root.add(new W(r,t));let i=q([J(3,.1,.16,2237980,{pos:[0,-1.05,0]}),...[-1.1,-.37,.37,1.1].map(e=>Fd(new Oo(.34,0),3816773,{pos:[e,-1.32,0]}))]);this.root.add(new W(i,t)),this.lampMat=wf(8060730,2);let a=q([...[-1.2,-.4,.4,1.2].map(e=>Wd(.09,6,4,16777215,{pos:[e,.3,.98]}))]);this.root.add(new W(a,this.lampMat)),this.radar=new W(q([Vd(.04,.04,.5,5,2237743,{pos:[0,1.5,.35]}),J(.9,.06,.3,9080734,{pos:[0,1.78,.35]})]),t),this.root.add(this.radar);let o=new W(new ca(.3,1.2,8,1,!0),Cf(8060762,1.4));o.geometry.translate(0,.6,0),o.geometry.rotateZ(-Math.PI/2),o.position.set(2.15,0,0),this.root.add(o);let s=o.clone();s.scale.x=-1,s.position.x=-2.15,this.root.add(s),this.root.scale.setScalar(1)}update(e,t){this.applySurface(e),this.radar.rotation.y=t*2.2,this.lampMat.color.setRGB(1.2,2.4,.6).multiplyScalar(.6+.4*Math.sin(t*8))}},Vf=class extends Pf{light;lightMat;constructor(){super();let e=this.surface({metalness:.85,roughness:.35,rim:16738864,rimStrength:.55}),t=[Fd(new Oo(.62,1),3816776)],n=new Oo(1,0).getAttribute(`position`),r=new Set;for(let e=0;e<n.count;e++){let i=new V().fromBufferAttribute(n,e),a=i.toArray().map(e=>e.toFixed(3)).join(`,`);if(r.has(a))continue;r.add(a),i.normalize();let o=new ca(.11,.55,5);o.translate(0,.89,0),o.applyQuaternion(new At().setFromUnitVectors(new V(0,1,0),i)),t.push(Nd(Id(o),9211804))}t.push(Ud(.64,.05,5,20,13208362,{rot:[Math.PI/2,0,0]})),this.root.add(new W(q(t),e)),this.lightMat=wf(16722456,2.4),this.light=new W(new Mo(.17,8,6),this.lightMat),this.light.position.set(0,0,.6),this.root.add(this.light);let i=Of(16722448,1.2,.8);i.position.copy(this.light.position),this.root.add(i)}update(e,t){this.applySurface(e),this.root.rotation.y=t*.9,this.root.rotation.x=t*.6;let n=Math.sin(t*9)>0?1:.15;this.lightMat.color.setRGB(2.6*n,.4*n,.25*n),this.light.scale.setScalar(.8+n*.5)}},Hf={spawnZ:-215,killZ:3.2,fogFar:230},Uf={fovBase:62,fovBoost:84,distance:8.4,height:3.1,pitchDeg:9,pullBack:1.2,followX:.42,followY:.32,shipBelowCursor:.2,cursorMinX:-.96,cursorMaxX:.96,cursorMinY:-.62,cursorMaxY:.78,shipMinX:-.72,shipMaxX:.72,shipMinY:-.62,shipMaxY:.5},Wf={hitRadius:1.15,followRate:11,idleDrain:.35,boostDrain:19,overclockCost:26,overclockTime:7,overclockKillBonus:.45,fuelCellValue:24,repairValue:30,invulnTime:.95,stallHullBleed:1.6,stallSpeedMul:.5,stallFireMul:.6,ramFuelCost:3.5},Gf={base:36,boost:78,stall:20,response:5,perSector:2.5},Kf={rock:[120,70,35,12],scout:150,weaver:220,lancer:600,mine:40,layer:300,boss:5e3,pickup:25,graze:30,gate:400,extract:3e3,maxMult:8,chainWindow:3.1,killsPerMult:5},qf={rock:[34,20,10,4.5],scoutBolt:12,weaverBolt:9,lancerBolt:28,bossBolt:14,mine:22,nova:36,droneRam:10,bossRam:30},Jf={stationZ:-54,plateRing:15,plateRadius:4.9,coreRadius:5.4,ringSquash:.62,designRing:12},Yf=Jf.coreRadius*Jf.designRing/Jf.plateRing;function Xf(){let e=new Ba,t=3.9,n=2.5;e.moveTo(-3.9,-1.75),e.lineTo(-2.925,n),e.lineTo(t*.75,n),e.lineTo(t,-1.75),e.lineTo(t*.6,-2.5),e.lineTo(-2.34,-2.5);let r=new To(e,{depth:1.2,bevelEnabled:!0,bevelSize:.15,bevelThickness:.15,bevelSegments:1});return r.translate(0,0,-.6),Nd(Id(r),4212314),q([r,q([J(.3,4.4,.35,2764350,{pos:[-1.5,0,.8]}),J(.3,4.4,.35,2764350,{pos:[1.5,0,.8]}),J(6.4,.3,.35,2764350,{pos:[0,1.4,.8]}),J(2.4,.5,.3,14174250,{pos:[0,-.5,.85]})])])}var Zf=class{root=new On;plates=[];plateSurfaces=[];bodySurface;shutters=[];innerRing=new On;eyeMat;eye;eyeHalo;lamps;constructor(){let e=Jf.designRing,t=Jf.ringSquash;this.root.scale.setScalar(Jf.plateRing/Jf.designRing),this.bodySurface=Sf({metalness:.8,roughness:.42,rim:16732208,rimStrength:.6,crackColor:16742938});let n=[],r=Ud(e,.75,8,48,3290952);r.scale(1,t,1),n.push(r);for(let r=0;r<24;r++){let i=r/24*Math.PI*2;n.push(J(1.1,.5,1.3,r%3==0?14174250:4870248,{pos:[Math.cos(i)*e,Math.sin(i)*e*t,.2],rot:[0,0,i]}))}for(let r=0;r<8;r++){let i=r/8*Math.PI*2+Math.PI/8;n.push(Hd(.35,2.4,5,5922938,{pos:[Math.cos(i)*(e+1.5),Math.sin(i)*(e+1.5)*t,0],rot:[0,0,i-Math.PI/2]}))}for(let r=0;r<4;r++){let i=r/4*Math.PI*2,a=e*.62;n.push(J(a,.6,.9,2895936,{pos:[Math.cos(i)*a*.5*1.25,Math.sin(i)*a*.5*t*1.25,-.1],rot:[0,0,Math.atan2(Math.sin(i)*t,Math.cos(i))]}))}this.root.add(new W(q(n),this.bodySurface));let i=q([Wd(Yf*.98,20,14,2303797,{pos:[0,0,-.6]}),Ud(Yf*1.02,.35,6,32,9062960,{pos:[0,0,.3]}),Ud(Yf*.75,.25,6,32,4870248,{pos:[0,0,1.3]})]);this.root.add(new W(i,this.bodySurface));let a=q([(()=>{let e=new Ba;return e.moveTo(0,.4),e.lineTo(Yf*.45,Yf*.95),e.lineTo(-Yf*.45,Yf*.95),Nd(Id(new To(e,{depth:.5,bevelEnabled:!1})),3949142)})()]);for(let e=0;e<6;e++){let t=new On;t.position.z=2,t.rotation.z=e/6*Math.PI*2;let n=new W(a,this.bodySurface);t.add(n),this.shutters.push(t),this.root.add(t)}this.eyeMat=wf(16726554,2.4),this.eye=new W(new Mo(Yf*.55,18,12),this.eyeMat),this.eye.position.z=1.4,this.root.add(this.eye),this.eyeHalo=Of(16722448,Yf*3,1),this.eyeHalo.position.z=1.4,this.root.add(this.eyeHalo);let o=[Ud(Yf*1.5,.3,6,36,4870248)];for(let e=0;e<12;e++){let t=e/12*Math.PI*2;o.push(Hd(.3,1.1,4,14174250,{pos:[Math.cos(t)*Yf*1.5,Math.sin(t)*Yf*1.5,0],rot:[0,0,t-Math.PI/2]}))}this.innerRing.add(new W(q(o),this.bodySurface)),this.innerRing.position.z=.6,this.root.add(this.innerRing);let s=Xf();for(let e=0;e<4;e++){let e=Sf({metalness:.75,roughness:.45,rim:16736320,rimStrength:.6,crackColor:16742938});this.plateSurfaces.push(e);let t=new On;t.add(new W(s,e)),this.plates.push(t),this.root.add(t)}this.lamps=wf(16756784,2.4);let c=[];for(let n=0;n<16;n++){let r=n/16*Math.PI*2+.1;c.push(Vd(.12,.12,.2,6,16777215,{pos:[Math.cos(r)*e,Math.sin(r)*e*t,1],rot:[Math.PI/2,0,0]}))}this.root.add(new W(q(c),this.lamps))}update(e){let t=Jf.designRing,n=Jf.ringSquash;for(let r=0;r<4;r++){let i=e.spin+e.plateAngles[r],a=this.plates[r];a.visible=e.plateHp[r]>0,a.position.set(Math.cos(i)*t,Math.sin(i)*t*n,1),a.rotation.z=Math.atan2(Math.sin(i)*n,Math.cos(i))+Math.PI/2;let o=this.plateSurfaces[r].userData.u;o.uFlash.value=e.plateFlash[r],o.uCrack.value=Math.max(0,1-e.plateHp[r])*.9,o.uScorch.value=Math.max(0,1-e.plateHp[r])*.6}this.root.rotation.z=0;for(let t=0;t<6;t++){let n=this.shutters[t],r=t/6*Math.PI*2;n.rotation.z=r+e.coreOpen*.42*(t%2?1:-1),n.position.z=2+e.coreOpen*.6,n.scale.setScalar(1-e.coreOpen*.35)}this.innerRing.rotation.z=-e.spin*1.6;let r=this.bodySurface.userData.u;r.uFlash.value=e.coreFlash,r.uScorch.value=e.dying*.9,r.uCrack.value=e.dying;let i=e.telegraph,a=.7+e.coreOpen*1.2+i*2;this.eyeMat.color.setRGB(2.4*a,(.5+i*2)*a,.3*a),this.eye.scale.setScalar(.8+e.coreOpen*.5+i*.4+Math.sin(e.time*6)*.04),this.eyeHalo.scale.setScalar(Yf*(2.4+e.coreOpen*2+i*2.5)),this.lamps.color.setRGB(2.4,1.3,.3).multiplyScalar(.55+.45*Math.sin(e.time*5))}reset(){Tf(this.bodySurface);for(let e of this.plateSurfaces)Tf(e)}},Qf=[4905215,16756782,16730840,5963642],$f=[4890879,16734794,16747050,4915152,16769098],ep=class{root=new On;inner=new On;surfaces=[];constructor(){this.root.add(this.inner)}surface(e){let t=Sf(e);return this.surfaces.push(t),t}fade(e){for(let t of this.surfaces)t.userData.u.uFade.value=e}reset(){for(let e of this.surfaces)Tf(e)}},tp=class extends ep{ringA;ringB;shaft;halo;beaconRing;beacon=!1;constructor(){super();let e=this.surface({metalness:.8,roughness:.35,rim:7002367,rimStrength:.6}),t=q([Vd(.52,.52,.14,12,4871528,{pos:[0,.68,0]}),Vd(.52,.52,.14,12,4871528,{pos:[0,-.68,0]}),...[0,1,2,3].map(e=>{let t=e/4*Math.PI*2+Math.PI/4;return J(.08,1.3,.08,8753832,{pos:[Math.cos(t)*.5,0,Math.sin(t)*.5]})}),Hd(.16,.3,6,13687014,{pos:[0,.9,0]}),Hd(.16,.3,6,13687014,{pos:[0,-.9,0],rot:[Math.PI,0,0]})]);this.inner.add(new W(t,e));let n=new W(new sa(.34,.34,1.2,12),wf(8381695,2.6));this.inner.add(n),this.ringA=new W(new Po(.78,.035,6,30),Cf(7331071,2.2)),this.ringB=new W(new Po(.9,.03,6,30),Cf(16777215,1.6)),this.inner.add(this.ringA,this.ringB),this.halo=Of(3844351,4.2,.85),this.inner.add(this.halo),this.shaft=new W(new sa(.32,.9,90,10,1,!0),Cf(4903167,.5)),this.shaft.position.y=45,this.shaft.visible=!1,this.root.add(this.shaft),this.beaconRing=new W(new Po(1.7,.06,6,36),Cf(9103615,2)),this.beaconRing.visible=!1,this.root.add(this.beaconRing)}setBeacon(e){e!==this.beacon&&(this.beacon=e,this.shaft.visible=e,this.beaconRing.visible=e,this.inner.scale.setScalar(e?1.7:1))}update(e,t){if(this.fade(t),this.inner.rotation.y=e*1.6,this.inner.position.y=Math.sin(e*2.4)*.12,this.ringA.rotation.x=e*2.1,this.ringA.rotation.y=e*.7,this.ringB.rotation.z=e*-1.6,this.ringB.rotation.x=1.2,this.halo.scale.setScalar(4.2*(1+Math.sin(e*5)*.08)),this.beacon){let t=1+e*1.3%1*1.5;this.beaconRing.scale.setScalar(t),this.beaconRing.rotation.x=Math.PI/2,this.beaconRing.material.opacity=1-(t-1)/1.5}}},np=class extends ep{constructor(){super();let e=this.surface({metalness:.2,roughness:.45,rim:9502640,rimStrength:.5}),t=q([J(1.1,.85,.85,15659767),J(1.16,.12,.9,12108498,{pos:[0,.33,0]}),J(.5,.16,.2,8753832,{pos:[0,.55,0]}),J(.08,.5,.5,8753832,{pos:[.3,.65,0]})]);this.inner.add(new W(t,e));let n=wf(16724032,2.2),r=q([J(.5,.16,.06,16777215,{pos:[0,0,.45]}),J(.16,.5,.06,16777215,{pos:[0,0,.45]}),J(.5,.16,.06,16777215,{pos:[0,0,-.45]}),J(.16,.5,.06,16777215,{pos:[0,0,-.45]}),J(.5,.06,.16,16777215,{pos:[0,.45,0]}),J(.16,.06,.5,16777215,{pos:[0,.45,0]})]);this.inner.add(new W(r,n)),this.inner.add(Of(4259728,3.6,.6))}update(e,t){this.fade(t),this.inner.rotation.y=e*1.3,this.inner.rotation.x=Math.sin(e*1.7)*.25,this.inner.position.y=Math.sin(e*2.2)*.12}},rp=class extends ep{constructor(){super();let e=this.surface({metalness:.9,roughness:.28,rim:16769152,rimStrength:.6,emissive:5913608,emissiveIntensity:.9}),t=q([Gd(.5,15909194,{scale:[.8,.55,1.1]}),Gd(.28,16768890,{pos:[.3,.2,-.2],rot:[.5,.4,0]})]);this.inner.add(new W(t,e)),this.inner.add(Of(16760896,2.2,.7))}update(e,t,n=0){this.fade(t),this.inner.rotation.y=e*3+n,this.inner.rotation.x=e*1.7+n}},ip=class extends ep{cage=new On;symbol=new On;type;constructor(e){super(),this.type=e;let t=Qf[e],n=this.surface({metalness:.85,roughness:.3,rim:t,rimStrength:.9}),r=[],i=.62;for(let e of[-.62,i])for(let t of[-.62,i])r.push(J(1.34,.09,.09,12108498,{pos:[0,e,t]}));for(let e of[-.62,i])for(let t of[-.62,i])r.push(J(.09,1.34,.09,12108498,{pos:[e,0,t]}));for(let e of[-.62,i])for(let t of[-.62,i])r.push(J(.09,.09,1.34,12108498,{pos:[e,t,0]}));for(let e of[-.62,i])for(let t of[-.62,i])for(let n of[-.62,i])r.push(J(.2,.2,.2,4871528,{pos:[e,t,n]}));this.cage.add(new W(q(r),n)),this.inner.add(this.cage);let a=wf(t,2.4),o;switch(e){case $d.Pulse:o=q([J(.13,.7,.13,t,{pos:[-.2,0,0]}),J(.13,.7,.13,t,{pos:[.2,0,0]})]);break;case $d.Scatter:o=q([-.5,0,.5].map(e=>Hd(.11,.7,6,t,{pos:[Math.sin(e)*.3,.1,0],rot:[0,0,-e]})));break;case $d.Lance:o=Gd(.25,t,{scale:[.35,.35,2.6]});break;default:o=q([Vd(.1,.1,.55,8,t,{rot:[Math.PI/2,0,0],pos:[0,0,.1]}),Hd(.1,.3,8,t,{rot:[-Math.PI/2,0,0],pos:[0,0,-.32]}),J(.5,.05,.16,t,{pos:[0,0,.32]})])}this.symbol.add(new W(o,a)),this.inner.add(this.symbol),this.inner.add(Of(t,3.6,.7))}update(e,t){this.fade(t),this.cage.rotation.y=e*1.2,this.cage.rotation.x=e*.7,this.symbol.rotation.y=-e*2.2,this.inner.position.y=Math.sin(e*2.1)*.15}},ap=class extends ep{emblem=new On;type;constructor(e){super(),this.type=e;let t=$f[e],n=this.surface({metalness:.85,roughness:.32,rim:t,rimStrength:.9}),r=q([Vd(.82,.82,.3,6,2764864,{rot:[Math.PI/2,0,0]}),Ud(.82,.07,5,6,12634328,{pos:[0,0,.16]}),Ud(.82,.07,5,6,12634328,{pos:[0,0,-.16]})]);this.inner.add(new W(r,n));let i=wf(t,2.4),a;switch(e){case 0:a=Ud(.38,.09,6,20,t,{pos:[0,0,.2]});break;case 1:a=q([Ud(.3,.09,6,14,t,{pos:[0,.05,.2]}),J(.18,.3,.09,t,{pos:[-.3,-.16,.2]}),J(.18,.3,.09,t,{pos:[.3,-.16,.2]})]);break;case 2:a=q([Hd(.3,.5,4,t,{pos:[0,.1,.2]}),Hd(.3,.5,4,t,{pos:[0,-.22,.2]})]);break;case 3:a=Vd(.24,.24,.6,10,t,{pos:[0,0,.2]});break;default:a=q([Hd(.17,.6,6,t,{pos:[-.2,0,.2]}),Hd(.17,.6,6,t,{pos:[.2,0,.2]})])}this.emblem.add(new W(a,i)),this.inner.add(this.emblem),this.inner.add(Of(t,3.6,.7))}update(e,t){this.fade(t),this.inner.rotation.y=Math.sin(e*1.4)*.7,this.inner.position.y=Math.sin(e*2.3)*.15}},op=class{root=new On;membrane;spin=new On;lamps;surfaces=[];extract;constructor(e){this.extract=e;let t=e?5963674:4905215,n=e?16765002:16734920,r=Sf({metalness:.8,roughness:.4,rim:t,rimStrength:.8});this.surfaces.push(r);let i=[];for(let e=0;e<6;e++){let t=e/6*Math.PI*2,r=(e+1)/6*Math.PI*2,a=(Math.cos(t)+Math.cos(r))/2,o=(Math.sin(t)+Math.sin(r))/2,s=J(1.02,.11,.2,4871528,{rot:[0,0,(t+r)/2+Math.PI/2],pos:[a,o,0]});i.push(s),i.push(J(.9,.035,.24,n,{rot:[0,0,(t+r)/2+Math.PI/2],pos:[a*.95,o*.95,.02]})),i.push(J(.16,.16,.32,8753832,{pos:[Math.cos(t),Math.sin(t),0]}))}i.push(...[0,1,2,3,4,5].map(e=>Hd(.07,.3,4,n,{pos:[Math.cos(e/6*6.283)*1.12,Math.sin(e/6*6.283)*1.12,0],rot:[0,0,e/6*6.283-Math.PI/2]}))),this.root.add(new W(q(i),r));let a=[];for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=(e+1)/6*Math.PI*2;for(let e=1;e<=3;e++){let r=e/4,i=(Math.cos(t)*(1-r)+Math.cos(n)*r)*.93,o=(Math.sin(t)*(1-r)+Math.sin(n)*r)*.93;a.push(Wd(.045,6,4,16777215,{pos:[i,o,.13]}))}}this.lamps=wf(t,2.6),this.root.add(new W(q(a),this.lamps)),this.membrane=new W(new oa(.93,6),new ci({color:new U(t).multiplyScalar(.7),transparent:!0,opacity:.12,blending:2,depthWrite:!1,side:2,toneMapped:!1,fog:!1})),this.membrane.rotation.z=Math.PI/6,this.root.add(this.membrane);let o=[];for(let e=0;e<12;e++){let t=e/12*Math.PI*2;o.push(Hd(.05,.16,3,n,{pos:[Math.cos(t)*1.32,Math.sin(t)*1.32,0],rot:[0,0,t-Math.PI/2]}))}if(this.spin.add(new W(q(o),wf(n,2.2))),e){let e=[];for(let t=0;t<8;t++){let n=.6+t*.5,r=.9-t*.05;e.push(J(.05,.05,.2,16777215,{pos:[-r,-.15,n]})),e.push(J(.05,.05,.2,16777215,{pos:[r,-.15,n]}))}this.root.add(new W(q(e),wf(16765002,2.4)))}this.root.add(this.spin)}update(e,t){this.spin.rotation.z=e*.6,this.membrane.rotation.z=Math.PI/6+Math.sin(e*.8)*.1,this.membrane.material.opacity=.09+.05*Math.sin(e*3);let n=.6+.4*Math.sin(e*6);this.lamps.color.setScalar(1).multiplyScalar(0).add(new U(this.extract?5963674:4905215).multiplyScalar(1.6+n*1.4));for(let e of this.surfaces)e.userData.u.uFade.value=t}reset(){for(let e of this.surfaces)Tf(e)}};function sp(e,t){switch(e){case Q.Weapon:return`weapon:${t}`;case Q.Module:return`module:${t}`;default:return`k:${e}`}}var cp=[`Cruisers`,`Asteroids`,`Drones`,`Pickups`,`Gates`,`Hive Gate boss`],lp=class{gr;page=0;group=new On;items=[];yaw=.5;pitch=.32;dist=14;target=new V;auto=!0;drag=!1;lastX=0;lastY=0;hud;boost=0;damage=0;constructor(e,t){this.gr=e,e.view.group.visible=!1,e.scene.add(this.group),this.hud=document.createElement(`div`),this.hud.style.cssText=`position:fixed;left:16px;top:12px;color:#dfe8ff;font:13px/1.5 monospace;text-shadow:0 1px 3px #000;pointer-events:none;white-space:pre`,t.appendChild(this.hud);let n=e.canvas;n.addEventListener(`pointerdown`,e=>{this.drag=!0,this.auto=!1,this.lastX=e.clientX,this.lastY=e.clientY}),window.addEventListener(`pointerup`,()=>{this.drag=!1}),window.addEventListener(`pointermove`,e=>{this.drag&&(this.yaw-=(e.clientX-this.lastX)*.008,this.pitch=kt.clamp(this.pitch+(e.clientY-this.lastY)*.006,-1.2,1.4),this.lastX=e.clientX,this.lastY=e.clientY)}),n.addEventListener(`wheel`,e=>{this.dist=kt.clamp(this.dist*(1+e.deltaY*.001),2,200),e.preventDefault()},{passive:!1}),window.addEventListener(`keydown`,e=>{let t=Number(e.key);t>=1&&t<=cp.length&&this.setPage(t-1),e.key===`b`&&(this.boost=this.boost>0?0:1),e.key===`d`&&(this.damage=(this.damage+.25)%1.25),e.key===`r`&&(this.auto=!this.auto)}),this.setPage(0)}setPage(e){this.page=e;for(let e of this.items)this.group.remove(e.obj);this.items=[];let t=(e,t,n,r=0,i=0,a)=>{e.position.set(n,r,i),this.group.add(e),this.items.push({obj:e,label:t,tick:a})};switch(e){case 0:kf.forEach((e,n)=>{let r=new Nf(e);t(r.root,e.name,(n-1)*7,0,0,e=>{r.update({roll:Math.sin(e*.8)*.4,pitch:0,thrust:.5+this.boost,boost:this.boost,stalled:!1,damage:this.damage,hitFlash:0,invulnerable:!1,overclock:!1,shieldUp:this.boost>0&&!1,muzzle:[Math.max(0,Math.sin(e*9)),Math.max(0,-Math.sin(e*9)),0],dead:!1},e)})}),this.dist=15;break;case 1:[Y.Boulder,Y.Shard,Y.Slab,Y.Ore,Y.Nova].forEach((e,n)=>{for(let r=0;r<(e===Y.Nova?1:3);r++){let i=Sf({metalness:.06,roughness:.92,grain:!0,rim:10466559,rimStrength:.26,envMapIntensity:.6});i.userData.u.uCrack.value=r===2?.8:r===1?.35:0;let a=gf(e,r),o=new On;if(o.add(new W(a,i)),o.scale.setScalar(2/pf(a)),e===Y.Ore){let e=new W(_f(r),wf(16752672,1.5));o.add(e)}e===Y.Nova&&o.add(new W(yf(),wf(16738850,2.6)),new W(bf(),Cf(16730658,2.2))),t(o,`${[`Boulder`,`Shard`,`Slab`,`Ore`,`Nova`][e]} ${r}`,r*6-6,0-n*5.5+11,0,e=>o.rotation.set(e*.2,e*.3,0))}}),this.target.set(0,0,0),this.dist=34;break;case 2:[[new Ff,`Scout`,0],[new Lf,`Weaver`,1],[new zf,`Lancer`,2],[new Bf,`Layer`,3],[new Vf,`Mine`,4]].forEach(([e,n],r)=>{t(e.root,n,(r-2)*7,0,0,t=>{e.update({flash:0,telegraph:(Math.sin(t*2)+1)/2,bank:Math.sin(t)*.4,hp:this.damage>0?1-this.damage:1,spin:t,fade:1},t)})}),this.dist=22;break;case 3:[[new tp,`Fuel cell`],[new np,`Repair kit`],[new rp,`Scrap`],[new ip(0),`Pulse`],[new ip(1),`Scatter`],[new ip(2),`Lance`],[new ip(3),`Seeker`],[new ap(0),`Shield`],[new ap(1),`Magnet`],[new ap(2),`Ram`],[new ap(3),`Tank`],[new ap(4),`Afterburner`]].forEach(([e,n],r)=>{let i=r%6,a=Math.floor(r/6);t(e.root,n,(i-2.5)*3.6,2-a*4,0,t=>e.update(t,1,r))}),this.dist=18;break;case 4:{let e=new op(!1),n=new op(!0);e.root.scale.setScalar(5),n.root.scale.setScalar(5),t(e.root,`Sector gate`,-6,0,0,t=>e.update(t,1)),t(n.root,`Extraction gate`,6,0,0,e=>n.update(e,1)),this.dist=26;break}default:{let e=new Zf;t(e.root,`Hive Gate`,0,0,0,t=>{e.update({spin:t*.5,plateAngles:[0,Math.PI/2,Math.PI,Math.PI*1.5],plateHp:[1,.6,this.damage>.5?0:1,1],plateFlash:[0,0,0,0],coreOpen:this.boost,coreFlash:0,telegraph:(Math.sin(t)+1)/4,dying:0,time:t})}),this.dist=46}}e!==1&&this.target.set(0,0,0)}setView(e,t,n){this.auto=!1,this.yaw=e,this.pitch=t,n!==void 0&&(this.dist=n)}update(e,t){this.auto&&(this.yaw+=e*.35);let n=this.gr.rig.camera;n.aspect=this.gr.aspect,n.fov=45,n.updateProjectionMatrix(),n.rotation.order=`YXZ`,n.position.set(this.target.x+Math.sin(this.yaw)*Math.cos(this.pitch)*this.dist,this.target.y+Math.sin(this.pitch)*this.dist,this.target.z+Math.cos(this.yaw)*Math.cos(this.pitch)*this.dist),n.lookAt(this.target);for(let e of this.items)e.tick?.(t);this.hud.textContent=`MODEL GALLERY  [${this.page+1}] ${cp[this.page]}\nkeys 1-${cp.length} page   drag orbit   wheel zoom   R auto-rotate   B boost/open   D damage\n`+this.items.map(e=>e.label).join(` | `),this.gr.renderCustom(e,this.boost)}};function up(e){return new URL(e,document.baseURI).toString()}var dp=`music-stage.music-boss.music-over.music-title.boost.engine.rumble.stardrive.alarm.death.falling.warp.zap.bigboom.shotgun.missile.gravity.zzzt.shot1.shot2.tesla.alien.explode.vb-boom.vb-explode1.vb-explode2.vb-fire.vb-fire1.vb-fire2`.split(`.`),fp=class{ctx=null;master;sfx;music;musicFilter;buffers=new Map;voices=0;lastPlayed=new Map;musicSource=null;musicGain=null;musicName=null;engineLoop=null;rumbleLoop=null;noiseBuffer=null;_muted=!1;held=!1;loaded=!1;info(){return{state:this.ctx?.state??`none`,buffers:this.buffers.size,voices:this.voices,music:this.musicName}}get muted(){return this._muted}async load(e){let t=window.AudioContext??window.webkitAudioContext;this.ctx=new t({latencyHint:`interactive`});let n=this.ctx;this.master=n.createGain();let r=n.createDynamicsCompressor();r.threshold.value=-14,r.knee.value=12,r.ratio.value=5,r.attack.value=.004,r.release.value=.18,this.sfx=n.createGain(),this.sfx.gain.value=.9,this.music=n.createGain(),this.music.gain.value=.5,this.musicFilter=n.createBiquadFilter(),this.musicFilter.type=`lowpass`,this.musicFilter.frequency.value=14e3,this.musicFilter.Q.value=.7,this.sfx.connect(r),this.music.connect(this.musicFilter).connect(r),r.connect(this.master).connect(n.destination);let i=n.createBuffer(1,n.sampleRate,n.sampleRate),a=i.getChannelData(0);for(let e=0;e<a.length;e++)a[e]=Math.random()*2-1;this.noiseBuffer=i;let o=0;await Promise.all(dp.map(async t=>{try{let e=await(await fetch(up(`assets/audio/${t}.ogg`))).arrayBuffer();this.buffers.set(t,await n.decodeAudioData(e))}catch{}o++,e?.(o/dp.length)})),this.loaded=!0}disable(){this.ctx?.close().catch(()=>{}),this.ctx=null,this.musicName=null,this.musicSource=null,this.musicGain=null,this.engineLoop=null,this.rumbleLoop=null}unlock(){this.held||this.ctx&&this.ctx.state!==`running`&&this.ctx.resume()}setMuted(e){this._muted=e,this.ctx&&this.master.gain.setTargetAtTime(+!e,this.ctx.currentTime,.02)}duck(e=.25,t=.45){if(!this.ctx)return;let n=this.ctx.currentTime;this.music.gain.cancelScheduledValues(n),this.music.gain.setTargetAtTime(.5*t,n,.02),this.music.gain.setTargetAtTime(.5,n+e,.25)}pause(e){this.held=e,this.ctx&&(e?this.ctx.suspend():this.ctx.resume())}pan(e){if(e===void 0||!this.ctx)return null;let t=this.ctx.createStereoPanner();return t.pan.value=K(e/16,-1,1)*.75,t}distGain(e){return e===void 0?1:K(1-Math.max(0,-e)/320,.3,1)}playFile(e,t={},n=.03){let r=this.ctx,i=this.buffers.get(e);if(!r||!i||r.state!==`running`)return!1;let a=r.currentTime,o=e;if(a-(this.lastPlayed.get(o)??-1)<n||this.voices>36)return!1;this.lastPlayed.set(o,a);let s=r.createBufferSource();s.buffer=i,s.playbackRate.value=t.rate??1;let c=r.createGain();c.gain.value=(t.vol??1)*this.distGain(t.z);let l=this.pan(t.x);return l?s.connect(c).connect(l).connect(this.sfx):s.connect(c).connect(this.sfx),this.voices++,s.onended=()=>{this.voices--},t.duration===void 0?s.start(0,t.offset??0):(s.start(0,t.offset??0,t.duration),c.gain.setValueAtTime(c.gain.value,a+Math.max(0,t.duration-.05)),c.gain.linearRampToValueAtTime(0,a+t.duration)),!0}tone(e){let t=this.ctx;if(!t||t.state!==`running`||this.voices>40)return;let n=t.currentTime+(e.delay??0),r=t.createOscillator();r.type=e.type??`sine`,r.frequency.setValueAtTime(e.freq,n),e.freq2!==void 0&&r.frequency.exponentialRampToValueAtTime(Math.max(20,e.freq2),n+e.dur);let i=t.createGain(),a=e.attack??.004,o=e.vol*this.distGain(e.z);i.gain.setValueAtTime(1e-4,n),i.gain.linearRampToValueAtTime(o,n+a),i.gain.exponentialRampToValueAtTime(1e-4,n+e.dur);let s=this.pan(e.x);s?r.connect(i).connect(s).connect(this.sfx):r.connect(i).connect(this.sfx),this.voices++,r.onended=()=>{this.voices--},r.start(n),r.stop(n+e.dur+.05)}noise(e){let t=this.ctx;if(!t||!this.noiseBuffer||t.state!==`running`||this.voices>40)return;let n=t.currentTime+(e.delay??0),r=t.createBufferSource();r.buffer=this.noiseBuffer,r.loop=!0;let i=t.createBiquadFilter();i.type=e.hp===void 0?`lowpass`:`highpass`,i.Q.value=e.q??.8;let a=e.hp??e.lp??2e3;i.frequency.setValueAtTime(a,n),e.lp2!==void 0&&i.frequency.exponentialRampToValueAtTime(Math.max(40,e.lp2),n+e.dur);let o=t.createGain();o.gain.setValueAtTime(e.vol*this.distGain(e.z),n),o.gain.exponentialRampToValueAtTime(1e-4,n+e.dur);let s=this.pan(e.x);s?r.connect(i).connect(o).connect(s).connect(this.sfx):r.connect(i).connect(o).connect(this.sfx),this.voices++,r.onended=()=>{this.voices--},r.start(n,Math.random()*.5),r.stop(n+e.dur+.05)}arp(e,t,n,r,i=.16){e.forEach((e,a)=>this.tone({freq:e,dur:i,type:n,vol:r,delay:a*t}))}cue(e,t=1,n=1,r,i){let a=this.ctx;if(!a||a.state!==`running`)return;let o=n,s={x:r,z:i};switch(e){case`shotPulse`:this.playFile(Math.random()<.5?`vb-fire1`:`vb-fire2`,{vol:.34*t,rate:o*1.05},.045),this.tone({freq:900*o,freq2:300,dur:.07,type:`square`,vol:.035});break;case`shotScatter`:this.playFile(`shotgun`,{vol:.75*t,rate:o},.05),this.noise({dur:.12,vol:.18,lp:3e3,lp2:400});break;case`shotLance`:this.playFile(`zap`,{vol:.75*t,rate:.7*o},.06),this.tone({freq:140,freq2:50,dur:.22,type:`sawtooth`,vol:.16});break;case`shotSeeker`:this.playFile(`missile`,{vol:.42*t,rate:1.15*o,duration:.55},.08);break;case`enemyShot`:this.tone({freq:720*o,freq2:200,dur:.2,type:`sawtooth`,vol:.07*t,...s}),this.playFile(`vb-fire`,{vol:.45*t,rate:.7*o,...s},.08);break;case`hit`:this.tone({freq:420*o,freq2:180*o,dur:.05,type:`triangle`,vol:.1*t,...s}),this.noise({dur:.05,vol:.09*t,hp:1800,...s});break;case`hitMetal`:this.tone({freq:1500*o,freq2:700,dur:.08,type:`square`,vol:.05*t,...s}),this.tone({freq:2300*o,freq2:1200,dur:.06,type:`triangle`,vol:.06*t,...s});break;case`boomSmall`:this.playFile(`vb-explode1`,{vol:.55*t,rate:1.15*o,...s},.04);break;case`boomMid`:this.playFile(`vb-explode2`,{vol:.75*t,rate:o,...s},.05),this.noise({dur:.25,vol:.14,lp:1600,lp2:200,...s});break;case`boomBig`:this.playFile(`bigboom`,{vol:.85*t,rate:.95*o,...s},.06),this.playFile(`vb-boom`,{vol:.6*t,rate:.8*o,...s},.06),this.duck(.35,.5);break;case`novaBoom`:this.playFile(`bigboom`,{vol:1*t,rate:.65},.1),this.playFile(`vb-boom`,{vol:.9*t,rate:.5},.1),this.tone({freq:90,freq2:28,dur:.9,type:`sine`,vol:.5}),this.noise({dur:.8,vol:.35,lp:4e3,lp2:120}),this.duck(.7,.3);break;case`rockCrash`:this.playFile(`explode`,{vol:.35*t,rate:.7+Math.random()*.3,...s},.05);break;case`ram`:this.playFile(`explode`,{vol:.6*t,rate:.9*o,...s},.05),this.tone({freq:240,freq2:70,dur:.18,type:`triangle`,vol:.16*t,...s}),this.duck(.2,.7);break;case`hurt`:this.playFile(`bigboom`,{vol:.95,rate:1.25},.05),this.playFile(`zzzt`,{vol:.9,rate:.8},.05),this.tone({freq:160,freq2:45,dur:.35,type:`sawtooth`,vol:.3}),this.noise({dur:.35,vol:.3,lp:5e3,lp2:300}),this.duck(.5,.25);break;case`shipDeath`:this.playFile(`death`,{vol:1},.1),this.playFile(`bigboom`,{vol:1,rate:.7},.1),this.duck(1.4,.15);break;case`shieldBreak`:this.playFile(`zzzt`,{vol:.9,rate:1.4},.05),this.tone({freq:1800,freq2:400,dur:.4,type:`triangle`,vol:.16});break;case`pickupFuel`:this.arp([523,659,784,1047],.05,`triangle`,.16),this.playFile(`warp`,{vol:.28,rate:1.6,duration:.5},.1);break;case`pickupRepair`:this.arp([659,988,1319],.06,`sine`,.2,.22);break;case`pickupScrap`:this.tone({freq:1100*o,freq2:1700*o,dur:.07,type:`square`,vol:.05});break;case`pickupWeapon`:this.playFile(`warp`,{vol:.55,rate:1.2,duration:1},.1),this.arp([392,523,659,784,1047],.055,`sawtooth`,.09,.2),this.duck(.5,.4);break;case`boost`:this.playFile(`boost`,{vol:.95},.15),this.tone({freq:90,freq2:320,dur:.6,type:`sawtooth`,vol:.18});break;case`boostEnd`:this.noise({dur:.5,vol:.2,lp:4e3,lp2:300});break;case`overclock`:this.playFile(`warp`,{vol:.7,rate:1.3},.1),this.arp([220,330,440,660],.06,`sawtooth`,.12,.25);break;case`overclockEnd`:this.tone({freq:500,freq2:120,dur:.4,type:`sawtooth`,vol:.12});break;case`alarm`:this.playFile(`alarm`,{vol:.55,duration:1.2},.5);break;case`stall`:this.playFile(`falling`,{vol:.9},.5),this.playFile(`alarm`,{vol:.6,duration:1.6},.5);break;case`restart`:this.tone({freq:200,freq2:900,dur:.4,type:`sawtooth`,vol:.16});break;case`graze`:this.noise({dur:.14,hp:1500,vol:.12*t,...s}),this.tone({freq:1600*o,freq2:2600*o,dur:.08,type:`sine`,vol:.08,...s});break;case`multUp`:this.arp([523*o,784*o,1047*o],.045,`square`,.05,.12);break;case`lancerFire`:this.playFile(`zap`,{vol:.9,rate:.5,...s},.1),this.playFile(`vb-boom`,{vol:.5,rate:1.1,...s},.1);break;case`mineDrop`:this.playFile(`tesla`,{vol:.28,rate:.7,...s},.15);break;case`gate`:this.playFile(`stardrive`,{vol:.7,duration:1.6},.2);break;case`sector`:this.playFile(`stardrive`,{vol:.85},.5),this.tone({freq:80,freq2:40,dur:.9,type:`sine`,vol:.3});break;case`extract`:this.playFile(`stardrive`,{vol:1},.5),this.arp([523,659,784,1047,1319],.08,`triangle`,.18,.4);break;case`supply`:this.arp([784,988,1175],.07,`sine`,.18,.3);break;case`bossRoar`:this.playFile(`gravity`,{vol:1,rate:.55},.3),this.tone({freq:70,freq2:35,dur:1.2,type:`sawtooth`,vol:.28}),this.duck(1,.35);break;case`deny`:this.tone({freq:150,dur:.18,type:`square`,vol:.13});break;case`novaTick`:this.tone({freq:1500,dur:.05,type:`square`,vol:.06,...s});break;case`ui`:this.tone({freq:660,freq2:880,dur:.06,type:`triangle`,vol:.1});break;case`select`:this.arp([440,660],.05,`square`,.07,.1)}}startLoop(e){let t=this.ctx,n=this.buffers.get(e);if(!t||!n)return null;let r=t.createBufferSource();r.buffer=n,r.loop=!0;let i=t.createGain();return i.gain.value=0,r.connect(i).connect(this.sfx),r.start(),{src:r,gain:i}}setEngine(e,t,n,r){let i=this.ctx;if(!i)return;e&&!this.engineLoop&&(this.engineLoop=this.startLoop(`engine`),this.rumbleLoop=this.startLoop(`rumble`));let a=i.currentTime;if(this.engineLoop){let i=e?r?.05:.22+t*.12:0;this.engineLoop.gain.gain.setTargetAtTime(i,a,.08),this.engineLoop.src.playbackRate.setTargetAtTime((r?.6:.8+t*.28)+n*.5,a,.1)}this.rumbleLoop&&(this.rumbleLoop.gain.gain.setTargetAtTime(e?n*.5:0,a,.1),this.rumbleLoop.src.playbackRate.setTargetAtTime(.9+n*.4,a,.1))}playMusic(e,t=1.2){let n=this.ctx;if(!n||e===this.musicName)return;this.musicName=e;let r=n.currentTime;if(this.musicSource&&this.musicGain){let e=this.musicSource;this.musicGain.gain.cancelScheduledValues(r),this.musicGain.gain.setValueAtTime(this.musicGain.gain.value,r),this.musicGain.gain.linearRampToValueAtTime(0,r+t),e.stop(r+t+.05),this.musicSource=null,this.musicGain=null}if(!e)return;let i=this.buffers.get(e);if(!i)return;let a=n.createBufferSource();a.buffer=i,a.loop=!0;let o=n.createGain();o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(1,r+t),a.connect(o).connect(this.music),a.start(),this.musicSource=a,this.musicGain=o}setIntensity(e,t){let n=this.ctx;if(!n)return;let r=3200+14e3*K(e,0,1)**1.2;this.musicFilter.frequency.setTargetAtTime(r,n.currentTime,.2),this.musicSource&&this.musicSource.playbackRate.setTargetAtTime(1+t*.05,n.currentTime,.3)}},pp=[{id:0,name:`HORNET`,blurb:`Balanced hull and tank. Twin pulse cannons.`,hull:100,fuel:100,speed:1,fuelUse:1,weapon:$d.Pulse,unlock:{kind:`free`,value:0}},{id:1,name:`W-WING`,blurb:`Quick and frugal, but thin armor. Starts with Scatter.`,hull:80,fuel:120,speed:1.16,fuelUse:.8,weapon:$d.Scatter,unlock:{kind:`score`,value:6e3}},{id:2,name:`B-WING`,blurb:`Heavy plating, slow turning, thirsty. Starts with Lance.`,hull:150,fuel:90,speed:.86,fuelUse:1.15,weapon:$d.Lance,unlock:{kind:`sector`,value:3}}];function mp(e,t){switch(e.unlock.kind){case`free`:return!0;case`score`:return t.best>=e.unlock.value;case`sector`:return t.bestSector>=e.unlock.value}}function hp(e){switch(e.unlock.kind){case`free`:return``;case`score`:return`Score ${e.unlock.value.toLocaleString(`en-US`)} in one run`;case`sector`:return`Reach sector ${e.unlock.value}`}}var gp=`void-cruiser-3d/save/v1`,_p=()=>({scores:[],best:0,bestSector:1,runs:0,cardsDone:0,ship:0,muted:!1,daily:{}}),vp=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t;function yp(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.score!=`number`||!Number.isFinite(t.score)?null:{score:t.score,sector:vp(t.sector,1),ship:Math.min(Math.max(Math.trunc(vp(t.ship,0)),0),pp.length-1),extracted:t.extracted===!0,daily:t.daily===!0,date:typeof t.date==`string`?t.date:``}}function bp(){try{let e=localStorage.getItem(gp);if(!e)return _p();let t=JSON.parse(e);if(!t||typeof t!=`object`)return _p();let n={};if(t.daily&&typeof t.daily==`object`)for(let[e,r]of Object.entries(t.daily))typeof r==`number`&&Number.isFinite(r)&&(n[e]=r);return{scores:Array.isArray(t.scores)?t.scores.map(yp).filter(e=>e!==null).slice(0,10):[],best:Math.max(vp(t.best,0),0),bestSector:Math.max(Math.trunc(vp(t.bestSector,1)),1),runs:Math.max(Math.trunc(vp(t.runs,0)),0),cardsDone:Math.max(Math.trunc(vp(t.cardsDone,0)),0),ship:Math.min(Math.max(Math.trunc(vp(t.ship,0)),0),pp.length-1),muted:t.muted===!0,daily:n}}catch{return _p()}}function xp(e){try{localStorage.setItem(gp,JSON.stringify(e))}catch{}}function Sp(e,t,n=0){let r=t.score>e.best;e.runs+=1,e.cardsDone+=n,e.best=Math.max(e.best,t.score),e.bestSector=Math.max(e.bestSector,t.sector),e.scores.push(t),e.scores.sort((e,t)=>t.score-e.score);let i=e.scores.indexOf(t)+1;return e.scores=e.scores.slice(0,8),t.daily&&(e.daily[t.date]=Math.max(e.daily[t.date]??0,t.score)),xp(e),{newBest:r,rank:i}}var Cp={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},wp=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Tp=new Is(-1,1,1,-1,0,1),Ep=new class extends jr{constructor(){super(),this.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new yr([0,2,0,0,2,0],2))}},Dp=class{constructor(e){this._mesh=new W(Ep,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Op=class extends wp{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Uo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bo.clone(e.uniforms),this.material=new Uo({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Dp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},kp=class extends wp{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ap=class extends wp{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},jp=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Op(Cp),this.copyPass.material.blending=0,this.timer=new Ws}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}kp!==void 0&&(r instanceof kp?n=!0:r instanceof Ap&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Mp={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Np=class extends wp{constructor(){super(),this.isOutputPass=!0,this.uniforms=Bo.clone(Mp.uniforms),this.material=new Wo({name:Mp.name,uniforms:this.uniforms,vertexShader:Mp.vertexShader,fragmentShader:Mp.fragmentShader}),this._fsQuad=new Dp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Pp=class extends wp{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new U}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Fp={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ip=class e extends wp{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new U(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Xt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Xt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Fp;this.highPassUniforms=Bo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Uo({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bo.clone(Cp.uniforms),this.blendMaterial=new Uo({uniforms:this.copyUniforms,vertexShader:Cp.vertexShader,fragmentShader:Cp.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new U,this._oldClearAlpha=1,this._basic=new ci,this._fsQuad=new Dp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Uo({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Uo({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ip.BlurDirectionX=new B(1,0),Ip.BlurDirectionY=new B(0,1);var Lp=[{tint:[1,.82,.68],fog:1707800,ring:16751194,star:[1,.9,.8]},{tint:[.55,1,.95],fog:530464,ring:4915160,star:[.8,1,1]},{tint:[1,.5,.95],fog:1837604,ring:16730848,star:[1,.8,1]},{tint:[1,.45,.4],fog:2361352,ring:16730682,star:[1,.8,.75]},{tint:[.6,.6,1.1],fog:657956,ring:6978303,star:[.85,.9,1]}],Rp=`
attribute vec3 aPos;
attribute float aSeed;
uniform float uScroll;
uniform float uRange;
uniform float uStreak;
uniform float uWidth;
uniform float uNear;
varying float vAlpha;
varying float vSide;
void main() {
  float z = mod(aPos.z + uScroll, uRange) - uRange + uNear;
  vec3 head = vec3(aPos.x, aPos.y, z);
  vec3 tail = vec3(aPos.x, aPos.y, z - uStreak * (0.6 + aSeed));
  vec4 vh = modelViewMatrix * vec4(head, 1.0);
  vec4 vt = modelViewMatrix * vec4(tail, 1.0);
  vec2 dir = vt.xy / max(-vt.z, 0.1) - vh.xy / max(-vh.z, 0.1);
  float len = length(dir);
  vec2 d = len > 1e-5 ? dir / len : vec2(0.0, 1.0);
  vec2 n = vec2(-d.y, d.x);
  vec4 v = mix(vh, vt, uv.y);
  float w = uWidth * (0.6 + aSeed * 0.9);
  v.xy += n * (uv.x - 0.5) * 2.0 * w * (uv.y < 0.5 ? 1.0 : 0.4);
  gl_Position = projectionMatrix * v;
  float depthFade = smoothstep(uRange - uNear, uRange * 0.55, -z + uNear) ;
  float nearFade = smoothstep(0.0, 6.0, -vh.z);
  vAlpha = (1.0 - uv.y) * (0.35 + aSeed * 0.65) * nearFade * (1.0 - depthFade * 0.7);
  vSide = uv.x;
}
`,zp=`
uniform vec3 uColor;
uniform float uBright;
varying float vAlpha;
varying float vSide;
void main() {
  float edge = 1.0 - abs(vSide - 0.5) * 2.0;
  gl_FragColor = vec4(uColor * uBright, vAlpha * edge);
}
`;function Bp(e,t,n,r,i){let a=new Ao(1,1),o=new zs;o.index=a.index,o.setAttribute(`position`,a.getAttribute(`position`)),o.setAttribute(`uv`,a.getAttribute(`uv`));let s=new Float32Array(e*3),c=new Float32Array(e),l=i,u=()=>(l=l*1664525+1013904223>>>0,l/4294967296);for(let i=0;i<e;i++){let e=(u()*2-1)*t,a=(u()*2-1)*n;Math.abs(e)<t*.12&&Math.abs(a)<n*.2&&(e+=Math.sign(e||1)*t*.18),s[i*3]=e,s[i*3+1]=a,s[i*3+2]=u()*r,c[i]=u()}o.setAttribute(`aPos`,new Ci(s,3)),o.setAttribute(`aSeed`,new Ci(c,1)),o.instanceCount=e;let d=new Uo({vertexShader:Rp,fragmentShader:zp,uniforms:{uScroll:{value:0},uRange:{value:r},uStreak:{value:2},uWidth:{value:.05},uNear:{value:12},uColor:{value:new U(1,1,1)},uBright:{value:1}},transparent:!0,depthWrite:!1,blending:2,side:2}),f=new W(o,d);return f.frustumCulled=!1,{mesh:f,mat:d}}var Vp=class{group=new On;sprites=[];constructor(e){e.colorSpace=ze;for(let t=0;t<16;t++){let n=e.clone();n.needsUpdate=!0,n.repeat.set(1/8,1/8);let r=new ti(new Vr({map:n,color:10129576,fog:!1,transparent:!0,depthWrite:!1,toneMapped:!1}));this.respawn(r,t),this.group.add(r),this.sprites.push({s:r,tex:n,speed:.02+t%5*.012,phase:t*3.7,spin:7+t%4*3})}}respawn(e,t){let n=t*2.399963%(Math.PI*2),r=260+t*97%380;e.position.set(Math.cos(n)*r*1.6,Math.sin(n)*r*.8,-900-t*53%500),e.scale.setScalar(26+t*31%40)}update(e,t,n,r){this.sprites.forEach((i,a)=>{i.s.position.z+=t*i.speed*e,i.s.position.z>-620&&this.respawn(i.s,a);let o=Math.floor((n*i.spin+i.phase)%64);i.tex.offset.set(o%8/8,1-(Math.floor(o/8)+1)/8),i.s.material.color.setRGB(.32*r.r+.1,.3*r.g+.1,.34*r.b+.12)})}},Hp=class{group=new On;stars;dust;rings=[];far;clock=0;ringMat=new Ii({color:16751194,transparent:!0,opacity:.32,depthWrite:!1,blending:2});nebula;galaxy;scroll=0;paletteIndex=0;tint=new U(1,1,1);fogColor=new U;ringColor=new U;starColor=new U;constructor(t,n,r){this.stars=Bp(950,150,85,320,7),this.dust=Bp(320,40,24,110,99),this.dust.mat.uniforms.uWidth.value=.055,this.dust.mat.uniforms.uNear.value=9,this.group.add(this.stars.mesh,this.dust.mesh),this.far=new Vp(r),this.group.add(this.far.group),t.colorSpace=ze,n.colorSpace=ze,t.wrapS=t.wrapT=e,this.nebula=new W(new Ao(1,1),new ci({map:t,color:6710886,fog:!1,depthWrite:!1,toneMapped:!1})),this.nebula.renderOrder=-10,this.galaxy=new W(new Ao(1,1),new ci({map:n,color:7368816,fog:!1,depthWrite:!1,toneMapped:!1,transparent:!0,opacity:.55,blending:2})),this.galaxy.renderOrder=-9,this.group.add(this.nebula,this.galaxy);let i=new jr().setFromPoints([new V(-24,-12,0),new V(24,-12,0),new V(24,12,0),new V(-24,12,0)]);for(let e=0;e<9;e++){let e=new Ki(i,this.ringMat);e.frustumCulled=!1,this.rings.push(e),this.group.add(e)}this.setPalette(0,!0)}get fog(){return this.fogColor}setPalette(e,t=!1){this.paletteIndex=K(e,0,Lp.length-1),t&&this.blend(1)}blend(e){let t=Lp[this.paletteIndex];this.tint.lerp(new U(...t.tint),e),this.fogColor.lerp(new U(t.fog),e),this.ringColor.lerp(new U(t.ring),e),this.starColor.lerp(new U(...t.star),e)}update(e,t,n,r,i){this.blend(K(e*.9,0,1)),this.clock+=e,this.far.update(e,t,this.clock,this.tint),this.scroll=i;let a=1.4+t*.055+n*3.4;for(let e of[this.stars,this.dust])e.mat.uniforms.uScroll.value=this.scroll,e.mat.uniforms.uStreak.value=e===this.stars?a*1.6:a,e.mat.uniforms.uColor.value.copy(this.starColor),e.mat.uniforms.uBright.value=Dd(.9,1.5,n);this.dust.mat.uniforms.uBright.value=Dd(.45,.95,n),this.nebula.material.color.setRGB(.17*this.tint.r,.17*this.tint.g,.17*this.tint.b),this.galaxy.material.color.setRGB(.2*this.tint.g,.19*this.tint.b,.24*this.tint.r);let o=900*Math.tan(r.fov*Math.PI/360)*1.18,s=o*r.aspect,c=Math.max(s/(4/3),o)*2;this.nebula.scale.set(4/3*c,c,1),this.nebula.position.copy(r.position).add(new V(0,0,-900).applyQuaternion(r.quaternion)),this.nebula.quaternion.copy(r.quaternion),this.nebula.rotateZ(Math.sin(i*4e-4)*.04),this.nebula.translateX(-r.position.x*1.5),this.nebula.translateY(-r.position.y*1.5+30);let l=o*.7;this.galaxy.scale.set(4/3*l,l,1),this.galaxy.position.copy(r.position).add(new V(s*.55,o*.45,-873).applyQuaternion(r.quaternion)),this.galaxy.quaternion.copy(r.quaternion),this.galaxy.rotateZ(.35+i*4e-5),this.galaxy.translateX(-r.position.x*1.2),this.ringMat.color.copy(this.ringColor),this.ringMat.opacity=.11+n*.2;let u=34*this.rings.length;for(let e=0;e<this.rings.length;e++){let t=(e*34+this.scroll)%u-u;this.rings[e].position.set(0,0,t+8)}}},Up=()=>({x:0,y:0,z:0,pitch:0,tanHalf:1,aspect:1.78,fovDeg:60});function Wp(e,t,n,r,i){return i.x=e*Uf.followX,i.y=Uf.height+t*Uf.followY,i.z=Uf.distance+Uf.pullBack*n,i.pitch=Uf.pitchDeg*Math.PI/180,i.fovDeg=Dd(Uf.fovBase,Uf.fovBoost,n),i.tanHalf=Math.tan(i.fovDeg*Math.PI/360),i.aspect=r,i}function Gp(e,t,n,r,i){let a=t-e.x,o=n-e.y,s=r-e.z,c=Math.sin(e.pitch),l=Math.cos(e.pitch),u=-o*c-s*l;if(u<.05)return-1;let d=o*l-s*c;return i.x=a/(u*e.tanHalf*e.aspect),i.y=d/(u*e.tanHalf),u}function Kp(e,t,n,r){let i=Math.sin(e.pitch),a=Math.cos(e.pitch),o=t*e.tanHalf*e.aspect,s=n*e.tanHalf,c=o,l=-i+s*a,u=-a-s*i,d=Math.hypot(c,l,u);return r.x=c/d,r.y=l/d,r.z=u/d,r}var qp=Up(),Jp={x:0,y:0,z:0};function Yp(e,t,n,r){let i=r.x,a=r.y;for(let r=0;r<5;r++){let r=Wp(i,a,0,n,qp);Kp(r,e,t,Jp);let o=-r.z/Jp.z;i=r.x+Jp.x*o,a=r.y+Jp.y*o}return r.x=i,r.y=a,r.z=0,r}var Xp=class{camera=new Ns(62,16/9,.3,1500);trauma=0;state=Up();fovKick=0;constructor(){this.camera.rotation.order=`YXZ`}addTrauma(e){this.trauma=K(this.trauma+e,0,1)}kickFov(e){this.fovKick=Math.max(this.fovKick,e)}update(e,t,n,r){let i=t.player,a=Wp(i.pos.x,i.pos.y,i.boost,r,this.state);this.trauma=Math.max(0,this.trauma-e*1.5),this.fovKick=Od(this.fovKick,0,6,e);let o=this.trauma*this.trauma,s=this.camera;s.aspect=r,s.fov=a.fovDeg+this.fovKick,s.updateProjectionMatrix();let c=(Math.sin(n*41.3)+Math.sin(n*27.1+1.3))*.5,l=(Math.sin(n*37.7+2.1)+Math.sin(n*23.9))*.5,u=Math.sin(n*31.7+.4);s.position.set(a.x+c*o*.9,a.y+l*o*.7,a.z),s.rotation.set(-a.pitch+l*o*.03,c*o*.03,u*o*.05)}},Zp=`
attribute float aSize;
attribute vec4 aColor;
uniform float uScale;
uniform float uMaxSize;
varying vec4 vColor;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.5), 0.0, uMaxSize);
  vColor = aColor;
}
`,Qp=`
varying vec4 vColor;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  if (d > 1.0) discard;
  float a = 1.0 - d;
  a *= a;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
}
`,$p=class{points;cap;pos;col;size;vel;life;maxLife;size0;size1;rgba0;drag;world;geo=new jr;head=0;live=0;mat;constructor(e,t){this.cap=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.rgba0=new Float32Array(e*4),this.drag=new Float32Array(e),this.world=new Uint8Array(e),this.geo.setAttribute(`position`,new gr(this.pos,3).setUsage(Ge)),this.geo.setAttribute(`aColor`,new gr(this.col,4).setUsage(Ge)),this.geo.setAttribute(`aSize`,new gr(this.size,1).setUsage(Ge)),this.mat=new Uo({vertexShader:Zp,fragmentShader:Qp,uniforms:{uScale:{value:800},uMaxSize:{value:t?34:200}},transparent:!0,depthWrite:!1,blending:t?2:1}),this.points=new Qi(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=t?5:4;for(let t=0;t<e;t++)this.pos[t*3+2]=99999}get liveCount(){return this.live}setScale(e){this.mat.uniforms.uScale.value=e}emit(e,t,n,r,i,a,o,s,c,l,u,d,f,p=1.5,m=!0){let h=this.head;this.head=(this.head+1)%this.cap,this.pos[h*3]=e,this.pos[h*3+1]=t,this.pos[h*3+2]=n,this.vel[h*3]=r,this.vel[h*3+1]=i,this.vel[h*3+2]=a,this.life[h]=o,this.maxLife[h]=o,this.size0[h]=s,this.size1[h]=c,this.rgba0[h*4]=l,this.rgba0[h*4+1]=u,this.rgba0[h*4+2]=d,this.rgba0[h*4+3]=f,this.drag[h]=p,this.world[h]=+!!m}update(e,t){let n=0;for(let r=0;r<this.cap;r++){let i=this.life[r];if(i<=0){this.size[r]=0;continue}let a=i-e;if(this.life[r]=a,a<=0){this.size[r]=0,this.pos[r*3+2]=99999;continue}n++;let o=Math.exp(-this.drag[r]*e),s=this.vel[r*3]*=o,c=this.vel[r*3+1]*=o,l=this.vel[r*3+2]*=o;this.pos[r*3]+=s*e,this.pos[r*3+1]+=c*e,this.pos[r*3+2]+=(l+(this.world[r]?t:0))*e;let u=1-a/this.maxLife[r];this.size[r]=this.size0[r]+(this.size1[r]-this.size0[r])*u;let d=(1-u)*(1-u);this.col[r*4]=this.rgba0[r*4],this.col[r*4+1]=this.rgba0[r*4+1],this.col[r*4+2]=this.rgba0[r*4+2],this.col[r*4+3]=this.rgba0[r*4+3]*d}this.live=n,this.geo.getAttribute(`position`).needsUpdate=!0,this.geo.getAttribute(`aColor`).needsUpdate=!0,this.geo.getAttribute(`aSize`).needsUpdate=!0}clear(){this.life.fill(0),this.size.fill(0)}},em=`
attribute vec4 aData; // x: frame progress 0..1, y: scale, z: alpha, w: unused
varying vec2 vUv;
varying float vAlpha;
uniform vec2 uGrid;
uniform float uFrames;
void main() {
  float frame = floor(aData.x * (uFrames - 0.001));
  float col = mod(frame, uGrid.x);
  float row = floor(frame / uGrid.x);
  vUv = (vec2(col, uGrid.y - 1.0 - row) + uv) / uGrid;
  vAlpha = aData.z;
  vec4 center = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vec3 offset = position * aData.y;
  gl_Position = projectionMatrix * (center + vec4(offset.xy, 0.0, 0.0));
}
`,tm=`
uniform sampler2D uMap;
varying vec2 vUv;
varying float vAlpha;
void main() {
  vec4 c = texture2D(uMap, vUv);
  gl_FragColor = vec4(c.rgb * 1.5 * vAlpha, c.a * vAlpha);
}
`,nm=class{mesh;cap=28;age=new Float32Array(this.cap).fill(99);dur=new Float32Array(this.cap).fill(1);x=new Float32Array(this.cap);y=new Float32Array(this.cap);z=new Float32Array(this.cap);scale=new Float32Array(this.cap);strength=new Float32Array(this.cap).fill(1);data;head=0;m=new $t;constructor(e){e.colorSpace=ze;let t=new Ao(1,1);this.data=new Ci(new Float32Array(this.cap*4),4),this.data.setUsage(Ge),t.setAttribute(`aData`,this.data);let n=new Uo({vertexShader:em,fragmentShader:tm,uniforms:{uMap:{value:e},uGrid:{value:new B(6,4)},uFrames:{value:23}},transparent:!0,depthWrite:!1,blending:2});this.mesh=new ji(t,n,this.cap),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.mesh.count=this.cap;for(let e=0;e<this.cap;e++)this.data.setXYZW(e,0,0,0,0)}spawn(e,t,n,r,i,a=1){r=Math.min(r,Math.max(3,(12-n)*.32));let o=this.head;this.strength[o]=a,this.head=(this.head+1)%this.cap,this.age[o]=0,this.dur[o]=i,this.x[o]=e,this.y[o]=t,this.z[o]=n,this.scale[o]=r}update(e,t){for(let n=0;n<this.cap;n++){this.age[n]+=e;let r=this.age[n]/this.dur[n];if(r>=1){this.data.setXYZW(n,0,0,0,0),this.m.makeTranslation(0,0,99999),this.mesh.setMatrixAt(n,this.m);continue}this.z[n]+=t*e*.85,this.m.makeTranslation(this.x[n],this.y[n],this.z[n]),this.mesh.setMatrixAt(n,this.m),this.data.setXYZW(n,r,this.scale[n]*(.75+r*.5),this.strength[n],0)}this.mesh.instanceMatrix.needsUpdate=!0,this.data.needsUpdate=!0}clear(){this.age.fill(99)}},rm=class{mesh;cap=14;age=new Float32Array(this.cap).fill(99);dur=new Float32Array(this.cap).fill(1);pos=new Float32Array(this.cap*3);radius=new Float32Array(this.cap);tint=new Float32Array(this.cap*3);head=0;m=new $t;q=new At;s=new V;p=new V;c=new U;constructor(){let e=new jo(.955,1,64),t=new ci({color:16777215,transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!1,fog:!1});this.mesh=new ji(e,t,this.cap),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.mesh.instanceColor=new Ci(new Float32Array(this.cap*3),3);for(let e=0;e<this.cap;e++)this.m.makeScale(0,0,0),this.mesh.setMatrixAt(e,this.m)}spawn(e,t,n,r,i,a,o,s){let c=this.head;this.head=(this.head+1)%this.cap,this.age[c]=0,this.dur[c]=s,this.pos[c*3]=e,this.pos[c*3+1]=t,this.pos[c*3+2]=n,this.radius[c]=r,this.tint[c*3]=i,this.tint[c*3+1]=a,this.tint[c*3+2]=o}update(e,t){for(let n=0;n<this.cap;n++){this.age[n]+=e;let r=this.age[n]/this.dur[n];if(r>=1){this.m.makeScale(0,0,0),this.mesh.setMatrixAt(n,this.m);continue}this.pos[n*3+2]+=t*e*.85;let i=1-(1-r)**3,a=Math.max(.01,this.radius[n]*i);this.p.set(this.pos[n*3],this.pos[n*3+1],this.pos[n*3+2]),this.s.set(a,a,1),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(n,this.m);let o=(1-r)*(1-r);this.c.setRGB(this.tint[n*3]*o,this.tint[n*3+1]*o,this.tint[n*3+2]*o),this.mesh.setColorAt(n,this.c)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.age.fill(99)}},im=class{mesh;cap=220;p=new Float32Array(this.cap*3);v=new Float32Array(this.cap*3);r=new Float32Array(this.cap*3);w=new Float32Array(this.cap*3);life=new Float32Array(this.cap);size=new Float32Array(this.cap);head=0;m=new $t;q=new At;e=new un;sc=new V;pv=new V;constructor(){let e=new No(1,0),t=new Go({color:9077624,roughness:.85,metalness:.1,flatShading:!0});this.mesh=new ji(e,t,this.cap),this.mesh.frustumCulled=!1,this.mesh.instanceColor=new Ci(new Float32Array(this.cap*3),3);for(let e=0;e<this.cap;e++)this.m.makeScale(0,0,0),this.mesh.setMatrixAt(e,this.m)}spawn(e,t,n,r,i,a,o,s){for(let c=0;c<r;c++){let r=this.head;this.head=(this.head+1)%this.cap;let c=o()*Math.PI*2,l=o()*2-1,u=Math.sqrt(1-l*l),d=a*(.4+o()*.9);this.p[r*3]=e+Math.cos(c)*u*i*.4,this.p[r*3+1]=t+Math.sin(c)*u*i*.4,this.p[r*3+2]=n+l*i*.4,this.v[r*3]=Math.cos(c)*u*d,this.v[r*3+1]=Math.sin(c)*u*d,this.v[r*3+2]=l*d*.8,this.r[r*3]=o()*6,this.r[r*3+1]=o()*6,this.r[r*3+2]=o()*6,this.w[r*3]=(o()-.5)*14,this.w[r*3+1]=(o()-.5)*14,this.w[r*3+2]=(o()-.5)*14,this.life[r]=.9+o()*.9,this.size[r]=(.1+o()*.22)*Math.max(.6,i*.5);let f=.6+o()*.6;this.mesh.setColorAt(r,new U(s.r*f,s.g*f,s.b*f))}}update(e,t){for(let n=0;n<this.cap;n++){if(this.life[n]<=0)continue;if(this.life[n]-=e,this.life[n]<=0){this.m.makeScale(0,0,0),this.mesh.setMatrixAt(n,this.m);continue}let r=Math.exp(-1.1*e);this.v[n*3]*=r,this.v[n*3+1]*=r,this.v[n*3+2]*=r,this.p[n*3]+=this.v[n*3]*e,this.p[n*3+1]+=this.v[n*3+1]*e,this.p[n*3+2]+=(this.v[n*3+2]+t)*e,this.r[n*3]+=this.w[n*3]*e,this.r[n*3+1]+=this.w[n*3+1]*e,this.r[n*3+2]+=this.w[n*3+2]*e,this.e.set(this.r[n*3],this.r[n*3+1],this.r[n*3+2]),this.q.setFromEuler(this.e);let i=this.size[n]*K(this.life[n]*2,0,1);this.sc.set(i,i,i),this.pv.set(this.p[n*3],this.p[n*3+1],this.p[n*3+2]),this.m.compose(this.pv,this.q,this.sc),this.mesh.setMatrixAt(n,this.m)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){this.m.makeScale(0,0,0);for(let e=0;e<this.cap;e++)this.life[e]>0&&this.mesh.setMatrixAt(e,this.m);this.mesh.instanceMatrix.needsUpdate=!0,this.life.fill(0)}},am={[Z.Pulse]:[.5,1.7,2.6],[Z.Pellet]:[2.6,1.7,.5],[Z.Lance]:[2.8,1,2.6],[Z.Missile]:[.7,2.6,.9],[Z.Enemy]:[2.8,.6,.3],[Z.Beam]:[3.4,.7,.5],[Z.Orb]:[2.8,.35,1.5]},om=class{core;glow;orbCore;orbGlow;m=new $t;q=new At;s=new V;p=new V;c=new U;dir=new V;zAxis=new V(0,0,1);constructor(e){let t=new sa(1,1,1,6,1,!0);t.rotateX(Math.PI/2);let n=new Oo(1,1),r=(t,n)=>{let r=new ji(t,new ci({color:16777215,toneMapped:!1,fog:!1,transparent:n,blending:n?2:1,opacity:n?.28:1,depthWrite:!n,side:2}),e);return r.frustumCulled=!1,r.instanceColor=new Ci(new Float32Array(e*3),3),r.count=0,r.renderOrder=n?7:3,r};this.core=r(t,!1),this.glow=r(t,!0),this.orbCore=r(n,!1),this.orbGlow=r(n,!0)}update(e){let t=0,n=0;for(let r of e.bolts.items){if(!r.alive)continue;let e=am[r.kind],i=r.kind===Z.Enemy||r.kind===Z.Orb,a=Math.hypot(r.vel.x,r.vel.y,r.vel.z)||1;if(this.dir.set(r.vel.x/a,r.vel.y/a,r.vel.z/a),this.p.set(r.pos.x,r.pos.y,r.pos.z),i){let t=1+Math.sin(r.age*22+r.pos.x)*.12,i=r.r*(r.kind===Z.Orb?1.05:1)*t;this.q.identity(),this.s.set(i,i,i),this.m.compose(this.p,this.q,this.s),this.orbCore.setMatrixAt(n,this.m),this.c.setRGB(e[0],e[1],e[2]),this.orbCore.setColorAt(n,this.c),this.s.set(i*2.6,i*2.6,i*2.6),this.m.compose(this.p,this.q,this.s),this.orbGlow.setMatrixAt(n,this.m),this.orbGlow.setColorAt(n,this.c),n++;continue}let o=3.8,s=r.r*.6;r.kind===Z.Pellet?(o=1.5,s=r.r*.5):r.kind===Z.Lance?(o=11,s=r.r*.5):r.kind===Z.Missile?(o=1.7,s=r.r*.5):r.kind===Z.Beam?(o=16,s=r.r*.55):r.kind===Z.Pulse&&r.tier>=3&&(o=4.2,s*=1.2),this.q.setFromUnitVectors(this.zAxis,this.dir),this.s.set(s,s,o),this.m.compose(this.p,this.q,this.s),this.core.setMatrixAt(t,this.m),this.c.setRGB(e[0]*1.1+.6,e[1]*1.1+.6,e[2]*1.1+.6),this.core.setColorAt(t,this.c),this.s.set(s*3.2,s*3.2,o*1.25),this.m.compose(this.p,this.q,this.s),this.glow.setMatrixAt(t,this.m),this.c.setRGB(e[0],e[1],e[2]),this.glow.setColorAt(t,this.c),t++}this.core.count=t,this.glow.count=t,this.orbCore.count=n,this.orbGlow.count=n;for(let e of[this.core,this.glow,this.orbCore,this.orbGlow])e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}},sm=[[.5,1.7,2.6],[2.8,.6,.35],[2.6,1.7,.5],[.7,2.6,.9],[2.6,2.6,2.6],[2.8,1,2.6]],cm=class{group=new On;sparks=new $p(2600,!0);smoke=new $p(500,!1);sprites;rings=new rm;debris=new im;bolts;lights=[];lightAge=[99,99];lightBase=[0,0];lightIndex=0;seed=12345;constructor(e){this.sprites=new nm(e),this.bolts=new om(260),this.group.add(this.sprites.mesh,this.rings.mesh,this.debris.mesh,this.smoke.points,this.sparks.points,this.bolts.core,this.bolts.glow,this.bolts.orbCore,this.bolts.orbGlow);for(let e=0;e<2;e++){let e=new Fs(16755285,0,60,1.6);this.lights.push(e),this.group.add(e)}}rnd=()=>(this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296);flashLight(e,t,n,r,i){let a=this.lightIndex;this.lightIndex=(this.lightIndex+1)%this.lights.length;let o=this.lights[a];o.position.set(e,t,n),o.color.set(i),this.lightAge[a]=0,this.lightBase[a]=r}spark(e,t,n,r,i,a,o=.5,s=.35){let c=sm[a]??sm[4];for(let a=0;a<r;a++){let r=this.rnd()*Math.PI*2,a=this.rnd()*2-1,l=Math.sqrt(1-a*a),u=i*(.35+this.rnd()*.85);this.sparks.emit(e,t,n,Math.cos(r)*l*u,Math.sin(r)*l*u,a*u,s*(.6+this.rnd()*.8),o*.55,.05,c[0],c[1],c[2],.95,2.4)}}trails(e){for(let t of e.bolts.items){if(!t.alive)continue;let e=am[t.kind];if(t.friendly){let n=t.kind===Z.Lance?1.6:t.kind===Z.Missile?1.3:1;this.sparks.emit(t.pos.x,t.pos.y,t.pos.z,0,0,0,t.kind===Z.Missile?.35:.16,t.r*1.3*n,.05,e[0]*.6,e[1]*.6,e[2]*.6,.75,3),t.kind===Z.Missile&&this.smoke.emit(t.pos.x,t.pos.y,t.pos.z,this.rnd()-.5,this.rnd()-.5,0,.6,.5,1.3,.3,.3,.3,.45,1.5)}else t.kind===Z.Beam?this.sparks.emit(t.pos.x,t.pos.y,t.pos.z,(this.rnd()-.5)*2,(this.rnd()-.5)*2,0,.3,.9,.05,e[0]*.5,e[1]*.5,e[2]*.5,.8,3):this.sparks.emit(t.pos.x,t.pos.y,t.pos.z,0,0,0,.22,t.r*1.2,.05,e[0]*.5,e[1]*.5,e[2]*.5,.7,3)}}explosion(e,t,n,r,i){let a=Math.max(r,.6),o=i===5,s=Math.min(1,Math.max(.22,(9.5-n-5)/22));this.sprites.spawn(e,t,n,a*(o?5.2:3.4)*(.45+.55*s),o?.9:.6,.35+.65*s);let c=o?5:i===6?1:2;this.spark(e,t,n,Math.round(10+a*9),10+a*6,c,.5+a*.08,.45+a*.06),this.spark(e,t,n,Math.round(4+a*2),6+a*3,4,.9,.3);for(let r=0;r<3+Math.round(a*1.4);r++){let r=this.rnd()*Math.PI*2,i=1+this.rnd()*4*(.6+a*.15);this.smoke.emit(e+Math.cos(r)*a*.3,t+Math.sin(r)*a*.3,n,Math.cos(r)*i,Math.sin(r)*i,this.rnd()*2,.9+this.rnd()*.8,a*1,a*2.4,.16,.14,.14,.6,1.4)}a>1.6&&s>.5&&this.rings.spawn(e,t,n,a*(o?3.4:2.2),o?2.6:1.2,o?.9:.8,o?2.4:.5,.42),this.flashLight(e,t,n,(24+a*16)*s,o?16738013:i===6?16742212:16755285)}update(e,t,n){this.sparks.setScale(n),this.smoke.setScale(n),this.sparks.update(e,t),this.smoke.update(e,t),this.sprites.update(e,t),this.rings.update(e,t),this.debris.update(e,t);for(let n=0;n<this.lights.length;n++){this.lightAge[n]+=e;let r=this.lightAge[n]/.32;this.lights[n].intensity=r>=1?0:this.lightBase[n]*(1-r)*(1-r),r<1&&(this.lights[n].position.z+=t*e*.8)}}clear(){this.sparks.clear(),this.smoke.clear(),this.sprites.clear(),this.rings.clear(),this.debris.clear(),this.lightAge.fill(99)}},lm={[X.Scout]:()=>new Ff,[X.Weaver]:()=>new Lf,[X.Lancer]:()=>new zf,[X.Layer]:()=>new Bf};function um(e){let[t,n]=e.split(`:`);if(t===`weapon`)return new ip(Number(n));if(t===`module`)return new ap(Number(n));switch(Number(n)){case Q.Fuel:return new tp;case Q.Repair:return new np;default:return new rp}}var dm=class{mesh;mat=Cf(16722456,1.6);constructor(){let e=new sa(1,1,1,6,1,!0);e.rotateX(Math.PI/2),e.translate(0,0,-.5),this.mesh=new W(e,this.mat),this.mesh.visible=!1,this.mesh.frustumCulled=!1,this.mesh.renderOrder=8}show(e,t,n,r,i){this.mesh.visible=!0,this.mesh.position.copy(e),this.mesh.quaternion.setFromUnitVectors(new V(0,0,-1),t);let a=.03+r*.16;this.mesh.scale.set(a,a,n);let o=r>.7?.5+.5*Math.sin(i*50):1;this.mat.color.setRGB(2.4,.4+r*1.2,.3+r*1).multiplyScalar(.35+r*.9*o)}hide(){this.mesh.visible=!1}},fm=class{group=new On;ship;cruisers;hive=new Zf;bossSpin=0;rocks=[];drones=[];mines=[];pickups=[];gates=[];enemyPool=new Map;propPool=new Map;sights=[new dm,new dm,new dm,new dm];tmpA=new V;tmpB=new V;crystalMat=wf(16752672,1.5);novaCoreGeo=yf();novaCageGeo=bf();muzzle=[0,0,0];shipStyle=0;cam=new V;shipX=0;shipY=0;constructor(e){this.cruisers=kf.map(e=>new Nf(e)),this.ship=this.cruisers[0];for(let e of this.cruisers)e.root.visible=!1,this.group.add(e.root);this.ship.root.visible=!0;for(let t=0;t<e.rocks.items.length;t++){let e=Sf({metalness:.06,roughness:.92,grain:!0,rim:10466559,rimStrength:.2,envMapIntensity:.4}),t=new W(gf(Y.Boulder,0),e),n=new W(_f(0),this.crystalMat);n.visible=!1;let r=new On;r.add(t,n),r.visible=!1,this.group.add(r),this.rocks.push({group:r,mesh:t,surface:e,crystals:n,gen:-1,active:!1})}for(let t=0;t<e.drones.items.length;t++)this.drones.push({model:null,type:-1,gen:-1});for(let t=0;t<e.mines.items.length;t++)this.mines.push(null);for(let t=0;t<e.pickups.items.length;t++)this.pickups.push({model:null,key:``,gen:-1});for(let t=0;t<e.gates.items.length;t++){let e={sector:new op(!1),extract:new op(!0)};e.sector.root.visible=!1,e.extract.root.visible=!1,this.group.add(e.sector.root,e.extract.root),this.gates.push(e)}this.hive.root.visible=!1,this.group.add(this.hive.root);for(let e of this.sights)this.group.add(e.mesh)}prewarm(e,t,n,r){let i=[[X.Scout,12],[X.Weaver,7],[X.Lancer,4],[X.Layer,3]],a=[];for(let[e,t]of i)for(let n=0;n<t;n++)a.push([e,this.takeEnemy(e)]);let o=[[`k:0`,8],[`k:1`,4],[`k:2`,14],[`weapon:0`,2],[`weapon:1`,2],[`weapon:2`,2],[`weapon:3`,2],[`module:0`,1],[`module:1`,1],[`module:2`,1],[`module:3`,1],[`module:4`,1]],s=[];for(let[e,t]of o)for(let n=0;n<t;n++)s.push([e,this.takeProp(e)]);for(let e of this.gates)e.sector.root.visible=!0,e.extract.root.visible=!0;for(let e=0;e<this.mines.length;e++){let t=new Vf;this.mines[e]=t,this.group.add(t.root)}for(let e of this.cruisers)e.root.visible=!0,e.revealAll();this.hive.root.visible=!0;for(let e of this.rocks)e.group.visible=!0;e.setRenderTarget(r),e.compile(t,n),e.render(t,n),e.setRenderTarget(null);for(let[e,t]of a)this.giveEnemy(e,t);for(let[e,t]of s)this.giveProp(e,t);for(let e of this.mines)e&&(e.root.visible=!1);for(let e of this.gates)e.sector.root.visible=!1,e.extract.root.visible=!1;this.hive.root.visible=!1;for(let e of this.rocks)e.group.visible=!1;for(let e=0;e<this.cruisers.length;e++)this.cruisers[e].reset(),this.cruisers[e].root.visible=e===this.shipStyle}setShipStyle(e){if(e!==this.shipStyle){this.shipStyle=e;for(let t=0;t<this.cruisers.length;t++)this.cruisers[t].root.visible=t===e}}get activeShip(){return this.cruisers[this.shipStyle]}flashMuzzle(e){this.muzzle[e]=1}takeEnemy(e){let t=this.enemyPool.get(e)?.pop()??lm[e]();return t.reset(),this.group.add(t.root),t}giveEnemy(e,t){this.group.remove(t.root);let n=this.enemyPool.get(e)??[];n.push(t),this.enemyPool.set(e,n)}takeProp(e){let t=this.propPool.get(e)?.pop()??um(e);return t.reset(),this.group.add(t.root),t}giveProp(e,t){this.group.remove(t.root);let n=this.propPool.get(e)??[];n.push(t),this.propPool.set(e,n)}obstruction(e,t,n,r){if(n<=.3)return 1;let i=1-Math.min(1,Math.max(0,(n-.3)/2.3)),a=n/this.cam.z,o=this.shipX+(this.cam.x-this.shipX)*a,s=this.shipY+(this.cam.y-this.shipY)*a,c=Math.hypot(e-o,(t-s)*1.15),l=r+2.4;if(c>=l)return Math.max(.04,i);let u=c/l;return Math.min(.12+.88*u*u,Math.max(.04,i))}sync(e,t,n,r){let i=e.player;this.cam.copy(r.position),this.shipX=i.pos.x,this.shipY=i.pos.y;for(let e=0;e<3;e++)this.muzzle[e]=Math.max(0,this.muzzle[e]-n*14);let a=this.activeShip;a.root.position.set(i.pos.x,i.pos.y,0),a.update({roll:i.roll,pitch:i.pitch,thrust:i.thrust,boost:i.boost,stalled:i.stalled,damage:i.damageLevel,hitFlash:i.hitFlash,invulnerable:i.invuln>0&&i.hull<i.maxHull,overclock:i.overclock>0,shieldUp:i.shieldUp,muzzle:[this.muzzle[0],this.muzzle[1],this.muzzle[2]],dead:e.status===`dying`&&e.statusT>.05||e.status===`over`},t);for(let t=0;t<e.rocks.items.length;t++){let n=e.rocks.items[t],r=this.rocks[t];if(!n.alive){r.active&&(r.active=!1,r.group.visible=!1);continue}(!r.active||r.gen!==n.gen)&&this.dressRock(r,n.shape,n.variant,n.seed,n.gen),r.active=!0,r.group.visible=!0,r.group.position.set(n.pos.x,n.pos.y,n.pos.z),r.group.rotation.set(n.rot.x,n.rot.y,n.rot.z);let i=n.r/pf(r.mesh.geometry);r.group.scale.setScalar(i);let a=r.surface.userData.u;a.uFlash.value=n.flash,a.uCrack.value=n.crack;let o=this.obstruction(n.pos.x,n.pos.y,n.pos.z,n.r);if(a.uFade.value=o,r.crystals.visible=n.shape===Y.Ore&&o>.9,r.nova){let e=4+46/Math.max(8,-n.pos.z)*2.2,t=.5+.5*Math.sin(n.age*e),i=n.fuse>0?1:t;a.uPulse.value=.35+i*.9,r.nova.coreMat.color.setRGB(2.2+i*1.6,.5+i*.7,.2+i*.3),r.nova.core.scale.setScalar(.92+i*.14),r.nova.cage.rotation.y=n.age*1.3,r.nova.cage.rotation.x=n.age*.8}}for(let n=0;n<e.drones.items.length;n++){let r=e.drones.items[n],i=this.drones[n];if(!r.alive){i.model&&(this.giveEnemy(i.type,i.model),i.model=null,i.type=-1);continue}(!i.model||i.gen!==r.gen||i.type!==r.type)&&(i.model&&this.giveEnemy(i.type,i.model),i.model=this.takeEnemy(r.type),i.type=r.type,i.gen=r.gen);let a=i.model;a.root.position.set(r.pos.x,r.pos.y,r.pos.z),this.orientDrone(a,r),a.update({flash:r.flash,telegraph:r.telegraph,bank:r.bank,hp:r.hp/r.maxHp,spin:r.phase,fade:this.obstruction(r.pos.x,r.pos.y,r.pos.z,r.r)},t)}for(let n=0;n<e.mines.items.length;n++){let r=e.mines.items[n],i=this.mines[n];if(!r.alive){i&&(i.root.visible=!1);continue}i||(i=new Vf,this.mines[n]=i,this.group.add(i.root)),i.root.visible=!0,i.root.position.set(r.pos.x,r.pos.y,r.pos.z),i.update({flash:r.flash,telegraph:0,bank:0,hp:r.hp/2,spin:0,fade:this.obstruction(r.pos.x,r.pos.y,r.pos.z,r.r)},t+n)}for(let t=0;t<e.pickups.items.length;t++){let n=e.pickups.items[t],r=this.pickups[t];if(!n.alive){r.model&&(this.giveProp(r.key,r.model),r.model=null,r.key=``);continue}let i=sp(n.kind,n.sub);(!r.model||r.key!==i||r.gen!==n.gen)&&(r.model&&this.giveProp(r.key,r.model),r.model=this.takeProp(i),r.key=i,r.gen=n.gen),r.model.root.position.set(n.pos.x,n.pos.y,n.pos.z),r.model instanceof tp&&r.model.setBeacon(n.beacon),r.model.update(n.age+t*.7,this.obstruction(n.pos.x,n.pos.y,n.pos.z,n.r),t);let a=n.kind===Q.Scrap?.8:1;r.model.root.scale.setScalar(a)}for(let n=0;n<e.gates.items.length;n++){let r=e.gates.items[n],i=this.gates[n];if(!r.alive){i.sector.root.visible=!1,i.extract.root.visible=!1;continue}let a=r.kind===nf.Extract,o=a?i.extract:i.sector;(a?i.sector:i.extract).root.visible=!1,o.root.visible=!0,o.root.position.set(r.pos.x,r.pos.y,r.pos.z),o.root.scale.setScalar(r.r),o.update(t,r.pos.z>.5?Math.max(.15,1-(r.pos.z-.5)/5):1)}let o=e.boss;this.hive.root.visible=o.alive,o.alive&&(this.hive.root.position.set(o.pos.x,o.pos.y,o.pos.z),this.hive.update({spin:o.spin,plateAngles:o.plates.map(e=>e.angle),plateHp:o.plates.map(e=>e.hp/e.maxHp),plateFlash:o.plates.map(e=>e.flash),coreOpen:o.coreOpen,coreFlash:o.flash,telegraph:o.telegraph,dying:o.dying>0?Math.min(1,o.dying/3):0,time:t}),o.dying>0?(this.bossSpin+=n*(.4+o.dying*.5),this.hive.root.position.x+=Math.sin(t*40)*.15*o.dying):this.bossSpin=0,this.hive.root.rotation.z=this.bossSpin);let s=0;for(let n of e.drones.items){if(s>=3)break;n.alive&&n.type===X.Lancer&&n.telegraph>.02&&(this.tmpA.set(n.pos.x,n.pos.y,n.pos.z+1.4),this.tmpB.set(n.aim.x,n.aim.y,n.aim.z).normalize(),this.sights[s++].show(this.tmpA,this.tmpB,150,n.telegraph,t))}o.alive&&o.telegraph>.02?(this.tmpA.set(o.pos.x,o.pos.y,o.pos.z+3),this.tmpB.set(o.beamAim.x,o.beamAim.y,o.beamAim.z).normalize(),this.sights[3].show(this.tmpA,this.tmpB,160,o.telegraph,t)):this.sights[3].hide();for(let e=s;e<3;e++)this.sights[e].hide()}orientDrone(e,t){e.root.rotation.set(0,0,0),t.type===X.Weaver?e.root.rotation.set(-t.vel.y*.004,t.vel.x*.006,0):t.type===X.Layer?e.root.rotation.set(0,0,0):e.root.rotation.set(t.vel.y*-.006,t.vel.x*.008,0)}dressRock(e,t,n,r,i){e.gen=i;let a=gf(t,n);e.mesh.geometry=a,Tf(e.surface),e.surface.userData.u.uSeed.value=r,e.crystals.visible=t===Y.Ore,t===Y.Ore&&(e.crystals.geometry=_f(n));let o=t===Y.Nova;if(o&&!e.nova){let t=wf(16738850,2.4),n=new W(this.novaCoreGeo,t),r=new W(this.novaCageGeo,Cf(16730658,2.2));e.group.add(n,r),e.nova={core:n,coreMat:t,cage:r}}e.nova&&(e.nova.core.visible=o,e.nova.cage.visible=o)}};function pm(e){let t=new Ln,n=new W(new Mo(50,24,16),new Uo({side:1,vertexShader:`varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`varying vec3 vP; void main(){
        float h = normalize(vP).y;
        vec3 top = vec3(0.10,0.13,0.30); vec3 mid = vec3(0.16,0.10,0.20); vec3 bot = vec3(0.02,0.02,0.04);
        vec3 c = h > 0.0 ? mix(mid, top, h) : mix(mid, bot, -h);
        gl_FragColor = vec4(c, 1.0); }`}));t.add(n);let r=(e,n,r,i,a)=>{let o=new W(new Ao(r,i),new ci({color:new U(e).multiplyScalar(n),side:2}));o.position.set(...a),o.lookAt(0,0,0),t.add(o)};r(16773853,9,26,12,[-14,28,22]),r(5622015,5,4,34,[-34,4,-6]),r(16734904,4,4,30,[34,2,-10]),r(16754784,2.5,18,5,[0,-6,40]);let i=new Ac(e),a=i.fromScene(t,.03).texture;return i.dispose(),a}var mm=(e,t)=>new Promise((n,r)=>e.load(t,n,void 0,r)),hm=class e{canvas;renderer;scene=new Ln;rig=new Xp;backdrop;fx;view;quality={pixelRatio:1,bloom:!0,fps:60,frameMs:16};composer;bloom;engineLight=new Fs(6737151,12,26,1.8);key=new Rs(16773341,2.5);rimLight=new Rs(8038655,1.9);hemi=new xs(7373496,2759202,.7);width=1;height=1;maxPixelRatio;slowT=0;smoothT=0;sinceUp=99;probeWait=20;ema=16;distance=0;syncGpu=new URLSearchParams(location.search).has(`gpusync`);syncPixel=new Uint8Array(4);constructor(e,t,n,r,i,a){this.canvas=e,this.renderer=new Cd({canvas:e,antialias:!1,powerPreference:`high-performance`,stencil:!1}),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=ze,this.renderer.info.autoReset=!1,this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),this.quality.pixelRatio=this.maxPixelRatio,this.scene.background=new U(328714),this.scene.fog=new In(Lp[0].fog,70,Hf.fogFar),this.scene.environment=pm(this.renderer),this.scene.environmentIntensity=.7,this.key.position.set(-8,11,14),this.rimLight.position.set(6,3,-16),this.scene.add(this.key,this.rimLight,this.hemi,this.engineLight),this.backdrop=new Hp(n,r,a),this.fx=new cm(i),this.view=new fm(t),this.scene.add(this.backdrop.group,this.view.group,this.fx.group);let o=new Xt(4,4,{type:g,samples:4});this.composer=new jp(this.renderer,o),this.composer.addPass(new Pp(this.scene,this.rig.camera)),this.bloom=new Ip(new B(4,4),.55,.5,1.02),this.composer.addPass(this.bloom),this.composer.addPass(new Np)}static async create(t,n){let r=new ys,[i,a,o,s]=await Promise.all([mm(r,up(`assets/textures/nebula-orion.jpg`)),mm(r,up(`assets/textures/nebula-galaxies.jpg`)),mm(r,up(`assets/textures/explosion-sheet.png`)),mm(r,up(`assets/textures/asteroid-sheet.png`))]),c=new e(t,n,i,a,o,s);return c.view.prewarm(c.renderer,c.scene,c.rig.camera,c.composer.readBuffer),c}resize(e,t){this.width=Math.max(2,Math.floor(e)),this.height=Math.max(2,Math.floor(t)),this.applyPixelRatio()}applyPixelRatio(){let e=this.quality.pixelRatio;this.renderer.setPixelRatio(e),this.renderer.setSize(this.width,this.height,!1),this.composer.setPixelRatio(e),this.composer.setSize(this.width,this.height),this.bloom.resolution.set(this.width*e*.5,this.height*e*.5)}get aspect(){return this.width/this.height}adapt(e,t){this.ema+=(e-this.ema)*.05,this.quality.frameMs=this.ema,this.quality.fps=1e3/Math.max(1,this.ema),this.sinceUp+=t,this.ema>21?(this.slowT+=t,this.smoothT=0):this.ema<18.5?(this.smoothT+=t,this.slowT=0):(this.slowT=0,this.smoothT=0),this.slowT>2.5&&(this.slowT=0,this.smoothT=0,this.sinceUp<12&&(this.probeWait=Math.min(this.probeWait*2,160)),this.quality.pixelRatio>1.01?this.quality.pixelRatio=Math.max(1,this.quality.pixelRatio-.5):this.quality.pixelRatio>.8?this.quality.pixelRatio=Math.max(.75,this.quality.pixelRatio-.125):this.quality.bloom=!1,this.applyPixelRatio()),this.smoothT>this.probeWait&&(this.quality.pixelRatio<this.maxPixelRatio||!this.quality.bloom)&&(this.smoothT=0,this.sinceUp>30&&(this.probeWait=20),this.sinceUp=0,this.quality.bloom?this.quality.pixelRatio=Math.min(this.maxPixelRatio,this.quality.pixelRatio+.25):this.quality.bloom=!0,this.applyPixelRatio())}render(e,t,n,r,i){this.renderer.info.reset(),this.adapt(i,n);let a=e.player;this.distance+=e.flow*r,this.rig.update(n,e,t,this.aspect),this.view.sync(e,t,n,this.rig.camera),this.backdrop.setPalette(Lp[e.director.def.palette]?e.director.def.palette:0),this.backdrop.update(r,e.flow,a.boost,this.rig.camera,this.distance),this.scene.fog.color.copy(this.backdrop.fog);let o=this.view.activeShip;this.engineLight.position.set(a.pos.x,a.pos.y+.3,3.6),this.engineLight.intensity=(4+a.thrust*7+a.boost*9)*(a.stalled?.2:1),this.engineLight.color.set(a.boost>.2?8969727:a.overclock>0?16755285:o.style.glow);let s=this.renderer.domElement.height/(2*Math.tan(this.rig.camera.fov*Math.PI/360));if(this.fx.bolts.update(e),r>1e-4&&this.fx.trails(e),this.fx.update(r,e.flow,s),this.bloom.enabled=this.quality.bloom,this.bloom.strength=.5+a.boost*.08,this.composer.render(),this.syncGpu){let e=this.renderer.getContext();e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,this.syncPixel)}}renderCustom(e,t=0){this.backdrop.update(e,20,t,this.rig.camera,this.distance),this.distance+=20*e,this.scene.fog.color.copy(this.backdrop.fog);let n=this.renderer.domElement.height/(2*Math.tan(this.rig.camera.fov*Math.PI/360));this.fx.update(e,0,n),this.bloom.enabled=this.quality.bloom,this.composer.render()}dispose(){this.composer.dispose(),this.renderer.dispose()}},gm=Up(),_m={x:0,y:0},vm={x:0,y:0},ym=new WeakMap,bm=[];function xm(e,t){bm.length=0;let n=e.flow;for(let r of e.rocks.items){if(!r.alive)continue;let e=r.vel.z+n;if(e<1||r.pos.z>r.r)continue;let i=-r.pos.z/e;i<-.05||i>t||bm.push({x:r.pos.x,y:r.pos.y,t:i,vx:r.vel.x,vy:r.vel.y,r:r.r*(r.shape===Y.Nova?2.4:.95)})}for(let r of e.mines.items){if(!r.alive)continue;let e=r.vel.z+n;if(e<1||r.pos.z>0)continue;let i=-r.pos.z/e;i<=t&&bm.push({x:r.pos.x,y:r.pos.y,t:i,vx:r.vel.x,vy:r.vel.y,r:2.6})}for(let n of e.bolts.items){if(!n.alive||n.friendly||n.vel.z<1)continue;let e=-n.pos.z/n.vel.z;e<0||e>t||bm.push({x:n.pos.x,y:n.pos.y,t:e,vx:n.vel.x,vy:n.vel.y,r:n.r+.5})}for(let n of e.drones.items){if(!n.alive||n.state!==2||n.vel.z<1||n.pos.z>0)continue;let e=-n.pos.z/n.vel.z;e<=t&&bm.push({x:n.pos.x,y:n.pos.y,t:e,vx:n.vel.x,vy:n.vel.y,r:n.r})}}function Sm(e,t,n){let r=0;for(let i of bm){let a=i.x+i.vx*i.t,o=i.y+i.vy*i.t,s=Math.hypot((a-e)*.85,(o-t)*1.2),c=i.r+n;s<c&&(r+=(1-s/c)*(1.6-Math.min(i.t,1.5)*.6)*(1+i.r*.25))}return r}function Cm(e,t={}){let n=e.player,r=t.skill??.8;Wp(n.pos.x,n.pos.y,0,e.aspect,gm),xm(e,.6+r*1.5);let i=ym.get(e);if((!i||e.time<i.lastPick-1)&&(i={until:0,lastPick:0,x:n.pos.x,y:n.pos.y},ym.set(e,i)),e.time-i.lastPick>.25){i.lastPick=e.time;let t=Math.abs(Math.sin(e.time*12.9898+e.seed*78.233)*43758.5453)%1;t<(1-r)*.32&&(i.until=e.time+.45+t*2)}let a=e.time<i.until,o=1/0,s=n.pos.x,c=n.pos.y;for(let i=0;i<9;i++)for(let l=0;l<5;l++){let u=(i/8*2-1)*e.bounds.x*.95,d=(l/4*2-1)*e.bounds.y*.85,f=a?0:Sm(u,d,2+(1-r)*1.2)*10;if(t.skipExtract)for(let t of e.gates.items)t.alive&&t.kind===1&&t.pos.z>-60&&Math.hypot(u-t.pos.x,d-t.pos.y)<t.r+1&&(f+=30);f+=Math.hypot(u-n.pos.x,d-n.pos.y)*.12;for(let t of e.pickups.items){if(!t.alive||t.pos.z>2||t.pos.z<-70)continue;let r=t.kind===0?n.fuel<n.maxFuel*.6?2.4:.7:t.kind===1?n.hull<n.maxHull*.7?2.4:.2:t.kind===3||t.kind===4?1.6:.4,i=-t.pos.z/Math.max(20,e.flow),a=t.pos.x+t.vel.x*i,o=t.pos.y+t.vel.y*i,s=Math.hypot(a-u,o-d);s<4&&(f-=r*(4-s)*(t.pos.z>-40?1.2:.5))}let p=0,m=Gp(gm,u,d,0,_m),h=_m.x,g=_m.y+Uf.shipBelowCursor,_=(t,n,r,i,a)=>{let o=Gp(gm,t,n,r,vm);if(o<0)return;let s=i/(o*gm.tanHalf),c=Math.hypot((vm.x-h)*e.aspect,vm.y-g),l=.09+s;c<l&&(p+=(1-c/l)*a)};if(m>0){for(let t of e.rocks.items)!t.alive||t.pos.z>-8||t.pos.z<-70||_(t.pos.x,t.pos.y,t.pos.z,t.r,t.shape===Y.Nova?.2:.8);for(let t of e.drones.items)t.alive&&t.pos.z<-8&&_(t.pos.x,t.pos.y,t.pos.z,t.r,1.4)}if(e.boss.alive&&e.boss.entered&&e.boss.dying<=0){let t=e.boss.phase===1;for(let n=0;n<e.boss.targets.length;n++){let r=e.boss.targets[n];!r.alive||(t?n!==4:n===4)||m>0&&_(r.x,r.y,r.z,r.r,2.4)}}f-=p*.9,f<o&&(o=f,s=u,c=d)}let l=Gp(gm,s,c,0,_m),u=0,d=.1;l>0&&(u=_m.x,d=_m.y+Uf.shipBelowCursor);let f=!1;for(let t of e.rocks.items)if(!(!t.alive||t.pos.z>-6)){if(t.shape===Y.Nova){let e=-t.pos.z;e>11&&e<26&&Math.hypot(t.pos.x-s,t.pos.y-c)<6&&(f=!0);continue}Math.hypot(t.pos.x-n.pos.x,t.pos.y-n.pos.y)<t.r+4&&(f=!0)}for(let t of e.drones.items)t.alive&&t.pos.z<-8&&(f=!0);e.boss.alive&&(f=!0);let p=Sm(n.pos.x,n.pos.y,2.5)>.6,m=e.time%13,h=t.boost===!0&&n.fuel>n.maxFuel*.5&&m>8.5&&m<11&&!p&&e.player.hitFlash<.05,g=n.overclock<=0&&n.fuel>n.maxFuel*.7&&e.rocks.liveCount>14&&Math.floor(e.time*4)%40==0;return{cursorX:K(u,Uf.shipMinX,Uf.shipMaxX),cursorY:K(d,Uf.shipMinY+Uf.shipBelowCursor,Uf.cursorMaxY),fire:f,boost:h,overclock:g}}var $={Hit:0,Boom:1,Shock:2,Sfx:3,Popup:4,Shake:5,HitStop:6,Flash:7,Banner:8,Debris:9,Muzzle:10,Graze:11,ShipHit:12,ShipDead:13,Collect:14,Milestone:15,Sector:16,Ram:17,Hint:18},wm=640,Tm=class{items=[];count=0;constructor(){for(let e=0;e<wm;e++)this.items.push({type:0,x:0,y:0,z:0,a:0,b:0,s:``,s2:``})}emit(e,t=0,n=0,r=0,i=0,a=0,o=``,s=``){if(this.count>=wm)return;let c=this.items[this.count++];c.type=e,c.x=t,c.y=n,c.z=r,c.a=i,c.b=a,c.s=o,c.s2=s}clear(){this.count=0}};function Em(e,t,n,r,i,a,o=0,s=0,c=0){let l=e.pickups.acquire();return l?(l.kind=t,l.sub=n,l.pos.x=r,l.pos.y=i,l.pos.z=a,l.vel.x=o,l.vel.y=s,l.vel.z=c,l.r=t===Q.Scrap?.55:t===Q.Fuel?.95:1,l.age=0,l.life=40,l.tether=-1,l.beacon=!1,l):null}function Dm(e,t){let n=e.player,r=n.mods.magnet?11:3.8,i=n.mods.magnet?20:7,a=e.status===`running`;for(let o of e.pickups.items){if(!o.alive)continue;if(o.age+=t,o.tether>=0){let t=e.patrols[o.tether];t.alive&&t.count>0&&t.age<t.life?(o.pos.x=t.x,o.pos.y=t.y,o.pos.z=t.z,o.vel.x=0,o.vel.y=0):o.tether=-1}let s=o.pos.z,c=o.pos.x,l=o.pos.y;if(o.tether<0){if(a){let e=n.pos.x-o.pos.x,a=n.pos.y-o.pos.y,s=Math.hypot(e,a),c=o.pos.z>-18&&o.pos.z<3,l=o.beacon?r*1.8:o.kind===Q.Scrap?r*1.4:r;if(c&&s<l&&s>.01){let n=(1-s/l)*i*(o.beacon?1.5:1);o.vel.x+=e/s*n*t*10,o.vel.y+=a/s*n*t*10}}o.vel.x*=Math.exp(-2.2*t),o.vel.y*=Math.exp(-2.2*t),o.pos.x+=o.vel.x*t,o.pos.y+=o.vel.y*t,o.pos.z+=(o.vel.z+e.flow)*t}if(a){let r=1.25+o.r*1.35;if(kd(c-(n.pos.x-n.vel.x*t),l-(n.pos.y-n.vel.y*t),s,o.pos.x-c-n.vel.x*t,o.pos.y-l-n.vel.y*t,o.pos.z-s,1)<r*r){Om(e,o);continue}}(o.pos.z>Hf.killZ||o.age>o.life+60)&&(o.alive=!1)}}function Om(e,t){let n=e.player;t.alive=!1,e.stats.pickups++;let{x:r,y:i,z:a}=t.pos;switch(e.events.emit($.Collect,r,i,a,t.kind),t.kind){case Q.Fuel:{let t=Wf.fuelCellValue;n.fuel=Math.min(n.maxFuel,n.fuel+t),e.stats.fuelGrabbed+=t,e.stats.fuelCells++,e.events.emit($.Popup,r,i+1.2,a,6,1.25,`+${t} FUEL`),e.events.emit($.Sfx,0,0,0,1,1,`pickupFuel`),e.events.emit($.Flash,0,0,0,1,.35),e.addScore(25,r,i+.2,a,6);break}case Q.Repair:n.hull=Math.min(n.maxHull,n.hull+Wf.repairValue),n.hull>n.maxHull*.45&&(n.lowHullWarned=!1),e.events.emit($.Popup,r,i+1.2,a,7,1.25,`+${Wf.repairValue} HULL`),e.events.emit($.Sfx,0,0,0,1,1,`pickupRepair`),e.events.emit($.Flash,0,0,0,1,.3);break;case Q.Scrap:n.scrap++,e.stats.scrapGrabbed++,e.hint(`scrap`,`SCRAP FILLS THE SALVAGE METER. WHEN IT IS FULL, A SUPPLY DROP BRINGS A WEAPON AND A MODULE`,6),e.events.emit($.Sfx,r,i,a,.5,.9+Math.min(n.scrap,14)*.035,`pickupScrap`),e.addScore(10,r,i+.5,a,2),n.scrap>=n.scrapGoal&&(n.scrap=0,n.scrapGoal=Math.min(n.scrapGoal+4,26),e.director.spawnSupplyDrop(e));break;case Q.Weapon:{let o=t.sub;n.weapon===o?n.tier<3?(n.tier++,e.events.emit($.Popup,r,i+1.4,a,3,1.5,`${ef[o]} TIER ${n.tier}`)):e.addScore(500,r,i+1,a,3,`MAXED`):(n.weapon=o,e.events.emit($.Popup,r,i+1.4,a,3,1.5,`${ef[o]} TIER ${n.tier}`)),e.events.emit($.Banner,0,0,0,0,0,ef[n.weapon],`Tier ${n.tier}`),e.events.emit($.Sfx,0,0,0,1,1,`pickupWeapon`),e.events.emit($.Flash,0,0,0,1,.5),e.events.emit($.Shake,0,0,0,.2);break}case Q.Module:km(e,t.sub,r,i,a),e.events.emit($.Sfx,0,0,0,1,1,`pickupWeapon`),e.events.emit($.Flash,0,0,0,1,.5)}}function km(e,t,n,r,i){let a=e.player,o=a.mods,s=tf[t],c=!1;switch(t){case 0:c=o.shield&&a.shieldUp,o.shield=!0,a.shieldUp=!0;break;case 1:c=o.magnet,o.magnet=!0;break;case 2:c=o.ram,o.ram=!0;break;case 3:c=o.tank,o.tank||(o.tank=!0,a.maxFuel*=1.3),a.fuel=Math.min(a.maxFuel,a.fuel+30);break;case 4:c=o.afterburner,o.afterburner=!0}c?e.addScore(600,n,r+1,i,3,`DUPLICATE`):(e.events.emit($.Banner,0,0,0,0,0,s,Am[t]),e.events.emit($.Popup,n,r+1.4,i,3,1.5,s))}var Am=[`Absorbs the next hit.`,`Pulls pickups from far away.`,`Boost shatters medium rocks too.`,`Bigger tank, and a top-up.`,`Boost burns 30% less fuel.`],jm=e=>{let t=e.player;return 1+(1-t.fuel/t.maxFuel)*2.4+(t.stalled?3:0)},Mm=e=>{let t=e.player;return 1+(1-t.hull/t.maxHull)*3};function Nm(e,t,n,r,i,a,o=4.5){let s=e.rng;return Em(e,t,n,r,i,a,s.range(-o,o),s.range(-o,o)*.7,0)}function Pm(e){let t=0;for(let n of e.pickups.items)n.alive&&(n.kind===Q.Weapon||n.kind===Q.Module)&&t++;return t<3}function Fm(e,t=e.rng){let n=e.player.weapon,r=[0,1,2,3].filter(e=>e!==n),i=t.chance(.25),a=t.pick(r);return i?n:a}function Im(e,t){let n=e.rng,{x:r,y:i,z:a}=t.pos,o=t.size,s=e.pickups.liveCount,c=[4,2,1,0][o]+ +(t.shape===Y.Ore);for(let t=0;t<c&&s+t<34;t++)Nm(e,Q.Scrap,0,r,i,a);let l=t.shape===Y.Ore?1:[.15,.08,.025,0][o]*jm(e);n.chance(l)&&Nm(e,Q.Fuel,0,r,i,a,2.5),n.chance([.07,.04,.01,0][o]*Mm(e))&&Nm(e,Q.Repair,0,r,i,a,2.5),Pm(e)&&(n.chance([.05,.022,0,0][o])?Nm(e,Q.Weapon,Fm(e),r,i,a,2):n.chance([.03,.012,0,0][o])&&Nm(e,Q.Module,n.int(0,4),r,i,a,2))}function Lm(e,t){let n=e.rng,{x:r,y:i,z:a}=t.pos,o=t.type;for(let t=0;t<2+(o===X.Lancer?3:0);t++)Nm(e,Q.Scrap,0,r,i,a);let s=[.3,.2,1,.8][o]*K(jm(e)*.8,.8,3);if(n.chance(s)&&Nm(e,Q.Fuel,0,r,i,a,3),n.chance([.09,.08,.5,.3][o]*Mm(e))&&Nm(e,Q.Repair,0,r,i,a,3),Pm(e)){let t=[.07,.05,1,.4][o];n.chance(t)&&(o===X.Lancer&&n.chance(.5)?Nm(e,Q.Module,n.int(0,4),r,i,a,2):Nm(e,Q.Weapon,Fm(e),r,i,a,2))}}var Rm=[{id:`graze`,text:e=>`Graze ${e} rocks or shots`,targets:[10,22,40],measure:e=>e.stats.grazes},{id:`ram`,text:e=>`Shatter ${e} rocks by boosting into them`,targets:[4,8,15],measure:e=>e.stats.rams},{id:`drones`,text:e=>`Destroy ${e} drones`,targets:[6,12,24],measure:e=>e.stats.drones},{id:`fuel`,text:e=>`Collect ${e} fuel cells`,targets:[4,8,14],measure:e=>e.stats.fuelCells},{id:`chain`,text:e=>`Reach a ${e} kill chain`,targets:[15,30,60],measure:e=>e.stats.maxChain},{id:`mult`,text:e=>`Reach a x${e} multiplier`,targets:[3,5,8],measure:e=>e.stats.maxMult},{id:`nova`,text:e=>`Clear ${e} ${e===1?`crowd`:`crowds`} with a nova`,targets:[void 0,1,3],measure:e=>e.stats.novaClears},{id:`sector`,text:e=>`Reach sector ${e}`,targets:[2,3,4],measure:e=>e.stats.sector},{id:`gates`,text:e=>`Fly through ${e} ${e===1?`gate`:`gates`}`,targets:[1,2,3],measure:e=>e.stats.gates},{id:`chained`,text:e=>`Blow up ${e} rocks with explosions`,targets:[10,25,50],measure:e=>e.stats.chained},{id:`boss`,text:()=>`Beat the Hive Gate`,targets:[void 0,void 0,1],measure:e=>+!!e.stats.bossDown}],zm=[1e3,2500,5e3];function Bm(e){let t=new Ad((e^1540483477)>>>0),n=new Set,r=[];for(let e=0;e<3;e++){let i=Rm.filter(t=>t.targets[e]!==void 0&&!n.has(t.id)),a=t.pick(i);n.add(a.id);let o=a.targets[e];r.push({id:a.id,text:a.text(o),tier:e,target:o,value:0,done:!1,reward:zm[e]})}return r}var Vm=new Map(Rm.map(e=>[e.id,e]));function Hm(e){if(e.status===`running`)for(let t of e.cards)t.done||(t.value=Math.min(t.target,Vm.get(t.id).measure(e)),t.value>=t.target&&(t.done=!0,e.player.score+=t.reward,e.stats.cardsDone++,e.events.emit($.Banner,0,0,0,0,0,`CARD COMPLETE`,`${t.text}  +${t.reward}`),e.events.emit($.Sfx,0,0,0,1,1,`supply`),e.events.emit($.Popup,e.player.pos.x,e.player.pos.y+3.2,0,5,1.5,`+${t.reward} CARD`)))}var Um=-1e6,Wm={Cyan:0,Red:1,Amber:2,Green:3,White:4,Magenta:5},Gm=e=>e.kind===Z.Pulse?Wm.Cyan:e.kind===Z.Pellet?Wm.Amber:e.kind===Z.Lance?Wm.Magenta:e.kind===Z.Missile?Wm.Green:Wm.Red;function Km(e,t){qm(e,t),Ym(e),Zm(e),e.status===`running`&&(Qm(e),$m(e))}function qm(e,t){let n=e.flow,r=e.player;for(let i of e.bolts.items){if(!i.alive)continue;let a=i.pos.x-i.vel.x*t,o=i.pos.y-i.vel.y*t,s=i.pos.z-i.vel.z*t;if(i.friendly)Jm(e,i,a,o,s,t,n);else{let c=-1,l=1/0;for(let r of e.rocks.items){if(!r.alive||r.fuse>0)continue;let e=r.vel.z+n,u=a-(r.pos.x-r.vel.x*t),d=o-(r.pos.y-r.vel.y*t),f=s-(r.pos.z-e*t),p=r.r*.92+i.r;if(kd(u,d,f,i.vel.x-r.vel.x,i.vel.y-r.vel.y,i.vel.z-e,t)<p*p){let e=Math.hypot(u,d,f);e<l&&(l=e,c=r.slot)}}if(c>=0){let t=e.rocks.items[c];i.alive=!1,gh(e,t,.7,uh.Bolt,i.vel.x*.01,i.vel.y*.01,i.vel.z*.01),e.events.emit($.Hit,i.pos.x,i.pos.y,i.pos.z,1,Wm.Red);continue}if(e.status===`running`){let n=1.2+i.r;kd(a-(r.pos.x-r.vel.x*t),o-(r.pos.y-r.vel.y*t),s-r.pos.z,i.vel.x-r.vel.x,i.vel.y-r.vel.y,i.vel.z,t)<n*n&&r.invuln<=0&&(i.alive=!1,e.events.emit($.Hit,i.pos.x,i.pos.y,i.pos.z,2,Wm.Red),e.hurtPlayer(i.dmg,`Drone fire`,i.pos.x,i.pos.y,i.pos.z))}}}}function Jm(e,t,n,r,i,a,o){let s=0,c=-1,l=1/0,u=t.vel.x,d=t.vel.y,f=t.vel.z;for(let p of e.rocks.items){if(!p.alive||p.fuse>0||t.hitIds.length&&t.hitIds.includes(p.id))continue;let e=p.vel.z+o,m=n-(p.pos.x-p.vel.x*a),h=r-(p.pos.y-p.vel.y*a),g=i-(p.pos.z-e*a),_=p.r*.94+t.r;if(!(Math.abs(g)>12+Math.abs(f)*a)&&kd(m,h,g,u-p.vel.x,d-p.vel.y,f-e,a)<_*_){let e=Math.hypot(m,h,g)-p.r;e<l&&(l=e,s=1,c=p.slot)}}for(let o of e.drones.items){if(!o.alive||t.hitIds.length&&t.hitIds.includes(-1-o.id))continue;let e=n-(o.pos.x-o.vel.x*a),p=r-(o.pos.y-o.vel.y*a),m=i-(o.pos.z-o.vel.z*a),h=o.r+t.r;if(kd(e,p,m,u-o.vel.x,d-o.vel.y,f-o.vel.z,a)<h*h){let t=Math.hypot(e,p,m)-o.r;t<l&&(l=t,s=2,c=o.slot)}}for(let p of e.mines.items){if(!p.alive)continue;let e=p.vel.z+o,m=n-(p.pos.x-p.vel.x*a),h=r-(p.pos.y-p.vel.y*a),g=i-(p.pos.z-e*a),_=p.r+t.r;if(kd(m,h,g,u-p.vel.x,d-p.vel.y,f-e,a)<_*_){let e=Math.hypot(m,h,g)-p.r;e<l&&(l=e,s=3,c=p.slot)}}let p=e.boss;if(p.alive&&p.dying<=0)for(let e=0;e<p.targets.length;e++){let o=p.targets[e];if(!o.alive||t.hitIds.length&&t.hitIds.includes(Um-e))continue;let m=o.r+t.r;if(kd(n-o.x,r-o.y,i-o.z,u,d,f,a)<m*m){let t=Math.hypot(n-o.x,r-o.y,i-o.z)-o.r;t<l&&(l=t,s=4,c=e)}}if(s===0)return;let m=Math.hypot(u,d,f)||1,h=u/m,g=d/m,_=f/m,v=Gm(t),y=1;if(s===1){let n=e.rocks.items[c];y=n.size,e.events.emit($.Hit,t.pos.x,t.pos.y,t.pos.z,y,v),e.events.emit($.Sfx,t.pos.x,t.pos.y,t.pos.z,.45,.85+(3-n.size)*.16+e.rng.range(0,.12),`hit`),t.kind===Z.Missile?gh(e,n,t.dmg,uh.Bolt,h,g,_):!gh(e,n,t.dmg,uh.Bolt,h,g,_)&&n.shape===Y.Nova&&e.events.emit($.Sfx,n.pos.x,n.pos.y,n.pos.z,.6,1.6,`novaTick`),t.hitIds.push(n.id)}else if(s===2){let n=e.drones.items[c];e.events.emit($.Hit,t.pos.x,t.pos.y,t.pos.z,1,v),e.events.emit($.Sfx,t.pos.x,t.pos.y,t.pos.z,.5,1.15+e.rng.range(0,.15),`hitMetal`),fg(e,n,t.dmg,uh.Bolt),t.hitIds.push(-1-n.id)}else if(s===3){let n=e.mines.items[c];e.events.emit($.Hit,t.pos.x,t.pos.y,t.pos.z,1,v),Sh(e,n,t.dmg,uh.Bolt)}else e.events.emit($.Hit,t.pos.x,t.pos.y,t.pos.z,2,v),e.events.emit($.Sfx,t.pos.x,t.pos.y,t.pos.z,.5,.8+e.rng.range(0,.15),`hitMetal`),Kh(e,t.dmg,t.pos.x,t.pos.y,t.pos.z,!0,c),t.hitIds.push(Um-c);t.kind===Z.Missile?(Fh(e,t),t.alive=!1):t.pierce>0?(t.pierce--,t.dmg*=.92):t.alive=!1}function Ym(e){let t=e.rocks.items,n=t.length;for(let r=0;r<n;r++){let i=t[r];if(i.alive)for(let a=r+1;a<n;a++){let n=t[a];if(!n.alive)continue;let r=(i.r+n.r)*.92,o=n.pos.z-i.pos.z;if(o>r||o<-r)continue;let s=n.pos.x-i.pos.x,c=n.pos.y-i.pos.y,l=s*s+c*c+o*o;if(l>=r*r||l<1e-6)continue;let u=Math.sqrt(l),d=s/u,f=c/u,p=o/u,m=n.vel.x-i.vel.x,h=n.vel.y-i.vel.y,g=n.vel.z-i.vel.z,_=m*d+h*f+g*p;if(_>=0)continue;let v=i.mass,y=n.mass,b=-1.55*_/(1/v+1/y);i.vel.x-=b*d/v,i.vel.y-=b*f/v,i.vel.z-=b*p/v,n.vel.x+=b*d/y,n.vel.y+=b*f/y,n.vel.z+=b*p/y;let x=(r-u)*.5,S=y/(v+y),C=v/(v+y);i.pos.x-=d*x*2*S,i.pos.y-=f*x*2*S,i.pos.z-=p*x*2*S,n.pos.x+=d*x*2*C,n.pos.y+=f*x*2*C,n.pos.z+=p*x*2*C;let w=-_;if(w>4.5&&i.fuse<=0&&n.fuse<=0){let t=(w-4)*.34*K(2*y/(v+y),.25,1.7),r=(w-4)*.34*K(2*v/(v+y),.25,1.7),a=i.pos.x+d*i.r,o=i.pos.y+f*i.r,s=i.pos.z+p*i.r;e.events.emit($.Hit,a,o,s,1,Wm.Amber),gh(e,i,t,uh.Crash),gh(e,n,r,uh.Crash),w>9&&e.events.emit($.Sfx,a,o,s,K(w/30,.2,.6),.7+e.rng.range(0,.2),`rockCrash`)}}}}var Xm=[5,2.6,1.4,.6];function Zm(e){let t=e.flow;for(let n of e.rocks.items){if(!n.alive||n.fuse>0)continue;let r=n.vel.z+t;for(let t of e.drones.items){if(!t.alive||t.state===0)continue;let i=n.r*.9+t.r,a=t.pos.x-n.pos.x,o=t.pos.y-n.pos.y,s=t.pos.z-n.pos.z;if(s>i||s<-i)continue;let c=Math.hypot(a,o,s);c>=i||c<1e-5||Math.hypot(n.vel.x-t.vel.x,n.vel.y-t.vel.y,r-t.vel.z)<6||(e.events.emit($.Hit,n.pos.x+a/c*n.r,n.pos.y+o/c*n.r,n.pos.z+s/c*n.r,1,Wm.Amber),fg(e,t,Xm[n.size],uh.Crash),gh(e,n,1.5,uh.Crash),n.vel.x-=a/c*5,n.vel.y-=o/c*5,t.vel.x+=a/c*8,t.vel.y+=o/c*8)}for(let t of e.mines.items){if(!t.alive)continue;let r=n.r*.9+t.r,i=t.pos.x-n.pos.x,a=t.pos.y-n.pos.y,o=t.pos.z-n.pos.z;i*i+a*a+o*o>r*r||Sh(e,t,3,uh.Crash)}}}function Qm(e){let t=e.player;for(let n of e.rocks.items){if(!n.alive||n.fuse>0||n.pos.z<-n.r-4||n.pos.z>n.r+4)continue;let r=(n.pos.x-t.pos.x)*.78,i=(n.pos.y-t.pos.y)*1.2,a=(n.pos.z-t.pos.z)*.8,o=Math.hypot(r,i,a);if(o>=n.r*.9+1.2)continue;if(n.shape===Y.Nova){vh(e,n,uh.Contact);continue}let s=t.mods.ram?Jd.Medium:Jd.Small;if(t.boosting&&t.boost>.6&&n.size>=s){t.fuel=Math.max(0,t.fuel-Wf.ramFuelCost),e.stats.rams++,e.events.emit($.Ram,n.pos.x,n.pos.y,n.pos.z),e.events.emit($.Shake,0,0,0,.22),e.events.emit($.Popup,n.pos.x,n.pos.y+1.4,n.pos.z,3,1,`RAM`),vh(e,n,uh.Ram);continue}if(t.invuln>0)continue;let c=1/Math.max(o,.1),l=t.shieldUp;if(e.hurtPlayer(qf.rock[n.size],`Rock impact`,n.pos.x,n.pos.y,n.pos.z)||l){e.events.emit($.Hit,t.pos.x+r*c,t.pos.y+i*c,0,3,Wm.Amber);let a=(n.pos.x-t.pos.x)*c,o=(n.pos.y-t.pos.y)*c;n.vel.x+=a*9,n.vel.y+=o*9,gh(e,n,4+(3-n.size)*2,uh.Crash)}}}function $m(e){let t=e.player;for(let n of e.drones.items)if(n.alive&&!(n.pos.z<-n.r-4)&&!(Math.hypot((n.pos.x-t.pos.x)*.8,(n.pos.y-t.pos.y)*1.2,(n.pos.z-t.pos.z)*.8)>=n.r+1.1)){if(t.boosting&&t.boost>.6&&n.type!==X.Lancer){t.fuel=Math.max(0,t.fuel-Wf.ramFuelCost),e.events.emit($.Ram,n.pos.x,n.pos.y,n.pos.z),fg(e,n,99,uh.Ram);continue}if(!(t.invuln>0)&&e.hurtPlayer(qf.droneRam,`Drone collision`,n.pos.x,n.pos.y,n.pos.z)){fg(e,n,n.type===X.Lancer?6:99,uh.Ram);let r=Math.sign(n.pos.x-t.pos.x)||1;n.vel.x+=r*12}}}var eh=[{name:`THE BELT`,tag:`Shoot rocks. Dodge what you cannot shoot.`,start:0,interval:21,cap:26,weights:{single:4,cluster:3.2,wall:1,stream:1,vein:.9},patrolEvery:[15,20],patrolMax:1,palette:0},{name:`DRONE SCREEN`,tag:`Weavers spiral in. Fuel cells ride with patrols.`,start:42,interval:17.5,cap:30,weights:{single:3,cluster:3,wall:1.5,stream:1.4,vein:.9,rain:1,tunnel:.9,nova:.35},patrolEvery:[10,14],patrolMax:2,palette:1},{name:`NOVA FIELD`,tag:`Red rocks blow up big. Shoot them at a distance.`,start:90,interval:15,cap:34,weights:{single:2,cluster:2.6,wall:1.4,stream:1.4,vein:.8,rain:1.4,tunnel:1,nova:2.2},patrolEvery:[8,12],patrolMax:2,palette:2},{name:`HIVE GATE`,tag:`Break the plates. Open the core.`,start:142,interval:40,cap:12,weights:{single:3,cluster:1,rain:1},patrolEvery:[999,999],patrolMax:0,palette:3},{name:`DEEP VOID`,tag:`No exit but the gate. Bank it, or push on.`,start:9999,interval:12,cap:38,weights:{single:1.5,cluster:2.4,wall:1.4,stream:1.4,vein:.7,rain:1.6,tunnel:1,nova:2.4},patrolEvery:[6,9],patrolMax:3,palette:4}],th=5.6,nh=class{sector=0;sectorTime=0;bossLevel=0;pressure=0;meter=0;patrolT=14;openerT=0;lancerT=9999;layerT=9999;crateT=13;moduleT=60;beaconT=0;veinT=0;repairT=0;extractT=0;gateSpawned=new Set;bossSpawned=!1;deepTime=0;patternN=0;patrolN=0;lancerN=0;layerN=0;crateN=0;moduleN=0;veinN=0;get def(){return eh[this.sector]}reset(e){this.sector=0,this.sectorTime=0,this.bossLevel=0,this.pressure=0,this.meter=0,this.patrolT=9,this.lancerT=9999,this.layerT=9999,this.crateT=13,this.moduleT=58,this.beaconT=0,this.veinT=0,this.repairT=0,this.extractT=0,this.gateSpawned.clear(),this.bossSpawned=!1,this.deepTime=0,this.patternN=this.patrolN=this.lancerN=this.layerN=this.crateN=this.moduleN=this.veinN=0,this.seedField(e)}seedField(e){let t=this.child(e,`opening`,0),n=t.sign();this.rock(e,t,Y.Boulder,Jd.Large,n*5.4,.6,-46,-.4*n),this.rock(e,t,Y.Slab,Jd.Small,-n*2.6,1.6,-44),this.rock(e,t,Y.Shard,Jd.Medium,-n*6.8,-.4,-62,n*1),this.rock(e,t,Y.Boulder,Jd.Medium,n*1.8,1.2,-80),this.rock(e,t,Y.Ore,Jd.Medium,-n*.5,2.6,-102),this.cluster(e,t,-3,0,-128),this.cluster(e,t,5.5,1,-165);for(let n=0;n<4;n++){let n=this.lane(e,t);this.rock(e,t,t.pick([Y.Boulder,Y.Shard,Y.Slab]),t.pick([1,2]),n.x,n.y,t.range(-190,-140))}this.openerT=1.4}update(e,t){if(e.status===`over`||e.status===`extracted`)return;this.sectorTime+=t,this.openerT>0&&(this.openerT-=t,this.openerT<=0&&e.status===`running`&&ng(e,X.Scout,3,{x:0,y:1.6,stationZ:-52,life:17,rng:this.child(e,`opening`,1)}));let n=eh[this.sector+1];if(this.sector<3&&n){let t=this.sector+1;!this.gateSpawned.has(t)&&e.time>=n.start-th&&(this.gateSpawned.add(t),this.spawnGate(e,nf.Sector,t)),e.time>=n.start&&this.enterSector(e,t)}if(e.status!==`running`)return;let r=this.def,i=e.boss.alive;this.meter+=e.flow*t;let a=K(.62+e.time/80,.62,1),o=r.interval*(i?2:1)/(a*(1+this.pressure*.5)),s=r.cap+Math.min(26,Math.round(this.pressure*14));for(;this.meter>=o;){this.meter-=o;let t=this.child(e,`pattern`,this.patternN++);e.rocks.liveCount<s&&this.spawnPattern(e,t)}if(this.sector===3&&!this.bossSpawned&&e.time>=eh[3].start+3&&(this.bossSpawned=!0,Bh(e)),this.sector>=4&&(this.deepTime+=t,this.bossLevel=Math.floor(this.deepTime/50),this.pressure=this.deepTime/40),r.patrolMax>0&&!i){this.patrolT-=t;let n=e.patrols.filter(e=>e.alive).length;if(this.patrolT<=0&&n<r.patrolMax){let t=this.child(e,`patrol`,this.patrolN++);this.patrolEvent(e,t),this.patrolT=t.range(r.patrolEvery[0],r.patrolEvery[1])/(1+this.pressure*.3)}else this.patrolT<=0&&(this.patrolT=2)}if(this.sector>=2&&!i){if(this.lancerT-=t,this.lancerT<=0){let t=this.child(e,`lancer`,this.lancerN++);e.drones.items.some(e=>e.alive&&e.type===X.Lancer)||(ng(e,X.Lancer,this.sector>=4&&t.chance(.4)?2:1,{life:22,rng:t}),e.events.emit($.Popup,e.player.pos.x,e.player.pos.y+3.2,0,1,1.2,`LANCER INBOUND`),e.hint(`lancer`,`LANCER: a red laser tracks you, then locks. Sidestep when it stops moving`)),this.lancerT=t.range(20,28)}if(this.layerT-=t,this.layerT<=0){let t=this.child(e,`layer`,this.layerN++);e.drones.items.some(e=>e.alive&&e.type===X.Layer)||(ng(e,X.Layer,1,{rng:t}),e.events.emit($.Popup,e.player.pos.x,e.player.pos.y+3.2,0,1,1.2,`MINELAYER`)),this.layerT=t.range(28,38)}}if(this.crateT-=t,this.crateT<=0){let t=this.child(e,`crate`,this.crateN++),n=this.lane(e,t,.6);Em(e,Q.Weapon,Fm(e,t),n.x,n.y,-150),e.hint(`crate`,`WEAPON CRATE AHEAD: fly into it. Same type adds a tier, a new type swaps your gun`),this.crateT=t.range(48,62)}if(this.moduleT-=t,this.moduleT<=0){let t=this.child(e,`module`,this.moduleN++),n=this.lane(e,t,.6);Em(e,Q.Module,t.int(0,4),n.x,n.y,-150),e.hint(`module`,`MODULE CHIP AHEAD: a permanent upgrade for this run`),this.moduleT=t.range(50,70)}this.helpPlayer(e,t),this.extractT>0&&(this.extractT-=t,this.extractT<=0&&(this.spawnGate(e,nf.Extract,0),this.extractT=48)),this.updateGates(e,t)}enterSector(e,t){this.sector=t,this.sectorTime=0,e.stats.sector=Math.max(e.stats.sector,t+1);let n=eh[t];t===2&&(this.lancerT=8,e.hint(`nova`,`RED ROCKS ARE NOVAS: shoot one when its ring turns green, 10 to 30 m out`,6)),t===2&&(this.layerT=20),e.events.emit($.Sector,0,0,0,t),e.events.emit($.Banner,0,0,0,0,0,`SECTOR ${t+1}  ${n.name}`,n.tag),e.events.emit($.Sfx,0,0,0,1,1,`sector`),e.events.emit($.Flash,0,0,0,3,.4)}debugJump(e,t){e.time=eh[t].start+.5,this.gateSpawned.add(t),this.enterSector(e,t),t===3&&(this.bossSpawned=!1)}debugGate(e,t){this.spawnGate(e,t?nf.Extract:nf.Sector,1)}onBossDown(e){this.sector=4,this.sectorTime=0,this.deepTime=0,this.bossLevel=0,this.pressure=0,e.stats.sector=5,this.extractT=2.5,this.lancerT=14,this.layerT=22,this.patrolT=10,e.events.emit($.Sector,0,0,0,4),e.events.emit($.Banner,0,0,0,0,0,`EXTRACTION OPEN`,`Fly through the gate to bank the run. Or push on.`),e.events.emit($.Milestone,0,0,0,0)}onStall(e){this.beaconT=.6}onLowFuel(e){this.veinT=1.4}onLowHull(e){this.repairT=1.6}helpPlayer(e,t){let n=e.player;if(this.beaconT>0&&(this.beaconT-=t,this.beaconT<=0)){if(n.stalled&&!e.pickups.items.some(e=>e.alive&&e.beacon)){let t=Em(e,Q.Fuel,0,n.pos.x*.6+e.rng.range(-3,3),n.pos.y*.6+.5,-52);t&&(t.beacon=!0),e.events.emit($.Popup,t?t.pos.x:0,t?t.pos.y+2:0,-40,6,1.4,`FUEL BEACON`)}this.beaconT=n.stalled?4.2:0}if(this.veinT>0&&(this.veinT-=t,this.veinT<=0&&this.vein(e,this.child(e,`vein`,this.veinN++))),this.repairT>0&&(this.repairT-=t,this.repairT<=0&&n.hull<n.maxHull*.5)){let t=this.lane(e,e.rng,.5);Em(e,Q.Repair,0,t.x,t.y,-120)}}spawnSupplyDrop(e){let t=.5+e.rng.range(-.5,1);Em(e,Q.Weapon,Fm(e),-7.2,t,-125),Em(e,Q.Module,e.rng.int(0,4),7.2,t,-125),e.events.emit($.Banner,0,0,0,0,0,`SUPPLY DROP`,`Weapon on the left. Module on the right. Pick one.`),e.events.emit($.Sfx,0,0,0,1,1,`supply`)}spawnGate(e,t,n){let r=e.gates.acquire();r&&(r.kind=t,r.index=n,r.passed=!1,r.missed=!1,r.r=t===nf.Extract?8.5:7,r.pos.x=0,r.pos.y=.6,r.pos.z=-205,t===nf.Extract&&e.events.emit($.Banner,0,0,0,0,0,`EXTRACTION GATE`,`Fly through to bank your run.`))}updateGates(e,t){let n=e.player;for(let r of e.gates.items){if(!r.alive)continue;let i=r.pos.z;r.pos.z+=e.flow*t,i<0&&r.pos.z>=0&&!r.passed&&(Math.hypot((n.pos.x-r.pos.x)*.85,n.pos.y-r.pos.y)<r.r-1.7&&e.status===`running`?(r.passed=!0,r.kind===nf.Extract?e.extract():(e.stats.gates++,e.addScore(Kf.gate,n.pos.x,n.pos.y+2,0,3,`GATE`),n.fuel=K(n.fuel+12,0,n.maxFuel),e.events.emit($.Sfx,0,0,0,1,1,`gate`),e.events.emit($.Flash,0,0,0,3,.5),e.events.emit($.Shake,0,0,0,.3))):r.missed=!0),r.pos.z>Hf.killZ+6&&(r.alive=!1)}}child(e,t,n){return new Ad(jd(`${e.seed}/${t}/${n}`))}rock(e,t,n,r,i,a,o,s=0,c=0,l=0){ph(e,n,r,i,a,o,s,c,l,t)}lane(e,t,n=1){let r=e.bounds.x,i=e.bounds.y;return{x:(t.next()+t.next()-1)*r*1.3*n,y:(t.next()+t.next()-1)*(i+1.4)*n+.4}}spawnPattern(e,t){let n=this.def,r=Object.keys(n.weights),i=r.map(e=>n.weights[e]??0),a=t.weighted(r,i),o=Hf.spawnZ+t.range(-8,4),s=this.lane(e,t);switch(a){case`single`:this.single(e,t,s.x,s.y,o);break;case`cluster`:this.cluster(e,t,s.x,s.y,o);break;case`wall`:this.wall(e,t,o);break;case`stream`:this.stream(e,t,o);break;case`vein`:this.vein(e,t);break;case`nova`:this.nova(e,t,o);break;case`rain`:this.rain(e,t,o);break;case`tunnel`:this.tunnel(e,t,o)}}pickShape(e){return e.weighted([Y.Boulder,Y.Shard,Y.Slab,Y.Ore],[5,3,3,this.sector===0?.8:1.2])}drift(e,t=2.6){return{vx:e.range(-t,t),vy:e.range(-t*.5,t*.5)}}single(e,t,n,r,i){let a=t.weighted([Jd.Large,Jd.Medium,Jd.Small],[3,4,3]),o=this.drift(t),s=Math.abs(i)/e.baseFlow;this.rock(e,t,this.pickShape(t),a,n-o.vx*s,r-o.vy*s,i,o.vx,o.vy,0)}cluster(e,t,n,r,i){let a=t.chance(.65),o=this.drift(t,1.4),s=Math.abs(i)/e.baseFlow,c=n-o.vx*s,l=r-o.vy*s;this.rock(e,t,this.pickShape(t),a?Jd.Large:Jd.Medium,c,l,i,o.vx,o.vy,0);let u=t.int(3,5);for(let n=0;n<u;n++){let r=n/u*6.28+t.range(-.4,.4),a=t.range(4.4,7);this.rock(e,t,this.pickShape(t),t.pick([Jd.Medium,Jd.Small,Jd.Small]),c+Math.cos(r)*a,l+Math.sin(r)*a*.7,i+t.range(-5,5),o.vx+t.range(-1.2,1.2),o.vy+t.range(-1,1),t.range(-4,4))}}wall(e,t,n){let r=e.bounds.x*1.35,i=t.int(2,6),a=t.range(-1,1.6);for(let o=0;o<9;o++){if(o===i)continue;let s=-r+o/8*r*2;this.rock(e,t,this.pickShape(t),t.chance(.4)?Jd.Medium:Jd.Small,s,a+t.range(-.8,.8),n+t.range(-2,2))}if(t.chance(.55)){let t=-r+i/8*r*2;Em(e,Q.Fuel,0,t,a,n)}}stream(e,t,n){let r=t.range(0,6.28),i=t.range(-6,6),a=t.range(-2,3),o=t.int(5,7);for(let s=0;s<o;s++){let c=(s-(o-1)/2)*4.3;this.rock(e,t,this.pickShape(t),Jd.Small,i+Math.cos(r)*c,a+Math.sin(r)*c*.55,n-s*3,0,0,Ch(46))}}vein(e,t){let n=this.lane(e,t,.8),r=Hf.spawnZ*.75;for(let i=0;i<3;i++){let a=i/3*6.28+.5;this.rock(e,t,Y.Ore,Jd.Medium,n.x+Math.cos(a)*4.5,n.y+Math.sin(a)*3,r+t.range(-3,3))}}nova(e,t,n){let r=t.range(-e.bounds.x*.7,e.bounds.x*.7),i=t.range(-1,2.5),a=Ch(13+this.sector*1.5);this.rock(e,t,Y.Nova,Jd.Medium,r,i,n,0,0,a),e.hint(`novaSeen`,`NOVA ROCK: ring turns green at 10 to 30 m. Shoot it there to wipe the field`,5);let o=t.int(3,5);for(let s=0;s<o;s++){let o=t.range(0,6.28),s=t.range(5,12);this.rock(e,t,this.pickShape(t),t.pick([Jd.Medium,Jd.Small,Jd.Small]),r+Math.cos(o)*s,i+Math.sin(o)*s*.6,n+t.range(-8,8),0,0,a)}}rain(e,t,n){for(let r=0;r<8;r++){let i=this.lane(e,t,1.1);this.rock(e,t,Y.Shard,Jd.Chunk,i.x,i.y,n-r*5,0,0,Ch(56))}}tunnel(e,t,n){let r=t.range(-e.bounds.x*.4,e.bounds.x*.4);for(let i=0;i<5;i++)for(let a of[-1,1])this.rock(e,t,this.pickShape(t),i%2?Jd.Small:Jd.Medium,r+a*(5.6+i%2*.8),.3+t.range(-1,1),n-i*9);Em(e,Q.Fuel,0,r,.4,n-18)}patrolEvent(e,t){let n=this.sector,r=e.player.fuel<e.player.maxFuel*.7,i=t.chance(r?.65:.3);if(t.weighted([X.Scout,X.Weaver],[n===0?1:2,n===0?0:n===1?1.4:1.8])===X.Weaver)ng(e,X.Weaver,t.int(2,3+(n>=4?2:0)),{rng:t}),e.events.emit($.Popup,e.player.pos.x,e.player.pos.y+3.2,0,1,1.2,`WEAVERS`);else{let r=i?t.int(4,5):t.int(3,5+ +(n>=4));ng(e,X.Scout,r,{cell:i,rng:t}),i&&(e.events.emit($.Popup,e.player.pos.x,e.player.pos.y+3.2,0,6,1.2,`FUEL CELL IN PATROL`),e.hint(`cell`,`A FUEL CELL RIDES INSIDE THE DRONE PATROL: kill them or boost through`))}}},rh=class{items=[];cursor=0;constructor(e,t){for(let n=0;n<e;n++){let e=t();e.slot=n,this.items.push(e)}}acquire(){let e=this.items.length;for(let t=0;t<e;t++){let n=(this.cursor+t)%e,r=this.items[n];if(!r.alive)return this.cursor=(n+1)%e,r.alive=!0,r.gen++,r}return null}get liveCount(){let e=0;for(let t of this.items)t.alive&&e++;return e}clear(){for(let e of this.items)e.alive=!1}},ih=class{shield=!1;magnet=!1;ram=!1;tank=!1;afterburner=!1},ah=class{pos=Ed();vel=Ed();knock=Ed();target=Ed();cursorX=0;cursorY=.05;hull=100;maxHull=100;fuel=100;maxFuel=100;boost=0;boosting=!1;stalled=!1;invuln=0;hitFlash=0;shieldUp=!1;weapon=$d.Pulse;tier=1;fireCd=0;muzzleAlt=0;overclock=0;mods=new ih;score=0;mult=1;chain=0;chainT=0;chainDecayT=0;scrap=0;scrapGoal=14;roll=0;pitch=0;thrust=.3;damageLevel=0;aimPoint=Ed(0,0,-70);lockKind=0;lockSlot=-1;lockDist=0;loadout;lowFuelWarned=!1;lowHullWarned=!1};function oh(e,t){e.loadout=t,e.pos=Ed(),e.vel=Ed(),e.knock=Ed(),e.target=Ed(),e.cursorX=0,e.cursorY=.05,e.maxHull=t.hull,e.hull=t.hull,e.maxFuel=t.fuel,e.fuel=t.fuel,e.boost=0,e.boosting=!1,e.stalled=!1,e.invuln=1.2,e.hitFlash=0,e.shieldUp=!1,e.weapon=t.weapon,e.tier=1,e.fireCd=0,e.muzzleAlt=0,e.overclock=0,e.mods=new ih,e.score=0,e.mult=1,e.chain=0,e.chainT=0,e.chainDecayT=0,e.scrap=0,e.scrapGoal=14,e.roll=0,e.pitch=0,e.thrust=.3,e.damageLevel=0,e.lockKind=0,e.lockSlot=-1,e.lowFuelWarned=!1,e.lowHullWarned=!1}function sh(e,t,n){let r=e.player,i=r.stalled?Wf.stallSpeedMul:1;r.cursorX=K(n.cursorX,Uf.cursorMinX,Uf.cursorMaxX),r.cursorY=K(n.cursorY,Uf.cursorMinY,Uf.cursorMaxY),Yp(K(r.cursorX,Uf.shipMinX,Uf.shipMaxX),K(r.cursorY-Uf.shipBelowCursor,Uf.shipMinY,Uf.shipMaxY),e.aspect,r.target);let a=Wf.followRate*r.loadout.speed*i,o=r.pos.x,s=r.pos.y;r.pos.x=Od(r.pos.x,r.target.x,a,t)+r.knock.x*t,r.pos.y=Od(r.pos.y,r.target.y,a,t)+r.knock.y*t,r.pos.x=K(r.pos.x,-e.bounds.x*1.08,e.bounds.x*1.08),r.pos.y=K(r.pos.y,-e.bounds.y*1.15,e.bounds.y*1.15),r.vel.x=(r.pos.x-o)/Math.max(t,1e-4),r.vel.y=(r.pos.y-s)/Math.max(t,1e-4);let c=Math.exp(-6*t);r.knock.x*=c,r.knock.y*=c,r.roll=Od(r.roll,K(-r.vel.x/16,-.85,.85),9,t),r.pitch=Od(r.pitch,K(r.vel.y/30,-.4,.4),8,t);let l=n.boost&&r.fuel>0&&!r.stalled;r.boost=Od(r.boost,+!!l,l?8:4.5,t),r.boost<.01&&(r.boost=0);let u=r.boosting;r.boosting=l&&r.boost>.35,r.boosting&&!u&&(e.events.emit($.Sfx,0,0,0,1,1,`boost`),e.events.emit($.Flash,0,0,0,3,.5),e.events.emit($.Shake,0,0,0,.3)),!r.boosting&&u&&e.events.emit($.Sfx,0,0,0,.5,1,`boostEnd`);let d=r.loadout.fuelUse;r.fuel-=Wf.idleDrain*d*t,l&&(r.fuel-=Wf.boostDrain*d*(r.mods.afterburner?.7:1)*t),n.overclock&&r.overclock<=0&&!r.stalled&&(r.fuel>=Wf.overclockCost*d?(r.fuel-=Wf.overclockCost*d,r.overclock=Wf.overclockTime,e.events.emit($.Sfx,0,0,0,1,1,`overclock`),e.events.emit($.Banner,0,0,0,0,0,`OVERCLOCK`,`Fire rate up. Kills extend it.`),e.events.emit($.Flash,0,0,0,3,.6)):(e.events.emit($.Sfx,0,0,0,.7,1,`deny`),e.events.emit($.Popup,r.pos.x,r.pos.y+2,0,1,1,`NEED FUEL`))),r.overclock>0&&(r.overclock-=t,r.overclock<=0&&(r.overclock=0,e.events.emit($.Sfx,0,0,0,.6,1,`overclockEnd`))),!r.stalled&&r.fuel<=0&&(r.fuel=0,r.stalled=!0,r.boost=0,r.overclock=0,e.events.emit($.Banner,0,0,0,0,0,`ENGINE STALL`,`Grab the blue cell`),e.hint(`stall`,`OUT OF FUEL: speed, fire rate, and hull all suffer. Any fuel cell restarts the engine`,6),e.events.emit($.Sfx,0,0,0,1,1,`stall`),e.events.emit($.Shake,0,0,0,.5),e.director.onStall(e)),r.stalled&&(r.fuel=Math.max(0,r.fuel),r.hull>8&&(r.hull=Math.max(8,r.hull-Wf.stallHullBleed*t)),r.fuel>=8&&(r.stalled=!1,e.events.emit($.Banner,0,0,0,0,0,`ENGINE ONLINE`,``),e.events.emit($.Sfx,0,0,0,1,1,`restart`))),r.fuel=K(r.fuel,0,r.maxFuel),r.fuel<r.maxFuel*.22&&!r.stalled?r.lowFuelWarned||(r.lowFuelWarned=!0,e.events.emit($.Popup,r.pos.x,r.pos.y+2.4,0,1,1,`LOW FUEL`),e.director.onLowFuel(e)):r.fuel>r.maxFuel*.4&&(r.lowFuelWarned=!1),r.invuln=Math.max(0,r.invuln-t),r.hitFlash=Math.max(0,r.hitFlash-t*3),r.shieldUp=r.mods.shield&&r.shieldUp,r.chain>0&&(r.chainT-=t,r.chainT<=0&&(r.chainDecayT-=t,r.chainDecayT<=0&&(r.chain=Math.max(0,r.chain-Kf.killsPerMult),r.mult=1+Math.floor(r.chain/Kf.killsPerMult),r.mult=Math.min(r.mult,Kf.maxMult),r.chainDecayT=1.1))),r.damageLevel=1-r.hull/r.maxHull;let f=r.stalled?.05+(Math.sin(e.time*31)>.3?.25:0):.32+.22*Math.min(1,Math.hypot(r.vel.x,r.vel.y)/22)+1*r.boost;r.thrust=Od(r.thrust,f,10,t)}function ch(e){let t=e.player,n=e.director.sector*Gf.perSector+Math.min(14,e.director.pressure*3),r=Gf.base+n,i=Gf.boost+n;return e.status===`extracted`?160:e.status===`running`?t.stalled?Gf.stall:r+(i-r)*t.boost:6}var lh=()=>({rocks:0,drones:0,mines:0,chained:0,novaClears:0,grazes:0,rams:0,gates:0,maxChain:0,maxMult:1,fuelGrabbed:0,scrapGrabbed:0,pickups:0,fuelCells:0,cardsDone:0,damageTaken:0,bossDown:!1,cause:``,sector:1}),uh={Bolt:0,Blast:1,Crash:2,Ram:3,Contact:4},dh=class{rng;seed;daily=!1;time=0;status=`running`;statusT=0;aspect=16/9;bounds={x:10,y:5};events=new Tm;player=new ah;boss=new uf;rocks=new rh(112,()=>new rf);drones=new rh(28,()=>new af);bolts=new rh(240,()=>new of);mines=new rh(16,()=>new sf);pickups=new rh(56,()=>new cf);gates=new rh(3,()=>new lf);patrols=[];blasts=[];director=new nh;flow=Gf.base;baseFlow=Gf.base;stats=lh();nextId=1;hitStopMs=0;sinceKill=99;novaT=0;novaKills=0;novaDist=30;chainKills=0;chainQuiet=0;hintsShown=new Set;cards=[];constructor(e,t,n=16/9){this.seed=e,this.rng=new Ad(e);for(let e=0;e<8;e++)this.patrols.push({alive:!1,id:e,x:0,y:0,z:0,stationZ:-55,age:0,life:14,swayX:3,swayY:1.5,phase:0,count:0});this.setAspect(n),this.reset(e,t,!1)}reset(e,t,n){this.seed=e,this.daily=n,this.rng=new Ad(e),this.time=0,this.status=`running`,this.statusT=0,this.events.clear(),this.rocks.clear(),this.drones.clear(),this.bolts.clear(),this.mines.clear(),this.pickups.clear(),this.gates.clear();for(let e of this.patrols)e.alive=!1;this.blasts.length=0,this.boss.alive=!1,this.boss.dying=0,this.stats=lh(),this.flow=Gf.base,this.baseFlow=Gf.base,this.hitStopMs=0,this.nextId=1,this.novaT=0,this.novaKills=0,this.chainKills=0,this.chainQuiet=0,this.hintsShown.clear(),this.cards=Bm(e),oh(this.player,t),this.director.reset(this),Yp(0,this.player.cursorY-Uf.shipBelowCursor,this.aspect,this.player.pos),this.player.target.x=this.player.pos.x,this.player.target.y=this.player.pos.y}setAspect(e){this.aspect=K(e,.9,3.2);let t=Ed();Yp(Uf.shipMaxX,0,this.aspect,t),this.bounds.x=Math.abs(t.x),Yp(0,Uf.shipMaxY,this.aspect,t);let n=t.y;Yp(0,Uf.shipMinY,this.aspect,t),this.bounds.y=Math.max(Math.abs(n),Math.abs(t.y))}update(e,t){let n=this.player;this.events.clear(),this.time+=e,this.sinceKill+=e,this.status===`dying`?(this.statusT+=e,this.statusT>.85&&(this.status=`over`)):this.status===`extracted`&&(this.statusT+=e),this.status===`running`?sh(this,e,t):(n.boost=Od(n.boost,+(this.status===`extracted`),3,e),n.boosting=!1),this.baseFlow=Gf.base+this.director.sector*Gf.perSector+Math.min(14,this.director.pressure*3),this.flow=Od(this.flow,ch(this),Gf.response,e),this.director.update(this,e),kh(this),this.status===`running`&&Nh(this,e,t.fire),mh(this,e),xh(this,e),ig(this,e),Hh(this,e),Ph(this,e),Dm(this,e),Km(this,e),Qh(this,e),this.updateNovaClear(e),this.updateChainPayout(e),Hm(this)}hint(e,t,n=4.5){this.hintsShown.has(e)||(this.hintsShown.add(e),this.events.emit($.Hint,0,0,0,n,0,t))}noteChained(){this.chainKills++,this.chainQuiet=.55}updateChainPayout(e){if(this.chainKills===0||(this.chainQuiet-=e,this.chainQuiet>0))return;let t=this.chainKills;if(this.chainKills=0,t<3||this.status!==`running`)return;let n=this.player,r=Math.round(t*45*n.mult);n.score+=r,this.events.emit($.Popup,n.pos.x,n.pos.y+3.4,0,4,1.6,`CHAIN x${t} +${r}`),this.events.emit($.Sfx,0,0,0,1,.8+Math.min(t,12)*.05,`multUp`),this.events.emit($.Shake,0,0,0,Math.min(.5,.15+t*.03)),this.hint(`chain`,`CHAIN REACTION: explosions push and crack nearby rocks`)}updateNovaClear(e){if(!(this.novaT<=0)&&(this.novaT-=e,!(this.novaT>0))){if(this.novaKills>=5){let e=K(1.6-this.novaDist/30,.6,1.6),t=Math.round(this.novaKills*90*e);this.stats.novaClears++,this.addScore(t,this.player.pos.x,this.player.pos.y+3.2,0,5,`NOVA CLEAR x${this.novaKills}`),this.events.emit($.Sfx,0,0,0,1,1,`multUp`)}this.novaKills=0}}registerKill(e,t,n,r,i={}){let a=this.player;if(this.status!==`running`)return 0;let o=e*a.mult;a.boosting&&(o*=1.5),i.chained&&(o*=1.5),o=Math.round(o),a.score+=o,a.chain+=1,a.chainT=Kf.chainWindow,a.chainDecayT=1.1;let s=a.mult;if(a.mult=Math.min(Kf.maxMult,1+Math.floor(a.chain/Kf.killsPerMult)),this.stats.maxChain=Math.max(this.stats.maxChain,a.chain),this.stats.maxMult=Math.max(this.stats.maxMult,a.mult),a.mult>s&&(this.events.emit($.Popup,a.pos.x,a.pos.y+2.6,0,3,1.6,`MULT x${a.mult}`),this.events.emit($.Sfx,0,0,0,.9,.9+a.mult*.08,`multUp`)),i.big||i.chained||e>=30){let a=i.chained?4:i.big?2:0;this.events.emit($.Popup,t,n+.8,r,a,i.big?1.3:e>=60?1:.75,`+${o}`)}return a.overclock>0&&(a.overclock=Math.min(a.overclock+Wf.overclockKillBonus,12)),this.sinceKill=0,o}addScore(e,t,n,r,i=0,a=``){let o=this.player;if(this.status!==`running`)return;let s=Math.round(e*o.mult);o.score+=s,a&&this.events.emit($.Popup,t,n,r,i,.85,`${a} +${s}`)}hurtPlayer(e,t,n,r,i){let a=this.player;if(this.status!==`running`||a.invuln>0)return!1;if(a.shieldUp)return a.shieldUp=!1,a.mods.shield=!1,a.invuln=.9,this.events.emit($.Sfx,0,0,0,1,1,`shieldBreak`),this.events.emit($.Shake,0,0,0,.5),this.events.emit($.Shock,a.pos.x,a.pos.y,a.pos.z,4.5,1),this.events.emit($.Popup,a.pos.x,a.pos.y+2.2,0,5,1.3,`SHIELD BROKE`),this.events.emit($.HitStop,0,0,0,60),!1;e*=K(.62+this.time/120*.38,.62,1),a.hull-=e,this.stats.damageTaken+=e,a.invuln=Wf.invulnTime,a.hitFlash=1;let o=a.mult>1;a.chain=0,a.mult=1,a.chainT=0,this.events.emit($.ShipHit,n,r,i,e),this.events.emit($.Shake,0,0,0,.85),this.events.emit($.HitStop,0,0,0,110),this.events.emit($.Flash,0,0,0,0,K(.45+e/40,.5,1)),this.events.emit($.Sfx,0,0,0,1,1,`hurt`),this.events.emit($.Popup,a.pos.x,a.pos.y+2.2,0,1,1.4,`-${Math.round(e)} HULL`),o&&this.events.emit($.Popup,a.pos.x-1.5,a.pos.y+3.3,0,1,1,`MULT LOST`);let s=n-a.pos.x>=0?1:-1;return a.knock.x-=s*14,a.hull<=0?(a.hull=0,this.killPlayer(t)):a.hull<a.maxHull*.3&&!a.lowHullWarned&&(a.lowHullWarned=!0,this.events.emit($.Banner,0,0,0,0,0,`HULL CRITICAL`,`Find a repair kit`),this.events.emit($.Sfx,0,0,0,1,1,`alarm`),this.director.onLowHull(this)),!0}killPlayer(e){if(this.status!==`running`)return;this.status=`dying`,this.statusT=0,this.stats.cause=e;let t=this.player;this.events.emit($.ShipDead,t.pos.x,t.pos.y,t.pos.z),this.events.emit($.Boom,t.pos.x,t.pos.y,t.pos.z,4,3),this.events.emit($.Shake,0,0,0,1),this.events.emit($.HitStop,0,0,0,260),this.events.emit($.Sfx,0,0,0,1,1,`shipDeath`)}extract(){if(this.status!==`running`)return;this.status=`extracted`,this.statusT=0;let e=this.player,t=Kf.extract+Math.round(e.hull*20+e.fuel*10);e.score+=t,this.stats.cause=`Extracted`,this.events.emit($.Milestone,0,0,0,1),this.events.emit($.Popup,e.pos.x,e.pos.y+2.5,0,5,1.6,`EXTRACTED +${t}`),this.events.emit($.Sfx,0,0,0,1,1,`extract`)}},fh=2.55;function ph(e,t,n,r,i,a,o=0,s=0,c=0,l=e.rng){let u=e.rocks.acquire();if(!u)return null;u.id=e.nextId++,u.shape=t,u.size=n,u.variant=l.int(0,2);let d=l.range(.9,1.1),f=Yd[n]*d;t===Y.Slab&&(f*=.95),t===Y.Nova&&(f=fh),u.r=f,u.mass=f*f*f*.3;let p=Xd[n]*d;t===Y.Ore&&(p*=1.2),t===Y.Nova&&(p=6),u.hp=p,u.maxHp=p,u.pos.x=r,u.pos.y=i,u.pos.z=a,u.vel.x=o,u.vel.y=s,u.vel.z=c,u.rot.x=l.range(0,6.28),u.rot.y=l.range(0,6.28),u.rot.z=l.range(0,6.28);let m=1.5/(.6+f*.4);return u.spin.x=l.range(-1,1)*m,u.spin.y=l.range(-1,1)*m,u.spin.z=l.range(-1,1)*m*.6,u.flash=0,u.crack=0,u.fuse=0,u.grazed=!1,u.age=0,u.seed=l.next()*100,u.chained=!1,u}function mh(e,t){let n=e.flow,r=e.player;for(let i of e.rocks.items)if(i.alive){if(i.age+=t,i.pos.x+=i.vel.x*t,i.pos.y+=i.vel.y*t,i.pos.z+=(i.vel.z+n)*t,i.rot.x+=i.spin.x*t,i.rot.y+=i.spin.y*t,i.rot.z+=i.spin.z*t,i.flash=Math.max(0,i.flash-t*7),i.fuse>0){i.fuse-=t,i.flash=1,i.fuse<=0&&vh(e,i,uh.Blast);continue}if(!i.grazed&&i.pos.z>-i.r*.5&&e.status===`running`){i.grazed=!0;let t=Math.hypot(i.pos.x-r.pos.x,i.pos.y-r.pos.y)-i.r*.9-1.15;t>0&&t<2.1&&i.size<=Jd.Small&&hh(e,i.pos.x,i.pos.y)}(i.pos.z>Hf.killZ||Math.abs(i.pos.x)>130||Math.abs(i.pos.y)>80||i.pos.z<-420)&&(i.alive=!1)}}function hh(e,t,n){let r=e.player;e.stats.grazes++;let i=r.boosting?2.2:.8;r.fuel=Math.min(r.maxFuel,r.fuel+i),e.addScore(Kf.graze*(r.boosting?2:1),t,n+1,0,3,`GRAZE`),e.events.emit($.Graze,t,n,0),e.events.emit($.Sfx,t,n,0,.6,1+e.rng.range(0,.25),`graze`)}function gh(e,t,n,r,i=0,a=0,o=-1){if(!t.alive||t.fuse>0)return!1;if(t.hp-=n,t.flash=1,t.crack=K(1-t.hp/t.maxHp,0,1),r===uh.Bolt){let e=.7/Math.max(.7,t.mass*.35);t.vel.x+=i*e,t.vel.y+=a*e,t.vel.z+=o*e*.6,t.spin.x+=a*.25,t.spin.y-=i*.25}return t.hp>0?!1:r===uh.Blast||r===uh.Crash?(t.hp=.001,t.fuse=.05+e.rng.range(0,.16)+(r===uh.Crash?.03:0),t.chained=!0,!0):(vh(e,t,r),!0)}var _h=[3,3,2,0];function vh(e,t,n){if(!t.alive)return;t.alive=!1;let{x:r,y:i,z:a}=t.pos,o=n===uh.Blast||n===uh.Crash||t.chained,s=t.size,c=t.shape===Y.Nova;e.stats.rocks++,o&&(e.stats.chained++,e.noteChained()),e.novaT>0&&e.novaKills++;let l=Kf.rock[s];t.shape===Y.Ore&&(l*=1.5),c&&(l=250),e.registerKill(l,r,i,a,{chained:o,big:s<=Jd.Medium});let u=t.r;e.events.emit($.Boom,r,i,a,u,c?5:+(n===uh.Ram)),e.events.emit($.Debris,r,i,a,10-s*2,u);let d=c?`novaBoom`:s===Jd.Large?`boomBig`:s===Jd.Medium?`boomMid`:`boomSmall`;if(e.events.emit($.Sfx,r,i,a,1,1,d),(s<=Jd.Small||c)&&(e.events.emit($.HitStop,0,0,0,s===Jd.Large?70:s===Jd.Medium?38:22),e.events.emit($.Shake,0,0,0,s===Jd.Large?.34:s===Jd.Medium?.16:.07)),c){yh(e,r,i,a);return}if(s<=Jd.Small){let t=[8.5,5.8,3.4][s],n=[4.2,2.4,.9][s],o=[16,10,5][s];Zh(e,{x:r,y:i,z:a,radius:t,dmg:n,push:o}),e.events.emit($.Shock,r,i,a,t,.5)}Im(e,t);let f=_h[s];if(f>0&&e.rocks.liveCount<96){let n=s+1,o=t.shape===Y.Shard?Y.Shard:Y.Boulder,c=s===Jd.Small?2:e.rng.int(2,f),l=e.rng;for(let d=0;d<c;d++){let c=l.range(0,Math.PI*2),d=l.range(-.5,.9),f=Math.cos(c)*Math.sqrt(1-d*d*.5),p=Math.sin(c)*Math.sqrt(1-d*d*.5),m=d,h=l.range(6,14)*(s===Jd.Large?1.15:1);ph(e,o,n,r+f*u*.5,i+p*u*.5,a+m*u*.5,t.vel.x+f*h,t.vel.y+p*h,t.vel.z+m*h)}}}function yh(e,t,n,r){let i=e.player,a=Math.hypot(t-i.pos.x,n-i.pos.y,r-i.pos.z);e.novaT=1.4,e.novaKills=0,e.novaDist=a,Zh(e,{x:t,y:n,z:r,radius:32,dmg:30,push:38,playerDmg:qf.nova,playerRadius:8.5,nova:!0,clearBolts:!0}),e.events.emit($.Shock,t,n,r,32,1),e.events.emit($.Flash,0,0,0,2,a<40?1:.5),e.events.emit($.Shake,0,0,0,a<20?1:.7),e.events.emit($.HitStop,0,0,0,170),e.events.emit($.Banner,0,0,0,0,0,a<26&&a>9?`NOVA CLEAR`:`NOVA`,``)}function bh(e,t,n,r,i,a,o){let s=e.mines.acquire();return s?(s.pos.x=t,s.pos.y=n,s.pos.z=r,s.vel.x=i,s.vel.y=a,s.vel.z=o,s.hp=2,s.age=0,s.flash=0,s.grazed=!1,s):null}function xh(e,t){let n=e.player;for(let r of e.mines.items)r.alive&&(r.age+=t,r.vel.x+=K(n.pos.x-r.pos.x,-6,6)*.35*t,r.vel.y+=K(n.pos.y-r.pos.y,-4,4)*.35*t,r.pos.x+=r.vel.x*t,r.pos.y+=r.vel.y*t,r.pos.z+=(r.vel.z+e.flow)*t,r.flash=Math.max(0,r.flash-t*6),r.pos.z>Hf.killZ&&(r.alive=!1),r.alive&&e.status===`running`&&r.pos.z>-4&&Math.hypot(r.pos.x-n.pos.x,r.pos.y-n.pos.y,r.pos.z-n.pos.z)<3.3&&Sh(e,r,99,uh.Contact))}function Sh(e,t,n,r){if(!t.alive||(t.hp-=n,t.flash=1,t.hp>0))return!1;t.alive=!1,e.stats.mines++,e.novaT>0&&e.novaKills++;let{x:i,y:a,z:o}=t.pos;return e.events.emit($.Boom,i,a,o,2.4,2),e.events.emit($.Sfx,i,a,o,1,1.1,`boomMid`),e.events.emit($.Shock,i,a,o,6,.6),e.events.emit($.HitStop,0,0,0,30),r!==uh.Contact&&e.registerKill(Kf.mine,i,a,o,{chained:r===uh.Blast}),Zh(e,{x:i,y:a,z:o,radius:6.2,dmg:3,push:14,playerDmg:qf.mine,playerRadius:3.7,clearBolts:!1}),!0}function Ch(e){return-(Gf.base-e)}var wh={[$d.Pulse]:{rate:[11,8.5,8.5],dmg:[1,1,1.25],speed:150,life:1.25,radius:[.3,.3,.36]},[$d.Scatter]:{rate:[2.7,3.3,3.9],dmg:[.95,1.05,1.15],speed:112,life:.66,radius:[.36,.36,.4]},[$d.Lance]:{rate:[1.7,2,2.4],dmg:[4.5,6.5,9],speed:240,life:.85,radius:[.55,.6,.66]},[$d.Seeker]:{rate:[1.7,2.1,2.6],dmg:[3,3.5,4],speed:58,life:2.4,radius:[.5,.5,.55]}},Th=[[-1.3,-.12,-.9],[1.3,-.12,-.9],[0,.05,-2]],Eh=Up(),Dh=Ed(),Oh={x:0,y:0};function kh(e){let t=e.player;Wp(t.pos.x,t.pos.y,t.boost,e.aspect,Eh),Kp(Eh,t.cursorX,t.cursorY,Dh);let n=(-70-Eh.z)/Dh.z;t.aimPoint.x=Eh.x+Dh.x*n,t.aimPoint.y=Eh.y+Dh.y*n,t.aimPoint.z=Eh.z+Dh.z*n,t.lockKind=0,t.lockSlot=-1,t.lockDist=0;let r=1/0,i=0,a=0,o=0,s=0,c=0,l=0,u=wh[t.weapon],d=(n,u,d,f,p,m,h,g,_)=>{if(p>-5)return;let v=Gp(Eh,d,f,p,Oh);if(v<0)return;let y=m/(v*Eh.tanHalf),b=Math.hypot((Oh.x-t.cursorX)*e.aspect,Oh.y-t.cursorY);if(b>.07+y*.95)return;let x=b-y*.55+v*8e-4;x<r&&(r=x,t.lockKind=n,t.lockSlot=u,i=d,a=f,o=p,s=h,c=g,l=_)};for(let t of e.rocks.items)t.alive&&d(1,t.slot,t.pos.x,t.pos.y,t.pos.z,t.r,t.vel.x,t.vel.y,t.vel.z+e.flow);for(let t of e.drones.items)t.alive&&d(2,t.slot,t.pos.x,t.pos.y,t.pos.z,t.r,t.vel.x,t.vel.y,t.vel.z);for(let t of e.mines.items)t.alive&&d(3,t.slot,t.pos.x,t.pos.y,t.pos.z,t.r,t.vel.x,t.vel.y,t.vel.z+e.flow);let f=e.boss;if(f.alive&&f.dying<=0)for(let e=0;e<f.targets.length;e++){let t=f.targets[e];t.alive&&d(4,e,t.x,t.y,t.z,t.r,0,0,0)}if(t.lockKind!==0){let e=t.pos.x,n=t.pos.y,r=i,d=a,f=o;for(let t=0;t<2;t++){let t=Math.hypot(r-e,d-n,f)/u.speed;r=i+s*t*.8,d=a+c*t*.8,f=o+l*t*.8}t.aimPoint.x=r,t.aimPoint.y=d,t.aimPoint.z=f,t.lockDist=-o}}function Ah(e,t,n,r,i,a,o,s,c,l,u,d){let f=e.bolts.acquire();return f?(f.kind=t,f.friendly=n,f.pos.x=r,f.pos.y=i,f.pos.z=a,f.vel.x=o,f.vel.y=s,f.vel.z=c,f.dmg=l,f.r=u,f.life=d,f.pierce=0,f.hitIds.length=0,f.homingId=-1,f.homingKind=0,f.grazed=!1,f.age=0,f.tier=1,f):null}function jh(e,t,n,r,i,a,o,s,c,l,u=.42,d=9){let f=Math.hypot(a,o,s)||1;return Ah(e,t,!1,n,r,i,a/f*c,o/f*c,s/f*c,l,u,d)}function Mh(e,t,n,r,i,a,o,s,c,l=0){let u=e.player,d=Th[n],f=u.pos.x+d[0],p=u.pos.y+d[1],m=d[2],h=u.aimPoint.x-f,g=u.aimPoint.y-p,_=u.aimPoint.z-m,v=Math.hypot(h,g,_)||1;if(h/=v,g/=v,_/=v,r>0){h+=e.rng.range(-r,r),g+=e.rng.range(-r,r),_+=e.rng.range(-r,r)*.3;let t=Math.hypot(h,g,_);h/=t,g/=t,_/=t}let y=Ah(e,t,!0,f,p,m,h*i+u.vel.x*.25,g*i+u.vel.y*.25,_*i,a,o,s);return y&&(y.tier=c,y.pierce=l),y}function Nh(e,t,n){let r=e.player;if(r.fireCd-=t,!n||r.fireCd>0)return;let i=r.tier-1,a=wh[r.weapon],o=r.overclock>0,s=a.rate[i]*(o?1.8:1)*(r.stalled?Wf.stallFireMul:1),c=a.dmg[i]*(o?1.2:1),l=a.radius[i];switch(r.fireCd=Math.max(r.fireCd,-t)+1/s,r.weapon){case $d.Pulse:if(r.tier===1){let t=r.muzzleAlt++%2;Mh(e,Z.Pulse,t,.006,a.speed,c,l,a.life,1),e.events.emit($.Muzzle,0,0,0,t)}else Mh(e,Z.Pulse,0,.006,a.speed,c,l,a.life,r.tier),Mh(e,Z.Pulse,1,.006,a.speed,c,l,a.life,r.tier),e.events.emit($.Muzzle,0,0,0,0),e.events.emit($.Muzzle,0,0,0,1),r.tier>=3&&(Mh(e,Z.Pulse,2,.004,a.speed*1.05,c*1.2,l*1.2,a.life,3),e.events.emit($.Muzzle,0,0,0,2));e.events.emit($.Sfx,0,0,0,.5,.95+e.rng.range(0,.12)+(o?.2:0),`shotPulse`);break;case $d.Scatter:{let t=[5,7,10][i];for(let n=0;n<t;n++)Mh(e,Z.Pellet,n%2,[.11,.13,.15][i],a.speed*e.rng.range(.92,1.08),c,l,a.life,r.tier);e.events.emit($.Muzzle,0,0,0,0),e.events.emit($.Muzzle,0,0,0,1),e.events.emit($.Sfx,0,0,0,.8,.95+e.rng.range(0,.1),`shotScatter`),e.events.emit($.Shake,0,0,0,.05);break}case $d.Lance:{let t=[3,5,8][i];r.tier>=3?(Mh(e,Z.Lance,0,0,a.speed,c,l,a.life,r.tier,t),Mh(e,Z.Lance,1,0,a.speed,c,l,a.life,r.tier,t)):Mh(e,Z.Lance,2,0,a.speed,c,l,a.life,r.tier,t),e.events.emit($.Muzzle,0,0,0,2),e.events.emit($.Sfx,0,0,0,.9,.95+e.rng.range(0,.06),`shotLance`),e.events.emit($.Shake,0,0,0,.09);break}case $d.Seeker:{let t=[2,3,4][i];for(let n=0;n<t;n++){let t=Mh(e,Z.Missile,n%2,.12,a.speed,c,l,a.life,r.tier);t&&r.lockKind!==0&&(t.homingId=r.lockSlot,t.homingKind=r.lockKind)}e.events.emit($.Muzzle,0,0,0,0),e.events.emit($.Muzzle,0,0,0,1),e.events.emit($.Sfx,0,0,0,.8,.95+e.rng.range(0,.1),`shotSeeker`);break}}}function Ph(e,t){let n=e.player;for(let r of e.bolts.items){if(!r.alive)continue;if(r.age+=t,r.life-=t,r.kind===Z.Missile){let n=0,i=0,a=0,o=!1;if(r.homingId>=0){if(r.homingKind===2){let t=e.drones.items[r.homingId];t.alive&&(n=t.pos.x,i=t.pos.y,a=t.pos.z,o=!0)}else if(r.homingKind===3){let t=e.mines.items[r.homingId];t.alive&&(n=t.pos.x,i=t.pos.y,a=t.pos.z,o=!0)}else if(r.homingKind===4){let t=e.boss.targets[r.homingId];t&&t.alive&&e.boss.alive&&(n=t.x,i=t.y,a=t.z,o=!0)}else{let t=e.rocks.items[r.homingId];t.alive&&(n=t.pos.x,i=t.pos.y,a=t.pos.z,o=!0)}}if(!o){let t=3600;for(let s of e.rocks.items){if(!s.alive||s.pos.z>r.pos.z-2)continue;let e=s.pos.x-r.pos.x,c=s.pos.y-r.pos.y,l=s.pos.z-r.pos.z,u=e*e+c*c+l*l;u<t&&(t=u,n=s.pos.x,i=s.pos.y,a=s.pos.z,o=!0)}}let s=Math.min(Math.hypot(r.vel.x,r.vel.y,r.vel.z)+90*t,95);if(o){let e=n-r.pos.x,o=i-r.pos.y,c=a-r.pos.z,l=Math.hypot(e,o,c)||1;e/=l,o/=l,c/=l;let u=r.vel.x,d=r.vel.y,f=r.vel.z,p=Math.hypot(u,d,f)||1,m=K(4.2*t,0,1),h=u/p+(e-u/p)*m,g=d/p+(o-d/p)*m,_=f/p+(c-f/p)*m,v=Math.hypot(h,g,_)||1;h/=v,g/=v,_/=v,r.vel.x=h*s,r.vel.y=g*s,r.vel.z=_*s}else{let e=Math.hypot(r.vel.x,r.vel.y,r.vel.z)||1;r.vel.x*=s/e,r.vel.y*=s/e,r.vel.z*=s/e}}let i=r.pos.z;if(r.pos.x+=r.vel.x*t,r.pos.y+=r.vel.y*t,r.pos.z+=r.vel.z*t,!r.friendly&&!r.grazed&&i<0&&r.pos.z>=0&&e.status===`running`){r.grazed=!0;let t=Math.hypot(r.pos.x-n.pos.x,r.pos.y-n.pos.y)-1.2-r.r;t>0&&t<1.7&&hh(e,r.pos.x,r.pos.y)}(r.life<=0||r.pos.z>Hf.killZ||r.pos.z<-320||Math.abs(r.pos.x)>150||Math.abs(r.pos.y)>100)&&(r.kind===Z.Missile&&r.life<=0&&Fh(e,r),r.alive=!1)}}function Fh(e,t){let n=[2,2.5,3][K(t.tier-1,0,2)];Zh(e,{x:t.pos.x,y:t.pos.y,z:t.pos.z,radius:4.4,dmg:n,push:10}),e.events.emit($.Boom,t.pos.x,t.pos.y,t.pos.z,1.1,4),e.events.emit($.Sfx,t.pos.x,t.pos.y,t.pos.z,.7,1.2,`boomSmall`),e.events.emit($.Shock,t.pos.x,t.pos.y,t.pos.z,4.4,.4)}var Ih=Jf.stationZ,Lh=Jf.plateRing,Rh=44,zh=90;function Bh(e){let t=e.boss;t.alive=!0,t.gen++,t.pos.x=0,t.pos.y=1.8,t.pos.z=Hf.spawnZ-15,t.phase=0,t.t=0,t.spin=0,t.coreOpen=0,t.flash=0,t.dying=0,t.entered=!1,t.telegraph=0,t.fireT=3.2,t.summonT=6,t.beamT=7;let n=1+e.director.bossLevel*.25;t.plates=[0,1,2,3].map(e=>({hp:Rh*n,maxHp:Rh*n,flash:0,angle:Math.PI/2*e})),t.coreMax=zh*n,t.coreHp=t.coreMax,t.hp=t.coreMax+Rh*n*4,t.maxHp=t.hp;for(let e of t.targets)e.alive=!0;t.targets[4].alive=!0,Vh(e),e.events.emit($.Sfx,0,0,0,1,1,`bossRoar`)}function Vh(e){let t=e.boss;for(let e=0;e<4;e++){let n=t.spin+t.plates[e].angle,r=t.targets[e];r.x=t.pos.x+Math.cos(n)*Lh,r.y=t.pos.y+Math.sin(n)*Lh*Jf.ringSquash,r.z=t.pos.z+1.5,r.r=Jf.plateRadius,r.alive=t.plates[e].hp>0}let n=t.targets[4];n.x=t.pos.x,n.y=t.pos.y,n.z=t.pos.z+1.2,n.r=Jf.coreRadius,n.alive=!0}function Hh(e,t){let n=e.boss;if(!n.alive)return;let r=e.player;n.t+=t,n.flash=Math.max(0,n.flash-t*6);for(let e of n.plates)e.flash=Math.max(0,e.flash-t*6);if(n.dying>0){Jh(e,t);return}if(n.entered?(n.pos.x=Dd(n.pos.x,r.pos.x*.5+Math.sin(n.t*.3)*4,1-Math.exp(-.9*t)),n.pos.y=1.8+Math.sin(n.t*.45)*1.4,n.pos.z=Dd(n.pos.z,Ih+(e.flow-e.baseFlow)*.35,1-Math.exp(-1.5*t))):(n.pos.z=Math.min(Ih,n.pos.z+52*t),n.pos.z>=Ih&&(n.entered=!0,e.events.emit($.Banner,0,0,0,0,0,`HIVE GATE`,`Break the plates. Open the core.`),e.events.emit($.Shake,0,0,0,.5))),n.spin+=t*(n.phase===0?.55:.9),n.phase=n.plates.filter(e=>e.hp>0).length>0?0:1,n.coreOpen=Dd(n.coreOpen,+(n.phase===1),1-Math.exp(-3*t)),Vh(e),!n.entered||e.status!==`running`)return;let i=1+(1-K(Uh(n),0,1))*.5+e.director.bossLevel*.2;if(n.fireT-=t*i,n.fireT<=0&&(Wh(e,n.phase===0?5:9,n.phase===0?.13:.11),(n.phase===1||e.rng.chance(.5))&&Gh(e,n.phase===0?16:22,n.phase===0?1:2),n.fireT=n.phase===0?2.9:2.3),n.phase===1){if(n.beamT-=t*i,n.beamT<1.3&&n.beamT>0){if(n.telegraph=1-n.beamT/1.3,n.beamT>.4){let e=r.pos.x-n.pos.x,t=r.pos.y-n.pos.y,i=-n.pos.z,a=Math.hypot(e,t,i)||1;e/=a,t/=a,i/=a,n.beamAim.x=Dd(n.beamAim.x,e,.2),n.beamAim.y=Dd(n.beamAim.y,t,.2),n.beamAim.z=Dd(n.beamAim.z,i,.2)}}else n.telegraph=0;if(n.beamT<=0){for(let t=0;t<3;t++){let r=(t-1)*.06;jh(e,Z.Beam,n.pos.x,n.pos.y,n.pos.z+3,n.beamAim.x+r,n.beamAim.y,n.beamAim.z,96+t*8,qf.bossBolt*1.6,.6,4)}e.events.emit($.Sfx,0,0,0,1,.7,`lancerFire`),e.events.emit($.Shake,0,0,0,.3),n.telegraph=0,n.beamT=5.5}}n.summonT-=t,n.summonT<=0&&(e.drones.liveCount<8&&(ng(e,n.phase===0?X.Scout:X.Weaver,n.phase===0?3:2,{x:n.pos.x,y:n.pos.y-2,stationZ:-50,life:11}),e.events.emit($.Popup,n.pos.x,n.pos.y-3,n.pos.z+4,1,1.2,`REINFORCEMENTS`)),n.summonT=n.phase===0?9:11)}var Uh=e=>{let t=e.coreHp;for(let n of e.plates)t+=Math.max(0,n.hp);return t/e.maxHp};function Wh(e,t,n){let r=e.boss,i=e.player,a=i.pos.x+i.vel.x*.3,o=i.pos.y+i.vel.y*.3,s=27+e.director.bossLevel*4;for(let i=0;i<t;i++){let c=(i-(t-1)/2)*n*12;jh(e,Z.Orb,r.pos.x,r.pos.y,r.pos.z+3,a-r.pos.x+c,o-r.pos.y,-r.pos.z,s,qf.bossBolt,.58,8)}e.events.emit($.Sfx,0,0,0,.9,.7,`enemyShot`)}function Gh(e,t,n){let r=e.boss,i=e.rng.range(0,Math.PI*2),a=23+e.director.bossLevel*3;for(let o=0;o<t;o++){let s=o/t*Math.PI*2;Array.from({length:n},(e,t)=>i+t*Math.PI*2/n).some(e=>Math.abs(Math.atan2(Math.sin(s-e),Math.cos(s-e)))<.42)||jh(e,Z.Orb,r.pos.x,r.pos.y,r.pos.z+3,Math.cos(s)*.62,Math.sin(s)*.36-.02,1,a,qf.bossBolt,.58,8)}e.events.emit($.Sfx,0,0,0,1,.55,`enemyShot`),e.events.emit($.Shock,r.pos.x,r.pos.y,r.pos.z+3,9,.7)}function Kh(e,t,n,r,i,a,o=-1){let s=e.boss;if(!s.alive||s.dying>0||!s.entered)return;if(o<0){let e=1/0;for(let t=0;t<s.targets.length;t++){let a=s.targets[t];if(!a.alive)continue;let c=Math.hypot(n-a.x,r-a.y,i-a.z);c<e&&(e=c,o=t)}if(o<0)return}if(o===4){if(s.phase===0){a&&e.events.emit($.Popup,n,r+1,i,1,.9,`SHIELDED`);return}s.coreHp-=t,s.flash=1,s.coreHp<=0&&qh(e);return}let c=s.plates[o];if(!(c.hp<=0)&&(c.hp-=t,c.flash=1,c.hp<=0)){let t=s.targets[o];e.events.emit($.Boom,t.x,t.y,t.z,3.6,6),e.events.emit($.Shock,t.x,t.y,t.z,12,.8),e.events.emit($.Sfx,t.x,t.y,t.z,1,.9,`boomBig`),e.events.emit($.Shake,0,0,0,.6),e.events.emit($.HitStop,0,0,0,120),e.events.emit($.Debris,t.x,t.y,t.z,16,3),e.registerKill(800,t.x,t.y,t.z,{big:!0}),Em(e,Q.Fuel,0,t.x,t.y,t.z+4,e.rng.range(-3,3),e.rng.range(-2,2),0),o%2==0&&Em(e,Q.Repair,0,t.x,t.y,t.z+4,e.rng.range(-3,3),0,0),s.plates.filter(e=>e.hp>0).length===0?(e.events.emit($.Banner,0,0,0,0,0,`CORE EXPOSED`,`Hit the red eye.`),e.events.emit($.Sfx,0,0,0,1,1,`bossRoar`)):e.events.emit($.Popup,t.x,t.y+3,t.z,3,1.4,`PLATE DOWN`)}}function qh(e){let t=e.boss;t.dying=.001,t.telegraph=0,e.stats.bossDown=!0,e.events.emit($.Banner,0,0,0,0,0,`HIVE GATE DOWN`,``),e.events.emit($.HitStop,0,0,0,260),e.events.emit($.Sfx,0,0,0,1,1,`bossRoar`)}function Jh(e,t){let n=e.boss,r=n.dying;if(n.dying+=t,n.spin+=t*2.4,Vh(e),Math.floor(r*9)!==Math.floor(n.dying*9)){let t=e.rng.range(0,6.28),r=e.rng.range(0,Lh),i=n.pos.x+Math.cos(t)*r,a=n.pos.y+Math.sin(t)*r*Jf.ringSquash;e.events.emit($.Boom,i,a,n.pos.z+2,e.rng.range(2.5,5),6),e.events.emit($.Sfx,i,a,n.pos.z,.8,e.rng.range(.6,1),`boomBig`),e.events.emit($.Shake,0,0,0,.45)}if(r<3.1&&n.dying>=3.1){e.events.emit($.Boom,n.pos.x,n.pos.y,n.pos.z+2,11,5),e.events.emit($.Shock,n.pos.x,n.pos.y,n.pos.z,60,1),e.events.emit($.Flash,0,0,0,2,1),e.events.emit($.Shake,0,0,0,1),e.events.emit($.Sfx,0,0,0,1,.6,`novaBoom`),e.registerKill(5e3,n.pos.x,n.pos.y,n.pos.z,{big:!0});for(let t of e.rocks.items)t.alive&&(t.hp=0,t.fuse=.05+e.rng.range(0,.5),t.chained=!0);for(let t of e.drones.items)t.alive&&(t.hp=.001);for(let t of e.bolts.items)t.alive&&!t.friendly&&(t.alive=!1);for(let t of e.drones.items)t.alive&&(t.alive=!1,e.events.emit($.Boom,t.pos.x,t.pos.y,t.pos.z,t.r*1.5,6),e.stats.drones++);for(let t=0;t<4;t++)Em(e,Q.Fuel,0,n.pos.x+(t-1.5)*4,n.pos.y,n.pos.z+6,0,0,0);Em(e,Q.Repair,0,n.pos.x,n.pos.y-3,n.pos.z+6,0,0,0),n.alive=!1,e.director.onBossDown(e)}}var Yh=20,Xh=48;function Zh(e,t){e.blasts.length>=Xh||e.blasts.push({dmg:2,push:8,playerDmg:0,playerRadius:0,delay:0,nova:!1,clearBolts:!1,...t})}function Qh(e,t){let n=0;for(let r=0;r<e.blasts.length&&n<Yh;){let i=e.blasts[r];if(i.delay-=t,i.delay>0){r++;continue}e.blasts.splice(r,1),n++,$h(e,i)}}function $h(e,t){let n=t.radius,r=e.player;for(let r of e.rocks.items){if(!r.alive)continue;let i=r.pos.x-t.x,a=r.pos.y-t.y,o=r.pos.z-t.z,s=Math.hypot(i,a,o);if(s>n+r.r||s<1e-4)continue;let c=K(1-s/(n+r.r),0,1),l=1/s,u=t.push*(.35+.65*c)/Math.max(.6,r.mass**.28);r.vel.x+=i*l*u,r.vel.y+=a*l*u,r.vel.z+=o*l*u,r.spin.x+=a*l*u*.05,r.spin.y-=i*l*u*.05,gh(e,r,t.dmg*(.25+.75*c),uh.Blast,i*l,a*l,o*l)}for(let r of e.drones.items){if(!r.alive)continue;let i=r.pos.x-t.x,a=r.pos.y-t.y,o=r.pos.z-t.z,s=Math.hypot(i,a,o);if(s>n+r.r)continue;let c=K(1-s/(n+r.r),0,1);if(fg(e,r,t.dmg*(.25+.75*c)*1.4,uh.Blast),r.alive&&s>.001){let e=1/s;r.vel.x+=i*e*t.push*.4*c,r.vel.y+=a*e*t.push*.4*c}}for(let r of e.mines.items)r.alive&&(Math.hypot(r.pos.x-t.x,r.pos.y-t.y,r.pos.z-t.z)>n+r.r||Sh(e,r,99,uh.Blast));if(e.boss.alive&&e.boss.dying<=0&&Math.hypot(e.boss.pos.x-t.x,e.boss.pos.y-t.y,e.boss.pos.z-t.z)<n+e.boss.r*.6&&Kh(e,t.dmg*(t.nova?6:1.6),t.x,t.y,t.z,!1),t.clearBolts)for(let r of e.bolts.items)r.alive&&!r.friendly&&Math.hypot(r.pos.x-t.x,r.pos.y-t.y,r.pos.z-t.z)<n&&(r.alive=!1,e.events.emit($.Hit,r.pos.x,r.pos.y,r.pos.z,0,1));t.playerDmg>0&&Math.hypot(r.pos.x-t.x,r.pos.y-t.y,r.pos.z-t.z)<t.playerRadius&&e.hurtPlayer(t.playerDmg,t.nova?`Nova blast`:`Blast`,t.x,t.y,t.z)}var eg=e=>1+e.director.sector*.2+e.director.pressure*.25,tg=e=>40+e.director.sector*4+Math.min(14,e.director.pressure*3);function ng(e,t,n,r={}){let i=e.patrols.find(e=>!e.alive);if(!i)return null;let a=r.rng??e.rng;i.alive=!0,i.age=0,i.count=0,i.x=r.x??a.range(-e.bounds.x*.55,e.bounds.x*.55),i.y=r.y??a.range(-e.bounds.y*.2,e.bounds.y*.75)+.6,i.stationZ=r.stationZ??(t===X.Lancer?a.range(-105,-90):a.range(-74,-52)),i.z=i.stationZ,i.life=r.life??a.range(15,20),i.swayX=a.range(2,4.5),i.swayY=a.range(.8,1.8),i.phase=a.range(0,6.28);let o=r.cell===!0;for(let r=0;r<n;r++){let s,c,l=0;if(o){let e=r/n*Math.PI*2+.4;s=Math.cos(e)*6.2,c=Math.sin(e)*2.6,l=Math.sin(e*2)*3}else if(t===X.Weaver||t===X.Layer||t===X.Lancer)s=(r-(n-1)/2)*7,c=r%2*2;else{let e=(n-1)/2;s=(r-e)*4.6,c=-Math.abs(r-e)*1.3+.6,l=Math.abs(r-e)*2.5}rg(e,t,i,s,c,l,a)&&i.count++}if(o){let t=Em(e,Q.Fuel,0,i.x,i.y,i.stationZ,0,0,0);t&&(t.tether=i.id)}return i.count===0&&(i.alive=!1),i}function rg(e,t,n,r,i,a,o=e.rng){let s=e.drones.acquire();if(!s)return null;if(s.id=e.nextId++,s.type=t,s.r=Zd[t],s.hp=Qd[t]*(1+e.director.sector*.08),s.maxHp=s.hp,s.age=0,s.state=0,s.telegraph=0,s.flash=0,s.bank=0,s.grazed=!1,s.patrol=n.id,s.offset.x=r,s.offset.y=i,s.offset.z=a,s.stationZ=n.stationZ+a,s.phase=o.range(0,6.28),s.burst=0,s.layT=.8,s.vel.x=0,s.vel.y=0,s.vel.z=0,s.aim.x=0,s.aim.y=0,s.aim.z=-1,t===X.Weaver){let t=o.range(0,6.28)+r*.2;s.phase=t,s.pos.x=e.player.pos.x*.7+Math.cos(t)*14,s.pos.y=e.player.pos.y*.7+Math.sin(t)*6,s.pos.z=Hf.spawnZ*.78-Math.abs(r)*1.5,s.fireT=.4,s.offset.x=o.sign()}else if(t===X.Layer){let e=o.sign();s.pos.x=-e*48,s.pos.y=o.range(3,9),s.pos.z=-104+a,s.vel.x=e*11,s.state=1}else s.pos.x=n.x+r*2.2,s.pos.y=n.y+i+6,s.pos.z=Hf.spawnZ*.82+a-10,s.fireT=o.range(1.6,3)+(t===X.Lancer?1.2:0);return s}function ig(e,t){let n=e.player,r=e.flow-e.baseFlow,i=e.status===`running`;for(let r of e.patrols){if(!r.alive)continue;r.age+=t,r.x+=(n.pos.x*.55-r.x)*.12*t;let i=0,a=0;for(let t of e.drones.items)t.alive&&t.patrol===r.id&&(i++,a+=t.pos.z-t.offset.z);r.count=i,i===0?r.alive=!1:r.z=a/i}for(let n of e.drones.items){if(!n.alive)continue;n.age+=t,n.flash=Math.max(0,n.flash-t*6);let a=e.patrols[n.patrol],o=n.pos.x;switch(n.type){case X.Scout:og(e,n,a,t,r,i);break;case X.Weaver:lg(e,n,t,r,i);break;case X.Lancer:ug(e,n,a,t,r,i);break;case X.Layer:dg(e,n,t,i)}n.pos.x+=n.vel.x*t,n.pos.y+=n.vel.y*t,n.pos.z+=n.vel.z*t,n.bank=Dd(n.bank,K((n.pos.x-o)/Math.max(t,1e-4)/22,-.8,.8),K(t*8,0,1)),!n.grazed&&n.pos.z>-n.r&&i&&(n.grazed=!0),(n.pos.z>Hf.killZ||Math.abs(n.pos.x)>140||n.pos.y>90||n.pos.y<-60||n.state===2&&n.age>40)&&(n.alive=!1)}}function ag(e,t,n){let r=e.player,i=.26,a=r.pos.x+r.vel.x*i,o=r.pos.y+r.vel.y*i;a+=e.rng.range(-n,n),o+=e.rng.range(-n,n);let s=t.type===X.Weaver;jh(e,Z.Enemy,t.pos.x,t.pos.y,t.pos.z+.6,a-t.pos.x,o-t.pos.y,0-t.pos.z,tg(e)*(s?1.2:1),s?qf.weaverBolt:qf.scoutBolt,s?.36:.44),e.events.emit($.Sfx,t.pos.x,t.pos.y,t.pos.z,.55,.9+e.rng.range(0,.3),`enemyShot`)}function og(e,t,n,r,i,a){if(t.state===0){let e=n.x+t.offset.x,r=n.y+t.offset.y;t.vel.x=K((e-t.pos.x)*2.6,-30,30),t.vel.y=K((r-t.pos.y)*2.6,-30,30),t.vel.z=K((t.stationZ-t.pos.z)*1.8,-8,60),t.pos.z>t.stationZ-5&&(t.state=1);return}if(t.state===1){let o=n.x+t.offset.x+Math.sin(t.age*.8+n.phase)*n.swayX,s=n.y+t.offset.y+Math.cos(t.age*1.1+n.phase)*n.swayY,c=n.stationZ+t.offset.z;t.vel.x=K((o-t.pos.x)*3,-16,16),t.vel.y=K((s-t.pos.y)*3,-12,12),t.vel.z=K((c-t.pos.z)*1.3,-18,18)+i,sg(e,t),a&&(t.fireT-=r,t.telegraph=t.fireT<.5&&t.fireT>0?1-t.fireT/.5:0,t.fireT<=0&&(ag(e,t,.5),e.director.sector>=2&&t.burst===0&&e.rng.chance(.4)?(t.burst=1,t.fireT=.2):(t.burst=0,t.fireT=e.rng.range(1.6,2.6)/eg(e)))),(n.age>n.life||t.pos.z>-13)&&(t.state=2,t.telegraph=0);return}cg(e,t,i)}function sg(e,t){for(let n of e.rocks.items){if(!n.alive)continue;let r=t.pos.z-n.pos.z;if(r<-1||r>30||n.vel.z+e.flow<4)continue;let i=t.pos.x-n.pos.x,a=t.pos.y-n.pos.y,o=n.r+t.r+2.2;if(Math.abs(i)<o&&Math.abs(a)<o){let e=1-r/30;t.vel.x+=(i>=0?1:-1)*22*e,t.vel.y+=(a>=0?1:-1)*10*e}}}function cg(e,t,n){let r=Math.sign(t.pos.x-e.player.pos.x)||(t.id%2?1:-1);t.vel.x=Dd(t.vel.x,r*34,.12),t.vel.y=Dd(t.vel.y,15,.1),t.vel.z=Dd(t.vel.z,5+n,.1)}function lg(e,t,n,r,i){let a=e.player;if(t.state===0){let o=t.offset.x>=0?1:-1;t.phase+=o*2.3*n;let s=Dd(11,2.6,K((t.pos.z-Hf.spawnZ*.78)/(-22-Hf.spawnZ*.78),0,1)**1.15),c=a.pos.x*.75,l=a.pos.y*.75+.6,u=c+Math.cos(t.phase)*s*1.3,d=l+Math.sin(t.phase)*s*.72;t.vel.x=K((u-t.pos.x)*6,-40,40),t.vel.y=K((d-t.pos.y)*6,-30,30),t.vel.z=36+r*.75,i&&t.pos.z>-100&&t.pos.z<-32&&(t.fireT-=n,t.telegraph=t.fireT<.3&&t.fireT>0?1-t.fireT/.3:0,t.fireT<=0&&(ag(e,t,1.1),t.burst++,t.fireT=t.burst%3==0?1.5/eg(e):.12)),t.pos.z>-20&&(t.state=2,t.telegraph=0);return}let o=t.phase;t.vel.x=Dd(t.vel.x,Math.cos(o)*36,.16),t.vel.y=Dd(t.vel.y,Math.sin(o)*24,.16),t.vel.z=Dd(t.vel.z,6+r,.1)}function ug(e,t,n,r,i,a){let o=e.player;if(t.state===0){t.vel.x=K((n.x+t.offset.x-t.pos.x)*2,-20,20),t.vel.y=K((n.y+2-t.pos.y)*2,-20,20),t.vel.z=K((t.stationZ-t.pos.z)*1.4,-8,55),t.pos.z>t.stationZ-6&&(t.state=1,t.fireT=1.8);return}if(t.state===1){let s=n.x+t.offset.x+Math.sin(t.age*.4+n.phase)*13,c=n.y+2+Math.cos(t.age*.55)*1.6;if(t.vel.x=K((s-t.pos.x)*1.4,-9,9),t.vel.y=K((c-t.pos.y)*1.4,-6,6),t.vel.z=K((t.stationZ-t.pos.z)*1.3,-16,16)+i,a){t.fireT-=r;let n=1.5;if(t.fireT<n&&t.fireT>0){if(t.telegraph=1-t.fireT/n,t.fireT>.45){let e=o.pos.x-t.pos.x,n=o.pos.y-t.pos.y,r=0-t.pos.z,i=Math.hypot(e,n,r)||1;e/=i,n/=i,r/=i,t.aim.x=Dd(t.aim.x,e,.25),t.aim.y=Dd(t.aim.y,n,.25),t.aim.z=Dd(t.aim.z,r,.25)}}else t.fireT>n&&(t.telegraph=0);t.fireT<=0&&(jh(e,Z.Beam,t.pos.x,t.pos.y,t.pos.z+1.4,t.aim.x,t.aim.y,t.aim.z,120,qf.lancerBolt,.6,3),e.events.emit($.Sfx,t.pos.x,t.pos.y,t.pos.z,.9,.8,`lancerFire`),e.events.emit($.Shake,0,0,0,.12),t.telegraph=0,t.fireT=3.4/eg(e))}(n.age>n.life+8||t.pos.z>-20)&&(t.state=2,t.telegraph=0);return}cg(e,t,i)}function dg(e,t,n,r){t.vel.z=0,t.pos.y+=Math.sin(t.age*1.3)*.02,r&&(t.layT-=n,t.layT<=0&&(t.layT=1.25/eg(e),bh(e,t.pos.x,t.pos.y-1,t.pos.z+2,t.vel.x*.15,-1.5,0),e.events.emit($.Sfx,t.pos.x,t.pos.y,t.pos.z,.5,1,`mineDrop`))),Math.abs(t.pos.x)>50&&Math.sign(t.pos.x)===Math.sign(t.vel.x)&&(t.state=2)}function fg(e,t,n,r){return!t.alive||(t.hp-=n,t.flash=1,t.hp>0)?!1:(mg(e,t,r),!0)}var pg=[Kf.scout,Kf.weaver,Kf.lancer,Kf.layer];function mg(e,t,n){if(!t.alive)return;t.alive=!1;let{x:r,y:i,z:a}=t.pos,o=n===uh.Blast||n===uh.Crash;e.stats.drones++,o&&(e.stats.chained++,e.noteChained()),e.novaT>0&&e.novaKills++;let s=t.type===X.Lancer||t.type===X.Layer;e.registerKill(pg[t.type],r,i,a,{chained:o,big:!0}),e.events.emit($.Boom,r,i,a,t.r*1.5,6),e.events.emit($.Debris,r,i,a,10,t.r),e.events.emit($.Sfx,r,i,a,1,1,s?`boomBig`:`boomMid`),e.events.emit($.HitStop,0,0,0,s?90:55),e.events.emit($.Shake,0,0,0,s?.32:.16),Zh(e,{x:r,y:i,z:a,radius:s?7:4.6,dmg:s?3:1.8,push:s?14:9}),e.events.emit($.Shock,r,i,a,s?7:4.6,.5),Lm(e,t)}var hg=e=>document.getElementById(e);function gg(e,t){e.textContent!==t&&(e.textContent=t)}var _g=class{root=hg(`hud`);score=hg(`score`);mult=hg(`mult`);chainFill=hg(`chain-fill`);salvageFill=hg(`salvage-fill`);salvageNum=hg(`salvage-num`);cardEls=Array.from(hg(`cards`).children);lastCards=``;sector=hg(`sector`);sectorName=hg(`sector-name`);best=hg(`best`);barHull=hg(`bar-hull`);barFuel=hg(`bar-fuel`);hullFill=hg(`hull-fill`);fuelFill=hg(`fuel-fill`);hullNum=hg(`hull-num`);fuelNum=hg(`fuel-num`);weaponName=hg(`weapon-name`);tierPips=Array.from(hg(`weapon-tier`).children);ocRow=hg(`oc-row`);ocFill=hg(`oc-fill`);ocLabel=hg(`oc-label`);modules=Array.from(hg(`modules`).children);bossBar=hg(`boss-bar`);bossSegs=Array.from(hg(`boss-segs`).children);banner=hg(`banner`);bannerMain=hg(`banner-main`);bannerSub=hg(`banner-sub`);hintEl=hg(`hint`);vignette=hg(`vignette`);flashEl=hg(`flash`);lowHull=hg(`lowhull`);flashLevel=0;scoreShown=0;hintTimer=0;lastSector=-1;lastMult=0;show(e){this.root.classList.toggle(`hidden`,!e),e||(this.calm(),this.banner.classList.remove(`show`))}calm(){this.vignette.style.opacity=`0`,this.lowHull.classList.remove(`on`),this.flashEl.style.opacity=`0`,this.flashLevel=0}reset(){this.scoreShown=0,this.lastSector=-1,this.lastMult=0,this.lastCards=``,this.banner.classList.remove(`show`),this.hintEl.classList.remove(`show`),this.flashLevel=0}showBanner(e,t=``){gg(this.bannerMain,e),gg(this.bannerSub,t),this.banner.classList.remove(`show`),this.banner.offsetWidth,this.banner.classList.add(`show`)}showHint(e,t){gg(this.hintEl,e),this.hintEl.classList.add(`show`),this.hintTimer=t}flash(e,t){let n=[`radial-gradient(ellipse at 50% 55%, rgba(255,40,20,0.16) 0%, rgba(255,25,10,0.95) 100%)`,`radial-gradient(ellipse at 50% 55%, rgba(170,240,255,0.5) 0%, rgba(120,220,255,0.9) 100%)`,`radial-gradient(ellipse at 50% 50%, rgba(255,240,255,0.35) 0%, rgba(255,150,240,0.85) 100%)`,`radial-gradient(ellipse at 50% 55%, rgba(90,170,255,0) 30%, rgba(90,170,255,0.9) 100%)`];this.flashEl.style.background=n[e]??n[0];let r=[.55,.16,.42,.22][e]??.4;this.flashLevel=Math.max(this.flashLevel,Math.min(r,t*r))}update(e,t,n){let r=e.player;this.scoreShown+=(r.score-this.scoreShown)*K(n*12,0,1),Math.abs(r.score-this.scoreShown)<1&&(this.scoreShown=r.score),gg(this.score,Math.round(this.scoreShown).toLocaleString(`en-US`)),gg(this.best,Math.max(t,r.score).toLocaleString(`en-US`)),gg(this.mult,`x${r.mult}`),r.mult!==this.lastMult&&(this.lastMult=r.mult,this.mult.style.color=r.mult>=6?`#ff6ae0`:r.mult>=3?`#ff9a3a`:`#ffd04a`);let i=r.chain>0?K(r.chainT/Kf.chainWindow,0,1):0;this.chainFill.style.transform=`scaleX(${i.toFixed(3)})`;let a=``;for(let t of e.cards)a+=`${+!!t.done}${t.value}|`;a!==this.lastCards&&(this.lastCards=a,e.cards.forEach((e,t)=>{let n=this.cardEls[t];n.className=`${e.done?`done `:``}t${e.tier}`,n.innerHTML=`<span>${e.text}</span><b>${e.done?`DONE`:`${Math.floor(e.value)}/${e.target}`}</b>`})),this.salvageFill.style.transform=`scaleX(${K(r.scrap/r.scrapGoal,0,1).toFixed(3)})`,gg(this.salvageNum,`${r.scrap}/${r.scrapGoal}`);let o=e.director.sector;o!==this.lastSector&&(this.lastSector=o,gg(this.sector,`SECTOR ${o+1}`),gg(this.sectorName,eh[o].name));let s=K(r.hull/r.maxHull,0,1),c=K(r.fuel/r.maxFuel,0,1);this.hullFill.style.transform=`scaleY(${s.toFixed(3)})`,this.fuelFill.style.transform=`scaleY(${c.toFixed(3)})`,gg(this.hullNum,`${Math.ceil(r.hull)}`),gg(this.fuelNum,`${Math.ceil(r.fuel)}`),this.barHull.classList.toggle(`low`,s<.3),this.barFuel.classList.toggle(`low`,c<.22),this.lowHull.classList.toggle(`on`,s<.3&&e.status===`running`),gg(this.weaponName,ef[r.weapon]);for(let e=0;e<this.tierPips.length;e++)this.tierPips[e].classList.toggle(`on`,e<r.tier);let l=r.overclock<=0&&!r.stalled&&r.fuel>=26*r.loadout.fuelUse;this.ocRow.classList.toggle(`ready`,l),this.ocRow.classList.toggle(`active`,r.overclock>0),gg(this.ocLabel,r.overclock>0?`OVERCLOCK`:r.stalled?`NO FUEL`:`OVERCLOCK [E]`),this.ocFill.style.transform=`scaleX(${K(r.overclock/12,0,1).toFixed(3)})`;let u=r.mods,d=[r.shieldUp,u.magnet,u.ram,u.tank,u.afterburner];for(let e=0;e<this.modules.length;e++)this.modules[e].classList.toggle(`on`,d[e]);let f=e.boss,p=f.alive&&f.entered&&f.dying<=0;if(this.bossBar.classList.toggle(`hidden`,!p),p){for(let e=0;e<4;e++)this.bossSegs[e].style.setProperty(`--v`,K(f.plates[e].hp/f.plates[e].maxHp,0,1).toFixed(3));this.bossSegs[4].style.setProperty(`--v`,f.phase===0?`1`:K(f.coreHp/f.coreMax,0,1).toFixed(3))}this.vignette.style.opacity=(r.boost*.85).toFixed(3),this.flashLevel=Math.max(0,this.flashLevel-n*3.2),this.flashEl.style.opacity=this.flashLevel.toFixed(3),this.hintTimer>0&&(this.hintTimer-=n,this.hintTimer<=0&&this.hintEl.classList.remove(`show`))}},vg=class{cursorX=0;cursorY=.1;mouseActive=!1;mouseFire=!1;mouseBoost=!1;keys=new Set;ocQueued=!1;onMenuKey=()=>{};onFirstGesture=()=>{};onBlur=()=>{};gestured=!1;attach(){window.addEventListener(`keydown`,this.keydown),window.addEventListener(`keyup`,this.keyup),window.addEventListener(`pointermove`,this.pointermove),window.addEventListener(`pointerdown`,this.pointerdown),window.addEventListener(`pointerup`,this.pointerup),window.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`blur`,this.blur),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.blur()})}gesture(){this.gestured||(this.gestured=!0,this.onFirstGesture())}blur=()=>{this.keys.clear(),this.mouseFire=!1,this.mouseBoost=!1,this.onBlur()};syncButtons(e){this.mouseFire=!!(e.buttons&1),this.mouseBoost=!!(e.buttons&2)}pointermove=e=>{this.mouseActive=!0,this.syncButtons(e),this.cursorX=K(e.clientX/window.innerWidth*2-1,Uf.cursorMinX,Uf.cursorMaxX),this.cursorY=K(-(e.clientY/window.innerHeight*2-1),Uf.cursorMinY,Uf.cursorMaxY)};pointerdown=e=>{this.gesture(),this.syncButtons(e),e.button===1&&(this.ocQueued=!0)};pointerup=e=>{this.syncButtons(e)};keydown=e=>{this.gesture();let t=e.key.toLowerCase();if([`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `,`tab`,`enter`].includes(t)&&e.preventDefault(),!e.repeat)switch(this.keys.add(t),(t===`e`||t===`q`||t===`f`)&&(this.ocQueued=!0),t){case` `:case`enter`:this.onMenuKey(`confirm`,e);break;case`escape`:this.onMenuKey(`back`,e);break;case`p`:this.onMenuKey(`pause`,e);break;case`m`:this.onMenuKey(`mute`,e);break;case`r`:this.onMenuKey(`restart`,e);break;case`h`:this.onMenuKey(`help`,e);break;case`arrowleft`:case`a`:this.onMenuKey(`left`,e);break;case`arrowright`:case`d`:this.onMenuKey(`right`,e);break;case`x`:this.onMenuKey(`quit`,e);break;case`t`:this.onMenuKey(`daily`,e)}};keyup=e=>{this.keys.delete(e.key.toLowerCase())};update(e){let t=this.keys,n=(t.has(`d`)||t.has(`arrowright`)?1:0)-(t.has(`a`)||t.has(`arrowleft`)?1:0),r=(t.has(`w`)||t.has(`arrowup`)?1:0)-(t.has(`s`)||t.has(`arrowdown`)?1:0);if(n||r){this.mouseActive=!1;let t=1.9;this.cursorX=K(this.cursorX+n*t*e,Uf.cursorMinX,Uf.cursorMaxX),this.cursorY=K(this.cursorY+r*t*e,Uf.cursorMinY,Uf.cursorMaxY)}}get firing(){return this.mouseFire||this.keys.has(` `)}get boosting(){return this.mouseBoost||this.keys.has(`shift`)}toSim(){let e=this.ocQueued;return this.ocQueued=!1,{cursorX:this.cursorX,cursorY:this.cursorY,fire:this.firing,boost:this.boosting,overclock:e}}clearOneShots(){this.ocQueued=!1}},yg=[`#eaf6ff`,`#ff5a4a`,`#ffb43a`,`#58ffc0`,`#ff6ae0`,`#ffd84a`,`#6ad0ff`,`#58ff90`],bg=class{canvas;ctx;w=1;h=1;dpr=1;popups=[];head=0;cam=Up();ndc={x:0,y:0};time=0;lastAdd=-9;stack=0;constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`);for(let e=0;e<44;e++)this.popups.push({live:!1,text:``,x:0,y:0,z:0,age:0,life:1,tint:0,size:1})}resize(e,t){this.dpr=Math.min(window.devicePixelRatio||1,1.5),this.w=e,this.h=t,this.canvas.width=Math.floor(e*this.dpr),this.canvas.height=Math.floor(t*this.dpr)}addPopup(e,t,n,r,i,a){let o=0;for(let e of this.popups)e.live&&o++;if(o>=9&&a<1)return;let s=this.time;this.stack=s-this.lastAdd>.32?0:Math.min(this.stack+1,4),this.lastAdd=s,n+=this.stack*1.15,t+=(this.stack%2?1:-1)*this.stack*.5;let c=this.popups[this.head];this.head=(this.head+1)%this.popups.length,c.live=!0,c.text=e,c.x=t,c.y=n,c.z=r,c.age=0,c.life=a>1.3?1.5:1,c.tint=i,c.size=a}clear(){for(let e of this.popups)e.live=!1;this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}draw(e,t,n){this.time+=t;let r=this.ctx;r.setTransform(this.dpr,0,0,this.dpr,0,0),r.clearRect(0,0,this.w,this.h);let i=e.player;Wp(i.pos.x,i.pos.y,i.boost,e.aspect,this.cam),n&&(this.drawLock(e),this.drawThreats(e),this.drawChain(e)),this.drawPopups(t)}drawChain(e){let t=e.player;if(t.chain<=0&&t.mult<=1)return;let n=(t.cursorX*.5+.5)*this.w,r=(-t.cursorY*.5+.5)*this.h,i=this.ctx,a=t.chain>0?K(t.chainT/Kf.chainWindow,0,1):0,o=a<.28&&t.mult>1;i.lineWidth=3,i.strokeStyle=o&&Math.sin(this.time*24)>0?`#ff5a4a`:`#ffd04a`,i.shadowColor=`rgba(0,0,0,0.8)`,i.shadowBlur=4,i.beginPath(),i.arc(n,r,29,-Math.PI/2,-Math.PI/2+Math.PI*2*a),i.stroke(),i.shadowBlur=0,t.mult>1&&(i.font=`${Math.round(K(this.h/70,11,17))}px PressStart, monospace`,i.textAlign=`left`,i.textBaseline=`middle`,i.lineWidth=4,i.strokeStyle=`rgba(0,0,0,0.85)`,i.strokeText(`x${t.mult}`,n+36,r-26),i.fillStyle=t.mult>=6?`#ff6ae0`:t.mult>=3?`#ff9a3a`:`#ffd04a`,i.fillText(`x${t.mult}`,n+36,r-26))}toScreen(e,t,n){let r=Gp(this.cam,e,t,n,this.ndc);return r<0?null:{sx:(this.ndc.x*.5+.5)*this.w,sy:(-this.ndc.y*.5+.5)*this.h,depth:r}}pxRadius(e,t){return e/(t*this.cam.tanHalf)*(this.h/2)}drawPopups(e){let t=this.ctx;t.textAlign=`center`,t.textBaseline=`middle`;for(let n of this.popups){if(!n.live)continue;if(n.age+=e,n.age>=n.life){n.live=!1;continue}let r=n.age/n.life,i=this.toScreen(n.x,n.y,n.z);if(!i)continue;let a=46*(1-(1-r)*(1-r)),o=r<.12?.6+r/.12*.55:1.15-Math.min(.15,(r-.12)*.4),s=Math.round((15+n.size*7)*o*K(this.h/900,.7,1.4));t.font=`${s}px PressStart, monospace`,t.globalAlpha=r>.65?1-(r-.65)/.35:1,t.lineWidth=Math.max(3,s*.24),t.strokeStyle=`rgba(0,0,0,0.85)`,t.lineJoin=`round`;let c=i.sy-a;t.strokeText(n.text,i.sx,c),t.fillStyle=yg[n.tint]??yg[0],t.fillText(n.text,i.sx,c)}t.globalAlpha=1}drawLock(e){let t=e.player;if(t.lockKind===0)return;let n=0,r=0,i=0,a=1,o=``,s=`#ff5a4a`;if(t.lockKind===1){let c=e.rocks.items[t.lockSlot];if(!c?.alive)return;({x:n,y:r,z:i}=c.pos),a=c.r,c.shape===Y.Nova?o=`NOVA`:c.shape===Y.Ore?(s=`#ffb43a`,o=`ORE`):s=`#ffffff`}else if(t.lockKind===2){let o=e.drones.items[t.lockSlot];if(!o?.alive)return;({x:n,y:r,z:i}=o.pos),a=o.r}else if(t.lockKind===3){let s=e.mines.items[t.lockSlot];if(!s?.alive)return;({x:n,y:r,z:i}=s.pos),a=s.r,o=`MINE`}else{let s=e.boss.targets[t.lockSlot];if(!s)return;n=s.x,r=s.y,i=s.z,a=s.r,o=t.lockSlot===4?`CORE`:`PLATE`}let c=this.toScreen(n,r,i);if(!c)return;let l=Math.max(16,this.pxRadius(a,c.depth)*1.12),u=this.ctx;u.strokeStyle=s,u.lineWidth=2.5,u.shadowColor=`rgba(0,0,0,0.8)`,u.shadowBlur=4;let d=l*.42;for(let[e,t]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let n=c.sx+e*l,r=c.sy+t*l;u.beginPath(),u.moveTo(n-e*d,r),u.lineTo(n,r),u.lineTo(n,r-t*d),u.stroke()}u.shadowBlur=0,u.font=`${Math.round(K(this.h/90,9,13))}px PressStart, monospace`,u.textAlign=`left`,u.textBaseline=`top`,u.fillStyle=s,u.fillText(`${Math.round(-i)}m${o?` `+o:``}`,c.sx+l+6,c.sy-l)}drawThreats(e){let t=e.player;if(e.status!==`running`)return;let n=this.ctx,r=.5+.5*Math.sin(this.time*14),i=0,a=(e,t,a,o,s,c,l=`ring`)=>{let u=this.toScreen(e,t,a);if(!u)return;let d=Math.min(Math.max(10,this.pxRadius(o,u.depth)*1.35+5+r*3*s),this.h*.2);n.globalAlpha=K(.35+s*.65,0,1),n.strokeStyle=c,n.lineWidth=2+s*2,n.beginPath(),l===`ring`?n.arc(u.sx,u.sy,d,0,Math.PI*2):(n.moveTo(u.sx,u.sy-d),n.lineTo(u.sx+d,u.sy),n.lineTo(u.sx,u.sy+d),n.lineTo(u.sx-d,u.sy),n.closePath()),n.stroke(),n.globalAlpha=1,i++};for(let n of e.bolts.items){if(!n.alive||n.friendly||i>14||n.vel.z<=1)continue;let e=-n.pos.z/n.vel.z;if(e<0||e>1.7)continue;let r=n.pos.x+n.vel.x*e-t.pos.x,o=n.pos.y+n.vel.y*e-t.pos.y;Math.hypot(r,o)<Wf.hitRadius+n.r+1.4&&a(n.pos.x,n.pos.y,n.pos.z,n.r*1.6,1-e/1.7,`#ff3a2a`,n.kind===Z.Beam?`diamond`:`ring`)}for(let t of e.mines.items)t.alive&&t.pos.z>-40&&i<16&&a(t.pos.x,t.pos.y,t.pos.z,t.r,K(1+t.pos.z/40,.2,1),`#ff8a2a`,`diamond`);let o=0;for(let n of e.rocks.items){if(!n.alive||o>=6)continue;let r=n.vel.z+e.flow;if(r<=2||n.pos.z>1)continue;let i=-n.pos.z/r;if(i>1.5)continue;let s=n.pos.x+n.vel.x*i-t.pos.x,c=n.pos.y+n.vel.y*i-t.pos.y;Math.hypot(s*.85,c*1.2)<n.r*.9+1.4&&n.shape!==Y.Nova&&(a(n.pos.x,n.pos.y,n.pos.z,n.r,1-i/1.5,n.size>=Jd.Small?`#ffb43a`:`#ff4a3a`),o++)}for(let t of e.rocks.items){if(!t.alive||t.shape!==Y.Nova)continue;let e=-t.pos.z;if(e<0)continue;let r=this.toScreen(t.pos.x,t.pos.y,t.pos.z);if(!r)continue;let i=e>=9&&e<=30,a=e<9,o=a?`#ff3a2a`:i?`#58ff90`:`#ff9a5a`,s=Math.max(14,this.pxRadius(t.r,r.depth)*1.5);n.strokeStyle=o,n.lineWidth=i?4:2.5,n.globalAlpha=i?1:.75,n.beginPath(),n.arc(r.sx,r.sy,s,0,Math.PI*2),n.stroke(),n.globalAlpha=1,n.font=`${Math.round(K(this.h/85,9,14))}px PressStart, monospace`,n.textAlign=`center`,n.textBaseline=`top`,n.fillStyle=o,n.fillText(i?`SHOOT ${Math.round(e)}m`:a?`TOO CLOSE`:`${Math.round(e)}m`,r.sx,r.sy+s+6)}}},xg=e=>Math.round(e).toLocaleString(`en-US`);function Sg(e){return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`}function Cg(e,t){if(e.extracted)return`Banked. Skip the gate next time and the Deep Void pays more, but only if you live.`;if(e.newBest&&e.prevBest>0)return`New best. The bar is now ${xg(e.score)}. Beat it.`;if(e.prevBest>0&&e.score>=e.prevBest*.6)return`${xg(e.prevBest-e.score)} points short of your best. Same start, one more run.`;let n={best:t.best,bestSector:t.bestSector};for(let t of pp)if(!mp(t,n)){if(t.unlock.kind===`score`){let n=t.unlock.value-e.score;if(n>0&&n<t.unlock.value*.7)return`${xg(n)} more points in a single run unlocks the ${t.name}.`}else if(t.unlock.kind===`sector`)return`Reach sector ${t.unlock.value} to unlock the ${t.name}. You reached ${e.sector}.`}if(e.sector<4){let t=eh[e.sector];if(t){let n=Math.max(1,Math.round(t.start-e.seconds));return`Sector ${e.sector+1}, ${t.name}, starts at ${Sg(t.start)}. You were ${n} seconds away.`}}return e.stats.bossDown?e.stats.rams===0?`Try boosting into small rocks. They shatter and cost 3.5 fuel.`:e.stats.grazes<5?`Graze rocks and shots for points and fuel. Skim past them without touching.`:`Your best chain was ${e.stats.maxChain}. Chains of 30 reach the x7 multiplier.`:`The Hive Gate boss is still up. Break its four armor plates, then hit the red eye.`}var wg=e=>document.getElementById(e),Tg=class{h;current=`none`;title=wg(`screen-title`);help=wg(`screen-help`);pause=wg(`screen-pause`);summary=wg(`screen-summary`);helpReturn=`title`;constructor(e){this.h=e,document.addEventListener(`click`,e=>{e.target instanceof HTMLButtonElement&&e.target.blur()}),wg(`btn-launch`).addEventListener(`click`,()=>e.launch()),wg(`btn-help`).addEventListener(`click`,()=>e.helpOpen()),wg(`btn-help-close`).addEventListener(`click`,()=>e.helpClose()),wg(`btn-mute-title`).addEventListener(`click`,()=>e.mute()),wg(`btn-mute`).addEventListener(`click`,()=>e.mute()),wg(`btn-resume`).addEventListener(`click`,()=>e.resume()),wg(`btn-restart`).addEventListener(`click`,()=>e.restart()),wg(`btn-quit`).addEventListener(`click`,()=>e.quit()),wg(`btn-again`).addEventListener(`click`,()=>e.again()),wg(`btn-title`).addEventListener(`click`,()=>e.toTitle()),wg(`pause-btn`).addEventListener(`click`,()=>e.pauseClick()),wg(`mute-btn`).addEventListener(`click`,()=>e.mute()),wg(`daily-check`).addEventListener(`change`,t=>e.daily(t.target.checked))}hideAll(){for(let e of[this.title,this.help,this.pause,this.summary])e.classList.add(`hidden`);this.current=`none`}show(e){this.hideAll(),{title:this.title,help:this.help,pause:this.pause,summary:this.summary}[e].classList.remove(`hidden`),this.current=e}showTitle(){this.show(`title`)}showPause(){this.show(`pause`)}showSummary(){this.show(`summary`)}showHelp(e){this.helpReturn=e===`help`||e===`none`?`title`:e,this.show(`help`)}closeHelp(){let e=this.helpReturn;return e===`pause`?this.show(`pause`):this.show(`title`),e}setMuted(e){let t=e?`SOUND OFF [M]`:`SOUND ON [M]`;wg(`btn-mute-title`).textContent=t,wg(`btn-mute`).textContent=t,wg(`mute-btn`).classList.toggle(`off`,e)}refreshTitle(e,t,n,r){let i=wg(`ships`);i.textContent=``;let a={best:e.best,bestSector:e.bestSector};pp.forEach((e,n)=>{let r=mp(e,a),o=document.createElement(`div`);o.className=`ship-card${n===t?` sel`:``}${r?``:` locked`}`;let s=Math.round(e.speed*100);o.innerHTML=`<h3>${e.name}</h3><div class="stats"><span>Hull</span><b>${e.hull}</b><span>Fuel</span><b>${e.fuel}</b><span>Speed</span><b>${s}%</b><span>Fuel use</span><b>${Math.round(e.fuelUse*100)}%</b></div>`+(r?``:`<div class="lock">LOCKED: ${hp(e)}</div>`),o.addEventListener(`click`,()=>this.h.selectShip(n)),i.appendChild(o)}),wg(`ship-blurb`).textContent=pp[t].blurb;let o=wg(`scores`);o.textContent=``;let s=(e,t)=>{let n=document.createElement(`div`);n.innerHTML=`${e} <b>${t}</b>`,o.appendChild(n)};e.scores.length===0?s(`No runs yet`,`Hit LAUNCH`):(e.scores.slice(0,3).forEach((e,t)=>s(`#${t+1}`,xg(e.score))),s(`Best sector`,`${e.bestSector}`),s(`Cards done`,`${e.cardsDone}`),s(`Runs`,`${e.runs}`));let c=e.daily[r];wg(`daily-label`).textContent=`Daily run ${r}${c?` (best ${xg(c)})`:``}`,wg(`daily-check`).checked=n}fillSummary(e,t){let n=wg(`sum-head`);n.textContent=e.extracted?`EXTRACTED`:`HULL BREACH`,n.classList.toggle(`ok`,e.extracted),wg(`sum-cause`).textContent=e.extracted?`You banked the run.`:e.stats.cause||`Destroyed`,wg(`sum-score`).textContent=xg(e.score),wg(`sum-best`).textContent=e.newBest?`NEW BEST${e.prevBest?` (was ${xg(e.prevBest)})`:``}`:`SCORE TO BEAT ${xg(t.best)}`;let r=e.stats,i=[[`Time`,Sg(e.seconds)],[`Sector`,`${e.sector}`],[`Best chain`,`${r.maxChain}`],[`Rocks`,`${r.rocks}`],[`Drones`,`${r.drones}`],[`Grazes`,`${r.grazes}`],[`Highest mult`,`x${r.maxMult}`],[`Novas cleared`,`${r.novaClears}`],[`Gates`,`${r.gates}`]];wg(`sum-stats`).innerHTML=i.map(([e,t])=>`<span>${e} <b>${t}</b></span>`).join(``),wg(`sum-cards`).innerHTML=e.cards.map(e=>`<div class="${e.done?`done`:``}">${e.done?`DONE`:`${e.value}/${e.target}`} &nbsp; ${e.text}${e.done?` (+${e.reward})`:``}</div>`).join(``),wg(`sum-reason`).textContent=Cg(e,t);let a={best:t.best,bestSector:t.bestSector},o=pp.filter(t=>t.unlock.kind!==`free`&&mp(t,a)&&!mp(t,{best:e.prevBest,bestSector:e.prevBestSector}));wg(`sum-unlocks`).textContent=o.length?`UNLOCKED: ${o.map(e=>e.name).join(`, `)}`:``}},Eg=new U(9077624),Dg=new U(6957596),Og=class{gr;audio;hud;overlay;hitStop=0;stopCooldown=0;audible=!0;motionScale=1;constructor(e,t,n,r){this.gr=e,this.audio=t,this.hud=n,this.overlay=r}handle(e,t){let n=this.gr.fx,r=this.gr.rig,i=t.player;for(let t=0;t<e.count;t++){let a=e.items[t];switch(a.type){case $.Hit:{let e=3+a.a*3;n.spark(a.x,a.y,a.z,e,9+a.a*4,a.b,.42+a.a*.05,.22+a.a*.05);break}case $.Boom:{n.explosion(a.x,a.y,a.z,a.a,a.b);let e=1/(1+Math.hypot(a.x-i.pos.x,a.y-i.pos.y,a.z-i.pos.z)/35);r.addTrauma((.05+a.a*.045)*e*(a.b===5?2:1)*this.motionScale);break}case $.Shock:{let e=a.a>20,t=Math.min(1,Math.max(.05,(4.5-a.z)/24));n.rings.spawn(a.x,a.y,a.z,a.a,(e?2.2:.7)*t,(e?.8:.55)*t,(e?2:.35)*t,e?.7:.35);break}case $.Sfx:{let e=a.s.startsWith(`boom`)||a.s===`hit`?1+(i.mult-1)*.03:1;this.audible&&this.audio.cue(a.s,a.a,a.b*e,a.x,a.z);break}case $.Popup:this.audible&&this.overlay.addPopup(a.s,a.x,a.y,a.z,a.a,a.b);break;case $.Shake:r.addTrauma(a.a*this.motionScale);break;case $.HitStop:{let e=performance.now();if(a.a<100&&e<this.stopCooldown)break;this.hitStop=Math.min(.24,Math.max(this.hitStop,a.a/1e3)),this.stopCooldown=e+a.a+150;break}case $.Flash:this.audible&&this.hud.flash(a.a,a.b*this.motionScale);break;case $.Banner:this.audible&&this.hud.showBanner(a.s,a.s2);break;case $.Debris:n.debris.spawn(a.x,a.y,a.z,Math.round(a.a),a.b,6+a.b*2.4,n.rnd,(a.b,Eg));break;case $.Muzzle:this.gr.view.flashMuzzle(a.a);break;case $.Graze:n.spark(a.x,a.y,0,6,12,0,.35,.3);break;case $.ShipHit:n.spark(i.pos.x,i.pos.y,0,16,16,2,.6,.45),n.spark(i.pos.x,i.pos.y,0,6,9,4,.5,.3),n.flashLight(i.pos.x,i.pos.y,2,16,16733491),n.rings.spawn(i.pos.x,i.pos.y,.5,2.6,1,.3,.15,.25);break;case $.ShipDead:for(let e=0;e<4;e++)n.explosion(i.pos.x+(e-1.5)*.8,i.pos.y+e%2*.5,.5,2.4+e*.6,e%2?6:5);n.debris.spawn(i.pos.x,i.pos.y,0,40,2.6,22,n.rnd,Dg),n.rings.spawn(i.pos.x,i.pos.y,0,9,1,.6,.3,.7),r.kickFov(18*this.motionScale);break;case $.Collect:{let e=a.a===Q.Fuel?0:a.a===Q.Repair?3:a.a===Q.Scrap?2:4,t=sm[e]??sm[4];n.sparks.emit(a.x,a.y,a.z,0,0,0,.3,4.5,.5,t[0]*.5,t[1]*.5,t[2]*.5,.7,4),n.spark(a.x,a.y,a.z,a.a===Q.Scrap?5:16,9,e,.5,.4),n.rings.spawn(a.x,a.y,a.z,a.a===Q.Scrap?.9:2,t[0]*.45,t[1]*.45,t[2]*.45,.28);break}case $.Hint:this.audible&&this.hud.showHint(a.s,a.a);break;case $.Ram:n.spark(a.x,a.y,a.z,20,20,4,.6,.35),n.spark(a.x,a.y,a.z,10,14,2,.6,.3),this.audible&&this.audio.cue(`ram`,.8,1,a.x,a.z)}}}},kg=1/60,Ag=e=>document.getElementById(e);function jg(e=new Date){let t=e=>e.toString().padStart(2,`0`);return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}var Mg=class e{gr;audio;state=`title`;world;save=bp();input=new vg;hud=new _g;overlay;screens;router;reticle=Ag(`reticle`);selectedShip=0;daily=!1;last=performance.now();clock=0;summaryAt=0;alarmT=0;hintShown=!1;autopilot=!1;attractSeed=1;result=null;runOpen=!1;runDay=``;lastFrameMs=16;lastError=``;perf={frames:0,worstMs:0,sumMs:0,peakParticles:0,peakRocks:0,peakBolts:0,peakHostile:0};constructor(e,t,n){this.gr=e,this.audio=t,this.world=n,this.overlay=new bg(Ag(`overlay`)),this.router=new Og(e,t,this.hud,this.overlay);let r={launch:()=>this.startRun(),resume:()=>this.resume(),restart:()=>this.startRun(),quit:()=>this.toTitle(),again:()=>this.startRun(),toTitle:()=>this.toTitle(),helpOpen:()=>this.screens.showHelp(this.screens.current),helpClose:()=>this.closeHelp(),selectShip:e=>this.selectShip(e),daily:e=>{this.daily=e,this.audio.cue(`ui`)},mute:()=>this.toggleMute(),pauseClick:()=>this.pause()};this.screens=new Tg(r)}static async create(t,n){let r=window.innerWidth/Math.max(1,window.innerHeight),i=bp(),a=new dh(1,pp[0],r),o=new fp,[s]=await Promise.all([hm.create(t,a),o.load(n).catch(()=>o.disable())]),c=new e(s,o,a);return c.selectedShip=mp(pp[i.ship],{best:i.best,bestSector:i.bestSector})?i.ship:0,c.boot(),c}boot(){this.audio.setMuted(this.save.muted),this.screens.setMuted(this.save.muted),this.input.onMenuKey=(e,t)=>this.menuKey(e,t),this.input.onFirstGesture=()=>{this.audio.unlock()},this.input.onBlur=()=>{this.state===`playing`&&this.world.status===`running`&&this.pause()},this.input.attach(),window.addEventListener(`resize`,()=>this.resize()),this.resize(),this.autopilot=new URLSearchParams(location.search).has(`autopilot`),window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches&&(this.router.motionScale=.35),this.startAttract(),document.body.classList.remove(`booting`),requestAnimationFrame(e=>this.frame(e))}resize(){let e=window.innerWidth,t=window.innerHeight;this.gr.resize(e,t),this.overlay.resize(e,t),this.world.setAspect(this.gr.aspect)}startAttract(){this.state=`title`,this.attractSeed=this.attractSeed*7919+13>>>0,this.world.reset(this.attractSeed,pp[this.selectedShip],!1),this.gr.view.setShipStyle(this.selectedShip),this.gr.fx.clear(),this.overlay.clear(),this.router.audible=!1,this.hud.show(!1),this.reticle.classList.add(`hidden`),document.body.classList.remove(`playing`),this.screens.refreshTitle(this.save,this.selectedShip,this.daily,jg()),this.screens.showTitle(),this.audio.playMusic(`music-title`),this.audio.setEngine(!1,0,0,!1)}toTitle(){this.recordRun(),this.audio.pause(!1),this.startAttract()}selectShip(e){let t=pp[e];if(!mp(t,{best:this.save.best,bestSector:this.save.bestSector})){this.audio.cue(`deny`);return}this.selectedShip=e,this.save.ship=e,xp(this.save),this.audio.cue(`select`),this.gr.view.setShipStyle(e),this.world.reset(this.attractSeed,t,!1),this.screens.refreshTitle(this.save,e,this.daily,jg())}cycleShip(e){let t={best:this.save.best,bestSector:this.save.bestSector};for(let n=this.selectedShip+e;n>=0&&n<pp.length;n+=e)if(mp(pp[n],t)){this.selectShip(n);return}this.audio.cue(`deny`)}startRun(){this.recordRun(),this.audio.unlock(),this.audio.pause(!1);let e=this.daily;this.runDay=jg();let t=e?jd(`void-cruiser-${this.runDay}`):Math.random()*4294967296>>>0,n=pp[this.selectedShip];this.world.reset(t,n,e),this.gr.view.setShipStyle(this.selectedShip),this.gr.view.activeShip.reset(),this.gr.fx.clear(),this.gr.rig.trauma=0,this.overlay.clear(),this.hud.reset(),this.hud.show(!0),this.router.hitStop=0,this.router.audible=!0,this.result=null,this.runOpen=!0,this.alarmT=0,this.state=`playing`,this.screens.hideAll(),this.reticle.classList.remove(`hidden`),document.body.classList.add(`playing`),this.audio.playMusic(`music-stage`,.6),this.audio.cue(`restart`),this.hud.showBanner(`SECTOR 1  ${this.world.director.def.name}`,this.world.director.def.tag),!this.hintShown||this.save.runs<3?(this.hud.showHint(`HOLD LEFT CLICK: FIRE    HOLD RIGHT CLICK: BOOST    E: OVERCLOCK    THREE MISSION CARDS AT TOP LEFT`,9),this.hintShown=!0):this.hud.showHint(`THREE MISSION CARDS ARE LISTED AT TOP LEFT. FINISH THEM FOR BONUS SCORE`,4.5),this.input.clearOneShots()}pause(){this.state===`playing`&&this.world.status===`running`&&(this.state=`paused`,this.audio.pause(!0),this.hud.calm(),this.screens.showPause(),this.reticle.classList.add(`hidden`),document.body.classList.remove(`playing`),this.audio.setEngine(!1,0,0,!1))}resume(){this.state===`paused`&&(this.state=`playing`,this.screens.hideAll(),this.reticle.classList.remove(`hidden`),document.body.classList.add(`playing`),this.audio.pause(!1),this.input.clearOneShots(),this.last=performance.now())}closeHelp(){this.screens.closeHelp()===`pause`&&(this.state=`paused`)}toggleMute(){this.save.muted=!this.save.muted,xp(this.save),this.audio.setMuted(this.save.muted),this.screens.setMuted(this.save.muted),this.state===`playing`&&this.hud.showHint(this.save.muted?`SOUND OFF`:`SOUND ON`,1.2)}recordRun(e=!1){if(!this.runOpen)return null;this.runOpen=!1;let t=this.world,n=t.player;if(!e&&n.score<=0&&t.time<3)return null;let r=this.save.best,i=this.save.bestSector,a={score:Math.round(n.score),sector:t.stats.sector,ship:this.selectedShip,extracted:t.status===`extracted`,daily:t.daily,date:t.daily?this.runDay:new Date().toISOString().slice(0,10)},{newBest:o,rank:s}=Sp(this.save,a,t.stats.cardsDone);return this.result={score:a.score,prevBest:r,prevBestSector:i,newBest:o,rank:s,sector:a.sector,seconds:t.time,extracted:a.extracted,stats:t.stats,ship:this.selectedShip,daily:t.daily,cards:t.cards.map(e=>({text:e.text,done:e.done,value:Math.floor(e.value),target:e.target,reward:e.reward}))},this.result}endRun(){let e=this.recordRun(!0)??this.result;e&&(this.state=`summary`,this.summaryAt=this.clock,this.screens.fillSummary(e,this.save),this.screens.showSummary(),this.reticle.classList.add(`hidden`),document.body.classList.remove(`playing`),this.hud.show(!1),this.audio.setEngine(!1,0,0,!1),this.audio.playMusic(`music-over`,.8))}menuKey(e,t){this.audio.unlock();let n=this.screens.current;if(e===`mute`){this.toggleMute();return}if(n===`help`){(e===`back`||e===`confirm`||e===`help`)&&this.closeHelp();return}if(this.state===`title`){e===`confirm`&&!t.repeat?this.startRun():e===`help`?this.screens.showHelp(`title`):e===`left`?this.cycleShip(-1):e===`right`?this.cycleShip(1):e===`daily`&&(this.daily=!this.daily,this.screens.refreshTitle(this.save,this.selectedShip,this.daily,jg()));return}if(this.state===`playing`){e===`back`||e===`pause`?this.pause():(e===`restart`||e===`confirm`&&t.key===`Enter`)&&this.world.status===`dying`&&this.startRun();return}if(this.state===`paused`){e===`back`||e===`pause`||e===`confirm`?this.resume():e===`restart`?this.startRun():e===`quit`?this.toTitle():e===`help`&&this.screens.showHelp(`pause`);return}if(this.state===`summary`){let n=this.clock-this.summaryAt>.45;e===`restart`||e===`confirm`&&(t.key===`Enter`||n)?this.startRun():e===`back`&&this.toTitle()}}frame(e){try{this.tick(e)}catch(e){let t=e instanceof Error?e.message:String(e);t!==this.lastError&&(this.lastError=t,console.error(`Frame error (the game keeps running):`,e))}finally{requestAnimationFrame(e=>this.frame(e))}}tick(e){let t=e-this.last;this.last=e;let n=K(t/1e3,5e-4,.1);this.clock+=n,this.input.update(n),this.lastFrameMs=t;let r=this.world,i=r.player;this.debug.god&&this.state===`playing`&&(i.hull=i.maxHull,i.fuel=Math.max(i.fuel,40));let a=0;if(this.state===`title`?a=this.stepAttract(n):this.state===`playing`||this.state===`summary`?a=this.stepPlay(n):this.state===`paused`&&(a=0),this.state===`playing`){let e=(i.cursorX*.5+.5)*window.innerWidth,t=(-i.cursorY*.5+.5)*window.innerHeight;this.reticle.style.transform=`translate(${e.toFixed(1)}px, ${t.toFixed(1)}px)`,this.reticle.classList.toggle(`lock`,i.lockKind!==0),this.reticle.classList.toggle(`fire`,this.input.firing)}this.gr.render(r,this.clock,n,a,t),this.updateShipFx(n),(this.state===`playing`||this.state===`summary`)&&this.hud.update(r,this.save.best,n),this.state===`playing`||this.state===`summary`||this.state===`paused`?this.overlay.draw(r,this.state===`paused`?0:n,this.state===`playing`&&r.status===`running`):this.overlay.clear(),this.updateAudio(n),this.recordPerf(t)}advance(e,t){let n=e,r=0;for(;n>1e-6&&r<5;){let e=Math.min(kg,n);n-=e,r++,this.world.update(e,t),this.router.handle(this.world.events,this.world),t.overclock=!1}}stepPlay(e){let t=this.world,n=e;this.router.hitStop>0&&(this.router.hitStop=Math.max(0,this.router.hitStop-e),n=e*.04),t.status===`dying`&&(n*=.5),this.state===`summary`&&(n=e*.6);let r=this.input.toSim(),i=this.autopilot&&this.state===`playing`?Cm(t,{boost:!0}):r;return this.advance(n,i),this.state===`playing`&&(t.status===`over`||t.status===`extracted`&&t.statusT>1.5)&&this.endRun(),n}stepAttract(e){let t=this.world,n=t.player;(t.status!==`running`||t.time>90)&&(this.attractSeed=this.attractSeed*7919+13>>>0,t.reset(this.attractSeed,pp[this.selectedShip],!1),this.gr.fx.clear()),n.hull<55&&(n.hull=Math.min(n.maxHull,n.hull+40)),n.fuel<40&&(n.fuel=n.maxFuel);let r=Cm(t,{boost:!0});return r.cursorX=K(r.cursorX,-.55,.55),r.cursorY=K(r.cursorY+.1,.26,.6),this.advance(e,r),e}updateShipFx(e){let t=this.world,n=t.player;if(this.state===`paused`||t.status===`over`)return;let r=this.gr.fx,i=this.gr.view.activeShip,a=n.pos.x,o=n.pos.y,s=n.thrust,c=n.stalled?0:Math.round(1+s*2+n.boost*4);for(let e=0;e<2;e++){let t=i.enginePositions[e];for(let e=0;e<c;e++){let e=.14;r.sparks.emit(a+t.x+(r.rnd()-.5)*e,o+t.y+(r.rnd()-.5)*e,t.z+.3,(r.rnd()-.5)*1.2,(r.rnd()-.5)*1.2,4+s*6+n.boost*10,.14+r.rnd()*.1+n.boost*.06,.24+n.boost*.14,.04,n.boost>.3?.5:.35,n.boost>.3?1.1:.9,2,.5,2.2,!1)}}if(n.boost>.3)for(let e of[-1,1])r.sparks.emit(a+e*2.5,o+.1,1.2,0,0,30+n.boost*40,.3,.5,.05,.5,1.1,2.4,.7,.6,!1);if(n.overclock>0&&r.rnd()<.6){let e=r.rnd()<.5?-1:1;r.sparks.emit(a+e*(1.5+r.rnd()),o+.15,.5+r.rnd(),0,2+r.rnd()*2,6,.4,.5,.05,2.4,1.2,.3,.8,1.2,!1)}let l=n.damageLevel;if(l>.3&&t.status===`running`){let t=(l-.25)*1.4;for(let n=0;n<i.damageAnchors.length;n++)if(r.rnd()<t*e*30){let e=i.damageAnchors[n];r.smoke.emit(a+e.x,o+e.y,e.z,r.rnd()-.5,1+r.rnd(),3,.7+r.rnd()*.5,.5,1.7,.2,.18,.18,.55+l*.3,1.2,!1),l>.55&&r.rnd()<.25&&r.sparks.emit(a+e.x,o+e.y,e.z,(r.rnd()-.5)*6,(r.rnd()-.5)*6,8,.3,.5,.04,2.6,1.4,.4,.9,2,!1)}}t.status===`dying`&&r.rnd()<.9&&(r.smoke.emit(a+(r.rnd()-.5)*2,o+(r.rnd()-.5),0,(r.rnd()-.5)*3,1+r.rnd()*3,4,1+r.rnd(),1,3.4,.15,.13,.13,.7,1,!1),r.spark(a+(r.rnd()-.5)*2,o,.5,2,12,2,.6,.4))}updateAudio(e){let t=this.world,n=t.player,r=this.state===`playing`;if(this.audio.setEngine(r&&t.status!==`dying`&&t.status!==`over`,n.thrust,n.boost,n.stalled),r){this.audio.playMusic(t.boss.alive&&t.boss.dying<=0?`music-boss`:`music-stage`,1.4);let r=0;for(let e of t.rocks.items)e.alive&&r++;let i=.22+n.boost*.55+Math.min(.3,r/90)+(t.boss.alive?.25:0)+(n.overclock>0?.15:0);this.audio.setIntensity(i,n.boost),this.alarmT-=e,this.alarmT<=0&&t.status===`running`&&(n.stalled?(this.audio.cue(`alarm`,.8),this.alarmT=2.2):n.fuel<n.maxFuel*.22?(this.audio.cue(`alarm`,.5),this.alarmT=3.2):n.hull<n.maxHull*.28&&(this.audio.cue(`alarm`,.45),this.alarmT=3.6))}else this.state===`title`&&this.audio.setIntensity(.5,0)}recordPerf(e){let t=this.perf;if(this.state!==`playing`)return;t.frames++,t.sumMs+=e,e>t.worstMs&&t.frames>10&&(t.worstMs=e);let n=this.world;t.peakParticles=Math.max(t.peakParticles,this.gr.fx.sparks.liveCount+this.gr.fx.smoke.liveCount);let r=n.rocks.liveCount;t.peakRocks=Math.max(t.peakRocks,r),t.peakBolts=Math.max(t.peakBolts,n.bolts.liveCount);let i=0;for(let e of n.bolts.items)e.alive&&!e.friendly&&i++;t.peakHostile=Math.max(t.peakHostile,r+n.drones.liveCount+n.mines.liveCount+i)}debug={god:!1,jump:e=>this.world.director.debugJump(this.world,e),patrol:(e,t,n=!1)=>{ng(this.world,e,t,{cell:n})},pickup:(e,t,n,r,i,a=!1)=>{let o=Em(this.world,e,t,n,r,i);o&&(o.beacon=a)},gate:e=>this.world.director.debugGate(this.world,e),spawnRock:(e,t,n,r,i,a=0)=>{ph(this.world,e,t,n,r,i,0,0,a)},give:(e,t)=>{this.world.player.weapon=e,this.world.player.tier=t}};debugState(){let e=this.world,t=e.player;return{state:this.state,status:e.status,time:e.time,score:t.score,hull:t.hull,fuel:t.fuel,mult:t.mult,sector:e.director.sector+1,weapon:t.weapon,tier:t.tier,rocks:e.rocks.liveCount,drones:e.drones.liveCount,bolts:e.bolts.liveCount,pickups:e.pickups.liveCount,fps:this.gr.quality.fps,pixelRatio:this.gr.quality.pixelRatio,bloom:this.gr.quality.bloom,frameMs:this.lastFrameMs,audio:this.audio.info(),renderInfo:{calls:this.gr.renderer.info.render.calls,triangles:this.gr.renderer.info.render.triangles,geometries:this.gr.renderer.info.memory.geometries,textures:this.gr.renderer.info.memory.textures,programs:this.gr.renderer.info.programs?.length??0},perf:{...this.perf,avgMs:this.perf.sumMs/Math.max(1,this.perf.frames)}}}},Ng=e=>document.getElementById(e);async function Pg(){let e=Ng(`view`),t=Ng(`loading-fill`),n=Ng(`loading-error`);try{if(location.hash===`#models`){document.body.classList.remove(`booting`);for(let e of[`overlay`,`vignette`,`flash`,`lowhull`,`hud`,`reticle`,`screen-title`,`screen-loading`])Ng(e).classList.add(`hidden`);let t=new dh(1,pp[0],window.innerWidth/window.innerHeight),n=await hm.create(e,t),r=()=>n.resize(window.innerWidth,window.innerHeight);window.addEventListener(`resize`,r),r();let i=new lp(n,document.body);window.__vc={gr:n,gallery:i};let a=performance.now(),o=0,s=e=>{let t=Math.min((e-a)/1e3,.05);a=e,o+=t,i.update(t,o),requestAnimationFrame(s)};requestAnimationFrame(s);return}let n=await Mg.create(e,e=>{t.style.width=`${Math.round(e*100)}%`});window.__vc=n}catch(e){n.textContent=`Could not start: ${e.message}. This game needs WebGL 2 in a recent desktop browser.`,n.classList.remove(`hidden`),console.error(e)}}Pg();