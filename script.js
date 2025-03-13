document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".price-item").forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from all items
            document.querySelectorAll(".price-item").forEach(el => el.classList.remove("active"));
            // Add active class to the clicked item
            this.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".question-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const listItem = this.closest("li");
      const answer = listItem.querySelector(".question-item-answer");

      // Toggle visibility
      const isOpen = answer.style.display === "block";
      answer.style.display = isOpen ? "none" : "block";

      // Toggle the "open" class to remove/add border
      listItem.querySelector(".questions-item").classList.toggle("open", !isOpen);

      // Change the icon (optional)
      const icon = this.querySelector("use");
      icon.setAttribute(
        "href",
        isOpen ? "./images/icons.svg#icon-plus_circle" : "./images/icons.svg#icon-minus_circle"
      );
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeButton = document.querySelector(".mobile-menu-close");

  // Open menu
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.add("open");
    mobileMenu.classList.remove("closing");
  });

  // Close menu function with animation
  function closeMenu() {
    mobileMenu.classList.add("closing");
    setTimeout(() => {
      mobileMenu.classList.remove("open", "closing");
    }, 300); // Matches the transition duration (0.3s)
  }

  // Close when clicking the close button
  closeButton.addEventListener("click", closeMenu);

  // Close menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Проверка состояния localStorage при загрузке страницы
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }

  // Переключение темы по клику
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Сохранение темы в localStorage
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});