import { imageRefs, headerRefs } from "./refs.js";
import { images } from "../index.js";
import createList from "./createList.js";
import {
  inputsUncheck,
  updateImages,
  saveImagesToLocalStorage,
} from "./helpers.js";

let imageContainerId;

// open general image menu -----------------------------------------------------
export function handleImageMenu(e) {
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
    imageRefs.modal.classList.add("is-hidden");
    image.classList.remove("lastOpen");
  } else {
    const lastOpenImage = document.querySelector(".lastOpen");
    if (lastOpenImage) {
      lastOpenImage.classList.remove("lastOpen");
      imageRefs.modal.classList.add("is-hidden");
    }
    imageRefs.modal.classList.remove("is-hidden");
    image.classList.add("lastOpen");
  }
}

// Toggle add-to-board menu -----------------------------------------------------
export function toggleAddToBoardClick(e) {
  const menu = e.target.closest(".img__menu");
  const modalBoard = menu.querySelector(".modal__board");

  modalBoard.classList.toggle("is-hidden");
}

// add to paticular board -----------------------------------------------------------
export function handleAddToBoard(e) {
  if (!e.target.hasAttribute("data-action-board")) {
    return;
  }

  const boardId = e.target.id;
  const savedToasts = document.querySelectorAll(".saved");
  const toastFiltered = [...savedToasts].filter(
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
export function handleImageHide(e) {
  const filteredImages = images.filter((img) => img.id !== imageContainerId);

  updateImages(filteredImages);
  saveImagesToLocalStorage(filteredImages);

  headerRefs.list.innerHTML = createList(filteredImages);
  imageRefs.modal.classList.add("is-hidden");
}

// open complain modal -----------------------------------------------------------
export function handleComplain(e) {
  imageRefs.backdrop.classList.remove("is-hidden");
  imageRefs.modal.classList.add("is-hidden");
}

// close image menu by clicking aside ----------------------------------------------------------
export function handleMenuClose(e) {
  if (
    !e.target.matches(
      "[data-action-menu], .icon, .icon-dots, .img__menu, .menu__btn, .menu__item, .menu__list"
    )
  ) {
    imageRefs.modal.classList.add("is-hidden");
  }
}

// close complain modal by clicking backdrop --------------------------------------------------------------
export function handleBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  imageRefs.backdrop.classList.add("is-hidden");
  inputsUncheck();
}

// handle cancel-button on complain modal ---------------------------------------------------------------
export function handleCancelBtn() {
  imageRefs.backdrop.classList.add("is-hidden");
  inputsUncheck();
}
