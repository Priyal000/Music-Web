const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progressBar = document.getElementById('progressBar');


const songs = [
    {
        name: "music1",
        title: "If we have ",
        artist: "Alec Benjamin"
    },
    {
        name: "music2",
        title: "Arcade",
        artist: "Duncan Laurence"
    },
    {
        name: "music3",
        title: "Everything Sucks",
        artist: "Vaultboy"
    },
    {
        name: "music4",
        title: "Let me down slowly",
        artist: "Alec Benjamin"
    },
    {
        name: "music5",
        title: "Love me like you do",
        artist: "Eliza Cordela"
    },
    {
        name: "music6",
        title: "At my worst",
        artist: "Pink Sweat"
    }
]

function playMusic(){
    music.play()

    document.getElementById('play').style.display= "none"
    document.getElementById('pause').style.display= "block"
    img.classList.add("animation")
}

function pauseMusic(){
    music.pause()

    document.getElementById('play').style.display= "block"
    document.getElementById('pause').style.display= "none"
    img.classList.remove("animation")
}
const loadsongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = " " + songs.name + ".m4a";
    img.src = " " + songs.name + ".jpg";

};

songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1 )% songs.length;
    loadsongs(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex = (songIndex -1+ songs.length)% songs.length;
    loadsongs(songs[songIndex]);
    playMusic();
}
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

music.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    progress = parseInt((music.currentTime/music.duration)*100);
    console.log(progress);
    progressBar.value = progress;
})
progressBar.addEventListener('change',() =>{
    music.currentTime = progressBar.value*music.duration/100;
})
songList.array.forEach((element,i) => {
    console.log(element,i);
    element.getElementByTagName("img")[0].src=songs[i].coverPath;
    element.getElementByIdName("songName")[0].innerText = songs[1].songName;
});  

music.addEventListener('ended',function(){
     next ();
})


 