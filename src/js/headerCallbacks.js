import { headerRefs } from "./refs.js";
import { images } from "../index.js";
import createList from "./createList.js";

const { list, boardContainer, filter, noPinsWrap } = headerRefs;

// filter --------------------------------------------------------------------------------------------------------------
export function handleInputFilter(event) {
  const { currentTarget } = event;
  const filterValue = currentTarget.value.toLowerCase();
  const filteredImages = images.filter(({ alt_description }) =>
    alt_description.toLowerCase().includes(filterValue)
  );
  list.innerHTML = createList(filteredImages);
}

// Toggle choose-board menu ------------------------------------------------------------------------------------------------
export function toggleBoardChooseMenu() {
  boardContainer.classList.toggle("is-hidden");
  filter.value = "";
}

// logging saved images -----------------------------------------------------------------------------------------------------
export function switchToBoard(e) {
  const boardId = e.target.id;
  const imagesOnBoard = JSON.parse(localStorage.getItem(`board-${boardId}`));

  if (imagesOnBoard) {
    noPinsWrap.innerHTML = "";
    list.innerHTML = createList(imagesOnBoard);
    boardContainer.classList.add("is-hidden");
  } else {
    list.innerHTML = "";
    noPinsWrap.innerHTML = `<p class="no-pins">You have no saved pins here :(</p>`;
    boardContainer.classList.add("is-hidden");
  }
}

// close choosemenu by clicking aside --------------------------------------------
export function handleChooseMenuClose(e) {
  if (
    !e.target.matches(
      "[data-action-choose], .choose__board, .board__list, .board__item, .choose-btn"
    ) &&
    !boardContainer.classList.contains("is-hidden")
  ) {
    boardContainer.classList.add("is-hidden");
  }
}

// return to home page --------------------------------------------------------------------------------
export function handleReturnToHomePage() {
  list.innerHTML = createList(images);
  filter.value = "";
  noPinsWrap.innerHTML = "";
}
