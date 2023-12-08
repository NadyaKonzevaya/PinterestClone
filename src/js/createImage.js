import svg from "../images/icons.svg";

function createImage({
  id,
  alt_description,
  urls: { regular },
  user: {
    profile_image: { small, name },
  },
}) {
  return `
  <li class="thumb">
    <div class="img_wrap">
      <img src=${regular} alt=${alt_description} class="img"/>
      <div class="overlay"></div>
      <button type="button" class="img__btn" data-action-menu>
      <svg class="icon" aria-label="Additional functions">
        <use class="icon-dots" href="${svg}#dots"></use>
      </svg>
      </button>
      <div class="img__menu modal is-hidden" id=${id}>
        <ul class="menu__list">
            <li class="menu__item">
                <button type="button" class="menu__btn" data-action-add>Добавить на доску</button></li>
            <li class="menu__item">
                <button type="button" class="menu__btn" data-action-hide>Скрыть пин со страницы</button></li>
            <li class="menu__item">
                <button type="button" class="menu__btn" data-action-complain>Пожаловаться</button></li>
            </ul>
        <div class="img__menu modal__board is-hidden">
            <ul class="menu__list">
                <li class="menu__item">
                <button type="button" class="menu__btn" id="board-1" data-action-board>Доска 1</button></li>
                <li class="menu__item">
                <button type="button" class="menu__btn" id="board-2" data-action-board>Доска 2</button></li>
                <li class="menu__item">
                <button type="button" class="menu__btn" id="board-3" data-action-board>Доска 3</button></li>
            </ul>
        </div>
      </div>
    </div>
    <div class="avatar__wrap">
      <img src=${small} alt=${name} class="avatar" />
      <p class="description">${
        alt_description[0].toUpperCase() + alt_description.slice(1)
      }</p>
    </div>
    
  </li>
  
`;

  //   </li>
  //   <li class="todo ${isChecked ? "completed" : ""}" data-id=${id} >
  //           <label class="text">
  //             <input
  //               type="checkbox"
  //               name="tick"
  //               value=${text}
  //               class="checkbox"
  //               ${isChecked ? "checked" : ""}
  //             />
  //             <span class="checkbox--customized">
  //               <svg class="checkbox__icon">
  //                 <use href="./icons.svg#icon-check"></use>
  //               </svg>
  //             </span>
  //             ${text}</label
  //           >
  //           <button type="button" class="btn-close">x</button>
  //           <span class="date">${date}</span>
  //         </li>`;
}

export default createImage;
