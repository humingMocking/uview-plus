import{_ as e}from"./u-icon.a35f76a2.js";import{l as t,m as l,f as a,d as s,o as r,c as o,w as c,a as i,q as n,u as f,n as u,p as d,j as p,t as _,i as y,k as m}from"./index-5f0950f1.js";import{r as h}from"./uni-app.es.5e4d89a0.js";import{_ as k}from"./u-transition.0fba8c47.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";const S=g({name:"u-alert",mixins:[l,a,{props:{title:{type:String,default:()=>t.alert.title},type:{type:String,default:()=>t.alert.type},description:{type:String,default:()=>t.alert.description},closable:{type:Boolean,default:()=>t.alert.closable},showIcon:{type:Boolean,default:()=>t.alert.showIcon},effect:{type:String,default:()=>t.alert.effect},center:{type:Boolean,default:()=>t.alert.center},fontSize:{type:[String,Number],default:()=>t.alert.fontSize}}}],data:()=>({show:!0}),computed:{iconColor(){return"light"===this.effect?this.type:"#fff"},iconName(){switch(this.type){case"success":return"checkmark-circle-fill";case"error":return"close-circle-fill";case"warning":default:return"error-circle-fill";case"info":return"info-circle-fill";case"primary":return"more-circle-fill"}}},emits:["click"],methods:{clickHandler(){this.$emit("click")},closeHandler(){this.show=!1}}},[["render",function(t,l,a,g,S,w){const x=h(s("u-icon"),e),z=y,C=m,$=h(s("u-transition"),k);return r(),o($,{mode:"fade",show:S.show},{default:c((()=>[i(z,{class:n(["u-alert",[`u-alert--${t.type}--${t.effect}`]]),onClick:f(w.clickHandler,["stop"]),style:u([t.$u.addStyle(t.customStyle)])},{default:c((()=>[t.showIcon?(r(),o(z,{key:0,class:"u-alert__icon"},{default:c((()=>[i(x,{name:w.iconName,size:"18",color:w.iconColor},null,8,["name","color"])])),_:1})):d("",!0),i(z,{class:"u-alert__content",style:u([{paddingRight:t.closable?"20px":0}])},{default:c((()=>[t.title?(r(),o(C,{key:0,class:n(["u-alert__content__title",["dark"===t.effect?"u-alert__text--dark":`u-alert__text--${t.type}--light`]]),style:u([{fontSize:t.$u.addUnit(t.fontSize),textAlign:t.center?"center":"left"}])},{default:c((()=>[p(_(t.title),1)])),_:1},8,["style","class"])):d("",!0),t.description?(r(),o(C,{key:1,class:n(["u-alert__content__desc",["dark"===t.effect?"u-alert__text--dark":`u-alert__text--${t.type}--light`]]),style:u([{fontSize:t.$u.addUnit(t.fontSize),textAlign:t.center?"center":"left"}])},{default:c((()=>[p(_(t.description),1)])),_:1},8,["style","class"])):d("",!0)])),_:1},8,["style"]),t.closable?(r(),o(z,{key:1,class:"u-alert__close",onClick:f(w.closeHandler,["stop"])},{default:c((()=>[i(x,{name:"close",color:w.iconColor,size:"15"},null,8,["color"])])),_:1},8,["onClick"])):d("",!0)])),_:1},8,["class","onClick","style"])])),_:1},8,["show"])}],["__scopeId","data-v-3313a320"]]);export{S as _};
