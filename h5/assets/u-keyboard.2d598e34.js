import{l as e,m as a,f as t,d as o,o as r,c as s,w as n,b as l,F as i,r as c,a as d,n as u,j as _,t as p,u as m,k as b,i as h,q as y,p as k,h as f}from"./index-5f0950f1.js";import{_ as v}from"./u-icon.a35f76a2.js";import{r as C}from"./uni-app.es.5e4d89a0.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as w}from"./u-popup.eba9dbbe.js";const B=g({mixins:[a,t,{props:{mode:{type:String,default:()=>e.numberKeyboard.value},dotDisabled:{type:Boolean,default:()=>e.numberKeyboard.dotDisabled},random:{type:Boolean,default:()=>e.numberKeyboard.random}}}],data:()=>({backspace:"backspace",dot:".",timer:null,cardX:"X"}),computed:{numList(){return this.dotDisabled&&"number"==this.mode?this.random?uni.$u.randomArray([1,2,3,4,5,6,7,8,9,0]):[1,2,3,4,5,6,7,8,9,0]:this.dotDisabled||"number"!=this.mode?"card"==this.mode?this.random?uni.$u.randomArray([1,2,3,4,5,6,7,8,9,this.cardX,0]):[1,2,3,4,5,6,7,8,9,this.cardX,0]:void 0:this.random?uni.$u.randomArray([1,2,3,4,5,6,7,8,9,this.dot,0]):[1,2,3,4,5,6,7,8,9,this.dot,0]},itemStyle(){return e=>{let a={};return"number"==this.mode&&this.dotDisabled&&9==e&&(a.width="464rpx"),a}},btnBgGray(){return e=>!this.random&&9==e&&("number"!=this.mode||"number"==this.mode&&!this.dotDisabled)}},created(){},emits:["backspace","change"],methods:{backspaceClick(){this.$emit("backspace"),clearInterval(this.timer),this.timer=null,this.timer=setInterval((()=>{this.$emit("backspace")}),250)},clearTimer(){clearInterval(this.timer),this.timer=null},keyboardClick(e){this.dotDisabled||e==this.dot||e==this.cardX||(e=Number(e)),this.$emit("change",e)}}},[["render",function(e,a,t,y,k,f){const g=b,w=h,B=C(o("u-icon"),v);return r(),s(w,{class:"u-keyboard",onTouchmove:m(e.noop,["stop","prevent"])},{default:n((()=>[(r(!0),l(i,null,c(f.numList,((e,a)=>(r(),s(w,{class:"u-keyboard__button-wrapper",key:a},{default:n((()=>[d(w,{class:"u-keyboard__button-wrapper__button",style:u([f.itemStyle(a)]),onClick:a=>f.keyboardClick(e),"hover-class":"u-hover-class","hover-stay-time":200},{default:n((()=>[d(g,{class:"u-keyboard__button-wrapper__button__text"},{default:n((()=>[_(p(e),1)])),_:2},1024)])),_:2},1032,["style","onClick"])])),_:2},1024)))),128)),d(w,{class:"u-keyboard__button-wrapper"},{default:n((()=>[d(w,{class:"u-keyboard__button-wrapper__button u-keyboard__button-wrapper__button--gray","hover-class":"u-hover-class","hover-stay-time":200,onTouchstart:m(f.backspaceClick,["stop"]),onTouchend:f.clearTimer},{default:n((()=>[d(B,{name:"backspace",color:"#303133",size:"28"})])),_:1},8,["onTouchstart","onTouchend"])])),_:1})])),_:1},8,["onTouchmove"])}],["__scopeId","data-v-b199cf29"]]);const T=g({name:"u-keyboard",mixins:[a,t,{props:{random:{type:Boolean,default:!1},autoChange:{type:Boolean,default:!1}}}],data:()=>({abc:!1}),computed:{areaList(){let e=["京","沪","粤","津","冀","豫","云","辽","黑","湘","皖","鲁","苏","浙","赣","鄂","桂","甘","晋","陕","蒙","吉","闽","贵","渝","川","青","琼","宁","挂","藏","港","澳","新","使","学"],a=[];return this.random&&(e=uni.$u.randomArray(e)),a[0]=e.slice(0,10),a[1]=e.slice(10,20),a[2]=e.slice(20,30),a[3]=e.slice(30,36),a},engKeyBoardList(){let e=[1,2,3,4,5,6,7,8,9,0,"Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],a=[];return this.random&&(e=uni.$u.randomArray(e)),a[0]=e.slice(0,10),a[1]=e.slice(10,20),a[2]=e.slice(20,30),a[3]=e.slice(30,36),a}},emits:["change","backspace"],methods:{carInputClick(e,a){let t="";t=this.abc?this.engKeyBoardList[e][a]:this.areaList[e][a],!this.abc&&this.autoChange&&uni.$u.sleep(200).then((()=>this.abc=!0)),this.$emit("change",t)},changeCarInputMode(){this.abc=!this.abc},backspaceClick(){this.$emit("backspace"),clearInterval(this.timer),this.timer=null,this.timer=setInterval((()=>{this.$emit("backspace")}),250)},clearTimer(){clearInterval(this.timer),this.timer=null}}},[["render",function(e,a,t,u,f,g){const w=b,B=h,T=C(o("u-icon"),v);return r(),s(B,{class:"u-keyboard",onTouchmove:m(e.noop,["stop","prevent"])},{default:n((()=>[(r(!0),l(i,null,c(f.abc?g.engKeyBoardList:g.areaList,((e,a)=>(r(),s(B,{key:a,class:y(["u-keyboard__button",[a+1===4&&"u-keyboard__button--center"]]),index:a},{default:n((()=>[3===a?(r(),s(B,{key:0,class:"u-keyboard__button__inner-wrapper"},{default:n((()=>[d(B,{class:"u-keyboard__button__inner-wrapper__left","hover-class":"u-hover-class","hover-stay-time":200,onClick:g.changeCarInputMode},{default:n((()=>[d(w,{class:y(["u-keyboard__button__inner-wrapper__left__lang",[!f.abc&&"u-keyboard__button__inner-wrapper__left__lang--active"]])},{default:n((()=>[_("中")])),_:1},8,["class"]),d(w,{class:"u-keyboard__button__inner-wrapper__left__line"},{default:n((()=>[_("/")])),_:1}),d(w,{class:y(["u-keyboard__button__inner-wrapper__left__lang",[f.abc&&"u-keyboard__button__inner-wrapper__left__lang--active"]])},{default:n((()=>[_("英")])),_:1},8,["class"])])),_:1},8,["onClick"])])),_:1})):k("",!0),(r(!0),l(i,null,c(e,((e,t)=>(r(),s(B,{class:"u-keyboard__button__inner-wrapper",key:t},{default:n((()=>[d(B,{class:"u-keyboard__button__inner-wrapper__inner","hover-stay-time":200,onClick:e=>g.carInputClick(a,t),"hover-class":"u-hover-class"},{default:n((()=>[d(w,{class:"u-keyboard__button__inner-wrapper__inner__text"},{default:n((()=>[_(p(e),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128)),3===a?(r(),s(B,{key:1,onTouchstart:g.backspaceClick,onTouchend:g.clearTimer,class:"u-keyboard__button__inner-wrapper"},{default:n((()=>[d(B,{class:"u-keyboard__button__inner-wrapper__right","hover-class":"u-hover-class","hover-stay-time":200},{default:n((()=>[d(T,{size:"28",name:"backspace",color:"#303133"})])),_:1})])),_:1},8,["onTouchstart","onTouchend"])):k("",!0)])),_:2},1032,["index","class"])))),128))])),_:1},8,["onTouchmove"])}],["__scopeId","data-v-b56e628c"]]);const I=g({name:"u-keyboard",data:()=>({}),mixins:[a,t,{props:{mode:{type:String,default:()=>e.keyboard.mode},dotDisabled:{type:Boolean,default:()=>e.keyboard.dotDisabled},tooltip:{type:Boolean,default:()=>e.keyboard.tooltip},showTips:{type:Boolean,default:()=>e.keyboard.showTips},tips:{type:String,default:()=>e.keyboard.tips},showCancel:{type:Boolean,default:()=>e.keyboard.showCancel},showConfirm:{type:Boolean,default:()=>e.keyboard.showConfirm},random:{type:Boolean,default:()=>e.keyboard.random},safeAreaInsetBottom:{type:Boolean,default:()=>e.keyboard.safeAreaInsetBottom},closeOnClickOverlay:{type:Boolean,default:()=>e.keyboard.closeOnClickOverlay},show:{type:Boolean,default:()=>e.keyboard.show},overlay:{type:Boolean,default:()=>e.keyboard.overlay},zIndex:{type:[String,Number],default:()=>e.keyboard.zIndex},cancelText:{type:String,default:()=>e.keyboard.cancelText},confirmText:{type:String,default:()=>e.keyboard.confirmText},autoChange:{type:Boolean,default:()=>e.keyboard.autoChange}}}],emits:["change","close","confirm","cancel","backspace"],methods:{change(e){this.$emit("change",e)},popupClose(){this.$emit("close")},onConfirm(){this.$emit("confirm")},onCancel(){this.$emit("cancel")},backspace(){this.$emit("backspace")}}},[["render",function(e,a,t,l,i,c){const u=b,m=h,y=C(o("u-number-keyboard"),B),v=C(o("u-car-keyboard"),T),g=C(o("u-popup"),w);return r(),s(g,{overlay:e.overlay,closeOnClickOverlay:e.closeOnClickOverlay,mode:"bottom",popup:!1,show:e.show,safeAreaInsetBottom:e.safeAreaInsetBottom,onClose:c.popupClose,zIndex:e.zIndex,customStyle:{backgroundColor:"rgb(214, 218, 220)"}},{default:n((()=>[d(m,{class:"u-keyboard"},{default:n((()=>[f(e.$slots,"default",{},void 0,!0),e.tooltip?(r(),s(m,{key:0,class:"u-keyboard__tooltip"},{default:n((()=>[d(m,{"hover-class":"u-hover-class","hover-stay-time":100},{default:n((()=>[e.showCancel?(r(),s(u,{key:0,class:"u-keyboard__tooltip__item u-keyboard__tooltip__cancel",onClick:c.onCancel},{default:n((()=>[_(p(e.showCancel&&e.cancelText),1)])),_:1},8,["onClick"])):k("",!0)])),_:1}),d(m,null,{default:n((()=>[e.showTips?(r(),s(u,{key:0,class:"u-keyboard__tooltip__item u-keyboard__tooltip__tips"},{default:n((()=>[_(p(e.tips?e.tips:"number"==e.mode?"数字键盘":"card"==e.mode?"身份证键盘":"车牌号键盘"),1)])),_:1})):k("",!0)])),_:1}),d(m,{"hover-class":"u-hover-class","hover-stay-time":100},{default:n((()=>[e.showConfirm?(r(),s(u,{key:0,onClick:c.onConfirm,class:"u-keyboard__tooltip__item u-keyboard__tooltip__submit","hover-class":"u-hover-class"},{default:n((()=>[_(p(e.showConfirm&&e.confirmText),1)])),_:1},8,["onClick"])):k("",!0)])),_:1})])),_:1})):k("",!0),"number"==e.mode||"card"==e.mode?(r(),s(y,{key:1,random:e.random,onBackspace:c.backspace,onChange:c.change,mode:e.mode,dotDisabled:e.dotDisabled},null,8,["random","onBackspace","onChange","mode","dotDisabled"])):(r(),s(v,{key:2,random:e.random,autoChange:e.autoChange,onBackspace:c.backspace,onChange:c.change},null,8,["random","autoChange","onBackspace","onChange"]))])),_:3})])),_:3},8,["overlay","closeOnClickOverlay","show","safeAreaInsetBottom","onClose","zIndex","customStyle"])}],["__scopeId","data-v-9a357e71"]]);export{I as _};
