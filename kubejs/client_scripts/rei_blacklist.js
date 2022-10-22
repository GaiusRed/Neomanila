// priority: 0
// Neomanila

// REI Blacklist
onEvent('rei.hide.items', event => {
	event.hide([
		'minecraft:barrier',
		'minecraft:jigsaw',
		'minecraft:light',
		'minecraft:structure_block',
		'minecraft:structure_void',
		'minecraft:debug_stick',
		'additionaladditions:fried_egg',
		'additionaladditions:rope',
		'adventurez:gilded_netherite_fragment',
		'adventurez:stone_golem_helmet',
		'adventurez:stone_golem_chestplate',
		'adventurez:stone_golem_leggings',
		'adventurez:stone_golem_boots',
		'twigs:mossy_bricks',
		'twigs:mossy_brick_stairs',
		'twigs:mossy_brick_slab',
		'twigs:mossy_brick_wall',
	]);
});

onEvent('rei.hide.fluids', event => {
	//event.hide([
	// // Placeholder - none for now.
	//]);
});
