/* -------------------------------------------------------------------
 * Template Name         : Shelby Manor at Arcadia Farm Template
 * Created Date          : 19 November 2022
 * Version               : 1.0
 * File Name             : main.js
------------------------------------------------------------------- */
$(function() {
    "use strict";

    arcadia_preloader();
    arcadia_navbar();
    arcadia_scrollIt();
    arcadia_owlCarousel();
    arcadia_Bg_Img_Path();
});


/* ------------------------------------------------------------------- */
/* reloader
/* ------------------------------------------------------------------- */
function arcadia_preloader() {
    "use-strict";

    // Variables
    let preloaderWrap = $( '#preloader-wrap' );
    let loaderInner = preloaderWrap.find( '.preloader-inner' );

    $( window ).ready(function(){
        loaderInner.delay(300).fadeOut(); 
        preloaderWrap.delay(300).fadeOut( 'slow' );
    });   

    // Variables 
    let galleryWrapper         = $( '#portfolio-filter-masonry-light' );
    let portfolioFilterBtn     = $( '.portfolio-filter-light a' );

    // Portfolio Masonary Gallery

    if( $("#galleryWrapper").hasClass( "gallery-wrapper" ) ) {
        
        $(document).ready( function(){
            $('#portfolio-filter-masonry-light').imagesLoaded(function() {
                console.log('images loaded');
                $('#galleryWrapper img.hide').removeClass('hide');
              
                let grid = galleryWrapper.isotope({
                    itemSelector: '.portfolio-item',
                    filter: '.weddings',
                    percentPosition: true,
                });
        
                // filter items on button click
                portfolioFilterBtn.on( 'click', function() {
                    let filterValue = $(this).attr( 'data-portfolio-filter' );
                    galleryWrapper.isotope({
                        filter: filterValue
                    });
                });
    
                // filter items on button click
                portfolioFilterBtn.on( 'click', function(event) {
                    portfolioFilterBtn.removeClass( 'current' );
                    $(this).addClass( 'current' );
                    event.preventDefault();
                });
    
            });   
        });        
    }
}
/* ------------------------------------------------------------------- */
/* Navbar
/* ------------------------------------------------------------------- */
function arcadia_navbar(){
    "use-strict";

    // Variables
    let header = $( '.header' );
    let scrollTopBtn = $( '.scroll-top-btn' );
    let windowWidth = $( window ).innerWidth();
    let scrollTop = $( window ).scrollTop();
    let $dropdown = $( '.dropdown' );
    let $dropdownToggle = $( '.dropdown-toggle' );
    let $dropdownMenu = $( '.dropdown-menu' );
    let showClass = 'show';

    // When Window On Scroll
    $( window ).on( 'scroll', function(){
        let scrollTop = $( this ).scrollTop();

        if( scrollTop > 150 ) {
            header.addClass( 'header-shrink' );
            scrollTopBtn.addClass( 'active' );
        }else {
            header.removeClass( 'header-shrink' );
            scrollTopBtn.removeClass( 'active' );
        }
    });

    // The same process is done without page scroll to prevent errors.
    if( scrollTop > 150 ) {
        header.addClass( 'header-shrink' );
        scrollTopBtn.addClass( 'active' );
    }else {
        header.removeClass( 'header-shrink' );
        scrollTopBtn.removeClass( 'active' );
    }

    // Window On Resize Hover Dropdown
    $( window ).on( 'resize', function() {
        let windowWidth  = $( this ).innerWidth();
        if ( windowWidth > 991 ) {
            $dropdown.hover(
                function() {
                    let hasShowClass  =  $( this ).hasClass( showClass );
                    if( hasShowClass!==true ){
                        $( this ).addClass( showClass );
                        $( this ).find( $dropdownToggle ).attr( 'aria-expanded', 'true' );
                        $( this ).find( $dropdownMenu ).addClass( showClass );
                    }
                },
                function() {
                    $( this ).removeClass( showClass);
                    $( this ).find( $dropdownToggle ).attr( 'aria-expanded', 'false' );
                    $( this ).find( $dropdownMenu ).removeClass( showClass );
                }
            );
        }else {
            $dropdown.off( 'mouseenter mouseleave' );
            header.find( '.main-menu' ).collapse( 'hide' );
        }
    });

    // The same process is done without page scroll to prevent errors.
    if ( windowWidth > 991 ) {
        $dropdown.hover(
            function() {
                const $this = $( this );

                var hasShowClass = $this.hasClass( showClass );

                if( hasShowClass!==true ){
                    $this.addClass( showClass);
                    $this.find ( $dropdownToggle ).attr( 'aria-expanded', 'true' );
                    $this.find( $dropdownMenu ).addClass( showClass );
                }
            },
            function() {
                const $this = $( this );
                $this.removeClass( showClass );
                $this.find( $dropdownToggle ).attr( 'aria-expanded', 'false' );
                $this.find( $dropdownMenu ).removeClass( showClass );
            }
        );
    }else {
        $dropdown.off( 'mouseenter mouseleave' );
    }
}

