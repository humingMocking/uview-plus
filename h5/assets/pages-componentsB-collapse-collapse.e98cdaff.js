import{m as e,j as t,B as a,d as l,o as i,c as s,w as n,a as o,l as u,g as c,t as d,f as p,h as r,i as _}from"./index-c8e61bae.js";import{_ as m}from"./u-icon.e9837ae6.js";import{r as f}from"./uni-app.es.e0630e5f.js";import{_ as h}from"./u-cell.8c2203ce.js";import{_ as g}from"./u-line.840370ca.js";import{_ as $}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as b}from"./u-gap.61bba599.js";const v=$({name:"u-collapse-item",mixins:[e,t,{props:{title:{type:String,default:()=>uni.$u.props.collapseItem.title},value:{type:String,default:()=>uni.$u.props.collapseItem.value},label:{type:String,default:()=>uni.$u.props.collapseItem.label},disabled:{type:Boolean,default:()=>uni.$u.props.collapseItem.disabled},isLink:{type:Boolean,default:()=>uni.$u.props.collapseItem.isLink},clickable:{type:Boolean,default:()=>uni.$u.props.collapseItem.clickable},border:{type:Boolean,default:()=>uni.$u.props.collapseItem.border},align:{type:String,default:()=>uni.$u.props.collapseItem.align},name:{type:[String,Number],default:()=>uni.$u.props.collapseItem.name},icon:{type:String,default:()=>uni.$u.props.collapseItem.icon},duration:{type:Number,default:()=>uni.$u.props.collapseItem.duration}}}],data:()=>({elId:uni.$u.guid(),animationData:{},expanded:!1,showBorder:!1,animating:!1,parentData:{accordion:!1,border:!1}}),watch:{expanded(e){clearTimeout(this.timer),this.timer=null,this.timer=setTimeout((()=>{this.showBorder=e}),e?10:290)}},mounted(){this.init(),console.log("$slots",this.$slots)},methods:{async init(){if(this.updateParentData(),!this.parent)return uni.$u.error("u-collapse-item必须要搭配u-collapse组件使用");const{value:e,accordion:t,children:l=[]}=this.parent;if(t){if(uni.$u.test.array(e))return uni.$u.error("手风琴模式下，u-collapse组件的value参数不能为数组");this.expanded=this.name==e}else{if(!uni.$u.test.array(e)&&null!==e)return uni.$u.error("非手风琴模式下，u-collapse组件的value参数必须为数组");this.expanded=(e||[]).some((e=>e==this.name))}await a(),this.setContentAnimate()},updateParentData(){this.getParentData("u-collapse")},async setContentAnimate(){const e=await this.queryRect(),t=this.expanded?e.height:0;this.animating=!0;const a=uni.createAnimation({timingFunction:"ease-in-out"});a.height(t).step({duration:this.duration}).step(),this.animationData=a.export(),uni.$u.sleep(this.duration).then((()=>{this.animating=!1}))},clickHandler(){this.disabled&&this.animating||this.parent&&this.parent.onChange(this)},queryRect(){return new Promise((e=>{this.$uGetRect(`#${this.elId}`).then((t=>{e(t)}))}))}}},[["render",function(e,t,a,$,b,v){const y=r,x=f(l("u-icon"),m),k=f(l("u-cell"),h),I=_,D=f(l("u-line"),g);return i(),s(I,{class:"u-collapse-item"},{default:n((()=>[o(k,{title:e.$slots.title?"":e.title,value:e.value,label:e.label,icon:e.icon,isLink:e.isLink,clickable:e.clickable,border:b.parentData.border&&b.showBorder,onClick:v.clickHandler,arrowDirection:b.expanded?"up":"down",disabled:e.disabled},{title:n((()=>[u(e.$slots,"title",{},(()=>[!e.$slots.title&&e.title?(i(),s(y,{key:0},{default:n((()=>[c(d(e.title),1)])),_:1})):p("v-if",!0)]),!0)])),icon:n((()=>[u(e.$slots,"icon",{},(()=>[!e.$slots.icon&&e.icon?(i(),s(x,{key:0,size:22,name:e.icon},null,8,["name"])):p("v-if",!0)]),!0)])),value:n((()=>[u(e.$slots,"value",{},(()=>[!e.$slots.value&&e.value?(i(),s(y,{key:0},{default:n((()=>[c(d(e.value),1)])),_:1})):p("v-if",!0)]),!0)])),"right-icon":n((()=>[u(e.$slots,"right-icon",{},void 0,!0)])),_:3},8,["title","value","label","icon","isLink","clickable","border","onClick","arrowDirection","disabled"]),o(I,{class:"u-collapse-item__content",animation:b.animationData,ref:"animation"},{default:n((()=>[o(I,{class:"u-collapse-item__content__text content-class",id:b.elId,ref:b.elId},{default:n((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["id"])])),_:3},8,["animation"]),b.parentData.border?(i(),s(D,{key:0})):p("v-if",!0)])),_:3})}],["__scopeId","data-v-35829f51"]]);const y=$({name:"u-collapse",mixins:[e,t,{props:{value:{type:[String,Number,Array,null],default:()=>uni.$u.props.collapse.value},accordion:{type:Boolean,default:()=>uni.$u.props.collapse.accordion},border:{type:Boolean,default:()=>uni.$u.props.collapse.border}}}],watch:{needInit(){this.init()},parentData(){this.children.length&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))}},created(){this.children=[]},computed:{needInit(){return[this.accordion,this.value]}},emits:["open","close","change"],methods:{init(){this.children.map((e=>{e.init()}))},onChange(e){let t=[];this.children.map(((a,l)=>{this.accordion?(a.expanded=a===e&&!e.expanded,a.setContentAnimate()):a===e&&(a.expanded=!a.expanded,a.setContentAnimate()),t.push({name:a.name||l,status:a.expanded?"open":"close"})})),this.$emit("change",t),this.$emit(e.expanded?"open":"close",e.name)}}},[["render",function(e,t,a,o,c,d){const r=f(l("u-line"),g),m=_;return i(),s(m,{class:"u-collapse"},{default:n((()=>[e.border?(i(),s(r,{key:0})):p("v-if",!0),u(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-1814abc7"]]);const x=$({data:()=>({}),methods:{open(e){},close(e){},change(e){}}},[["render",function(e,t,a,u,d,h){const g=r,$=f(l("u-collapse-item"),v),x=f(l("u-collapse"),y),k=_,I=f(l("u-icon"),m),D=f(l("u-gap"),b);return i(),s(k,{class:"u-page"},{default:n((()=>[o(k,{class:"u-page__item"},{default:n((()=>[o(g,{class:"u-page__item__title"},{default:n((()=>[c("基础功能")])),_:1}),o(x,{onChange:h.change,onClose:h.close,onOpen:h.open},{default:n((()=>[o($,{title:"文档指南",name:"Docs guide"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o($,{title:"组件全面",name:"Variety components"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o($,{title:"众多利器",name:"Numerous tools"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1},8,["onChange","onClose","onOpen"])])),_:1}),o(k,{class:"u-page__item"},{default:n((()=>[o(g,{class:"u-page__item__title"},{default:n((()=>[c("展开和禁用")])),_:1}),o(x,{value:["2"]},{default:n((()=>[o($,{title:"文档指南"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o($,{disabled:"",title:"组件全面"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o($,{name:"2",title:"众多利器"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-page__item"},{default:n((()=>[o(g,{class:"u-page__item__title"},{default:n((()=>[c("手风琴模式")])),_:1}),o(x,{accordion:""},{default:n((()=>[o($,{title:"文档指南"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o($,{title:"组件全面"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o($,{title:"众多利器"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),o(k,{class:"u-page__item"},{default:n((()=>[o(g,{class:"u-page__item__title"},{default:n((()=>[c("移除下划线")])),_:1}),o(x,{accordion:"",border:!1},{default:n((()=>[o($,{title:"文档指南"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),o($,{title:"组件全面"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o($,{title:"众多利器"},{default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),p(' 微信小程序不支持，因为微信中不支持 <slot name="title" slot="title" />的写法 '),o(k,{class:"u-page__item"},{default:n((()=>[o(g,{class:"u-page__item__title"},{default:n((()=>[c("自定义标题和内容")])),_:1}),o(x,{accordion:""},{default:n((()=>[o($,null,{title:n((()=>[o(g,{class:"u-page__item__title__slot-title"},{default:n((()=>[c("文档指南")])),_:1})])),default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),p(' <u-collapse-item\n\t\t\t\t\t:isLink="false"\n\t\t\t\t>\n\t\t\t\t\t<text slot="title" class="u-page__item__title__slot-title">文档指南</text>\n\t\t\t\t\t<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>\n\t\t\t\t</u-collapse-item> '),o($,{title:"组件全面"},{icon:n((()=>[o(I,{name:"tags-fill",size:"20"})])),default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),o($,{title:"众多利器",icon:"tags-fill"},{value:n((()=>[o(g,{class:"u-page__item__title__slot-title"},{default:n((()=>[c("自定义内容")])),_:1})])),default:n((()=>[o(g,{class:"u-collapse-content"},{default:n((()=>[c("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),o(D,{height:"50"})])),_:1})}],["__scopeId","data-v-9b6b925b"]]);export{x as default};