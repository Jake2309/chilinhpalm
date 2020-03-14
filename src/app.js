import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'fullpage.js/dist/fullpage.css'
import 'animate.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

$(document).ready(function () {

    var $btnMenu = $('#btn-menu');

    // animate button
    $btnMenu.on('mouseenter', function (e) {
        $(this).fadeOut(500)
        $(this).fadeIn(500)
    });

    // show/hide menu modal
    var menu = $('.dd-b-menu');
    $('.js-open-menu').click(function (e) {
        e.stopPropagation();
        if (!menu.hasClass('open')) {
            menu.addClass('open');
        } else {
            menu.removeClass('open');
        }
        return false;
    });
    $('.js-close-menu').click(function () {
        menu.removeClass('open');
        return false;
    });
    menu.find('a').click(function () {
        menu.removeClass('open');
    });
});