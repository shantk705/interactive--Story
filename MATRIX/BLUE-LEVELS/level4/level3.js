
var healthPoints = 100;

function updateHealthPoints(points){
    healthPoints = points;
    var healthBar = document.querySelector("#healthbar");
    healthBar.style.width = points + "%";

    if( healthPoints < 1 ) {
        alert("Game over!");
        window.location.reload();
    
    }
} 

function iShoot(enemy){

    enemy.classList.add("dead");
    

    if(!livingEnemies().length) {
        alert(" You won! You killed the viruses that smith had sent.You saved the people of Zion and destroyed the simulation.");
    }
    }


function enemyAttacksMe(enemy){

    enemy.classList.add("showing");

    setTimeout(() => {
        enemyShootMe(enemy);
        
    }, 800);

    setTimeout(()=>{
        enemy.classList.remove("showing")
    },1500);


}



function enemyShootMe(enemy){
    
    if(!enemy.classList.contains("dead")){

        setTimeout( ()=> {
            enemy.classList.add("shooting");
        },200);
        
        updateHealthPoints(healthPoints - 5);
        
        setTimeout( ()=> {
            enemy.classList.remove("shooting")
        },400);



    }

    
}


function livingEnemies() {
    return document.querySelectorAll(".enemy:not(.dead)");

}

function randomEnemyAttacks(){



    var randomEnemeyNo = Math.random() * livingEnemies().length;
    randomEnemeyNo = Math.floor(randomEnemeyNo);
    var enemy = livingEnemies()[randomEnemeyNo];

    var randomDelay = Math.random() * 2000 + 1000;

    

    setTimeout( () => {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);

}



