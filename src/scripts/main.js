AOS.init();

const dataDoAniversario = new Date("Jan 27, 2024 19:00:00");
const dataStampAniversario = dataDoAniversario.getTime();
 

const contagemRegressiva = setInterval(function(){

    const dataAtual = new Date();
    const dataStampAtual = dataAtual.getTime();
    const tempoAteOAniversario = dataStampAniversario - dataStampAtual;

    const dias = 1000*60*60*24; //Em milissigundos
    const horas = 1000*60*60; //Em milissigundos
    const minutos = 1000*60; //Em milissigundos
    const segundos = 1000 //Em milissigundos

    const diaAteOEvento = Math.floor(tempoAteOAniversario / dias );
    const horasAteOEvento = Math.floor(tempoAteOAniversario % dias / (horas));
    const minutosAteOEvento = Math.floor(tempoAteOAniversario % horas / (minutos));
    const segundosAteOEvento = Math.floor(tempoAteOAniversario % minutos /(segundos));

    document.getElementById('contador').innerHTML =`${diaAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(tempoAteOAniversario < 0){
        clearInterval(contagemRegressiva);
        document.getElementById('contador').innerHTML = "O aniversaio ja começou"
    }
    
}, 1000)