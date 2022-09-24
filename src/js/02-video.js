import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

    player.on('timeupdate', function() {
        console.log('time updated');
        localStorage.setItem('videoplayer-current-time', currentTime);
    });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(currentTime) {});