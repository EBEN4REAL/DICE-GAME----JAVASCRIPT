/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls  a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore , activeplayer ,  gamePlaying;


init();



document.querySelector('.btn-roll').addEventListener('click' , function(){
  if (gamePlaying) {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;


    //2. Display the result
    var diceDOM =  document.querySelector('.dice');
    diceDOM .style.display = 'block';
    diceDOM.src = 'dice-' + dice +  '.png';


    //3. Update the round score IF thewqwe|\waf\ rolled number was NOT a 1
    if (dice !==  1 ) {
        //Add Score
        roundScore += dice;
         document.querySelector('#current-' + activeplayer).textContent = roundScore;
         
    }else{
        //Next Player
        nextPlayer();
    }
}
    
});


document.querySelector('.btn-hold').addEventListener('click' , function(){
    if (gamePlaying) {
  //Add current to  GLOBAL score
  scores[activeplayer] += roundScore;


  //update the UI  
 document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];
       

  //check if player won the game
  if (scores[activeplayer] >= 30) {
     document.getElementById('name-'  + activeplayer).textContent = 'Winner!';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
     gamePlaying = false;
  }else{
      //Next Player
       nextPlayer();
  }

    }
  
     
});

function nextPlayer(){
       //Next Player
        activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '1';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active'); 
        document.querySelector('.dice').style.display = 'none';
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active'); 
}

document.querySelector('.btn-new').addEventListener('click' , init);


function init(){
    scores = [0 , 0];
    roundScore = 0;
    activeplayer = 0;
    gamePlaying = true;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent  = '0';
document.getElementById('score-1').textContent  = '0';
document.getElementById('current-0').textContent  = '0';
document.getElementById('current-1').textContent  = '0';
document.getElementById('name-0' ).textContent = 'Player 1';
document.getElementById('name-1' ).textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('winner');
}
























//
// // //document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice +'</em>';





var x = document.querySelector('#score-0').textContent;
console.log(x);







/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
