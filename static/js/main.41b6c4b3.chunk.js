(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{13:function(e,t,l){},15:function(e,t,l){"use strict";l.r(t);var a=l(1),s=l.n(a),i=l(6),u=l.n(i),c=l(5),r=(l(13),l(0));var n=function(e){var t=e.result,l=e.calculations,a=t.toString().length>18?{fontSize:"1.6rem"}:{fontSize:"1.8rem"};return Object(r.jsxs)("div",{className:"display",children:[Object(r.jsx)("div",{children:l}),Object(r.jsx)("div",{id:"display",style:a,children:t})]})},_=l(7),o=[{id:"clear",value:"AC"},{id:"divide",value:"/"},{id:"multiply",value:"x"},{id:"seven",value:"7"},{id:"eight",value:"8"},{id:"nine",value:"9"},{id:"subtract",value:"-"},{id:"four",value:"4"},{id:"five",value:"5"},{id:"six",value:"6"},{id:"add",value:"+"},{id:"one",value:"1"},{id:"two",value:"2"},{id:"three",value:"3"},{id:"equals",value:"="},{id:"zero",value:"0"},{id:"decimal",value:"."}];var d=function(e){var t=e.setCalculations,l=e.calculations,a=e.result,s=e.setResult;return Object(r.jsx)("div",{className:"buttonsPad",children:o.map((function(e){return Object(r.jsx)(_.a,{id:e.id,value:e.value,setCalculations:t,calculations:l,result:a,setResult:s},e.id)}))})};var p=function(){var e=Object(a.useState)("0"),t=Object(c.a)(e,2),l=t[0],s=t[1],i=Object(a.useState)("0"),u=Object(c.a)(i,2),_=u[0],o=u[1];return Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)("div",{className:"calculator",children:[Object(r.jsx)(n,{result:_,calculations:l}),Object(r.jsx)(d,{setCalculations:s,calculations:l,result:_,setResult:o})]})})};u.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))},7:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_klemen_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);function Button(_ref){var id=_ref.id,value=_ref.value,setCalculations=_ref.setCalculations,calculations=_ref.calculations,result=_ref.result,setResult=_ref.setResult;function calculatorLogic(caseValue){if("clear"===caseValue||"Backspace"===caseValue)setCalculations("0"),setResult("0");else if("divide"===caseValue||"/"===caseValue)setCalculations((function(e){var t=e.length;return"-"===e.split("")[t-2]&&"/"===e.split("")[t-5]||"-"===e.split("")[t-2]&&"+"===e.split("")[t-5]||"-"===e.split("")[t-2]&&"*"===e.split("")[t-5]?e.slice(0,t-6)+" / ":"/"===e.split("")[t-2]||"*"===e.split("")[t-2]||"-"===e.split("")[t-2]||"+"===e.split("")[t-2]?e.slice(0,t-3)+" / ":e+" / "})),setResult("/");else if("multiply"===caseValue||"*"===caseValue)setCalculations((function(e){var t=e.length;return"-"===e.split("")[t-2]&&"/"===e.split("")[t-5]||"-"===e.split("")[t-2]&&"+"===e.split("")[t-5]||"-"===e.split("")[t-2]&&"*"===e.split("")[t-5]?e.slice(0,t-6)+" * ":"/"===e.split("")[t-2]||"*"===e.split("")[t-2]||"-"===e.split("")[t-2]||"+"===e.split("")[t-2]?e.slice(0,t-3)+" * ":e+" * "})),setResult("*");else if("subtract"===caseValue||"-"===caseValue)setCalculations((function(e){var t=e.length;return"-"===e.split("")[t-2]&&"/"===e.split("")[t-5]||"-"===e.split("")[t-2]&&"+"===e.split("")[t-5]||"-"===e.split("")[t-2]&&"*"===e.split("")[t-5]?e.slice(0,t-6)+" - ":"-"===e.split("")[t-2]?e.slice(0,t-3)+" - ":e+" - "})),setResult("-");else if("add"===caseValue||"+"===caseValue)setCalculations((function(e){var t=e.length;return"-"===e.split("")[t-2]&&"/"===e.split("")[t-5]||"-"===e.split("")[t-2]&&"+"===e.split("")[t-5]||"-"===e.split("")[t-2]&&"*"===e.split("")[t-5]?e.slice(0,t-6)+" + ":"/"===e.split("")[t-2]||"*"===e.split("")[t-2]||"-"===e.split("")[t-2]||"+"===e.split("")[t-2]?e.slice(0,t-3)+" + ":e+" + "})),setResult("+");else if("equals"===caseValue||"Enter"===caseValue){function strip(e){return parseFloat(e.toPrecision(16))}setCalculations(strip(eval(calculations)).toString()),setResult(strip(eval(calculations)).toString())}else if("decimal"===caseValue||"."===caseValue){if(result.includes("."))return;setCalculations((function(e){return e+"."})),setResult((function(e){return e+value}))}else setResult((function(e){return"0"==e||"/"===e||"*"===e||"-"===e||"+"===e?value:e+value})),setCalculations((function(e){return"0"==e?value:e+value}))}function handleClick(){try{calculatorLogic(id)}catch(e){console.log(e),alert("Don't end or start your calculations with an operator... Make sure the calculations ends or starts with a number.")}}function handleKeyDown(e){var t=document.querySelectorAll("button");Object(_home_klemen_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(t).map((function(e){return e.blur()}));if([8,13,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111,190].includes(e.keyCode)){value=","===e.key?".":e.key;try{calculatorLogic(value)}catch(l){console.log(l),setCalculations("0"),setResult("0"),alert("Don't end or start your calculations with an operator... Make sure the calculations ends or starts with a number.")}}}return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return window.addEventListener("keydown",handleKeyDown),function(){window.removeEventListener("keydown",handleKeyDown)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{id:id,className:id,onClick:handleClick,children:value})}__webpack_exports__.a=Button}},[[15,1,2]]]);
//# sourceMappingURL=main.41b6c4b3.chunk.js.map