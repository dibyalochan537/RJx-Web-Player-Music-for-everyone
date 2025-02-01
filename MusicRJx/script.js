//Volume-Control
const musicMute=document.getElementById('music-mute');
const musicNoMute=document.getElementById('music-no-mute');
const music=document.getElementById('music');
const volumeControl=document.getElementById('volume-control');
let muteMusic = window.getComputedStyle(musicMute).display;
let unMuteMusic=window.getComputedStyle(musicNoMute).display;
let soundStatusMute;
let soundStatusUnMute;
let tempVolume=0.5;
let volume;
// const controlSound=document.getElementById('control-sound');
function musicVolumeStatus(){   
    if(unMuteMusic==='block'){
        console.log("Mute");
        unMuteMusic=musicNoMute.style.display='none'; // or 'none'
        muteMusic=musicMute.style.display='block';
        musicMute.setAttribute('status','yes');
        musicNoMute.setAttribute('status','no');
        volume = volumeControl.value;
        soundStatusMute=musicMute.getAttribute('status');
        soundStatusUnMute=musicNoMute.getAttribute('status');
        // console.log(soundStatusMute,soundStatusUnMute);
        if(soundStatusMute=="yes"){
            tempVolume=volumeControl.value;
            volumeControl.setAttribute('value','0');
            audioPlayer.volume=0;
            console.log(audioPlayer.volume);
        }
        else{
            volumeControl.setAttribute('value',tempVolume);
            audioPlayer.volume=tempVolume;
        }
    }
    else{   
        console.log("Unmute");
        muteMusic=musicMute.style.display='none';
        unMuteMusic=musicNoMute.style.display='block'; // or 'none' 
        musicNoMute.setAttribute('status','yes'); 
        musicMute.setAttribute('status','no');
        volume = volumeControl.value;
        soundStatusMute=musicMute.getAttribute('status');
        soundStatusUnMute=musicNoMute.getAttribute('status');
        // console.log(soundStatusMute,soundStatusUnMute);
        if(soundStatusUnMute=="yes"){
            volumeControl.setAttribute('value',tempVolume);
            audioPlayer.volume = tempVolume;
            console.log(audioPlayer.volume);  
        }
         else{
            volumeControl.setAttribute('value','0');
            audioPlayer.volume=0;  
        }           
    }
}
// const volumeDisplay = document.getElementById('volume-display');
volumeControl.addEventListener('input', () => {
    volume=volumeControl.value;
    console.log(volume); 
    soundStatusMute=musicMute.getAttribute('status');
    soundStatusUnMute=musicNoMute.getAttribute('status');
    if(volume==0){
        volumeControl.setAttribute('value','0');
        audioPlayer.volume=0; 
        unMuteMusic=musicNoMute.style.display='none';
        muteMusic=musicMute.style.display='block';
    }
    else{
        muteMusic=musicMute.style.display='none';
        unMuteMusic=musicNoMute.style.display='block';
        audioPlayer.volume = volume;
        volumeControl.setAttribute('value',volume);
    }
});
//Play-Control-Footer
const playingResume=document.getElementById('playing-resume');
const playingPause=document.getElementById('playing-pause');
function musicPlayStatus(){
    if (playingResume) {
        if(playingResume.style.display=='block'){
            playingResume.style.display = 'none';
            playingPause.style.display='block';
            playingPause.setAttribute('status','yes');
            playingResume.setAttribute('status','no'); 
            const playingStatusResume=playingResume.getAttribute('status');
            const playingStatusPause=playingPause.getAttribute('status');
            if(playingStatusResume=="yes"){
                //calling to playing music
            }
            else{
                //pause the music
            }
        }
        else{
            playingPause.style.display = 'none'; // or 'none'
            playingResume.style.display='block';
            playingPause.setAttribute('status','no');
            playingResume.setAttribute('status','yes');
            const playingStatusResume=playingResume.getAttribute('status');
            const playingStatusPause=playingPause.getAttribute('status');
            if(playingStatusResume=="yes"){
                //calling to playing music
            }
            else{
                //pause the music
            }
        }
    }
    else{
        if(playingResume.style.display=='block'){
            playingResume.style.display = 'none'; // or 'none'
            playingPause.style.display='block';
            playingPause.setAttribute('status','yes');
            playingResume.setAttribute('status','no'); 
            const playingStatusResume=playingResume.getAttribute('status');
            const playingStatusPause=playingPause.getAttribute('status');
            if(playingStatusResume=="yes"){
                //calling to playing music
            }
            else{
                //pause the music
            }
        }
        else{
            playingPause.style.display = 'none'; // or 'none'
            playingResume.style.display='block';
            playingPause.setAttribute('status','no');
            playingResume.setAttribute('status','yes');
            const playingStatusResume=playingResume.getAttribute('status');
            const playingStatusPause=playingPause.getAttribute('status');
            if(playingStatusResume=="yes"){
                //calling to playing music
            }
            else{
                //pause the music
            }
        }
    }
}

//Recently Played
const playButtons = document.querySelectorAll('.card-player');
const audioPlayer = document.getElementById('audio-player');
const cardPlayerDiv=document.getElementById('card-play-div');


    playButtons.forEach(cardPlayerDiv => {
        cardPlayerDiv.addEventListener('click', e => {
            const audioSrc = cardPlayerDiv.getAttribute('data-audio-src');
            console.log(audioSrc);
            
            audioPlayer.src = audioSrc;
            audioPlayer.play();
        });
    });
//Trending now near you
//Featured Charts