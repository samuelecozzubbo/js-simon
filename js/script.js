// Visualizzare in pagina 5 numeri casuali.
const randomNumbers = genSequenzaNumRandom(0,10,5)
console.log(randomNumbers);
// Da lì parte un timer di 30 secondi.
let seconds = 30;
let timer = setInterval(countdown,1000);
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.





//FUNZIONI
function countdown(){
    console.log(seconds);
    if(seconds > 0) {
        seconds--;
    }else {
        clearInterval(timer);
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
