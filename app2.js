
let reset = document.getElementById('reset');

reset.addEventListener('click', function(){

        if (reset){
           
            nombreDeCoin = 0;
            unParUn = 1;
            buff1Applied = false;
            buff2Applied = false;
            buff3Applied = false;
            buff4Applied = false;
            buffSecretApplied = false;
    
            
            localStorage.removeItem('nombreDeCoin');
            localStorage.removeItem('buff1Applied');
            localStorage.removeItem('buff2Applied');
            localStorage.removeItem('buff3Applied');
            localStorage.removeItem('buff4Applied');
            localStorage.removeItem('buffSecretApplied');
    
           
            let interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
            for (let i = 1; i < interval_id; i++) {
                window.clearInterval(i);
            };
            AffichageDesCoins();
    }})





let nombreDeCoin = localStorage.getItem('nombreDeCoin') ? parseInt(localStorage.getItem('nombreDeCoin')) : 0;
let unParUn = 1;

let buff1Applied = localStorage.getItem('buff1Applied') === 'true';
let buff2Applied = localStorage.getItem('buff2Applied') === 'true';
let buff3Applied = localStorage.getItem('buff3Applied') === 'true';
let buff4Applied = localStorage.getItem('buff4Applied') === 'true';
let buffSecretApplied = localStorage.getItem('buffSecretApplied') === 'true';


if (buff1Applied === true){
    unParUn += 10;
    AffichageDesCoins();
}

if (buff2Applied === true){
    AffichageDesCoins();
    setInterval(function() {
        nombreDeCoin++;
        AffichageDesCoins();
        console.log('+1');
    }, 2000);
}

if (buff3Applied === true){
    unParUn += 1000;
    AffichageDesCoins();
}


if (buff4Applied === true){
    AffichageDesCoins();
    setInterval(function() {
        let mille = 100;
        let total = nombreDeCoin + mille;
        nombreDeCoin = total;
        AffichageDesCoins();
        console.log('+100');
    }, 5000);
}

if (buffSecretApplied === true){
    unParUn += 1000000000;
    AffichageDesCoins();
}




function AffichageDesCoins() {
    let affichageCoin = document.getElementById('afficherLesCoins');
    affichageCoin.textContent = nombreDeCoin;
    localStorage.setItem('nombreDeCoin', nombreDeCoin);
}

function IncrementerLeCompteur() {
    let ajoutCoin = document.getElementById('ajouterCoin');

    ajoutCoin.addEventListener("click", function() {
        nombreDeCoin += unParUn;
        AffichageDesCoins();

        if (nombreDeCoin >= 10 && !buff1Applied) {
            let buff1 = document.getElementById('buff1');
            if (buff1) {
                buff1.addEventListener("click", Buff1, { once: true });
            }
        }
        if (nombreDeCoin >= 100 && !buff2Applied) {
            let buff2 = document.getElementById('buff2');
            if (buff2) {
                buff2.addEventListener("click", Buff2, { once: true });
            }
        }
        if (nombreDeCoin >= 1000 && !buff3Applied) {
            let buff3 = document.getElementById('buff3');
            if (buff3) {
                buff3.addEventListener("click", Buff3, { once: true });
            }
        }
        if (nombreDeCoin >= 10000 && !buff4Applied) {
            let buff4 = document.getElementById('buff4');
            if (buff4) {
                buff4.addEventListener("click", Buff4, { once: true });
            }
        }

        if (nombreDeCoin >= 1 && !buffSecretApplied){
            let buffSecret = document.getElementById('buffSecret1');
            if (buffSecret){
                buffSecret.addEventListener("click", SecretBuff, { once: true });
            }
        }
    });
}


function Buff1() {
    unParUn += 10;
    nombreDeCoin -= 10;
    AffichageDesCoins();
    buff1Applied = true;
    localStorage.setItem('buff1Applied', 'true');
}

function Buff2() {
    nombreDeCoin -= 100;
    AffichageDesCoins();
    setInterval(function() {
        nombreDeCoin++;
        AffichageDesCoins();
        console.log('+1');
    }, 2000);
    buff2Applied = true;
    localStorage.setItem('buff2Applied', 'true');
}


function Buff3() {
    unParUn += 1000;
    nombreDeCoin -= 1000;
    AffichageDesCoins();
    buff3Applied = true;
    localStorage.setItem('buff3Applied', 'true');
}


function Buff4() {
    nombreDeCoin -= 10000;
    AffichageDesCoins();
    setInterval(function() {
        let mille = 100;
        let total = nombreDeCoin + mille;
        nombreDeCoin = total;
        AffichageDesCoins();
        console.log('+100');
    }, 5000);
    buff4Applied = true;
    localStorage.setItem('buff4Applied', 'true');
}

function SecretBuff(){
    unParUn += 1000000000;
    nombreDeCoin -= 1;
    AffichageDesCoins();
    buffSecretApplied = true;
    localStorage.setItem('buffSecretApplied', 'true');
}

IncrementerLeCompteur();
AffichageDesCoins();
Reset();


