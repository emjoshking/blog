import{P as I,m as B,e as T}from"./mount-component-BXNUUW0C.js";import{j as z,d as M,L as C,b as N,a5 as L,v as a,T as b,Z as j,m as k,n as v,aC as U,k as w,I as V,aP as q,w as A,l as O,ae as D,A as H,r as Z,aB as _}from"./index-D0T7Z4Ha.js";let d=0;function E(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[F,i]=z("toast"),G=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],J={icon:String,show:Boolean,type:k("text"),overlay:Boolean,message:v,iconSize:v,duration:U(2e3),position:k("middle"),teleport:[String,Object],wordBreak:String,className:w,iconPrefix:String,transition:k("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:w,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:v};var K=M({name:F,props:J,emits:["update:show"],setup(e,{emit:l,slots:o}){let u,s=!1;const c=()=>{const n=e.show&&e.forbidClick;s!==n&&(s=n,E(s))},r=n=>l("update:show",n),g=()=>{e.closeOnClick&&r(!1)},f=()=>clearTimeout(u),m=()=>{const{icon:n,type:t,iconSize:p,iconPrefix:P,loadingType:x}=e;if(n||t==="success"||t==="fail")return a(V,{name:n||t,size:p,class:i("icon"),classPrefix:P},null);if(t==="loading")return a(q,{class:i("loading"),size:p,type:x},null)},S=()=>{const{type:n,message:t}=e;if(o.message)return a("div",{class:i("text")},[o.message()]);if(A(t)&&t!=="")return n==="html"?a("div",{key:0,class:i("text"),innerHTML:String(t)},null):a("div",{class:i("text")},[t])};return C(()=>[e.show,e.forbidClick],c),C(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(u=setTimeout(()=>{r(!1)},e.duration))}),N(c),L(c),()=>a(I,b({class:[i([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:g,onClosed:f,"onUpdate:show":r},j(e,G)),{default:()=>[m(),S()]})}});const Q={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let y=[],R=!1,h=O({},Q);const W=new Map;function X(e){return H(e)?e:{message:e}}function Y(){const{instance:e,unmount:l}=B({setup(){const o=Z(""),{open:u,state:s,close:c,toggle:r}=T(),g=()=>{},f=()=>a(K,b(s,{onClosed:g,"onUpdate:show":r}),null);return C(o,m=>{s.message=m}),_().render=f,{open:u,close:c,message:o}}});return e}function $(){if(!y.length||R){const e=Y();y.push(e)}return y[y.length-1]}function oe(e={}){if(!D)return{};const l=$(),o=X(e);return l.open(O({},h,W.get(o.type||h.type),o)),l}export{oe as a,K as s};
