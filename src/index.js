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
  console.log(JSON.parse(localStorage.getItem(`board-${boardId}`)));
}

// imageRefs -----------------------------------------------------------------------------------------
const imageRefs = {
  menus: document.querySelectorAll(".img__menu"),
  modalComplain: document.querySelector(".modal__complain"),
  backdrop: document.querySelector(".backdrop"),
  cancelComplainBtn: document.querySelector("[data-action-cancel]"),
  inputs: document.querySelectorAll("[type='radio']"),
  boards: document.querySelectorAll("[data-action-board]"),
};
// imageRefs.btnAdd.focus();

// headerRefs eventListeners -------------------------------------------------------------------------------------------
headerRefs.list.addEventListener("click", handleImageMenu);
headerRefs.list.addEventListener("click", toggleAddToBoardClick);
headerRefs.list.addEventListener("click", handleComplain);
headerRefs.list.addEventListener("click", handleAddToBoard);
window.addEventListener("click", handleMenuClose);
imageRefs.backdrop.addEventListener("click", handleBackdropClick);
imageRefs.cancelComplainBtn.addEventListener("click", handleCancelBtn);

// open general image menu -----------------------------------------------------
function handleImageMenu(e) {
  if (!e.target.matches("[data-action-menu], .icon, .icon-dots")) {
    return;
  }

  const imageContainer = e.target.closest(".thumb");
  const menu = imageContainer.querySelector(".img__menu");
  const { id } = menu;
  menu.classList.toggle("is-hidden");

  const menusHidden = [...imageRefs.menus].filter((menu) => menu.id !== id);

  menusHidden.forEach((menu) => {
    if (!menu.classList.contains("is-hidden")) {
      menu.classList.add("is-hidden");
    }
  });
}

// Toggle add-to-board menu -----------------------------------------------------
function toggleAddToBoardClick(e) {
  console.log(e.target);
  if (!e.target.hasAttribute("data-action-add")) {
    return;
  }
  const menu = e.target.closest(".img__menu");
  console.log(menu);
  const modalBoard = menu.querySelector(".modal__board");
  modalBoard.classList.toggle("is-hidden");
}

// open complain modal -----------------------------------------------------------
function handleComplain(e) {
  if (!e.target.hasAttribute("data-action-complain")) {
    return;
  }
  imageRefs.backdrop.classList.remove("is-hidden");
  imageRefs.menus.forEach((menu) => {
    if (!menu.classList.contains("is-hidden")) {
      menu.classList.add("is-hidden");
    }
  });
}

// add to paticular board -----------------------------------------------------------
function handleAddToBoard(e) {
  if (!e.target.hasAttribute("data-action-board")) {
    return;
  }

  const boardId = e.target.id;
  const imageId = e.target.closest(".modal").id;

  const imagesToSave = images.reduce((acc, image) => {
    if (image.id === imageId) {
      return [...acc, image];
    }
    return acc;
  }, JSON.parse(localStorage.getItem(`${boardId}`)) || []);
  localStorage.setItem(`${boardId}`, JSON.stringify(imagesToSave));
}

// close image menu by clicking aside ----------------------------------------------------------
function handleMenuClose(e) {
  if (
    !e.target.matches(
      "[data-action-menu], .icon, .icon-dots, .img__menu, .menu__btn, .menu__item, .menu__list"
    )
  ) {
    imageRefs.menus.forEach((menu) => {
      if (!menu.classList.contains("is-hidden")) {
        menu.classList.add("is-hidden");
      }
    });
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
