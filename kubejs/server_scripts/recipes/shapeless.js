// priority: 10
// Neomanila

onEvent('recipes', event => {
    // Architect's Palette
    event.shapeless('architects_palette:heavy_mossy_stone_bricks', ['architects_palette:heavy_stone_bricks', 'minecraft:moss_block']);

    // Twigs
    event.shapeless('twigs:mossy_cobblestone_bricks', ['twigs:cobblestone_bricks', 'minecraft:vine']);

    // Quartz Elevator
    event.shapeless('quartzelv:quartz_elevator', ['minecraft:quartz_block', 'numismatic-overhaul:silver_coin']);
    event.shapeless('quartzelv:smooth_quartz_elevator', ['quartzelv:quartz_elevator', 'numismatic-overhaul:silver_coin']);
    event.smelting('quartzelv:smooth_quartz_elevator', 'quartzelv:quartz_elevator');
});
