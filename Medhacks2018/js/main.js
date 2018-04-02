$(document).ready(() => {
    let $curwindow;

    $('#track1').on('click', () => {
        $('.black-overlay').toggle();
        $('#track1-info').toggle();
        $curwindow = $('#track1-info');
    });

    $('#track2').on('click', () => {
        $('.black-overlay').toggle('medium');
        $('#track2-info').toggle('slow');
        $curwindow = $('#track2-info');
    });

    $('#track3').on('click', () => {
        $('.black-overlay').toggle('medium');
        $('#track3-info').toggle('slow');
        $curwindow = $('#track3-info');
    });

    $('.black-overlay').on('click', () => {
        $('.black-overlay').toggle();
        $curwindow.toggle();
    });

});
