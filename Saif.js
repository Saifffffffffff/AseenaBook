let currentPage = 1;

function toggleClass(element, toggleClassName) {
  if (element.classList.contains(toggleClassName)) {
    element.classList.remove(toggleClassName);
  } else {
    element.classList.add(toggleClassName);
  }
}

function movePage(element, page) {
  if (page === currentPage) {
    currentPage += 2;
    toggleClass(element, "left-side");
    toggleClass(element.nextElementSibling, "left-side");
  } else if (page === currentPage - 1) {
    currentPage -= 2;
    toggleClass(element, "left-side");
    if (currentPage > 0) {
      toggleClass(element.previousElementSibling, "left-side");
    }
  }
}
