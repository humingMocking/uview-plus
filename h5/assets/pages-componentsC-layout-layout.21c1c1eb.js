import{l as t,m as e,f as l,o as a,c as s,w as u,h as i,q as o,n,i as d,a as p,j as r,k as c,d as f}from"./index-5f0950f1.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as m}from"./uni-app.es.5e4d89a0.js";const _=g({name:"u-col",mixins:[e,l,{props:{span:{type:[String,Number],default:()=>t.col.span},offset:{type:[String,Number],default:()=>t.col.offset},justify:{type:String,default:()=>t.col.justify},align:{type:String,default:()=>t.col.align},textAlign:{type:String,default:()=>t.col.textAlign}}}],data:()=>({width:0,parentData:{gutter:0},gridNum:12}),options:{virtualHost:!0},computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},colStyle(){const t={paddingLeft:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),paddingRight:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),alignItems:this.uAlignItem,justifyContent:this.uJustify,textAlign:this.textAlign,flex:`0 0 ${100/this.gridNum*this.span}%`,marginLeft:100/12*this.offset+"%"};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},mounted(){this.init()},emits:["click"],methods:{async init(){this.updateParentData(),this.width=await this.parent.getComponentWidth()},updateParentData(){this.getParentData("u-row")},clickHandler(t){this.$emit("click")}}},[["render",function(t,e,l,p,r,c){const f=d;return a(),s(f,{class:o(["u-col",["u-col-"+t.span]]),ref:"u-col",style:n([c.colStyle]),onClick:c.clickHandler},{default:u((()=>[i(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-d2e75320"]]);const y=g({name:"u-row",mixins:[e,l,{props:{gutter:{type:[String,Number],default:()=>t.row.gutter},justify:{type:String,default:()=>t.row.justify},align:{type:String,default:()=>t.row.align}}}],data:()=>({}),computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},rowStyle(){const t={alignItems:this.uAlignItem,justifyContent:this.uJustify};return this.gutter&&(t.marginLeft=uni.$u.addUnit(-Number(this.gutter)/2),t.marginRight=uni.$u.addUnit(-Number(this.gutter)/2)),uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{clickHandler(t){this.$emit("click")},async getComponentWidth(){return await uni.$u.sleep(),new Promise((t=>{this.$uGetRect(".u-row").then((e=>{t(e.width)}))}))}}},[["render",function(t,e,l,o,p,r){const c=d;return a(),s(c,{class:"u-row",ref:"u-row",style:n([r.rowStyle]),onClick:r.clickHandler},{default:u((()=>[i(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","onClick"])}],["__scopeId","data-v-02833213"]]);const h=g({data:()=>({})},[["render",function(t,e,l,i,o,n){const g=c,h=d,b=m(f("up-col"),_),k=m(f("up-row"),y);return a(),s(h,{class:"u-page"},{default:u((()=>[p(h,{class:"u-demo-block"},{default:u((()=>[p(g,{class:"u-demo-block__title"},{default:u((()=>[r("基础使用")])),_:1}),p(h,{class:"u-demo-block__content"},{default:u((()=>[p(k,{customStyle:"margin-bottom: 10px"},{default:u((()=>[p(b,{span:"6"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"6"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),p(k,{customStyle:"margin-bottom: 10px"},{default:u((()=>[p(b,{span:"4"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1}),p(b,{span:"4"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"4"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-dark"})])),_:1})])),_:1}),p(k,{justify:"space-between"},{default:u((()=>[p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1}),p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1}),p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1})])),_:1})])),_:1})])),_:1}),p(h,{class:"u-demo-block"},{default:u((()=>[p(g,{class:"u-demo-block__title"},{default:u((()=>[r("分栏间隔")])),_:1}),p(h,{class:"u-demo-block__content"},{default:u((()=>[p(k,{justify:"space-between",gutter:"10"},{default:u((()=>[p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1}),p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1}),p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1})])),_:1})])),_:1})])),_:1}),p(h,{class:"u-demo-block"},{default:u((()=>[p(g,{class:"u-demo-block__title"},{default:u((()=>[r("混合布局")])),_:1}),p(h,{class:"u-demo-block__content"},{default:u((()=>[p(k,{justify:"space-between",gutter:"10"},{default:u((()=>[p(b,{span:"2"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"4"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1}),p(b,{span:"6"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-dark"})])),_:1})])),_:1})])),_:1})])),_:1}),p(h,{class:"u-demo-block"},{default:u((()=>[p(g,{class:"u-demo-block__title"},{default:u((()=>[r("分栏偏移")])),_:1}),p(h,{class:"u-demo-block__content"},{default:u((()=>[p(k,{justify:"space-between",customStyle:"margin-bottom: 10px"},{default:u((()=>[p(b,{span:"3",offset:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"3",offset:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),p(k,null,{default:u((()=>[p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"3",offset:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1})])),_:1})])),_:1}),p(h,{class:"u-demo-block"},{default:u((()=>[p(g,{class:"u-demo-block__title"},{default:u((()=>[r("对齐方式")])),_:1}),p(h,{class:"u-demo-block__content"},{default:u((()=>[p(k,{justify:"space-between",customStyle:"margin-bottom: 10px"},{default:u((()=>[p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),p(k,null,{default:u((()=>[p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple-light"})])),_:1}),p(b,{span:"3"},{default:u((()=>[p(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-087d5b34"]]);export{h as default};
