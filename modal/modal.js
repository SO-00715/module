// jsで書きたい
$(function() {
    $('.js-show-modal').on('click', function() {
        let modalWidth = $('.js-show-modal-target').width();
        let windowWidth = $(window).width();
        $('.js-show-modal-target').attr('style', 'margin-left: ' + (windowWidth/2 - modalWidth/2) + 'px');
        $('.js-show-modal-target').show();
        $('.js-show-modal-cover').show();
    });

    // 閉じるボタン、モーダル背景どちらを押してもモーダルが閉じるようにしたい。
    $('.js-hide-modal').on('click', function() {
        $('.js-show-modal-target').hide();
        $('.js-show-modal-cover').hide();
    });
    $('.js-show-modal-cover').on('click', function(){
        $('.js-show-modal-target').hide();
        $('.js-show-modal-cover').hide();
    });
});