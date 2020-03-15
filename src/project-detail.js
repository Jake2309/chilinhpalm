import 'slick-carousel'
import fullpage from 'fullpage.js'
import UltilMng from './ultils'

class DetailMng {
    constructor({ root }) {
        this.$root = $(root)
        let self = this

        this.ultils = new UltilMng()
        let isMobileBrowser = this.ultils.isMobileBrowser()

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

                if (!isMobileBrowser) {
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
            mobileFirst: true,
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 381,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0',
                        slidesToShow: 3
                    }
                }
            ]
        });

        console.log($('.slick-contain')[1].slick)
        $('.slick-contain').on('breakpoint', function (event, slick, breakpoint) {
            console.log('breakpoint ' + breakpoint);
        });

        $('#slider label').on('click', function () {
            $(this).is('checked')
        })

        if (!isMobileBrowser)
            self.ultils.backToTop(self.$btnBackToTop)
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

const dtlMng = new DetailMng({
    root: '#main'
});