// priority: 100
// Neomanila

onEvent('recipes', (event) => {
    // Remove recipes by recipe ID.
    [
        // None yet
    ].forEach((recipeID) => event.remove({ id: recipeID }));

    // Remove recipes by input.
    [
        // AdventureZ
        'adventurez:gilded_netherite_fragment',

    ].forEach((ingredientID) => event.remove({ input: ingredientID }));

    // Remove recipes by output.
    [
        // AdventureZ
        'adventurez:stone_golem_helmet',
        'adventurez:stone_golem_chestplate',
        'adventurez:stone_golem_leggings',
        'adventurez:stone_golem_boots',

        // Twigs
        'twigs:mossy_bricks',
        'twigs:mossy_brick_stairs',
        'twigs:mossy_brick_slab',
        'twigs:mossy_brick_wall',
    ].forEach((itemID) => event.remove({ output: itemID }));
});
