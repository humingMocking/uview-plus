import{_ as t}from"./u-transition.0fba8c47.js";import{l as o,m as e,f as a,d as r,o as s,c as i,w as n,h as l}from"./index-5f0950f1.js";import{r as u}from"./uni-app.es.5e4d89a0.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";const c=d({name:"u-overlay",mixins:[e,a,{props:{show:{type:Boolean,default:()=>o.overlay.show},zIndex:{type:[String,Number],default:()=>o.overlay.zIndex},duration:{type:[String,Number],default:()=>o.overlay.duration},opacity:{type:[String,Number],default:()=>o.overlay.opacity}}}],computed:{overlayStyle(){const t={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":`rgba(0, 0, 0, ${this.opacity})`};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{clickHandler(){this.$emit("click")}}},[["render",function(o,e,a,d,c,p){const m=u(r("u-transition"),t);return s(),i(m,{show:o.show,"custom-class":"u-overlay",duration:o.duration,"custom-style":p.overlayStyle,onClick:p.clickHandler},{default:n((()=>[l(o.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style","onClick"])}],["__scopeId","data-v-157b6490"]]);export{c as _};
