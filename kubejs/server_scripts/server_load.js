// priority: 15
// Neomanila

onEvent('server.load', event => {

    if (!event.server.persistentData.disabledTravellersMaps) {
        console.log('Disabling Terralith\'s Traveller\'s Maps due to excessive lag.');
        event.server.runCommandSilent('/scoreboard objectives add tr.disable_maps dummy');
        event.server.runCommandSilent('/scoreboard players set %DISABLE_MAP tr.disable_maps 1');
        event.server.persistentData.disabledTravellersMaps = true;
    }
});
