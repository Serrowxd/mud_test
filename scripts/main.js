const user = document.getElementById("username");
const level = document.getElementById("level");
const mine = document.getElementById("mine");
const cons = document.getElementById("console");
const ore = document.getElementById("ore");

window.addEventListener("load", () => {
  const is = iron_ore.index - 1;

  user.textContent = `Username: ${player.username}`;
  level.textContent = `Level: ${player.level}`;
  ore.textContent = `Ore: 0`;
});

mine.addEventListener("click", () => {
  startServer(MineTickHandler);
});

function CreateNode(value, node) {
  const output = node;
  const itemNode = document.createElement("p");
  const textNode = document.createTextNode(value);

  itemNode.appendChild(textNode);
  output.appendChild(itemNode);

  return;
}

// Server code here
// Input is a function call, player is optional
const startServer = function (input, player) {
  if (input instanceof Function) {
    input();
  } else {
    console.log("Action input was not a function, check the code dummy!");
    return;
  }
};
