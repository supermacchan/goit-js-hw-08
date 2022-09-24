import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

    player.on('timeupdate', function(timeupdate) {
        console.log('time updated');
        localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate.seconds));
    });

    // player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(currentTime) {});