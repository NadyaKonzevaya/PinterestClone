import createList from "./js/createList.js";
import runPinterestApplication from "./js/getImages.js";
import { headerRefs, imageRefs } from "./js/refs.js";
import {
  handleInputFilter,
  toggleBoardChooseMenu,
  switchToBoard,
  handleChooseMenuClose,
  handleReturnToHomePage,
} from "./js/headerCallbacks.js";
import {
  handleImageMenu,
  toggleAddToBoardClick,
  handleAddToBoard,
  handleImageHide,
  handleComplain,
  handleMenuClose,
  handleBackdropClick,
  handleCancelBtn,
  // handleLoadMore,
} from "./js/imagesCallbacks.js";

// making global images ------------------------------------------------------------------------------------------------------
export let images;

// fetch images and save them to localStorage and create markup ---------------------------------------------------------------
async function runApplication() {
  await runPinterestApplication();
  images = JSON.parse(localStorage.getItem("photos")) || [];
  headerRefs.list.innerHTML = createList(images);
}

runApplication();

// headerRefs eventListeners -------------------------------------------------------------------------------------------
headerRefs.filter.addEventListener("input", handleInputFilter);
headerRefs.chooseBtn.addEventListener("click", toggleBoardChooseMenu);
headerRefs.boardContainer.addEventListener("click", switchToBoard);
window.addEventListener("click", handleChooseMenuClose);
headerRefs.homeBtn.addEventListener("click", handleReturnToHomePage);
headerRefs.list.addEventListener("click", handleImageMenu);

// imageRefs eventListeners -------------------------------------------------------------------------------------------
imageRefs.addToBoardBtn.addEventListener("click", toggleAddToBoardClick);
imageRefs.modalBoard.addEventListener("click", handleAddToBoard);
imageRefs.hideBtn.addEventListener("click", handleImageHide);
imageRefs.complainBtn.addEventListener("click", handleComplain);
window.addEventListener("click", handleMenuClose);
imageRefs.backdrop.addEventListener("click", handleBackdropClick);
imageRefs.cancelComplainBtn.addEventListener("click", handleCancelBtn);
imageRefs.furtherComplainBtn.addEventListener("click", handleCancelBtn);
