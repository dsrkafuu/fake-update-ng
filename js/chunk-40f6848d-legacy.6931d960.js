(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40f6848d"],{"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,i="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,c,l,u){var f=r+t.length,d=c.length,v=o;return void 0!==l&&(l=n(l),v=s),i.call(u,v,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(f);case"<":s=l[i.slice(1,-1)];break;default:var o=+i;if(0===o)return n;if(o>d){var u=a(o/10);return 0===u?n:u<=d?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):n}s=c[o-1]}return void 0===s?"":s}))}},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),s=r("a691"),o=r("1d80"),c=r("8aa5"),l=r("0cb2"),u=r("14c3"),f=Math.max,d=Math.min,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(r,n){var a=o(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!p&&g||"string"===typeof n&&-1===n.indexOf(h)){var o=r(e,t,this,n);if(o.done)return o.value}var x=a(t),E=String(this),I="function"===typeof n;I||(n=String(n));var _=x.global;if(_){var b=x.unicode;x.lastIndex=0}var R=[];while(1){var m=u(x,E);if(null===m)break;if(R.push(m),!_)break;var S=String(m[0]);""===S&&(x.lastIndex=c(E,i(x.lastIndex),b))}for(var w="",C=0,$=0;$<R.length;$++){m=R[$];for(var y=String(m[0]),T=f(d(s(m.index),E.length),0),P=[],A=1;A<m.length;A++)P.push(v(m[A]));var U=m.groups;if(I){var k=[y].concat(P,T,E);void 0!==U&&k.push(U);var N=String(n.apply(void 0,k))}else N=l(y,E,T,P,U,n);T>=C&&(w+=E.slice(C,T)+N,C=T+y.length)}return w+E.slice(C)}]}))},5780:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"windows-10"},[r("div",{staticClass:"progress"},[t._m(0),r("div",{staticClass:"progress-text"},[r("span",[t._v(t._s(t.nowWorking))]),r("span",[t._v(t._s(t.progressInfo))]),r("span",[t._v(t._s(t.doNotTurnOff))])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"progress-indicator"},[r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"}),r("div",{staticClass:"dot"})])}],i=(r("ac1f"),r("5319"),r("3276")),s={name:"windows-10",data:function(){return{timer:this.$store.state.timer||i["a"].timer,locale:this.$store.state.locale||i["a"].locale,locales:r("d7a3"),progress:0,progressInterval:void 0}},computed:{nowWorking:function(){return this.locales[this.locale].nowWorking},doNotTurnOff:function(){return this.locales[this.locale].doNotTurnOff},progressInfo:function(){var t=this.locales[this.locale].progressInfo;return t.replace(/{progress}/g,this.progress)}},mounted:function(){var t=this,e=60*this.timer*1e3,r=500,n=0;this.progressInterval=setInterval((function(){n>e&&(t.progress=100,clearInterval(t.progressInterval)),t.progress=Math.floor(n/e*100),n+=500}),r)}},o=s,c=(r("f70d"),r("2877")),l=Object(c["a"])(o,n,a,!1,null,"152c3be5",null);e["default"]=l.exports},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=r("5692"),s=RegExp.prototype.exec,o=i("native-string-replace",String.prototype.replace),c=s,l=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=l||f||u;d&&(c=function(t){var e,r,a,i,c=this,d=u&&c.sticky,v=n.call(c),p=c.source,g=0,h=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),r=new RegExp("^(?:"+p+")",v)),f&&(r=new RegExp("^"+p+"$(?!\\s)",v)),l&&(e=c.lastIndex),a=s.call(d?r:c,h),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=c.lastIndex,c.lastIndex+=a[0].length):c.lastIndex=0:l&&a&&(c.lastIndex=c.global?a.index+a[0].length:e),f&&a&&a.length>1&&o.call(a[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),t.exports=c},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d1e2:function(t,e,r){},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("9263"),i=r("d039"),s=r("b622"),o=r("9112"),c=s("species"),l=RegExp.prototype,u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var g=s(t),h=!i((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),x=h&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return e=!0,null},r[g](""),!e}));if(!h||!x||"replace"===t&&(!u||!f||v)||"split"===t&&!p){var E=/./[g],I=r(g,""[t],(function(t,e,r,n,i){var s=e.exec;return s===a||s===l.exec?h&&!i?{done:!0,value:E.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),_=I[0],b=I[1];n(String.prototype,t,_),n(l,g,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}d&&o(l[g],"sham",!0)}},f70d:function(t,e,r){"use strict";r("d1e2")}}]);
//# sourceMappingURL=chunk-40f6848d-legacy.6931d960.js.map