import createList from "./js/createList.js";
import runPinterestApplication from "./js/getImages.js";

// headerRefs -----------------------------------------------------------------------------------------
const headerRefs = {
  list: document.querySelector(".list"),
  filter: document.querySelector(".filter"),
  chooseBtn: document.querySelector("[data-action-choose]"),
  boardContainer: document.querySelector(".choose__board"),
};

// fetch images and save them to localStorage and create markup ---------------------------------------------------------------
runPinterestApplication();
const images = JSON.parse(localStorage.getItem("photos")) || [];
headerRefs.list.innerHTML = createList(images);
// console.log(images);
// headerRefs eventListeners -------------------------------------------------------------------------------------------
headerRefs.filter.addEventListener("input", handleInputFilter);
headerRefs.chooseBtn.addEventListener("click", toggleBoardChooseMenu);
headerRefs.boardContainer.addEventListener("click", handleBoardedImages);

// filter --------------------------------------------------------------------------------------------------------------
function handleInputFilter(event) {
  const { currentTarget } = event;
  const filterValue = currentTarget.value.toLowerCase();
  const filteredImages = images.filter(({ alt_description }) =>
    alt_description.toLowerCase().includes(filterValue)
  );
  headerRefs.list.innerHTML = createList(filteredImages);
}

// Toggle choose-board menu ------------------------------------------------------------------------------------------------
function toggleBoardChooseMenu() {
  headerRefs.boardContainer.classList.toggle("is-hidden");
}

// logging saved images -----------------------------------------------------------------------------------------------------
function handleBoardedImages(e) {
  const boardId = e.target.id;
  // console.log(JSON.parse(localStorage.getItem(`board-${boardId}`)));
}

// imageRefs -----------------------------------------------------------------------------------------
const imageRefs = {
  // menus: document.querySelectorAll(".img__menu"),
  modalComplain: document.querySelector(".modal__complain"),
  modal: document.querySelector(".modal"),
  modalBoard: document.querySelector(".modal__board"),
  backdrop: document.querySelector(".backdrop"),
  cancelComplainBtn: document.querySelector("[data-action-cancel]"),
  furtherComplainBtn: document.querySelector("[data-action-further]"),
  inputs: document.querySelectorAll("[type='radio']"),
  boards: document.querySelectorAll("[data-action-board]"),
  addToBoardBtn: document.querySelector("[data-action-add]"),
  hideBtn: document.querySelector("[data-action-hide]"),
  complainBtn: document.querySelector("[data-action-complain]"),
  savedToasts: document.querySelectorAll(".saved"),
};
// imageRefs.btnAdd.focus();

// console.log(imageRefs.modal);

// headerRefs eventListeners -------------------------------------------------------------------------------------------
headerRefs.list.addEventListener("click", handleImageMenu);
imageRefs.addToBoardBtn.addEventListener("click", toggleAddToBoardClick);
imageRefs.modalBoard.addEventListener("click", handleAddToBoard);
imageRefs.hideBtn.addEventListener("click", handleImageHide);
imageRefs.complainBtn.addEventListener("click", handleComplain);
window.addEventListener("click", handleMenuClose);
imageRefs.backdrop.addEventListener("click", handleBackdropClick);
imageRefs.cancelComplainBtn.addEventListener("click", handleCancelBtn);
imageRefs.furtherComplainBtn.addEventListener("click", handleCancelBtn);

let imageContainerId;
// console.log(imageContainerId);
// open general image menu -----------------------------------------------------
function handleImageMenu(e) {
  if (!e.target.matches("[data-action-menu], .icon, .icon-dots")) {
    return;
  }

  if (!imageRefs.modalBoard.classList.contains("is-hidden")) {
    imageRefs.modalBoard.classList.add("is-hidden");
  }
  imageContainerId = e.target.closest(".thumb").id;

  const image = e.target.closest(".img_wrap");

  const rect = image.getBoundingClientRect();
  imageRefs.modal.style.top = rect.bottom + "px";
  imageRefs.modal.style.left = rect.left + "px";

  if (image.classList.contains("lastOpen")) {
    // console.log("image.classList.contains(lastOpen) ");
    imageRefs.modal.classList.add("is-hidden");
    image.classList.remove("lastOpen");
  } else {
    const lastOpenImage = document.querySelector(".lastOpen");
    if (lastOpenImage) {
      // console.log("lastOpenImage существует");
      lastOpenImage.classList.remove("lastOpen");
      imageRefs.modal.classList.add("is-hidden");
    }
    // console.log("lastOpenImage НЕ существует");
    imageRefs.modal.classList.remove("is-hidden");
    image.classList.add("lastOpen");
  }
}

