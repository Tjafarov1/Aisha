const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const navLinksBox = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");

function showPage(pageName) {
  const targetPage = document.getElementById("page-" + pageName);

  if (!targetPage) return;

  pages.forEach(page => {
    page.classList.toggle("active", page === targetPage);
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageName);
  });

  if (navLinksBox) {
    navLinksBox.classList.remove("open");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Кнопки верхнего меню
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    showPage(link.dataset.page);
  });
});

// Кнопки перехода между страницами
document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.go);
  });
});

// Мобильное меню
if (menuToggle && navLinksBox) {
  menuToggle.addEventListener("click", () => {
    navLinksBox.classList.toggle("open");
  });
}

// Проверка загрузки фотографий
const photoImages = document.querySelectorAll("#photoGrid img");

photoImages.forEach((img, index) => {
  img.addEventListener("error", () => {
    console.warn(`Не удалось загрузить фотографию ${index + 1}: ${img.src}`);
  });
});