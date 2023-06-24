const colors = [
  "#007bff",
  "#dc3545",
  "#28a745",
  "#ffc107",
  "#17a2b8",
  "#6c757d",
  "#343a40",
];
function changeColor() {
  const index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
}
const randomBtn = document.getElementById("random-btn");
randomBtn.addEventListener("click", changeColor);
