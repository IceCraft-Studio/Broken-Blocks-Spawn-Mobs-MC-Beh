import { world } from "@minecraft/server";
import { mobList, version } from "./mob_list.js";

world.afterEvents.playerBreakBlock.subscribe((eventData) => {
    if ((version === 'hard' || version === 'normal') && randInt(0,7500) === 0) {
        eventData.player.dimension.spawnEntity(randChoice(['wither','ender_dragon','warden']),eventData.block.location);
    } else {
        eventData.player.dimension.spawnEntity(randChoice(mobList),eventData.block.location);
    }
});

function randInt(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

function randChoice(array, num) {
    if (num) {
        const choice = [];
        while (num > 0) {
            num--;
            choice.push(array[randInt(0, array.length - 1)]);
        }
        return choice;
    } else {
        return array[randInt(0, array.length - 1)];
    }
}