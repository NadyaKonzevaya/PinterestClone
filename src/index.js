import createList from "./js/createList.js";
import runPinterestApplication from "./js/getImages.js";

const refs = {
  list: document.querySelector(".list"),
  filter: document.querySelector(".filter"),
};

runPinterestApplication();
const images = JSON.parse(localStorage.getItem("photos")) || [];
// console.log(images);
// runPinterestApplication().then(
//   (images) => (refs.list.innerHTML = createList(images))
// );

refs.list.innerHTML = createList(images);
refs.filter.addEventListener("input", handleInputFilter);

function handleInputFilter(event) {
  const { currentTarget } = event;
  const filterValue = currentTarget.value.toLowerCase();
  const filteredImages = images.filter(({ alt_description }) =>
    alt_description.toLowerCase().includes(filterValue)
  );
  refs.list.innerHTML = createList(filteredImages);
}
