// Define the player class
class Player {
  constructor(username, level, inventory) {
    this.username = username;
    this.level = level;
    this.inventory = inventory;
  }
}

// Define the item class
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
const player = new Player("Kevin", 1, []);

// Define items
const pickaxe = new Item(0, "Pickaxe", false, 1);
const shovel = new Item(1, "Shovel", false, 1);
const iron_ore = new Item(2, "Iron Ore", true, 1);
