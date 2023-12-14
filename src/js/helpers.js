import { images } from "../index.js";
import { imageRefs } from "./refs.js";

// unchecking radio-buttons when cancelling ------------------------------------------------------------------
export function inputsUncheck() {
  imageRefs.inputs.forEach((input) => {
    if (input.checked) {
      input.checked = false;
    }
  });
}

// update images ------------------------------------------------------------------------
export function updateImages(data) {
  return images.splice(0, images.length, ...data);
}

// save images to localStorage -------------------------------------------------------------------------------

export function saveImagesToLocalStorage(value) {
  localStorage.setItem("photos", JSON.stringify(value));
}
