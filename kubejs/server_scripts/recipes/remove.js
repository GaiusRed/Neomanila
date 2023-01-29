// priority: 100
// Neomanila

onEvent('recipes', (event) => {
    // Remove recipes by recipe ID.
    [
        // Additional Additions
        'additionaladditions:fried_egg',
        'additionaladditions:rope',

        // Blockus
        'blockus:blockus_barrels_into_vanilla_barrel',
        'blockus:ender_block',
        'blockus:ender_pearl_from_ender_block',
        'blockus:paper_lamp',
        'blockus:legacy_stonecutter',
        'blockus:legacy_glowing_obsidian',
        'blockus:legacy_crying_obsidian',
        'blockus:legacy_nether_reactor_core',
        'blockus:legacy_glowstone',
        'blockus:legacy_diamond_block',
        'blockus:legacy_explosion_proof_gold_block',
        'blockus:legacy_explosion_proof_gold_block_from_legacy_gold_block',
        'blockus:legacy_lapis_block',
        'blockus:legacy_sponge',
        'blockus:legacy_coal_block',
        'blockus:legacy_gold_block',
        'blockus:legacy_iron_block',
        'blockus:legacy_gravel',
        'blockus:legacy_mossy_cobblestone',
        'blockus:legacy_cobblestone',
        'blockus:legacy_first_cobblestone',
        'blockus:legacy_first_cobblestone_stonecutting',
        'blockus:legacy_planks',
        'blockus:legacy_bricks',
        'blockus:legacy_leaves',
        'blockus:legacy_grass_block',
        'blockus:legacy_first_grass_block',
        'blockus:legacy_first_grass_block_stonecutting',
        'blockus:rainbow_glowstone',
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

        // Blockus
        'blockus:snow_bricks',
        'blockus:snow_brick_stairs',
        'blockus:snow_brick_slab',
        'blockus:snow_brick_wall',
        'blockus:amethyst_bricks',
        'blockus:amethyst_brick_stairs',
        'blockus:amethyst_brick_slab',
        'blockus:amethyst_brick_wall',
        'blockus:polished_amethyst',
        'blockus:polished_amethyst_stairs',
        'blockus:polished_amethyst_slab',
        'blockus:chiseled_amethyst',

        // Twigs
        'twigs:mossy_bricks',
        'twigs:mossy_brick_stairs',
        'twigs:mossy_brick_slab',
        'twigs:mossy_brick_wall',

        // Get Off My Lawn
        'goml:makeshift_claim_anchor',

        // Luggage
        'luggage:luggage',

        // Collector's Album
        'collectorsalbum:album',

        // Waystones
        'waystones:warp_stone',

        // Quartz Elevator
        'quartzelv:quartz_elevator',
        'quartzelv:smooth_quartz_elevator',
    ].forEach((itemID) => event.remove({ output: itemID }));
});
