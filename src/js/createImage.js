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
  <li class="thumb" id=${id}>
    <div class="img_wrap">
      <img src=${regular} alt=${alt_description} class="img"/>
      <div class="overlay"></div>
      <button type="button" class="img__btn" data-action-menu>
      <svg class="icon" aria-label="Additional functions">
        <use class="icon-dots" href="${svg}#dots"></use>
      </svg>
      </button>
     <p class="saved is-hidden">SAVED</p>
    </div>
    <div class="avatar__wrap">
      <img src=${small} alt=${name} class="avatar" />
      <p class="description">${
        alt_description[0].toUpperCase() + alt_description.slice(1)
      }</p>
    </div>
    
  </li>
  
`;
}

export default createImage;