/* ------------------------------------------------------------------- */
/* ScrollIt
/* ------------------------------------------------------------------- */
function arcadia_scrollIt() {
    "use-strict";
     
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 1000,
        activeClass: "active",
        onPageChange: null,
        topOffset: -100
    });
}
/* ------------------------------------------------------------------- */
/* Owl Carousel
/* ------------------------------------------------------------------- */
function arcadia_owlCarousel(){

    "use-strict";

    // Variables
    let instagramCarousel    = $( '#instagramCarousel' );
    let latestNewsCarousel   = $( '#latestNewsCarousel' );
    let heroCarousel         = $( '#heroCarousel' );
    let testimonialCarousel  = $( '#testimonialCarousel' );

    // instagram Carousel
    instagramCarousel.owlCarousel({
        margin:30,
        dots:false,
        navs:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:1000,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            600:{
                items:1,
            },
            768: {
                items: 2,
            },
            1000:{
                items:3,
            }
        }
    });

    // instagram Carousel
    latestNewsCarousel.owlCarousel({
        margin:30,
        dots:false,
        navs:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:1000,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            600:{
                items:1,
            },
            768: {
                items: 2,
            },
            1000:{
                items:3,
            }
        }
    }); 


    // testimonial Carousel
    testimonialCarousel.owlCarousel({
        margin:30,
        dots:false,
        navs:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        smartSpeed:1000,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            600:{
                items:1,
            },
            768: {
                items: 2,
            },
            1000:{
                items:3,
            }
        }
    }); 
    
     // Hero Slider
     heroCarousel.owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:1000,
        nav: true,
        navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
}

/* ------------------------------------------------------------------- */
/* Background Image
/* ------------------------------------------------------------------- */
function arcadia_Bg_Img_Path(){
    "use-scrict";

    // Variables
    let dataBgItem         = $( '*[data-bg-image-path]' );

    dataBgItem.each( function() {
        let imgPath        = $( this ).attr( 'data-bg-image-path' );
        $( this).css( 'background-image', 'url(' + imgPath + ')' );
    });
}

