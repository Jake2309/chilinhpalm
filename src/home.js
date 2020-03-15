import 'slick-carousel'
import fullpage from 'fullpage.js'

class HomeManager {
    constructor({ root }) {
        this.$root = $(root);

        this.$introGeneral = $('#link-general-intro', this.$root);
        this.$introCompany = $('#link-company-intro', this.$root);
        this.$introInvestment = $('#link-investment-intro', this.$root);
        this.$tabGeneral = $('#general-tab', this.$root);
        this.$tabCompany = $('#company-tab', this.$root);
        this.$tabInvestment = $('#investment-tab', this.$root);
        this.$menu = $('.dd-main-menu', this.$root);
        this.$subMenu = $('.dd-sub-menu', this.$root);
        this.$shortDescriptions = $('#short-description', this.$root);
        this.$svgImage = $('#header-contain svg g path');
        this.$btnBackToTop = $('#btnBackTop', this.$root);

        this.$projectNav = $('.nav-custom', this.$root);

        this.$sectionIntro = $('#section-intro', this.$root);
        this.$sectionProject = $('#section-project', this.$root);
        this.$sectionMap = $('#section-map-location', this.$root);

        this.$btnViewDetail = $('#btn-view-detail', this.$root);
        this.$detailLink = $('#detail-link', this.$root);

        var self = this;

        if (self.isMobileBrowser()) {
            
            let fullPageInstance = new fullpage('#fullpage', {
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                navigation: false,
                css3: true,
                anchors: ['home', 'intro', 'location', 'project', 'gallery', 'contact'],
                menu: '#menu',
                navigationTooltips: ['TRANG CHỦ', 'GIỚI THIỆU', 'VỊ TRÍ', 'DỰ ÁN', 'THƯ VIỆN', 'LIÊN HỆ'],
                showActiveTooltip: false,
                verticalCentered: false,
                slidesNavigation: true,
                controlArrows: false,
                afterLoad: function (origin, destination, direction) {
                    switch (destination.anchor) {
                        case "home":
                            $('html').addClass('dd-light-theme');
                            self.$svgImage.css({ fill: "#fff" })
                            self.activeMenu(0);
                            break;
                        case "intro":
                            $('html').removeClass('dd-dark-theme').addClass('dd-light-theme');
                            self.$svgImage.css({ fill: "#fff" })
                            self.activeMenu(1);

                            $('.fp-slidesNav').addClass('text-center')

                            break;
                        case "location":
                            $('html').removeClass('dd-light-theme').addClass('dd-dark-theme');
                            self.$svgImage.css({ fill: "#000" })
                            self.activeMenu(2);
                            break;
                        case "project":
                            self.$svgImage.css({ fill: "#000" })
                            self.activeMenu(3)

                            $('.fp-slidesNav').addClass('text-center')

                            break;
                        case "gallery":
                            $('html').removeClass('dd-light-theme').addClass('dd-dark-theme');
                            self.$svgImage.css({ fill: "#000" })
                            self.activeMenu(4);
                            break;
                        case "contact":
                            $('html').removeClass('dd-dark-theme').addClass('dd-light-theme');
                            self.$svgImage.css({ fill: "#fff" })
                            self.activeMenu(5);

                            $('#section-contact').addClass('d-flex align-items-center')
                            break;
                    }
                },
                onLeave: function (origin, destination, direction) {
                    if (destination.index != 2) {
                        $('#more-info').prop('hidden', true)
                    }
                }
            })
        } else {
            let fullPageInstance = new fullpage('#fullpage', {
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                navigation: true,
                css3: true,
                anchors: ['home', 'intro', 'location', 'project', 'gallery', 'contact'],
                menu: '#menu',
                navigationTooltips: ['TRANG CHỦ', 'GIỚI THIỆU', 'VỊ TRÍ', 'DỰ ÁN', 'THƯ VIỆN', 'LIÊN HỆ'],
                showActiveTooltip: true,
                verticalCentered: false,
                afterLoad: function (origin, destination, direction) {
                    switch (destination.anchor) {
                        case "home":
                            $('html').addClass('dd-light-theme');
                            self.$svgImage.css({ fill: "#fff" })
                            self.activeMenu(0);
                            break;
                        case "intro":
                            $('html').removeClass('dd-dark-theme').addClass('dd-light-theme');
                            self.$svgImage.css({ fill: "#fff" })
                            self.activeMenu(1);
                            break;
                        case "location":
                            $('html').removeClass('dd-light-theme').addClass('dd-dark-theme');
                            self.$svgImage.css({ fill: "#000" })
                            self.activeMenu(2);
                            break;
                        case "project":
                            self.$svgImage.css({ fill: "#000" })
                            self.activeMenu(3);
                            break;
                        case "gallery":
                            $('html').removeClass('dd-light-theme').addClass('dd-dark-theme');
                            self.$svgImage.css({ fill: "#000" })
                            self.activeMenu(4);
                            break;
                        case "contact":
                            $('html').removeClass('dd-dark-theme').addClass('dd-light-theme');
                            self.$svgImage.css({ fill: "#fff" })
                            self.activeMenu(5);
                            break;
                    }
                },
                onLeave: function (origin, destination, direction) {
                    if (destination.index != 2) {
                        $('#more-info').prop('hidden', true)
                    }
                }
            })
        }

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
        });

        this.$sectionProject.on('click', function (e) {
            if ($(e.target).is($('.nav-link')) == false) {
                let navItem = self.$sectionProject.find('nav a.active')
                let viewDetailLink = self.$detailLink.val()

                viewDetailLink += navItem.data('id')

                window.location.href = viewDetailLink
            }
        });

        this.showTabIntro();
        this.showTabProject();
        this.tabLocation();
        this.backToTop();
        
    }

    isMobileBrowser() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        }

        return false;
    }

    activeMenu(i) {
        let self = this

        var items = self.$menu.find('li');
        items.eq(i).addClass('active').siblings().removeClass('active')
    }

    activeNav(i) {
        let self = this

        var items = self.$projectNav.find('a');
        items.eq(i).addClass('active').siblings().removeClass('active')
    }

    backToTop() {
        let self = this

        self.$btnBackToTop.on('click', () => {
            fullpage_api.moveTo(1)
        })
    }

    showTabIntro() {
        let self = this;

        let imageUrl = '/images/intro.jpg'

        self.$introGeneral.on('click', () => {
            self.$tabGeneral.prop('hidden', false)
            self.$tabInvestment.prop('hidden', true)
            self.$tabCompany.prop('hidden', true)

            self.$introGeneral.addClass('font-weight-bold')
            self.$introGeneral.addClass('link-underline')

            self.$introCompany.removeClass('font-weight-bold')
            self.$introCompany.removeClass('link-underline')

            self.$introInvestment.removeClass('font-weight-bold')
            self.$introInvestment.removeClass('link-underline')

            imageUrl = '/images/intro.jpg'

            self.$sectionIntro.css({
                'background-image': 'linear-gradient(transparent, #293B24 95%), url(' + imageUrl + ')'
            })
        })

        self.$introInvestment.on('click', () => {
            self.$tabGeneral.prop('hidden', true)
            self.$tabCompany.prop('hidden', true)
            self.$tabInvestment.prop('hidden', false)

            self.$introInvestment.addClass('font-weight-bold')
            self.$introInvestment.addClass('link-underline')

            self.$introGeneral.removeClass('font-weight-bold')
            self.$introGeneral.removeClass('link-underline')

            self.$introCompany.removeClass('font-weight-bold')
            self.$introCompany.removeClass('link-underline')

            imageUrl = '/images/tiemnangdautu.jpg'

            self.$sectionIntro.css({
                'background-image': 'linear-gradient(transparent, #293B24 95%), url(' + imageUrl + ')'
            })
        })

        self.$introCompany.on('click', () => {
            self.$tabGeneral.prop('hidden', true)
            self.$tabInvestment.prop('hidden', true)
            self.$tabCompany.prop('hidden', false)

            self.$introCompany.addClass('font-weight-bold')
            self.$introCompany.addClass('link-underline')

            self.$introGeneral.removeClass('font-weight-bold')
            self.$introGeneral.removeClass('link-underline')

            self.$introInvestment.removeClass('font-weight-bold')
            self.$introInvestment.removeClass('link-underline')

            imageUrl = '/images/la-cay.jpg'

            self.$sectionIntro.css({
                'background-image': 'linear-gradient(transparent, #293B24 95%), url(' + imageUrl + ')'
            })
        })
    }

    tabLocation() {
        let self = this

        self.$locationMenu = $('#section-map-location', self.$root)
        self.$locationMenuItem = $('.js-location-menu', self.$locationMenu)

        self.$locationMenuItem.on('click', (e) => {

            $(e.target).parent().addClass('active').siblings().removeClass('active')

            let menuCode = $(e.target).data('type')
            let imageUrl = '/images/default-map.jpg';

            switch (menuCode) {
                case 'land':
                    imageUrl = '/images/nha-phan-lo.jpg'
                    break;
                case 'school':
                    imageUrl = '/images/truong-hoc.jpg'

                    break;
            }

            self.$sectionMap.find('img').attr('src', imageUrl)
        })

        self.$btnMoreInfo = $('#btn-more-info', self.$sectionMap)
        self.$btnMoreInfo.on('click', function () {
            $('#more-info').prop('hidden', false)
            $('#more-info').addClass('animated fadeInLeft')
        })

        $('#btn-close').on('click', function () {
            $('#more-info').prop('hidden', true)
        })
    }

    showTabProject() {
        let self = this

        let navItem = $('.js-nav-project', self.$projectNav)
        let imageUrl = '/images/be-boi.jpeg'

        navItem.on('click', function (e) {
            let navId = $(e.target).data('id')
            let viewDetailLink = self.$detailLink.val()

            switch (navId) {
                case 'villa':
                    self.activeNav(0)
                    imageUrl = '/images/be-boi.jpeg'
                    viewDetailLink += 'villa'
                    self.$shortDescriptions.html('Tuyến đường tránh nối quốc lộ 18 và quốc lộ 37 cùng với hầm chui đường sắt sẽ tạo nên cấu trúc giao thông đô thị Chí Linh hoàn toàn mới. Dự án Chí Linh Palm City không chỉ nâng cao an toàn, hiệu quả kết nối giao thông mà còn góp phần mở rộng không gian đô thị, thúc đẩy phát triển kinh tế – xã hội rất lớn.')

                    break;
                case 'townhouse':
                    self.activeNav(1)
                    imageUrl = '/images/be-boi11.jpg'
                    viewDetailLink += 'townhouse'
                    self.$shortDescriptions.html('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.')

                    break;
                case 'shophouse':
                    self.activeNav(2)
                    imageUrl = '/images/nha-pho.jpeg'
                    viewDetailLink += 'shophouse'
                    self.$shortDescriptions.html('There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.')

                    break;
                case 'hotel':
                    self.activeNav(3)
                    imageUrl = '/images/khach-san.jpeg'
                    viewDetailLink += 'hotel'
                    self.$shortDescriptions.html('The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.')

                    break;
                case 'cafe':
                    self.activeNav(4)
                    imageUrl = '/images/cafe.jpg'
                    viewDetailLink += 'cafe'
                    self.$shortDescriptions.html('There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.')

                    break;
            }

            self.$btnViewDetail.attr('href', viewDetailLink)

            self.$sectionProject.fadeTo('fast', 0.5, function () {
                self.$sectionProject.css({
                    'background-image': 'linear-gradient(transparent, #fff 190%), url(' + imageUrl + ')'
                })
            }).fadeTo('fast', 1)

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

const homeMng = new HomeManager({
    root: '#main'
});