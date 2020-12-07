(this["webpackJsonpredux-todos-complete"]=this["webpackJsonpredux-todos-complete"]||[]).push([[0],{33:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),c=e(10),i=e.n(c),a=e(19),u=e(2),d=e(4),b="add_todo",l="delete_todo",s="toggle_todo",j="clear_todo",f="set_filter";function p(n){return{type:f,payload:{filter:n}}}var O=e(3);function g(){var n=Object(u.a)(["\n  padding: 5px;\n  background: rgba(255, 255, 255, 1);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  border-radius: 8px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.7);\n\n  &:hover {\n    transform: scale(1.1);\n    color: rgba(10, 50, 60, 1);\n    transition: transform 0.3s;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(u.a)(["\n  padding: 5px;\n  margin-right: 5px;\n  width: 80%;\n  font-size:20px;\n  border: none;\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.8);\n  &:focus {\n    outline: none;\n  }\n"]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n"]);return h=function(){return n},n}var x=O.a.div(h()),m=O.a.input(v()),y=O.a.button(g());function k(){var n=Object(d.b)(),t=Object(o.useState)(""),e=Object(a.a)(t,2),c=e[0],i=e[1];return Object(r.jsxs)(x,{children:[Object(r.jsx)("h1",{children:"Todo List"}),Object(r.jsx)(m,{value:c,onChange:function(n){i(n.target.value)}}),Object(r.jsx)(y,{onClick:function(){""!==c&&(n({type:b,payload:{content:c}}),i(""))},children:"\u65b0\u589e Todo"})]})}var C="all",w="completed",_="uncomplete",E=function(n){return n.visibilityFilter};function T(){var n=Object(u.a)(["\n  color: rgba(255, 0, 0, 0.6);\n\n  &:hover {\n      background: rgba(255, 0, 0, 0.6);\n      color: white;\n    }\n"]);return T=function(){return n},n}function F(){var n=Object(u.a)(["\n  \n  background: white;\n  border: none;\n  border-radius: 8px;\n  padding: 10px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 26px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.6);\n    color: white;\n  }\n\n  ","\n"]);return F=function(){return n},n}function S(){var n=Object(u.a)([""]);return S=function(){return n},n}function D(){var n=Object(u.a)(["\n  font-size: 26px;\n  ","\n"]);return D=function(){return n},n}function L(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n"]);return L=function(){return n},n}var N=O.a.div(L()),z=O.a.div(D(),(function(n){return n.$completed&&"\n    text-decoration:line-through;\n  } \n    "})),I=O.a.div(S()),X=O.a.button(F(),(function(n){return n.$completed&&"\n    color: rgba(0, 200, 0, 1);\n    &:hover {\n    background: rgba(255, 255, 255, 0.6);\n    color: #333;\n  } \n    "})),$=Object(O.a)(X)(T());function B(n){var t=n.todo,e=Object(d.b)();return Object(r.jsxs)(N,{children:[Object(r.jsx)(z,{$completed:!0===t.isComplete,children:t.content}),Object(r.jsxs)(I,{children:[Object(r.jsx)(X,{$completed:!0===t.isComplete,onClick:function(){var n;e((n=t.id,{type:s,payload:{id:n}}))},children:t.isComplete?"\u672a\u5b8c\u6210":"\u5df2\u5b8c\u6210"}),Object(r.jsx)($,{onClick:function(){var n;e((n=t.id,{type:l,payload:{id:n}}))},children:"\u522a\u9664"})]})]})}function J(){return function(n,t){var e=n.todos.todos;switch(t){case C:return e;case w:return e.filter((function(n){return n.isComplete}));case _:return e.filter((function(n){return!n.isComplete}));default:return e}}(Object(d.c)((function(n){return n})),Object(d.c)(E)).map((function(n){return Object(r.jsx)(B,{todo:n},n.id)}))}function P(){var n=Object(u.a)(["\n  color: rgba(255, 100, 100, 1);\n  &:hover {\n    background: rgba(255, 0, 0, 0.6);\n    color: white;\n  }\n"]);return P=function(){return n},n}function R(){var n=Object(u.a)(["\n  color: rgba(10, 20, 200, 0.8);\n  &:hover {\n    background: rgba(10, 20, 200, 0.8);\n    color: white;\n  }\n"]);return R=function(){return n},n}function U(){var n=Object(u.a)(["\n  color: rgba(10, 200, 20, 1);\n   &:hover {\n    background: rgba(10, 200, 20, 0.8);\n    color: white;\n  }\n"]);return U=function(){return n},n}function V(){var n=Object(u.a)(["\n  background: white;\n  border: none;\n  border-radius: 8px;\n  padding: 10px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 26px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.6);\n    color: white;\n  }\n"]);return V=function(){return n},n}function q(){var n=Object(u.a)(["\n  position: fixed;\n  top: 1%;\n  right: 1%;\n"]);return q=function(){return n},n}var A=O.a.div(q()),G=O.a.button(V()),H=Object(O.a)(G)(U()),K=Object(O.a)(G)(R()),M=Object(O.a)(G)(P());function Q(){var n=Object(d.b)();return Object(r.jsxs)(A,{children:[Object(r.jsx)(G,{onClick:function(){n(p(C))},children:"\u5168\u90e8"}),Object(r.jsx)(H,{onClick:function(){n(p(w))},children:"\u5df2\u5b8c\u6210"}),Object(r.jsx)(K,{onClick:function(){n(p(_))},children:"\u672a\u5b8c\u6210"}),Object(r.jsx)(M,{onClick:function(){n({type:j})},children:"\u6e05\u7a7a"})]})}var W=function(){return Object(r.jsxs)("div",{className:"Todo",children:[Object(r.jsx)(k,{}),Object(r.jsx)(J,{}),Object(r.jsx)(Q,{})]})},Y=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,34)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),r(n),o(n),c(n),i(n)}))},Z=e(7),nn=e(20),tn=e(5),en={todos:[]},rn=0;var on=C;var cn=Object(Z.b)({todos:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(tn.a)(Object(tn.a)({},n),{},{todos:[].concat(Object(nn.a)(n.todos),[{id:rn++,content:t.payload.content,isComplete:!1}])});case l:return Object(tn.a)(Object(tn.a)({},n),{},{todos:n.todos.filter((function(n){return n.id!==t.payload.id}))});case s:return Object(tn.a)(Object(tn.a)({},n),{},{todos:n.todos.map((function(n){return n.id!==t.payload.id?n:Object(tn.a)(Object(tn.a)({},n),{},{isComplete:!n.isComplete})}))});case j:return{todos:[]};default:return n}},visibilityFilter:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload.filter;default:return n}}}),an=Object(Z.c)(cn,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(r.jsx)(d.a,{store:an,children:Object(r.jsx)(W,{})}),document.getElementById("root")),Y()}},[[33,1,2]]]);
//# sourceMappingURL=main.27e9c63c.chunk.js.map