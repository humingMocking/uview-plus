import{_ as o}from"./u-navbar.549ae336.js";import{o as e,c as s,w as t,i as n,a as i,b as a,r as l,F as c,j as u,d as r,k as p,e as m}from"./index-24ae516a.js";import{r as h}from"./uni-app.es.c6441c2e.js";import{_ as w}from"./u-cell.250e40d1.js";import{_ as d}from"./u-cell-group.0a292f1a.js";import{_ as f}from"./u-action-sheet.4c446049.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.b5454268.js";import"./u-icon.6bb997b0.js";import"./u-line.dec4c98a.js";import"./u-loading-icon.bad08b54.js";import"./u-gap.8deb708c.js";import"./u-popup.9b535acf.js";import"./u-overlay.a6c5048b.js";import"./u-transition.f88084e9.js";import"./u-safe-bottom.7920ce29.js";const v=g({data:()=>({show0:!1,show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,actions0:[{name:"选项1"},{name:"选项2"},{name:"选项3",subname:"描述文本"}],actions1:[{name:"选项1"},{loading:!0},{name:"选项被禁用",disabled:!0}],actions2:[{name:"选项1"},{name:"选项2"},{name:"选项3"}],actions3:[{name:"选项1"},{name:"选项2"},{name:"选项3"}],actions5:[{name:"获取用户信息",openType:"getUserInfo",color:uni.$u.color.success}],list:[{title:"普通使用",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/custom.png"},{title:"设置状态",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/status.png"},{title:"显示取消按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/cancel.png"},{title:"描述内容",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/desc.png"},{title:"显示标题(显示圆角)",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/title.png"},{title:"微信开放能力",iconUrl:"https://cdn.uviewui.com/uview/demo/actionSheet/open.png"}]}),onLoad(){},methods:{openSheet(o){if(5===o)return uni.$u.toast("请在微信内预览");this[`show${o}`]=!0},getuserinfo(o){uni.$u.toast(`用户名：${o.userInfo.nickName}`)},navigateBack(){uni.navigateBack()},close(){console.log("close"),this.show0=!1},select(o){console.log("select",o)}}},[["render",function(g,v,j,_,C,k){const x=h(r("up-navbar"),o),S=m,b=h(r("up-cell"),w),U=h(r("up-cell-group"),d),y=h(r("up-action-sheet"),f),L=p,$=n;return e(),s($,{class:"u-page"},{default:t((()=>[i(x,{title:"上拉菜单",onLeftClick:k.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),i(U,null,{default:t((()=>[(e(!0),a(c,null,l(C.list,((o,n)=>(e(),s(b,{onClick:o=>k.openSheet(n),title:o.title,key:n,isLink:""},{default:t((()=>[i(S,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),i(y,{show:C.show0,onClose:k.close,onSelect:k.select,actions:C.actions0,closeOnClickOverlay:!1},null,8,["show","onClose","onSelect","actions"]),i(y,{show:C.show1,onClose:v[0]||(v[0]=o=>C.show1=!1),actions:C.actions1},null,8,["show","actions"]),i(y,{show:C.show2,onClose:v[1]||(v[1]=o=>C.show2=!1),actions:C.actions2,cancelText:"取消"},null,8,["show","actions"]),i(y,{show:C.show3,onClose:v[2]||(v[2]=o=>C.show3=!1),actions:C.actions3,description:"这是一段描述文本,字号偏小,颜色偏淡"},null,8,["show","actions"]),i(y,{show:C.show4,onClose:v[3]||(v[3]=o=>C.show4=!1),title:"标题位置",round:10},{default:t((()=>[i(L,{style:{margin:"10px 20px 30px 20px",color:"#303133","font-size":"15px"}},{default:t((()=>[u("这是一段通过slot传入的内容,您可以在此自定义操作面板")])),_:1})])),_:1},8,["show"]),i(y,{show:C.show5,onClose:v[4]||(v[4]=o=>C.show5=!1),title:"微信开放能力",actions:C.actions5,onGetuserinfo:k.getuserinfo},null,8,["show","actions","onGetuserinfo"])])),_:1})}],["__scopeId","data-v-207bf444"]]);export{v as default};