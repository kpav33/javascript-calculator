(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{11:function(e,a,l){"use strict";l.r(a);var c=l(1),t=l.n(c),i=l(4),s=l.n(i),u=l(3),n=(l(9),l(0));var d=function(e){var a=e.result,l=e.calculations;return Object(n.jsxs)("div",{className:"display",id:"display",children:[Object(n.jsx)("p",{children:l}),Object(n.jsx)("p",{children:a})]})};var o=function(e){var a=e.id,l=e.value;return Object(n.jsx)("button",{id:a,className:a,onClick:function(){"clear"===a?console.log("CLEAR"):"divide"===a?console.log("DIVIDE"):"multiply"===a?console.log("MULTIPLY"):"subtract"===a?console.log("SUBTRACT"):"add"===a?console.log("ADD"):"equals"===a?console.log("EQUALS"):"decimal"===a?console.log("DECMIAL"):console.log(a)},children:l})},r=[{id:"clear",value:"AC"},{id:"divide",value:"/"},{id:"multiply",value:"x"},{id:"seven",value:7},{id:"eight",value:8},{id:"nine",value:9},{id:"subtract",value:"-"},{id:"four",value:4},{id:"five",value:5},{id:"six",value:6},{id:"add",value:"+"},{id:"one",value:1},{id:"two",value:2},{id:"three",value:3},{id:"equals",value:"="},{id:"zero",value:0},{id:"decimal",value:"."}];var v=function(){return Object(n.jsx)("div",{className:"buttonsPad",children:r.map((function(e){return Object(n.jsx)(o,{id:e.id,value:e.value},e.id)}))})};var j=function(){var e=Object(c.useState)("test"),a=Object(u.a)(e,2),l=a[0],t=(a[1],Object(c.useState)(0)),i=Object(u.a)(t,2),s=i[0];return i[1],Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)("div",{className:"calculator",children:[Object(n.jsx)(d,{result:s,calculations:l}),Object(n.jsx)(v,{})]})})};s.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root"))},9:function(e,a,l){}},[[11,1,2]]]);
//# sourceMappingURL=main.b8f93a43.chunk.js.map