
class UltilMng {
    constructor() {
    }

    backToTop($selector) {
        $selector.on('click', () => {
            fullpage_api.moveTo(1)
        })
    }

    isMobileBrowser() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
        }

        return false
    }

    menuButtonEventHandler() {
        let self = this

        // animate button
        self.$btnMenu.on('mouseenter', function (e) {
            $(this).fadeOut(500)
            $(this).fadeIn(500)
        })

        // show/hide menu modal
        let menu = $('.dd-b-menu');
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
    }
}

export default UltilMng;