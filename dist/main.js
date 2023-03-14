(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),c=t(645),i=t.n(c)()(o());i.push([n.id,":root {\n  --grey-color: #535b59;\n  --dark-green: #53744c;\n  --light-green: #73ab5b;\n}\n\nbody {\n  height: 100vh;\n}\n\n.maincontainer {\n  background-color: var(--grey-color);\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr;\n  height: 100%;\n  width: 100%;\n}\n\n.navigation {\n  background-color: var(--dark-green);\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  display: grid;\n  grid-template-rows: 1fr 8fr;\n  color: white;\n}\n\n.option {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-size: 18px;\n  font-weight: normal;\n}\n\n.option img {\n  height: 25px;\n  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(212deg)\n    brightness(109%) contrast(102%);\n}\n\n.option:hover {\n  filter: invert(76%) sepia(4%) saturate(23%) hue-rotate(314deg)\n    brightness(113%) contrast(90%);\n  cursor: pointer;\n}\n\n.projects {\n  display: grid;\n  grid-template-rows: 40px repeat(15, 1fr);\n  grid-template-columns: 1fr;\n  justify-items: center;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.project-window-container {\n  position: fixed;\n  top: 20%;\n  left: 35%;\n  width: 40vw;\n  height: auto;\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n  border: 4px solid;\n  border-color: var(--light-green);\n}\n\n.project-button-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n  gap: 10px;\n  padding: 10px;\n}\n\n.project-button-container button {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 18px;\n  border: none;\n}\n\n.project {\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.project:hover {\n  color: lightgray;\n  cursor: pointer;\n}\n\n.add,\n.add-button {\n  background-color: rgb(0, 171, 102);\n  color: white;\n}\n\n.add:hover {\n  background-color: green;\n  cursor: pointer;\n}\n\n.cancel,\n.cancel-button {\n  background-color: #f44336;\n  color: white;\n}\n\n.cancel:hover {\n  background-color: red;\n  cursor: pointer;\n}\n\n.active {\n  font-weight: 900;\n}\n\n.project-window-container input {\n  width: 98%;\n}\n\n.project-window-container div {\n  font-size: 24px;\n}\n\n.todo-content {\n  display: grid;\n  grid-template-rows: 10vh 1fr;\n  grid-column-start: 2;\n}\n\n.project-name-container {\n  align-self: center;\n  margin-left: 10px;\n}\n\n.project-title {\n  color: white;\n  font-size: 40px;\n  margin-bottom: 10px;\n}\n\n.proj-description {\n  color: white;\n}\n\n.todo-items {\n  background-color: var(--grey-color);\n}\n\n.add-circle {\n  border: 3px solid #73ab5b;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  color: white;\n  margin-left: 10px;\n}\n\n.add-circle:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\n.item {\n  background-color: white;\n  height: 100px;\n  border-radius: 30px;\n  margin: 10px;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  align-items: center;\n  gap: 15px;\n  outline: 3px solid;\n  outline-color: var(--dark-green);\n}\n\n.item:hover {\n  transform: scale(1.01);\n}\n\n.task-input {\n  margin-left: 30px;\n  height: 30%;\n  font-size: 30px;\n}\n\n.date-input {\n  height: 30%;\n  font-size: 18px;\n}\n\n.time-input {\n  height: 30%;\n}\n\n.cancel-button,\n.add-button {\n  border-radius: 10px;\n  height: 30%;\n  border: none;\n  cursor: pointer;\n  font-size: 24px;\n}\n\n.cancel-button {\n  margin-right: 10px;\n}\n",""]);const a=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,c){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var c={},i=[],a=0;a<n.length;a++){var d=n[a],s=r.base?d[0]+r.base:d[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var c=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<c.length;i++){var a=t(c[i]);e[a].references--}for(var d=r(n,o),s=0;s<c.length;s++){var l=t(c[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}c=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={id:r,exports:{}};return n[r](c,c.exports,t),c.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),c=t(569),i=t.n(c),a=t(565),d=t.n(a),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};function h(n,e,t){!function(){const n=document.querySelectorAll(".project");for(let e=0;e<n.length;e++)n[e].className="project"}();const r=document.createElement("div");r.classList.add("project"),r.classList.add("active"),r.id=t,r.innerHTML=e,n.appendChild(r)}function g(){const n=document.querySelector(".todo-items"),e=document.createElement("div");e.classList.add("item");const t=document.createElement("input");t.classList.add("task-input"),t.type="text",t.setAttribute("placeholder","Default Task"),e.appendChild(t);const r=document.createElement("input");r.classList.add("date-input"),r.type="date",e.appendChild(r);const o=document.createElement("input");o.classList.add("time-input"),o.type="time",e.appendChild(o);const c=document.createElement("button");c.classList.add("add-button"),c.textContent="Add",e.appendChild(c);const i=document.createElement("button");i.classList.add("cancel-button"),i.textContent="Cancel",e.appendChild(i),n.appendChild(e)}function v(n,e){const t=document.querySelector(".project-title"),r=document.querySelector(".proj-description");t.textContent=n,r.textContent=e;const o=document.querySelector(".todo-items");for(;o.firstChild;)o.removeChild(o.lastChild);!function(n){const e=document.createElement("div");e.classList.add("add-circle"),e.textContent="+",n.appendChild(e)}(o),g()}function y(){document.querySelector(".add-circle").addEventListener("click",(()=>{g()}))}function b(n,e,t){this.projName=n,this.projDescription=e,this.id=t,this.toDoItems=[]}f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const x=document.querySelector("#create-proj"),j=[];x.addEventListener("click",(()=>{null==document.querySelector(".project-window-container")&&function(){const n=document.querySelector(".maincontainer"),e=document.createElement("div");e.classList.add("project-window-container");let t=document.createElement("div");t.classList.add("proj-label"),t.textContent="Project Name";let r=document.createElement("input");r.classList.add("project-name"),e.appendChild(t),e.appendChild(r),t=document.createElement("div"),t.textContent="Project Description";let o=document.createElement("input");o.classList.add("project-description"),e.appendChild(t),e.appendChild(o);const c=document.createElement("div");c.classList.add("project-button-container");const i=document.createElement("button");i.classList.add("add"),i.textContent="Add Project";const a=document.createElement("button");a.textContent="Cancel",a.classList.add("cancel"),c.appendChild(i),c.appendChild(a),e.appendChild(c),n.appendChild(e)}();const n=document.querySelector(".project-window-container"),e=n.querySelector(".add"),t=n.querySelector(".cancel");e.addEventListener("click",(()=>{if(function(){const n=document.querySelector(".project-name");return""!=n.value||(n.style.backgroundColor="#FFDCD1",n.setAttribute("placeholder","Please enter a project name"),!1)}()){const e=document.querySelector(".project-name"),t=document.querySelector(".project-description");let r=new b(e.value,t.value,j.length);j.push(r),n.remove(),v(e.value,t.value),function(n){const e=document.querySelector(".projects");!function(n){for(;n.childNodes.length>2;)n.removeChild(n.lastChild)}(e),function(n,e){for(let t=0;t<e.length;t++)h(n,e[t].projName,e[t].id)}(e,n)}(j),function(n){const e=document.querySelectorAll(".project");e.forEach((t=>t.addEventListener("click",(()=>{for(let r=0;r<e.length;r++)r==n[t.id].id?e[r].className="project active":e[r].className="project";v(n[t.id].projName,n[t.id].projDescription),y()}))))}(j),y()}})),t.addEventListener("click",(()=>n.remove()))})),document.querySelector(".add-circle").addEventListener("click",(()=>{g()})),document.querySelector(".option").addEventListener("click",(()=>{v("Home",""),y()}))})()})();