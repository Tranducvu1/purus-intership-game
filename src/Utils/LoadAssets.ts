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
    // Paths are set relative to the configured base URL "".
    const assets = {
        // Player model and animations
        man: new pc.Asset('model_man', 'model', { url: 'model/idle.glb' }),
        idle: new pc.Asset('animation_idle', 'animation', { url: 'model/idle.glb' }),
        running: new pc.Asset('animation_running', 'animation', { url: 'animation/man/running.glb' }),
        reloading: new pc.Asset('animation_reloading', 'animation', { url: 'animation/man/reloading.glb' }),
        shooting: new pc.Asset('animation_shooting', 'animation', { url: 'animation/man/shooting.glb' }),
        rifleaim: new pc.Asset('animation_rifle', 'animation', { url: 'animation/man/rifleaim.glb' }),
        riflewalk: new pc.Asset('animation_riflewalk', 'animation', { url: 'animation/man/rifle walk.glb' }),
        runningshooting: new pc.Asset('animation_runningshooting', 'animation', { url: 'animation/man/runningshooting.glb' }),
        death: new pc.Asset('animation_death', 'animation', { url: 'animation/man/death.glb' }),
        
        // Weapon models
        weapon: new pc.Asset('model_ak', 'model', { url: 'model/ak.glb' }),
        crosshair: new pc.Asset('aim', 'model', { url: 'model/crosshair.glb' }),
    
        // Zombie model and animations
        zombie: new pc.Asset('zombie', 'model', { url: 'model/zombie.glb' }),
        zombieIdle: new pc.Asset('animation_zombieidle', 'animation', { url: 'animation/zombie/zombieidle.glb' }),
        zombierunning: new pc.Asset('animation_zombierunning', 'animation', { url: 'animation/zombie/zombierunning.glb' }),
        zombiedeath: new pc.Asset('animation_zombiedeath', 'animation', { url: 'animation/zombie/zombiedeath.glb' }),
        zombieattack: new pc.Asset('animation_zombieattack', 'animation', { url: 'animation/zombie/zombieattack.glb' }),
    
        // UI elements and other models
        healthbar: new pc.Asset('healthbar', 'model', { url: 'model/heathbar/healthbar.glb' }),
        healheathy : new pc.Asset('heathy','model',{ url: 'model/buff.glb' }),
        bullet: new pc.Asset('map', 'model', { url: 'model/bullet.glb' }),
        map: new pc.Asset('map', 'model', { url: 'model/map.glb' })
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
