webpackJsonp([56],{"92+C":function(e,t,a){"use strict";function r(e){a("yvpL")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("BO1k"),n=a.n(s),o=a("iVC1"),l=a("QmSG"),i=a("nSkA"),c=a("0xDb"),u={components:{},data:function(){return{route_path:this.$route.path.split("/"),tableData:[],tabletotal:0,currentPage:1,ticket_status:"",pagesize:l.pagesize,pageformat:l.pageformat,rowdata:{id:"",status:""},STATUS_TEXT:{0:"未上线",1:"已上线"},listQuery:{limit:l.LIMIT,offset:"",create_user__username:"",search:"",ordering:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},statusForm:!1,addForm:!1,ruleForm:{name:"",version:"",content:"",create_user:localStorage.getItem("username")},rules:{name:[{required:!0,message:"请输入工单标题",trigger:"blur"}],version:[{required:!0,message:"请输入工单内容",trigger:"blur"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}]},uploadurl:l.uploadurl,apiurl:l.apiUrl,fileList:[],count:0,enclosureForm:{ticket:"",create_user:localStorage.getItem("username"),file:""},enclosureData:[],showForm:!1,send_acc:!1,send_cs:!1,send_it:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(o.g)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},EnclosureData:function(e){var t=this,a={ticket__id:e};Object(o.h)(a).then(function(e){t.enclosureData=e.data})},getEncloseur:function(e){this.showForm=!0,this.EnclosureData(e)},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*l.LIMIT,this.fetchData()},handleSuccess:function(e,t){this.fileList.push(t.raw),this.count+=1},handleRemove:function(e,t){this.fileList.remove(e),this.count-=1},changeStatus:function(e){this.statusForm=!0,this.rowdata=e},updateStatus:function(){var e=this;Object(o.n)(this.rowdata.id,this.rowdata).then(function(){if("1"===e.rowdata.status){if(e.send_acc){var t={action_user:"molly",title:"【已上线】"+e.rowdata.name,message:"上线内容: "+e.rowdata.content};Object(i.h)(t)}if(e.send_cs){var a={action_user:"linda",title:"【已上线】"+e.rowdata.name,message:"上线内容: "+e.rowdata.content};Object(i.h)(a)}if(e.send_it){var r={action_user:"ITDept_SkypeID",title:"【已上线】"+e.rowdata.name,message:"上线内容: "+e.rowdata.content};Object(i.h)(r)}}e.fetchData(),e.statusForm=!1})},handleSortChange:function(e){"ascending"===e.order?this.listQuery.ordering=e.prop:"descending"===e.order?this.listQuery.ordering="-"+e.prop:this.listQuery.ordering="",this.fetchData()},postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(o.p)(t.ruleForm).then(function(e){t.$message({type:"success",message:"恭喜你，新建成功"});var a=!0,r=!1,s=void 0;try{for(var l,u=n()(t.fileList);!(a=(l=u.next()).done);a=!0){var d=l.value,p=new FormData;p.append("username",t.enclosureForm.create_user),p.append("file",d),p.append("create_time",Object(c.a)(d.uid)),p.append("type",d.type),p.append("archive",t.route_path[1]),Object(i.i)(p).then(function(a){t.enclosureForm.file=a.data.filepath,t.enclosureForm.ticket=e.data.id,Object(o.q)(t.enclosureForm)})}}catch(e){r=!0,s=e}finally{try{!a&&u.return&&u.return()}finally{if(r)throw s}}var m={action_user:"itsupport",title:"【上线申请】"+t.ruleForm.name,message:"上线内容: "+t.ruleForm.content};Object(i.h)(m),t.addForm=!1,t.fetchData()})})},deleteEnclosure:function(e){Object(o.b)(e),this.EnclosureData(e)},cleanForm:function(){this.send_acc=!1,this.send_cs=!1}}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.addForm=!0}}},[e._v("新建")])],1),e._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.search,callback:function(t){e.$set(e.listQuery,"search",t)},expression:"listQuery.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"sort-change":e.handleSortChange}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"标题"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"项目和版本"}}),e._v(" "),a("el-table-column",{attrs:{prop:"content",label:"内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-popover",{attrs:{placement:"top",width:"300",trigger:"hover",content:t.row.content}},[a("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[e._v(e._s(t.row.content.slice(0,10))+"...")])],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"工单状态",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",[e._v("\n                "+e._s(e.STATUS_TEXT[t.row.status])+"\n              ")]),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"更新状态",placement:"top"}},[0===t.row.status?a("el-button",{staticClass:"modifychange",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.changeStatus(t.row)}}}):e._e()],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"create_user",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e._f("parseDate")(t.row.create_time)))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){e.getEncloseur(t.row.id)}}},[e._v("附件")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.deleteGroup(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-button"}),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])]),e._v(" "),a("el-dialog",{attrs:{visible:e.statusForm},on:{"update:visible":function(t){e.statusForm=t},close:e.cleanForm}},[a("el-form",{ref:"ruleForm",attrs:{model:e.rowdata,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},e._l(Object.keys(e.STATUS_TEXT),function(t){return a("el-radio",{key:t,attrs:{label:t},model:{value:e.rowdata.status,callback:function(t){e.$set(e.rowdata,"status",t)},expression:"rowdata.status"}},[e._v("\n          "+e._s(e.STATUS_TEXT[t])+"\n        ")])})),e._v(" "),a("el-form-item",{attrs:{label:"通知对象"}},[a("el-checkbox",{model:{value:e.send_acc,callback:function(t){e.send_acc=t},expression:"send_acc"}},[e._v("财务")]),e._v(" "),a("el-checkbox",{model:{value:e.send_cs,callback:function(t){e.send_cs=t},expression:"send_cs"}},[e._v("客服")]),e._v(" "),a("el-checkbox",{model:{value:e.send_it,callback:function(t){e.send_it=t},expression:"send_it"}},[e._v("部门群组")])],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.statusForm=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateStatus}},[e._v("确 定")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"标题",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"项目和版本",prop:"version"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.version,callback:function(t){e.$set(e.ruleForm,"version",t)},expression:"ruleForm.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),a("el-form-item",[a("hr",{staticClass:"heng"}),e._v(" "),a("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:e.count>2},slot:"trigger"},[e._v("\n            上传文件\n          ")]),e._v("\n          (可以不用上传)\n          "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a("p",[e._v("上传文件不超过10m，"),a("a",{staticStyle:{color:"red"}},[e._v("最多只能上传3个文件")])])])],1),e._v(" "),a("hr",{staticClass:"heng"})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.showForm},on:{"update:visible":function(t){e.showForm=t}}},[e.enclosureData.length>0?a("div",{staticClass:"ticketenclosure"},[a("ul",e._l(e.enclosureData,function(t){return t.file?a("li",{key:t.id,staticStyle:{"list-style":"none"}},[a("i",{staticClass:"fa fa-paperclip"}),e._v(" "),a("a",{attrs:{href:e.apiurl+"/upload/"+t.file,download:t.file}},[e._v(e._s(t.file.split("/")[1]))])]):e._e()}))]):a("div",[e._v("\n      没有上传附件\n    ")])])],1)},p=[],m={render:d,staticRenderFns:p},f=m,h=a("VU/8"),v=r,_=h(u,f,!1,v,null,null);t.default=_.exports},"X3//":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".modifychange{margin:5px}",""])},yvpL:function(e,t,a){var r=a("X3//");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("642c39c3",r,!0)}});