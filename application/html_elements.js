let progress_bar = document.getElementById("progress");
let media = document.getElementById("media");
let play_btn = document.getElementById("play");
const song_img = document.getElementById("song-img");
const lastest = document.getElementById("lastest");
const forward = document.getElementById("forward")


progress_bar.max = 100;
progress_bar.value = 0;

export{
    progress_bar,
    media,
    play_btn,
    song_img,
    lastest,
    forward
}