// Toggle add-to-board menu -----------------------------------------------------
function toggleAddToBoardClick(e) {
  // console.log(e.target);
  // if (!e.target.hasAttribute("data-action-add")) {
  //   return;
  // }
  const menu = e.target.closest(".img__menu");
  // menu.dataset.opened = true;
  // console.log(menu);
  // console.log(menu);
  const modalBoard = menu.querySelector(".modal__board");
  modalBoard.classList.toggle("is-hidden");
}

// add to paticular board -----------------------------------------------------------
function handleAddToBoard(e) {
  if (!e.target.hasAttribute("data-action-board")) {
    return;
  }
  console.log(imageContainerId);
  const boardId = e.target.id;

  const toastFiltered = [...imageRefs.savedToasts].filter(
    (toast) => toast.closest(".thumb").id === imageContainerId
  );
  [toastNeeded] = toastFiltered;
  toastNeeded.classList.remove("is-hidden");
  toastNeeded.textContent = `saved to ${boardId}`;

  const imagesToSave = images.reduce((acc, image) => {
    const isUnique = acc.some(({ id }) => id === image.id);
    if (image.id === imageContainerId && !isUnique) {
      return [...acc, image];
    }
    return acc;
  }, JSON.parse(localStorage.getItem(`${boardId}`)) || []);

  localStorage.setItem(`${boardId}`, JSON.stringify(imagesToSave));
}

// hide image------------------------------------------------------------------------------------

function handleImageHide(e) {
  // const imgId = e.target.closest(".img__menu").id;
  const filteredImages = images.filter((img) => img.id !== imageContainerId);
  updateImages(filteredImages);
  saveImagesToLocalStorage(filteredImages);
  headerRefs.list.innerHTML = createList(filteredImages);
  imageRefs.modal.classList.add("is-hidden");
}

// open complain modal -----------------------------------------------------------
function handleComplain(e) {
  imageRefs.backdrop.classList.remove("is-hidden");
  imageRefs.modal.classList.add("is-hidden");
  // imageRefs.menus.forEach((menu) => {
  //   if (!menu.classList.contains("is-hidden")) {
  //     menu.classList.add("is-hidden");
  //   }
  // });
}

// close image menu by clicking aside ----------------------------------------------------------
function handleMenuClose(e) {
  if (
    !e.target.matches(
      "[data-action-menu], .icon, .icon-dots, .img__menu, .menu__btn, .menu__item, .menu__list"
    )
  ) {
    imageRefs.modal.classList.add("is-hidden");
    // imageRefs.menus.forEach((menu) => {
    //   if (!menu.classList.contains("is-hidden")) {
    //     menu.classList.add("is-hidden");
    //   }
    // }
    // );
    // if (!headerRefs.boardContainer.classList.contains("is-hidden")) {
    //   headerRefs.boardContainer.classList.add("is-hidden");
    // }
  }
}

// close complain modal by clicking backdrop --------------------------------------------------------------
function handleBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  imageRefs.backdrop.classList.add("is-hidden");
  inputsUncheck();
}

// handle cancel-button on complain modal ---------------------------------------------------------------
function handleCancelBtn() {
  imageRefs.backdrop.classList.add("is-hidden");
  inputsUncheck();
}

// unchecking radio-buttons when cancelling ------------------------------------------------------------------
function inputsUncheck() {
  imageRefs.inputs.forEach((input) => {
    if (input.checked) {
      input.checked = false;
    }
  });
}

// update images ------------------------------------------------------------------------
function updateImages(data) {
  return images.splice(0, images.length, ...data);
}

// save images to localStorage -------------------------------------------------------------------------------

function saveImagesToLocalStorage(value) {
  localStorage.setItem("photos", JSON.stringify(value));
}
