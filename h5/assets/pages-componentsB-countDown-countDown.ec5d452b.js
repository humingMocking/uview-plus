import{l as t,m as e,f as i,o as s,c as a,w as o,h as m,a as n,j as l,t as u,k as c,i as r,d}from"./index-5f0950f1.js";import{_}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as f}from"./uni-app.es.5e4d89a0.js";import{_ as h}from"./u-icon.a35f76a2.js";import{_ as p,a as T}from"./u-grid.c70f6141.js";const g={props:{time:{type:[String,Number],default:()=>t.countDown.time},format:{type:String,default:()=>t.countDown.format},autoStart:{type:Boolean,default:()=>t.countDown.autoStart},millisecond:{type:Boolean,default:()=>t.countDown.millisecond}}};function k(t,e=2){let i=`${t}`;for(;i.length<e;)i=`0${i}`;return i}const D=1e3,w=6e4,S=36e5,b=24*S;function x(t){return{days:Math.floor(t/b),hours:Math.floor(t%b/S),minutes:Math.floor(t%S/w),seconds:Math.floor(t%w/D),milliseconds:Math.floor(t%D)}}const C=_({name:"u-count-down",mixins:[e,i,g],data:()=>({timer:null,timeData:x(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}),watch:{time(t){this.reset()}},mounted(){this.init()},emits:["change","finish"],methods:{init(){this.reset()},start(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick(){this.millisecond?this.microTick():this.macroTick()},macroTick(){this.clearTimeout(),this.timer=setTimeout((()=>{const t=this.getRemainTime();var e,i;e=t,i=this.remainTime,(Math.floor(e/1e3)!==Math.floor(i/1e3)||0===t)&&this.setRemainTime(t),0!==this.remainTime&&this.macroTick()}),30)},microTick(){this.clearTimeout(),this.timer=setTimeout((()=>{this.setRemainTime(this.getRemainTime()),0!==this.remainTime&&this.microTick()}),50)},getRemainTime(){return Math.max(this.endTime-Date.now(),0)},setRemainTime(t){this.remainTime=t;const e=x(t);this.$emit("change",e),this.formattedTime=function(t,e){let{days:i,hours:s,minutes:a,seconds:o,milliseconds:m}=e;return-1===t.indexOf("DD")?s+=24*i:t=t.replace("DD",k(i)),-1===t.indexOf("HH")?a+=60*s:t=t.replace("HH",k(s)),-1===t.indexOf("mm")?o+=60*a:t=t.replace("mm",k(a)),-1===t.indexOf("ss")?m+=1e3*o:t=t.replace("ss",k(o)),t.replace("SSS",k(m,3))}(this.format,e),t<=0&&(this.pause(),this.$emit("finish"))},reset(){this.pause(),this.remainTime=this.time,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause(){this.runing=!1,this.clearTimeout()},clearTimeout(){clearTimeout(this.timer),this.timer=null}},beforeUnmount(){this.clearTimeout()}},[["render",function(t,e,i,d,_,f){const h=c,p=r;return s(),a(p,{class:"u-count-down"},{default:o((()=>[m(t.$slots,"default",{},(()=>[n(h,{class:"u-count-down__text"},{default:o((()=>[l(u(_.formattedTime),1)])),_:1})]),!0)])),_:3})}],["__scopeId","data-v-1416e5a6"]]);const H=_({data:()=>({timeData:{}}),onLoad(){},methods:{start(){this.$refs.countDown.start()},pause(){this.$refs.countDown.pause()},reset(){this.$refs.countDown.reset()},onChange(t){this.timeData=t},finish(){console.log("finish")}}},[["render",function(t,e,i,m,_,g){const k=c,D=f(d("up-count-down"),C),w=r,S=f(d("up-icon"),h),b=f(d("up-grid-item"),p),x=f(d("up-grid"),T);return s(),a(w,{class:"u-page"},{default:o((()=>[n(w,{class:"u-demo-block"},{default:o((()=>[n(k,{class:"u-demo-block__title"},{default:o((()=>[l("基础用法")])),_:1}),n(w,{class:"u-demo-block__content"},{default:o((()=>[n(D,{time:108e6,format:"HH:mm:ss",autoStart:"",millisecond:"",onFinish:g.finish},null,8,["onFinish"])])),_:1})])),_:1}),n(w,{class:"u-demo-block"},{default:o((()=>[n(k,{class:"u-demo-block__title"},{default:o((()=>[l("自定义格式")])),_:1}),n(w,{class:"u-demo-block__content"},{default:o((()=>[n(D,{time:108e6,format:"DD:HH:mm:ss",autoStart:"",millisecond:"",onChange:g.onChange},{default:o((()=>[n(w,{class:"time"},{default:o((()=>[n(k,{class:"time__item"},{default:o((()=>[l(u(_.timeData.days)+" 天",1)])),_:1}),n(k,{class:"time__item"},{default:o((()=>[l(u(_.timeData.hours>10?_.timeData.hours:"0"+_.timeData.hours)+" 时",1)])),_:1}),n(k,{class:"time__item"},{default:o((()=>[l(u(_.timeData.minutes)+" 分",1)])),_:1}),n(k,{class:"time__item"},{default:o((()=>[l(u(_.timeData.seconds)+" 秒",1)])),_:1})])),_:1})])),_:1},8,["onChange"])])),_:1})])),_:1}),n(w,{class:"u-demo-block"},{default:o((()=>[n(k,{class:"u-demo-block__title"},{default:o((()=>[l("毫秒级渲染")])),_:1}),n(w,{class:"u-demo-block__content"},{default:o((()=>[n(D,{time:108e6,format:"HH:mm:ss:SSS",autoStart:"",millisecond:""})])),_:1})])),_:1}),n(w,{class:"u-demo-block"},{default:o((()=>[n(k,{class:"u-demo-block__title"},{default:o((()=>[l("自定义样式")])),_:1}),n(w,{class:"u-demo-block__content"},{default:o((()=>[n(D,{time:108e6,format:"HH:mm:ss",autoStart:"",millisecond:"",onChange:g.onChange},{default:o((()=>[n(w,{class:"time"},{default:o((()=>[n(w,{class:"time__custom"},{default:o((()=>[n(k,{class:"time__custom__item"},{default:o((()=>[l(u(_.timeData.hours>10?_.timeData.hours:"0"+_.timeData.hours),1)])),_:1})])),_:1}),n(k,{class:"time__doc"},{default:o((()=>[l(":")])),_:1}),n(w,{class:"time__custom"},{default:o((()=>[n(k,{class:"time__custom__item"},{default:o((()=>[l(u(_.timeData.minutes),1)])),_:1})])),_:1}),n(k,{class:"time__doc"},{default:o((()=>[l(":")])),_:1}),n(w,{class:"time__custom"},{default:o((()=>[n(k,{class:"time__custom__item"},{default:o((()=>[l(u(_.timeData.seconds),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["onChange"])])),_:1})])),_:1}),n(w,{class:"u-demo-block"},{default:o((()=>[n(k,{class:"u-demo-block__title"},{default:o((()=>[l("手动控制")])),_:1}),n(w,{class:"u-demo-block__content"},{default:o((()=>[n(D,{ref:"countDown",time:3e3,format:"ss:SSS",autoStart:!1,millisecond:""},null,512)])),_:1}),n(x,{border:!0,customStyle:{marginTop:"10px"}},{default:o((()=>[n(b,{onClick:g.reset},{default:o((()=>[n(w,{class:"count-down__grid-item"},{default:o((()=>[n(S,{name:"reload",size:22}),n(k,{class:"count-down__grid-item__grid-text"},{default:o((()=>[l("重置")])),_:1})])),_:1})])),_:1},8,["onClick"]),n(b,{onClick:g.start},{default:o((()=>[n(w,{class:"count-down__grid-item"},{default:o((()=>[n(w,{class:"count-down__grid-item__circle"},{default:o((()=>[n(S,{color:"#fff",name:"play-right-fill",size:22})])),_:1}),n(k,{class:"count-down__grid-item__grid-text"},{default:o((()=>[l("开始")])),_:1})])),_:1})])),_:1},8,["onClick"]),n(b,{onClick:g.pause},{default:o((()=>[n(w,{class:"count-down__grid-item"},{default:o((()=>[n(S,{name:"pause-circle",size:22}),n(k,{class:"count-down__grid-item__grid-text"},{default:o((()=>[l("暂停")])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-e09a5868"]]);export{H as default};
