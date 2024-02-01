document.addEventListener("DOMContentLoaded", function() {
    const currentYear = document.getElementById("year");
   currentYear.textContent = new Date().getFullYear();
  });