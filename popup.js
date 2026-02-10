const openBtn = document.querySelector(".open-popup");
const popup = document.querySelector(".popup-overlay");
const closePopup = document.querySelector(".close-popup");

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("active");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("active");
});
    