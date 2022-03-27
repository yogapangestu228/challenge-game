
const rockPlayer = document.getElementById('rock-player');
const paperPlayer = document.getElementById('paper-player');
const scissorsPlayer = document.getElementById('scissor-player');
const rockCom = document.getElementById('rock-com');
const paperCom = document.getElementById('paper-com');
const scissorsCom = document.getElementById('scissor-com');
const boxResult = document.getElementById('box');
const hedding = document.getElementById("h1");
const button = document.querySelector('button');
const addElement1 = [...document.getElementsByClassName("dissap")];




function comResult() {
    let choices = ['Batu', 'Gunting', 'Kertas'];
    let randomChoices = Math.floor(Math.random() * 3);
    console.log(randomChoices)
    return choices[randomChoices];

}

function perbandingan(pilihanPlayer) {

    const pilihanCom = comResult();
    console.log("Hasil User => " + pilihanPlayer);
    console.log("Hasil dari => " + pilihanCom);

    switch (pilihanPlayer + pilihanCom) {
        case "BatuGunting":
        case "GuntingKertas":
        case "KertasBatu":
            menang();

            break;
        case "GuntingBatu":
        case "BatuKertas":
        case "KertasGunting":
            kalah();

            break;
        case "GuntingGunting":
        case "BatuBatu":
        case "KertasKertas":
            seri();

    }

    switch (pilihanCom) {
        case "Batu":
            rockCom.classList.add('pilih');
            break;
        case "Gunting":
            scissorsCom.classList.add('pilih');
            break;
        case "Kertas":
            paperCom.classList.add('pilih');


    }
}

    function menang() {
        console.log("Player 1 Win");
        resultMenangKalah();
        hedding.textContent = "Player 1 WIN"
    
    }
    
    function kalah() {
        console.log("COM WIN");
        resultMenangKalah();
    
        hedding.textContent = "COM WIN"
    }
    
    function seri() {
        console.log("Draw");
        resultDraw();
    
        hedding.textContent = "Draw"
    }




function resultMenangKalah() {
    boxResult.classList.add('boxMenang'),
        hedding.setAttribute("style", "font-size:36px; color:white;");

}
function resultDraw() {
    boxResult.classList.add('boxSeri');

    hedding.setAttribute("style", "font-size:36px; color:white;");

}

function play() {
    rockPlayer.addEventListener('click', function () {
        this.classList.add('pilih');
        perbandingan("Batu");

    })

    paperPlayer.addEventListener('click', function () {
        this.classList.add('pilih');
        perbandingan("Kertas");
    })

    scissorsPlayer.addEventListener('click', function () {
        this.classList.add('pilih');
        perbandingan("Gunting");
    })


}

play();

const refresh = document.getElementById("refresh");

refresh.addEventListener('click', function () {
   
    boxResult.classList.remove('boxMenang');
    boxResult.classList.remove('boxSeri');
    hedding.removeAttribute("style", "color: ''; font-size:'' ")
    // addElement1.classList.remove('pilih')
    
    addElement1.forEach(addElement2 => {
        addElement2.classList.remove('pilih')
    });

    hedding.style.marginTop = null
    hedding.style.fontSize = null
    hedding.textContent = "VS"
    button.disabled = false;
})