import{_ as f,az as b,r as l,J as h,c as a,$ as V,aA as $,M as c,O as v,R as w,Y as y,f as o,aB as r,aC as S}from"./index.08e92286.js";import{Q as x}from"./QPage.c52b11b3.js";const q=b({data(){return{}},computed:{screenwidth:{get(){return this.$store.state.screenchange.screenwidth}},screenheight:{get(){return this.$store.state.screenchange.screenheight}}},setup(){l(""),l(""),l(""),l(""),l(0);const e=h(),t=a({get:()=>e.state.fabchange.fab1}),i=a({get:()=>e.state.fabchange.fab2}),d=a({get:()=>e.state.fabchange.fab3}),p=a({get:()=>e.state.fabchange.fab4}),g=a({get:()=>e.state.settings.apptitle,set:n=>{e.commit("settings/APPTitle",n)}}),s=a({get:()=>e.state.settings.server,set:n=>{e.commit("settings/Server",n)}}),u=a({get:()=>e.state.settings.openid,set:n=>{e.commit("settings/Openid",n)}}),m=a({get:()=>e.state.settings.slogan,set:n=>{e.commit("settings/Slogan",n)}});return{fab1:t,fab2:i,fab3:d,fab4:p,apptitle:g,server:s,openid:u,slogan:m}}});function B(e,t,i,d,p,g){return V((c(),v(x,{class:"flex flex-top"},{default:w(()=>[y("div",{style:S({width:e.screenwidth+"px",height:e.screenheight-160+"px",marginTop:"10px"})},[o(r,{dense:"",outlined:"",square:"",modelValue:e.apptitle,"onUpdate:modelValue":t[0]||(t[0]=s=>e.apptitle=s),label:e.$t("index.app_title"),style:{margin:"0 15px 0 15px"}},null,8,["modelValue","label"]),o(r,{dense:"",outlined:"",square:"",modelValue:e.slogan,"onUpdate:modelValue":t[1]||(t[1]=s=>e.slogan=s),label:e.$t("index.slogan"),style:{margin:"15px 15px 0 15px"}},null,8,["modelValue","label"]),o(r,{dense:"",outlined:"",square:"",modelValue:e.openid,"onUpdate:modelValue":t[2]||(t[2]=s=>e.openid=s),label:e.$t("index.your_openid"),style:{margin:"15px 15px 0 15px"}},null,8,["modelValue","label"]),o(r,{dense:"",outlined:"",square:"",modelValue:e.server,"onUpdate:modelValue":t[3]||(t[3]=s=>e.server=s),label:e.$t("index.server"),style:{margin:"15px 15px 0 15px"}},null,8,["modelValue","label"])],4)]),_:1},512)),[[$,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]])}var P=f(q,[["render",B]]);export{P as default};