let e,t;var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=a.parcelRequire6121;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},a.parcelRequire6121=i),(0,i.register)("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return a},set:function(e){return a=e},enumerable:!0,configurable:!0});var a,n=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)n.set(t[a],{baseUrl:e,path:t[a+1]})}}),i("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.28c21d4c.js","8OQ7p","icons.0005281c.svg"]'));var s={};s=new URL("icons.0005281c.svg",import.meta.url).toString();var d=function({id:e,alt_description:t,urls:{regular:a},user:{profile_image:{small:n,name:o}}}){var i;return`
  <li class="thumb" id=${e}>
    <div class="img_wrap">
      <img src=${a} alt=${t} class="img"/>
      <div class="overlay"></div>
      <button type="button" class="img__btn" data-action-menu>
      <svg class="icon" aria-label="Additional functions">
        <use class="icon-dots" href="${(i=s)&&i.__esModule?i.default:i}#dots"></use>
      </svg>
      </button>
     <p class="saved is-hidden">SAVED</p>
    </div>
    <div class="avatar__wrap">
      <img src=${n} alt=${o} class="avatar" />
      <p class="description">${t[0].toUpperCase()+t.slice(1)}</p>
    </div>
    
  </li>
  
`},r=function(e){return e.map(d).join("")};const c=async()=>({photos:await fetch("https://api.unsplash.com/photos/random/?client_id=5HxesvmDSHyOpCHGFTaK2E_qm_g_xkMj9DZ-KU5QOdQ&count=25").then(e=>e.json())}),l=async()=>{let e=JSON.parse(localStorage.getItem("photos"));if(!e){let{photos:e}=await c();console.log(e),localStorage.setItem("photos",JSON.stringify(e))}return e},u={list:document.querySelector(".list"),filter:document.querySelector(".filter"),chooseBtn:document.querySelector("[data-action-choose]"),boardContainer:document.querySelector(".choose__board"),homeBtn:document.querySelector("[data-action-home]"),noPinsWrap:document.querySelector(".no-pins__wrap")},m={modalComplain:document.querySelector(".modal__complain"),modal:document.querySelector(".modal"),modalBoard:document.querySelector(".modal__board"),backdrop:document.querySelector(".backdrop"),cancelComplainBtn:document.querySelector("[data-action-cancel]"),furtherComplainBtn:document.querySelector("[data-action-further]"),inputs:document.querySelectorAll("[type='radio']"),boards:document.querySelectorAll("[data-action-board]"),addToBoardBtn:document.querySelector("[data-action-add]"),hideBtn:document.querySelector("[data-action-hide]"),complainBtn:document.querySelector("[data-action-complain]")};function p(){m.inputs.forEach(e=>{e.checked&&(e.checked=!1)})}function h(){m.backdrop.classList.add("is-hidden"),p()}(async function(){await l(),t=JSON.parse(localStorage.getItem("photos"))||[],u.list.innerHTML=r(t)})(),u.filter.addEventListener("input",function(e){let{currentTarget:a}=e,n=a.value.toLowerCase(),o=t.filter(({alt_description:e})=>e.toLowerCase().includes(n));u.list.innerHTML=r(o)}),u.chooseBtn.addEventListener("click",function(){u.boardContainer.classList.toggle("is-hidden")}),u.boardContainer.addEventListener("click",function(e){let t=e.target.id,a=JSON.parse(localStorage.getItem(`board-${t}`));a?u.list.innerHTML=r(a):(u.list.innerHTML="",u.noPinsWrap.innerHTML='<p class="no-pins">You have no saved pins here :(</p>'),u.boardContainer.classList.add("is-hidden")}),window.addEventListener("click",function(e){e.target.matches("[data-action-choose], .choose__board, .board__list, .board__item, .choose-btn")||u.boardContainer.classList.contains("is-hidden")||u.boardContainer.classList.add("is-hidden")}),u.homeBtn.addEventListener("click",function(){u.list.innerHTML=r(t)}),u.list.addEventListener("click",function(t){if(!t.target.matches("[data-action-menu], .icon, .icon-dots"))return;m.modalBoard.classList.contains("is-hidden")||m.modalBoard.classList.add("is-hidden"),e=t.target.closest(".thumb").id;let a=t.target.closest(".img_wrap"),n=a.getBoundingClientRect();if(m.modal.style.top=n.bottom+"px",m.modal.style.left=n.left+"px",a.classList.contains("lastOpen"))m.modal.classList.add("is-hidden"),a.classList.remove("lastOpen");else{let e=document.querySelector(".lastOpen");e&&(e.classList.remove("lastOpen"),m.modal.classList.add("is-hidden")),m.modal.classList.remove("is-hidden"),a.classList.add("lastOpen")}}),m.addToBoardBtn.addEventListener("click",function(e){e.target.closest(".img__menu").querySelector(".modal__board").classList.toggle("is-hidden")}),m.modalBoard.addEventListener("click",function(a){if(!a.target.hasAttribute("data-action-board"))return;let n=a.target.id,o=[...document.querySelectorAll(".saved")].filter(t=>t.closest(".thumb").id===e);[toastNeeded]=o,toastNeeded.classList.remove("is-hidden"),toastNeeded.textContent=`saved to ${n}`;let i=t.reduce((t,a)=>{let n=t.some(({id:e})=>e===a.id);return a.id!==e||n?t:[...t,a]},JSON.parse(localStorage.getItem(`${n}`))||[]);localStorage.setItem(`${n}`,JSON.stringify(i))}),m.hideBtn.addEventListener("click",function(a){let n=t.filter(t=>t.id!==e);t.splice(0,t.length,...n),localStorage.setItem("photos",JSON.stringify(n)),u.list.innerHTML=r(n),m.modal.classList.add("is-hidden")}),m.complainBtn.addEventListener("click",function(e){m.backdrop.classList.remove("is-hidden"),m.modal.classList.add("is-hidden")}),window.addEventListener("click",function(e){e.target.matches("[data-action-menu], .icon, .icon-dots, .img__menu, .menu__btn, .menu__item, .menu__list")||m.modal.classList.add("is-hidden")}),m.backdrop.addEventListener("click",function(e){e.currentTarget===e.target&&(m.backdrop.classList.add("is-hidden"),p())}),m.cancelComplainBtn.addEventListener("click",h),m.furtherComplainBtn.addEventListener("click",h);
//# sourceMappingURL=index.28c21d4c.js.map
