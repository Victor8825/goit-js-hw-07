import { galleryItems } from './gallery-items.js';

const galleryContainerRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryItemMarkup(gallery) {
 return gallery.map( ({ preview, original, description }) => {
  return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`;
 })
 .join("")
}

const onImageClick = event => {
  console.log(event);
  event.preventDefault();
  event.target.blur();
  const onModalOpen = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  onModalOpen.show();
  window.addEventListener("keydown", (event) => {
    if ( event.code === "Escape" ) {
      onModalOpen.close();
    }
  });
}

galleryContainerRef.addEventListener("click", onImageClick);
