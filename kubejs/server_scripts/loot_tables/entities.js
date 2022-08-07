// priority: 10
// Neomanila

// Entity Loot Tables
onEvent('entity.loot_tables', event => {

    // AdventureZ Blackstone Golem
    event.modifyEntity('adventurez:stone_golem', table => {
        table.addPool(pool => {
            pool.rolls = 5;
            pool.addItem("additionaladditions:gold_ring")
            pool.killedByPlayer();
            pool.addCondition({ "condition": "minecraft:random_chance_with_looting", "chance": 0.8, "looting_multiplier": 0.02 });
        });
    });
});
