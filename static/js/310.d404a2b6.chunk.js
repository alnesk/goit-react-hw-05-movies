"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{245:function(n,t,r){r.d(t,{a:function(){return u}});var e,a=r(137),o=r(168),c=r(924).styled.div(e||(e=(0,o.Z)(["\n  margin: 0 auto;\n"]))),i=r(184),u=function(){return(0,i.jsx)(c,{children:(0,i.jsx)(a.iT,{height:80,width:80,color:"rgb(26, 127, 141)",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"rgb(14, 82, 91)",strokeWidth:2,strokeWidthSecondary:2})})}},214:function(n,t,r){r.d(t,{$r:function(){return d},Ak:function(){return p},I_:function(){return l},WM:function(){return f}});var e,a,o,c,i=r(168),u=r(87),s=r(924),p=s.styled.h1(e||(e=(0,i.Z)(["\nmargin-bottom: 40px;"]))),l=s.styled.div(a||(a=(0,i.Z)(["\n  width: 1120px;\n  box-shadow: 0 20px 20px rgb(14, 82, 91);\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),d=s.styled.li(o||(o=(0,i.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 15px;\n"]))),f=(0,s.styled)(u.OL)(c||(c=(0,i.Z)(["\n  color: rgb(238, 234, 234);\n  transition: color 0.2s ease;\n  &:hover {\n    color: rgb(26, 127, 141);\n  }\n"])))},310:function(n,t,r){r.r(t),r.d(t,{default:function(){return S}});var e,a,o,c,i,u=r(861),s=r(439),p=r(757),l=r.n(p),d=r(245),f=r(791),h=r(87),x=r(689),g=r(66),m=r(168),v=r(924),y=v.styled.div(e||(e=(0,m.Z)(["\n  width: 1120px;\n  box-shadow: 0 10px 20px rgb(14, 82, 91);\n  margin: 0 auto;\n  padding: 40px;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n"]))),b=v.styled.form(a||(a=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 80px;\n"]))),w=v.styled.input(o||(o=(0,m.Z)(["\n  width: 1000px;\n  background-color: transparent;\n  padding: 10px 40px;\n  border: 1px solid rgb(14, 82, 91);\n  font-size: 18px;\n  color: rgb(238, 234, 234);\n  &::placeholder {\n    color: rgba(238, 234, 234, 0.5);\n  }\n"]))),k=v.styled.button(c||(c=(0,m.Z)(["\n  background-color: rgb(26, 127, 141);\n  color: rgb(238, 234, 234);\n  padding: 5px 10px;\n  border: none;\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: rgb(14, 82, 91);\n  }\n"]))),Z=v.styled.div(i||(i=(0,m.Z)(["\n  margin-left: 40px;\n"]))),j=r(214),_=r(184),S=function(){var n=(0,f.useState)([]),t=(0,s.Z)(n,2),r=t[0],e=t[1],a=(0,f.useState)(null),o=(0,s.Z)(a,2),c=o[0],i=o[1],p=(0,f.useState)(!1),m=(0,s.Z)(p,2),v=m[0],S=m[1],q=(0,h.lr)(),C=(0,s.Z)(q,2),W=C[0],M=C[1],z=W.get("query"),A=(0,x.TH)();(0,f.useEffect)((function(){if(z){var n=function(){var n=(0,u.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,S(!0),n.next=4,(0,g.Up)(z);case 4:t=n.sent,e(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),i(n.t0.message);case 11:return n.prev=11,S(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[z]);return(0,_.jsxs)(y,{children:[(0,_.jsxs)(b,{onSubmit:function(n){n.preventDefault();var t=n.target.children.search.value;M({query:t}),n.target.reset()},children:[(0,_.jsx)(w,{type:"text",name:"search",placeholder:"enter the name of the movie",required:!0}),(0,_.jsx)(k,{type:"submit",children:"Search"})]}),null!==c&&(0,_.jsxs)("p",{className:"c-error",children:["Oops, some error occured. Please, try again later. Error: ",c]}),v&&(0,_.jsx)(d.a,{}),r.length>0&&(0,_.jsx)(Z,{children:r.map((function(n){return(0,_.jsx)(j.$r,{children:(0,_.jsx)(j.WM,{state:{from:A},to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},66:function(n,t,r){r.d(t,{AX:function(){return f},DF:function(){return x},MX:function(){return l},Up:function(){return m},yF:function(){return s}});var e=r(861),a=r(757),o=r.n(a),c=r(294),i="8687854402204dd37c43207d4b2de8e8",u="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/search/movie?query=").concat(t,"&api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=310.d404a2b6.chunk.js.map