let gcounter = 0;
let inv = false;

// Inventory
function GivePlayerItem(user, item) {
  if (!item || !user) {
    (cons.textContent = "Give Player Item:"), "input missing, returning";
    return;
  }

  item.index = user.inventory.length + 1;
  user.inventory.push(item);
}

function ReturnPlayerInventory(user) {
  return user.inventory;
}

function RemovePlayerItem(user, item) {
  if (!item || !user) {
    (cons.textContent = "Remove Player Item:"), "input, returning";
    return;
  }

  let inv = user.inventory;
  let ind = item.index - 1;

  inv.forEach((spot) => {
    if (spot.name === item.name) {
      user.inventory.splice(ind, 1);
    }
  });
}

// Mine
function PlayerMine(user, item) {
  // Check for an existing item
  if (user.inventory.includes(item)) {
    inv = true;
  }

  // Define inventory slot
  let is = item.index - 1;

  // Tick counter,
  if (gcounter <= 3) {
    gcounter += 1;
    CreateNode("Tick", cons);
  } else if (gcounter === 4) {
    gcounter = 1;
    if (inv) {
      user.inventory[is].count += 1;

      CreateNode(`Item added: ${item.name}`, cons);
      // CreateNode(`Iron Ore: ${user.inventory[is].count}`, cons);
      ore.textContent = `Ore: ${player.inventory[is].count}`;

      CreateInventoryItem(iron_ore.name);
    } else {
      GivePlayerItem(user, item);
      CreateNode(`New item added: ${item.name}`, cons);
      CreateInventoryItem(iron_ore.name);
      ore.textContent = `Ore: 1`;
    }
  }
}

function clearMineTick() {
  clearInterval(MineTick);

  console.log("Game Note: Mining finished");
  CreateNode("You've finished mining.", cons);
  // CreateNode(`Inventory: ${ReturnPlayerInventory(player)}`, cons);
}

function MineTickHandler() {
  console.log("Game Note: Mining started");
  CreateNode("You swing your pickaxe at the rock.", cons);
  MineTick = setInterval(() => {
    const ind = iron_ore.index - 1;

    PlayerMine(player, iron_ore);

    if (!player.inventory[ind]) {
      return;
    }

    if (player.inventory[ind].count === 3) {
      clearMineTick();
    }
  }, 1000);
}

// CreateNode(player.inventory, cons);
