!function(){function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequire6121;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequire6121=i);var o=i.register;o("iE7OH",function(e,n){t(e.exports,"register",function(){return a},function(t){return a=t});var a,i=new Map;a=function(t,e){for(var n=0;n<e.length-1;n+=2)i.set(e[n],{baseUrl:t,path:e[n+1]})}}),o("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return a},function(t){return a=t});var a,i={};a=function(t){var e=i[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[t]=e),e}}),i("iE7OH").register(i("aNJCr").getBundleURL("EVgbq"),JSON.parse('["EVgbq","index.f351046b.js","410VS","icons.0005281c.svg"]'));var s={};s=i("aNJCr").getBundleURL("EVgbq")+"icons.0005281c.svg";var u=function({id:t,alt_description:e,urls:{regular:n},user:{profile_image:{small:a,name:i}}}){var o;return`
  <li class="thumb">
    <div class="img_wrap">
      <img src=${n} alt=${e} class="img"/>
      <div class="overlay"></div>
      <button type="button" class="img__btn" data-action-menu>
      <svg class="icon" aria-label="Additional functions">
        <use class="icon-dots" href="${(o=s)&&o.__esModule?o.default:o}#dots"></use>
      </svg>
      </button>
      <div class="img__menu modal is-hidden" id=${t}>
        <ul class="menu__list">
            <li class="menu__item">
                <button type="button" class="menu__btn" data-action-add>\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43D}\u{430} \u{434}\u{43E}\u{441}\u{43A}\u{443}</button></li>
            <li class="menu__item">
                <button type="button" class="menu__btn" data-action-hide>\u{421}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43F}\u{438}\u{43D} \u{441}\u{43E} \u{441}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{44B}</button></li>
            <li class="menu__item">
                <button type="button" class="menu__btn" data-action-complain>\u{41F}\u{43E}\u{436}\u{430}\u{43B}\u{43E}\u{432}\u{430}\u{442}\u{44C}\u{441}\u{44F}</button></li>
            </ul>
        <div class="img__menu modal__board is-hidden">
            <ul class="menu__list">
                <li class="menu__item">
                <button type="button" class="menu__btn" id="board-1" data-action-board>\u{414}\u{43E}\u{441}\u{43A}\u{430} 1</button></li>
                <li class="menu__item">
                <button type="button" class="menu__btn" id="board-2" data-action-board>\u{414}\u{43E}\u{441}\u{43A}\u{430} 2</button></li>
                <li class="menu__item">
                <button type="button" class="menu__btn" id="board-3" data-action-board>\u{414}\u{43E}\u{441}\u{43A}\u{430} 3</button></li>
            </ul>
        </div>
      </div>
    </div>
    <div class="avatar__wrap">
      <img src=${a} alt=${i} class="avatar" />
      <p class="description">${e[0].toUpperCase()+e.slice(1)}</p>
    </div>
    
  </li>
  
`},r=function(t){return t.map(u).join("")};let c=async()=>({photos:await fetch("https://api.unsplash.com/photos/random/?client_id=5HxesvmDSHyOpCHGFTaK2E_qm_g_xkMj9DZ-KU5QOdQ&count=25").then(t=>t.json())}),l=async()=>{let t=JSON.parse(localStorage.getItem("photos"));if(!t){let{photos:t}=await c();console.log(t),localStorage.setItem("photos",JSON.stringify(t))}return t},d={list:document.querySelector(".list"),filter:document.querySelector(".filter"),chooseBtn:document.querySelector("[data-action-choose]"),boardContainer:document.querySelector(".choose__board")};l();let m=JSON.parse(localStorage.getItem("photos"))||[];d.list.innerHTML=r(m),d.filter.addEventListener("input",function(t){let{currentTarget:e}=t,n=e.value.toLowerCase(),a=m.filter(({alt_description:t})=>t.toLowerCase().includes(n));d.list.innerHTML=r(a)}),d.chooseBtn.addEventListener("click",function(){d.boardContainer.classList.toggle("is-hidden")}),d.boardContainer.addEventListener("click",function(t){let e=t.target.id;console.log(JSON.parse(localStorage.getItem(`board-${e}`)))});let _={menus:document.querySelectorAll(".img__menu"),modalComplain:document.querySelector(".modal__complain"),backdrop:document.querySelector(".backdrop"),cancelComplainBtn:document.querySelector("[data-action-cancel]"),inputs:document.querySelectorAll("[type='radio']"),boards:document.querySelectorAll("[data-action-board]")};function f(){_.inputs.forEach(t=>{t.checked&&(t.checked=!1)})}d.list.addEventListener("click",function(t){if(!t.target.matches("[data-action-menu], .icon, .icon-dots"))return;let e=t.target.closest(".thumb").querySelector(".img__menu"),{id:n}=e;e.classList.toggle("is-hidden"),[..._.menus].filter(t=>t.id!==n).forEach(t=>{t.classList.contains("is-hidden")||t.classList.add("is-hidden")})}),d.list.addEventListener("click",function(t){if(console.log(t.target),!t.target.hasAttribute("data-action-add"))return;let e=t.target.closest(".img__menu");console.log(e),e.querySelector(".modal__board").classList.toggle("is-hidden")}),d.list.addEventListener("click",function(t){t.target.hasAttribute("data-action-complain")&&(_.backdrop.classList.remove("is-hidden"),_.menus.forEach(t=>{t.classList.contains("is-hidden")||t.classList.add("is-hidden")}))}),d.list.addEventListener("click",function(t){if(!t.target.hasAttribute("data-action-board"))return;let e=t.target.id,n=t.target.closest(".modal").id,a=m.reduce((t,e)=>e.id===n?[...t,e]:t,JSON.parse(localStorage.getItem(`${e}`))||[]);localStorage.setItem(`${e}`,JSON.stringify(a))}),window.addEventListener("click",function(t){t.target.matches("[data-action-menu], .icon, .icon-dots, .img__menu, .menu__btn, .menu__item, .menu__list")||_.menus.forEach(t=>{t.classList.contains("is-hidden")||t.classList.add("is-hidden")})}),_.backdrop.addEventListener("click",function(t){t.currentTarget===t.target&&(_.backdrop.classList.add("is-hidden"),f())}),_.cancelComplainBtn.addEventListener("click",function(){_.backdrop.classList.add("is-hidden"),f()})}();
//# sourceMappingURL=index.f351046b.js.map
