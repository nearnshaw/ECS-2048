/*! Decentraland Gamekit 1.0.0-20181120194302.commit-642b85d */;
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.CW=0]="CW",t[t.CCW=1]="CCW"}(e.Orientation||(e.Orientation={})),function(t){t[t.LOCAL=0]="LOCAL",t[t.WORLD=1]="WORLD",t[t.BONE=2]="BONE"}(e.Space||(e.Space={})),e.ToGammaSpace=1/2.2,e.ToLinearSpace=2.2,e.Epsilon=1e-6,e.DEG2RAD=Math.PI/180,e.RAD2DEG=360/(2*Math.PI)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),r=n(0),i=n(9),s=n(3),a=function(){function t(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),this.x=t,this.y=e,this.z=n}return Object.defineProperty(t.prototype,"isNonUniform",{get:function(){var t=Math.abs(this.x),e=Math.abs(this.y);if(t!==e)return!0;var n=Math.abs(this.z);return t!==n||e!==n},enumerable:!0,configurable:!0}),t.GetClipFactor=function(e,n,o,r){var i=t.Dot(e,o)-r;return i/(i-(t.Dot(n,o)-r))},t.GetAngleBetweenVectors=function(e,n,r){var i=e.normalizeToRef(o.MathTmp.Vector3[1]),s=n.normalizeToRef(o.MathTmp.Vector3[2]),a=t.Dot(i,s),u=o.MathTmp.Vector3[3];return t.CrossToRef(i,s,u),t.Dot(u,r)>0?Math.acos(a):-Math.acos(a)},t.FromArray=function(e,n){return void 0===n&&(n=0),new t(e[n],e[n+1],e[n+2])},t.FromFloatArray=function(e,n){return t.FromArray(e,n)},t.FromArrayToRef=function(t,e,n){n.x=t[e],n.y=t[e+1],n.z=t[e+2]},t.FromFloatArrayToRef=function(e,n,o){return t.FromArrayToRef(e,n,o)},t.FromFloatsToRef=function(t,e,n,o){o.copyFromFloats(t,e,n)},t.Zero=function(){return new t(0,0,0)},t.One=function(){return new t(1,1,1)},t.Up=function(){return new t(0,1,0)},t.Down=function(){return new t(0,-1,0)},t.Forward=function(){return new t(0,0,1)},t.Backward=function(){return new t(0,0,-1)},t.Right=function(){return new t(1,0,0)},t.Left=function(){return new t(-1,0,0)},t.TransformCoordinates=function(e,n){var o=t.Zero();return t.TransformCoordinatesToRef(e,n,o),o},t.TransformCoordinatesToRef=function(e,n,o){return t.TransformCoordinatesFromFloatsToRef(e.x,e.y,e.z,n,o)},t.TransformCoordinatesFromFloatsToRef=function(t,e,n,o,r){var i=o.m,s=t*i[0]+e*i[4]+n*i[8]+i[12],a=t*i[1]+e*i[5]+n*i[9]+i[13],u=t*i[2]+e*i[6]+n*i[10]+i[14],p=1/(t*i[3]+e*i[7]+n*i[11]+i[15]);r.x=s*p,r.y=a*p,r.z=u*p},t.TransformNormal=function(e,n){var o=t.Zero();return t.TransformNormalToRef(e,n,o),o},t.TransformNormalToRef=function(t,e,n){this.TransformNormalFromFloatsToRef(t.x,t.y,t.z,e,n)},t.TransformNormalFromFloatsToRef=function(t,e,n,o,r){var i=o.m;r.x=t*i[0]+e*i[4]+n*i[8],r.y=t*i[1]+e*i[5]+n*i[9],r.z=t*i[2]+e*i[6]+n*i[10]},t.CatmullRom=function(e,n,o,r,i){var s=i*i,a=i*s;return new t(.5*(2*n.x+(-e.x+o.x)*i+(2*e.x-5*n.x+4*o.x-r.x)*s+(-e.x+3*n.x-3*o.x+r.x)*a),.5*(2*n.y+(-e.y+o.y)*i+(2*e.y-5*n.y+4*o.y-r.y)*s+(-e.y+3*n.y-3*o.y+r.y)*a),.5*(2*n.z+(-e.z+o.z)*i+(2*e.z-5*n.z+4*o.z-r.z)*s+(-e.z+3*n.z-3*o.z+r.z)*a))},t.Clamp=function(e,n,o){var r=new t;return t.ClampToRef(e,n,o,r),r},t.ClampToRef=function(t,e,n,o){var r=t.x;r=(r=r>n.x?n.x:r)<e.x?e.x:r;var i=t.y;i=(i=i>n.y?n.y:i)<e.y?e.y:i;var s=t.z;s=(s=s>n.z?n.z:s)<e.z?e.z:s,o.copyFromFloats(r,i,s)},t.Hermite=function(e,n,o,r,i){var s=i*i,a=i*s,u=2*a-3*s+1,p=-2*a+3*s,h=a-2*s+i,c=a-s;return new t(e.x*u+o.x*p+n.x*h+r.x*c,e.y*u+o.y*p+n.y*h+r.y*c,e.z*u+o.z*p+n.z*h+r.z*c)},t.Lerp=function(e,n,o){var r=new t(0,0,0);return t.LerpToRef(e,n,o,r),r},t.LerpToRef=function(t,e,n,o){o.x=t.x+(e.x-t.x)*n,o.y=t.y+(e.y-t.y)*n,o.z=t.z+(e.z-t.z)*n},t.Dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z},t.Cross=function(e,n){var o=t.Zero();return t.CrossToRef(e,n,o),o},t.CrossToRef=function(t,e,n){var o=t.y*e.z-t.z*e.y,r=t.z*e.x-t.x*e.z,i=t.x*e.y-t.y*e.x;n.copyFromFloats(o,r,i)},t.Normalize=function(e){var n=t.Zero();return t.NormalizeToRef(e,n),n},t.NormalizeToRef=function(t,e){t.normalizeToRef(e)},t.Minimize=function(t,e){var n=t.clone();return n.minimizeInPlace(e),n},t.Maximize=function(t,e){var n=t.clone();return n.maximizeInPlace(e),n},t.Distance=function(e,n){return Math.sqrt(t.DistanceSquared(e,n))},t.DistanceSquared=function(t,e){var n=t.x-e.x,o=t.y-e.y,r=t.z-e.z;return n*n+o*o+r*r},t.Center=function(t,e){var n=t.add(e);return n.scaleInPlace(.5),n},t.RotationFromAxis=function(e,n,o){var r=t.Zero();return t.RotationFromAxisToRef(e,n,o,r),r},t.RotationFromAxisToRef=function(t,e,n,r){var s=o.MathTmp.Quaternion[0];i.Quaternion.RotationQuaternionFromAxisToRef(t,e,n,s),s.toEulerAnglesToRef(r)},t.prototype.toString=function(){return"{ x: "+this.x+", y: "+this.y+", z: "+this.z+" }"},t.prototype.getClassName=function(){return"Vector3"},t.prototype.getHashCode=function(){var t=this.x||0;return t=397*(t=397*t^(this.y||0))^(this.z||0)},t.prototype.asArray=function(){var t=[];return this.toArray(t,0),t},t.prototype.toArray=function(t,e){return void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,this},t.prototype.toQuaternion=function(){return i.Quaternion.RotationYawPitchRoll(this.y,this.x,this.z)},t.prototype.addInPlace=function(t){return this.addInPlaceFromFloats(t.x,t.y,t.z)},t.prototype.addInPlaceFromFloats=function(t,e,n){return this.x+=t,this.y+=e,this.z+=n,this},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)},t.prototype.addToRef=function(t,e){return e.copyFromFloats(this.x+t.x,this.y+t.y,this.z+t.z)},t.prototype.subtractInPlace=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)},t.prototype.subtractToRef=function(t,e){return this.subtractFromFloatsToRef(t.x,t.y,t.z,e)},t.prototype.subtractFromFloats=function(e,n,o){return new t(this.x-e,this.y-n,this.z-o)},t.prototype.subtractFromFloatsToRef=function(t,e,n,o){return o.copyFromFloats(this.x-t,this.y-e,this.z-n)},t.prototype.negate=function(){return new t(-this.x,-this.y,-this.z)},t.prototype.scaleInPlace=function(t){return this.x*=t,this.y*=t,this.z*=t,this},t.prototype.scale=function(e){return new t(this.x*e,this.y*e,this.z*e)},t.prototype.scaleToRef=function(t,e){return e.copyFromFloats(this.x*t,this.y*t,this.z*t)},t.prototype.scaleAndAddToRef=function(t,e){return e.addInPlaceFromFloats(this.x*t,this.y*t,this.z*t)},t.prototype.equals=function(t){return t&&this.x===t.x&&this.y===t.y&&this.z===t.z},t.prototype.equalsWithEpsilon=function(t,e){return void 0===e&&(e=r.Epsilon),t&&s.Scalar.WithinEpsilon(this.x,t.x,e)&&s.Scalar.WithinEpsilon(this.y,t.y,e)&&s.Scalar.WithinEpsilon(this.z,t.z,e)},t.prototype.equalsToFloats=function(t,e,n){return this.x===t&&this.y===e&&this.z===n},t.prototype.multiplyInPlace=function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this},t.prototype.multiply=function(t){return this.multiplyByFloats(t.x,t.y,t.z)},t.prototype.multiplyToRef=function(t,e){return e.copyFromFloats(this.x*t.x,this.y*t.y,this.z*t.z)},t.prototype.multiplyByFloats=function(e,n,o){return new t(this.x*e,this.y*n,this.z*o)},t.prototype.divide=function(e){return new t(this.x/e.x,this.y/e.y,this.z/e.z)},t.prototype.divideToRef=function(t,e){return e.copyFromFloats(this.x/t.x,this.y/t.y,this.z/t.z)},t.prototype.divideInPlace=function(t){return this.divideToRef(t,this)},t.prototype.minimizeInPlace=function(t){return this.minimizeInPlaceFromFloats(t.x,t.y,t.z)},t.prototype.maximizeInPlace=function(t){return this.maximizeInPlaceFromFloats(t.x,t.y,t.z)},t.prototype.minimizeInPlaceFromFloats=function(t,e,n){return t<this.x&&(this.x=t),e<this.y&&(this.y=e),n<this.z&&(this.z=n),this},t.prototype.maximizeInPlaceFromFloats=function(t,e,n){return t>this.x&&(this.x=t),e>this.y&&(this.y=e),n>this.z&&(this.z=n),this},t.prototype.floor=function(){return new t(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z))},t.prototype.fract=function(){return new t(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z))},t.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},t.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z},t.prototype.normalize=function(){return this.normalizeFromLength(this.length())},t.prototype.normalizeFromLength=function(t){return 0===t||1===t?this:this.scaleInPlace(1/t)},t.prototype.normalizeToNew=function(){var e=new t(0,0,0);return this.normalizeToRef(e),e},t.prototype.normalizeToRef=function(t){var e=this.length();return 0===e||1===e?t.copyFromFloats(this.x,this.y,this.z):this.scaleToRef(1/e,t)},t.prototype.clone=function(){return new t(this.x,this.y,this.z)},t.prototype.copyFrom=function(t){return this.copyFromFloats(t.x,t.y,t.z)},t.prototype.copyFromFloats=function(t,e,n){return this.x=t,this.y=e,this.z=n,this},t.prototype.set=function(t,e,n){return this.copyFromFloats(t,e,n)},t.prototype.setAll=function(t){return this.x=this.y=this.z=t,this},t}();e.Vector3=a},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return s},s=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(i(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),u=n(8),p="__name__symbol_",h="__component__id_",c=function(){function t(t,e){this.componentId=t,this.componentName=e}return t=o([u.EventConstructor("dcl-disposable-component-created"),r("design:paramtypes",[String,String])],t)}();e.DisposableComponentCreated=c;var l=function(){function t(t){this.componentId=t}return t=o([u.EventConstructor("dcl-disposable-component-removed"),r("design:paramtypes",[String])],t)}();e.DisposableComponentRemoved=l;var f=function(){function t(t,e){this.componentId=t,this.component=e}return t=o([u.EventConstructor("dcl-disposable-component-updated"),r("design:paramtypes",[String,Object])],t)}();function y(t){return function(e){if(e.isComponent)throw new TypeError("You cannot extend a component. Trying to extend "+e.originalClassName+" with: "+t);var n=e,o=function(){if(!y.engine)throw new Error("You need to set a DisposableComponent.engine before creating disposable components");var e=new(n.bind.apply(n,s([void 0],arguments))),o=a.uuid();return Object.defineProperty(e,p,{enumerable:!1,writable:!1,configurable:!1,value:t}),Object.defineProperty(e,h,{enumerable:!1,writable:!1,configurable:!1,value:o}),y.engine&&y.engine.registerComponent(e),e};return o[p]=t,o.isComponent=!0,o.isDisposableComponent=!0,o.originalClassName=t,(o.prototype=e.prototype).constructor=e,o}}e.DisposableComponentUpdated=f,e.Component=function(t){return function(e){if(e.isComponent)throw new TypeError("You cannot extend a component. Trying to extend "+e.originalClassName+" with: "+t);var n=e,o=function(){var e=new(n.bind.apply(n,s([void 0],arguments)));return Object.defineProperty(e,p,{enumerable:!1,writable:!1,configurable:!1,value:t}),e};return o[p]=t,o.isComponent=!0,o.originalClassName=t,(o.prototype=e.prototype).constructor=e,o}},e.DisposableComponent=y,function(t){t.engine=null}(y=e.DisposableComponent||(e.DisposableComponent={})),e.getComponentName=function(t){if(!t)throw new TypeError(t+" is not a component.");if(t[p])return t[p];throw new TypeError(t+" is not a registered component.")},e.getComponentId=function(t){if(!t)throw new TypeError(t+" is not a component.");if(t[h])return t[h];throw new TypeError(t+" is not a registered disposable component.")};var d=function(){function t(){this.dirty=!1,this.data={},this.subscriptions=[]}return t.field=function(t,e){delete t[e]&&Object.defineProperty(t,e.toString(),{get:function(){return this.data[e]},set:function(t){var n=this.data[e];if(this.data[e]=t,t!==n){this.dirty=!0;for(var o=0;o<this.subscriptions.length;o++)this.subscriptions[o](e,t,n)}},enumerable:!0})},t.readonly=function(t,e){delete t[e]&&Object.defineProperty(t,e.toString(),{get:function(){if(e in this.data==!1)throw new Error("The field "+e+" is uninitialized");return this.data[e]},set:function(t){if(e in this.data)throw new Error("The field "+e+" is readonly");this.data[e]=t},enumerable:!0,configurable:!1})},t.prototype.onChange=function(t){this.subscriptions.push(t)},t.prototype.toJSON=function(){return this.data},t}();e.ObservableComponent=d,e.isDisposableComponent=function(t){return h in t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.WithinEpsilon=function(t,e,n){void 0===n&&(n=1.401298e-45);var o=t-e;return-n<=o&&o<=n},t.ToHex=function(t){var e=t.toString(16);return t<=15?("0"+e).toUpperCase():e.toUpperCase()},t.Sign=function(t){var e=+t;return 0===e||isNaN(e)?e:e>0?1:-1},t.Clamp=function(t,e,n){return void 0===e&&(e=0),void 0===n&&(n=1),Math.min(n,Math.max(e,t))},t.Log2=function(t){return Math.log(t)*Math.LOG2E},t.Repeat=function(t,e){return t-Math.floor(t/e)*e},t.Normalize=function(t,e,n){return(t-e)/(n-e)},t.Denormalize=function(t,e,n){return t*(n-e)+e},t.DeltaAngle=function(e,n){var o=t.Repeat(n-e,360);return o>180&&(o-=360),o},t.PingPong=function(e,n){var o=t.Repeat(e,2*n);return n-Math.abs(o-n)},t.SmoothStep=function(e,n,o){var r=t.Clamp(o);return n*(r=-2*r*r*r+3*r*r)+e*(1-r)},t.MoveTowards=function(e,n,o){return Math.abs(n-e)<=o?n:e+t.Sign(n-e)*o},t.MoveTowardsAngle=function(e,n,o){var r=t.DeltaAngle(e,n);return-o<r&&r<o?n:t.MoveTowards(e,e+r,o)},t.Lerp=function(t,e,n){return t+(e-t)*n},t.LerpAngle=function(e,n,o){var r=t.Repeat(n-e,360);return r>180&&(r-=360),e+r*t.Clamp(o)},t.InverseLerp=function(e,n,o){return e!==n?t.Clamp((o-e)/(n-e)):0},t.Hermite=function(t,e,n,o,r){var i=r*r,s=r*i;return t*(2*s-3*i+1)+n*(-2*s+3*i)+e*(s-2*i+r)+o*(s-i)},t.RandomRange=function(t,e){return t===e?t:Math.random()*(e-t)+t},t.RangeToPercent=function(t,e,n){return(t-e)/(n-e)},t.PercentToRange=function(t,e,n){return(n-e)*t+e},t.NormalizeRadians=function(e){return e-t.TwoPi*Math.floor((e+Math.PI)/t.TwoPi)},t.TwoPi=2*Math.PI,t}();e.Scalar=o},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return s},s=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(i(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),u=n(2),p=n(8),h=n(23);function c(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];"undefined"!=typeof dcl?dcl.log.apply(dcl,s(t)):console.log.apply(console,s(["DEBUG:"],t))}function l(t,e){"undefined"!=typeof dcl?dcl.error(t,e):console.error("ERROR:",t,e)}e.log=c,e.error=l;var f=function(){function t(t){this.data=t}return t=o([p.EventConstructor("engineEvent"),r("design:paramtypes",[Object])],t)}();e.EngineEvent=f;var y=function(){function t(){var t;this.eventManager=new p.EventManager,this.rootEntity=((t=new a.Entity(null,"scene")).uuid="0",t),this.systems=[],this.entityLists={},this.addedSystems=[],this._entities={},this._disposableComponents={},this._componentGroups={},this.simpleSystems=[],this.eventManager.addListener(a.ComponentAdded,this,this.componentAddedHandler),this.eventManager.addListener(a.ComponentRemoved,this,this.componentRemovedHandler)}return Object.defineProperty(t.prototype,"entities",{get:function(){return this._entities},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disposableComponents",{get:function(){return this._disposableComponents},enumerable:!0,configurable:!0}),t.prototype.addEntity=function(t){var e=t.getParent();t.isAddedToEngine()?c("The entity is already in the engine. Please fix this"):(t.eventManager=this.eventManager,t.engine=this,e?e.isAddedToEngine()||c("Engine: warning, added an entity with a parent not present in the engine"):t.setParent(this.rootEntity),this._entities[t.uuid]=t,this.checkRequirementsAndAdd(t),t.alive=!0)},t.prototype.removeEntity=function(t,e,n){void 0===e&&(e=!1);var o=t.uuid;if(t.isAddedToEngine()){for(var r in t.components){var i=this._componentGroups[r];if(i)for(var s in i)i[s].removeEntity(t);delete this.entityLists[r][o]}for(var a=0;a<this.simpleSystems.length;a++){var u=this.simpleSystems[a];u.onRemoveEntity&&u.onRemoveEntity(t)}if(e)for(var a in t.children){(p=t.children[a])&&this.removeEntity(p,!0)}else for(var a in t.children){var p;(p=t.children[a])&&p.setParent(n||this.rootEntity)}t.alive=!1,t.eventManager=null,delete this._entities[o]}else for(var r in c("Engine: Trying to remove non existent entity from engine."),t.isAddedToEngine()?c("Engine: Entity id: "+o):c("Engine: Entity has not been added to any engine yet."),c("Engine: Entity's components:"),t.components)c(r)},t.prototype.addSystem=function(t,e){if(void 0===e&&(e=0),-1===this.addedSystems.indexOf(t)){if(this.systems.length>0)for(var n=0;n<this.systems.length;n++){var o=this.systems[n],r=n===this.systems.length-1;if(o.priority>e){this.addedSystems.push(t),this.systems.splice(n,0,{system:t,priority:e});break}if(r){this.addedSystems.push(t),this.systems.splice(n+1,0,{system:t,priority:e});break}}else this.addedSystems.push(t),this.systems.splice(1,0,{system:t,priority:e});this.registerSystem(t)}else c("Engine: Trying to add a system that is already added. Aborting")},t.prototype.removeSystem=function(t){var e=this.addedSystems.indexOf(t);if(-1!==e){t.active=!1,t.deactivate&&t.deactivate(),this.addedSystems.splice(e,1);for(var n=0;n<this.systems.length;n++){this.systems[n].system===t&&this.systems.splice(n,1)}}},t.prototype.update=function(t){for(var e in this.systems){var n=this.systems[e].system;if(n.active&&n.update)try{n.update(t)}catch(t){l(t)}}},t.prototype.getEntitiesWithComponent=function(t){var e="string"==typeof t?t:u.getComponentName(t);return e in this.entityLists?this.entityLists[e]:this.entityLists[e]={}},t.prototype.registerComponent=function(t){var e=u.getComponentId(t),n=u.getComponentName(t);this._disposableComponents[e]=t,this.eventManager.fireEvent(new u.DisposableComponentCreated(e,n)),this.eventManager.fireEvent(new u.DisposableComponentUpdated(e,t))},t.prototype.disposeComponent=function(t){var e=u.getComponentId(t);delete this._disposableComponents[e]&&(this.eventManager.fireEvent(new u.DisposableComponentRemoved(e)),t.onDispose&&t.onDispose())},t.prototype.updateComponent=function(t){this.eventManager.fireEvent(new u.DisposableComponentUpdated(u.getComponentId(t),t))},t.prototype.getComponentGroup=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=new(h.ComponentGroup.bind.apply(h.ComponentGroup,s([void 0],t)));n.active=!0;for(var o=n.requiresNames,r=0;r<o.length;r++){var i=o[r],a=this._componentGroups[i];a||(this._componentGroups[i]=a=[]),-1===a.indexOf(n)&&a.push(n)}for(var u in this._entities)this.checkRequirements(this._entities[u],n);return n},t.prototype.removeComponentGroup=function(t){if(t.active){t.active=!1;for(var e=t.requiresNames,n=0;n<e.length;n++){var o=e[n],r=this._componentGroups[o];if(r){var i=r.indexOf(t);-1!==i&&r.splice(i,1)}}}},t.prototype.registerSystem=function(t){t.active=!0,t.activate&&t.activate(this),this.simpleSystems.push(t)},t.prototype.checkRequirementsAndAdd=function(t){if(t.isAddedToEngine()){for(var e in t.components){e in this.entityLists||(this.entityLists[e]={}),this.entityLists[e][t.uuid]=t;var n=this._componentGroups[e];if(n)for(var o in n)this.checkRequirements(t,n[o])}for(var r=0;r<this.simpleSystems.length;r++){var i=this.simpleSystems[r];i.onAddEntity&&i.onAddEntity(t)}}},t.prototype.checkRequirements=function(t,e){e.meetsRequirements(t)?e.hasEntity(t)||e.addEntity(t):e.hasEntity(t)&&e.removeEntity(t)},t.prototype.componentAddedHandler=function(t){var e,n=t.entity,o=t.componentName;if(n.isAddedToEngine()){this.entityLists[o]?this.entityLists[o][n.uuid]=n:this.entityLists[o]=((e={})[n.uuid]=n,e);var r=this._componentGroups[o];if(r)for(var i in r)this.checkRequirements(n,r[i])}},t.prototype.componentRemovedHandler=function(t){var e=t.entity,n=t.componentName;if(e.isAddedToEngine()){delete this.entityLists[n][e.uuid];var o=this._componentGroups[n];if(o)for(var r in o)this.checkRequirements(e,o[r])}},t}();e.Engine=y},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(0)),o(n(6)),o(n(17)),o(n(18)),o(n(25)),o(n(26)),o(n(27)),o(n(19)),o(n(28)),o(n(29)),o(n(10)),o(n(30)),o(n(31)),o(n(20)),o(n(9)),o(n(3)),o(n(32)),o(n(12)),o(n(1)),o(n(16)),o(n(5))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),r=n(1),i=n(9),s=n(10);e.MathTmp={Vector3:o.buildArray(6,r.Vector3.Zero),Matrix:o.buildArray(2,s.Matrix.Identity),Quaternion:o.buildArray(3,i.Quaternion.Zero),staticUp:r.Vector3.Up(),tmpMatrix:s.Matrix.Zero()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},e.buildArray=function(t,e){for(var n=[],o=0;o<t;++o)n.push(e());return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r="__event_name__",i=[];function s(t){if(!(r in t)||"string"!=typeof t[r])throw new Error("The EventConstructor is not registered");return t[r]}var a=function(){function t(){this.listeners={}}return t.prototype.addListener=function(t,e,n){if(!t||"function"!=typeof t)throw new Error("Invalid EventConstructor");var o=s(t),r=this.listeners[o];r||(r=this.listeners[o]=[]);for(var i=0;i<r.length;i++){if(r[i].listener===e)throw new Error("The provided listener is already registered")}r.push({listener:e,fn:n})},t.prototype.removeListener=function(t,e){if(!e||"function"!=typeof e)throw new Error("Invalid EventConstructor");var n=s(e),o=this.listeners[n];if(!o)return!1;for(var r=0;r<o.length;r++){if(o[r].listener===t)return o.splice(r,1),!0}return!1},t.prototype.fireEvent=function(t){var e=s(t.constructor),n=this.listeners[e];if(n)for(var r=0;r<n.length;r++)try{var i=n[r];i.fn.call(i.listener,t)}catch(t){o.error(t)}},t}();e.EventManager=a,e.EventConstructor=function(t){if(!t||"string"!=typeof t)throw new Error("Invalid event name "+t);if(-1!==i.indexOf(t))throw new Error("The event name "+t+" is already taken");return i.push(t),function(e){return e[r]=t,e}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),r=n(1),i=n(6),s=n(0),a=function(){function t(t,e,n,o){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),void 0===o&&(o=1),this.x=t,this.y=e,this.z=n,this.w=o}return t.FromRotationMatrix=function(e){var n=new t;return t.FromRotationMatrixToRef(e,n),n},t.FromRotationMatrixToRef=function(t,e){var n,o=t.m,r=o[0],i=o[4],s=o[8],a=o[1],u=o[5],p=o[9],h=o[2],c=o[6],l=o[10],f=r+u+l;f>0?(n=.5/Math.sqrt(f+1),e.w=.25/n,e.x=(c-p)*n,e.y=(s-h)*n,e.z=(a-i)*n):r>u&&r>l?(n=2*Math.sqrt(1+r-u-l),e.w=(c-p)/n,e.x=.25*n,e.y=(i+a)/n,e.z=(s+h)/n):u>l?(n=2*Math.sqrt(1+u-r-l),e.w=(s-h)/n,e.x=(i+a)/n,e.y=.25*n,e.z=(p+c)/n):(n=2*Math.sqrt(1+l-r-u),e.w=(a-i)/n,e.x=(s+h)/n,e.y=(p+c)/n,e.z=.25*n)},t.Dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z+t.w*e.w},t.AreClose=function(e,n){return t.Dot(e,n)>=0},t.Zero=function(){return new t(0,0,0,0)},t.Inverse=function(e){return new t(-e.x,-e.y,-e.z,e.w)},t.IsIdentity=function(t){return t&&0===t.x&&0===t.y&&0===t.z&&1===t.w},t.RotationAxis=function(e,n){var o=n*s.DEG2RAD;return t.RotationAxisToRef(e,o,new t)},t.RotationAxisToRef=function(t,e,n){var o=e*s.DEG2RAD,r=Math.sin(o/2);return t.normalize(),n.w=Math.cos(o/2),n.x=t.x*r,n.y=t.y*r,n.z=t.z*r,n},t.FromArray=function(e,n){return void 0===n&&(n=0),new t(e[n],e[n+1],e[n+2],e[n+3])},t.FromEulerAnglesRef=function(e,n,o,r){return t.RotationYawPitchRollToRef(n*s.DEG2RAD,e*s.DEG2RAD,o*s.DEG2RAD,r)},t.RotationYawPitchRoll=function(e,n,o){var r=new t;return t.RotationYawPitchRollToRef(e,n,o,r),r},t.RotationYawPitchRollToRef=function(t,e,n,o){var r=.5*n,i=.5*e,s=.5*t,a=Math.sin(r),u=Math.cos(r),p=Math.sin(i),h=Math.cos(i),c=Math.sin(s),l=Math.cos(s);o.x=l*p*u+c*h*a,o.y=c*h*u-l*p*a,o.z=l*h*a-c*p*u,o.w=l*h*u+c*p*a},t.RotationAlphaBetaGamma=function(e,n,o){var r=new t;return t.RotationAlphaBetaGammaToRef(e,n,o,r),r},t.RotationAlphaBetaGammaToRef=function(t,e,n,o){var r=.5*(n+t),i=.5*(n-t),s=.5*e;o.x=Math.cos(i)*Math.sin(s),o.y=Math.sin(i)*Math.sin(s),o.z=Math.sin(r)*Math.cos(s),o.w=Math.cos(r)*Math.cos(s)},t.RotationQuaternionFromAxis=function(e,n,o){var r=new t(0,0,0,0);return t.RotationQuaternionFromAxisToRef(e,n,o,r),r},t.RotationQuaternionFromAxisToRef=function(e,n,r,s){var a=i.MathTmp.Matrix[0];o.Matrix.FromXYZAxesToRef(e.normalize(),n.normalize(),r.normalize(),a),t.FromRotationMatrixToRef(a,s)},t.Slerp=function(e,n,o){var r=t.Identity;return t.SlerpToRef(e,n,o,r),r},t.SlerpToRef=function(t,e,n,o){var r,i,s=t.x*e.x+t.y*e.y+t.z*e.z+t.w*e.w,a=!1;if(s<0&&(a=!0,s=-s),s>.999999)i=1-n,r=a?-n:n;else{var u=Math.acos(s),p=1/Math.sin(u);i=Math.sin((1-n)*u)*p,r=a?-Math.sin(n*u)*p:Math.sin(n*u)*p}o.x=i*t.x+r*e.x,o.y=i*t.y+r*e.y,o.z=i*t.z+r*e.z,o.w=i*t.w+r*e.w},t.Hermite=function(e,n,o,r,i){var s=i*i,a=i*s,u=2*a-3*s+1,p=-2*a+3*s,h=a-2*s+i,c=a-s;return new t(e.x*u+o.x*p+n.x*h+r.x*c,e.y*u+o.y*p+n.y*h+r.y*c,e.z*u+o.z*p+n.z*h+r.z*c,e.w*u+o.w*p+n.w*h+r.w*c)},Object.defineProperty(t,"Identity",{get:function(){return new t(0,0,0,1)},enumerable:!0,configurable:!0}),t.Angle=function(e,n){var o=t.Dot(e,n);return 2*Math.acos(Math.min(Math.abs(o),1))*s.RAD2DEG},t.Euler=function(e,n,o){return t.RotationYawPitchRoll(n*s.DEG2RAD,e*s.DEG2RAD,o*s.DEG2RAD)},t.LookRotation=function(e,n){void 0===n&&(n=i.MathTmp.staticUp);var o=r.Vector3.Normalize(e),s=r.Vector3.Normalize(r.Vector3.Cross(n,o)),a=r.Vector3.Cross(o,s),u=s.x,p=s.y,h=s.z,c=a.x,l=a.y,f=a.z,y=o.x,d=o.y,m=o.z,v=u+l+m,g=new t;if(v>0){var b=Math.sqrt(v+1);return g.w=.5*b,b=.5/b,g.x=(f-d)*b,g.y=(y-h)*b,g.z=(p-c)*b,g}if(u>=l&&u>=m){var x=Math.sqrt(1+u-l-m),w=.5/x;return g.x=.5*x,g.y=(p+c)*w,g.z=(h+y)*w,g.w=(f-d)*w,g}if(l>m){var _=Math.sqrt(1+l-u-m),R=.5/_;return g.x=(c+p)*R,g.y=.5*_,g.z=(d+f)*R,g.w=(y-h)*R,g}var T=Math.sqrt(1+m-u-l),z=.5/T;return g.x=(y+h)*z,g.y=(d+f)*z,g.z=.5*T,g.w=(p-c)*z,g},t.RotateTowards=function(e,n,o){var r=t.Angle(e,n);if(0===r)return n;var i=Math.min(1,o/r);return t.Slerp(e,n,i)},t.FromToRotation=function(e,n){var o=new t,i=e.normalize(),a=n.normalize(),u=r.Vector3.Dot(i,a);if(u>-1+s.Epsilon){var p=Math.sqrt(2*(1+u)),h=1/p,c=r.Vector3.Cross(i,a).scaleInPlace(h);o.set(c.x,c.y,c.z,.5*p)}else{if(u>1-s.Epsilon)return new t(0,0,0,1);var l=r.Vector3.Cross(r.Vector3.Right(),i);l.lengthSquared()<s.Epsilon&&(l=r.Vector3.Cross(r.Vector3.Forward(),i)),o.set(l.x,l.y,l.z,0)}return o.normalize()},t.NormalizeAngles=function(e){return e.x=t.NormalizeAngle(e.x),e.y=t.NormalizeAngle(e.y),e.z=t.NormalizeAngle(e.z),e},t.NormalizeAngle=function(t){for(var e=t;e>=360;)e-=360;for(;e<-s.Epsilon;)e+=360;return e},Object.defineProperty(t.prototype,"eulerAngles",{get:function(){var e=this.w*this.w,n=this.x*this.x+this.y*this.y+this.z*this.z+e,o=this.x*this.w-this.y*this.z,i=new r.Vector3;if(o>.4995*n)return i.y=2*Math.atan2(this.y,this.x),i.x=Math.PI/2,i.z=0,t.NormalizeAngles(i.scaleInPlace(s.RAD2DEG));if(o<-.4995*n)return i.y=-2*Math.atan2(this.y,this.x),i.x=-Math.PI/2,i.z=0,t.NormalizeAngles(i.scaleInPlace(s.RAD2DEG));var a=new t(this.w,this.z,this.x,this.y);return i.y=Math.atan2(2*a.x*a.w+2*a.y*a.z,1-2*(a.z*a.z+a.w*a.w)),i.x=Math.asin(2*(a.x*a.z-a.w*a.y)),i.z=Math.atan2(2*a.x*a.y+2*a.z*a.w,1-2*(a.y*a.y+a.z*a.z)),t.NormalizeAngles(i.scaleInPlace(s.RAD2DEG))},set:function(e){t.RotationYawPitchRollToRef(e.y*s.DEG2RAD,e.x*s.DEG2RAD,e.z*s.DEG2RAD,this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"normalized",{get:function(){return this.normalize()},enumerable:!0,configurable:!0}),t.prototype.setFromToRotation=function(e,n,r){void 0===r&&(r=i.MathTmp.staticUp),i.MathTmp.tmpMatrix=o.Matrix.Zero(),o.Matrix.LookAtLHToRef(e,n,r,i.MathTmp.tmpMatrix),i.MathTmp.tmpMatrix.invert(),t.FromRotationMatrixToRef(i.MathTmp.tmpMatrix,this)},t.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+", "+this.w+")"},Object.defineProperty(t.prototype,"length",{get:function(){return Math.sqrt(this.lengthSquared)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lengthSquared",{get:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},enumerable:!0,configurable:!0}),t.prototype.getClassName=function(){return"Quaternion"},t.prototype.getHashCode=function(){var t=this.x||0;return t=397*(t=397*(t=397*t^(this.y||0))^(this.z||0))^(this.w||0)},t.prototype.asArray=function(){return[this.x,this.y,this.z,this.w]},t.prototype.equals=function(t){return t&&this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},t.prototype.clone=function(){return new t(this.x,this.y,this.z,this.w)},t.prototype.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this},t.prototype.copyFromFloats=function(t,e,n,o){return this.x=t,this.y=e,this.z=n,this.w=o,this},t.prototype.set=function(t,e,n,o){return this.copyFromFloats(t,e,n,o)},t.prototype.setEuler=function(e,n,o){return t.RotationYawPitchRollToRef(n*s.DEG2RAD,e*s.DEG2RAD,o*s.DEG2RAD,this),this},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)},t.prototype.addInPlace=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)},t.prototype.scale=function(e){return new t(this.x*e,this.y*e,this.z*e,this.w*e)},t.prototype.scaleToRef=function(t,e){return e.x=this.x*t,e.y=this.y*t,e.z=this.z*t,e.w=this.w*t,this},t.prototype.scaleInPlace=function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},t.prototype.scaleAndAddToRef=function(t,e){return e.x+=this.x*t,e.y+=this.y*t,e.z+=this.z*t,e.w+=this.w*t,this},t.prototype.multiply=function(e){var n=new t(0,0,0,1);return this.multiplyToRef(e,n),n},t.prototype.multiplyToRef=function(t,e){var n=this.x*t.w+this.y*t.z-this.z*t.y+this.w*t.x,o=-this.x*t.z+this.y*t.w+this.z*t.x+this.w*t.y,r=this.x*t.y-this.y*t.x+this.z*t.w+this.w*t.z,i=-this.x*t.x-this.y*t.y-this.z*t.z+this.w*t.w;return e.copyFromFloats(n,o,r,i),this},t.prototype.multiplyInPlace=function(t){return this.multiplyToRef(t,this),this},t.prototype.conjugateToRef=function(t){return t.copyFromFloats(-this.x,-this.y,-this.z,this.w),this},t.prototype.conjugateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},t.prototype.conjugate=function(){return new t(-this.x,-this.y,-this.z,this.w)},t.prototype.normalize=function(){var t=1/this.length;return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},t.prototype.toEulerAnglesToRef=function(t,e){void 0===e&&(e="YZX");var n=this.z,o=this.x,r=this.y,i=this.w,s=i*i,a=n*n,u=o*o,p=r*r,h=r*n-o*i;return h<-.4999999?(t.y=2*Math.atan2(r,i),t.x=Math.PI/2,t.z=0):h>.4999999?(t.y=2*Math.atan2(r,i),t.x=-Math.PI/2,t.z=0):(t.z=Math.atan2(2*(o*r+n*i),-a-u+p+s),t.x=Math.asin(-2*(n*r-o*i)),t.y=Math.atan2(2*(n*o+r*i),a-u-p+s)),this},t.prototype.angleAxis=function(e,n){if(0===n.lengthSquared())return t.Identity;var o=t.Identity,r=e*s.DEG2RAD;r*=.5;var i=n.normalize();return i=n.scaleInPlace(Math.sin(r)),o.x=i.x,o.y=i.y,o.z=i.z,o.w=Math.cos(r),o.normalize()},t.prototype.toRotationMatrix=function(t){return o.Matrix.FromQuaternionToRef(this,t),this},t.prototype.fromRotationMatrix=function(e){return t.FromRotationMatrixToRef(e,this),this},t}();e.Quaternion=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(9),i=n(6),s=n(16),a=function(){function t(){this._isIdentity=!1,this._isIdentityDirty=!0,this._isIdentity3x2=!0,this._isIdentity3x2Dirty=!0,this._m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this._updateIdentityStatus(!1)}return Object.defineProperty(t.prototype,"m",{get:function(){return this._m},enumerable:!0,configurable:!0}),Object.defineProperty(t,"IdentityReadOnly",{get:function(){return t._identityReadOnly},enumerable:!0,configurable:!0}),t.FromArray=function(e,n){void 0===n&&(n=0);var o=new t;return t.FromArrayToRef(e,n,o),o},t.FromArrayToRef=function(t,e,n){for(var o=0;o<16;o++)n._m[o]=t[o+e];n._markAsUpdated()},t.FromFloatArrayToRefScaled=function(t,e,n,o){for(var r=0;r<16;r++)o._m[r]=t[r+e]*n;o._markAsUpdated()},t.FromValuesToRef=function(t,e,n,o,r,i,s,a,u,p,h,c,l,f,y,d,m){var v=m._m;v[0]=t,v[1]=e,v[2]=n,v[3]=o,v[4]=r,v[5]=i,v[6]=s,v[7]=a,v[8]=u,v[9]=p,v[10]=h,v[11]=c,v[12]=l,v[13]=f,v[14]=y,v[15]=d,m._markAsUpdated()},t.FromValues=function(e,n,o,r,i,s,a,u,p,h,c,l,f,y,d,m){var v=new t,g=v._m;return g[0]=e,g[1]=n,g[2]=o,g[3]=r,g[4]=i,g[5]=s,g[6]=a,g[7]=u,g[8]=p,g[9]=h,g[10]=c,g[11]=l,g[12]=f,g[13]=y,g[14]=d,g[15]=m,v._markAsUpdated(),v},t.Compose=function(e,n,o){var r=new t;return t.ComposeToRef(e,n,o,r),r},t.ComposeToRef=function(e,n,o,r){t.ScalingToRef(e.x,e.y,e.z,i.MathTmp.Matrix[1]),n.toRotationMatrix(i.MathTmp.Matrix[0]),i.MathTmp.Matrix[1].multiplyToRef(i.MathTmp.Matrix[0],r),r.setTranslation(o)},t.Identity=function(){var e=t.FromValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return e._updateIdentityStatus(!0),e},t.IdentityToRef=function(e){t.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,e),e._updateIdentityStatus(!0)},t.Zero=function(){var e=t.FromValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return e._updateIdentityStatus(!1),e},t.RotationX=function(e){var n=new t;return t.RotationXToRef(e,n),n},t.Invert=function(e){var n=new t;return e.invertToRef(n),n},t.RotationXToRef=function(e,n){var o=Math.sin(e),r=Math.cos(e);t.FromValuesToRef(1,0,0,0,0,r,o,0,0,-o,r,0,0,0,0,1,n),n._updateIdentityStatus(1===r&&0===o)},t.RotationY=function(e){var n=new t;return t.RotationYToRef(e,n),n},t.RotationYToRef=function(e,n){var o=Math.sin(e),r=Math.cos(e);t.FromValuesToRef(r,0,-o,0,0,1,0,0,o,0,r,0,0,0,0,1,n),n._updateIdentityStatus(1===r&&0===o)},t.RotationZ=function(e){var n=new t;return t.RotationZToRef(e,n),n},t.RotationZToRef=function(e,n){var o=Math.sin(e),r=Math.cos(e);t.FromValuesToRef(r,o,0,0,-o,r,0,0,0,0,1,0,0,0,0,1,n),n._updateIdentityStatus(1===r&&0===o)},t.RotationAxis=function(e,n){var o=new t;return t.RotationAxisToRef(e,n,o),o},t.RotationAxisToRef=function(t,e,n){var o=Math.sin(-e),r=Math.cos(-e),i=1-r;t.normalize();var s=n._m;s[0]=t.x*t.x*i+r,s[1]=t.x*t.y*i-t.z*o,s[2]=t.x*t.z*i+t.y*o,s[3]=0,s[4]=t.y*t.x*i+t.z*o,s[5]=t.y*t.y*i+r,s[6]=t.y*t.z*i-t.x*o,s[7]=0,s[8]=t.z*t.x*i-t.y*o,s[9]=t.z*t.y*i+t.x*o,s[10]=t.z*t.z*i+r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,n._markAsUpdated()},t.RotationYawPitchRoll=function(e,n,o){var r=new t;return t.RotationYawPitchRollToRef(e,n,o,r),r},t.RotationYawPitchRollToRef=function(t,e,n,o){r.Quaternion.RotationYawPitchRollToRef(t,e,n,i.MathTmp.Quaternion[0]),i.MathTmp.Quaternion[0].toRotationMatrix(o)},t.Scaling=function(e,n,o){var r=new t;return t.ScalingToRef(e,n,o,r),r},t.ScalingToRef=function(e,n,o,r){t.FromValuesToRef(e,0,0,0,0,n,0,0,0,0,o,0,0,0,0,1,r),r._updateIdentityStatus(1===e&&1===n&&1===o)},t.Translation=function(e,n,o){var r=new t;return t.TranslationToRef(e,n,o,r),r},t.TranslationToRef=function(e,n,o,r){t.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,e,n,o,1,r),r._updateIdentityStatus(0===e&&0===n&&0===o)},t.Lerp=function(e,n,o){var r=new t;return t.LerpToRef(e,n,o,r),r},t.LerpToRef=function(t,e,n,o){for(var r=0;r<16;r++)o._m[r]=t._m[r]*(1-n)+e._m[r]*n;o._markAsUpdated()},t.DecomposeLerp=function(e,n,o){var r=new t;return t.DecomposeLerpToRef(e,n,o,r),r},t.DecomposeLerpToRef=function(e,n,s,a){var u=i.MathTmp.Vector3[0],p=i.MathTmp.Quaternion[0],h=i.MathTmp.Vector3[1];e.decompose(u,p,h);var c=i.MathTmp.Vector3[2],l=i.MathTmp.Quaternion[1],f=i.MathTmp.Vector3[3];n.decompose(c,l,f);var y=i.MathTmp.Vector3[4];o.Vector3.LerpToRef(u,c,s,y);var d=i.MathTmp.Quaternion[2];r.Quaternion.SlerpToRef(p,l,s,d);var m=i.MathTmp.Vector3[5];o.Vector3.LerpToRef(h,f,s,m),t.ComposeToRef(y,d,m,a)},t.LookAtLH=function(e,n,o){var r=new t;return t.LookAtLHToRef(e,n,o,r),r},t.LookAtLHToRef=function(e,n,r,s){var a=i.MathTmp.Vector3[0],u=i.MathTmp.Vector3[1],p=i.MathTmp.Vector3[2];n.subtractToRef(e,p),p.normalize(),o.Vector3.CrossToRef(r,p,a);var h=a.lengthSquared();0===h?a.x=1:a.normalizeFromLength(Math.sqrt(h)),o.Vector3.CrossToRef(p,a,u),u.normalize();var c=-o.Vector3.Dot(a,e),l=-o.Vector3.Dot(u,e),f=-o.Vector3.Dot(p,e);t.FromValuesToRef(a.x,u.x,p.x,0,a.y,u.y,p.y,0,a.z,u.z,p.z,0,c,l,f,1,s)},t.LookAtRH=function(e,n,o){var r=new t;return t.LookAtRHToRef(e,n,o,r),r},t.LookAtRHToRef=function(e,n,r,s){var a=i.MathTmp.Vector3[0],u=i.MathTmp.Vector3[1],p=i.MathTmp.Vector3[2];e.subtractToRef(n,p),p.normalize(),o.Vector3.CrossToRef(r,p,a);var h=a.lengthSquared();0===h?a.x=1:a.normalizeFromLength(Math.sqrt(h)),o.Vector3.CrossToRef(p,a,u),u.normalize();var c=-o.Vector3.Dot(a,e),l=-o.Vector3.Dot(u,e),f=-o.Vector3.Dot(p,e);t.FromValuesToRef(a.x,u.x,p.x,0,a.y,u.y,p.y,0,a.z,u.z,p.z,0,c,l,f,1,s)},t.OrthoLH=function(e,n,o,r){var i=new t;return t.OrthoLHToRef(e,n,o,r,i),i},t.OrthoLHToRef=function(e,n,o,r,i){var s=2/e,a=2/n,u=2/(r-o),p=-(r+o)/(r-o);t.FromValuesToRef(s,0,0,0,0,a,0,0,0,0,u,0,0,0,p,1,i),i._updateIdentityStatus(1===s&&1===a&&1===u&&0===p)},t.OrthoOffCenterLH=function(e,n,o,r,i,s){var a=new t;return t.OrthoOffCenterLHToRef(e,n,o,r,i,s,a),a},t.OrthoOffCenterLHToRef=function(e,n,o,r,i,s,a){var u=2/(n-e),p=2/(r-o),h=2/(s-i),c=-(s+i)/(s-i),l=(e+n)/(e-n),f=(r+o)/(o-r);t.FromValuesToRef(u,0,0,0,0,p,0,0,0,0,h,0,l,f,c,1,a),a._markAsUpdated()},t.OrthoOffCenterRH=function(e,n,o,r,i,s){var a=new t;return t.OrthoOffCenterRHToRef(e,n,o,r,i,s,a),a},t.OrthoOffCenterRHToRef=function(e,n,o,r,i,s,a){t.OrthoOffCenterLHToRef(e,n,o,r,i,s,a),a._m[10]*=-1},t.PerspectiveLH=function(e,n,o,r){var i=new t,s=2*o/e,a=2*o/n,u=(r+o)/(r-o),p=-2*r*o/(r-o);return t.FromValuesToRef(s,0,0,0,0,a,0,0,0,0,u,1,0,0,p,0,i),i._updateIdentityStatus(!1),i},t.PerspectiveFovLH=function(e,n,o,r){var i=new t;return t.PerspectiveFovLHToRef(e,n,o,r,i),i},t.PerspectiveFovLHToRef=function(e,n,o,r,i,s){void 0===s&&(s=!0);var a=o,u=r,p=1/Math.tan(.5*e),h=s?p/n:p,c=s?p:p*n,l=(u+a)/(u-a),f=-2*u*a/(u-a);t.FromValuesToRef(h,0,0,0,0,c,0,0,0,0,l,1,0,0,f,0,i),i._updateIdentityStatus(!1)},t.PerspectiveFovRH=function(e,n,o,r){var i=new t;return t.PerspectiveFovRHToRef(e,n,o,r,i),i},t.PerspectiveFovRHToRef=function(e,n,o,r,i,s){void 0===s&&(s=!0);var a=o,u=r,p=1/Math.tan(.5*e),h=s?p/n:p,c=s?p:p*n,l=-(u+a)/(u-a),f=-2*u*a/(u-a);t.FromValuesToRef(h,0,0,0,0,c,0,0,0,0,l,-1,0,0,f,0,i),i._updateIdentityStatus(!1)},t.PerspectiveFovWebVRToRef=function(t,e,n,o,r){void 0===r&&(r=!1);var i=r?-1:1,s=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),u=Math.tan(t.leftDegrees*Math.PI/180),p=Math.tan(t.rightDegrees*Math.PI/180),h=2/(u+p),c=2/(s+a),l=o._m;l[0]=h,l[1]=l[2]=l[3]=l[4]=0,l[5]=c,l[6]=l[7]=0,l[8]=(u-p)*h*.5,l[9]=-(s-a)*c*.5,l[10]=-n/(e-n),l[11]=1*i,l[12]=l[13]=l[15]=0,l[14]=-2*n*e/(n-e),o._markAsUpdated()},t.GetAsMatrix2x2=function(t){return[t._m[0],t._m[1],t._m[4],t._m[5]]},t.GetAsMatrix3x3=function(t){return[t._m[0],t._m[1],t._m[2],t._m[4],t._m[5],t._m[6],t._m[8],t._m[9],t._m[10]]},t.Transpose=function(e){var n=new t;return t.TransposeToRef(e,n),n},t.TransposeToRef=function(t,e){var n=e._m,o=t._m;n[0]=o[0],n[1]=o[4],n[2]=o[8],n[3]=o[12],n[4]=o[1],n[5]=o[5],n[6]=o[9],n[7]=o[13],n[8]=o[2],n[9]=o[6],n[10]=o[10],n[11]=o[14],n[12]=o[3],n[13]=o[7],n[14]=o[11],n[15]=o[15],e._updateIdentityStatus(t._isIdentity,t._isIdentityDirty)},t.Reflection=function(e){var n=new t;return t.ReflectionToRef(e,n),n},t.ReflectionToRef=function(e,n){e.normalize();var o=e.normal.x,r=e.normal.y,i=e.normal.z,s=-2*o,a=-2*r,u=-2*i;t.FromValuesToRef(s*o+1,a*o,u*o,0,s*r,a*r+1,u*r,0,s*i,a*i,u*i+1,0,s*e.d,a*e.d,u*e.d,1,n)},t.FromXYZAxesToRef=function(e,n,o,r){t.FromValuesToRef(e.x,e.y,e.z,0,n.x,n.y,n.z,0,o.x,o.y,o.z,0,0,0,0,1,r)},t.FromQuaternionToRef=function(t,e){var n=t.x*t.x,o=t.y*t.y,r=t.z*t.z,i=t.x*t.y,s=t.z*t.w,a=t.z*t.x,u=t.y*t.w,p=t.y*t.z,h=t.x*t.w;e._m[0]=1-2*(o+r),e._m[1]=2*(i+s),e._m[2]=2*(a-u),e._m[3]=0,e._m[4]=2*(i-s),e._m[5]=1-2*(r+n),e._m[6]=2*(p+h),e._m[7]=0,e._m[8]=2*(a+u),e._m[9]=2*(p-h),e._m[10]=1-2*(o+n),e._m[11]=0,e._m[12]=0,e._m[13]=0,e._m[14]=0,e._m[15]=1,e._markAsUpdated()},t.prototype._markAsUpdated=function(){this.updateFlag=t._updateFlagSeed++,this._isIdentity=!1,this._isIdentity3x2=!1,this._isIdentityDirty=!0,this._isIdentity3x2Dirty=!0},t.prototype.isIdentity=function(){if(this._isIdentityDirty){this._isIdentityDirty=!1;var t=this._m;this._isIdentity=1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&0===t[12]&&0===t[13]&&0===t[14]&&1===t[15]}return this._isIdentity},t.prototype.isIdentityAs3x2=function(){return this._isIdentity3x2Dirty&&(this._isIdentity3x2Dirty=!1,1!==this._m[0]||1!==this._m[5]||1!==this._m[15]?this._isIdentity3x2=!1:0!==this._m[1]||0!==this._m[2]||0!==this._m[3]||0!==this._m[4]||0!==this._m[6]||0!==this._m[7]||0!==this._m[8]||0!==this._m[9]||0!==this._m[10]||0!==this._m[11]||0!==this._m[12]||0!==this._m[13]||0!==this._m[14]?this._isIdentity3x2=!1:this._isIdentity3x2=!0),this._isIdentity3x2},t.prototype.determinant=function(){if(!0===this._isIdentity)return 1;var t=this._m,e=t[0],n=t[1],o=t[2],r=t[3],i=t[4],s=t[5],a=t[6],u=t[7],p=t[8],h=t[9],c=t[10],l=t[11],f=t[12],y=t[13],d=t[14],m=t[15],v=c*m-d*l,g=h*m-y*l,b=h*d-y*c,x=p*m-f*l,w=p*d-c*f,_=p*y-f*h;return e*+(s*v-a*g+u*b)+n*-(i*v-a*x+u*w)+o*+(i*g-s*x+u*_)+r*-(i*b-s*w+a*_)},t.prototype.toArray=function(){return this._m},t.prototype.asArray=function(){return this._m},t.prototype.invert=function(){return this.invertToRef(this),this},t.prototype.reset=function(){return t.FromValuesToRef(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,this),this._updateIdentityStatus(!1),this},t.prototype.add=function(e){var n=new t;return this.addToRef(e,n),n},t.prototype.addToRef=function(t,e){for(var n=0;n<16;n++)e._m[n]=this._m[n]+t._m[n];return e._markAsUpdated(),this},t.prototype.addToSelf=function(t){for(var e=0;e<16;e++)this._m[e]+=t._m[e];return this._markAsUpdated(),this},t.prototype.invertToRef=function(e){if(!0===this._isIdentity)return t.IdentityToRef(e),this;var n=this._m,o=n[0],r=n[1],i=n[2],s=n[3],a=n[4],u=n[5],p=n[6],h=n[7],c=n[8],l=n[9],f=n[10],y=n[11],d=n[12],m=n[13],v=n[14],g=n[15],b=f*g-v*y,x=l*g-m*y,w=l*v-m*f,_=c*g-d*y,R=c*v-f*d,T=c*m-d*l,z=+(u*b-p*x+h*w),C=-(a*b-p*_+h*R),M=+(a*x-u*_+h*T),O=-(a*w-u*R+p*T),A=o*z+r*C+i*M+s*O;if(0===A)return e.copyFrom(this),this;var P=1/A,F=p*g-v*h,S=u*g-m*h,E=u*v-m*p,I=a*g-d*h,D=a*v-d*p,N=a*m-d*u,V=p*y-f*h,L=u*y-l*h,j=u*f-l*p,G=a*y-c*h,q=a*f-c*p,B=a*l-c*u,H=-(r*b-i*x+s*w),U=+(o*b-i*_+s*R),k=-(o*x-r*_+s*T),W=+(o*w-r*R+i*T),Y=+(r*F-i*S+s*E),Z=-(o*F-i*I+s*D),Q=+(o*S-r*I+s*N),X=-(o*E-r*D+i*N),J=-(r*V-i*L+s*j),$=+(o*V-i*G+s*q),K=-(o*L-r*G+s*B),tt=+(o*j-r*q+i*B);return t.FromValuesToRef(z*P,H*P,Y*P,J*P,C*P,U*P,Z*P,$*P,M*P,k*P,Q*P,K*P,O*P,W*P,X*P,tt*P,e),this},t.prototype.addAtIndex=function(t,e){return this._m[t]+=e,this._markAsUpdated(),this},t.prototype.multiplyAtIndex=function(t,e){return this._m[t]*=e,this._markAsUpdated(),this},t.prototype.setTranslationFromFloats=function(t,e,n){return this._m[12]=t,this._m[13]=e,this._m[14]=n,this._markAsUpdated(),this},t.prototype.setTranslation=function(t){return this.setTranslationFromFloats(t.x,t.y,t.z)},t.prototype.getTranslation=function(){return new o.Vector3(this._m[12],this._m[13],this._m[14])},t.prototype.getTranslationToRef=function(t){return t.x=this._m[12],t.y=this._m[13],t.z=this._m[14],this},t.prototype.removeRotationAndScaling=function(){var e=this.m;return t.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,e[12],e[13],e[14],e[15],this),this._updateIdentityStatus(0===e[12]&&0===e[13]&&0===e[14]&&1===e[15]),this},t.prototype.multiply=function(e){var n=new t;return this.multiplyToRef(e,n),n},t.prototype.copyFrom=function(t){t.copyToArray(this._m);var e=t;return this._updateIdentityStatus(e._isIdentity,e._isIdentityDirty,e._isIdentity3x2,e._isIdentity3x2Dirty),this},t.prototype.copyToArray=function(t,e){void 0===e&&(e=0);for(var n=0;n<16;n++)t[e+n]=this._m[n];return this},t.prototype.multiplyToRef=function(t,e){return this._isIdentity?(e.copyFrom(t),this):t._isIdentity?(e.copyFrom(this),this):(this.multiplyToArray(t,e._m,0),e._markAsUpdated(),this)},t.prototype.multiplyToArray=function(t,e,n){var o=this._m,r=t.m,i=o[0],s=o[1],a=o[2],u=o[3],p=o[4],h=o[5],c=o[6],l=o[7],f=o[8],y=o[9],d=o[10],m=o[11],v=o[12],g=o[13],b=o[14],x=o[15],w=r[0],_=r[1],R=r[2],T=r[3],z=r[4],C=r[5],M=r[6],O=r[7],A=r[8],P=r[9],F=r[10],S=r[11],E=r[12],I=r[13],D=r[14],N=r[15];return e[n]=i*w+s*z+a*A+u*E,e[n+1]=i*_+s*C+a*P+u*I,e[n+2]=i*R+s*M+a*F+u*D,e[n+3]=i*T+s*O+a*S+u*N,e[n+4]=p*w+h*z+c*A+l*E,e[n+5]=p*_+h*C+c*P+l*I,e[n+6]=p*R+h*M+c*F+l*D,e[n+7]=p*T+h*O+c*S+l*N,e[n+8]=f*w+y*z+d*A+m*E,e[n+9]=f*_+y*C+d*P+m*I,e[n+10]=f*R+y*M+d*F+m*D,e[n+11]=f*T+y*O+d*S+m*N,e[n+12]=v*w+g*z+b*A+x*E,e[n+13]=v*_+g*C+b*P+x*I,e[n+14]=v*R+g*M+b*F+x*D,e[n+15]=v*T+g*O+b*S+x*N,this},t.prototype.equals=function(t){var e=t;if(!e)return!1;if((this._isIdentity||e._isIdentity)&&!this._isIdentityDirty&&!e._isIdentityDirty)return this._isIdentity&&e._isIdentity;var n=this.m,o=e.m;return n[0]===o[0]&&n[1]===o[1]&&n[2]===o[2]&&n[3]===o[3]&&n[4]===o[4]&&n[5]===o[5]&&n[6]===o[6]&&n[7]===o[7]&&n[8]===o[8]&&n[9]===o[9]&&n[10]===o[10]&&n[11]===o[11]&&n[12]===o[12]&&n[13]===o[13]&&n[14]===o[14]&&n[15]===o[15]},t.prototype.clone=function(){var e=new t;return e.copyFrom(this),e},t.prototype.getClassName=function(){return"Matrix"},t.prototype.getHashCode=function(){for(var t=this._m[0]||0,e=1;e<16;e++)t=397*t^(this._m[e]||0);return t},t.prototype.decompose=function(e,n,o){if(this._isIdentity)return o&&o.setAll(0),e&&e.setAll(1),n&&n.copyFromFloats(0,0,0,1),!0;var s=this._m;o&&o.copyFromFloats(s[12],s[13],s[14]);var a=e||i.MathTmp.Vector3[0];if(a.x=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),a.y=Math.sqrt(s[4]*s[4]+s[5]*s[5]+s[6]*s[6]),a.z=Math.sqrt(s[8]*s[8]+s[9]*s[9]+s[10]*s[10]),this.determinant()<=0&&(a.y*=-1),0===a.x||0===a.y||0===a.z)return n&&n.copyFromFloats(0,0,0,1),!1;if(n){var u=1/a.x,p=1/a.y,h=1/a.z;t.FromValuesToRef(s[0]*u,s[1]*u,s[2]*u,0,s[4]*p,s[5]*p,s[6]*p,0,s[8]*h,s[9]*h,s[10]*h,0,0,0,0,1,i.MathTmp.Matrix[0]),r.Quaternion.FromRotationMatrixToRef(i.MathTmp.Matrix[0],n)}return!0},t.prototype.getRow=function(t){if(t<0||t>3)return null;var e=4*t;return new s.Vector4(this._m[e+0],this._m[e+1],this._m[e+2],this._m[e+3])},t.prototype.setRow=function(t,e){return this.setRowFromFloats(t,e.x,e.y,e.z,e.w)},t.prototype.transpose=function(){return t.Transpose(this)},t.prototype.transposeToRef=function(e){return t.TransposeToRef(this,e),this},t.prototype.setRowFromFloats=function(t,e,n,o,r){if(t<0||t>3)return this;var i=4*t;return this._m[i+0]=e,this._m[i+1]=n,this._m[i+2]=o,this._m[i+3]=r,this._markAsUpdated(),this},t.prototype.scale=function(e){var n=new t;return this.scaleToRef(e,n),n},t.prototype.scaleToRef=function(t,e){for(var n=0;n<16;n++)e._m[n]=this._m[n]*t;return e._markAsUpdated(),this},t.prototype.scaleAndAddToRef=function(t,e){for(var n=0;n<16;n++)e._m[n]+=this._m[n]*t;return e._markAsUpdated(),this},t.prototype.toNormalMatrix=function(e){var n=i.MathTmp.Matrix[0];this.invertToRef(n),n.transposeToRef(e);var o=e._m;t.FromValuesToRef(o[0],o[1],o[2],0,o[4],o[5],o[6],0,o[8],o[9],o[10],0,0,0,0,1,e)},t.prototype.getRotationMatrix=function(){var e=new t;return this.getRotationMatrixToRef(e),e},t.prototype.getRotationMatrixToRef=function(e){var n=i.MathTmp.Vector3[0];if(!this.decompose(n))return t.IdentityToRef(e),this;var o=this._m,r=1/n.x,s=1/n.y,a=1/n.z;return t.FromValuesToRef(o[0]*r,o[1]*r,o[2]*r,0,o[4]*s,o[5]*s,o[6]*s,0,o[8]*a,o[9]*a,o[10]*a,0,0,0,0,1,e),this},t.prototype.toggleModelMatrixHandInPlace=function(){var t=this._m;t[2]*=-1,t[6]*=-1,t[8]*=-1,t[9]*=-1,t[14]*=-1,this._markAsUpdated()},t.prototype.toggleProjectionMatrixHandInPlace=function(){var t=this._m;t[8]*=-1,t[9]*=-1,t[10]*=-1,t[11]*=-1,this._markAsUpdated()},t.prototype._updateIdentityStatus=function(e,n,o,r){void 0===n&&(n=!1),void 0===o&&(o=!1),void 0===r&&(r=!0),this.updateFlag=t._updateFlagSeed++,this._isIdentity=e,this._isIdentity3x2=e||o,this._isIdentityDirty=!this._isIdentity&&n,this._isIdentity3x2Dirty=!this._isIdentity3x2&&r},t._updateFlagSeed=0,t._identityReadOnly=t.Identity(),t}();e.Matrix=a},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n(4),a=n(8),u=n(7),p=function(){function t(t,e){void 0===t&&(t=null),this.name=e,this.children={},this.eventManager=null,this.alive=!1,this.uuid=u.uuid(),this.components={},this._engine=null,this._parent=null,!t&&this.engine?this._parent=this.engine.rootEntity:this._parent=t}return Object.defineProperty(t.prototype,"engine",{get:function(){return this._engine},set:function(t){this._engine=t},enumerable:!0,configurable:!0}),t.prototype.set=function(t){var e=i.getComponentName(t);this.components[e]?this.components[e]=t:this.add(t)},t.prototype.has=function(t){var e=i.getComponentName(t);return!!this.components[e]},t.prototype.get=function(t){var e="string"==typeof t?t:i.getComponentName(t);if(!this.components[e])throw new Error('Can not get component "'+e+'" from entity "'+this.identifier+'"');return this.components[e]},t.prototype.getOrNull=function(t){var e="string"==typeof t?t:i.getComponentName(t);return this.components[e]||null},t.prototype.getOrCreate=function(t){var e=i.getComponentName(t),n=this.components[e]||null;return n||(n=new t,this.set(n)),n},t.prototype.add=function(t){var e=i.getComponentName(t);if(this.components[e])throw new Error('A component of type "'+e+'" is already present in entity "'+this.identifier+'"');this.components[e]=t,this.eventManager&&this.eventManager.fireEvent(new c(this,e))},t.prototype.remove=function(t){var e=i.getComponentName(t);this.components[e]?delete this.components[e]:s.log('Entity Warning: Trying to remove inexisting component "'+e+'" from entity "'+this.identifier+'"'),this.eventManager&&this.eventManager.fireEvent(new h(this,e))},t.prototype.isAddedToEngine=function(){return!!(this._engine&&this.uuid in this._engine.entities)},t.prototype.setParent=function(t){var e=!t&&this.engine?this.engine.rootEntity:t,n=this.getParent();if(t===this)throw new Error('Failed to set parent for entity "'+this.identifier+"\": An entity can't set itself as a its own parent");var o=this.getCircularAncestor(t);if(o)throw new Error('Failed to set parent for entity "'+this.identifier+'": Circular parent references are not allowed (See entity "'+o+'")');n&&delete n.children[this.uuid],this._parent=e||null,this.registerAsChild(),this.eventManager&&this.eventManager.fireEvent(new l(this,e))},t.prototype.getParent=function(){return this._parent},Object.defineProperty(t.prototype,"identifier",{get:function(){return this.name||this.uuid},enumerable:!0,configurable:!0}),t.prototype.getCircularAncestor=function(t){for(var e=this.engine?this.engine.rootEntity:null,n=t;n&&n!==e;){var o=n.getParent();if(o===this)return n.uuid;n=o}return null},t.prototype.registerAsChild=function(){var t=this.getParent();this.uuid&&t&&(t.children[this.uuid]=this)},t}();e.Entity=p;var h=function(){function t(t,e){this.entity=t,this.componentName=e}return t=o([a.EventConstructor("dcl-component-removed"),r("design:paramtypes",[p,String])],t)}();e.ComponentRemoved=h;var c=function(){function t(t,e){this.entity=t,this.componentName=e}return t=o([a.EventConstructor("dcl-component-added"),r("design:paramtypes",[p,String])],t)}();e.ComponentAdded=c;var l=function(){function t(t,e){this.entity=t,this.parent=e}return t=o([a.EventConstructor("dcl-parent-changed"),r("design:paramtypes",[p,p])],t)}();e.ParentChanged=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(3),i=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return t.Zero=function(){return new t(0,0)},t.One=function(){return new t(1,1)},t.FromArray=function(e,n){return void 0===n&&(n=0),new t(e[n],e[n+1])},t.FromArrayToRef=function(t,e,n){n.x=t[e],n.y=t[e+1]},t.CatmullRom=function(e,n,o,r,i){var s=i*i,a=i*s;return new t(.5*(2*n.x+(-e.x+o.x)*i+(2*e.x-5*n.x+4*o.x-r.x)*s+(-e.x+3*n.x-3*o.x+r.x)*a),.5*(2*n.y+(-e.y+o.y)*i+(2*e.y-5*n.y+4*o.y-r.y)*s+(-e.y+3*n.y-3*o.y+r.y)*a))},t.Clamp=function(e,n,o){var r=e.x;r=(r=r>o.x?o.x:r)<n.x?n.x:r;var i=e.y;return new t(r,i=(i=i>o.y?o.y:i)<n.y?n.y:i)},t.Hermite=function(e,n,o,r,i){var s=i*i,a=i*s,u=2*a-3*s+1,p=-2*a+3*s,h=a-2*s+i,c=a-s;return new t(e.x*u+o.x*p+n.x*h+r.x*c,e.y*u+o.y*p+n.y*h+r.y*c)},t.Lerp=function(e,n,o){return new t(e.x+(n.x-e.x)*o,e.y+(n.y-e.y)*o)},t.Dot=function(t,e){return t.x*e.x+t.y*e.y},t.Normalize=function(t){var e=t.clone();return e.normalize(),e},t.Minimize=function(e,n){return new t(e.x<n.x?e.x:n.x,e.y<n.y?e.y:n.y)},t.Maximize=function(e,n){return new t(e.x>n.x?e.x:n.x,e.y>n.y?e.y:n.y)},t.Transform=function(e,n){var o=t.Zero();return t.TransformToRef(e,n,o),o},t.TransformToRef=function(t,e,n){var o=e.m,r=t.x*o[0]+t.y*o[4]+o[12],i=t.x*o[1]+t.y*o[5]+o[13];n.x=r,n.y=i},t.PointInTriangle=function(t,e,n,o){var r=.5*(-n.y*o.x+e.y*(-n.x+o.x)+e.x*(n.y-o.y)+n.x*o.y),i=r<0?-1:1,s=(e.y*o.x-e.x*o.y+(o.y-e.y)*t.x+(e.x-o.x)*t.y)*i,a=(e.x*n.y-e.y*n.x+(e.y-n.y)*t.x+(n.x-e.x)*t.y)*i;return s>0&&a>0&&s+a<2*r*i},t.Distance=function(e,n){return Math.sqrt(t.DistanceSquared(e,n))},t.DistanceSquared=function(t,e){var n=t.x-e.x,o=t.y-e.y;return n*n+o*o},t.Center=function(t,e){var n=t.add(e);return n.scaleInPlace(.5),n},t.DistanceOfPointFromSegment=function(e,n,o){var r=t.DistanceSquared(n,o);if(0===r)return t.Distance(e,n);var i=o.subtract(n),s=Math.max(0,Math.min(1,t.Dot(e.subtract(n),i)/r)),a=n.add(i.multiplyByFloats(s,s));return t.Distance(e,a)},t.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+"}"},t.prototype.getClassName=function(){return"Vector2"},t.prototype.getHashCode=function(){var t=this.x||0;return t=397*t^(this.y||0)},t.prototype.toArray=function(t,e){return void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,this},t.prototype.asArray=function(){var t=new Array;return this.toArray(t,0),t},t.prototype.copyFrom=function(t){return this.x=t.x,this.y=t.y,this},t.prototype.copyFromFloats=function(t,e){return this.x=t,this.y=e,this},t.prototype.set=function(t,e){return this.copyFromFloats(t,e)},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.addToRef=function(t,e){return e.x=this.x+t.x,e.y=this.y+t.y,this},t.prototype.addInPlace=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.addVector3=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.subtractToRef=function(t,e){return e.x=this.x-t.x,e.y=this.y-t.y,this},t.prototype.subtractInPlace=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.multiplyInPlace=function(t){return this.x*=t.x,this.y*=t.y,this},t.prototype.multiply=function(e){return new t(this.x*e.x,this.y*e.y)},t.prototype.multiplyToRef=function(t,e){return e.x=this.x*t.x,e.y=this.y*t.y,this},t.prototype.multiplyByFloats=function(e,n){return new t(this.x*e,this.y*n)},t.prototype.divide=function(e){return new t(this.x/e.x,this.y/e.y)},t.prototype.divideToRef=function(t,e){return e.x=this.x/t.x,e.y=this.y/t.y,this},t.prototype.divideInPlace=function(t){return this.divideToRef(t,this)},t.prototype.negate=function(){return new t(-this.x,-this.y)},t.prototype.scaleInPlace=function(t){return this.x*=t,this.y*=t,this},t.prototype.scale=function(e){var n=new t(0,0);return this.scaleToRef(e,n),n},t.prototype.scaleToRef=function(t,e){return e.x=this.x*t,e.y=this.y*t,this},t.prototype.scaleAndAddToRef=function(t,e){return e.x+=this.x*t,e.y+=this.y*t,this},t.prototype.equals=function(t){return t&&this.x===t.x&&this.y===t.y},t.prototype.equalsWithEpsilon=function(t,e){return void 0===e&&(e=o.Epsilon),t&&r.Scalar.WithinEpsilon(this.x,t.x,e)&&r.Scalar.WithinEpsilon(this.y,t.y,e)},t.prototype.floor=function(){return new t(Math.floor(this.x),Math.floor(this.y))},t.prototype.fract=function(){return new t(this.x-Math.floor(this.x),this.y-Math.floor(this.y))},t.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y},t.prototype.normalize=function(){var t=this.length();if(0===t)return this;var e=1/t;return this.x*=e,this.y*=e,this},t.prototype.clone=function(){return new t(this.x,this.y)},t}();e.Vector2=i},function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),i=function(){function t(){}return t=o([r.EventConstructor("uuidEvent")],t)}();e.UUIDEvent=i},function(t,e,n){"use strict";var o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),i=n(13),s=function(){function t(){}return t.prototype.activate=function(t){t.eventManager.addListener(i.UUIDEvent,this,this.handleEvent),this.group=t.getComponentGroup(r.OnClick),"undefined"!=typeof dcl&&dcl.subscribe("uuidEvent")},t.prototype.deactivate=function(){"undefined"!=typeof dcl&&dcl.unsubscribe("uuidEvent")},t.prototype.handleEvent=function(t){var e,n;try{for(var i=o(this.group.entities),s=i.next();!s.done;s=i.next()){var a=s.value.getOrNull(r.OnClick);a&&a.uuid===t.uuid&&a.callback(t.payload)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}},t}();e.OnClickSystem=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=n(7),p=n(5),h=n(21),c=function(t){function e(e){void 0===e&&(e={});var n=t.call(this)||this;return n.tag="transform",n.position=e.position||p.Vector3.Zero(),n.rotation=e.rotation||p.Quaternion.Identity,n.scale=e.scale||new p.Vector3(1,1,1),n}return r(e,t),Object.defineProperty(e.prototype,"eulerAngles",{get:function(){return this.rotation.eulerAngles},enumerable:!0,configurable:!0}),e.prototype.lookAt=function(t,e){void 0===e&&(e=p.MathTmp.staticUp);var n=new p.Matrix;p.Matrix.LookAtLHToRef(this.position,t,e,n),n.invert(),p.Quaternion.FromRotationMatrixToRef(n,this.rotation)},e.prototype.rotate=function(t,e){this.rotation.multiplyInPlace(this.rotation.angleAxis(e,t))},e.prototype.translate=function(t){this.position.addInPlace(t)},i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([a.ObservableComponent.field,s("design:type",p.Vector3)],e.prototype,"position",void 0),i([a.ObservableComponent.field,s("design:type",p.Quaternion)],e.prototype,"rotation",void 0),i([a.ObservableComponent.field,s("design:type",p.Vector3)],e.prototype,"scale",void 0),e=i([a.Component("engine.transform"),s("design:paramtypes",[Object])],e)}(a.ObservableComponent);e.Transform=c,e.BillboardMode={BILLBOARDMODE_NONE:0,BILLBOARDMODE_X:1,BILLBOARDMODE_Y:2,BILLBOARDMODE_Z:4,BILLBOARDMODE_ALL:7};var l=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.withCollisions=!1,n.billboard=e.BillboardMode.BILLBOARDMODE_NONE,n.visible=!0,n}return r(n,t),i([a.ObservableComponent.field,s("design:type",Boolean)],n.prototype,"withCollisions",void 0),i([a.ObservableComponent.field,s("design:type",Number)],n.prototype,"billboard",void 0),i([a.ObservableComponent.field,s("design:type",Boolean)],n.prototype,"visible",void 0),n}(a.ObservableComponent);e.Shape=l;var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tag="box",e}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),e=i([a.Component("engine.shape")],e)}(l);e.BoxShape=f;var y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tag="sphere",e}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),e=i([a.Component("engine.shape")],e)}(l);e.SphereShape=y;var d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tag="plane",e.width=1,e.height=1,e.uvs=[],e}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"width",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"height",void 0),i([a.ObservableComponent.field,s("design:type",Array)],e.prototype,"uvs",void 0),e=i([a.Component("engine.shape")],e)}(l);e.PlaneShape=d;var m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tag="cone",e.radiusTop=0,e.radiusBottom=1,e.segmentsHeight=1,e.segmentsRadial=36,e.openEnded=!1,e.radius=null,e.arc=360,e}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"radiusTop",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"radiusBottom",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"segmentsHeight",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"segmentsRadial",void 0),i([a.ObservableComponent.field,s("design:type",Boolean)],e.prototype,"openEnded",void 0),i([a.ObservableComponent.field,s("design:type",Object)],e.prototype,"radius",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"arc",void 0),e=i([a.Component("engine.shape")],e)}(l);e.ConeShape=m;var v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tag="cylinder",e.radiusTop=0,e.radiusBottom=1,e.segmentsHeight=1,e.segmentsRadial=36,e.openEnded=!1,e.radius=null,e.arc=360,e}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"radiusTop",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"radiusBottom",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"segmentsHeight",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"segmentsRadial",void 0),i([a.ObservableComponent.field,s("design:type",Boolean)],e.prototype,"openEnded",void 0),i([a.ObservableComponent.field,s("design:type",Object)],e.prototype,"radius",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"arc",void 0),e=i([a.Component("engine.shape")],e)}(l);e.CylinderShape=v;var g=function(t){function e(e){var n=t.call(this)||this;return n.tag="gltf-model",n.skeletalAnimation=[],n.src=e,n}return r(e,t),e.prototype.addClip=function(t){var e=this;this.skeletalAnimation.push(t),t.onChange(function(){e.dirty=!0})},e.prototype.getClip=function(t){for(var e=0;e<this.skeletalAnimation.length;e++){var n=this.skeletalAnimation[e];if(n.clip===t)return n}var o=new h.default(t);return this.addClip(o),o},i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([l.readonly,s("design:type",String)],e.prototype,"src",void 0),i([a.ObservableComponent.readonly,s("design:type",Array)],e.prototype,"skeletalAnimation",void 0),e=i([a.Component("engine.shape"),s("design:paramtypes",[String])],e)}(l);e.GLTFShape=g;var b=function(t){function e(e){var n=t.call(this)||this;return n.tag="obj-model",n.src=e,n}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"src",void 0),e=i([a.Component("engine.shape"),s("design:paramtypes",[String])],e)}(l);e.OBJShape=b;var x=function(t){function e(e){var n=t.call(this)||this;return n.tag="text",n.outlineWidth=0,n.outlineColor=new p.Color3(1,1,1),n.color=new p.Color3(1,1,1),n.fontFamily="Arial",n.fontSize=100,n.fontWeight="normal",n.opacity=1,n.value="",n.lineSpacing="0px",n.lineCount=0,n.resizeToFit=!1,n.textWrapping=!1,n.shadowBlur=0,n.shadowOffsetX=0,n.shadowOffsetY=0,n.shadowColor=new p.Color3(1,1,1),n.zIndex=0,n.hAlign="center",n.vAlign="center",n.width=1,n.height=1,n.paddingTop=0,n.paddingRight=0,n.paddingBottom=0,n.paddingLeft=0,e&&(n.value=e),n}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"outlineWidth",void 0),i([a.ObservableComponent.field,s("design:type",p.Color3)],e.prototype,"outlineColor",void 0),i([a.ObservableComponent.field,s("design:type",p.Color3)],e.prototype,"color",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"fontFamily",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"fontSize",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"fontWeight",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"opacity",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"value",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"lineSpacing",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"lineCount",void 0),i([a.ObservableComponent.field,s("design:type",Boolean)],e.prototype,"resizeToFit",void 0),i([a.ObservableComponent.field,s("design:type",Boolean)],e.prototype,"textWrapping",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"shadowBlur",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"shadowOffsetX",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"shadowOffsetY",void 0),i([a.ObservableComponent.field,s("design:type",p.Color3)],e.prototype,"shadowColor",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"zIndex",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"hAlign",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"vAlign",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"width",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"height",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"paddingTop",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"paddingRight",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"paddingBottom",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"paddingLeft",void 0),e=i([a.Component("engine.shape"),s("design:paramtypes",[String])],e)}(l);e.TextShape=x;var w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tag="material",e.alpha=1,e.albedoColor=p.Color3.FromHexString("#CCCCCCC"),e.emissiveColor=new p.Color3(0,0,0),e.metallic=.5,e.roughness=.5,e.ambientColor=new p.Color3(0,0,0),e.reflectionColor=new p.Color3(1,1,1),e.reflectivityColor=new p.Color3(1,1,1),e.directIntensity=1,e.microSurface=1,e.emissiveIntensity=1,e.environmentIntensity=1,e.specularIntensity=1,e.albedoTexture="",e.alphaTexture="",e.emissiveTexture="",e.bumpTexture="",e.refractionTexture="",e.disableLighting=!1,e.transparencyMode=0,e.hasAlpha=!1,e}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"alpha",void 0),i([a.ObservableComponent.field,s("design:type",p.Color3)],e.prototype,"albedoColor",void 0),i([a.ObservableComponent.field,s("design:type",p.Color3)],e.prototype,"emissiveColor",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"metallic",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"roughness",void 0),i([a.ObservableComponent.field,s("design:type",p.Color3)],e.prototype,"ambientColor",void 0),i([a.ObservableComponent.field,s("design:type",p.Color3)],e.prototype,"reflectionColor",void 0),i([a.ObservableComponent.field,s("design:type",p.Color3)],e.prototype,"reflectivityColor",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"directIntensity",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"microSurface",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"emissiveIntensity",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"environmentIntensity",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"specularIntensity",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"albedoTexture",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"alphaTexture",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"emissiveTexture",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"bumpTexture",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"refractionTexture",void 0),i([a.ObservableComponent.field,s("design:type",Boolean)],e.prototype,"disableLighting",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"transparencyMode",void 0),i([a.ObservableComponent.field,s("design:type",Boolean)],e.prototype,"hasAlpha",void 0),e=i([a.DisposableComponent("engine.material")],e)}(a.ObservableComponent);e.Material=w;var _=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tag="basic-material",e.texture="",e.alphaTest=.5,e.samplingMode=2,e.wrap=0,e}return r(e,t),i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"tag",void 0),i([a.ObservableComponent.field,s("design:type",String)],e.prototype,"texture",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"alphaTest",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"samplingMode",void 0),i([a.ObservableComponent.field,s("design:type",Number)],e.prototype,"wrap",void 0),e=i([a.DisposableComponent("engine.material")],e)}(a.ObservableComponent);e.BasicMaterial=_;var R=function(t){function e(e){var n=t.call(this)||this;return n.uuid=u.uuid(),n.callback=e,n}return r(e,t),e.prototype.toJSON=function(){return this.uuid},i([a.ObservableComponent.readonly,s("design:type",String)],e.prototype,"uuid",void 0),i([a.ObservableComponent.field,s("design:type",Function)],e.prototype,"callback",void 0),e=i([a.Component("engine.onClick"),s("design:paramtypes",[Function])],e)}(a.ObservableComponent);e.OnClick=R},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(3),i=n(1),s=function(){function t(t,e,n,o){this.x=t,this.y=e,this.z=n,this.w=o}return t.FromArray=function(e,n){return void 0===n&&(n=0),new t(e[n],e[n+1],e[n+2],e[n+3])},t.FromArrayToRef=function(t,e,n){n.x=t[e],n.y=t[e+1],n.z=t[e+2],n.w=t[e+3]},t.FromFloatArrayToRef=function(e,n,o){t.FromArrayToRef(e,n,o)},t.FromFloatsToRef=function(t,e,n,o,r){r.x=t,r.y=e,r.z=n,r.w=o},t.Zero=function(){return new t(0,0,0,0)},t.One=function(){return new t(1,1,1,1)},t.Normalize=function(e){var n=t.Zero();return t.NormalizeToRef(e,n),n},t.NormalizeToRef=function(t,e){e.copyFrom(t),e.normalize()},t.Minimize=function(t,e){var n=t.clone();return n.minimizeInPlace(e),n},t.Maximize=function(t,e){var n=t.clone();return n.maximizeInPlace(e),n},t.Distance=function(e,n){return Math.sqrt(t.DistanceSquared(e,n))},t.DistanceSquared=function(t,e){var n=t.x-e.x,o=t.y-e.y,r=t.z-e.z,i=t.w-e.w;return n*n+o*o+r*r+i*i},t.Center=function(t,e){var n=t.add(e);return n.scaleInPlace(.5),n},t.TransformNormal=function(e,n){var o=t.Zero();return t.TransformNormalToRef(e,n,o),o},t.TransformNormalToRef=function(t,e,n){var o=e.m,r=t.x*o[0]+t.y*o[4]+t.z*o[8],i=t.x*o[1]+t.y*o[5]+t.z*o[9],s=t.x*o[2]+t.y*o[6]+t.z*o[10];n.x=r,n.y=i,n.z=s,n.w=t.w},t.TransformNormalFromFloatsToRef=function(t,e,n,o,r,i){var s=r.m;i.x=t*s[0]+e*s[4]+n*s[8],i.y=t*s[1]+e*s[5]+n*s[9],i.z=t*s[2]+e*s[6]+n*s[10],i.w=o},t.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},t.prototype.getClassName=function(){return"Vector4"},t.prototype.getHashCode=function(){var t=this.x||0;return t=397*(t=397*(t=397*t^(this.y||0))^(this.z||0))^(this.w||0)},t.prototype.asArray=function(){var t=new Array;return this.toArray(t,0),t},t.prototype.toArray=function(t,e){return void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,this},t.prototype.addInPlace=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)},t.prototype.addToRef=function(t,e){return e.x=this.x+t.x,e.y=this.y+t.y,e.z=this.z+t.z,e.w=this.w+t.w,this},t.prototype.subtractInPlace=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)},t.prototype.subtractToRef=function(t,e){return e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z,e.w=this.w-t.w,this},t.prototype.subtractFromFloats=function(e,n,o,r){return new t(this.x-e,this.y-n,this.z-o,this.w-r)},t.prototype.subtractFromFloatsToRef=function(t,e,n,o,r){return r.x=this.x-t,r.y=this.y-e,r.z=this.z-n,r.w=this.w-o,this},t.prototype.negate=function(){return new t(-this.x,-this.y,-this.z,-this.w)},t.prototype.scaleInPlace=function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},t.prototype.scale=function(e){return new t(this.x*e,this.y*e,this.z*e,this.w*e)},t.prototype.scaleToRef=function(t,e){return e.x=this.x*t,e.y=this.y*t,e.z=this.z*t,e.w=this.w*t,this},t.prototype.scaleAndAddToRef=function(t,e){return e.x+=this.x*t,e.y+=this.y*t,e.z+=this.z*t,e.w+=this.w*t,this},t.prototype.equals=function(t){return t&&this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},t.prototype.equalsWithEpsilon=function(t,e){return void 0===e&&(e=o.Epsilon),t&&r.Scalar.WithinEpsilon(this.x,t.x,e)&&r.Scalar.WithinEpsilon(this.y,t.y,e)&&r.Scalar.WithinEpsilon(this.z,t.z,e)&&r.Scalar.WithinEpsilon(this.w,t.w,e)},t.prototype.equalsToFloats=function(t,e,n,o){return this.x===t&&this.y===e&&this.z===n&&this.w===o},t.prototype.multiplyInPlace=function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this},t.prototype.multiply=function(e){return new t(this.x*e.x,this.y*e.y,this.z*e.z,this.w*e.w)},t.prototype.multiplyToRef=function(t,e){return e.x=this.x*t.x,e.y=this.y*t.y,e.z=this.z*t.z,e.w=this.w*t.w,this},t.prototype.multiplyByFloats=function(e,n,o,r){return new t(this.x*e,this.y*n,this.z*o,this.w*r)},t.prototype.divide=function(e){return new t(this.x/e.x,this.y/e.y,this.z/e.z,this.w/e.w)},t.prototype.divideToRef=function(t,e){return e.x=this.x/t.x,e.y=this.y/t.y,e.z=this.z/t.z,e.w=this.w/t.w,this},t.prototype.divideInPlace=function(t){return this.divideToRef(t,this)},t.prototype.minimizeInPlace=function(t){return t.x<this.x&&(this.x=t.x),t.y<this.y&&(this.y=t.y),t.z<this.z&&(this.z=t.z),t.w<this.w&&(this.w=t.w),this},t.prototype.maximizeInPlace=function(t){return t.x>this.x&&(this.x=t.x),t.y>this.y&&(this.y=t.y),t.z>this.z&&(this.z=t.z),t.w>this.w&&(this.w=t.w),this},t.prototype.floor=function(){return new t(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z),Math.floor(this.w))},t.prototype.fract=function(){return new t(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z),this.w-Math.floor(this.w))},t.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},t.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},t.prototype.normalize=function(){var t=this.length();return 0===t?this:this.scaleInPlace(1/t)},t.prototype.toVector3=function(){return new i.Vector3(this.x,this.y,this.z)},t.prototype.clone=function(){return new t(this.x,this.y,this.z,this.w)},t.prototype.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this},t.prototype.copyFromFloats=function(t,e,n,o){return this.x=t,this.y=e,this.z=n,this.w=o,this},t.prototype.set=function(t,e,n,o){return this.copyFromFloats(t,e,n,o)},t.prototype.setAll=function(t){return this.x=this.y=this.z=this.w=t,this},t}();e.Vector4=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this._radians=t,this._radians<0&&(this._radians+=2*Math.PI)}return t.BetweenTwoPoints=function(e,n){var o=n.subtract(e);return new t(Math.atan2(o.y,o.x))},t.FromRadians=function(e){return new t(e)},t.FromDegrees=function(e){return new t(e*Math.PI/180)},t.prototype.degrees=function(){return 180*this._radians/Math.PI},t.prototype.radians=function(){return this._radians},t}();e.Angle=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),r=n(12),i=n(0),s=function(){return function(t,e,n){this.startPoint=t,this.midPoint=e,this.endPoint=n;var s=Math.pow(e.x,2)+Math.pow(e.y,2),a=(Math.pow(t.x,2)+Math.pow(t.y,2)-s)/2,u=(s-Math.pow(n.x,2)-Math.pow(n.y,2))/2,p=(t.x-e.x)*(e.y-n.y)-(e.x-n.x)*(t.y-e.y);this.centerPoint=new r.Vector2((a*(e.y-n.y)-u*(t.y-e.y))/p,((t.x-e.x)*u-(e.x-n.x)*a)/p),this.radius=this.centerPoint.subtract(this.startPoint).length(),this.startAngle=o.Angle.BetweenTwoPoints(this.centerPoint,this.startPoint);var h=this.startAngle.degrees(),c=o.Angle.BetweenTwoPoints(this.centerPoint,this.midPoint).degrees(),l=o.Angle.BetweenTwoPoints(this.centerPoint,this.endPoint).degrees();c-h>180&&(c-=360),c-h<-180&&(c+=360),l-c>180&&(l-=360),l-c<-180&&(l+=360),this.orientation=c-h<0?i.Orientation.CW:i.Orientation.CCW,this.angle=o.Angle.FromDegrees(this.orientation===i.Orientation.CW?h-l:l-h)}}();e.Arc2=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(0),i=function(){function t(t,e,n,o){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),void 0===o&&(o=1),this.r=t,this.g=e,this.b=n,this.a=o}return t.FromHexString=function(e){if("#"!==e.substring(0,1)||9!==e.length)return new t(0,0,0,0);var n=parseInt(e.substring(1,3),16),o=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16),i=parseInt(e.substring(7,9),16);return t.FromInts(n,o,r,i)},t.Lerp=function(e,n,o){var r=new t(0,0,0,0);return t.LerpToRef(e,n,o,r),r},t.LerpToRef=function(t,e,n,o){o.r=t.r+(e.r-t.r)*n,o.g=t.g+(e.g-t.g)*n,o.b=t.b+(e.b-t.b)*n,o.a=t.a+(e.a-t.a)*n},t.FromColor3=function(e,n){return void 0===n&&(n=1),new t(e.r,e.g,e.b,n)},t.FromArray=function(e,n){return void 0===n&&(n=0),new t(e[n],e[n+1],e[n+2],e[n+3])},t.FromInts=function(e,n,o,r){return new t(e/255,n/255,o/255,r/255)},t.CheckColors4=function(t,e){if(t.length===3*e){for(var n=[],o=0;o<t.length;o+=3){var r=o/3*4;n[r]=t[o],n[r+1]=t[o+1],n[r+2]=t[o+2],n[r+3]=1}return n}return t},t.prototype.addInPlace=function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this.a+=t.a,this},t.prototype.asArray=function(){var t=new Array;return this.toArray(t,0),t},t.prototype.toArray=function(t,e){return void 0===e&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t[e+3]=this.a,this},t.prototype.add=function(e){return new t(this.r+e.r,this.g+e.g,this.b+e.b,this.a+e.a)},t.prototype.subtract=function(e){return new t(this.r-e.r,this.g-e.g,this.b-e.b,this.a-e.a)},t.prototype.subtractToRef=function(t,e){return e.r=this.r-t.r,e.g=this.g-t.g,e.b=this.b-t.b,e.a=this.a-t.a,this},t.prototype.scale=function(e){return new t(this.r*e,this.g*e,this.b*e,this.a*e)},t.prototype.scaleToRef=function(t,e){return e.r=this.r*t,e.g=this.g*t,e.b=this.b*t,e.a=this.a*t,this},t.prototype.scaleAndAddToRef=function(t,e){return e.r+=this.r*t,e.g+=this.g*t,e.b+=this.b*t,e.a+=this.a*t,this},t.prototype.clampToRef=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=1),n.r=o.Scalar.Clamp(this.r,t,e),n.g=o.Scalar.Clamp(this.g,t,e),n.b=o.Scalar.Clamp(this.b,t,e),n.a=o.Scalar.Clamp(this.a,t,e),this},t.prototype.multiply=function(e){return new t(this.r*e.r,this.g*e.g,this.b*e.b,this.a*e.a)},t.prototype.multiplyToRef=function(t,e){return e.r=this.r*t.r,e.g=this.g*t.g,e.b=this.b*t.b,e.a=this.a*t.a,e},t.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+" A:"+this.a+"}"},t.prototype.getClassName=function(){return"Color4"},t.prototype.getHashCode=function(){var t=this.r||0;return t=397*(t=397*(t=397*t^(this.g||0))^(this.b||0))^(this.a||0)},t.prototype.clone=function(){return new t(this.r,this.g,this.b,this.a)},t.prototype.copyFrom=function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this},t.prototype.copyFromFloats=function(t,e,n,o){return this.r=t,this.g=e,this.b=n,this.a=o,this},t.prototype.set=function(t,e,n,o){return this.copyFromFloats(t,e,n,o)},t.prototype.toHexString=function(){var t=255*this.r|0,e=255*this.g|0,n=255*this.b|0,r=255*this.a|0;return"#"+o.Scalar.ToHex(t)+o.Scalar.ToHex(e)+o.Scalar.ToHex(n)+o.Scalar.ToHex(r)},t.prototype.toLinearSpace=function(){var e=new t;return this.toLinearSpaceToRef(e),e},t.prototype.toLinearSpaceToRef=function(t){return t.r=Math.pow(this.r,r.ToLinearSpace),t.g=Math.pow(this.g,r.ToLinearSpace),t.b=Math.pow(this.b,r.ToLinearSpace),t.a=this.a,this},t.prototype.toGammaSpace=function(){var e=new t;return this.toGammaSpaceToRef(e),e},t.prototype.toGammaSpaceToRef=function(t){return t.r=Math.pow(this.r,r.ToGammaSpace),t.g=Math.pow(this.g,r.ToGammaSpace),t.b=Math.pow(this.b,r.ToGammaSpace),t.a=this.a,this},t}();e.Color4=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(10),i=n(6),s=function(){function t(t,e,n,r){this.normal=new o.Vector3(t,e,n),this.d=r}return t.FromArray=function(e){return new t(e[0],e[1],e[2],e[3])},t.FromPoints=function(e,n,o){var r=new t(0,0,0,0);return r.copyFromPoints(e,n,o),r},t.FromPositionAndNormal=function(e,n){var o=new t(0,0,0,0);return n.normalize(),o.normal=n,o.d=-(n.x*e.x+n.y*e.y+n.z*e.z),o},t.SignedDistanceToPlaneFromPositionAndNormal=function(t,e,n){var r=-(e.x*t.x+e.y*t.y+e.z*t.z);return o.Vector3.Dot(n,e)+r},t.prototype.asArray=function(){return[this.normal.x,this.normal.y,this.normal.z,this.d]},t.prototype.clone=function(){return new t(this.normal.x,this.normal.y,this.normal.z,this.d)},t.prototype.getClassName=function(){return"Plane"},t.prototype.getHashCode=function(){var t=this.normal.getHashCode();return t=397*t^(this.d||0)},t.prototype.normalize=function(){var t=Math.sqrt(this.normal.x*this.normal.x+this.normal.y*this.normal.y+this.normal.z*this.normal.z),e=0;return 0!==t&&(e=1/t),this.normal.x*=e,this.normal.y*=e,this.normal.z*=e,this.d*=e,this},t.prototype.transform=function(e){var n=i.MathTmp.Matrix[0];r.Matrix.TransposeToRef(e,n);var o=n.m,s=this.normal.x,a=this.normal.y,u=this.normal.z,p=this.d;return new t(s*o[0]+a*o[1]+u*o[2]+p*o[3],s*o[4]+a*o[5]+u*o[6]+p*o[7],s*o[8]+a*o[9]+u*o[10]+p*o[11],s*o[12]+a*o[13]+u*o[14]+p*o[15])},t.prototype.dotCoordinate=function(t){return this.normal.x*t.x+this.normal.y*t.y+this.normal.z*t.z+this.d},t.prototype.copyFromPoints=function(t,e,n){var o,r=e.x-t.x,i=e.y-t.y,s=e.z-t.z,a=n.x-t.x,u=n.y-t.y,p=n.z-t.z,h=i*p-s*u,c=s*a-r*p,l=r*u-i*a,f=Math.sqrt(h*h+c*c+l*l);return o=0!==f?1/f:0,this.normal.x=h*o,this.normal.y=c*o,this.normal.z=l*o,this.d=-(this.normal.x*t.x+this.normal.y*t.y+this.normal.z*t.z),this},t.prototype.isFrontFacingTo=function(t,e){return o.Vector3.Dot(this.normal,t)<=e},t.prototype.signedDistanceTo=function(t){return o.Vector3.Dot(t,this.normal)+this.d},t}();e.Plane=s},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var u=n(2),p={loop:!0,speed:1,weight:1},h=function(t){function e(e,n){void 0===n&&(n=p);var o=t.call(this)||this;return o.isAnimationClip=!0,o.loop=p.loop,o.weight=p.weight,o.playing=!1,o.speed=p.speed,o.setParams(i({clip:e},n)),o}return r(e,t),e.prototype.setParams=function(t){this.clip=t.clip||this.clip,this.loop=void 0!==t.loop?t.loop:this.loop,this.speed=t.speed||this.speed},e.prototype.play=function(){this.playing=!0},e.prototype.pause=function(){this.playing=!1},s([u.ObservableComponent.field,a("design:type",String)],e.prototype,"clip",void 0),s([u.ObservableComponent.field,a("design:type",Boolean)],e.prototype,"loop",void 0),s([u.ObservableComponent.field,a("design:type",Number)],e.prototype,"weight",void 0),s([u.ObservableComponent.field,a("design:type",Boolean)],e.prototype,"playing",void 0),s([u.ObservableComponent.field,a("design:type",Number)],e.prototype,"speed",void 0),e}(u.ObservableComponent);e.AnimationClip=h,e.default=h},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(4)),o(n(2)),o(n(11)),o(n(24));var r=n(14),i=n(33),s=new(n(4).Engine);e.engine=s;var a=new r.OnClickSystem;e.onClickSystem=a,s.addSystem(a),"undefined"!=typeof dcl&&s.addSystem(new i.DecentralandSynchronizationSystem(dcl),1/0),n(2).DisposableComponent.engine=s,o(n(15)),o(n(14)),o(n(13)),o(n(34)),o(n(5)),o(n(21)),o(n(35))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(this.entities=[],this.active=!1,this._requiresNames=[],!t)throw new Error("ComponentGroup: Could not load the requires list");if(!(t instanceof Array))throw new Error("ComponentGroup: requires list is not an Array");Object.defineProperty(this,"requires",{get:function(){return t.slice()}}),Object.defineProperty(this,"requiresNames",{get:function(){return this._requiresNames.slice()}});for(var n=function(e){var n=t[e],i=null;if(!n)throw new Error("ComponentGroup: the required component at location "+e+" is invalid");try{i=o.getComponentName(n)}catch(t){throw new Error("ComponentGroup: the required component at location "+e+" is not registered as a @Component. Remember to provide the class of the component, not the name")}if(r._requiresNames.some(function(t){return t===i}))throw new Error("ComponentGroup: the required component list has a repeated name "+i);r._requiresNames.push(i)},r=this,i=0;i<t.length;i++)n(i)}return t.prototype.hasEntity=function(t){return!!t.isAddedToEngine()&&-1!==this.entities.indexOf(t)},t.prototype.addEntity=function(t){if(!t.isAddedToEngine())throw new TypeError("ComponentGroup: Cannot add a entity that is not added to the engine");-1===this.entities.indexOf(t)&&this.entities.push(t)},t.prototype.removeEntity=function(t){var e=this.entities.indexOf(t);-1!==e&&this.entities.splice(e,1)},t.prototype.componentRemoved=function(t,e){-1!==this._requiresNames.indexOf(e)&&this.removeEntity(t)},t.prototype.meetsRequirements=function(t){for(var e=0;e<this._requiresNames.length;e++){if(!(this._requiresNames[e]in t.components))return!1}return!0},t}();e.ComponentGroup=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.executeTask=function(t){var e=t();return e.isComplete=!1,e.then(function(t){e.isComplete=!0,e.result=t,e.didFail=!1}).catch(function(t){e.isComplete=!0,e.error=t,e.didFail=!0}),e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=function(){function t(){}return t.X=new o.Vector3(1,0,0),t.Y=new o.Vector3(0,1,0),t.Z=new o.Vector3(0,0,1),t}();e.Axis=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.Interpolate=function(t,e,n,o,r){for(var i=1-3*o+3*e,s=3*o-6*e,a=3*e,u=t,p=0;p<5;p++){var h=u*u;u-=(i*(h*u)+s*h+a*u-t)*(1/(3*i*h+2*s*u+a)),u=Math.min(1,Math.max(0,u))}return 3*Math.pow(1-u,2)*u*n+3*(1-u)*Math.pow(u,2)*r+Math.pow(u,3)},t}();e.BezierCurve=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(19),i=n(3),s=function(){function t(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),this.r=t,this.g=e,this.b=n}return t.FromHexString=function(e){if("#"!==e.substring(0,1)||7!==e.length)return new t(0,0,0);var n=parseInt(e.substring(1,3),16),o=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);return t.FromInts(n,o,r)},t.FromArray=function(e,n){return void 0===n&&(n=0),new t(e[n],e[n+1],e[n+2])},t.FromInts=function(e,n,o){return new t(e/255,n/255,o/255)},t.Lerp=function(e,n,o){var r=new t(0,0,0);return t.LerpToRef(e,n,o,r),r},t.LerpToRef=function(t,e,n,o){o.r=t.r+(e.r-t.r)*n,o.g=t.g+(e.g-t.g)*n,o.b=t.b+(e.b-t.b)*n},t.Red=function(){return new t(1,0,0)},t.Green=function(){return new t(0,1,0)},t.Blue=function(){return new t(0,0,1)},t.Black=function(){return new t(0,0,0)},t.White=function(){return new t(1,1,1)},t.Purple=function(){return new t(.5,0,.5)},t.Magenta=function(){return new t(1,0,1)},t.Yellow=function(){return new t(1,1,0)},t.Gray=function(){return new t(.5,.5,.5)},t.Teal=function(){return new t(0,1,1)},t.Random=function(){return new t(Math.random(),Math.random(),Math.random())},t.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+"}"},t.prototype.getClassName=function(){return"Color3"},t.prototype.getHashCode=function(){var t=this.r||0;return t=397*(t=397*t^(this.g||0))^(this.b||0)},t.prototype.toArray=function(t,e){return void 0===e&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,this},t.prototype.toColor4=function(t){return void 0===t&&(t=1),new r.Color4(this.r,this.g,this.b,t)},t.prototype.asArray=function(){var t=new Array;return this.toArray(t,0),t},t.prototype.toLuminance=function(){return.3*this.r+.59*this.g+.11*this.b},t.prototype.multiply=function(e){return new t(this.r*e.r,this.g*e.g,this.b*e.b)},t.prototype.multiplyToRef=function(t,e){return e.r=this.r*t.r,e.g=this.g*t.g,e.b=this.b*t.b,this},t.prototype.equals=function(t){return t&&this.r===t.r&&this.g===t.g&&this.b===t.b},t.prototype.equalsFloats=function(t,e,n){return this.r===t&&this.g===e&&this.b===n},t.prototype.scale=function(e){return new t(this.r*e,this.g*e,this.b*e)},t.prototype.scaleToRef=function(t,e){return e.r=this.r*t,e.g=this.g*t,e.b=this.b*t,this},t.prototype.scaleAndAddToRef=function(t,e){return e.r+=this.r*t,e.g+=this.g*t,e.b+=this.b*t,this},t.prototype.clampToRef=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=1),n.r=i.Scalar.Clamp(this.r,t,e),n.g=i.Scalar.Clamp(this.g,t,e),n.b=i.Scalar.Clamp(this.b,t,e),this},t.prototype.add=function(e){return new t(this.r+e.r,this.g+e.g,this.b+e.b)},t.prototype.addToRef=function(t,e){return e.r=this.r+t.r,e.g=this.g+t.g,e.b=this.b+t.b,this},t.prototype.subtract=function(e){return new t(this.r-e.r,this.g-e.g,this.b-e.b)},t.prototype.subtractToRef=function(t,e){return e.r=this.r-t.r,e.g=this.g-t.g,e.b=this.b-t.b,this},t.prototype.clone=function(){return new t(this.r,this.g,this.b)},t.prototype.copyFrom=function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},t.prototype.copyFromFloats=function(t,e,n){return this.r=t,this.g=e,this.b=n,this},t.prototype.set=function(t,e,n){return this.copyFromFloats(t,e,n)},t.prototype.toHexString=function(){var t=255*this.r|0,e=255*this.g|0,n=255*this.b|0;return"#"+i.Scalar.ToHex(t)+i.Scalar.ToHex(e)+i.Scalar.ToHex(n)},t.prototype.toLinearSpace=function(){var e=new t;return this.toLinearSpaceToRef(e),e},t.prototype.toLinearSpaceToRef=function(t){return t.r=Math.pow(this.r,o.ToLinearSpace),t.g=Math.pow(this.g,o.ToLinearSpace),t.b=Math.pow(this.b,o.ToLinearSpace),this},t.prototype.toGammaSpace=function(){var e=new t;return this.toGammaSpaceToRef(e),e},t.prototype.toGammaSpaceToRef=function(t){return t.r=Math.pow(this.r,o.ToGammaSpace),t.g=Math.pow(this.g,o.ToGammaSpace),t.b=Math.pow(this.b,o.ToGammaSpace),this},t.prototype.toJSON=function(){return this.toHexString()},t}();e.Color3=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=function(){function t(t){this._length=0,this._points=t,this._length=this._computeLength(t)}return t.CreateQuadraticBezier=function(e,n,r,i){i=i>2?i:3;for(var s=new Array,a=function(t,e,n,o){return(1-t)*(1-t)*e+2*t*(1-t)*n+t*t*o},u=0;u<=i;u++)s.push(new o.Vector3(a(u/i,e.x,n.x,r.x),a(u/i,e.y,n.y,r.y),a(u/i,e.z,n.z,r.z)));return new t(s)},t.CreateCubicBezier=function(e,n,r,i,s){s=s>3?s:4;for(var a=new Array,u=function(t,e,n,o,r){return(1-t)*(1-t)*(1-t)*e+3*t*(1-t)*(1-t)*n+3*t*t*(1-t)*o+t*t*t*r},p=0;p<=s;p++)a.push(new o.Vector3(u(p/s,e.x,n.x,r.x,i.x),u(p/s,e.y,n.y,r.y,i.y),u(p/s,e.z,n.z,r.z,i.z)));return new t(a)},t.CreateHermiteSpline=function(e,n,r,i,s){for(var a=new Array,u=1/s,p=0;p<=s;p++)a.push(o.Vector3.Hermite(e,n,r,i,p*u));return new t(a)},t.CreateCatmullRomSpline=function(e,n,r){var i=new Array,s=1/n,a=0;if(r){for(var u=e.length,p=0;p<u;p++){a=0;for(var h=0;h<n;h++)i.push(o.Vector3.CatmullRom(e[p%u],e[(p+1)%u],e[(p+2)%u],e[(p+3)%u],a)),a+=s}i.push(i[0])}else{var c=new Array;c.push(e[0].clone()),Array.prototype.push.apply(c,e),c.push(e[e.length-1].clone());p=0;for(p=0;p<c.length-3;p++){a=0;for(h=0;h<n;h++)i.push(o.Vector3.CatmullRom(c[p],c[p+1],c[p+2],c[p+3],a)),a+=s}p--,i.push(o.Vector3.CatmullRom(c[p],c[p+1],c[p+2],c[p+3],a))}return new t(i)},t.prototype.getPoints=function(){return this._points},t.prototype.length=function(){return this._length},t.prototype.continue=function(e){for(var n=this._points[this._points.length-1],o=this._points.slice(),r=e.getPoints(),i=1;i<r.length;i++)o.push(r[i].subtract(r[0]).add(n));return new t(o)},t.prototype._computeLength=function(t){for(var e=0,n=1;n<t.length;n++)e+=t[n].subtract(t[n-1]).length();return e},t}();e.Curve3=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),r=function(){function t(){}return t.GetPlanes=function(e){for(var n=[],r=0;r<6;r++)n.push(new o.Plane(0,0,0,0));return t.GetPlanesToRef(e,n),n},t.GetNearPlaneToRef=function(t,e){var n=t.m;e.normal.x=n[3]+n[2],e.normal.y=n[7]+n[6],e.normal.z=n[11]+n[10],e.d=n[15]+n[14],e.normalize()},t.GetFarPlaneToRef=function(t,e){var n=t.m;e.normal.x=n[3]-n[2],e.normal.y=n[7]-n[6],e.normal.z=n[11]-n[10],e.d=n[15]-n[14],e.normalize()},t.GetLeftPlaneToRef=function(t,e){var n=t.m;e.normal.x=n[3]+n[0],e.normal.y=n[7]+n[4],e.normal.z=n[11]+n[8],e.d=n[15]+n[12],e.normalize()},t.GetRightPlaneToRef=function(t,e){var n=t.m;e.normal.x=n[3]-n[0],e.normal.y=n[7]-n[4],e.normal.z=n[11]-n[8],e.d=n[15]-n[12],e.normalize()},t.GetTopPlaneToRef=function(t,e){var n=t.m;e.normal.x=n[3]-n[1],e.normal.y=n[7]-n[5],e.normal.z=n[11]-n[9],e.d=n[15]-n[13],e.normalize()},t.GetBottomPlaneToRef=function(t,e){var n=t.m;e.normal.x=n[3]+n[1],e.normal.y=n[7]+n[5],e.normal.z=n[11]+n[9],e.d=n[15]+n[13],e.normalize()},t.GetPlanesToRef=function(e,n){t.GetNearPlaneToRef(e,n[0]),t.GetFarPlaneToRef(e,n[1]),t.GetLeftPlaneToRef(e,n[2]),t.GetRightPlaneToRef(e,n[3]),t.GetTopPlaneToRef(e,n[4]),t.GetBottomPlaneToRef(e,n[5])},t}();e.Frustum=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),r=n(18),i=n(0),s=function(){function t(t,e){this.closed=!1,this._points=new Array,this._length=0,this._points.push(new o.Vector2(t,e))}return t.StartingAt=function(e,n){return new t(e,n)},t.prototype.addLineTo=function(t,e){if(this.closed)return this;var n=new o.Vector2(t,e),r=this._points[this._points.length-1];return this._points.push(n),this._length+=n.subtract(r).length(),this},t.prototype.addArcTo=function(t,e,n,s,a){if(void 0===a&&(a=36),this.closed)return this;var u=this._points[this._points.length-1],p=new o.Vector2(t,e),h=new o.Vector2(n,s),c=new r.Arc2(u,p,h),l=c.angle.radians()/a;c.orientation===i.Orientation.CW&&(l*=-1);for(var f=c.startAngle.radians()+l,y=0;y<a;y++){var d=Math.cos(f)*c.radius+c.centerPoint.x,m=Math.sin(f)*c.radius+c.centerPoint.y;this.addLineTo(d,m),f+=l}return this},t.prototype.close=function(){return this.closed=!0,this},t.prototype.length=function(){var t=this._length;if(!this.closed){var e=this._points[this._points.length-1];t+=this._points[0].subtract(e).length()}return t},t.prototype.getPoints=function(){return this._points},t.prototype.getPointAtLengthPosition=function(t){if(t<0||t>1)return o.Vector2.Zero();for(var e=t*this.length(),n=0,r=0;r<this._points.length;r++){var i=(r+1)%this._points.length,s=this._points[r],a=this._points[i].subtract(s),u=a.length()+n;if(e>=n&&e<=u){var p=a.normalize(),h=e-n;return new o.Vector2(s.x+p.x*h,s.y+p.y*h)}n=u}return o.Vector2.Zero()},t}();e.Path2=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=n(3),s=function(){function t(t,e,n){void 0===e&&(e=null),this.path=t,this._curve=new Array,this._distances=new Array,this._tangents=new Array,this._normals=new Array,this._binormals=new Array;for(var o=0;o<t.length;o++)this._curve[o]=t[o].clone();this._raw=n||!1,this._compute(e)}return t.prototype.getCurve=function(){return this._curve},t.prototype.getTangents=function(){return this._tangents},t.prototype.getNormals=function(){return this._normals},t.prototype.getBinormals=function(){return this._binormals},t.prototype.getDistances=function(){return this._distances},t.prototype.update=function(t,e){void 0===e&&(e=null);for(var n=0;n<t.length;n++)this._curve[n].x=t[n].x,this._curve[n].y=t[n].y,this._curve[n].z=t[n].z;return this._compute(e),this},t.prototype._compute=function(t){var e=this._curve.length;this._tangents[0]=this._getFirstNonNullVector(0),this._raw||this._tangents[0].normalize(),this._tangents[e-1]=this._curve[e-1].subtract(this._curve[e-2]),this._raw||this._tangents[e-1].normalize();var n,r,i,s,a=this._tangents[0],u=this._normalVector(this._curve[0],a,t);this._normals[0]=u,this._raw||this._normals[0].normalize(),this._binormals[0]=o.Vector3.Cross(a,this._normals[0]),this._raw||this._binormals[0].normalize(),this._distances[0]=0;for(var p=1;p<e;p++)n=this._getLastNonNullVector(p),p<e-1&&(r=this._getFirstNonNullVector(p),this._tangents[p]=n.add(r),this._tangents[p].normalize()),this._distances[p]=this._distances[p-1]+n.length(),i=this._tangents[p],s=this._binormals[p-1],this._normals[p]=o.Vector3.Cross(s,i),this._raw||this._normals[p].normalize(),this._binormals[p]=o.Vector3.Cross(i,this._normals[p]),this._raw||this._binormals[p].normalize()},t.prototype._getFirstNonNullVector=function(t){for(var e=1,n=this._curve[t+e].subtract(this._curve[t]);0===n.length()&&t+e+1<this._curve.length;)e++,n=this._curve[t+e].subtract(this._curve[t]);return n},t.prototype._getLastNonNullVector=function(t){for(var e=1,n=this._curve[t].subtract(this._curve[t-e]);0===n.length()&&t>e+1;)e++,n=this._curve[t].subtract(this._curve[t-e]);return n},t.prototype._normalVector=function(t,e,n){var s,a=e.length();if(0===a&&(a=1),null==n){var u=void 0;u=i.Scalar.WithinEpsilon(Math.abs(e.y)/a,1,r.Epsilon)?i.Scalar.WithinEpsilon(Math.abs(e.x)/a,1,r.Epsilon)?i.Scalar.WithinEpsilon(Math.abs(e.z)/a,1,r.Epsilon)?o.Vector3.Zero():new o.Vector3(0,0,1):new o.Vector3(1,0,0):new o.Vector3(0,-1,0),s=o.Vector3.Cross(e,u)}else s=o.Vector3.Cross(e,n),o.Vector3.CrossToRef(s,e,s);return s.normalize(),s},t}();e.Path3D=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){this.width=t,this.height=e}return Object.defineProperty(t.prototype,"surface",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),t.Zero=function(){return new t(0,0)},t.Lerp=function(e,n,o){return new t(e.width+(n.width-e.width)*o,e.height+(n.height-e.height)*o)},t.prototype.toString=function(){return"{W: "+this.width+", H: "+this.height+"}"},t.prototype.getClassName=function(){return"Size"},t.prototype.getHashCode=function(){var t=this.width||0;return t=397*t^(this.height||0)},t.prototype.copyFrom=function(t){this.width=t.width,this.height=t.height},t.prototype.copyFromFloats=function(t,e){return this.width=t,this.height=e,this},t.prototype.set=function(t,e){return this.copyFromFloats(t,e)},t.prototype.multiplyByFloats=function(e,n){return new t(this.width*e,this.height*n)},t.prototype.clone=function(){return new t(this.width,this.height)},t.prototype.equals=function(t){return!!t&&(this.width===t.width&&this.height===t.height)},t.prototype.add=function(e){return new t(this.width+e.width,this.height+e.height)},t.prototype.subtract=function(e){return new t(this.width-e.width,this.height-e.height)},t}();e.Size=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(11),i=n(13),s=n(2),a=function(){function t(t){this.dcl=t,this.cachedComponents={}}return t.prototype.activate=function(t){var e=this;this.engine=t,t.eventManager.addListener(r.ComponentAdded,this,this.componentAdded),t.eventManager.addListener(r.ComponentRemoved,this,this.componentRemoved),t.eventManager.addListener(s.DisposableComponentCreated,this,this.disposableComponentCreated),t.eventManager.addListener(s.DisposableComponentRemoved,this,this.disposableComponentRemoved),t.eventManager.addListener(s.DisposableComponentUpdated,this,this.disposableComponentUpdated),t.eventManager.addListener(r.ParentChanged,this,this.parentChanged);var n=t.rootEntity.uuid;this.dcl.addEntity(n),this.dcl.onUpdate(function(n){t.update(n),e.presentEntities()}),this.dcl.onEvent(function(e){switch(e.type){case"uuidEvent":var n=new i.UUIDEvent;n.uuid=e.data.uuid,n.payload=e.data.payload,t.eventManager.fireEvent(n);break;default:t.eventManager.fireEvent(new o.EngineEvent(e))}})},t.prototype.onAddEntity=function(t){if(t.isAddedToEngine()){var e=t.uuid,n=t.getParent();this.dcl.addEntity(e),n&&this.dcl.setParent(e,n.uuid);var o=JSON.stringify(this.generateEntityUpdate(t));this.dcl.updateEntity(e,JSON.parse(o))}},t.prototype.onRemoveEntity=function(t){if(t.isAddedToEngine()){var e=t.uuid;delete this.cachedComponents[e],this.dcl.removeEntity(e)}},t.prototype.presentEntities=function(){for(var t in this.engine.entities){var e=this.engine.entities[t];if(e.isAddedToEngine()){var n=e.uuid,o=JSON.stringify(this.generateEntityUpdate(e));this.cachedComponents[n]!==o&&(this.cachedComponents[n]=o,this.dcl.updateEntity(n,JSON.parse(o)))}}},t.prototype.generateEntityUpdate=function(t){var e={};for(var n in t.components){var o=t.components[n];s.isDisposableComponent(o)?e[n]={$ref:s.getComponentId(o)}:e[n]=o}return e},t.prototype.componentAdded=function(t){t.entity.isAddedToEngine()&&this.dcl.componentAdded(t.entity.uuid,t.componentName,JSON.parse(JSON.stringify(t.entity.get(t.componentName))))},t.prototype.componentRemoved=function(t){t.entity.isAddedToEngine()&&this.dcl.componentRemoved(t.entity.uuid,t.componentName)},t.prototype.disposableComponentCreated=function(t){this.dcl.componentCreated(t.componentId,t.componentName)},t.prototype.disposableComponentRemoved=function(t){this.dcl.componentDisposed(t.componentId)},t.prototype.disposableComponentUpdated=function(t){this.dcl.componentUpdated(t.componentId,t.component)},t.prototype.parentChanged=function(t){this.dcl.setParent(t.entity.uuid,t.parent.uuid)},t}();e.DecentralandSynchronizationSystem=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=function(){function t(){var t=this;this.position=new o.Vector3,this.rotation=new o.Quaternion,this.lastEventPosition={x:0,y:0,z:0},this.lastEventRotation={x:0,y:0,z:0,w:1},"undefined"!=typeof dcl&&(dcl.subscribe("positionChanged"),dcl.subscribe("rotationChanged"),dcl.onEvent(function(e){"positionChanged"===e.type?t.positionChanged(e.data):"rotationChanged"===e.type&&t.rotationChanged(e.data)})),Object.defineProperty(this.position,"x",{get:function(){return t.lastEventPosition.x}}),Object.defineProperty(this.position,"y",{get:function(){return t.lastEventPosition.y}}),Object.defineProperty(this.position,"z",{get:function(){return t.lastEventPosition.z}}),Object.defineProperty(this.rotation,"x",{get:function(){return t.lastEventRotation.x}}),Object.defineProperty(this.rotation,"y",{get:function(){return t.lastEventRotation.y}}),Object.defineProperty(this.rotation,"z",{get:function(){return t.lastEventRotation.z}}),Object.defineProperty(this.rotation,"w",{get:function(){return t.lastEventRotation.w}})}return Object.defineProperty(t,"instance",{get:function(){return t._instance||(t._instance=new t),t._instance},enumerable:!0,configurable:!0}),t.prototype.positionChanged=function(t){this.lastEventPosition=t.position},t.prototype.rotationChanged=function(t){this.lastEventRotation=t.quaternion},t}();e.Camera=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(5);!function(t){t.PRIMARY="PRIMARY",t.SECONDARY="SECONDARY"}(o=e.Pointer||(e.Pointer={}));var i=function(){function t(){var t,e=this;this.subscriptions={BUTTON_A_DOWN:[],BUTTON_A_UP:[]},this.internalState=((t={})[o.PRIMARY]={BUTTON_A_DOWN:!1},t[o.SECONDARY]={BUTTON_A_DOWN:!1},t),"undefined"!=typeof dcl&&(dcl.subscribe("pointerUp"),dcl.subscribe("pointerDown"),dcl.onEvent(function(t){"pointerUp"===t.type?e.handlePointerUp(t.data):"pointerDown"===t.type&&e.handlePointerDown(t.data)}))}return Object.defineProperty(t,"instance",{get:function(){return t._instance||(t._instance=new t),t._instance},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.internalState},enumerable:!0,configurable:!0}),t.prototype.subscribe=function(t,e){var n=this;return this.subscriptions[t].push(e),function(){return n.unsubscribe(t,e)}},t.prototype.unsubscribe=function(t,e){var n=this.subscriptions[t].indexOf(e);n>-1&&this.subscriptions[t].splice(n,1)},t.prototype.getPointerById=function(t){return 1===t?o.PRIMARY:o.SECONDARY},t.prototype.handlePointerUp=function(t){var e=this.getPointerById(t.pointerId),n={length:t.length,from:new r.Vector3(t.from.x,t.from.y,t.from.z),direction:new r.Vector3(t.direction.x,t.direction.y,t.direction.z),pointerId:e};this.internalState[o.PRIMARY].BUTTON_A_DOWN=!1;for(var i=0;i<this.subscriptions.BUTTON_A_UP.length;i++)this.subscriptions.BUTTON_A_UP[i](n)},t.prototype.handlePointerDown=function(t){var e=this.getPointerById(t.pointerId),n={length:t.length,from:new r.Vector3(t.from.x,t.from.y,t.from.z),direction:new r.Vector3(t.direction.x,t.direction.y,t.direction.z),pointerId:e};this.internalState[o.PRIMARY].BUTTON_A_DOWN=!0;for(var i=0;i<this.subscriptions.BUTTON_A_DOWN.length;i++)this.subscriptions.BUTTON_A_DOWN[i](n)},t}();e.Input=i}])});;
/*! dcl-amd */;
var loader;(function(e){"use strict";var r=1;var d=2;var i=[];var f={baseUrl:""};var c={};function n(e){if(typeof e==="object"){for(var n in e){if(e.hasOwnProperty(n)){f[n]=e[n]}}}}e.config=n;function l(t,e,o){var n=arguments.length;if(n===1){o=t;e=["require","exports","module"];t=null}else if(n===2){if(f.toString.call(t)==="[object Array]"){o=e;e=t;t=null}else{o=e;e=["require","exports","module"]}}if(!t){i.push([e,o]);return}function r(){var e,n;if(c[t]){e=c[t].handlers;n=c[t].context}var r=c[t]=typeof o==="function"?o.apply(null,i.slice.call(arguments,0))||c[t]||{}:o;r.dclamd=d;r.context=n;for(var l=0,a=e?e.length:0;l<a;l++){e[l](r)}}u(e,r,t)}e.define=l;(function(e){e.amd={}})(l=e.define||(e.define={}));function u(r,l,a){var t=[];var o=0;var i=false;if(typeof r==="string"){if(c[r]&&c[r].dclamd===d){return c[r]}throw new Error(r+" has not been defined. Please include it as a dependency in "+a+"'s define()")}var f=r.length;var e=function(n){switch(r[n]){case"require":var e=function(e,n){return u(e,n,a)};e.toUrl=function(e){return p(e,a)};t[n]=e;o++;break;case"exports":t[n]=c[a]||(c[a]={});o++;break;case"module":t[n]={id:a,uri:p(a)};o++;break;case c[a]?c[a].context:"":t[n]=c[c[a].context];o++;break;default:s(r[n],function(e){t[n]=e;o++;if(o===f&&l){i=true;l.apply(null,t)}if(c[r[n]]){c[r[n]].dclamd=d}},a)}};for(var n=0;n<f;n++){e(n)}if(!i&&o===f&&l){l.apply(null,t)}}e.require=u;function t(e,n){return function(){return dcl.callRpc(e,n.name,i.slice.call(arguments,0))}}function s(e,a,n){e=n?p(e,n):e;if(c[e]){if(c[e].dclamd===r){a&&c[e].handlers.push(a)}else{a&&a(c[e])}return}else{c[e]={name:e,dclamd:r,handlers:[a],context:n}}if(e.indexOf("@")===0){if(typeof dcl!=="undefined"){dcl.loadModule(e).then(function(e){var n={};for(var r in e.methods){var l=e.methods[r];n[l.name]=t(e.rpcHandle,l)}a(n)})}}}if(typeof dcl!=="undefined"){dcl.onStart(function(){var e=[];for(var n in c){if(c[n]&&c[n].dclamd===r){e.push(c[n])}}if(e.length){throw new Error("These modules didn't load: "+e.map(function(e){return e.name}).join(", "))}})}function p(e,n){var r=false;switch(e){case"require":case"exports":case"module":return e}var l=(n||f.baseUrl).split("/");l.pop();var a=e.split("/");var t=a.length;while(--t){switch(e[0]){case"..":l.pop();case".":case"":a.shift();r=true}}return(l.length&&r?l.join("/")+"/":"")+a.join("/")}u.toUrl=p})(loader||(loader={}));global=typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof this!=="undefined"?this:null;if(!global)throw new Error("unknown global context");global.define=loader.define;global.dclamd=loader;;
/*! Compiled code */;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
// OLD VERSION
// import { EventSubscriber } from "decentraland-api"
define("ts/EventManager", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export namespace EventManager {
    //   let eventSubscriber: EventSubscriber
    //   export function init(_eventSubscriber: EventSubscriber) {
    //     eventSubscriber = _eventSubscriber
    //   }
    //   export function emit(eventType: string, ...params: any[]) {
    //     eventSubscriber.emit(eventType, ...params)
    //   }
    // }
    // DANI VERSION
    // export namespace EventManager {
    //   const subscriptions: Record<string, Array<() => void> > = {}
    //   export function on(evt: string, callback: () => any) {
    //     if (subscriptions[evt].length === 0) subscriptions[evt] = []
    //     subscriptions[evt].push(callback)
    //   }
    //   export function emit(evt: string) {
    //     subscriptions[evt].forEach(c => c())
    //   }
    // }
    // MY VERSION
    var EventManager;
    (function (EventManager) {
        var subscriptions = {};
        function on(evt, callback) {
            if (!subscriptions[evt]) {
                subscriptions[evt] = [];
            }
            subscriptions[evt].push(callback);
        }
        EventManager.on = on;
        function emit(evt, params) {
            if (subscriptions[evt]) {
                subscriptions[evt].forEach(function (callback) { return callback(params); });
            }
        }
        EventManager.emit = emit;
    })(EventManager = exports.EventManager || (exports.EventManager = {}));
});
define("src/board", ["require", "exports", "ts/EventManager"], function (require, exports, EventManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoardSize = 4;
    var fourProbability = 0.1;
    var deltaX = [-1, 0, 1, 0];
    var deltaY = [0, -1, 0, 1];
    var rotateLeft = function (matrix) {
        var rows = matrix.length;
        var columns = matrix[0].length;
        var res = [];
        for (var row = 0; row < rows; ++row) {
            res.push([]);
            for (var column = 0; column < columns; ++column) {
                res[row][column] = matrix[column][columns - row - 1];
            }
        }
        return res;
    };
    exports.mergeTiles = function (old, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await sleep(250)
                EventManager_1.EventManager.emit("merge", { oldId: old.id, targetId: target.id });
                old.mergedInto = target;
                return [2 /*return*/];
            });
        });
    };
    // export function sleep(ms: number = 0) {
    //   return new Promise(r => setTimeout(r, ms));
    // }
    var TileId = 0;
    var Tile = /** @class */ (function () {
        function Tile(value, row, column) {
            this.value = value || 0;
            this.row = row || -1;
            this.column = column || -1;
            this.oldRow = -1;
            this.oldColumn = -1;
            this.markForDeletion = false;
            //this.id = Math.floor( Math.random() * 300)
            this.id = TileId++;
            this.justAdded = true;
            if (this.value != 0 && this.row > -1 && this.column > -1) {
                EventManager_1.EventManager.emit("newTile", { id: this.id, val: this.value, x: this.row, y: this.column });
            }
        }
        Tile.prototype.moveTo = function (row, column) {
            this.oldRow = this.row;
            this.oldColumn = this.column;
            this.row = row;
            this.column = column;
        };
        Tile.prototype.isNew = function () {
            return this.oldRow == -1 && !this.mergedInto;
        };
        Tile.prototype.hasMoved = function () {
            return (this.fromRow() != -1 && (this.fromRow() != this.toRow() || this.fromColumn() != this.toColumn())) ||
                this.mergedInto;
        };
        Tile.prototype.fromRow = function () {
            return this.mergedInto ? this.row : this.oldRow;
        };
        Tile.prototype.fromColumn = function () {
            return this.mergedInto ? this.column : this.oldColumn;
        };
        Tile.prototype.toRow = function () {
            return this.mergedInto ? this.mergedInto.row : this.row;
        };
        Tile.prototype.toColumn = function () {
            return this.mergedInto ? this.mergedInto.column : this.column;
        };
        Tile = __decorate([
            Component('tile'),
            __metadata("design:paramtypes", [Object, Object, Object])
        ], Tile);
        return Tile;
    }());
    exports.Tile = Tile;
    var Board = /** @class */ (function () {
        function Board() {
            this.tiles = [];
            this.cells = [];
            this.size = BoardSize;
            for (var i = 0; i < this.size; ++i) {
                this.cells[i] = [this.addTile(0, i, 1), this.addTile(0, i, 2), this.addTile(0, i, 3), this.addTile(0, i, 4)];
            }
            this.addRandomTile();
            this.setPositions();
            this.won = false;
            this.fourProbability = fourProbability;
            this.deltaX = deltaX;
            this.deltaY = deltaY;
        }
        Board.prototype.addTile = function (value, row, column) {
            var res = new Tile(value, row, column);
            this.tiles.push(res);
            return res;
        };
        Board.prototype.moveLeft = function () {
            var hasChanged = false;
            for (var row = 0; row < this.size; ++row) {
                var currentRow = this.cells[row].filter(function (tile) { return tile.value != 0; });
                var resultRow = [];
                for (var target = 0; target < this.size; ++target) {
                    var targetTile = currentRow.length ? currentRow.shift() : this.addTile(0, -1, -1);
                    if (currentRow.length > 0 && currentRow[0].value == targetTile.value) {
                        var tile1 = targetTile;
                        targetTile = this.addTile(targetTile.value, targetTile.row, targetTile.column);
                        tile1.mergedInto = targetTile;
                        var tile2 = currentRow.shift();
                        tile2.row = tile1.row;
                        tile2.column = tile1.column;
                        exports.mergeTiles(tile2, targetTile);
                        targetTile.value += tile2.value;
                    }
                    resultRow[target] = targetTile;
                    if (targetTile.value == 2048) {
                        this.victory();
                    }
                    hasChanged = (targetTile.value != this.cells[row][target].value ? true : hasChanged);
                }
                this.cells[row] = resultRow;
            }
            this.hasLost();
            return hasChanged;
        };
        Board.prototype.sendTileData = function () {
            this.tiles.forEach(function (tile) {
                if (tile.value != 0) {
                    log("tile ID: " + tile.id + " X: " + tile.row + " Y: " + tile.column);
                    if (tile.row != tile.oldRow || tile.column != tile.oldColumn) {
                        EventManager_1.EventManager.emit("moveTile", { id: tile.id, oldX: tile.oldRow, oldY: tile.oldColumn, newX: tile.row, newY: tile.column });
                    }
                }
            });
        };
        Board.prototype.setPositions = function () {
            this.sendTileData();
            this.cells.forEach(function (row, rowIndex) {
                row.forEach(function (tile, columnIndex) {
                    tile.oldRow = tile.row;
                    tile.oldColumn = tile.column;
                    tile.row = rowIndex;
                    tile.column = columnIndex;
                    tile.markForDeletion = false;
                });
            });
        };
        Board.prototype.addRandomTile = function () {
            var emptyCells = [];
            for (var r = 0; r < this.size; ++r) {
                for (var c = 0; c < this.size; ++c) {
                    if (this.cells[r][c].value == 0) {
                        emptyCells.push({ r: r, c: c });
                    }
                }
            }
            var index = ~~(Math.random() * emptyCells.length);
            var cell = emptyCells[index];
            var newValue = Math.random() < this.fourProbability ? 4 : 2;
            //console.log("new cell added, " + cell.r + " & " + cell.c)
            this.cells[cell.r][cell.c] = this.addTile(newValue, cell.r, cell.c);
        };
        Board.prototype.move = function (direction) {
            // 0 -> left, 1 -> up, 2 -> right, 3 -> down
            this.clearOldTiles();
            for (var i = 0; i < direction; ++i) {
                this.cells = rotateLeft(this.cells);
            }
            var hasChanged = this.moveLeft();
            for (var i = direction; i < 4; ++i) {
                this.cells = rotateLeft(this.cells);
            }
            if (hasChanged) {
                this.addRandomTile();
            }
            this.setPositions();
            return this;
        };
        Board.prototype.clearOldTiles = function () {
            this.tiles = this.tiles.filter(function (tile) { return tile.markForDeletion == false; });
            this.tiles.forEach(function (tile) { tile.markForDeletion = true; });
        };
        Board.prototype.victory = function () {
            EventManager_1.EventManager.emit("win");
            this.won = true;
            return this.won;
        };
        Board.prototype.hasLost = function () {
            var canMove = false;
            for (var row = 0; row < this.size; ++row) {
                for (var column = 0; column < this.size; ++column) {
                    canMove = (this.cells[row][column].value == 0 ? true : canMove);
                    for (var dir = 0; dir < 4; ++dir) {
                        var newRow = row + this.deltaX[dir];
                        var newColumn = column + this.deltaY[dir];
                        if (newRow < 0 || newRow >= this.size || newColumn < 0 || newColumn >= this.size) {
                            continue;
                        }
                        canMove = (this.cells[row][column].value == this.cells[newRow][newColumn].value ? true : canMove);
                    }
                }
            }
            if (canMove == false) {
                EventManager_1.EventManager.emit("loose");
            }
            return !canMove;
        };
        return Board;
    }());
    exports.Board = Board;
});
define("src/game", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var input = Input.instance;
    var camera = Camera.instance;
    var values = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
    var Directions;
    (function (Directions) {
        Directions["LEFT"] = "left";
        Directions["UP"] = "up";
        Directions["RIGHT"] = "right";
        Directions["DOWN"] = "down";
    })(Directions = exports.Directions || (exports.Directions = {}));
    var TileId = 0;
    // CUSTOM COMPONENTS
    var OpenLerp = /** @class */ (function () {
        function OpenLerp() {
            this.closedPos = new Vector3(5, 0, 5);
            this.openPos = new Vector3(5, 5.5, 5);
            this.closedScale = 0.05;
            this.openScale = 0.45;
            this.fraction = 0;
            this.open = false;
        }
        OpenLerp = __decorate([
            Component('openLerp')
        ], OpenLerp);
        return OpenLerp;
    }());
    exports.OpenLerp = OpenLerp;
    var SwipeDetection = /** @class */ (function () {
        function SwipeDetection() {
            this.buttonPressed = false;
            this.minDistance = 5;
        }
        SwipeDetection = __decorate([
            Component('swipeDetection')
        ], SwipeDetection);
        return SwipeDetection;
    }());
    exports.SwipeDetection = SwipeDetection;
    var TileData = /** @class */ (function () {
        function TileData(id, val, x, y) {
            this.id = id;
            this.val = val;
            this.pos = new Vector2(x, y);
            this.nextPos = new Vector2(x, y);
            this.oldPos = new Vector2(x, y);
            this.lerp = 1;
            this.sizeLerp = 0;
            this.willDie = false;
            this.willUpgrade = false;
        }
        TileData.prototype.reset = function (id, val, x, y) {
            this.id = id;
            this.val = val;
            this.pos = new Vector2(x, y);
            this.nextPos = new Vector2(x, y);
            this.oldPos = new Vector2(x, y);
            this.lerp = 1;
            this.sizeLerp = 0;
            this.willDie = false;
            this.willUpgrade = false;
        };
        TileData = __decorate([
            Component('tileData'),
            __metadata("design:paramtypes", [Number, Number, Number, Number])
        ], TileData);
        return TileData;
    }());
    exports.TileData = TileData;
    var BoardData = /** @class */ (function () {
        function BoardData() {
            this.size = 4;
            this.fourProbability = 0.1;
            this.deltaX = [-1, 0, 1, 0];
            this.deltaY = [0, -1, 0, 1];
        }
        BoardData = __decorate([
            Component('boardData')
        ], BoardData);
        return BoardData;
    }());
    exports.BoardData = BoardData;
    ///////////////////////////
    // Entity groups
    var gems = engine.getComponentGroup(Transform, TileData);
    ///////////////////////////
    // Systems
    // Open Chest
    var OpenBoard = /** @class */ (function () {
        function OpenBoard() {
        }
        OpenBoard.prototype.update = function (dt) {
            var transform = boardWrapper.get(Transform);
            var state = boardWrapper.get(OpenLerp);
            if (state.open == true && state.fraction < 1) {
                transform.position = Vector3.Lerp(state.closedPos, state.openPos, state.fraction);
                transform.scale.setAll(Scalar.Lerp(state.closedScale, state.openScale, state.fraction));
                state.fraction += 1 / 30;
            }
            else if (state.open == false && state.fraction > 0) {
                transform.position = Vector3.Lerp(state.closedPos, state.openPos, state.fraction);
                transform.scale.setAll(Scalar.Lerp(state.closedScale, state.openScale, state.fraction));
                state.fraction -= 1 / 30;
            }
        };
        return OpenBoard;
    }());
    exports.OpenBoard = OpenBoard;
    engine.addSystem(new OpenBoard());
    // Move tiles
    var MoveTiles = /** @class */ (function () {
        function MoveTiles() {
        }
        MoveTiles.prototype.update = function (dt) {
            var e_1, _a, e_2, _b;
            try {
                for (var _c = __values(gems.entities), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var gem = _d.value;
                    var data = gem.get(TileData);
                    var transform = gem.get(Transform);
                    if (data.lerp < 1) {
                        data.lerp += dt * 2;
                        if (data.lerp > 1) {
                            data.lerp = 1;
                        }
                        data.pos = Vector2.Lerp(data.oldPos, data.nextPos, data.lerp);
                        transform.position = gridToScene(data.pos.x, data.pos.y);
                    }
                    else {
                        data.oldPos = data.pos;
                        if (data.willDie) {
                            engine.removeEntity(gem);
                            try {
                                for (var _e = __values(gems.entities), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var targetGem = _f.value;
                                    var targetData = targetGem.get(TileData);
                                    if (targetData.pos.x == data.pos.x &&
                                        targetData.pos.y == data.pos.y &&
                                        targetData.willUpgrade) {
                                        var targetModelVal = targetData.val;
                                        var shapeIndex = values.indexOf(targetModelVal);
                                        targetGem.set(gemModels[shapeIndex]);
                                        targetData.willUpgrade = false;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        return MoveTiles;
    }());
    exports.MoveTiles = MoveTiles;
    engine.addSystem(new MoveTiles());
    // Grow tiles
    var GrowTiles = /** @class */ (function () {
        function GrowTiles() {
        }
        GrowTiles.prototype.update = function (dt) {
            var e_3, _a;
            try {
                for (var _b = __values(gems.entities), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var gem = _c.value;
                    var data = gem.get(TileData);
                    var transform = gem.get(Transform);
                    if (data.sizeLerp < 1) {
                        data.sizeLerp += dt;
                        transform.scale.setAll(Scalar.Lerp(0.05, 0.5, data.sizeLerp));
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        return GrowTiles;
    }());
    exports.GrowTiles = GrowTiles;
    engine.addSystem(new GrowTiles());
    //////////////////////////////
    // OTHER FUNCTIONS
    function openChest() {
        var state = boardWrapper.get(OpenLerp);
        state.open = !state.open;
        switch (state.open) {
            case true:
                //board = new Board()
                chestOpen.play();
                chestLightOpen.play();
                // play sounds
                //spawner.spawnGem("2", 4, 4)
                break;
            case false:
                chestClose.play();
                chestLightClose.play();
                // end sounds
                break;
        }
    }
    // Create gems using object pool
    var spawner = {
        MAX_POOL_SIZE: 20,
        pool: [],
        getEntityFromPool: function () {
            for (var i = 0; i < spawner.pool.length; i++) {
                if (!spawner.pool[i].alive) {
                    return spawner.pool[i];
                }
            }
            if (spawner.pool.length < spawner.MAX_POOL_SIZE) {
                var instance = new Entity();
                instance.setParent(map);
                spawner.pool.push(instance);
                return instance;
            }
            return null;
        },
        spawnGem: function (id, val, x, y) {
            var ent = spawner.getEntityFromPool();
            if (!ent)
                return;
            var shapeIndex = values.indexOf(val);
            ent.set(gemModels[shapeIndex]);
            if (!ent.getOrNull(Transform)) {
                var t = new Transform();
                ent.set(t);
                t.scale.setAll(0.5);
                t.position = gridToScene(x, y);
            }
            else {
                var t = ent.get(Transform);
                t.position = gridToScene(x, y);
            }
            if (!ent.getOrNull(TileData)) {
                var p = new TileData(id, val, x, y);
                ent.set(p);
            }
            else {
                var p = ent.get(TileData);
                p.reset(id, val, x, y);
            }
            //board.get(BoardData).tiles.push(ent)
            engine.addEntity(ent);
        }
    };
    function gridToScene(x, y) {
        var convertedPos = new Vector3(x + 1 - 2.5, -y + 1 + 0.5, 0);
        return convertedPos;
    }
    function addRandomGem() {
        var emptyCells = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
        ];
        var boardData = board.get(BoardData);
        for (var tile in gems.entities) {
            var tileData = gems.entities[tile].get(TileData);
            var tilePos = tileData.nextPos.x + tileData.nextPos.y * 4;
            var index_1 = emptyCells.indexOf(tilePos);
            emptyCells.splice(index_1, 1);
        }
        if (emptyCells.length == 0) {
            loose();
        }
        var index = ~~(Math.random() * emptyCells.length);
        var cell = emptyCells[index];
        var newValue = Math.random() < boardData.fourProbability ? 4 : 2;
        var cellY = Math.floor(cell / 4);
        var cellX = cell % 4;
        var id = TileId++;
        log('new cell added, pos: ' + cell + '  ' + cellX + ' & ' + cellY);
        spawner.spawnGem(id, newValue, cellX, cellY);
    }
    function shiftBlocks(direction) {
        var boardData = board.get(BoardData);
        var hasChanged = false;
        for (var row = 0; row < boardData.size; ++row) {
            // Store what's in the row (or column)
            var currentRow = [null, null, null, null];
            for (var gem in gems.entities) {
                var tilePos = gems.entities[gem].get(TileData).nextPos;
                var pos = void 0;
                switch (direction) {
                    case Directions.UP:
                        if (tilePos.x == row) {
                            pos = (tilePos.y * -1) + 3;
                        }
                        break;
                    case Directions.RIGHT:
                        if (tilePos.y == row) {
                            pos = (tilePos.x * -1) + 3;
                        }
                        break;
                    case Directions.DOWN:
                        if (tilePos.x == row) {
                            pos = tilePos.y;
                        }
                        break;
                    case Directions.LEFT:
                        if (tilePos.y == row) {
                            pos = tilePos.x;
                        }
                        break;
                }
                currentRow[pos] = gems.entities[gem];
            }
            // go over each tile in row (or column)
            for (var target = 0; target < boardData.size; ++target) {
                var alreadyMerged = false;
                var blocked = false;
                for (var tile = target + 1; tile < currentRow.length; ++tile) {
                    if (currentRow[tile]) {
                        var gemData = currentRow[tile].get(TileData);
                        // if target tile is empty, shift gems
                        if (currentRow[target] == null || alreadyMerged == true) {
                            moveGem(gemData, direction);
                            hasChanged = true;
                        }
                        else {
                            // if target tile has a gem, check if it can be merged
                            var targetData = currentRow[target].get(TileData);
                            if (gemData.val == targetData.val &&
                                targetData.willUpgrade == false &&
                                targetData.willDie == false &&
                                blocked == false) {
                                moveGem(gemData, direction);
                                mergeGems(gemData, targetData);
                                alreadyMerged = true;
                                hasChanged = true;
                            }
                        }
                        blocked = true;
                    }
                }
            }
        }
        if (hasChanged) {
            addRandomGem();
        }
        // check if lost
    }
    function moveGem(gemData, direction) {
        switch (direction) {
            case Directions.UP:
                gemData.nextPos.y++;
                break;
            case Directions.RIGHT:
                gemData.nextPos.x++;
                break;
            case Directions.DOWN:
                gemData.nextPos.y--;
                break;
            case Directions.LEFT:
                gemData.nextPos.x--;
                break;
        }
        gemData.lerp = 0;
    }
    function mergeGems(gemData, targetData) {
        gemData.willDie = true;
        targetData.willUpgrade = true;
        targetData.val *= 2;
        // Check if won
        if (targetData.val == 2048) {
            win();
        }
    }
    ///////////////////////////
    // INITIAL POSITIONS OF STUFF
    // Board object
    //let board = new Board()
    var board = new Entity();
    board.set(new BoardData());
    // Island
    var island = new Entity();
    island.set(new GLTFShape('models/Island.gltf'));
    island.set(new Transform());
    island.get(Transform).position.set(5, 0, 5);
    island.get(Transform).rotation.setEuler(0, 90, 0);
    engine.addEntity(island);
    // Banner
    var bannerImage = new BasicMaterial();
    bannerImage.texture = 'textures/Logo2048.png';
    var banner = new Entity();
    banner.set(bannerImage);
    banner.set(new PlaneShape());
    banner.set(new Transform());
    banner.get(Transform).position.set(5, 9, 5);
    banner.get(Transform).scale.setAll(6);
    engine.addEntity(banner);
    // Chest
    var chest = new Entity();
    chest.set(new Transform());
    chest.get(Transform).position.set(5, 0.2, 5);
    chest.get(Transform).rotation.setEuler(0, 90, 0);
    chest.get(Transform).scale.setAll(0.8);
    chest.set(new GLTFShape('models/Chest.gltf'));
    var chestOpen = new AnimationClip('Open', { loop: false });
    var chestClose = new AnimationClip('Close', { loop: false });
    chest.get(GLTFShape).addClip(chestOpen);
    chest.get(GLTFShape).addClip(chestClose);
    chest.set(new OnClick(function (e) {
        openChest();
        addRandomGem();
    }));
    engine.addEntity(chest);
    // Chest Light
    var chestLight = new Entity();
    chestLight.set(new Transform());
    chestLight.setParent(chest);
    chestLight.set(new GLTFShape('models/Light.gltf'));
    var chestLightOpen = new AnimationClip('Light_Open', { loop: false });
    var chestLightClose = new AnimationClip('Light_Close', { loop: false });
    chestLight.get(GLTFShape).addClip(chestLightOpen);
    chestLight.get(GLTFShape).addClip(chestLightClose);
    engine.addEntity(chestLight);
    // Board
    var boardWrapper = new Entity();
    boardWrapper.set(new Transform());
    boardWrapper.get(Transform).position.set(5, 0, 5);
    boardWrapper.get(Transform).scale.setAll(0.05);
    boardWrapper.set(new OpenLerp());
    //board.set(new OpenLerp(new Vector3(5, 5.5, 5), new Vector3(5, 0, 5), 0))
    // board.set(new SizeLerp(0.05, 0.45, 0))
    engine.addEntity(boardWrapper);
    // Map
    var map = new Entity();
    map.setParent(boardWrapper);
    map.set(new Transform());
    map.get(Transform).position.set(0, 1, 0);
    map.get(Transform).scale.setAll(2);
    map.set(new GLTFShape('models/Map.gltf'));
    engine.addEntity(map);
    // Swipe detector singleton
    var swipeChecker = new Entity();
    swipeChecker.set(new SwipeDetection());
    // 3D models for gems
    var gemModels = [];
    var gemVal = 2;
    for (var i = 0; i < values.length; i++) {
        var gemMod = new GLTFShape('models/' + gemVal + '.gltf');
        gemModels.push(gemMod);
        gemVal *= 2;
    }
    ///////////////////////////////
    // Event based functions
    // Swipe detection
    input.subscribe('BUTTON_A_DOWN', function (e) {
        var swipes = swipeChecker.get(SwipeDetection);
        swipes.buttonPressed = true;
        swipes.posOnDown = camera.rotation.eulerAngles;
    });
    // button up event
    input.subscribe('BUTTON_A_UP', function (e) {
        var swipes = swipeChecker.get(SwipeDetection);
        swipes.buttonPressed = false;
        swipes.posOnUp = camera.rotation.eulerAngles;
        var deltaX = swipes.posOnDown.x - swipes.posOnUp.x;
        var deltaY = swipes.posOnDown.y - swipes.posOnUp.y;
        var direction;
        if (Math.abs(deltaY) < 3 && deltaX < -5) {
            direction = Directions.UP;
        }
        else if (deltaY > 5 && Math.abs(deltaX) < 3) {
            direction = Directions.RIGHT;
        }
        else if (Math.abs(deltaY) < 3 && deltaX > 5) {
            direction = Directions.DOWN;
        }
        else if (deltaY < -5 && Math.abs(deltaX) < 3) {
            direction = Directions.LEFT;
        }
        log('direction ' + direction);
        shiftBlocks(direction);
    });
    function loose() {
        log('YOU LOST');
    }
    function win() {
        log('YOU WON!');
    }
});
// Loose when no movement
// Sounds
// Bug with opening chest
