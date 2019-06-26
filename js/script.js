var openCatalogList = document.querySelector(".catalog-link");
var catalogList = document.querySelector(".catalog-list");
var catalogLink = document.querySelectorAll(".close-catalog-list"), index, a;

const addClassCatalogList = () => {
  catalogList.classList.add("make-visible");
}

const removeClassCatalogList = () => {
  catalogList.classList.remove("make-visible");
}

openCatalogList.addEventListener("click", evt => {
  evt.preventDefault();
  addClassCatalogList();
});

for (index = 0; index < catalogLink.length; index++) {
  a = catalogLink[index];
  a.addEventListener('click', () => {
    removeClassCatalogList();
  });
}

document.addEventListener("click", evt => {
  let target = evt.target;
  let its_catalogList = target == catalogList || catalogList.contains(target);
  let its_openCatalogList = target == openCatalogList;
  let catalogList_is_active = catalogList.classList.contains("make-visible");

  if (!its_catalogList && !its_openCatalogList && catalogList_is_active) {
    removeClassCatalogList();
  }
});

var searchButton = document.querySelector(".search-button-wrapper");
var modalBackground = document.querySelector(".modal-background");

const makeVisibleModalBackground = () => {
  modalBackground.classList.add("make-visible");
}

const unMakeVisibleModalBackground = () => {
  modalBackground.classList.remove("make-visible");
}

searchButton.addEventListener("mouseenter", evt => {
  evt.preventDefault();
  makeVisibleModalBackground();
});

searchButton.addEventListener("mouseleave", evt => {
  evt.preventDefault();
  unMakeVisibleModalBackground();
});

