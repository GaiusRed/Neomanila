// priority: 10
// Neomanila

onEvent('recipes', (event) => {
    // Convenience Functions
    const replaceInputID = (recipeID, from, to) => { event.replaceInput({ id: recipeID }, from, to, true) };
    const replaceOutputID = (recipeID, from, to) => { event.replaceOutput({ id: recipeID }, from, to, true) };
    const replaceInput = (from, to) => { event.replaceInput({}, from, to, true) };
    const replaceOutput = (from, to) => { event.replaceOutput({}, from, to, true) };

    // Gilded Netherite Armor can be crafted via Gold Rings or Gilded Netherite Fragments
    replaceInput('additionaladditions:gold_ring', 'adventurez:gilded_netherite_fragment');
    event.smithing('additionaladditions:gilded_netherite_helmet', 'minecraft:netherite_helmet', 'additionaladditions:gold_ring');
    event.smithing('additionaladditions:gilded_netherite_chestplate', 'minecraft:netherite_chestplate', 'additionaladditions:gold_ring');
    event.smithing('additionaladditions:gilded_netherite_leggings', 'minecraft:netherite_leggings', 'additionaladditions:gold_ring');
    event.smithing('additionaladditions:gilded_netherite_boots', 'minecraft:netherite_boots', 'additionaladditions:gold_ring');
});
