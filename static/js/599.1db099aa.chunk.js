"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[599],{713:function(n,e,t){t.d(e,{Df:function(){return o},HI:function(){return s},IQ:function(){return p},Jh:function(){return f},on:function(){return i}});var r=t(861),a=t(757),u=t.n(a),c=t(294),o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=bc2265aa30ecd1392b8b84679bff4db4");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&api_key=bc2265aa30ecd1392b8b84679bff4db4"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US&api_key=bc2265aa30ecd1392b8b84679bff4db4"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US&api_key=bc2265aa30ecd1392b8b84679bff4db4"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1&api_key=bc2265aa30ecd1392b8b84679bff4db4"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},938:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,u,c=t(689),o=t(168),i=t(87),s=t(924),p=(0,s.ZP)("ul")(r||(r=(0,o.Z)(["\n  padding: 0;\n"]))),f=(0,s.ZP)(i.rU)(a||(a=(0,o.Z)(["\n  color: #20012c;\n  padding: 6px;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 400;\n  &:hover {\n    color: #2c9e78;\n    text-transform: uppercase;\n  }\n"]))),d=(0,s.ZP)("li")(u||(u=(0,o.Z)(["\n  line-height: 1.5em;\n  margin-left: 15px;\n"]))),l=t(184);function h(n){var e=n.movies,t=(0,c.TH)();return(0,l.jsx)("div",{children:(0,l.jsx)(p,{children:e.map((function(n){return(0,l.jsx)(d,{children:(0,l.jsxs)(f,{to:"/movies/".concat(n.id),state:{from:t},children:[n.title,n.name]})},n.id)}))})})}},599:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,u=t(433),c=t(861),o=t(439),i=t(757),s=t.n(i),p=t(713),f=t(791),d=t(87),l=t(168),h=t(924),b=(0,h.ZP)("input")(r||(r=(0,l.Z)(["\n  line-height: 1.5em;\n  margin: 20px;\n  width: 300px;\n  font-size: 18px;\n  border-color: #20012c;\n  border-radius: 5px;\n  outline: none;\n  background-color: rgb(202, 220, 221);\n"]))),v=(0,h.ZP)("button")(a||(a=(0,l.Z)(["\n  line-height: 1.5em;\n  width: 100px;\n  font-size: 18px;\n  border-color: #20012c;\n  border-radius: 5px;\n  background-color: rgb(202, 220, 221);\n"]))),m=t(184);function g(n){var e=n.submit,t=(0,f.useState)(""),r=(0,o.Z)(t,2),a=r[0],u=r[1];return(0,m.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==a.trim()?e(a):alert("Type your search...")},children:[(0,m.jsx)(b,{type:"text",name:"searchInput",autoComplete:"off",autoFocus:!0,value:a,onChange:function(n){u(n.currentTarget.value.toLowerCase())}}),(0,m.jsx)(v,{type:"submit",children:(0,m.jsx)("span",{children:"Search"})})]})}var x=t(938);function Z(){var n=(0,f.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,d.lr)(),i=(0,o.Z)(a,2),l=i[0],h=i[1];return(0,f.useEffect)((function(){var n=l.get("name");if(n){var e=function(){var e=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.on)(n);case 3:t=e.sent,r((0,u.Z)(t.results)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l]),(0,m.jsxs)("div",{children:[(0,m.jsx)(g,{submit:function(n){if(""===n)return h({});h({name:n})}}),(0,m.jsx)(x.Z,{movies:t})]})}}}]);
//# sourceMappingURL=599.1db099aa.chunk.js.map