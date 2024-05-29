// initialiser les valeurs 
let attemps = 0 ; let bulls = 0 ;let cows= 0;
let secretNumber = generateSecreteNumber();
console.log(secretNumber);

let roundStats= {
    round : 1,
    wins : 0,
    loses : 0
}
// fonction permettant d'afficher les statistiques du jeu
function printGameStats(){
    const gameStats=document.getElementById('gameStats');
    gameStats.innerHTML='R: '+roundStats.round +' | V : '+roundStats.wins+' | D :'+ roundStats.loses;
};

//fonction qui permet de verifier ce que le joueur a taper si ca correspond a la valeur screte
function checkGuess(){
let guess = document.getElementById('guessInput').value;
let secretString = secretNumber.join('');
//console.log(secretString);
const checkGuessLenght =  new Set(guess);

if(guess.length != checkGuessLenght.size || guess.length !=4){

    document.getElementById('logsArea').value += guess+"  est invalide , veuiller taper un nombre  avec 4 chiffres differents\n";
    return null ;

}
attemps +=1;
bulls=0;
cows=0;
for (let i = 0; i < 4; i++) {

    if (secretString[i] ==guess[i]) {
        bulls += 1;
        
    }else if (secretString.includes(guess[i])) {
        cows += 1 
     
    }
  
}
if (bulls === 4) {
    document.getElementById('logsArea').value += secretString+" | Bravo vous avez gagné en "+attemps+" tentatives\n";
    attemps += 1;
    roundStats.wins += 1;
    return playAgain();
    
}else if (attemps === 10) {
        document.getElementById('logsArea').value += secretString+" | Dommage , vous avec perdu  nombre tentative épuisée\n";
        roundStats.loses += 1;
        return playAgain();
        
}
document.getElementById('logsArea').value += guess +' - '+bulls+' B - '+cows+' C - '+attemps+' essai\n';
printGameStats();
};
function playAgain(){ 
     roundStats.round += 1;
     printGameStats();
     attemps=0; bulls = 0 ; cows = 0;
     secretNumber = generateSecreteNumber();


};
function generateSecreteNumber() {
    const numbers = Array.from({ length: 9 }, (v, k) => k + 1);
    let currentIndex = numbers.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex); 
        currentIndex -= 1; 

        
        [numbers[currentIndex], numbers[randomIndex]] = [numbers[randomIndex], numbers[currentIndex]];
    }

    return numbers.slice(0,4);
}



// fonction qui permet d'afficher le rele du jeu sous format alert 
function printRules(){
    alert(" 'Bulls and Cows'  est un jeu de déduction où un joueur (le codeur) pense à un nombre secret de 4 chiffres uniques, et l'autre joueur (le devineur) essaie de deviner ce nombre. À chaque proposition, le codeur fournit des indications : un 'bull' (taureau) signifie qu'un chiffre est correct et bien placé, tandis qu'une 'cow'(vache) signifie qu'un chiffre est correct mais mal placé. Le jeu continue jusqu'à ce que le devineur trouve le nombre exact, obtenant ainsi 4 taureaux pour un code de 4 chiffres. L'objectif est de découvrir le code secret en un minimum de tentatives, en utilisant les indications pour affiner progressivement les propositions. ")

}
//fonction permettant de nettoyer le textAREA
function clearLogs(){
    document.getElementById('logsArea').value='';
   clear
}