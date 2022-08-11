import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector(`.gallery`);
const markUp = createImgMarkUp(galleryItems);



gallery.insertAdjacentHTML(`beforeend`, markUp);

function createImgMarkUp(galleryItems) {
    const ImgNarkUp = galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("");
    return ImgNarkUp;
}

 new SimpleLightbox(".gallery__item", {
        captionsData: "alt",
        captionDely: 250,
    });

