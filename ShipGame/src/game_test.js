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
            fps: 60,
            gravity: { y: 0 },
            debug: true
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
    this.load.image('background', 'assets/water.png');
    this.load.image('ship', 'assets/ship.png');
}

function create () {
    background = this.add.image(480, 320, 'background');
    
    player = this.physics.add.sprite(480, 320, 'ship');
    player.setMaxVelocity(25);
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
        this.physics.velocityFromAngle(player.angle - 90, 10, player.body.acceleration);
    }
    else {
        player.setAcceleration(0);
    }
}