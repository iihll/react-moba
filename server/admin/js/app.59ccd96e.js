(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/admin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0522":function(e,t,r){"use strict";var n=r("3f28"),a=r.n(n);a.a},"213d":function(e,t,r){},"22de":function(e,t,r){"use strict";var n=r("8319"),a=r.n(n);a.a},2395:function(e,t,r){},"2b84":function(e,t,r){},"3f28":function(e,t,r){},5232:function(e,t,r){"use strict";var n=r("94ef"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i=(r("7c55"),r("2877")),o={},l=Object(i["a"])(o,a,s,!1,null,null,null),c=l.exports,u=r("5c96"),m=r.n(u);r("0fae");n["default"].use(m.a);var p=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")]),r("el-button",{attrs:{type:"info"},on:{click:function(t){e.model={}}}},[e._v("重置")])],1)],1)],1)],1)},f=[],h=(r("96cf"),r("1da1")),v={data:function(){return{model:{username:"admin",password:"123456"}}},methods:{login:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("login",e.model);case 2:r=t.sent,localStorage.token=r.data.token,e.$router.push("/"),e.$message.success("登录成功");case 6:case"end":return t.stop()}}),t)})))()}}},b=v,g=(r("8c95"),Object(i["a"])(b,d,f,!1,null,"1c678f9d",null)),x=g.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-header",[r("h1",[e._v("王者荣耀后台管理")]),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("退出")])],1),r("el-container",[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","unique-opened":"","default-active":e.$router.path}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("内容管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("物品")]),r("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),r("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("英雄")]),r("el-menu-item",{attrs:{index:"/heroes/create"}},[e._v("新建英雄")]),r("el-menu-item",{attrs:{index:"/heroes/list"}},[e._v("英雄列表")])],2)],2),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("运营管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("文章")]),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),r("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告位")]),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-setting"}),e._v("系统设置 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("新建管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},w=[],$=(r("22de"),{}),k=Object(i["a"])($,_,w,!1,null,null,null),y=k.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Welcome")])])}],j=(r("0522"),{}),C=Object(i["a"])(j,O,R,!1,null,"76e9b298",null),S=C.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"上级分类"}},[r("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},T=[],z={props:{id:{}},data:function(){return{model:{},parents:[]}},created:function(){this.id&&this.fetch(),this.fetchParents()},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/categories/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/categories",e.model);case 7:e.$router.push("/categories/list"),e.$message.success("保存成功");case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchParents:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.parents=r.data;case 4:case"end":return t.stop()}}),t)})))()}}},P=z,B=Object(i["a"])(P,E,T,!1,null,null,null),D=B.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items,stripe:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID"}}),r("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(r){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},A=[],I=(r("b0c0"),{data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,console.log(r),e.items=r.data;case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;this.$confirm("此操作将永久删除".concat(e.name,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/categories/".concat(e._id));case 2:t.$message.success("删除成功"),t.fetch();case 4:case"end":return r.stop()}}),r)})))).catch((function(){t.$message.info("已取消删除")}))}}}),H=I,L=Object(i["a"])(H,U,A,!1,null,null,null),M=L.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"物品")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.icon?r("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},q=[],J={props:{id:{}},data:function(){return{model:{}}},created:function(){this.id&&this.fetch()},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/items/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/items",e.model);case 7:e.$router.push("/items/list"),e.$message.success("保存成功");case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},afterUpload:function(e){this.$set(this.model,"icon",e.url)}}},N=J,F=(r("b72d"),Object(i["a"])(N,V,q,!1,null,null,null)),W=F.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("物品列表")]),r("el-table",{attrs:{data:e.items,stripe:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticStyle:{width:"3rem"},attrs:{src:e.row.icon}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(r){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},K=[],Q={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,console.log(r),e.items=r.data;case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;this.$confirm("此操作将永久删除".concat(e.name,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/items/".concat(e._id));case 2:t.$message.success("删除成功"),t.fetch();case 4:case"end":return r.stop()}}),r)})))).catch((function(){t.$message.info("已取消删除")}))}}},X=Q,Y=Object(i["a"])(X,G,K,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"基本信息"}},[r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.model.avatar=t.url}}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"背景图"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.model.banner=t.url}}},[e.model.banner?r("img",{staticClass:"avatar",attrs:{src:e.model.banner}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{staticClass:"difficult",attrs:{label:"难度"}},[r("el-rate",{attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),r("el-form-item",{staticClass:"difficult",attrs:{label:"技能"}},[r("el-rate",{attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{staticClass:"difficult",attrs:{label:"攻击"}},[r("el-rate",{attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{staticClass:"difficult",attrs:{label:"生存"}},[r("el-rate",{attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加技能 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:t.delay,callback:function(r){e.$set(t,"delay",r)},expression:"item.delay"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:t.cost,callback:function(r){e.$set(t,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[r("el-button",{on:{click:function(t){return e.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加英雄 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"英雄"}},[r("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(r){e.$set(t,"hero",r)},expression:"item.hero"}},e._l(e.heroes,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.model.partners.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},te=[],re={props:{id:{}},data:function(){return{model:{name:"",avatar:"",banner:"",title:"",categories:[],scores:{difficult:0},skills:[],partners:[]},categories:[],items:[],heroes:[]}},created:function(){this.id&&this.fetch(),this.fetchCategories(),this.fetchItem(),this.fetchHero()},methods:{fetchItem:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchHero:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.heroes=r.data;case 4:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/heroes/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/heroes",e.model);case 7:e.$router.push("/heroes/list"),e.$message.success("保存成功");case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()}}},ne=re,ae=(r("5232"),Object(i["a"])(ne,ee,te,!1,null,"e8deb336",null)),se=ae.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("英雄列表")]),r("el-table",{attrs:{data:e.items,stripe:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{prop:"title",label:"称号"}}),r("el-table-column",{attrs:{label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticStyle:{width:"3rem"},attrs:{src:e.row.avatar}})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(r){return e.$router.push("/heroes/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},oe=[],le={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.items=r.data,console.log(r.data);case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;this.$confirm("此操作将永久删除".concat(e.name,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/heroes/".concat(e._id));case 2:t.$message.success("删除成功"),t.fetch();case 4:case"end":return r.stop()}}),r)})))).catch((function(){t.$message.info("已取消删除")}))}}},ce=le,ue=Object(i["a"])(ce,ie,oe,!1,null,null,null),me=ue.exports,pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"文章")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},de=[],fe=r("5873"),he={props:{id:{}},components:{VueEditor:fe["a"]},data:function(){return{model:{},categories:[]}},created:function(){this.id&&this.fetch(),this.fetchCategories()},methods:{handleImageAdded:function(e,t,r,n){var a=this;return Object(h["a"])(regeneratorRuntime.mark((function s(){var i,o,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i=new FormData,i.append("file",e),s.next=4,a.$http.post("upload",i);case 4:o=s.sent,l=o.data.url,t.insertEmbed(r,"image",l),n();case 8:case"end":return s.stop()}}),s)})))()},save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/articles/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/articles",e.model);case 7:e.$router.push("/articles/list"),e.$message.success("保存成功");case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()}}},ve=he,be=Object(i["a"])(ve,pe,de,!1,null,null,null),ge=be.exports,xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("文章列表")]),r("el-table",{attrs:{data:e.items,stripe:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID"}}),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(r){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},_e=[],we={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles");case 2:r=t.sent,console.log(r),e.items=r.data;case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;this.$confirm("此操作将永久删除".concat(e.title,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/articles/".concat(e._id));case 2:t.$message.success("删除成功"),t.fetch();case 4:case"end":return r.stop()}}),r)})))).catch((function(){t.$message.info("已取消删除")}))}}},$e=we,ke=Object(i["a"])($e,xe,_e,!1,null,null,null),ye=ke.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"广告位")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{on:{click:function(t){return e.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加广告 ")])],1),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"链接"}},[r("el-input",{model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"item.url"}})],1),r("el-form-item",{attrs:{label:"图片"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"image",r.url)}}},[t.image?r("img",{staticClass:"avatar",attrs:{src:t.image}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.model.items.splice(n,1)}}},[e._v("删除")])],1)],1)})),1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},Re=[],je={props:{id:{}},data:function(){return{model:{items:[]}}},created:function(){this.id&&this.fetch()},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/ads/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/ads",e.model);case 7:e.$router.push("/ads/list"),e.$message.success("保存成功");case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}}},Ce=je,Se=(r("e66e"),Object(i["a"])(Ce,Oe,Re,!1,null,"50d463c9",null)),Ee=Se.exports,Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("广告位列表")]),r("el-table",{attrs:{data:e.items,stripe:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(r){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ze=[],Pe={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads");case 2:r=t.sent,console.log(r),e.items=r.data;case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;this.$confirm("此操作将永久删除".concat(e.name,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/ads/".concat(e._id));case 2:t.$message.success("删除成功"),t.fetch();case 4:case"end":return r.stop()}}),r)})))).catch((function(){t.$message.info("已取消删除")}))}}},Be=Pe,De=Object(i["a"])(Be,Te,ze,!1,null,null,null),Ue=De.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},Ie=[],He={props:{id:{}},data:function(){return{model:{}}},created:function(){this.id&&this.fetch()},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/admin_users/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/admin_users",e.model);case 7:e.$router.push("/admin_users/list"),e.$message.success("保存成功");case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}}},Le=He,Me=Object(i["a"])(Le,Ae,Ie,!1,null,null,null),Ve=Me.exports,qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("管理员列表")]),r("el-table",{attrs:{data:e.items,stripe:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},Je=[],Ne={data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users");case 2:r=t.sent,console.log(r),e.items=r.data;case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;this.$confirm("此操作将永久删除".concat(e.username,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/admin_users/".concat(e._id));case 2:t.$message.success("删除成功"),t.fetch();case 4:case"end":return r.stop()}}),r)})))).catch((function(){t.$message.info("已取消删除")}))}}},Fe=Ne,We=Object(i["a"])(Fe,qe,Je,!1,null,null,null),Ge=We.exports;n["default"].use(p["a"]);var Ke=[{path:"/login",component:x,meta:{isPublic:!0}},{path:"/",name:"Main",component:y,redirect:"/welcome",children:[{path:"/welcome",component:S},{path:"/categories/create",component:D},{path:"/categories/edit/:id",component:D,props:!0},{path:"/categories/list",component:M},{path:"/items/create",component:W},{path:"/items/edit/:id",component:W,props:!0},{path:"/items/list",component:Z},{path:"/heroes/create",component:se},{path:"/heroes/edit/:id",component:se,props:!0},{path:"/heroes/list",component:me},{path:"/articles/create",component:ge},{path:"/articles/edit/:id",component:ge,props:!0},{path:"/articles/list",component:ye},{path:"/ads/create",component:Ee},{path:"/ads/edit/:id",component:Ee,props:!0},{path:"/ads/list",component:Ue},{path:"/admin_users/create",component:Ve},{path:"/admin_users/edit/:id",component:Ve,props:!0},{path:"/admin_users/list",component:Ge}]}],Qe=new p["a"]({routes:Ke});Qe.beforeEach((function(e,t,r){if(!e.meta.isPublic&&!localStorage.token)return r("/login");r()}));var Xe=Qe,Ye=(r("d3b7"),r("bc3a")),Ze=r.n(Ye),et=Ze.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});et.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(n["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&Xe.push("/login")),Promise.reject(e)})),et.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+(localStorage.token||"")),e}),(function(e){return Promise.reject(e)}));var tt=et;n["default"].config.productionTip=!1,n["default"].prototype.$http=tt,n["default"].mixin({computed:{uploadUrl:function(){return this.$http.defaults.baseURL+"/upload"}},methods:{getAuthHeaders:function(){return{Authorization:"Bearer ".concat(localStorage.token||"")}}}}),new n["default"]({router:Xe,render:function(e){return e(c)}}).$mount("#app")},"7c55":function(e,t,r){"use strict";var n=r("2395"),a=r.n(n);a.a},8319:function(e,t,r){},"8c95":function(e,t,r){"use strict";var n=r("d5dc"),a=r.n(n);a.a},"94ef":function(e,t,r){},b72d:function(e,t,r){"use strict";var n=r("2b84"),a=r.n(n);a.a},d5dc:function(e,t,r){},e66e:function(e,t,r){"use strict";var n=r("213d"),a=r.n(n);a.a}});
//# sourceMappingURL=app.59ccd96e.js.map