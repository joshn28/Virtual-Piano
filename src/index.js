document.addEventListener("keydown", function (event) {
    let audio;
    if (event.code === "KeyA") {
        audio = new Audio("./audio/A.mp3");
        audio.play();
    } else if (event.code === "KeyS") {
        audio = new Audio("./audio/S.mp3");
        audio.play();
    } else if (event.code === "KeyD") {
        audio = new Audio("./audio/D.mp3");
        audio.play();
    } else if (event.code === "KeyF") {
        audio = new Audio("./audio/F.mp3");
        audio.play();
    } else if (event.code === "KeyG") {
        audio = new Audio("./audio/G.mp3");
        audio.play();
    } else if (event.code === "KeyH") {
        audio = new Audio("./audio/H.mp3");
        audio.play();
    } else if (event.code === "KeyJ") {
        audio = new Audio("./audio/J.mp3");
        audio.play();
    } else if (event.code === "KeyW") {
        audio = new Audio("./audio/W.mp3");
        audio.play();
    } else if (event.code === "KeyE") {
        audio = new Audio("./audio/E.mp3");
        audio.play();
    } else if (event.code === "KeyT") {
        audio = new Audio("./audio/T.mp3");
        audio.play();
    } else if (event.code === "KeyY") {
        audio = new Audio("./audio/Y.mp3");
        audio.play();
    } else if (event.code === "KeyU") {
        audio = new Audio("./audio/U.mp3");
        audio.play();
    } else {
        console.log("Warning: do not press this key.");
    }
})
