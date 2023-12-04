function createImage({
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
      <button type="button" class="img__btn">
      <svg class="icon" aria-label="Additional functions">
        <use class="icon-dots" href="./images/icons.svg#dots"></use>
      </svg>
      </button>
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
