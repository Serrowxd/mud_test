const user = document.getElementById("username");
const level = document.getElementById("level");
const mine = document.getElementById("mine");
const cons = document.getElementById("console");
const ore = document.getElementById("ore");
const inventory = document.getElementById("inventory");

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

function CreateInventoryItem(item, amount) {
  // Temporary item addition
  // This doesn't work with stacks
  CreateNode(item, inventory);

  // Add item limit (inventory size) as a global variable that is passed in
}

function UpdateInventoryItem(item, amount) {
  // This will update stack size
  // Should only be called when an item exists already
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
