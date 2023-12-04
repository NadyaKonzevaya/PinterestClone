import createImage from "./createImage.js";

function createList(data) {
  return data.map(createImage).join("");
}

export default createList;
