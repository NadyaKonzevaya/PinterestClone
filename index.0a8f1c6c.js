var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequire6121;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,a.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequire6121=a),(0,a.register)("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return n},set:function(t){return n=t},enumerable:!0,configurable:!0});var n,a=new Map;n=function(t,e){for(var n=0;n<e.length-1;n+=2)a.set(e[n],{baseUrl:t,path:e[n+1]})}}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.0a8f1c6c.js","8OQ7p","icons.0005281c.svg"]'));var i={};i=new URL("icons.0005281c.svg",import.meta.url).toString();var o=function({id:t,alt_description:e,urls:{regular:n},user:{profile_image:{small:a,name:o}}}){var s;return`
  <li class="thumb">
    <div class="img_wrap">
      <img src=${n} alt=${e} class="img"/>
      <div class="overlay"></div>
      <button type="button" class="img__btn" data-action-menu>
      <svg class="icon" aria-label="Additional functions">
        <use class="icon-dots" href="${(s=i)&&s.__esModule?s.default:s}#dots"></use>
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
      <img src=${a} alt=${o} class="avatar" />
      <p class="description">${e[0].toUpperCase()+e.slice(1)}</p>
    </div>
    
  </li>
  
`},s=function(t){return t.map(o).join("")};const u=async()=>({photos:await fetch("https://api.unsplash.com/photos/random/?client_id=5HxesvmDSHyOpCHGFTaK2E_qm_g_xkMj9DZ-KU5QOdQ&count=25").then(t=>t.json())}),c=async()=>{let t=JSON.parse(localStorage.getItem("photos"));if(!t){let{photos:t}=await u();console.log(t),localStorage.setItem("photos",JSON.stringify(t))}return t},l={list:document.querySelector(".list"),filter:document.querySelector(".filter"),chooseBtn:document.querySelector("[data-action-choose]"),boardContainer:document.querySelector(".choose__board")};c();const r=JSON.parse(localStorage.getItem("photos"))||[];l.list.innerHTML=s(r),l.filter.addEventListener("input",function(t){let{currentTarget:e}=t,n=e.value.toLowerCase(),a=r.filter(({alt_description:t})=>t.toLowerCase().includes(n));l.list.innerHTML=s(a)}),l.chooseBtn.addEventListener("click",function(){l.boardContainer.classList.toggle("is-hidden")}),l.boardContainer.addEventListener("click",function(t){let e=t.target.id;console.log(JSON.parse(localStorage.getItem(`board-${e}`)))});const d={menus:document.querySelectorAll(".img__menu"),modalComplain:document.querySelector(".modal__complain"),backdrop:document.querySelector(".backdrop"),cancelComplainBtn:document.querySelector("[data-action-cancel]"),inputs:document.querySelectorAll("[type='radio']"),boards:document.querySelectorAll("[data-action-board]")};function m(){d.inputs.forEach(t=>{t.checked&&(t.checked=!1)})}l.list.addEventListener("click",function(t){if(!t.target.matches("[data-action-menu], .icon, .icon-dots"))return;let e=t.target.closest(".thumb").querySelector(".img__menu"),{id:n}=e;e.classList.toggle("is-hidden"),[...d.menus].filter(t=>t.id!==n).forEach(t=>{t.classList.contains("is-hidden")||t.classList.add("is-hidden")})}),l.list.addEventListener("click",function(t){if(console.log(t.target),!t.target.hasAttribute("data-action-add"))return;let e=t.target.closest(".img__menu");console.log(e),e.querySelector(".modal__board").classList.toggle("is-hidden")}),l.list.addEventListener("click",function(t){t.target.hasAttribute("data-action-complain")&&(d.backdrop.classList.remove("is-hidden"),d.menus.forEach(t=>{t.classList.contains("is-hidden")||t.classList.add("is-hidden")}))}),l.list.addEventListener("click",function(t){if(!t.target.hasAttribute("data-action-board"))return;let e=t.target.id,n=t.target.closest(".modal").id,a=r.reduce((t,e)=>e.id===n?[...t,e]:t,JSON.parse(localStorage.getItem(`${e}`))||[]);localStorage.setItem(`${e}`,JSON.stringify(a))}),window.addEventListener("click",function(t){t.target.matches("[data-action-menu], .icon, .icon-dots, .img__menu, .menu__btn, .menu__item, .menu__list")||d.menus.forEach(t=>{t.classList.contains("is-hidden")||t.classList.add("is-hidden")})}),d.backdrop.addEventListener("click",function(t){t.currentTarget===t.target&&(d.backdrop.classList.add("is-hidden"),m())}),d.cancelComplainBtn.addEventListener("click",function(){d.backdrop.classList.add("is-hidden"),m()});
//# sourceMappingURL=index.0a8f1c6c.js.map
