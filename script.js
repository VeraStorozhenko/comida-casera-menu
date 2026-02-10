let currentPage = 0;
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });

  updateButtons();
  updateStartButton();
}

function updateButtons() {
  if (!startBtn) return;
  startBtn.style.display = currentPage === 0 ? "block" : "none";
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
    updateButtons();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    showPage(currentPage);
    updateButtons();
  }
});

/* 🍽 Ver menú */
if (startBtn) {
  console.log("Start button found");
  startBtn.addEventListener("click", () => {
    console.log("Start button clicked");
    currentPage = 1;
    showPage(currentPage);
    updateButtons();
  });
}

showPage(currentPage);
updateButtons();
