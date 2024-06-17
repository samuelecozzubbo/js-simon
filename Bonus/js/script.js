// Visualizzare in pagina 5 numeri casuali.
const randomNumbers = genSequenzaNumRandom(0,10,5)
console.log(randomNumbers);
//Richiamo la lista e il timer
const randomArray = document.querySelector(".randomArray");
const timerDisplay = document.querySelector(".timer");
const output = document.querySelector(".answer");
const input = document.querySelector(".input");
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
        let conteggio = 1;
        let inputBox = document.createElement("input");
        let myBtn = document.createElement("button");
        myBtn.innerText = "Invia";
        input.appendChild(inputBox);
        input.appendChild(myBtn);

        //Gestisco il click
        myBtn.addEventListener("click",
            function() {
                if(conteggio < randomNumbers.length){
                    let userInput = parseInt(inputBox.value);
                    console.log(conteggio);
                    //Controllo se l'input è presente
                    if(correctArray.includes(userInput)){
                        alert("Hai già inserito questo numero");
                    }else{
                        if(randomNumbers.includes(userInput)) {
                            correctArray.push(userInput);
                            conteggio++;
                        }else{
                            conteggio++;
                        }
                    }
                    inputBox.value = "";
                    console.log(correctArray);
                }else{
                    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
                    if(correctArray.length > 0) {
                    output.innerHTML = `Bravo hai indovinato ${correctArray.length} numeri e sono ${correctArray}`;
                    }else {
                    output.innerHTML =`Mi dispiace hai perso`;
                    }
                    return;
                }
                
            }
        )
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
