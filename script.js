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
