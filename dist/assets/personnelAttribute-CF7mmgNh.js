import{aB as b,d as x,r as u,b as k,o as c,c as p,a as e,a2 as n,F as m,e as h,aI as y,i as g,a1 as v,a8 as q,f as I,p as w,g as B,_ as E}from"./index-CwHhtm0G.js";import{P as C}from"./knapsackItem-DdEZMhqe.js";let S=0;function _e(){const l=b(),{name:s="unknown"}=(l==null?void 0:l.type)||{};return`${s}-${++S}`}const o=l=>(w("data-v-096f517f"),l=l(),B(),l),N={class:"personnel-box"},O=o(()=>e("p",{class:"personnel-title"},"人物属性",-1)),$={class:"personnel-item"},j={class:"left-box"},F=o(()=>e("span",{class:"personnel-name"},"姓名:",-1)),P={class:"flex-box"},V=o(()=>e("span",{class:"personnel-name"},"性别:",-1)),z={class:"personnel-item"},A={class:"left-box"},D=o(()=>e("span",{class:"personnel-name"},"等级:",-1)),J={class:"blood-box"},L=o(()=>e("span",{class:"personnel-name"},"血量:",-1)),M={class:"personnel-item"},G={class:"attribute-box left-box"},H=o(()=>e("span",{class:"personnel-name"},"攻击力:",-1)),K={class:"attribute-box"},Q=o(()=>e("span",{class:"personnel-name"},"防御:",-1)),R={class:"personnel-item"},T={class:"attribute-box left-box"},U=o(()=>e("span",{class:"personnel-name"},"经验:",-1)),W={class:"attribute-box"},X=o(()=>e("span",{class:"personnel-name"},"敏捷:",-1)),Y={class:"title-item"},Z=o(()=>e("span",{class:"personnel-name"},"称号:",-1)),ee={class:"skill-item"},se=o(()=>e("span",{class:"personnel-name"},"技能:",-1)),ne={class:"skill-name"},te={key:0,class:"equipment-wrap"},oe=o(()=>e("p",{class:"equipment-title"},"装备",-1)),ae={class:"equipment-name"},le={class:"item-introduction"},ce={key:1},pe=x({__name:"personnelAttribute",props:{personnel:{type:Object,default:()=>{}},isEquipment:{type:Boolean,default:()=>!1}},setup(l){const s=l,_=u([{column:"武器",type:"weapon"},{column:"头盔",type:"helment"},{column:"护甲",type:"armor"},{column:"手套",type:"gloves"},{column:"鞋子",type:"shoes"},{column:"项链",type:"necklace"}]),d=u(0);k(()=>{s.personnel.maxExp&&(d.value=s.personnel.maxExp.map(t=>{if(t.key===s.personnel.levle)return t.value})[s.personnel.levle-1]);const r=JSON.parse(localStorage.getItem("game_equipmentInfo"));!r||r.length<1||_.value.map((t,a)=>{r.forEach(i=>{t.type===i.type&&(_.value[a]=Object.assign(i,{column:f(t.type)}))})})});const f=r=>{let t="";switch(r){case"weapon":t="武器";break;case"helment":t="头盔";break;case"armor":t="护甲";break;case"gloves":t="手套";break;case"shoes":t="鞋子";break;case"necklace":t="项链";break}return t};return(r,t)=>(c(),p("div",null,[e("div",N,[O,e("div",$,[e("div",j,[F,e("span",null,n(s.personnel.name),1)]),e("div",P,[V,e("span",null,n(s.personnel.sex),1)])]),e("div",z,[e("div",A,[D,e("span",null,n(s.personnel.levle),1)]),e("div",J,[L,e("span",null,n(s.personnel.blood)+"/"+n(s.personnel.maxBlood),1)])]),e("div",M,[e("div",G,[H,e("span",null,n(s.personnel.attack),1)]),e("div",K,[Q,e("span",null,n(s.personnel.defense),1)])]),e("div",R,[e("div",T,[U,e("span",null,n(s.personnel.exp)+"/"+n(d.value),1)]),e("div",W,[X,e("span",null,n(s.personnel.agile),1)])]),e("div",Y,[Z,e("span",null,n(s.personnel.title?s.personnel.title:"无"),1)]),e("div",ee,[se,(c(!0),p(m,null,h(s.personnel.skill,(a,i)=>(c(),p("div",{key:i},[e("span",ne,n(a.name)+n(a.attack),1)]))),128))])]),s.isEquipment?(c(),p("div",te,[oe,(c(!0),p(m,null,h(_.value,(a,i)=>(c(),p("div",{class:"equipment-item",key:i},[e("span",ae,n(a.column)+":",1),a.itemNo?(c(),g(I(C),{key:0,theme:"dark",placement:"top"},{reference:v(()=>[e("span",{class:q([`color-${a.quality}`])},n(a.name),3)]),default:v(()=>[e("span",le,n(a.introduction),1)]),_:2},1024)):(c(),p("span",ce,"无"))]))),128))])):y("",!0)]))}}),de=E(pe,[["__scopeId","data-v-096f517f"]]);export{de as p,_e as u};