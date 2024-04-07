import{m as e,j as t,d as a,o as i,c as l,w as s,a as u,b as o,F as d,r as n,n as p,g as c,t as r,f,s as m,l as _,p as h,e as g,h as b,i as y}from"./index-c8e61bae.js";import{_ as w}from"./u-icon.e9837ae6.js";import{r as v}from"./uni-app.es.e0630e5f.js";import{_ as $}from"./u-loading-icon.6d45ca86.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";function x(e,t){return["[object Object]","[object File]"].includes(Object.prototype.toString.call(e))?Object.keys(e).reduce(((a,i)=>(t.includes(i)||(a[i]=e[i]),a)),{}):{}}function L(e){return e.tempFiles.map((e=>({...x(e,["path"]),url:e.path,size:e.size,name:e.name,type:e.type})))}function R({accept:e,multiple:t,capture:a,compressed:i,maxDuration:l,sizeType:s,camera:u,maxCount:o}){return new Promise(((d,n)=>{switch(e){case"image":uni.chooseImage({count:t?Math.min(o,9):1,sourceType:a,sizeType:s,success:e=>d(function(e){return e.tempFiles.map((e=>({...x(e,["path"]),type:"image",url:e.path,thumb:e.path,size:e.size,name:e.name})))}(e)),fail:n});break;case"video":uni.chooseVideo({sourceType:a,compressed:i,maxDuration:l,camera:u,success:e=>d(function(e){return[{...x(e,["tempFilePath","thumbTempFilePath","errMsg"]),type:"video",url:e.tempFilePath,thumb:e.thumbTempFilePath,size:e.size,name:e.name}]}(e)),fail:n});break;case"file":uni.chooseFile({count:t?o:1,type:e,success:e=>d(L(e)),fail:n});break;default:uni.chooseFile({count:t?o:1,type:"all",success:e=>d(L(e)),fail:n})}}))}const j=k({name:"u-upload",mixins:[e,t,{watch:{accept:{immediate:!0,handler(e){"all"!==e&&"media"!==e||uni.$u.error("只有微信小程序才支持把accept配置为all、media之一")}}}},{props:{accept:{type:String,default:()=>uni.$u.props.upload.accept},capture:{type:[String,Array],default:()=>uni.$u.props.upload.capture},compressed:{type:Boolean,default:()=>uni.$u.props.upload.compressed},camera:{type:String,default:()=>uni.$u.props.upload.camera},maxDuration:{type:Number,default:()=>uni.$u.props.upload.maxDuration},uploadIcon:{type:String,default:()=>uni.$u.props.upload.uploadIcon},uploadIconColor:{type:String,default:()=>uni.$u.props.upload.uploadIconColor},useBeforeRead:{type:Boolean,default:()=>uni.$u.props.upload.useBeforeRead},afterRead:{type:Function,default:null},beforeRead:{type:Function,default:null},previewFullImage:{type:Boolean,default:()=>uni.$u.props.upload.previewFullImage},maxCount:{type:[String,Number],default:()=>uni.$u.props.upload.maxCount},disabled:{type:Boolean,default:()=>uni.$u.props.upload.disabled},imageMode:{type:String,default:()=>uni.$u.props.upload.imageMode},name:{type:String,default:()=>uni.$u.props.upload.name},sizeType:{type:Array,default:()=>uni.$u.props.upload.sizeType},multiple:{type:Boolean,default:()=>uni.$u.props.upload.multiple},deletable:{type:Boolean,default:()=>uni.$u.props.upload.deletable},maxSize:{type:[String,Number],default:()=>uni.$u.props.upload.maxSize},fileList:{type:Array,default:()=>uni.$u.props.upload.fileList},uploadText:{type:String,default:()=>uni.$u.props.upload.uploadText},width:{type:[String,Number],default:()=>uni.$u.props.upload.width},height:{type:[String,Number],default:()=>uni.$u.props.upload.height},previewImage:{type:Boolean,default:()=>uni.$u.props.upload.previewImage}}}],data:()=>({lists:[],isInCount:!0}),watch:{fileList:{handler(){this.formatFileList()},immediate:!0,deep:!0}},emits:["error","beforeRead","oversize","afterRead","delete","clickPreview"],methods:{formatFileList(){const{fileList:e=[],maxCount:t}=this,a=e.map((e=>Object.assign(Object.assign({},e),{isImage:"image"===this.accept||uni.$u.test.image(e.url||e.thumb),isVideo:"video"===this.accept||uni.$u.test.video(e.url||e.thumb),deletable:"boolean"==typeof e.deletable?e.deletable:this.deletable})));this.lists=a,this.isInCount=a.length<t},chooseFile(){const{maxCount:e,multiple:t,lists:a,disabled:i}=this;if(i)return;let l;try{l=uni.$u.test.array(this.capture)?this.capture:this.capture.split(",")}catch(s){l=[]}R(Object.assign({accept:this.accept,multiple:this.multiple,capture:l,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:e-a.length})).then((e=>{this.onBeforeRead(t?e:e[0])})).catch((e=>{this.$emit("error",e)}))},onBeforeRead(e){const{beforeRead:t,useBeforeRead:a}=this;let i=!0;uni.$u.test.func(t)&&(i=t(e,this.getDetail())),a&&(i=new Promise(((t,a)=>{this.$emit("beforeRead",Object.assign(Object.assign({file:e},this.getDetail()),{callback:e=>{e?t():a()}}))}))),i&&(uni.$u.test.promise(i)?i.then((t=>this.onAfterRead(t||e))):this.onAfterRead(e))},getDetail(e){return{name:this.name,index:null==e?this.fileList.length:e}},onAfterRead(e){const{maxSize:t,afterRead:a}=this;(Array.isArray(e)?e.some((e=>e.size>t)):e.size>t)?this.$emit("oversize",Object.assign({file:e},this.getDetail())):("function"==typeof a&&a(e,this.getDetail()),this.$emit("afterRead",Object.assign({file:e},this.getDetail())))},deleteItem(e){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage(e){e.isImage&&this.previewFullImage&&uni.previewImage({urls:this.lists.filter((e=>"image"===this.accept||uni.$u.test.image(e.url||e.thumb))).map((e=>e.url||e.thumb)),current:e.url||e.thumb,fail(){uni.$u.toast("预览图片失败")}})},onPreviewVideo(e){if(!this.data.previewFullImage)return;const{index:t}=e.currentTarget.dataset,{lists:a}=this.data;wx.previewMedia({sources:a.filter((e=>isVideoFile(e))).map((e=>Object.assign(Object.assign({},e),{type:"video"}))),current:t,fail(){uni.$u.toast("预览视频失败")}})},onClickPreview(e){const{index:t}=e.currentTarget.dataset,a=this.data.lists[t];this.$emit("clickPreview",Object.assign(Object.assign({},a),this.getDetail(t)))}}},[["render",function(e,t,k,x,L,R){const j=g,C=v(a("u-icon"),w),F=b,I=y,D=v(a("u-loading-icon"),$);return i(),l(I,{class:"u-upload",style:p([e.$u.addStyle(e.customStyle)])},{default:s((()=>[u(I,{class:"u-upload__wrap"},{default:s((()=>[e.previewImage?(i(!0),o(d,{key:0},n(L.lists,((t,a)=>(i(),l(I,{class:"u-upload__wrap__preview",key:a},{default:s((()=>[t.isImage||t.type&&"image"===t.type?(i(),l(j,{key:0,src:t.thumb||t.url,mode:e.imageMode,class:"u-upload__wrap__preview__image",onClick:e=>R.onPreviewImage(t),style:p([{width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}])},null,8,["src","mode","onClick","style"])):(i(),l(I,{key:1,class:"u-upload__wrap__preview__other"},{default:s((()=>[u(C,{color:"#80CBF9",size:"26",name:t.isVideo||t.type&&"video"===t.type?"movie":"folder"},null,8,["name"]),u(F,{class:"u-upload__wrap__preview__other__text"},{default:s((()=>[c(r(t.isVideo||t.type&&"video"===t.type?"视频":"文件"),1)])),_:2},1024)])),_:2},1024)),"uploading"===t.status||"failed"===t.status?(i(),l(I,{key:2,class:"u-upload__status"},{default:s((()=>[u(I,{class:"u-upload__status__icon"},{default:s((()=>["failed"===t.status?(i(),l(C,{key:0,name:"close-circle",color:"#ffffff",size:"25"})):(i(),l(D,{key:1,size:"22",mode:"circle",color:"#ffffff"}))])),_:2},1024),t.message?(i(),l(F,{key:0,class:"u-upload__status__message"},{default:s((()=>[c(r(t.message),1)])),_:2},1024)):f("v-if",!0)])),_:2},1024)):f("v-if",!0),"uploading"!==t.status&&(e.deletable||t.deletable)?(i(),l(I,{key:3,class:"u-upload__deletable",onClick:m((e=>R.deleteItem(a)),["stop"])},{default:s((()=>[u(I,{class:"u-upload__deletable__icon"},{default:s((()=>[u(C,{name:"close",color:"#ffffff",size:"10"})])),_:1})])),_:2},1032,["onClick"])):f("v-if",!0),"success"===t.status?(i(),l(I,{key:4,class:"u-upload__success"},{default:s((()=>[u(I,{class:"u-upload__success__icon"},{default:s((()=>[u(C,{name:"checkmark",color:"#ffffff",size:"12"})])),_:1})])),_:1})):f("v-if",!0)])),_:2},1024)))),128)):f("v-if",!0),L.isInCount?(i(),o(d,{key:1},[e.$slots.default||e.$slots.$default?(i(),l(I,{key:0,onClick:R.chooseFile},{default:s((()=>[_(e.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"])):(i(),l(I,{key:1,class:h(["u-upload__button",[e.disabled&&"u-upload__button--disabled"]]),"hover-class":e.disabled?"":"u-upload__button--hover","hover-stay-time":"150",onClick:R.chooseFile,style:p([{width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)}])},{default:s((()=>[u(C,{name:e.uploadIcon,size:"26",color:e.uploadIconColor},null,8,["name","color"]),e.uploadText?(i(),l(F,{key:0,class:"u-upload__button__text"},{default:s((()=>[c(r(e.uploadText),1)])),_:1})):f("v-if",!0)])),_:1},8,["hover-class","onClick","class","style"]))],64)):f("v-if",!0)])),_:3})])),_:3},8,["style"])}],["__scopeId","data-v-99d52f01"]]);const C=k({data:()=>({fileList1:[],fileList2:[],fileList3:[{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"}],fileList4:[{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"},{url:"https://cdn.uviewui.com/uview/swiper/1.jpg"}],fileList5:[],fileList6:[],fileList7:[]}),onLoad(){},methods:{deletePic(e){this[`fileList${e.name}`].splice(e.index,1)},async afterRead(e){let t=[].concat(e.file),a=this[`fileList${e.name}`].length;t.map((t=>{this[`fileList${e.name}`].push({...t,status:"uploading",message:"上传中"})}));for(let i=0;i<t.length;i++){const l=await this.uploadFilePromise(t[i].url);let s=this[`fileList${e.name}`][a];this[`fileList${e.name}`].splice(a,1,Object.assign(s,{status:"success",message:"",url:l})),a++}},uploadFilePromise:e=>new Promise(((t,a)=>{uni.uploadFile({url:"http://www.example.com/upload",filePath:e,name:"file",formData:{user:"test"},success:e=>{setTimeout((()=>{t(e.data.data)}),1e3)}})}))}},[["render",function(e,t,o,d,n,p){const r=b,f=v(a("u-upload"),j),m=y,_=g;return i(),l(m,{class:"u-page"},{default:s((()=>[u(m,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("基础用法")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__upload-item"},{default:s((()=>[u(f,{fileList:n.fileList1,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"1",multiple:"",maxCount:10},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("上传视频")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__upload-item"},{default:s((()=>[u(f,{fileList:n.fileList2,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"2",multiple:"",maxCount:10,accept:"video"},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("文件预览")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__upload-item"},{default:s((()=>[u(f,{fileList:n.fileList3,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"3",multiple:"",maxCount:10,previewFullImage:!0},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("隐藏上传按钮")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__upload-item"},{default:s((()=>[u(f,{fileList:n.fileList4,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"4",multiple:"",maxCount:2},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("限制上传数量")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__upload-item"},{default:s((()=>[u(f,{fileList:n.fileList5,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"5",multiple:"",maxCount:3},null,8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1}),u(m,{class:"u-demo-block"},{default:s((()=>[u(r,{class:"u-demo-block__title"},{default:s((()=>[c("自定义上传样式")])),_:1}),u(m,{class:"u-demo-block__content"},{default:s((()=>[u(m,{class:"u-page__upload-item"},{default:s((()=>[u(f,{fileList:n.fileList6,onAfterRead:p.afterRead,onDelete:p.deletePic,name:"6",multiple:"",maxCount:1,width:"250",height:"150"},{default:s((()=>[u(_,{src:"https://cdn.uviewui.com/uview/demo/upload/positive.png",mode:"widthFix",style:{width:"250px",height:"150px"}})])),_:1},8,["fileList","onAfterRead","onDelete"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-97f68678"]]);export{C as default};