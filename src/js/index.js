import createList from "./createList.js";
import runPinterestApplication from "./getImages.js";

const refs = {
  list: document.querySelector(".list"),
};

runPinterestApplication().then(
  (images) => (refs.list.innerHTML = createList(images))
);
