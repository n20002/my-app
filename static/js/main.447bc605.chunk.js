(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),i=c.n(s),r=(c(9),c(2)),u=(c(10),c(0)),l=c(12);var o=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],d=Object(n.useState)(""),b=Object(r.a)(d,2),h=b[0],p=b[1];return Object(n.useEffect)((function(){l("https://api.unsplash.com/search/photos?query=".concat(h,"&client_id=").concat("Pka510q41hUydUX5eGDBCp-iu9Jpnoas8WELWydit08")).then((function(e){return e.json()})).then((function(e){a(e.results)}))}),[h]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(o),j("")},children:[Object(u.jsx)("label",{children:"Image search"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:o,placeholder:"Please enter"}),Object(u.jsx)("button",{type:"submit",children:"Search"})]})}),Object(u.jsx)("div",{className:"container",children:c.map((function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e.urls.regular,className:"card-img",alt:""}),Object(u.jsx)("div",{className:"card-content",children:Object(u.jsx)("div",{className:"card-title",children:e.alt_description})})]},e.id)}))})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[13,1,2]]]);
//# sourceMappingURL=main.447bc605.chunk.js.map