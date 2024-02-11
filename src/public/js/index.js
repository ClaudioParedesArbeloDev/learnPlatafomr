document.addEventListener("DOMContentLoaded", function() {
    const currentYear = document.getElementById("year");
   currentYear.textContent = new Date().getFullYear();
  });

  const nav = document.querySelector("#nav");
  const open = document.querySelector("#hamburguer")
  const close = document.querySelector("#close")

  open.addEventListener("click", () => {
    nav.classList.add("visible")
  })

  close.addEventListener("click", () => {
    nav.classList.remove("visible")
  })