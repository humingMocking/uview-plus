import{o as e,c as t,w as l,i as a,a as s,j as i,b as u,r as o,F as d,k as n,d as r,S as m,E as c,t as p}from"./index-f8d91d8b.js";import{_ as f}from"./u-icon.bd51539a.js";import{r as _}from"./uni-app.es.0ae566c1.js";import{_ as g,a as x}from"./u-grid.42e8e136.js";import{_ as k}from"./u-toast.b411a367.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.dfcd5dd5.js";import"./u-gap.ba50b780.js";import"./u-overlay.9ebfa4a4.js";import"./u-transition.3938debd.js";const y=b({data:()=>({baseList:[{name:"photo",title:"图片"},{name:"lock",title:"锁头"}],list:[{name:"photo",title:"图片"},{name:"lock",title:"锁头"},{name:"star",title:"星星"},{name:"hourglass",title:"沙漏"},{name:"home",title:"首页"},{name:"volume",title:"音量"}],swiperList:["integral","kefu-ermai","coupon","gift","scan","pause-circle","wifi","email","list"]}),methods:{click(e){console.log(e),this.$refs.uToastRef.success(`点击了第${e}个`)}}},[["render",function(b,y,j,S,T,h){const w=n,z=_(r("up-icon"),f),L=_(r("up-grid-item"),g),v=_(r("up-grid"),x),C=a,R=m,$=c,B=_(r("up-toast"),k);return e(),t(C,{class:"u-page"},{default:l((()=>[s(C,{class:"u-demo-block"},{default:l((()=>[s(w,{class:"u-demo-block__title"},{default:l((()=>[i("基本案例")])),_:1}),s(C,null,{default:l((()=>[s(v,{border:!1,onClick:h.click,align:"center"},{default:l((()=>[(e(!0),u(d,null,o(T.baseList,((a,u)=>(e(),t(L,{onClick:y[0]||(y[0]=e=>h.click("test")),key:u},{default:l((()=>[s(z,{customStyle:{paddingTop:"20rpx"},name:a.name,size:22},null,8,["name"]),s(w,{class:"grid-text"},{default:l((()=>[i(p(a.title),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onClick"])])),_:1})])),_:1}),s(C,{class:"u-demo-block"},{default:l((()=>[s(w,{class:"u-demo-block__title"},{default:l((()=>[i("显示边框")])),_:1}),s(C,null,{default:l((()=>[s(v,{border:!0},{default:l((()=>[(e(!0),u(d,null,o(T.list,((a,u)=>(e(),t(L,{key:u,customStyle:"padding-top: 10px; padding-bottom: 10px"},{default:l((()=>[s(z,{customStyle:{paddingTop:"20rpx"},name:a.name,size:22},null,8,["name"]),s(w,{class:"grid-text"},{default:l((()=>[i(p(a.title),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),s(C,{class:"u-demo-block"},{default:l((()=>[s(w,{class:"u-demo-block__title"},{default:l((()=>[i("绑定点击事件&自定义列数")])),_:1}),s(C,null,{default:l((()=>[s(v,{border:!1,col:"4"},{default:l((()=>[(e(!0),u(d,null,o(T.list,((a,u)=>(e(),t(L,{key:u,customStyle:"padding-top: 10px; padding-bottom: 10px"},{default:l((()=>[s(z,{customStyle:{paddingTop:"20rpx"},name:a.name,size:22},null,8,["name"]),s(w,{class:"grid-text"},{default:l((()=>[i(p(a.title),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),s(C,{class:"u-demo-block"},{default:l((()=>[s(w,{class:"u-demo-block__title"},{default:l((()=>[i("可滑动")])),_:1}),s(C,null,{default:l((()=>[s($,{"indicator-dots":!0,class:"swiper"},{default:l((()=>[s(R,null,{default:l((()=>[s(v,{border:!0},{default:l((()=>[(e(!0),u(d,null,o(T.swiperList,((a,u)=>(e(),t(L,{index:u,key:u},{default:l((()=>[s(z,{customStyle:{paddingTop:"20rpx"},name:a,size:22},null,8,["name"]),s(w,{class:"grid-text"},{default:l((()=>[i(p("宫格"+(u+1)),1)])),_:2},1024)])),_:2},1032,["index"])))),128))])),_:1})])),_:1}),s(R,null,{default:l((()=>[s(v,{border:!0},{default:l((()=>[(e(!0),u(d,null,o(T.swiperList,((a,u)=>(e(),t(L,{index:u+9,key:u},{default:l((()=>[s(z,{customStyle:{paddingTop:"20rpx"},name:a,size:22},null,8,["name"]),s(w,{class:"grid-text"},{default:l((()=>[i(p("宫格"+(u+1)),1)])),_:2},1024)])),_:2},1032,["index"])))),128))])),_:1})])),_:1}),s(R,null,{default:l((()=>[s(v,{border:!0},{default:l((()=>[(e(!0),u(d,null,o(T.swiperList,((a,u)=>(e(),t(L,{index:u+18,key:u},{default:l((()=>[s(z,{customStyle:{paddingTop:"20rpx"},name:a,size:22},null,8,["name"]),s(w,{class:"grid-text"},{default:l((()=>[i(p("宫格"+(u+1)),1)])),_:2},1024)])),_:2},1032,["index"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),s(B,{ref:"uToastRef"},null,512)])),_:1})}],["__scopeId","data-v-afee0827"]]);export{y as default};