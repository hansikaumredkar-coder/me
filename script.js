let currentPage = 1;
const totalPages = 5;

function showPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document
    .getElementById("page" + pageNumber)
    .classList.add("active");

  currentPage = pageNumber;
}

function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

function restart() {
  showPage(1);
}
