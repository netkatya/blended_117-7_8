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

