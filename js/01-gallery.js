// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */
import { galleryItems } from './gallery-items.js';

const galleryWrapRef = document.querySelector(".gallery");
const galleryItemRef = document.createElement("div");
const galleryLinkRef =  document.createElement("a");
const galleryImgRef = document.createElement("img");

galleryItemRef.classList.add("gallery__item");
galleryLinkRef.classList.add("gallery__link");
galleryImgRef.classList.add("gallery__image");
galleryImgRef.setAttribute("src", "");
galleryImgRef.setAttribute("alt", "");
galleryLinkRef.setAttribute("href", "");
galleryImgRef.setAttribute("data-source", "");
galleryLinkRef.append(galleryImgRef);
galleryItemRef.append(galleryLinkRef);

function markupGallery (array) {
  const galleryMarkup = galleryItems.map( ({ preview, original, description }) => {
    galleryImgRef.setAttribute("src", ${preview} );
    galleryImgRef.setAttribute("alt", ${description} );
    galleryLinkRef.setAttribute("href", ${original});
    galleryImgRef.setAttribute("data-source", ${original});
    galleryWrapRef.append(galleryItemRef);
  })
  return galleryMarkup;
}
console.log(markupGallery(galleryItems));




console.log(galleryItems);
