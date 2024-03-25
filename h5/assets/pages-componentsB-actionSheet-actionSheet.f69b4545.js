import{_ as o}from"./u-navbar.e3194188.js";import{o as e,c as s,w as t,a as n,b as i,r as a,F as c,f as l,d as u,g as r,i as p,e as m}from"./index.639d3d9d.js";import{r as h}from"./uni-app.es.f87317fd.js";import{_ as d}from"./u-cell.572d7e8b.js";import{_ as w}from"./u-cell-group.faa24020.js";import{_ as f}from"./u-action-sheet.965b3c8e.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-status-bar.83380ec3.js";import"./u-icon.8fecb8b7.js";import"./u-line.e68cb869.js";import"./u-loading-icon.1043df4a.js";import"./u-gap.299d3089.js";import"./u-popup.7f98a8f1.js";import"./u-overlay.d6cc6c6f.js";import"./u-transition.bbe9f451.js";import"./u-safe-bottom.457b576f.js";var v=g({data:()=>({show0:!1,show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,actions0:[{name:"选项1"},{name:"选项2"},{name:"选项3",subname:"描述文本"}],actions1:[{name:"选项1"},{loading:!0},{name:"选项被禁用",disabled:!0}],actions2:[{name:"选项1"},{name:"选项2"},{name:"选项3"}],actions3:[{name:"选项1"},{name:"选项2"},{name:"选项3"}],actions5:[{name:"获取用户信息",openType:"getUserInfo",color:uni.$u.color.success}],list:[{title:"普通使用",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/custom.png"},{title:"设置状态",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/status.png"},{title:"显示取消按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/cancel.png"},{title:"描述内容",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/desc.png"},{title:"显示标题(显示圆角)",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/title.png"},{title:"微信开放能力",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/open.png"}]}),onLoad(){},methods:{openSheet(o){if(5===o)return uni.$u.toast("请在微信内预览");this[`show${o}`]=!0},getuserinfo(o){uni.$u.toast(`用户名：${o.userInfo.nickName}`)},navigateBack(){uni.navigateBack()},close(){console.log("close"),this.show0=!1},select(o){console.log("select",o)}}},[["render",function(g,v,j,b,_,C){const k=h(u("u-navbar"),o),x=m,S=h(u("u-cell"),d),U=h(u("u-cell-group"),w),y=h(u("u-action-sheet"),f),$=r,I=p;return e(),s(I,{class:"u-page"},{default:t((()=>[n(k,{title:"上拉菜单",onLeftClick:C.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),n(U,null,{default:t((()=>[(e(!0),i(c,null,a(_.list,((o,i)=>(e(),s(S,{onClick:o=>C.openSheet(i),title:o.title,key:i,isLink:""},{default:t((()=>[n(x,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),n(y,{show:_.show0,onClose:C.close,onSelect:C.select,actions:_.actions0,closeOnClickOverlay:!1},null,8,["show","onClose","onSelect","actions"]),n(y,{show:_.show1,onClose:v[0]||(v[0]=o=>_.show1=!1),actions:_.actions1},null,8,["show","actions"]),n(y,{show:_.show2,onClose:v[1]||(v[1]=o=>_.show2=!1),actions:_.actions2,cancelText:"取消"},null,8,["show","actions"]),n(y,{show:_.show3,onClose:v[2]||(v[2]=o=>_.show3=!1),actions:_.actions3,description:"这是一段描述文本,字号偏小,颜色偏淡"},null,8,["show","actions"]),n(y,{show:_.show4,onClose:v[3]||(v[3]=o=>_.show4=!1),title:"标题位置",round:10},{default:t((()=>[n($,{style:{margin:"10px 20px 30px 20px",color:"#303133","font-size":"15px"}},{default:t((()=>[l("这是一段通过slot传入的内容,您可以在此自定义操作面板")])),_:1})])),_:1},8,["show"]),n(y,{show:_.show5,onClose:v[4]||(v[4]=o=>_.show5=!1),title:"微信开放能力",actions:_.actions5,onGetuserinfo:C.getuserinfo},null,8,["show","actions","onGetuserinfo"])])),_:1})}],["__scopeId","data-v-3967d4e2"]]);export{v as default};