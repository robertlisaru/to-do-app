(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{50:function(t,e,n){},52:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(13),i=n.n(o),r=(n(50),n(30)),s=n.n(r),d=n(39),u=n(16),l=(n(52),n(97)),j=n(41),b=n.n(j),h=n(98),f=n(23),p=n.n(f),O="https://todo-backend-hanami.herokuapp.com/",g={headers:{Accept:"application/json","Content-Type":"application/json"}};var x={getAll:function(){return p.a.get(O,g)},create:function(t){return p.a.post(O,t,g)},update:function(t,e){return p.a.patch(t.url,e,g)},remove:function(t){return p.a.delete(t.url,g)}},m=n(2),v=function(t){var e=t.todo,n=t.notifyChange,c=Object(a.useState)(!1),o=Object(u.a)(c,2),i=o[0],r=o[1];return Object(a.useEffect)((function(){var t=setTimeout((function(){r(!1)}),3e3);return function(){return clearTimeout(t)}}),[i]),Object(m.jsx)(h.a,{"data-testid":i?"pulsing-btn-".concat(e.id):"delete-btn-".concat(e.id),onClick:function(){i?x.remove(e).then((function(){return n()})):r(!0)},"aria-label":"delete",className:i?"pulsing-btn":"delete-btn",children:Object(m.jsx)(b.a,{})})},C=function(t){var e=t.todo,n=t.notifyChange;return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"todo-flex-container",children:[Object(m.jsx)(l.a,{className:"todo-checkbox",inputProps:{"data-testid":"todo-checkbox"},checked:e.completed,onChange:function(t){x.update(e,{completed:t.target.checked}).then((function(){return n()}))}}),Object(m.jsx)("div",{className:"todo-label","data-testid":"todo-label",children:e.completed?Object(m.jsx)("s",{children:e.title}):e.title}),Object(m.jsx)(v,{todo:e,notifyChange:n})]})})},y=function(t){var e=t.todos,n=t.notifyChange;return Object(m.jsx)("div",{className:"todos-list-wrapper",children:Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)(C,{todo:t,notifyChange:n},t.id)}))})})},k=function(t){var e=t.notifyChange,n=Object(a.useState)(""),c=Object(u.a)(n,2),o=c[0],i=c[1],r=function(){x.create({title:o}).then((function(){i(""),e()}))};return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{children:"Todos"}),Object(m.jsx)("input",{onKeyDown:function(t){"Enter"===t.key&&r()},"data-testid":"new-todo-input",placeholder:"What needs to be done",value:o,onChange:function(t){i(t.target.value)}}),Object(m.jsx)("span",{className:"add-btn","data-testid":"add-btn",onClick:r,children:"Add"})]})},N=n(99);var w=function(){var t=Object(a.useState)({data:[],isLoading:!0}),e=Object(u.a)(t,2),n=e[0],c=e[1],o=function(){var t=Object(d.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getAll();case 2:e=t.sent,c({data:e.data,isLoading:!1});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),Object(m.jsx)("div",{className:"app",children:n.isLoading?Object(m.jsx)(N.a,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{notifyChange:o}),Object(m.jsx)(y,{todos:n.data,notifyChange:o})]})})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),T()}},[[81,1,2]]]);
//# sourceMappingURL=main.0a48bbff.chunk.js.map