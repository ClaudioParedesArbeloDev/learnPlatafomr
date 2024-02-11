document.addEventListener("DOMContentLoaded", function() {
    const currentYear = document.getElementById("yearC");
   currentYear.textContent = new Date().getFullYear();
  });

  const nav = document.querySelector("#navC");
  const open = document.querySelector("#hamburguerC")
  const close = document.querySelector("#closeC")

  open.addEventListener("click", () => {
    nav.classList.add("visible")
  })

  close.addEventListener("click", () => {
    nav.classList.remove("visible")
  })