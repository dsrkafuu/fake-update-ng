(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a2014ae"],{5780:function(s,t,e){"use strict";e.r(t);var r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"windows-10"},[e("div",{staticClass:"progress"},[s._m(0),e("div",{staticClass:"progress-text"},[e("span",[s._v(s._s(s.nowWorking))]),e("span",[s._v(s._s(s.progressInfo))]),e("span",[s._v(s._s(s.doNotTurnOff))])])])])},o=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"progress-indicator"},[e("div",{staticClass:"dot"}),e("div",{staticClass:"dot"}),e("div",{staticClass:"dot"}),e("div",{staticClass:"dot"}),e("div",{staticClass:"dot"}),e("div",{staticClass:"dot"})])}],a=e("3276"),i={name:"windows-10",data(){return{timer:this.$store.state.timer||a["a"].timer,locale:this.$store.state.locale||a["a"].locale,locales:e("d7a3"),progress:0,progressInterval:void 0}},computed:{nowWorking(){return this.locales[this.locale].nowWorking},doNotTurnOff(){return this.locales[this.locale].doNotTurnOff},progressInfo(){let s=this.locales[this.locale].progressInfo;return s.replace(/{progress}/g,this.progress)}},mounted(){const s=60*this.timer*1e3,t=500;let e=0;this.progressInterval=setInterval(()=>{e>s&&(this.progress=100,clearInterval(this.progressInterval)),this.progress=Math.floor(e/s*100),e+=500},t)}},n=i,l=(e("f70d"),e("2877")),c=Object(l["a"])(n,r,o,!1,null,"152c3be5",null);t["default"]=c.exports},d1e2:function(s,t,e){},f70d:function(s,t,e){"use strict";e("d1e2")}}]);
//# sourceMappingURL=chunk-5a2014ae.7806251a.js.map