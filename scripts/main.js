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
  startServer();
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
const startServer = function () {
  // cons.textContent = player);
  // cons.textContent = `Username: ${player.username}, Level: ${player.level}`;

  GivePlayerItem(player, shovel);
  GivePlayerItem(player, pickaxe);

  function clear() {
    clearInterval(MineTick);

    CreateNode("You've finished mining.", cons);
    // CreateNode(`Inventory: ${ReturnPlayerInventory(player)}`, cons);
  }

  const MineTick = setInterval(() => {
    const ind = iron_ore.index - 1;
    PlayerMine(player, iron_ore);

    if (!player.inventory[ind]) {
      return;
    }

    if (player.inventory[ind].count === 3) {
      clear();
    }
  }, 1000);

  // CreateNode(player.inventory, cons);
};

// const e = "none";
// cons.textContent = startServer());
