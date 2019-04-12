$(document).ready(function () {

    let doesHit = false;
    let gameStarted = false;

    $('#start').mouseover(function () {
        $('#maze .boundary').removeClass('youlose');
        gameStarted = true;
        doesHit = false;

        $('#status').text('Game started..');
    })

    $('#maze').mouseleave(function () {
        if (gameStarted) {
            $('#maze .boundary').mouseover(); // shortcut :)
        }
    })

    $('#maze .boundary').mouseover(function () {
        $('#maze .boundary').addClass('youlose');
        $('#status').text('Sorry you lost :(');
        doesHit = true;
        gameStarted = false;
    })

    $('#end').mouseover(function () {
        if (gameStarted && !doesHit)
            $('#status').text('You win! :)');
        else
            $('#maze .boundary').mouseover(); // shortcut :)

        gameStarted = false;
    })


});