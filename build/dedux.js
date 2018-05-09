!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dedux",[],t):"object"==typeof exports?exports.dedux=t():e.dedux=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e,t){if(void 0===e)return[];var n=[];return function e(t,n,i,u){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(""!==n&&(o+=(o?"_":"")+n.toUpperCase()),o===t||o.endsWith("_"+t))u(o);else{if("object"!==(void 0===i?"undefined":r(i))||Array.isArray(i))return;var a=!0,c=!1,f=void 0;try{for(var l,s=Object.keys(i)[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var v=l.value;e(t,v,i[v],u,o)}}catch(e){c=!0,f=e}finally{try{!a&&s.return&&s.return()}finally{if(c)throw f}}}}(e,"",t,function(e){return n.push(e)}),n}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function e(t,n,i){if(0===t.length)return i(n);if("object"!==(void 0===n?"undefined":r(n)))return n;var u=Object.assign({},n),o=!0,a=!1,c=void 0;try{for(var f,l=Object.keys(n)[Symbol.iterator]();!(o=(f=l.next()).done);o=!0){var s=f.value;s.toUpperCase()===t[0]&&(u[s]=e(t.slice(1),n[s],i))}}catch(e){a=!0,c=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw c}}return u}},function(e,t,n){"use strict";e.exports=function(e){var t=void 0,n=void 0,r=!0,i=!1,u=void 0;try{for(var o,a=["SET_ALL","SET_IN","SET","INCREMENT_ALL","INCREMENT_IN","INCREMENT","DECREMENT_ALL","DECREMENT_IN","DECREMENT","TOGGLE_ALL","TOGGLE_IN","TOGGLE","ADD_TO","ADD","INSERT_IN","INSERT","REMOVE_ALL","REMOVE_FROM","REMOVE","MERGE_ALL","MERGE_IN","MERGE"][Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var c=o.value;if(e.startsWith(c))return{verb:t=c,path:n=e.replace(t,"").replace("_","")}}}catch(e){i=!0,u=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return{verb:t,path:n}}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,u=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,u=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var l=n(2),s=n(1),v=n(0),d=function(e,t){var n=v(e,t);if(0===n.length)throw new Error("Path not found.");if(n.length>1)throw new Error("Path not unique, try a longer path specification.");return n[0].split("_")};function E(e,t,n,r){if(!t)throw new Error("All actions need to have a configuration object.");!function(e,t){if(e){var n=v(e,t);if(0===n.length)throw new Error("Path: "+e+" could not be found.");if(n.length>1)throw new Error("Multiple valid paths found. Use a longer path to ensure a unique selection.")}}(t.path,r),function(e,t,n){if(t){if(n.includes("value")&&!("value"in t))throw new Error(e+" should include a value property in the payload.");if(n.includes("in")&&void 0===t.index&&void 0===t.key&&void 0===t.where)throw new Error(e+" should include either a key, index, or where property in the payload.");if(n.includes("index"))throw new Error(e+" should include either a key or index property in the payload.")}}(e,t,n);var i=t.path;return delete t.path,i?Object.assign({type:e+"_"+i},t):Object.assign({type:e},t)}var y=function(){function e(t){a(this,e),this.closedState=t}return r(e,[{key:"SET_ALL",value:function(e){return E("SET_ALL",e,["value"],this.closedState.state)}},{key:"SET_IN",value:function(e){return E("SET_IN",e,["value","in"],this.closedState.state)}},{key:"SET",value:function(e){return E("SET",e,["value"],this.closedState.state)}},{key:"INCREMENT_ALL",value:function(e){return E("INCREMENT_ALL",e,["value"],this.closedState.state)}},{key:"INCREMENT_IN",value:function(e){return E("INCREMENT_IN",e,["value","in"],this.closedState.state)}},{key:"INCREMENT",value:function(e){return E("INCREMENT",e,["value"],this.closedState.state)}},{key:"DECREMENT_ALL",value:function(e){return E("DECREMENT_ALL",e,["value"],this.closedState.state)}},{key:"DECREMENT_IN",value:function(e){return E("DECREMENT_IN",e,["value","in"],this.closedState.state)}},{key:"DECREMENT",value:function(e){return E("DECREMENT",e,["value"],this.closedState.state)}},{key:"TOGGLE_ALL",value:function(e){return E("TOGGLE_ALL",e,["value"],this.closedState.state)}},{key:"TOGGLE_IN",value:function(e){return E("TOGGLE_IN",e,["value","in"],this.closedState.state)}},{key:"TOGGLE",value:function(e){return E("TOGGLE",e,["value"],this.closedState.state)}},{key:"ADD_TO",value:function(e){return E("ADD_TO",e,["value"],this.closedState.state)}},{key:"ADD",value:function(e){return E("ADD",e,["value"],this.closedState.state)}},{key:"INSERT_IN",value:function(e){return E("INSERT_IN",e,["value","in"],this.closedState.state)}},{key:"INSERT",value:function(e){return E("INSERT",e,["value"],this.closedState.state)}},{key:"REMOVE_ALL",value:function(e){return E("REMOVE_ALL",e,["value"],this.closedState.state)}},{key:"REMOVE_FROM",value:function(e){return E("REMOVE_FROM",e,["value"],this.closedState.state)}},{key:"REMOVE",value:function(e){return E("REMOVE",e,["value"],this.closedState.state)}},{key:"MERGE_ALL",value:function(e){return E("MERGE_ALL",e,["value"],this.closedState.state)}},{key:"MERGE_IN",value:function(e){return E("MERGE_IN",e,["value","in"],this.closedState.state)}},{key:"MERGE",value:function(e){return E("MERGE",e,["value"],this.closedState.state)}}]),e}(),h=new function e(){var t=this;a(this,e),this.closedState={},this.deduce=function(e){return function(n,r){var a=e(n,r);return t.closedState.state=a,a!==n?a:"number"==typeof n?(t.closedState.state=function(e,t){switch(t.type){case"INCREMENT":return e+t.value;case"DECREMENT":return e-t.value;case"SET":return t.value;default:return e}}(n,r),t.closedState.state):"boolean"==typeof n?(t.closedState.state=function(e,t){switch(t.type){case"SET":return t.value;case"TOGGLE":return!e;default:return e}}(n,r),t.closedState.state):"string"==typeof n?(t.closedState.state=function(e,t){switch(t.type){case"SET":return t.value;default:return e}}(n,r),t.closedState.state):Array.isArray(n)?(t.closedState.state=function(e,t){switch(t.type){case"ADD":return[].concat(f(e),[t.value]);case"CONCAT":return[].concat(f(e),f(t.value));case"REMOVE_ALL":return[];case"REMOVE_IN":if(void 0!==t.where)return e.filter(function(e){return!t.where(e)});if(void 0===t.index&&(t.index=e.length-1),void 0!==t.index)return[].concat(f(e.slice(0,t.index)),f(e.slice(t.index+1)));case"SET_IN":if(void 0!==t.index)return[].concat(f(e.slice(0,t.index)),[t.value],f(e.slice(t.index+1)));if(void 0!==t.where)return e.map(function(e){return t.where(e)?t.value:e});case"SET_ALL":return e.map(function(e){return t.value});case"TOGGLE_IN":if(void 0!==t.index)return[].concat(f(e.slice(0,t.index)),[!e[t.index]],f(e.slice(t.index+1)));if(void 0!==t.where)return e.map(function(e){return t.where(e)?!e:e});case"TOGGLE_ALL":return e.map(function(e){return!e});case"INCREMENT_IN":if(void 0!==t.index)return[].concat(f(e.slice(0,t.index)),[e[t.index]+t.value],f(e.slice(t.index+1)));if(void 0!==t.where)return e.map(function(e){return t.where(e)?e+t.value:e});case"DECREMENT_IN":if(void 0!==t.index)return[].concat(f(e.slice(0,t.index)),[e[t.index]-t.value],f(e.slice(t.index+1)));if(void 0!==t.where)return e.map(function(e){return t.where(e)?e-t.value:e});case"INSERT":return[].concat(f(e.slice(0,t.index)),[t.value],f(e.slice(t.index)));case"INCREMENT_ALL":return e.map(function(e){return e+t.value});case"DECREMENT_ALL":return e.map(function(e){return e-t.value});case"MERGE_ALL":return e.map(function(e){return Object.assign(o({},e),t.value)});case"MERGE_IN":if(void 0!==t.index)return[].concat(f(e.slice(0,t.index)),[Object.assign(o({},e[t.index]),t.value)],f(e.slice(t.index+1)));if(void 0!==t.where)return e.map(function(e){return t.where(e)?Object.assign(o({},e),t.value):e});default:return e}}(n,r),t.closedState.state):"object"===(void 0===n?"undefined":i(n))?(t.closedState.state=function(e,t){var n=l(t.type),r=n.verb,a=n.path,v={};if(a){if("SET"===r)return void 0!==t.key?s(d(a,e),e,function(e){return o({},e,c({},t.key,t.value))}):void 0!==t.where?s(d(a,e),e,function(e){var n={};return Object.entries(e).forEach(function(e){var r=u(e,2),i=r[0],o=r[1];t.where(i,o)?n[i]=t.value:n[i]=o}),n}):s(d(a,e),e,function(){return t.value});if("INCREMENT_ALL"===r)return s(d(a,e),e,function(e){return e.map(function(e){return e+t.value})});if("INCREMENT_IN"===r){if(void 0!==t.index)return s(d(a,e),e,function(e){return[].concat(f(e.slice(0,t.index)),[e[t.index]+t.value],f(e.slice(t.index+1)))});if(void 0!==t.where)return s(d(a,e),e,function(e){return e.map(function(e){return t.where(e)?e+t.value:e})})}if("DECREMENT_ALL"===r)return s(d(a,e),e,function(e){return e.map(function(e){return e-t.value})});if("DECREMENT_IN"===r){if(void 0!==t.index)return s(d(a,e),e,function(e){return[].concat(f(e.slice(0,t.index)),[e[t.index]-t.value],f(e.slice(t.index+1)))});if(void 0!==t.where)return s(d(a,e),e,function(e){return e.map(function(e){return t.where(e)?e-t.value:e})})}if("INCREMENT"===r)return s(d(a,e),e,function(e){return e+t.value});if("TOGGLE"===r)return s(d(a,e),e,function(e){return!e});if("TOGGLE_IN"===r){if(void 0!==t.index)return s(d(a,e),e,function(e){return[].concat(f(e.slice(0,t.index)),[!e[t.index]],f(e.slice(t.index+1)))});if(void 0!==t.key)return s(d(a,e),e,function(e){return o({},e,c({},t.key,!e[t.key]))});if(void 0!==t.where)return s(d(a,e),e,function(e){if(Array.isArray(e))return e.map(function(e){return t.where(e)?!e:e});var n={};return Object.entries(e).forEach(function(e){var r=u(e,2),i=r[0],o=r[1];t.where(i,o)?n[i]=!o:n[i]=o}),n})}if("MERGE_IN"===r)return s(d(a,e),e,function(e){if(Array.isArray(e)){if(t.index){var n=[].concat(f(e));return n[t.index]=Object.assign(o({},n[t.index]),t.value),n}if(t.where)return e.map(function(e){return t.where(e)?"object"===(void 0===e?"undefined":i(e))?Object.assign(o({},e),t.value):t.value:e})}if("object"===(void 0===e?"undefined":i(e))){if(void 0!==t.key&&"object"===i(t.value))return o({},e,c({},t.key,Object.assign(o({},e[t.key]),t.value)));if(void 0!==t.key)return o({},e,c({},t.key,t.value));if(void 0!==t.where){var r={};return Object.entries(e).forEach(function(e){var n=u(e,2),i=n[0],a=n[1];t.where(i,a)?r[i]=Object.assign(o({},a),t.value):r[i]=o({},a)}),r}}});if("MERGE_ALL"===r)return s(d(a,e),e,function(e){var n={};return Object.entries(e).forEach(function(e){var r=u(e,2),i=r[0],a=r[1];n[i]=Object.assign(o({},a),t.value)}),n});if("ADD_TO"===r)return s(d(a,e),e,function(e){return[].concat(f(e),[t.value])});if("INSERT_IN"===r)return s(d(a,e),e,function(e){return[].concat(f(e.slice(0,t.index)),[t.value],f(e.slice(t.index)))});if("REMOVE_ALL"===r)return s(d(a,e),e,function(e){return[]});if("REMOVE_FROM"===r){if(void 0!==t.index)return s(d(a,e),e,function(e){return[].concat(f(e.slice(0,t.index)),f(e.slice(t.index+1)))});if(void 0!==t.where)return s(d(a,e),e,function(e){return e.filter(function(e){return!t.where(e)})})}if("SET_ALL"===r)return s(d(a,e),e,function(e){return e.map(function(e){return t.value})});if("SET_IN"===r){if(void 0!==t.index)return s(d(a,e),e,function(e){return[].concat(f(e.slice(0,t.index)),[t.value],f(e.slice(t.index+1)))});if(void 0!==t.where)return s(d(a,e),e,function(e){return e.map(function(e){return t.where(e)?t.value:e})})}if("TOGGLE_ALL"===r)return s(d(a,e),e,function(e){return e.map(function(e){return!e})})}switch(t.type){case"SET_ALL":return Object.keys(e).forEach(function(e){v[e]=t.value}),v;case"SET_IN":if(void 0!==t.key)return o({},e,c({},t.key,t.value));if(void 0!==t.where)return Object.entries(e).forEach(function(e){var n=u(e,2),r=n[0],i=n[1];t.where(r,i)?v[r]=t.value:v[r]=i}),v;case"MERGE_IN":if(t.value)return Object.entries(e).forEach(function(e){var n=u(e,2),r=n[0],i=n[1];v[r]=o({},i,t.value)}),v;case"MERGE_ALL":var E={};return Object.entries(e).forEach(function(e){var n=u(e,2),r=n[0],i=n[1];E[r]=Object.assign(o({},i),t.value)}),E;case"MERGE":return Object.assign(o({},e),t.value);case"REMOVE_ALL":return{};case"REMOVE_IN":if(void 0!==t.key)return object=o({},e),delete object[t.key],object;if(void 0!==t.where){var y={};return Object.entries(e).forEach(function(e){var n=u(e,2),r=n[0],i=n[1];t.where(r,i)||(y[r]=i)}),y}case"INCREMENT_IN":return o({},e,c({},t.key,e[t.key]+t.value));case"DECREMENT_IN":return o({},e,c({},t.key,e[t.key]-t.value));default:return e}}(n,r),t.closedState.state):void 0}},this.actions=new y(this.closedState)};e.exports={deduce:h.deduce,D:h.actions}}])});
//# sourceMappingURL=dedux.js.map