/* ------------------------------------------------------------------- */
/* Contact Form
/* ------------------------------------------------------------------- */
function arcadia_Contact_Form(){

    "use-scrict";
    let weddingContactForm               = $( '#weddingContactForm' );
    let manorContactForm                 = $( '#manorContactForm' );
    let barnsContactForm                 = $( '#barnsContactForm' );
    let siteContactForm                  = $( '#siteContactForm' );

    (function($) {
        $.fn.PhoneValidate     = function () {
            var phoneRegexp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
                return phoneRegexp.test($(this).val());
        }
        $.fn.EmailValidate     = function () {
            var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return emailRegexp.test($(this).val());
        }
    })(jQuery);
 
    weddingContactForm.on("submit", function(event) {

        // Form Variables
        let $this = $(this);
        let weddingContactFormName                 = $( 'input[name*="wedding_form_name"]' ).val().trim();
        let weddingContactFormEventRequest         = $( 'input[name*="wedding_form_event_request"]' ).val().trim();
        let weddingContactFormEventDate            = $( 'input[name*="wedding_form_event_date"]' ).val();
        let weddingContactFormGuests               = $( 'input[name*="wedding_form_guests"]' ).val().trim();
        let weddingContactFormPhone                = $( 'input[name*="wedding_form_phone"]' ).val().trim();
        let weddingContactFormMailingAddress       = $( 'input[name*="wedding_form_mailing_address"]' ).val().trim();
        let weddingContactFormEmail                = $( 'input[name*="wedding_form_email"]' ).val().trim();
        let weddingContactFormMessage              = $( 'textarea[name*="wedding_form_message"]' ).val().trim();
        let validateEmail                          = $( 'input[name*="wedding_form_email"]' ).EmailValidate();
        let validatePhone                          = $( 'input[name*="wedding_form_phone"]' ).PhoneValidate();

        if ( weddingContactFormName =='' || weddingContactFormEventRequest == '' || weddingContactFormEventDate == '' || weddingContactFormGuests == '' || weddingContactFormPhone =='' || weddingContactFormMailingAddress =='' || weddingContactFormMessage =='' || weddingContactFormEmail =='') {
            if($('.contact-alerts .empty-form').css("display") == "none"){
                $('.contact-alerts .empty-form').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
         }else if (!validateEmail === true) {
            if($('.contact-alerts .email-invalid').css("display") == "none"){
                $('.contact-alerts .email-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (!validatePhone === true) {
            if($('.contact-alerts .phone-invalid').css("display") == "none"){
                $('.contact-alerts .phone-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else {
            $this.find(':submit').append('<span class="fas fa-spinner fa-pulse ml-3"></span>');
            $this.find(':submit').attr('disabled','true');
            $.ajax({
                url: 'phpmailer/send_mail.php',
                data: {
                    weddingContactFormName: weddingContactFormName,
                    weddingContactFormEventRequest: weddingContactFormEventRequest,
                    weddingContactFormEventDate: weddingContactFormEventDate,
                    weddingContactFormGuests: weddingContactFormGuests,
                    weddingContactFormPhone: weddingContactFormPhone,
                    weddingContactFormMailingAddress: weddingContactFormMailingAddress,
                    weddingContactFormEmail: weddingContactFormEmail,
                    weddingContactFormMessage: weddingContactFormMessage,
                    weddingContactFormSend:true
                },
                type: 'POST',
                success: function(response) {
                    $('#weddingContactForm')[0].reset();
                    if (response == true) {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut();
                        $('.contact-alerts .form-success').stop().slideDown().delay(5000).slideUp();
                    } else {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut(); 
                        $('.contact-alerts .form-danger').html(response);
                        $('.contact-alerts .form-danger').stop().slideDown().delay(8000).slideUp();
                    }
                }
            });
        }

        event.preventDefault();
    });

    manorContactForm.on("submit", function(event) {

        // Form Variables
        let $this = $(this);
        let manorContactFormName          = $( 'input[name*="manor_form_name"]' ).val().trim();
        let manorContactFormEmail         = $( 'input[name*="manor_form_email"]' ).val().trim();
        let manorContactFormPhone         = $( 'input[name*="manor_form_phone"]' ).val().trim();
        let manorContactFormMessage       = $( 'textarea[name*="manor_form_message"]' ).val().trim();
        let manorvalidateEmail                   = $( 'input[name*="manor_form_email"]' ).EmailValidate();
        let manorvalidatePhone                   = $( 'input[name*="manor_form_phone"]' ).PhoneValidate();

        if (manorContactFormName =='' || manorContactFormEmail =='' || manorContactFormPhone == '' || manorContactFormMessage == '') {
            if($('.contact-alerts .empty-form').css("display") == "none"){
                $('.contact-alerts .empty-form').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (!manorvalidateEmail === true) {
            if($('.contact-alerts .email-invalid').css("display") == "none"){
                $('.contact-alerts .email-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (!manorvalidatePhone === true) {
            if($('.contact-alerts .phone-invalid').css("display") == "none"){
                $('.contact-alerts .phone-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else {
            $this.find(':submit').append('<span class="fas fa-spinner fa-pulse ml-3"></span>');
            $this.find(':submit').attr('disabled','true');
            $.ajax({
                url: 'phpmailer/send_mail.php',
                data: {
                    manorContactFormName: manorContactFormName,
                    manorContactFormEmail: manorContactFormEmail,
                    manorContactFormPhone: manorContactFormPhone,
                    manorContactFormMessage: manorContactFormMessage,
                    manorContactFormSend:true
                },
                type: 'POST',
                success: function(response) {
                    $('#manorContactForm')[0].reset();
                    if (response == true) {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut();
                        $('.contact-alerts .form-success').stop().slideDown().delay(5000).slideUp();
                    } else {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut(); 
                        $('.contact-alerts .form-danger').html(response);
                        $('.contact-alerts .form-danger').stop().slideDown().delay(8000).slideUp();
                    }
                }
            });
        }

        event.preventDefault();
    });

    barnsContactForm.on("submit", function(event) {

        // Form Variables
        let $this = $(this);
        let barnsContactFormName                 = $( 'input[name*="barns_form_name"]' ).val().trim();
        let barnsContactFormEmail                = $( 'input[name*="barns_form_email"]' ).val().trim();
        let barnsContactFormPhone                = $( 'input[name*="barns_form_phone"]' ).val().trim();
        let barnsContactFormMessage              = $( 'textarea[name*="barns_form_message"]' ).val().trim();
        let barnsvalidateEmail                   = $( 'input[name*="barns_form_email"]' ).EmailValidate();
        let barnsvalidatePhone                   = $( 'input[name*="barns_form_phone"]' ).PhoneValidate();

        if (barnsContactFormName =='' || barnsContactFormEmail =='' || barnsContactFormPhone == '' || barnsContactFormMessage == '') {
            if($('.contact-alerts .empty-form').css("display") == "none"){
                $('.contact-alerts .empty-form').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (!barnsvalidateEmail === true) {
            if($('.contact-alerts .email-invalid').css("display") == "none"){
                $('.contact-alerts .email-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (!barnsvalidatePhone === true) {
            if($('.contact-alerts .phone-invalid').css("display") == "none"){
                $('.contact-alerts .phone-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else {
            $this.find(':submit').append('<span class="fas fa-spinner fa-pulse ml-3"></span>');
            $this.find(':submit').attr('disabled','true');
            $.ajax({
                url: 'phpmailer/send_mail.php',
                data: {
                    barnsContactFormName: barnsContactFormName,
                    barnsContactFormEmail: barnsContactFormEmail,
                    barnsContactFormPhone: barnsContactFormPhone,
                    barnsContactFormMessage: barnsContactFormMessage,
                    barnsContactFormSend:true
                },
                type: 'POST',
                success: function(response) {
                    $('#barnsContactForm')[0].reset();
                    
                    if (response == true) {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut();
                        $('.contact-alerts .form-success').stop().slideDown().delay(5000).slideUp();
                    } else {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut(); 
                        $('.contact-alerts .form-danger').html(response);
                        $('.contact-alerts .form-danger').stop().slideDown().delay(8000).slideUp();
                    }
                }
            });
        }

        event.preventDefault();
    });

    siteContactForm.on("submit", function(event) {

        // Form Variables
        let $this = $(this);
        let contactFormName                 = $( 'input[name*="contact_form_name"]' ).val().trim();
        let contactFormEmail                = $( 'input[name*="contact_form_email"]' ).val().trim();
        let contactFormPhone                = $( 'input[name*="contact_form_phone"]' ).val().trim();
        let contactFormSubject              = $( 'input[name*="contact_form_subject"]' ).val().trim();
        let contactFormMessage              = $( 'textarea[name*="contact_form_message"]' ).val().trim();
        let contactFormValidateEmail        = $( 'input[name*="contact_form_email"]' ).EmailValidate();
        let contactFormValidatePhone        = $( 'input[name*="contact_form_phone"]' ).PhoneValidate();

        if (contactFormName =='' || contactFormEmail =='' || contactFormSubject == '' || contactFormMessage == '') {
            if($('.contact-alerts .empty-form').css("display") == "none"){
                $('.contact-alerts .empty-form').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if (!contactFormValidateEmail === true) {
            if($('.contact-alerts .email-invalid').css("display") == "none"){
                $('.contact-alerts .email-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else if ( contactFormPhone.length > 0 && !contactFormValidatePhone === true) {
            if($('.contact-alerts .phone-invalid').css("display") == "none"){
                $('.contact-alerts .phone-invalid').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else {
            $this.find(':submit').append('<span class="fas fa-spinner fa-pulse ml-3"></span>');
            $this.find(':submit').attr('disabled','true');
            $.ajax({
                url: 'phpmailer/send_mail.php',
                data: {
                    contactFormName: contactFormName,
                    contactFormEmail: contactFormEmail,
                    contactFormPhone: contactFormPhone,
                    contactFormSubject: contactFormSubject,
                    contactFormMessage: contactFormMessage,
                    contactFormSend:true
                },
                type: 'POST',
                success: function(response) {
                    $('#siteContactForm')[0].reset();
                    
                    if (response == true) {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut();
                        $('.contact-alerts .form-success').stop().slideDown().delay(5000).slideUp();
                    } else {
                        $this.find(':submit').removeAttr('disabled');
                        $this.find(':submit').find("span").fadeOut(); 
                        $('.contact-alerts .form-danger').html(response);
                        $('.contact-alerts .form-danger').stop().slideDown().delay(8000).slideUp();
                    }
                }
            });
        }

        event.preventDefault();
    });
}