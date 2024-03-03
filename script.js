let timeDis = document.getElementById("timeDis");

let elapsedTime = 0;
let startTime = 0;
let timer = null;
let isRunning = false;

function start(){
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    timeDis.textContent = `00:00:00:00`;
    elapsedTime = 0;
}

function update(){
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let millisec = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    millisec = String(millisec).padStart(2, 0);

    timeDis.textContent = `${hours}:${minutes}:${seconds}:${millisec}`;
}
      
