import{_ as t}from"./u-gap.3d113601.js";import{o,c as e,w as s,i,a,b as u,r as l,F as p,d as n}from"./index-32ebe9a0.js";import{r}from"./uni-app.es.69356e58.js";import{_ as c}from"./u-toast.3f46dcb4.js";import{_ as m}from"./u-cell.838eadb0.js";import{_ as g}from"./u-cell-group.657ddb53.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.06184240.js";import"./u-icon.3d60c399.js";import"./u-overlay.9afe0774.js";import"./u-transition.b1f1ba1f.js";import"./u-line.1242eee2.js";const w=d({data:()=>({show:!1,list:[{type:"default",title:"默认主题",message:"锦瑟无端五十弦",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/default.png"},{type:"error",icon:!1,title:"失败主题",message:"一弦一柱思华年",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"},{type:"success",title:"成功主题(带图标)",message:"庄生晓梦迷蝴蝶",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/success.png"},{type:"warning",position:"top",title:"位置偏移上方",message:"望帝春心托杜鹃",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/top.png"},{type:"loading",title:"正在加载",message:"正在加载",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/loading.png"},{type:"default",title:"结束后跳转标签页",message:"此情可待成追忆",url:"/pages/componentsB/tag/tag",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/jump.png"}]}),computed:{getIcon:()=>t=>"https://cdn.uviewui.com/uview/example/"+t+".png"},methods:{showToast(t){this.$refs.uToast.show({...t,complete(){t.url&&uni.navigateTo({url:t.url})}})}}},[["render",function(d,w,f,v,h,j){const _=r(n("up-gap"),t),y=r(n("up-toast"),c),U=r(n("up-cell"),m),T=r(n("up-cell-group"),g),x=i;return o(),e(x,{class:"u-page"},{default:s((()=>[a(_,{height:"30",bgColor:"#fff"}),a(y,{ref:"uToast"},null,512),a(T,{"title-bg-color":"rgb(243, 244, 246)"},{default:s((()=>[(o(!0),u(p,null,l(h.list,((t,s)=>(o(),e(U,{titleStyle:{fontWeight:500},title:t.title,key:s,isLink:"",icon:t.iconUrl,onClick:o=>j.showToast(t)},null,8,["title","icon","onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-a70768c2"]]);export{w as default};