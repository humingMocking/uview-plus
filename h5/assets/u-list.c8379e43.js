import{l as t,m as e,f as l,o,c as s,w as r,h as i,q as n,i as a,a as h,n as c,y as u}from"./index-5f0950f1.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const d=p({name:"u-list-item",mixins:[e,l,{props:{anchor:{type:[String,Number],default:()=>t.listItem.anchor}}}],data:()=>({rect:{},index:0,show:!0,sys:uni.$u.sys()}),computed:{},inject:["uList"],watch:{"uList.innerScrollTop"(t){const e=this.uList.preLoadScreen,l=this.sys.windowHeight;t<=l*e?this.parent.updateOffsetFromChild(0):this.rect.top<=t-l*e&&this.parent.updateOffsetFromChild(this.rect.top)}},created(){this.parent={}},mounted(){this.init()},methods:{init(){this.updateParentData(),this.index=this.parent.children.indexOf(this),this.resize()},updateParentData(){this.getParentData("u-list")},resize(){this.queryRect(`u-list-item-${this.anchor}`).then((t=>{const e=this.parent.children[this.index-1];this.rect=t;const l=this.uList.preLoadScreen,o=this.sys.windowHeight;e&&(this.rect.top=e.rect.top+e.rect.height),t.top>=this.uList.innerScrollTop+(1+l)*o&&(this.show=!1)}))},queryRect(t){return new Promise((e=>{this.$uGetRect(`.${t}`).then((t=>{e(t)}))}))}}},[["render",function(t,e,l,h,c,u){const p=a;return o(),s(p,{class:n(["u-list-item",[`u-list-item-${t.anchor}`]]),ref:`u-list-item-${t.anchor}`,anchor:`u-list-item-${t.anchor}`},{default:r((()=>[i(t.$slots,"default",{},void 0,!0)])),_:3},8,["anchor","class"])}],["__scopeId","data-v-3473cbb2"]]);const m=p({name:"u-list",mixins:[e,l,{props:{showScrollbar:{type:Boolean,default:()=>t.list.showScrollbar},lowerThreshold:{type:[String,Number],default:()=>t.list.lowerThreshold},upperThreshold:{type:[String,Number],default:()=>t.list.upperThreshold},scrollTop:{type:[String,Number],default:()=>t.list.scrollTop},offsetAccuracy:{type:[String,Number],default:()=>t.list.offsetAccuracy},enableFlex:{type:Boolean,default:()=>t.list.enableFlex},pagingEnabled:{type:Boolean,default:()=>t.list.pagingEnabled},scrollable:{type:Boolean,default:()=>t.list.scrollable},scrollIntoView:{type:String,default:()=>t.list.scrollIntoView},scrollWithAnimation:{type:Boolean,default:()=>t.list.scrollWithAnimation},enableBackToTop:{type:Boolean,default:()=>t.list.enableBackToTop},height:{type:[String,Number],default:()=>t.list.height},width:{type:[String,Number],default:()=>t.list.width},preLoadScreen:{type:[String,Number],default:()=>t.list.preLoadScreen}}}],watch:{scrollIntoView(t){this.scrollIntoViewById(t)}},data:()=>({innerScrollTop:0,offset:0,sys:uni.$u.sys()}),computed:{listStyle(){const t={},e=uni.$u.addUnit;return 0!=this.width&&(t.width=e(this.width)),0!=this.height&&(t.height=e(this.height)),t.height||(t.height=e(this.sys.windowHeight,"px")),uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},provide(){return{uList:this}},created(){this.refs=[],this.children=[],this.anchors=[]},mounted(){},emits:["scroll","scrolltolower","scrolltoupper"],methods:{updateOffsetFromChild(t){this.offset=t},onScroll(t){let e=0;e=t.detail.scrollTop,this.innerScrollTop=e,this.$emit("scroll",Math.abs(e))},scrollIntoViewById(t){},scrolltolower(t){uni.$u.sleep(30).then((()=>{this.$emit("scrolltolower")}))},scrolltoupper(t){uni.$u.sleep(30).then((()=>{this.$emit("scrolltoupper"),this.offset=0}))}}},[["render",function(t,e,l,n,p,d){const m=a,f=u;return o(),s(f,{class:"u-list","scroll-into-view":t.scrollIntoView,style:c([d.listStyle]),"scroll-y":t.scrollable,"scroll-top":Number(t.scrollTop),"lower-threshold":Number(t.lowerThreshold),"upper-threshold":Number(t.upperThreshold),"show-scrollbar":t.showScrollbar,"enable-back-to-top":t.enableBackToTop,"scroll-with-animation":t.scrollWithAnimation,onScroll:d.onScroll,onScrolltolower:d.scrolltolower,onScrolltoupper:d.scrolltoupper},{default:r((()=>[h(m,null,{default:r((()=>[i(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["scroll-into-view","style","scroll-y","scroll-top","lower-threshold","upper-threshold","show-scrollbar","enable-back-to-top","scroll-with-animation","onScroll","onScrolltolower","onScrolltoupper"])}],["__scopeId","data-v-5c1825c9"]]);export{d as _,m as a};
