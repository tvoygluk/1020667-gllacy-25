var openCatalogList = document.querySelector(".catalog-link");
var catalogList = document.querySelector(".catalog-list");
var catalogLink = document.querySelectorAll(".new-icecream-link"), index, a;

const toggleCatalogList = () => {
  catalogList.classList.toggle("make-visible");
}

const addClassCatalogList = () => {
  catalogList.classList.add("make-visible");
}

openCatalogList.addEventListener("click", evt => {
  evt.preventDefault();
  addClassCatalogList();
});

for (index = 0; index < catalogLink.length; index++) {
  a = catalogLink[index];
  a.addEventListener('click', () => {
    toggleCatalogList();
  });
}

document.addEventListener("click", evt => {
  let target = evt.target;
  let its_catalogList = target == catalogList || catalogList.contains(target);
  let its_openCatalogList = target == openCatalogList;
  let catalogList_is_active = catalogList.classList.contains("make-visible");

  if (!its_catalogList && !its_openCatalogList && catalogList_is_active) {
    toggleCatalogList();
  }
});








