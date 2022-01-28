const Lists=document.querySelectorAll('[data-target]')
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

Lists.forEach((List) => {
  List.addEventListener("click", () => {
    document.querySelector(List.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((List) => {
  List.addEventListener("click", () => {
    const modal = List.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};
