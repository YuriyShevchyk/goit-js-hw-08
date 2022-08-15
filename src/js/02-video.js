import Player from '@vimeo/player';
import trottle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player')


const player = new Player(video);

player.on('timeupdate', trottle(playTime, 1000)
);

function playTime({ seconds }) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
 };
 const storage = JSON.parse.localStorage.getItem("videoplayer-current-time");
 if(storage){
    player.setCurrentTime(storage)
 };
