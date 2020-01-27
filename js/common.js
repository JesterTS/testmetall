new WOW().init();
$(document).ready(function () {


    $('#main_banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: false,
        dots: true,
        appendDots: $('#banner_slider_pag'),
        variableWidth: false,
        zIndex: 10,

        responsive: [
            {
                breakpoint: 996,
                settings: {}
            },
            {
                breakpoint: 768,
                settings: {}
            },
        ]

    });
    $('#reviews_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: false,
        dots: false,
        appendArrows: '#reviews_arrows',
        variableWidth: false,
        zIndex: 10,

        responsive: [
            {
                breakpoint: 996,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]


    });


    $('#partners_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: false,
        dots: false,
        appendArrows: '#partnership_arrows',
        variableWidth: false,
        zIndex: 10,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2
                }
            },
        ]

    });


    $('#sidebar_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        dots: true,
        appendDots: $('#sidebar_slider_pagination'),
        variableWidth: false,
        zIndex: 10,


    });


    $('#service_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        dots: false,
        variableWidth: false,
        zIndex: 10,
        asNavFor: '#service_slider_nav'

    });

    $('#service_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        dots: false,
        variableWidth: false,
        zIndex: 10,
        asNavFor: '#service_slider',
        focusOnSelect: true


    });
    $("#product_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        dots: false,
        variableWidth: false,
        zIndex: 10,
        asNavFor: '#product_slider_nav'

    });

    $('#product_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        dots: false,
        variableWidth: false,
        zIndex: 10,
        asNavFor: '#product_slider',
        focusOnSelect: true


    });

    $('#works_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        dots: false,
        variableWidth: false,
        zIndex: 10,
        appendArrows: '#works_slider_arrows',
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1
                }
            },
        ]

    });


    showMoreMissionText();
    showMoreSidebarList();
    showMiniMenu();
    productAmount();


});


function showMoreMissionText() {

    $('.mission_text_more').click(function () {
        var hid_text = $('.company_mission_text .hidden_text');

        if (hid_text.css('display') === 'none') {
            hid_text.slideDown();
            $(this).text('Свернуть');
        }
        else {
            hid_text.slideUp();
            $(this).text('Подробнее');
        }
    });
}


function showMoreSidebarList() {
    $('.sidebar_list_title').click(function () {

        var list = $(this).parent().find('ul');

        console.log(list);

        if (list.css('display') === 'none') {
            $(this).find('i').removeClass('fa-plus');
            $(this).find('i').addClass('fa-minus');
            list.slideDown();
        }

        else {
            $(this).find('i').removeClass('fa-minus');
            $(this).find('i').addClass('fa-plus');
            list.slideUp();
        }

    });
}


function showMiniMenu() {
    $('.burger_button').click(function () {
        if ($('.main_menu_wrapper').css('display') === 'none') {
            $('.main_menu_wrapper').show();
        }

        else
            $('.main_menu_wrapper').hide();
    });


    $('.main_menu li a').click(function () {
        var sub = $(this).parent().find('.main_submenu');

        if (sub.css('display') === 'none')
            sub.slideDown();
        else
            sub.slideUp();
    });


    $('.main_submenu>li>a').click(function (e) {
        e.preventDefault();
        var sub = $(this).parent().find('.sub_sub_menu');

        if (sub.css('display') === 'none')
            sub.slideDown();
        else
            sub.slideUp();
    });


    $('.burger_button_close').click(function () {
        if ($('.main_menu_wrapper').css('display') === 'none') {
            $('.main_menu_wrapper').show();
        }

        else
            $('.main_menu_wrapper').hide();
    });
}

function productAmount() {
    $('.amount_plus').click(function () {

        var amount = parseInt($('.amount_field').val());

        var price = parseFloat($('.product_price_value').text().replace(/ /g,'')) / amount;


        amount += 1;

        $('.amount_field').val(amount);

        $('.product_price_value').text(price * amount);


    });


    $('.amount_minus').click(function () {
        var amount = parseInt($('.amount_field').val());
        var price = parseFloat($('.product_price_value').text().replace(/ /g,'')) / amount;

        if (amount !== 1)
            amount -= 1;
        $('.amount_field').val(amount);
        $('.product_price_value').text(price * amount);
    });



    $('.product_nav').click(function () {

    });
}
function pluseCart(idBlock){


        var amount = parseInt($(idBlock+' .amount_field').val());

       


        amount += 1;

        $(idBlock+ ' .amount_field').val(amount);




}
function minusCart(idBlock){

        var amount = parseInt($(idBlock+' .amount_field').val());

        if (amount !== 1)
            amount -= 1;
        $(idBlock+' .amount_field').val(amount);

}
function closeModalFeed() {
    $('.modalSucsess').hide();
    $('.modalTop').hide();
    $('.modalBue').hide();
}


$('.remodal_submit').click(function () {
    $('.modalSucsess').show();
    $('[data-remodal-id=service_modal]').remodal().close();
    $('[data-remodal-id=callback_modal]').remodal().close();
    $('[data-remodal-id=oneclick_modal]').remodal().close();
    setTimeout(function(){
        $('.modalSucsess').fadeOut();
    }, 3000);
});