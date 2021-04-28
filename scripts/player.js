// JavaScript bench for testing out some theories regarding a MUD server

// Notes

// Use these later
// const User = require("./usertemp.json");
// const Items = require("./items.json");

// HTML Definitions

// Define the player constructor via the template
class Player {
  constructor(username, level, inventory) {
    this.username = username;
    this.level = level;
    this.inventory = inventory;
  }
}

// Define the item template
class Item {
  constructor(id, name, stackable, count, index) {
    this.id = id;
    this.name = name;
    this.stackable = stackable;
    this.count = count;
    this.index = index;
  }
}

// Define the base player
const player = new Player("Serrow", 1, []);

// Define an item
const pickaxe = new Item(0, "Pickaxe", false, 1);
const shovel = new Item(1, "Shovel", false, 1);
const iron_ore = new Item(2, "Iron Ore", true, 1);

// !! Actions

// Inventory
function GivePlayerItem(user, item) {
  if (!item || !user) {
    console.log("Give Player Item:", "input missing, returning");
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
    console.log("Remove Player Item:", "input, returning");
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

// Entity Actions

let gcounter = 0;
let inv = false;

function PlayerMine(user, item) {
  if (user.inventory.includes(item)) {
    inv = true;
  }

  let is = item.index - 1;

  if (gcounter <= 3) {
    gcounter += 1;
    console.log("Tick");
  } else if (gcounter === 4) {
    gcounter = 1;
    if (inv) {
      user.inventory[is].count += 1;
      console.log("Item added:", item.name);
      console.log("Iron Ore:", user.inventory[is].count);
    } else {
      GivePlayerItem(user, item);
      console.log("New item added:", item.name);
    }
  }
}

// Server code here
const startServer = function () {
  // console.log(player);
  console.log(`Username: ${player.username}, Level: ${player.level}`);

  GivePlayerItem(player, shovel);
  GivePlayerItem(player, pickaxe);

  function clear() {
    clearInterval(MineTick);

    console.log("You've finished mining.");
    console.log("Inventory:", ReturnPlayerInventory(player));
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

  console.log(player.inventory);
};

// const e = "none";
// console.log(startServer());
