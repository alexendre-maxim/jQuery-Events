/*global $,console, alert*/


$(function () {
   
    
    "use strict";

    /******* Submit Event ********/
    
    $('.contactform').submit(function (e) {
       
        e.preventDefault();
        
        $('.thanks').slideDown(600);
        
        $(this).css('opacity', '0.1');
    
    });
    
    /******* Submit Event ********/
    
    /******* Scroll Event ********/
    
    $(window).scroll(function () {
       
        if ($(this).scrollTop() > 300) {
            
            $('.showDiv').fadeIn();
            
        } else if ($(this).scrollTop() < 100) {
            
            $('.showDiv').fadeOut();
            
        }
        
    });
    
    /******* Scroll Event ********/
    
    if ($(window).width() > 992) {
        $('.showLg').fadeIn();
    } else if (($(window).width() > 768) && ($(window).width() < 992)) {
        $('.showMd').fadeIn();
    } else if ($(window).width() < 768) {
        $('.showSm').fadeIn();
    }
    
    $(window).resize(function () {
       
        if ($(window).width() > 992) {
            $('.showMd').fadeOut();
            $('.showLg').fadeIn();
            $('.showSm').fadeOut();
        } else if (($(window).width() > 768) && ($(window).width() < 992)) {
            $('.showMd').fadeIn();
            $('.showLg').fadeOut();
            $('.showSm').fadeOut();
        } else if ($(window).width() < 768) {
            $('.showMd').fadeOut();
            $('.showLg').fadeOut();
            $('.showSm').fadeIn();
        }
        
    });
    
    
});