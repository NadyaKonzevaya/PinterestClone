!function(){let e;function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},i=n.parcelRequire6121;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire6121=i);var s=i.register;s("iE7OH",function(e,n){t(e.exports,"register",function(){return a},function(e){return a=e});var a,o=new Map;a=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),s("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,o={};a=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),i("iE7OH").register(i("aNJCr").getBundleURL("EVgbq"),JSON.parse('["EVgbq","index.6b876861.js","410VS","icons.0005281c.svg"]'));var r={};r=i("aNJCr").getBundleURL("EVgbq")+"icons.0005281c.svg";var d=function({id:e,alt_description:t,urls:{regular:n},user:{profile_image:{small:a,name:o}}}){var i;return`
  <li class="thumb" id=${e}>
    <div class="img_wrap">
      <img src=${n} alt=${t} class="img"/>
      <div class="overlay"></div>
      <button type="button" class="img__btn" data-action-menu>
      <svg class="icon" aria-label="Additional functions">
        <use class="icon-dots" href="${(i=r)&&i.__esModule?i.default:i}#dots"></use>
      </svg>
      </button>
     <p class="saved is-hidden">SAVED</p>
    </div>
    <div class="avatar__wrap">
      <img src=${a} alt=${o} class="avatar" />
      <p class="description">${t[0].toUpperCase()+t.slice(1)}</p>
    </div>
    
  </li>
  
`},c=function(e){return e.map(d).join("")};let l=async()=>({photos:await fetch("https://api.unsplash.com/photos/random/?client_id=5HxesvmDSHyOpCHGFTaK2E_qm_g_xkMj9DZ-KU5QOdQ&count=25").then(e=>e.json())}),u=async()=>{let e=JSON.parse(localStorage.getItem("photos"));if(!e){let{photos:e}=await l();console.log(e),localStorage.setItem("photos",JSON.stringify(e))}return e},m={list:document.querySelector(".list"),filter:document.querySelector(".filter"),chooseBtn:document.querySelector("[data-action-choose]"),boardContainer:document.querySelector(".choose__board"),homeBtn:document.querySelector("[data-action-home]")};u();let p=JSON.parse(localStorage.getItem("photos"))||[];m.list.innerHTML=c(p),m.filter.addEventListener("input",function(e){let{currentTarget:t}=e,n=t.value.toLowerCase(),a=p.filter(({alt_description:e})=>e.toLowerCase().includes(n));m.list.innerHTML=c(a)}),m.chooseBtn.addEventListener("click",function(){m.boardContainer.classList.toggle("is-hidden")}),m.boardContainer.addEventListener("click",function(e){let t=e.target.id,n=JSON.parse(localStorage.getItem(`board-${t}`));m.list.innerHTML=n?c(n):'<p class="no-pins">You have no saved pins here :(</p>',console.log(n)}),window.addEventListener("click",function(e){e.target.matches("[data-action-choose], .choose__board, .board__list, .board__item, .choose-btn")||m.boardContainer.classList.contains("is-hidden")||m.boardContainer.classList.add("is-hidden")}),m.homeBtn.addEventListener("click",function(){m.list.innerHTML=c(p)});let f={modalComplain:document.querySelector(".modal__complain"),modal:document.querySelector(".modal"),modalBoard:document.querySelector(".modal__board"),backdrop:document.querySelector(".backdrop"),cancelComplainBtn:document.querySelector("[data-action-cancel]"),furtherComplainBtn:document.querySelector("[data-action-further]"),inputs:document.querySelectorAll("[type='radio']"),boards:document.querySelectorAll("[data-action-board]"),addToBoardBtn:document.querySelector("[data-action-add]"),hideBtn:document.querySelector("[data-action-hide]"),complainBtn:document.querySelector("[data-action-complain]"),savedToasts:document.querySelectorAll(".saved")};function h(){f.backdrop.classList.add("is-hidden"),g()}function g(){f.inputs.forEach(e=>{e.checked&&(e.checked=!1)})}m.list.addEventListener("click",function(t){if(!t.target.matches("[data-action-menu], .icon, .icon-dots"))return;f.modalBoard.classList.contains("is-hidden")||f.modalBoard.classList.add("is-hidden"),e=t.target.closest(".thumb").id;let n=t.target.closest(".img_wrap"),a=n.getBoundingClientRect();if(f.modal.style.top=a.bottom+"px",f.modal.style.left=a.left+"px",n.classList.contains("lastOpen"))f.modal.classList.add("is-hidden"),n.classList.remove("lastOpen");else{let e=document.querySelector(".lastOpen");e&&(e.classList.remove("lastOpen"),f.modal.classList.add("is-hidden")),f.modal.classList.remove("is-hidden"),n.classList.add("lastOpen")}}),f.addToBoardBtn.addEventListener("click",function(e){e.target.closest(".img__menu").querySelector(".modal__board").classList.toggle("is-hidden")}),f.modalBoard.addEventListener("click",function(t){if(!t.target.hasAttribute("data-action-board"))return;console.log(e);let n=t.target.id,a=[...f.savedToasts].filter(t=>t.closest(".thumb").id===e);[toastNeeded]=a,toastNeeded.classList.remove("is-hidden"),toastNeeded.textContent=`saved to ${n}`;let o=p.reduce((t,n)=>{let a=t.some(({id:e})=>e===n.id);return n.id!==e||a?t:[...t,n]},JSON.parse(localStorage.getItem(`${n}`))||[]);localStorage.setItem(`${n}`,JSON.stringify(o))}),f.hideBtn.addEventListener("click",function(t){let n=p.filter(t=>t.id!==e);p.splice(0,p.length,...n),localStorage.setItem("photos",JSON.stringify(n)),m.list.innerHTML=c(n),f.modal.classList.add("is-hidden")}),f.complainBtn.addEventListener("click",function(e){f.backdrop.classList.remove("is-hidden"),f.modal.classList.add("is-hidden")}),window.addEventListener("click",function(e){e.target.matches("[data-action-menu], .icon, .icon-dots, .img__menu, .menu__btn, .menu__item, .menu__list")||f.modal.classList.add("is-hidden")}),f.backdrop.addEventListener("click",function(e){e.currentTarget===e.target&&(f.backdrop.classList.add("is-hidden"),g())}),f.cancelComplainBtn.addEventListener("click",h),f.furtherComplainBtn.addEventListener("click",h)}();
//# sourceMappingURL=index.6b876861.js.map
