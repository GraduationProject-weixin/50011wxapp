(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/putongguanliyuan/add-or-update"],{1409:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,a,r,u,i){try{var o=n[u](i),s=o.value}catch(c){return void e(c)}o.done?t(s):Promise.resolve(s).then(a,r)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var i=n.apply(t,e);function o(n){u(i,a,r,o,s,"next",n)}function s(n){u(i,a,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("b416"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{guanliyuanzhanghao:"",mima:"",guanliyuanxingming:"",beizhu:""},user:{},ro:{guanliyuanzhanghao:!1,mima:!1,guanliyuanxingming:!1,beizhu:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=i(a.default.mark((function t(e){var r,u,i,o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(u=t.sent,this.user=u.data,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=13;break}return this.ruleForm.id=e.id,t.next=11,this.$api.info("putongguanliyuan",this.ruleForm.id);case 11:u=t.sent,this.ruleForm=u.data;case 13:if(!e.cross){t.next=36;break}i=n.getStorageSync("crossObj"),t.t0=a.default.keys(i);case 16:if((t.t1=t.t0()).done){t.next=36;break}if(o=t.t1.value,"guanliyuanzhanghao"!=o){t.next=22;break}return this.ruleForm.guanliyuanzhanghao=i[o],this.ro.guanliyuanzhanghao=!0,t.abrupt("continue",16);case 22:if("mima"!=o){t.next=26;break}return this.ruleForm.mima=i[o],this.ro.mima=!0,t.abrupt("continue",16);case 26:if("guanliyuanxingming"!=o){t.next=30;break}return this.ruleForm.guanliyuanxingming=i[o],this.ro.guanliyuanxingming=!0,t.abrupt("continue",16);case 30:if("beizhu"!=o){t.next=34;break}return this.ruleForm.beizhu=i[o],this.ro.beizhu=!0,t.abrupt("continue",16);case 34:t.next=16;break;case 36:this.styleChange();case 37:case"end":return t.stop()}}),t,this)})));function e(n){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=i(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.guanliyuanzhanghao){n.next=3;break}return this.$utils.msg("管理员账号不能为空"),n.abrupt("return");case 3:if(this.ruleForm.mima){n.next=6;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(!this.ruleForm.id){n.next=11;break}return n.next=9,this.$api.update("putongguanliyuan",this.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,this.$api.add("putongguanliyuan",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,r=t.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(e,"-").concat(a,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};t.default=s}).call(this,e("543d")["default"])},3055:function(n,t,e){"use strict";e.r(t);var a=e("93db"),r=e("bb91");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("553e");var i,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"3cdea9d6",null,!1,a["a"],i);t["default"]=s.exports},4134:function(n,t,e){},"553e":function(n,t,e){"use strict";var a=e("4134"),r=e.n(a);r.a},"93db":function(n,t,e){"use strict";var a,r=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}))},bb91:function(n,t,e){"use strict";e.r(t);var a=e("1409"),r=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=r.a},e508:function(n,t,e){"use strict";(function(n){e("83dc"),e("921b");a(e("66fd"));var t=a(e("3055"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["e508","common/runtime","common/vendor"]]]);