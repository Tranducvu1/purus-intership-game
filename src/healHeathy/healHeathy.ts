import * as pc from 'playcanvas';
import { CharacterEntity } from '../player/characterEntity.ts.ts';
// Function to create a healHeathy entity
export function healHeathy(app) {
    function createNewHealHeathy(x, y, z) {
        const healHealthy = new pc.Entity('healHeathy');

        healHealthy.addComponent('model', {
            type: 'box'
        });
        
        healHealthy.addComponent('rigidbody', {
            type: 'static'
        });

        healHealthy.addComponent('collision', {
            type: 'box',
            halfExtents: new pc.Vec3(0.5, 0.5, 0.5),
            group: 1,
            mask: 2
        });
        // add material to the healHeathy entity
        const material = new pc.StandardMaterial();
        material.diffuse = new pc.Color(0, 1, 0);
        material.update();
        // set the material to the healHeathy entity
        healHealthy.model!.meshInstances[0].material = material;
        healHealthy.setLocalScale(1/2, 1/2, 1/2);
        healHealthy.setLocalPosition(x, y, z);
        app.root.addChild(healHealthy);

        // Check for collisions
        healHealthy.collision?.on('collisionstart', (result) => {
            console.log('Collided with:', result.other.name);
            
            if (result.other.tags.has('player') && result.other instanceof CharacterEntity) {
                if(result.other.maxHealth = 100) return;
                console.log('heal');
                
                result.other.heal(10);
                
                // destroy entity after collision
                healHealthy.destroy();
                
                // create new entity with new location after a short delay
                const newX = Math.random() * 200 - 100;
                const newZ = Math.random() * 200 - 100;
                
                // Delay 100ms to create a smooth effect
                setTimeout(() => {
                    createNewHealHeathy(newX, 1, newZ);
                }, 100); 
            }
        });
    }
    
    // Create a new healHeathy entity at first position
    createNewHealHeathy(-50, 1, 0);
    createNewHealHeathy(-70, 1, -30);
}