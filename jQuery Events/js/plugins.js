/*global $,console*/


$(function () {
   
    
    "use strict";
    
    /******* click event **********/
    
    $('.btnClick').click(function () {
       
        $('.listTest1').animate({
            height: '80px'
        }, 600);
        
        $('.listTest1').css('visibility', 'visible');
        
    });
    
    
    /******* double click event **********/
    
    $('.btnDblClick').dblclick(function () {
       
        $('.listTest2').animate({
            height: '80px'
        }, 600);
        
        $('.listTest2').css('visibility', 'visible');
        
    });
    
     /**** hover ****/
    
    $('.tdImg1').hover(function () {
       
        $('.overley1').fadeIn(600);
        
    }, function () {
        $('.overley1').fadeOut(600);
    });
    
    /******* MouseOver event **********/
    
    $('.tdImg2').mouseover(function () {
       
        $('.overley2').fadeIn(600);
        
    });
    
});