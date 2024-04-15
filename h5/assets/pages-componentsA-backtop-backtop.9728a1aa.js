import{l as t,m as o,f as a,d as e,o as c,c as l,w as i,n as s,a as n,j as u,t as r,p,h as d,k as m,i as b,b as k,r as h,F as f}from"./index-5f0950f1.js";import{_ as T,a as y}from"./u-checkbox-group.ab008134.js";import{r as g}from"./uni-app.es.5e4d89a0.js";import{_ as S}from"./u-icon.a35f76a2.js";import{_ as x}from"./u-transition.0fba8c47.js";import{_}from"./_plugin-vue_export-helper.1b428a4d.js";const D=_({name:"u-back-top",mixins:[o,a,{props:{mode:{type:String,default:()=>t.backtop.mode},icon:{type:String,default:()=>t.backtop.icon},text:{type:String,default:()=>t.backtop.text},duration:{type:[String,Number],default:()=>t.backtop.duration},scrollTop:{type:[String,Number],default:()=>t.backtop.scrollTop},top:{type:[String,Number],default:()=>t.backtop.top},bottom:{type:[String,Number],default:()=>t.backtop.bottom},right:{type:[String,Number],default:()=>t.backtop.right},zIndex:{type:[String,Number],default:()=>t.backtop.zIndex},iconStyle:{type:Object,default:()=>t.backtop.iconStyle}}}],computed:{backTopStyle(){return{bottom:uni.$u.addUnit(this.bottom),right:uni.$u.addUnit(this.right),width:"40px",height:"40px",position:"fixed",zIndex:10}},show(){return uni.$u.getPx(this.scrollTop)>uni.$u.getPx(this.top)},contentStyle(){const t={};let o=0;return o="circle"===this.mode?"100px":"4px",t.borderTopLeftRadius=o,t.borderTopRightRadius=o,t.borderBottomLeftRadius=o,t.borderBottomRightRadius=o,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{backToTop(){uni.pageScrollTo({scrollTop:0,duration:this.duration}),this.$emit("click")}}},[["render",function(t,o,a,k,h,f){const T=g(e("u-icon"),S),y=m,_=b,D=g(e("u-transition"),x);return c(),l(D,{mode:"fade",customStyle:f.backTopStyle,show:f.show},{default:i((()=>[t.$slots.default||t.$slots.$default?d(t.$slots,"default",{key:1},void 0,!0):(c(),l(_,{key:0,class:"u-back-top",style:s([f.contentStyle]),onClick:f.backToTop},{default:i((()=>[n(T,{name:t.icon,"custom-style":t.iconStyle},null,8,["name","custom-style"]),t.text?(c(),l(y,{key:0,class:"u-back-top__text"},{default:i((()=>[u(r(t.text),1)])),_:1})):p("",!0)])),_:1},8,["style","onClick"]))])),_:3},8,["customStyle","show"])}],["__scopeId","data-v-c809159b"]]);const w=_({data:()=>({value:["自定义图标"],backTopData:{mode:"circle",icon:"arrow-upward",bottom:100,customStyle:{},iconStyle:{},right:20,duration:300},scrollTop:0,checkboxList:[{name:"显示方形"},{name:"自定义图标"},{name:"自定义距离"},{name:"自定义样式"},{name:"自定义返回顶部滚动时间"}]}),onLoad(){this.backTopData.icon="arrow-up"},onPageScroll(t){this.scrollTop=t.scrollTop},methods:{checkboxChange(t){t.includes("显示方形")?this.backTopData.mode="square":this.backTopData.mode="circle",t.includes("自定义图标")?this.backTopData.icon="arrow-up":this.backTopData.icon="arrow-upward",t.includes("自定义距离")?(this.backTopData.bottom=300,this.backTopData.right=20):this.backTopData.bottom=100,t.includes("自定义样式")?(this.backTopData.customStyle={backgroundColor:"#2979ff"},this.backTopData.iconStyle={color:"#ffffff"}):(this.backTopData.customStyle={},this.backTopData.iconStyle={}),t.includes("自定义返回顶部滚动时间")?this.backTopData.duration=1500:this.backTopData.duration=300},click(){console.log("click")}}},[["render",function(t,o,a,s,r,p){const d=m,S=g(e("up-checkbox"),T),x=g(e("up-checkbox-group"),y),_=b,w=g(e("up-back-top"),D);return c(),l(_,{class:"u-page",ref:"u-back-top"},{default:i((()=>[n(_,{class:"u-demo-block"},{default:i((()=>[n(d,{class:"u-demo-block__title"},{default:i((()=>[u("自定义backTop(滚动页面即可在右下角看到图标)")])),_:1}),n(_,{class:"u-demo-block__content"},{default:i((()=>[n(_,{class:"u-page__backTop-item"},{default:i((()=>[n(x,{placement:"column",shape:"square",onChange:p.checkboxChange,modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=t=>r.value=t)},{default:i((()=>[(c(!0),k(f,null,h(r.checkboxList,((t,o)=>(c(),l(S,{customStyle:{marginBottom:"8px"},key:o,label:t.name,name:t.name},null,8,["label","name"])))),128))])),_:1},8,["onChange","modelValue"])])),_:1})])),_:1})])),_:1}),n(w,{right:r.backTopData.right,customStyle:r.backTopData.customStyle,bottom:r.backTopData.bottom,icon:r.backTopData.icon,mode:r.backTopData.mode,iconStyle:r.backTopData.iconStyle,duration:r.backTopData.duration,scrollTop:r.scrollTop,onClick:p.click},null,8,["right","customStyle","bottom","icon","mode","iconStyle","duration","scrollTop","onClick"])])),_:1},512)}],["__scopeId","data-v-607054f3"]]);export{w as default};
