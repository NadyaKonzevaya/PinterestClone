import { headerRefs } from "./refs.js";
import { images } from "../index.js";
import createList from "./createList.js";

// filter --------------------------------------------------------------------------------------------------------------
export function handleInputFilter(event) {
  const { currentTarget } = event;
  const filterValue = currentTarget.value.toLowerCase();
  const filteredImages = images.filter(({ alt_description }) =>
    alt_description.toLowerCase().includes(filterValue)
  );
  headerRefs.list.innerHTML = createList(filteredImages);
}

// Toggle choose-board menu ------------------------------------------------------------------------------------------------
export function toggleBoardChooseMenu() {
  headerRefs.boardContainer.classList.toggle("is-hidden");
}

// logging saved images -----------------------------------------------------------------------------------------------------
export function switchToBoard(e) {
  const boardId = e.target.id;
  const imagesOnBoard = JSON.parse(localStorage.getItem(`board-${boardId}`));

  if (imagesOnBoard) {
    headerRefs.noPinsWrap.innerHTML = "";
    headerRefs.list.innerHTML = createList(imagesOnBoard);
    headerRefs.boardContainer.classList.add("is-hidden");
  } else {
    headerRefs.list.innerHTML = "";
    headerRefs.noPinsWrap.innerHTML = `<p class="no-pins">You have no saved pins here :(</p>`;
    headerRefs.boardContainer.classList.add("is-hidden");
  }

  // headerRefs.list.innerHTML = imagesOnBoard
  //   ? createList(imagesOnBoard)
  //   : `<p class="no-pins">You have no saved pins here :(</p>`;
}

// close choosemenu by clicking aside --------------------------------------------
export function handleChooseMenuClose(e) {
  if (
    !e.target.matches(
      "[data-action-choose], .choose__board, .board__list, .board__item, .choose-btn"
    ) &&
    !headerRefs.boardContainer.classList.contains("is-hidden")
  ) {
    headerRefs.boardContainer.classList.add("is-hidden");
  }
}

// return to home page --------------------------------------------------------------------------------
export function handleReturnToHomePage() {
  headerRefs.list.innerHTML = createList(images);
}
