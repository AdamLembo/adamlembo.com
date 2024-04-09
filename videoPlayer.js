var players = {};

function onYouTubeIframeAPIReady() {
    $('iframe').each(function() {
        var videoId = $(this).attr('id');
        players[videoId] = new YT.Player(videoId);
    });
}

$('.carousel').on('slide.bs.carousel', function () {
    $.each(players, function(id, player) {
        player.pauseVideo();
    });
});