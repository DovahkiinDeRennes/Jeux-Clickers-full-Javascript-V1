





let logoClicker = document.getElementById('logo');
let visible1 = document.getElementById('cacher');
let logoClicker2 = document.getElementById('logo2');
let logoClicker3 = document.getElementById('logo1');
let tempsChargement = document.getElementById('chargement');



logoClicker.addEventListener('click', function() {
    logoClicker3.style.visibility = 'hidden';
    logoClicker.style.visibility = 'hidden';
    logoClicker2.style.visibility = 'hidden';
    tempsChargement.style.visibility = 'visible';
    tempsChargement.classList.add('fadeInDownBig');
    tempsChargement.classList.remove('fadeOutDownBig');
    visible1.classList.remove('fadeOutLeftBig');
    visible1.classList.remove('fadeInRightBig');

    setTimeout(function() {
        visible1.style.visibility = 'visible';
        visible1.classList.add('fadeInRightBig');
       
        tempsChargement.classList.remove('fadeInDownBig');
        tempsChargement.classList.add('fadeOutDownBig');
        setTimeout(function(){
            tempsChargement.style.visibility = 'hidden';
        },1000);
    }, 3000);
});


let close = document.getElementById('fermerJeux');
let confirmationHtml = document.getElementById('confirmation');
let oui = document.getElementById('oui');
let non = document.getElementById('non');


close.addEventListener('click', function(){

    
    visible1.classList.add('flou');


    confirmationHtml.style.visibility = 'visible';
    
    oui.addEventListener('click',function(){
    visible1.classList.add('fadeOutLeftBig')
    setTimeout(function(){
        logoClicker.style.visibility = 'visible';
        visible1.style.visibility = 'hidden';
        logoClicker2.style.visibility = 'visible';
        confirmationHtml.style.visibility = 'hidden';
        logoClicker3.style.visibility = 'visible';
        visible1.classList.remove('flou');
    },1000);

   
})

non.addEventListener('click', function(){
    confirmationHtml.style.visibility = 'hidden';
    
    visible1.classList.remove('flou');
})

})


let confirmationReset = document.getElementById('confirmationReset');
let resetStorage = document.getElementById('reset');
let oui2 = document.getElementById('oui2');
let non2 = document.getElementById('non2');

resetStorage.addEventListener('click',function(){

    visible1.classList.add('flou');
    confirmationReset.style.visibility = 'visible';

    oui2.addEventListener('click', function(){
        confirmationReset.style.visibility = 'hidden';
        visible1.classList.remove('flou');

        if (oui2){
            // Réinitialiser les valeurs locales
            nombreDeCoin = 0;
            unParUn = 1;
            buff1Applied = false;
            buff2Applied = false;
            buff3Applied = false;
            buff4Applied = false;
            buffSecretApplied = false;
    
            // Réinitialiser les buffs dans le localStorage
            localStorage.removeItem('nombreDeCoin');
            localStorage.removeItem('buff1Applied');
            localStorage.removeItem('buff2Applied');
            localStorage.removeItem('buff3Applied');
            localStorage.removeItem('buff4Applied');
            localStorage.removeItem('buffSecretApplied');
    
            // Arrêter les intervalles actifs
            let interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
            for (let i = 1; i < interval_id; i++) {
                window.clearInterval(i);
            };
    
            // Mettre à jour l'affichage des coins
            AffichageDesCoins();
    
    
        }
    })


    non2.addEventListener('click', function(){
        confirmationReset.style.visibility = 'hidden';
        
        visible1.classList.remove('flou');
    });


});
  

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
    let affichageCoin = document.getElementById('affichageCoin');
    affichageCoin.textContent = 'Nombre de coins: ' + nombreDeCoin;
    localStorage.setItem('nombreDeCoin', nombreDeCoin);
}

function IncrementerLeCompteur() {
    let ajoutCoin = document.getElementById('ajoutCoin');

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