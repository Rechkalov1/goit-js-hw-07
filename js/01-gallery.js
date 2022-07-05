import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
// export const galleryItems = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
const listGallery = document.querySelector(".gallery");

function createImageGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>;`;
    console.log(galleryItems);
  });
}
