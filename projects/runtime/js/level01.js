var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: 5,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:500,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE


function createEnemy(x,y){
var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'purple');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -1;  
enemy.rotationalVelocity = 10;
enemy.onPlayerCollision = function() {
    game.changeIntegrity(-10);
enemy.fadeOut();
};
enemy.onProjectileCollision = function(){
    game.increaseScore(100) ;
enemy.fadeOut();

};
}
createEnemy(400,groundY-10);
createEnemy(800,groundY-100);
createEnemy(1200,groundY-50);   
function createSawBlade(x,y) {
    // your code goes here
var hitZoneSize = 25;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);

game.addGameItem(myObstacle);    
var obstacleImage = draw.bitmap('img/sawblade.png');

obstacleImage.x = -25;
obstacleImage.y = -25;
       
myObstacle.rotationalVelocity = 10;
myObstacle.x = x;
myObstacle.y = y;
myObstacle.addChild(obstacleImage);

}  

createSawBlade(200, 400);
createSawBlade(500, 375);
createSawBlade(600, 400);
for(var i = 0; i < levelData.gameItems.length; i++){
    createSawBlade(levelData.gameItems[i].x,levelData.gameItems[i].y);
}
        var reward =  game.createGameItem('reward',25);
    function createReward(x,y){
    var redSquare = draw.rect(50,50,'yellow');
    redSquare.x = -25;
redSquare.y = -25; 
reward.addChild(redSquare);
reward.x = x;
reward.y = y; 
game.addGameItem(reward);
reward.velocityX = -1;  
reward.rotationalVelocity = 20;
reward.onPlayerCollision = function() {
    game.increaseScore(10000);
reward.fadeOut();
};
reward.onProjectileCollision = function(){
    game.increaseScore(10000);
reward.fadeOut();

}
        
    }
    createReward(1500,groundY-60);
    }

        
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}