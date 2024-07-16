const downloadButton = document.querySelector(".download");
const resetButton = document.querySelector(".reset");
const container = document.querySelector(".container");

// adding event listener to the download button
downloadButton.addEventListener("click", () => {
  container.classList.add("change");
});
resetButton.addEventListener("click", () => {
  container.classList.remove("change");
});
