// Define HTML endpoints

const user = document.getElementById("username");
const level = document.getElementById("level");
const mine = document.getElementById("mine");

window.addEventListener("load", () => {
  user.textContent = `Username: ${player.username}`;
  level.textContent = `Level: ${player.level}`;
});

mine.addEventListener("click", () => {
  startServer();
});
