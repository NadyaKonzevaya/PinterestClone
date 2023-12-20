import { headerRefs } from "./refs.js";
import { images } from "../index.js";
import createList from "./createList.js";

const { list, boardContainer, filter, noPinsWrap } = headerRefs;
// console.log(boardId);
// filter --------------------------------------------------------------------------------------------------------------
export function handleInputFilter(event) {
  const { currentTarget } = event;
  const filterValue = currentTarget.value.toLowerCase().trim();

  // const filteredImages = images.filter(({ alt_description }) =>
  //   alt_description.toLowerCase().includes(filterValue)
  // );
  const activeBoard = JSON.parse(localStorage.getItem("activeBoard"));
  const imagesOnBoard = JSON.parse(
    localStorage.getItem(`board-${activeBoard}`)
  );
  console.log(imagesOnBoard);
  const filteredImages = activeBoard
    ? imagesOnBoard.filter(({ alt_description }) =>
        alt_description.toLowerCase().includes(filterValue)
      )
    : images.filter(({ alt_description }) =>
        alt_description.toLowerCase().includes(filterValue)
      );

  // console.log(boardId);
  // console.log(imagesOnBoard);
  // const descriptions = document.querySelectorAll(".description");
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
  localStorage.setItem("activeBoard", boardId);
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
  localStorage.removeItem("activeBoard");
}
