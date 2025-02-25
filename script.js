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
      const answer = this.closest("li").querySelector(".question-item-answer");

      // Toggle visibility
      answer.style.display = answer.style.display === "none" || answer.style.display === "" ? "block" : "none";

      // Change the icon (optional)
      const icon = this.querySelector("use");
      if (icon.getAttribute("href") === "./images/icons.svg#icon-minus_circle") {
        icon.setAttribute("href", "./images/icons.svg#icon-plus_circle");
      } else {
        icon.setAttribute("href", "./images/icons.svg#icon-minus_circle");
      }
    });
  });
});

