const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    setTimeout(() => {
      panel.classList.add("active");
    }, 1000);
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
