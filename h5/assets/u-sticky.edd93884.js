import{l as t,m as s,h as e,o as i,c as o,w as n,a as c,n as h,k as d,i as r}from"./index-c9cf8d84.js";import{_ as u}from"./_plugin-vue_export-helper.1b428a4d.js";const y=u({name:"u-sticky",mixins:[s,e,{props:{offsetTop:{type:[String,Number],default:t.sticky.offsetTop},customNavHeight:{type:[String,Number],default:44},disabled:{type:Boolean,default:t.sticky.disabled},bgColor:{type:String,default:t.sticky.bgColor},zIndex:{type:[String,Number],default:t.sticky.zIndex},index:{type:[String,Number],default:t.sticky.index}}}],data:()=>({cssSticky:!1,stickyTop:0,elId:uni.$u.guid(),left:0,width:"auto",height:"auto",fixed:!1}),computed:{style(){const t={};return this.disabled?t.position="static":this.cssSticky?(t.position="sticky",t.zIndex=this.uZindex,t.top=uni.$u.addUnit(this.stickyTop)):t.height=this.fixed?this.height+"px":"auto",t.backgroundColor=this.bgColor,uni.$u.deepMerge(uni.$u.addStyle(this.customStyle),t)},stickyContent(){const t={};return this.cssSticky||(t.position=this.fixed?"fixed":"static",t.top=this.stickyTop+"px",t.left=this.left+"px",t.width="auto"==this.width?"auto":this.width+"px",t.zIndex=this.uZindex),t},uZindex(){return this.zIndex?this.zIndex:uni.$u.zIndex.sticky}},mounted(){this.init()},methods:{init(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.disabled&&this.initObserveContent()},initObserveContent(){this.$uGetRect("#"+this.elId).then((t=>{this.height=t.height,this.left=t.left,this.width=t.width,this.$nextTick((()=>{this.observeContent()}))}))},observeContent(){this.disconnectObserver("contentObserver");const t=uni.createIntersectionObserver({thresholds:[.95,.98,1]});t.relativeToViewport({top:-this.stickyTop}),t.observe(`#${this.elId}`,(t=>{this.setFixed(t.boundingClientRect.top)})),this.contentObserver=t},setFixed(t){const s=t<=this.stickyTop;this.fixed=s},disconnectObserver(t){const s=this[t];s&&s.disconnect()},getStickyTop(){this.stickyTop=uni.$u.getPx(this.offsetTop)+uni.$u.getPx(this.customNavHeight)},async checkSupportCssSticky(){this.checkCssStickyForH5()&&(this.cssSticky=!0),"android"===uni.$u.os()&&Number(uni.$u.sys().system)>8&&(this.cssSticky=!0),"ios"===uni.$u.os()&&(this.cssSticky=!0)},checkComputedStyle(){},checkCssStickyForH5(){const t=["","-webkit-","-ms-","-moz-","-o-"],s=t.length,e=document.createElement("div");for(let i=0;i<s;i++)if(e.style.position=t[i]+"sticky",""!==e.style.position)return!0;return!1}},beforeDestroy(){this.disconnectObserver("contentObserver")}},[["render",function(t,s,e,u,y,a){const l=r;return i(),o(l,{class:"u-sticky",id:y.elId,style:h([a.style])},{default:n((()=>[c(l,{style:h([a.stickyContent]),class:"u-sticky__content"},{default:n((()=>[d(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["id","style"])}],["__scopeId","data-v-89071c71"]]);export{y as _};