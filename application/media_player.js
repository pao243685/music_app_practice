const media = document.getElementById("media");

() => {
    progress_bar.max = 100;
    progress_bar.value = 0;
    if(play_btn.classList.contains("pause")){
        media.play();
    }
}