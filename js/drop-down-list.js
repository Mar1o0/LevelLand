const questionItems = document.querySelectorAll(".section-choices__question");

questionItems.forEach((item) => {
  const header = item.querySelector(".section-choices__question-header");
  const content = item.querySelector(".section-choices__question-content");
  const btn = header.querySelector(".section-choices__question-btn");

  header.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    closeAllItems();

    if (!isOpen) {
      item.classList.add("active");
      content.style.display = "block";
      btn.classList.add("active");
    }
  });
});

function closeAllItems() {
  const activeItems = document.querySelectorAll(".section-choices__question.active");

  activeItems.forEach((activeItem) => {
    const activeContent = activeItem.querySelector(".section-choices__question-content");
    const activeBtn = activeItem.querySelector(".section-choices__question-btn");

    activeItem.classList.remove("active");
    activeContent.style.display = "none";
    activeBtn.classList.remove("active");
  });
}


