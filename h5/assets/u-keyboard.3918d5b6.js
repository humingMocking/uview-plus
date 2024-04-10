import{m as e,f as a,d as o,o as t,c as r,w as s,b as n,F as l,r as i,a as u,n as c,j as d,t as p,s as _,k as m,i as b,p as h,l as y,h as k}from"./index-32ebe9a0.js";import{_ as f}from"./u-icon.3d60c399.js";import{r as v}from"./uni-app.es.69356e58.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as g}from"./u-popup.239bf5f3.js";const $=C({mixins:[e,a,{props:{mode:{type:String,default:()=>uni.$u.props.numberKeyboard.value},dotDisabled:{type:Boolean,default:()=>uni.$u.props.numberKeyboard.dotDisabled},random:{type:Boolean,default:()=>uni.$u.props.numberKeyboard.random}}}],data:()=>({backspace:"backspace",dot:".",timer:null,cardX:"X"}),computed:{numList(){return this.dotDisabled&&"number"==this.mode?this.random?uni.$u.randomArray([1,2,3,4,5,6,7,8,9,0]):[1,2,3,4,5,6,7,8,9,0]:this.dotDisabled||"number"!=this.mode?"card"==this.mode?this.random?uni.$u.randomArray([1,2,3,4,5,6,7,8,9,this.cardX,0]):[1,2,3,4,5,6,7,8,9,this.cardX,0]:void 0:this.random?uni.$u.randomArray([1,2,3,4,5,6,7,8,9,this.dot,0]):[1,2,3,4,5,6,7,8,9,this.dot,0]},itemStyle(){return e=>{let a={};return"number"==this.mode&&this.dotDisabled&&9==e&&(a.width="464rpx"),a}},btnBgGray(){return e=>!this.random&&9==e&&("number"!=this.mode||"number"==this.mode&&!this.dotDisabled)}},created(){},emits:["backspace","change"],methods:{backspaceClick(){this.$emit("backspace"),clearInterval(this.timer),this.timer=null,this.timer=setInterval((()=>{this.$emit("backspace")}),250)},clearTimer(){clearInterval(this.timer),this.timer=null},keyboardClick(e){this.dotDisabled||e==this.dot||e==this.cardX||(e=Number(e)),this.$emit("change",e)}}},[["render",function(e,a,h,y,k,C){const g=m,$=b,w=v(o("u-icon"),f);return t(),r($,{class:"u-keyboard",onTouchmove:_(e.noop,["stop","prevent"])},{default:s((()=>[(t(!0),n(l,null,i(C.numList,((e,a)=>(t(),r($,{class:"u-keyboard__button-wrapper",key:a},{default:s((()=>[u($,{class:"u-keyboard__button-wrapper__button",style:c([C.itemStyle(a)]),onClick:a=>C.keyboardClick(e),"hover-class":"u-hover-class","hover-stay-time":200},{default:s((()=>[u(g,{class:"u-keyboard__button-wrapper__button__text"},{default:s((()=>[d(p(e),1)])),_:2},1024)])),_:2},1032,["style","onClick"])])),_:2},1024)))),128)),u($,{class:"u-keyboard__button-wrapper"},{default:s((()=>[u($,{class:"u-keyboard__button-wrapper__button u-keyboard__button-wrapper__button--gray","hover-class":"u-hover-class","hover-stay-time":200,onTouchstart:_(C.backspaceClick,["stop"]),onTouchend:C.clearTimer},{default:s((()=>[u(w,{name:"backspace",color:"#303133",size:"28"})])),_:1},8,["onTouchstart","onTouchend"])])),_:1})])),_:1},8,["onTouchmove"])}],["__scopeId","data-v-b199cf29"]]);const w=C({name:"u-keyboard",mixins:[e,a,{props:{random:{type:Boolean,default:!1},autoChange:{type:Boolean,default:!1}}}],data:()=>({abc:!1}),computed:{areaList(){let e=["京","沪","粤","津","冀","豫","云","辽","黑","湘","皖","鲁","苏","浙","赣","鄂","桂","甘","晋","陕","蒙","吉","闽","贵","渝","川","青","琼","宁","挂","藏","港","澳","新","使","学"],a=[];return this.random&&(e=uni.$u.randomArray(e)),a[0]=e.slice(0,10),a[1]=e.slice(10,20),a[2]=e.slice(20,30),a[3]=e.slice(30,36),a},engKeyBoardList(){let e=[1,2,3,4,5,6,7,8,9,0,"Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"],a=[];return this.random&&(e=uni.$u.randomArray(e)),a[0]=e.slice(0,10),a[1]=e.slice(10,20),a[2]=e.slice(20,30),a[3]=e.slice(30,36),a}},emits:["change","backspace"],methods:{carInputClick(e,a){let o="";o=this.abc?this.engKeyBoardList[e][a]:this.areaList[e][a],!this.abc&&this.autoChange&&uni.$u.sleep(200).then((()=>this.abc=!0)),this.$emit("change",o)},changeCarInputMode(){this.abc=!this.abc},backspaceClick(){this.$emit("backspace"),clearInterval(this.timer),this.timer=null,this.timer=setInterval((()=>{this.$emit("backspace")}),250)},clearTimer(){clearInterval(this.timer),this.timer=null}}},[["render",function(e,a,c,k,C,g){const $=m,w=b,B=v(o("u-icon"),f);return t(),r(w,{class:"u-keyboard",onTouchmove:_(e.noop,["stop","prevent"])},{default:s((()=>[(t(!0),n(l,null,i(C.abc?g.engKeyBoardList:g.areaList,((e,a)=>(t(),r(w,{key:a,class:h(["u-keyboard__button",[a+1===4&&"u-keyboard__button--center"]]),index:a},{default:s((()=>[3===a?(t(),r(w,{key:0,class:"u-keyboard__button__inner-wrapper"},{default:s((()=>[u(w,{class:"u-keyboard__button__inner-wrapper__left","hover-class":"u-hover-class","hover-stay-time":200,onClick:g.changeCarInputMode},{default:s((()=>[u($,{class:h(["u-keyboard__button__inner-wrapper__left__lang",[!C.abc&&"u-keyboard__button__inner-wrapper__left__lang--active"]])},{default:s((()=>[d("中")])),_:1},8,["class"]),u($,{class:"u-keyboard__button__inner-wrapper__left__line"},{default:s((()=>[d("/")])),_:1}),u($,{class:h(["u-keyboard__button__inner-wrapper__left__lang",[C.abc&&"u-keyboard__button__inner-wrapper__left__lang--active"]])},{default:s((()=>[d("英")])),_:1},8,["class"])])),_:1},8,["onClick"])])),_:1})):y("",!0),(t(!0),n(l,null,i(e,((e,o)=>(t(),r(w,{class:"u-keyboard__button__inner-wrapper",key:o},{default:s((()=>[u(w,{class:"u-keyboard__button__inner-wrapper__inner","hover-stay-time":200,onClick:e=>g.carInputClick(a,o),"hover-class":"u-hover-class"},{default:s((()=>[u($,{class:"u-keyboard__button__inner-wrapper__inner__text"},{default:s((()=>[d(p(e),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128)),3===a?(t(),r(w,{key:1,onTouchstart:g.backspaceClick,onTouchend:g.clearTimer,class:"u-keyboard__button__inner-wrapper"},{default:s((()=>[u(w,{class:"u-keyboard__button__inner-wrapper__right","hover-class":"u-hover-class","hover-stay-time":200},{default:s((()=>[u(B,{size:"28",name:"backspace",color:"#303133"})])),_:1})])),_:1},8,["onTouchstart","onTouchend"])):y("",!0)])),_:2},1032,["index","class"])))),128))])),_:1},8,["onTouchmove"])}],["__scopeId","data-v-b56e628c"]]);const B=C({name:"u-keyboard",data:()=>({}),mixins:[e,a,{props:{mode:{type:String,default:()=>uni.$u.props.keyboard.mode},dotDisabled:{type:Boolean,default:()=>uni.$u.props.keyboard.dotDisabled},tooltip:{type:Boolean,default:()=>uni.$u.props.keyboard.tooltip},showTips:{type:Boolean,default:()=>uni.$u.props.keyboard.showTips},tips:{type:String,default:()=>uni.$u.props.keyboard.tips},showCancel:{type:Boolean,default:()=>uni.$u.props.keyboard.showCancel},showConfirm:{type:Boolean,default:()=>uni.$u.props.keyboard.showConfirm},random:{type:Boolean,default:()=>uni.$u.props.keyboard.random},safeAreaInsetBottom:{type:Boolean,default:()=>uni.$u.props.keyboard.safeAreaInsetBottom},closeOnClickOverlay:{type:Boolean,default:()=>uni.$u.props.keyboard.closeOnClickOverlay},show:{type:Boolean,default:()=>uni.$u.props.keyboard.show},overlay:{type:Boolean,default:()=>uni.$u.props.keyboard.overlay},zIndex:{type:[String,Number],default:()=>uni.$u.props.keyboard.zIndex},cancelText:{type:String,default:()=>uni.$u.props.keyboard.cancelText},confirmText:{type:String,default:()=>uni.$u.props.keyboard.confirmText},autoChange:{type:Boolean,default:()=>uni.$u.props.keyboard.autoChange}}}],emits:["change","close","confirm","cancel","backspace"],methods:{change(e){this.$emit("change",e)},popupClose(){this.$emit("close")},onConfirm(){this.$emit("confirm")},onCancel(){this.$emit("cancel")},backspace(){this.$emit("backspace")}}},[["render",function(e,a,n,l,i,c){const _=m,h=b,f=v(o("u-number-keyboard"),$),C=v(o("u-car-keyboard"),w),B=v(o("u-popup"),g);return t(),r(B,{overlay:e.overlay,closeOnClickOverlay:e.closeOnClickOverlay,mode:"bottom",popup:!1,show:e.show,safeAreaInsetBottom:e.safeAreaInsetBottom,onClose:c.popupClose,zIndex:e.zIndex,customStyle:{backgroundColor:"rgb(214, 218, 220)"}},{default:s((()=>[u(h,{class:"u-keyboard"},{default:s((()=>[k(e.$slots,"default",{},void 0,!0),e.tooltip?(t(),r(h,{key:0,class:"u-keyboard__tooltip"},{default:s((()=>[u(h,{"hover-class":"u-hover-class","hover-stay-time":100},{default:s((()=>[e.showCancel?(t(),r(_,{key:0,class:"u-keyboard__tooltip__item u-keyboard__tooltip__cancel",onClick:c.onCancel},{default:s((()=>[d(p(e.showCancel&&e.cancelText),1)])),_:1},8,["onClick"])):y("",!0)])),_:1}),u(h,null,{default:s((()=>[e.showTips?(t(),r(_,{key:0,class:"u-keyboard__tooltip__item u-keyboard__tooltip__tips"},{default:s((()=>[d(p(e.tips?e.tips:"number"==e.mode?"数字键盘":"card"==e.mode?"身份证键盘":"车牌号键盘"),1)])),_:1})):y("",!0)])),_:1}),u(h,{"hover-class":"u-hover-class","hover-stay-time":100},{default:s((()=>[e.showConfirm?(t(),r(_,{key:0,onClick:c.onConfirm,class:"u-keyboard__tooltip__item u-keyboard__tooltip__submit","hover-class":"u-hover-class"},{default:s((()=>[d(p(e.showConfirm&&e.confirmText),1)])),_:1},8,["onClick"])):y("",!0)])),_:1})])),_:1})):y("",!0),"number"==e.mode||"card"==e.mode?(t(),r(f,{key:1,random:e.random,onBackspace:c.backspace,onChange:c.change,mode:e.mode,dotDisabled:e.dotDisabled},null,8,["random","onBackspace","onChange","mode","dotDisabled"])):(t(),r(C,{key:2,random:e.random,autoChange:e.autoChange,onBackspace:c.backspace,onChange:c.change},null,8,["random","autoChange","onBackspace","onChange"]))])),_:3})])),_:3},8,["overlay","closeOnClickOverlay","show","safeAreaInsetBottom","onClose","zIndex","customStyle"])}],["__scopeId","data-v-9a357e71"]]);export{B as _};