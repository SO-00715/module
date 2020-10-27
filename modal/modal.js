// jsで書きたい
$(function() {
    $('.js-show-modal').on('click', function() {
        // let modalWidth = $('.js-show-modal-target').width();
        // let windowWidth = $(window).width();
        // $('.js-show-modal-target').attr('style', 'margin-left: ' + (windowWidth/2 - modalWidth/2) + 'px');
        $('.js-show-modal-target').show();
        $('.js-show-modal-cover').show();
    });

    // 閉じるボタン、モーダル背景どちらを押してもモーダルが閉じるようにしたい。クラス名つけたらOK
    $('.js-hide-modal').on('click', function() {
        $('.js-show-modal-target').hide();
        $('.js-show-modal-cover').hide();
    });
});

// window.addEventListener('DOMContentLoaded', function() {
//     new Modal();
// });

// class Modal {
//     constructor() {
//         this.btn = document.querySelector('.js-show-modal');
//         this.modalCover = document.querySelector('.js-show-modal-cover');
//         this._showModal();
//         // this._hideModal();
//     }
//     _showModal() {
//         this.btn.addEventListener('click', function() {
//             let modal = document.querySelector('.modal');
//             modal.display = 'block';
//             console.log(modal);
//         })
//     }
// }
