const Piedra = "Piedra";
const Papel = "Papel";
const Tijeras = "Tijeras";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

const piedraBtn = document.getElementById("Piedra");
const papelBtn = document.getElementById("Papel");
const tijerasBtn = document.getElementById("Tijeras");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", () => {
    play(Piedra);
});
papelBtn.addEventListener("click", () => {
    play(Papel);
});
tijerasBtn.addEventListener("click", () => {
    play(Tijeras);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "imagenes/" + userOption + ".png";

    resultText.innerHTML = "JUGANDO";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "imagenes/" + machineOption + ".png";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "imagenes/" + machineOption + ".png";

        switch (result) {
            case TIE:
                resultText.innerHTML = "EMPATE";
                break;
            case WIN:
                resultText.innerHTML = "GANASTES";
                break;
            case LOST:
                resultText.innerHTML = "PERDISTES";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return Piedra;
        case 1:
            return Papel;
        case 2:
            return Tijeras;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === Piedra) {

        if (machineOption === Papel) return LOST;
        if (machineOption === Tijeras) return WIN;

    } else if (userOption === Papel) {

        if (machineOption === Tijeras) return LOST;
        if (machineOption === Piedra) return WIN;

    } else if (userOption === Tijeras) {

        if (machineOption === Piedra) return LOST;
        if (machineOption === Papel) return WIN;

    }
}
