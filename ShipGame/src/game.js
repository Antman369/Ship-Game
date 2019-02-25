var GAMEWIDTH = 960;
var GAMEHEIGHT = 640;
var background;
var player;
var cursors;
var config = {
    type: Phaser.AUTO,
    width: GAMEWIDTH,
    height: GAMEHEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload () {
    this.load.image('background', 'assets/water.jpg');
    this.load.image('ship', 'assets/ship.png');
}

function create () {
    background = this.add.image(480, 320, 'background');
    
    player = this.physics.add.sprite(480, 320, 'ship');
    player.setMaxVelocity(250);
    player.setDamping(true);
    player.setDrag(0.97);
    
    cursors = this.input.keyboard.createCursorKeys();
    
    this.cameras.main.startFollow(player, true, 0.05, 0.05);
}

function update () {    
    if (cursors.right.isDown) {
        player.setAngularVelocity(10);
    }
    else if (cursors.left.isDown) {
        player.setAngularVelocity(-10);
    }
    else {
        player.setAngularVelocity(0);
    }
    if (cursors.up.isDown) {
        console.log("up is down");
        player.setVelocityX(50 * Math.cos(((player.angle)*(Math.PI/180))-1.5708));
        player.setVelocityY(50 * Math.sin(((player.angle)*(Math.PI/180))-1.5708));
    }
}