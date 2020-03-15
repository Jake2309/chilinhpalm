import 'slick-carousel'
import fullpage from 'fullpage.js'

class NewsDetailMng {
    constructor({ root }) {
        this.$root = $(root)

        this.$introGeneral = $('#link-general-intro', this.$root)
        this.$introCompany = $('#link-company-intro', this.$root)
        this.$tabGeneral = $('#general-tab', this.$root)
        this.$tabCompany = $('#company-tab', this.$root)
        this.$menu = $('.dd-main-menu', this.$root)
        this.$subMenu = $('.dd-sub-menu', this.$root)
        this.$btnBackToTop = $('#btnBackTop', this.$root)

        this.$projectNav = $('.nav-custom', this.$root)

        this.$sectionIntro = $('#section-intro', this.$root)
        this.$sectionProject = $('#section-project', this.$root)

        let projectType = $('#project-type', this.$root)

        switch (projectType) {
            case 'villa':
                this.activeSubMenu(0)
                break;
            case 'townhouse':
                this.activeSubMenu(1)
                break;
            case 'shophouse':
                this.activeSubMenu(2)
                break;
            case 'hotel':
                this.activeSubMenu(3)
                break;
        }

        let self = this

        var fullPageDetailInstance = new fullpage('#detail', {
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            navigation: false,
            autoScrolling: false,
            css3: true,
            menu: '#menu',
            showActiveTooltip: false,
            verticalCentered: false,
            onLeave: function (origin, destination, direction) {
                let $sectionId = '';

                switch (destination.index) {
                    case 0:
                        $sectionId = '#section-header-image'

                        $($sectionId + ' .text-top').removeClass('animated fadeInDown')
                        $($sectionId + ' .text-contain').removeClass('animated fadeInRight')
                        $($sectionId + ' .img-contain').removeClass('animated fadeInUp')
                        break;
                    case 1:
                        $sectionId = '#section-short-content'

                        $($sectionId + ' .text-top').addClass('animated fadeInDown')
                        $($sectionId + ' .text-contain').addClass('animated fadeInLeft')
                        $($sectionId + ' .img-contain').addClass('animated fadeInUp')
                        break;
                    case 2:
                        $($sectionId + ' .text-top').removeClass('animated fadeInDown')
                        $($sectionId + ' .text-contain').removeClass('animated fadeInRight')
                        $($sectionId + ' .img-contain').removeClass('animated fadeInUp')

                        $sectionId = '#section-short-content-middle'

                        $($sectionId + ' .text-contain').addClass('animated fadeInRight')
                        $($sectionId + ' .img-contain').addClass('animated fadeInUp')
                        break;
                    case 3:
                        $($sectionId + ' .text-top').removeClass('animated fadeInDown')
                        $($sectionId + ' .text-contain').removeClass('animated fadeInLeft')
                        $($sectionId + ' .img-contain').removeClass('animated fadeInUp')

                        $sectionId = '#section-short-content-bottom'

                        $($sectionId + ' .text-contain').addClass('animated fadeInLeft')
                        $($sectionId + ' .img-contain').addClass('animated fadeInUp')
                        break;
                    case 4:
                        $($sectionId + ' .text-top').removeClass('animated fadeInDown')
                        $($sectionId + ' .text-contain').removeClass('animated fadeInLeft')
                        $($sectionId + ' .img-contain').removeClass('animated fadeInUp')

                        $sectionId = '#section-detail-gallery'
                        break;
                }
            }
        })

        $('.slick-contain').slick({
            centerMode: true,
            centerPadding: '60px',
            adaptiveHeight: true,
            focusOnSelect: true,
            slidesToShow: 1,
            variableWidth: true,
            dots: true,
            infinite: true,
            touchMove: true,
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('#slider label').on('click', function () {
            $(this).is('checked')
        })

        this.backToTop()
    }

    activeMenu(i) {
        let self = this

        var items = self.$menu.find('li');
        items.eq(i).addClass('active').siblings().removeClass('active');
    }

    activeSubMenu(i) {
        let self = this

        var items = self.$subMenu.find('li');
        items.eq(i).addClass('active').siblings().removeClass('active');
    }

    activeNav(i) {
        let self = this

        var items = self.$projectNav.find('a');
        items.eq(i).addClass('active').siblings().removeClass('active');
    }

    backToTop() {
        let self = this

        self.$btnBackToTop.on('click', () => {
            fullpage_api.moveTo(1)
        })
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

const newsDtlMng = new NewsDetailMng({
    root: '#main'
});