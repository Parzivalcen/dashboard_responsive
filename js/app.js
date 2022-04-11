const sidebar = document.querySelector(".sidebar");
const hamBtn = document.querySelector(".mobile-hamburger");
const closeBtn = document.querySelector(".hamburger-close");
// Info btn
const infoBtn = document.querySelector(".mobile-info");
const rightSide = document.querySelector(".righ-side");
const infoClose = document.querySelector(".info-close");
// sidebar
hamBtn.addEventListener("click", () => {
  const visibility = sidebar.getAttribute("data-visible");

  if (visibility === "false") {
    sidebar.setAttribute("data-visible", true);
  }
});
closeBtn.addEventListener("click", () => {
  const visibility = sidebar.getAttribute("data-visible");

  if (visibility === "true") {
    sidebar.setAttribute("data-visible", false);
  }
});
// Right side bar
infoBtn.addEventListener("click", () => {
  const visibility = rightSide.getAttribute("data-visible");

  if (visibility === "false") {
    rightSide.setAttribute("data-visible", true);
  }
});
infoClose.addEventListener("click", () => {
  console.log("hi");
  const visibility = rightSide.getAttribute("data-visible");

  if (visibility === "true") {
    rightSide.setAttribute("data-visible", false);
  }
});
