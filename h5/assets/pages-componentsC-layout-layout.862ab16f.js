import{m as t,f as e,o as s,c as l,w as a,h as u,p as i,n as o,i as n,a as d,j as p,k as r,d as c}from"./index-cc2315b5.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as g}from"./uni-app.es.2370b278.js";const m=f({name:"u-col",mixins:[t,e,{props:{span:{type:[String,Number],default:()=>uni.$u.props.col.span},offset:{type:[String,Number],default:()=>uni.$u.props.col.offset},justify:{type:String,default:()=>uni.$u.props.col.justify},align:{type:String,default:()=>uni.$u.props.col.align},textAlign:{type:String,default:()=>uni.$u.props.col.textAlign}}}],data:()=>({width:0,parentData:{gutter:0},gridNum:12}),options:{virtualHost:!0},computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},colStyle(){const t={paddingLeft:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),paddingRight:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),alignItems:this.uAlignItem,justifyContent:this.uJustify,textAlign:this.textAlign,flex:`0 0 ${100/this.gridNum*this.span}%`,marginLeft:100/12*this.offset+"%"};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},mounted(){this.init()},emits:["click"],methods:{async init(){this.updateParentData(),this.width=await this.parent.getComponentWidth()},updateParentData(){this.getParentData("u-row")},clickHandler(t){this.$emit("click")}}},[["render",function(t,e,d,p,r,c){const f=n;return s(),l(f,{class:i(["u-col",["u-col-"+t.span]]),ref:"u-col",style:o([c.colStyle]),onClick:c.clickHandler},{default:a((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-d2e75320"]]);const y=f({name:"u-row",mixins:[t,e,{props:{gutter:{type:[String,Number],default:()=>uni.$u.props.row.gutter},justify:{type:String,default:()=>uni.$u.props.row.justify},align:{type:String,default:()=>uni.$u.props.row.align}}}],data:()=>({}),computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},rowStyle(){const t={alignItems:this.uAlignItem,justifyContent:this.uJustify};return this.gutter&&(t.marginLeft=uni.$u.addUnit(-Number(this.gutter)/2),t.marginRight=uni.$u.addUnit(-Number(this.gutter)/2)),uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{clickHandler(t){this.$emit("click")},async getComponentWidth(){return await uni.$u.sleep(),new Promise((t=>{this.$uGetRect(".u-row").then((e=>{t(e.width)}))}))}}},[["render",function(t,e,i,d,p,r){const c=n;return s(),l(c,{class:"u-row",ref:"u-row",style:o([r.rowStyle]),onClick:r.clickHandler},{default:a((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","onClick"])}],["__scopeId","data-v-02833213"]]);const _=f({data:()=>({})},[["render",function(t,e,u,i,o,f){const _=r,h=n,b=g(c("up-col"),m),k=g(c("up-row"),y);return s(),l(h,{class:"u-page"},{default:a((()=>[d(h,{class:"u-demo-block"},{default:a((()=>[d(_,{class:"u-demo-block__title"},{default:a((()=>[p("基础使用")])),_:1}),d(h,{class:"u-demo-block__content"},{default:a((()=>[d(k,{customStyle:"margin-bottom: 10px"},{default:a((()=>[d(b,{span:"6"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"6"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),d(k,{customStyle:"margin-bottom: 10px"},{default:a((()=>[d(b,{span:"4"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1}),d(b,{span:"4"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"4"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-dark"})])),_:1})])),_:1}),d(k,{justify:"space-between"},{default:a((()=>[d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1}),d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1}),d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1})])),_:1})])),_:1})])),_:1}),d(h,{class:"u-demo-block"},{default:a((()=>[d(_,{class:"u-demo-block__title"},{default:a((()=>[p("分栏间隔")])),_:1}),d(h,{class:"u-demo-block__content"},{default:a((()=>[d(k,{justify:"space-between",gutter:"10"},{default:a((()=>[d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1}),d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1}),d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1})])),_:1})])),_:1})])),_:1}),d(h,{class:"u-demo-block"},{default:a((()=>[d(_,{class:"u-demo-block__title"},{default:a((()=>[p("混合布局")])),_:1}),d(h,{class:"u-demo-block__content"},{default:a((()=>[d(k,{justify:"space-between",gutter:"10"},{default:a((()=>[d(b,{span:"2"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"4"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1}),d(b,{span:"6"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-dark"})])),_:1})])),_:1})])),_:1})])),_:1}),d(h,{class:"u-demo-block"},{default:a((()=>[d(_,{class:"u-demo-block__title"},{default:a((()=>[p("分栏偏移")])),_:1}),d(h,{class:"u-demo-block__content"},{default:a((()=>[d(k,{justify:"space-between",customStyle:"margin-bottom: 10px"},{default:a((()=>[d(b,{span:"3",offset:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"3",offset:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),d(k,null,{default:a((()=>[d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"3",offset:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1})])),_:1})])),_:1}),d(h,{class:"u-demo-block"},{default:a((()=>[d(_,{class:"u-demo-block__title"},{default:a((()=>[p("对齐方式")])),_:1}),d(h,{class:"u-demo-block__content"},{default:a((()=>[d(k,{justify:"space-between",customStyle:"margin-bottom: 10px"},{default:a((()=>[d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1}),d(k,null,{default:a((()=>[d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple-light"})])),_:1}),d(b,{span:"3"},{default:a((()=>[d(h,{class:"demo-layout bg-purple"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-087d5b34"]]);export{_ as default};