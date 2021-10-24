
let time = 3600;

const countDownEl = document.getElementById("group");

setInterval(updateCountdown, 1000);


function updateCountdown(){

    const hours = Math.floor((time / 60 / 60) * 24);
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    countDownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
    time--;
}


$(function(){
    $('.open-popup').click(function(){
        $('.popup__bg').fadeIn(600);
    });
    $('.close-popup').click(function(){
        $('.popup__bg').fadeOut(600);
    });

    $('.btn-menu').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });

});

