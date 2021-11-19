
let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    f10Btn = document.getElementById('f10'),
    b10Btn = document.getElementById('b10'),
    volumeBtn = document.getElementById('volume'),
    muteBtn = document.getElementById('mute'),
    unmuteBtn = document.getElementById('unmute'),
    volumeInputEle = document.getElementById('volume-slider'),
    swapBtn = document.getElementById('swap'),
    fullscreenBtn = document.getElementById('full-screen'),
    downloadBtn = document.getElementById('download'),
    video = document.getElementById('main');


function play(){
    console.log('play the video');
    video.play();
}
function pause(){
    console.log('pause the video');
    video.pause();
}
function f10(){
    console.log('forward 10 sec');
    let cTime = video.currentTime;
    cTime = cTime + 10;
    video.currentTime = cTime;
}
function b10(){
 console.log('backward 10 sec');
 let cTime = video.currentTime;
 cTime = cTime - 10;
 video.currentTime = cTime;
}
function volumeUpdate(){
    let volumeInput = volumeInputEle.value;
    console.log(volumeInput);

    volumeInput = volumeInput/100
    console.log(volumeInput);

   video.volume = volumeInput;
}
function mute(){
console.log('Mute Audio');
video.muted = true;
}
function unmute(){
console.log('Unmute');
video.muted = false;
}
function swap(){
let targetPath = this.value,
    cTime = video.currentTime;
video.setAttribute('src', targetPath);
video.currentTime = cTime;
play();
}
function fullscreen(){
console.log('full screen');
}
function download(){
console.log('download');
}

playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
f10Btn.addEventListener('click', f10);
b10Btn.addEventListener('click', b10);
volumeBtn.addEventListener('click', volumeUpdate);
muteBtn.addEventListener('click', mute);
unmuteBtn.addEventListener('click', unmute);
swapBtn.addEventListener('change', swap);
fullscreenBtn.addEventListener('click', fullscreen);
downloadBtn.addEventListener('click', download);