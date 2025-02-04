<script>
    //Load Music
        // function musicLoadIntoMusic(musicObject){
        //     // console.log(musicObject.odiaMusic[0]);
        //     // console.log(musicObject.odiaMusic[1]);
        //     const odia1=document.getElementsByClassName('odia-1')[0];
        //     const odia2=document.getElementsByClassName('odia-2')[0];
        //     odia1.setAttribute('data-audio-src',musicObject.odiaMusic[0]);
        //     odia2.setAttribute('data-audio-src',musicObject.odiaMusic[1]);
        //     const telgu1=document.getElementsByClassName('telgu-1')[0];
        //     const telgu2=document.getElementsByClassName('telgu-2')[0];
        //     telgu1.setAttribute('data-audio-src',musicObject.telguMusic[0]);
        //     telgu2.setAttribute('data-audio-src',musicObject.telguMusic[1]);
        //     const hindi1=document.getElementsByClassName('hindi-1')[0];
        //     const hindi2=document.getElementsByClassName('hindi-2')[0];
        //     hindi1.setAttribute('data-audio-src',musicObject.hindiMusic[0]);
        //     hindi2.setAttribute('data-audio-src',musicObject.hindiMusic[1]);
        // }
    //Create Music List
        // let allMusicLocation={
        //     odiaMusic:["https://github.com/dibyalochan537/RJx-Web-Player-Music-for-everyone/blob/main/MusicRJx/Audio/Vaathi_Raid(128k).mp3?raw=true",
        //                "https://github.com/dibyalochan537/RJx-Web-Player-Music-for-everyone/blob/main/MusicRJx/Audio/Vaathi_Raid(128k).mp3?raw=true",
        //               ],
        //     hindiMusic:["https://github.com/dibyalochan537/RJx-Web-Player-Music-for-everyone/blob/main/MusicRJx/Audio/Vaathi_Raid(128k).mp3?raw=true",
        //                 "https://github.com/dibyalochan537/RJx-Web-Player-Music-for-everyone/blob/main/MusicRJx/Audio/Vaathi_Raid(128k).mp3?raw=true"
        //                ],
        //     telguMusic:["https://github.com/dibyalochan537/RJx-Web-Player-Music-for-everyone/blob/main/MusicRJx/Audio/Vaathi_Raid(128k).mp3?raw=true",
        //                 "https://github.com/dibyalochan537/RJx-Web-Player-Music-for-everyone/blob/main/MusicRJx/Audio/Vaathi_Raid(128k).mp3?raw=true"
        //                ]
        // };
        // let allPlaylistConvertToString=JSON.stringify(allMusicLocation);
        // localStorage.setItem(allMusicLocation,allPlaylistConvertToString);
        function createArrayForPlaylist(nameOfPlaylist){
            // let allPlaylistName={
            //     nameOfPlaylist:["Dibyalochan Dash"]
            // };
            // let allPlaylistConvertToString=JSON.stringify(allPlaylistName);
            // localStorage.setItem(nameOfPlaylist,allPlaylistConvertToString);

            // let storedPlaylistString = localStorage.getItem(nameOfPlaylist);
            // let storedPlaylist = JSON.parse(allPlaylistConvertToString);
            // console.log(storedPlaylist.nameOfPlaylist[0]);
        }
    //Updating Music Into Main-Content
    //Create a playlist
        const getPlaylistId = document.getElementById('playlistname');
        const allBoxes = document.getElementById('all-boxes');
        let localStorageData = [];
        if (!localStorage.getItem("localStorageData")) {
            localStorage.setItem("localStorageData", JSON.stringify(localStorageData));
        }
        window.onload = function () {
            //This for add music into localstorage and it is callm to a function
            // console.log(localStorage.length);
            // let test = localStorage.getItem(allMusicLocation);
            // let test1 = JSON.parse(test);
            // console.log(test1);
            // musicLoadIntoMusic(test1);
            let storedArrayString = localStorage.getItem(localStorageData);
            if (storedArrayString) {
                let localStorageDat = JSON.parse(storedArrayString);
                for (let i = 0; i < localStorageDat.length; i++) {
                    let savedBoxContent = localStorage.getItem(localStorageDat[i]);
                    if (savedBoxContent) {
                        let newDiv = document.createElement("div");
                        newDiv.classList.add("box");
                        newDiv.innerHTML = savedBoxContent;
                        allBoxes.appendChild(newDiv);
                    }
                }
            }
            // localStorage.clear();
        };
        function sendPlaylistNameData() {
            let getPlaylistName = getPlaylistId.value.trim();
            if (getPlaylistName === "") {
                alert("Please enter a playlist name!");
                return;
            }
            modal.style.display = "none";
            getPlaylistId.value = "";
            console.log(getPlaylistName);
            var newDiv = document.createElement("div");
            newDiv.classList.add("box");
            newDiv.innerHTML = `
                <div class="box-p1">RJx:Music Player</div>
                <div class="box-p2">${getPlaylistName}</div>
                <button class="badge" id="${getPlaylistName}" onclick="addMusicToPlaylist(this.id)">Add Music</button>
                <button class="badge">Play</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button class="badge" onclick="removePlaylist('${getPlaylistName}')">Remove</button>
            `;
            allBoxes.appendChild(newDiv);
            localStorage.setItem(getPlaylistName, newDiv.innerHTML);
            let storedArrayString = localStorage.getItem("localStorageData");
            if (storedArrayString) {
                let localStorageDat = JSON.parse(storedArrayString);
                if (!localStorageDat.includes(getPlaylistName)) {
                    localStorageDat.push(getPlaylistName);
                    localStorage.setItem("localStorageData", JSON.stringify(localStorageDat));
                }
                console.log("Updated array after adding an element:", localStorageDat);
            }
            console.log("New div added to the page!");
            createArrayForPlaylist(getPlaylistName);
        }
    //Remove Playlist
        function removePlaylist(playlistName) {
            localStorage.removeItem(playlistName);
            let storedArrayString = localStorage.getItem("localStorageData");
            if (storedArrayString) {
                let localStorageDat = JSON.parse(storedArrayString);
                let updatedArray = localStorageDat.filter(name => name !== playlistName);
                localStorage.setItem("localStorageData", JSON.stringify(updatedArray));
            }
            const boxes = document.querySelectorAll('.box');
            boxes.forEach(box => {
                if (box.querySelector('.box-p2') && box.querySelector('.box-p2').innerText === playlistName) {
                    box.remove();
                }
            });
            console.log(`Playlist "${playlistName}" removed!`);
        }
    //Add Music To Playlist
        function addMusicToPlaylist(addMusicBtnId){
            
        }
    //openCreationPlaylistPopup()
        const modal = document.getElementById("myModal");
        const btn = document.getElementById("openModalBtn");
        const span = document.querySelector(".close");
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    //SeekBar-Control
        const audioPlayer = document.getElementById('audio-player');
        const musicProgress=document.getElementById('music-progress');
        const playingResume=document.getElementById('playing-resume');
        const playingPause=document.getElementById('playing-pause');
        audioPlayer.addEventListener('loadedmetadata', () => {
            musicProgress.max = audioPlayer.duration;
        });
        audioPlayer.addEventListener('timeupdate', () => {
            musicProgress.value = audioPlayer.currentTime;
        });
        musicProgress.addEventListener('input', () => {
            audioPlayer.currentTime = musicProgress.value;
        });
    //Play and pause 
        function musicPlay(){
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        }
        function musicPause(){
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        }
        audioPlayer.addEventListener('ended', () => {
            playingPause.style.display = 'none';
            playingResume.style.display='block';
        });
    //Volume-Control
        const musicMute=document.getElementById('music-mute');
        const musicNoMute=document.getElementById('music-no-mute');
        const music=document.getElementById('music');
        const volumeControl=document.getElementById('volume-control');
        let muteMusic = window.getComputedStyle(musicMute).display;
        let unMuteMusic=window.getComputedStyle(musicNoMute).display;
        let playingResumeDisplay=window.getComputedStyle(playingResume).display;
        let playingPauseDisplay=window.getComputedStyle(playingPause).display;
        let soundStatusMute;
        let soundStatusUnMute;
        let tempVolume=0.5;
        let volume;
        // const controlSound=document.getElementById('control-sound');
        function musicVolumeStatus(){   
            if(unMuteMusic==='block'){
                console.log("Mute");
                unMuteMusic=musicNoMute.style.display='none';
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
                unMuteMusic=musicNoMute.style.display='block';
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
        let playStatusResume=null;
        let playStatusPause=null;
        function playWithPause(){
            const testStatus=audioPlayer.getAttribute('src');
            if(testStatus===""){
                alert("Please select music !!!!");
            }
            else{
                musicPlayStatus();
            }
        }
        function musicPlayStatus(){
            if (playingResumeDisplay==="block") {
                console.log("Pause");
                playingResumeDisplay=playingResume.style.display='none';
                playingPauseDisplay=playingPause.style.display='block';
                playingPause.setAttribute('status','yes');
                playingResume.setAttribute('status','no');
                playStatusResume=playingResume.getAttribute('status');
                playStatusPause=playingPause.getAttribute('status');
                console.log(soundStatusMute,soundStatusUnMute);
                if(playStatusPause=="yes"){
                    musicPause();
                }
                else{
                    musicPlay();
                }    
            }
            else{
                console.log("Play");
                playingPauseDisplay=playingPause.style.display='none';
                playingResumeDisplay=playingResume.style.display='block';
                playingResume.setAttribute('status','yes');
                playingPause.setAttribute('status','no');
                playStatusResume=playingResume.getAttribute('status');
                playStatusPause=playingPause.getAttribute('status');
                // console.log(soundStatusMute,soundStatusUnMute);
                if(playStatusResume=="yes"){
                    musicPlay();
                }
                else{ 
                    musicPause();
                }
            }
        }
    //Recently Played
    const playButtons = document.querySelectorAll('.card-player');
    const cardPlayerDiv=document.getElementById('card-play-div');
            playButtons.forEach(cardPlayerDiv => {
                cardPlayerDiv.addEventListener('click', e => {
                    if(playingPauseDisplay==="block"){ 
                        playingPauseDisplay=playingPause.style.display='none';
                        playingResumeDisplay=playingResume.style.display='block';
                        const audioSrc = cardPlayerDiv.getAttribute('data-audio-src');
                        console.log(audioSrc);    
                        audioPlayer.src = audioSrc;
                        audioPlayer.play();
                    }
                    else{
                        const audioSrc = cardPlayerDiv.getAttribute('data-audio-src');
                        console.log(audioSrc);    
                        audioPlayer.src = audioSrc;
                        audioPlayer.play();
                    }
                });
            });
    //Trending now near you
    //Featured Charts
    </script>
