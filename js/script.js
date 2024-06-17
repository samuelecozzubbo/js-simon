// Visualizzare in pagina 5 numeri casuali.
const randomNumbers = genSequenzaNumRandom(0,10,5)
console.log(randomNumbers);
//Richiamo la lista e il timer
const randomArray = document.querySelector(".randomArray");
const timerDisplay = document.querySelector(".timer");
const output = document.querySelector(".answer");
//Aggiungo l'array in pagina
randomArray.innerHTML = `Memorizza i numeri: <br> ${randomNumbers}`;

// Da lì parte un timer di 30 secondi.
let seconds = 4;
let timer = setInterval(countdown,1000);









//FUNZIONI
function countdown(){
    //Aggiungo il timer in pagina
    timerDisplay.innerHTML = `Tempo rimanente: ${seconds}`;
    if(seconds > 0) {
        seconds--;
    }else if(seconds === 0){
        randomArray.innerHTML = "";
        seconds--;
    }else{
        // Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        clearInterval(timer);
        //Creo array risposte corrette
        const correctArray = [];
        for(let i = 0; i < randomNumbers.length; i++) {
            userInput = parseInt(prompt("Inserisci il "+ parseInt(i+1) +" numero"));
            //Controllo se l'input è presente
            if(randomNumbers.includes(userInput)) {
                correctArray.push(userInput);
            }
        }
        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        console.log(correctArray);
        if(correctArray.length > 0) {
            output.innerHTML = `Bravo hai indovinato ${correctArray.length} numeri e sono ${correctArray}`;
        }else {
            output.innerHTML =`Mi dispiace hai perso`;
        }
        
    }
}


function genSequenzaNumRandom(min, max, arrLenght) {
    const arrToGen = [];
    while(arrToGen.length < arrLenght){
        //genero numero random nel range stabilito
        let newRandomNum = RandomNumberGenerator(min,max);
        //vedo se inserire o meno nell array(se non già compreso)
        if(!arrToGen.includes(newRandomNum)){ //se arrtogen non inlcude newrandom num
            arrToGen.push(newRandomNum);

        }
    }
    return arrToGen
}

//Funzione che genera un numero random 
    function RandomNumberGenerator(min, max) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber; 
    }
