// Assets.ts

import * as pc from 'playcanvas';

/**
 * Loads and registers a collection of assets for the PlayCanvas application.
 * 
 * @param {pc.Application} app - The PlayCanvas application instance.
 * @returns {Record<string, pc.Asset>} - An object containing references to each loaded asset.
 */
export function loadAssets(app: pc.Application): Record<string, pc.Asset> {
    // Define assets for the game, each with a unique key for easy access.
    // Paths are set relative to the configured base URL "/purus-intership-game/".
    const assets = {
        // Player model and animations
        man: new pc.Asset('model_man', 'model', { url: '/purus-intership-game/model/idle.glb' }),
        idle: new pc.Asset('animation_idle', 'animation', { url: '/purus-intership-game/model/idle.glb' }),
        running: new pc.Asset('animation_running', 'animation', { url: '/purus-intership-game/animation/man/running.glb' }),
        reloading: new pc.Asset('animation_reloading', 'animation', { url: '/purus-intership-game/animation/man/reloading.glb' }),
        shooting: new pc.Asset('animation_shooting', 'animation', { url: '/purus-intership-game/animation/man/shooting.glb' }),
        rifleaim: new pc.Asset('animation_rifle', 'animation', { url: '/purus-intership-game/animation/man/rifleaim.glb' }),
        riflewalk: new pc.Asset('animation_riflewalk', 'animation', { url: '/purus-intership-game/animation/man/rifle walk.glb' }),
        runningshooting: new pc.Asset('animation_runningshooting', 'animation', { url: '/purus-intership-game/animation/man/runningshooting.glb' }),
        death: new pc.Asset('animation_death', 'animation', { url: '/purus-intership-game/animation/man/death.glb' }),
        
        // Weapon models
        weapon: new pc.Asset('model_ak', 'model', { url: '/purus-intership-game/model/ak.glb' }),
        crosshair: new pc.Asset('aim', 'model', { url: '/purus-intership-game/model/crosshair.glb' }),
    
        // Zombie model and animations
        zombie: new pc.Asset('zombie', 'model', { url: '/purus-intership-game/model/zombie.glb' }),
        zombieIdle: new pc.Asset('animation_zombieidle', 'animation', { url: '/purus-intership-game/animation/zombie/zombieidle.glb' }),
        zombierunning: new pc.Asset('animation_zombierunning', 'animation', { url: '/purus-intership-game/animation/zombie/zombierunning.glb' }),
        zombiedeath: new pc.Asset('animation_zombiedeath', 'animation', { url: '/purus-intership-game/animation/zombie/zombiedeath.glb' }),
        zombieattack: new pc.Asset('animation_zombieattack', 'animation', { url: '/purus-intership-game/animation/zombie/zombieattack.glb' }),
    
        // UI elements and other models
        healthbar: new pc.Asset('healthbar', 'model', { url: '/purus-intership-game/model/heathbar/healthbar.glb' }),
        healheathy : new pc.Asset('heathy','model',{ url: '/purus-intership-game/model/buff.glb' }),
        bullet: new pc.Asset('map', 'model', { url: '/purus-intership-game/model/bullet.glb' }),
        map: new pc.Asset('map', 'model', { url: '/purus-intership-game/model/map.glb' })
    };

    // AssetListLoader helps manage batch loading and resolves dependencies automatically.
    const assetListLoader = new pc.AssetListLoader(Object.values(assets), app.assets);

    // Load all assets, logging success for debugging.
    assetListLoader.load(() => {
        console.log("Assets loaded successfully."); // Confirms assets are ready to use
    });

    // Return the loaded assets for convenient access by key in other modules.
    return assets;
}