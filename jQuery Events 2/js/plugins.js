/*global $,console, alert*/


$(function () {
   
    
    "use strict";
    
    /********** KeyUp Event *********/
    
    $('.titleUp').keyup(function () {
       
        $('.titlleUp').html($(this).val());
        
    });
    
    $('.textaUp').keyup(function () {
       
        $('.textUp').html($(this).val());
        
    });
    
    /********** Keydown Event *********/
    
    $('.titledown').keydown(function () {
       
        $('.titlledown').html($(this).val());
        
        alert('the key was pressed');
        
    });
    
    $('.textadown').keydown(function () {
       
        $('.textdown').html($(this).val());
        
        alert('the key was pressed');
        
    });
    
    /********** Keypress Event *********/
    
    $('.titlepress').keypress(function () {
       
        $('.titllepress').html($(this).val());
        
        alert('the key was pressed');
        
    });
    
    $('.textapress').keypress(function () {
       
        $('.textpress').html($(this).val());
        
        alert('the key was pressed');
        
    });
    
    /********** Change Event *********/
    
    $('.market').change(function () {
       
        var selectV = parseInt($(this).val(), 10),
            
            inputV = parseInt($('.nbr').val(), 10),
            
            res = selectV * inputV;
        
        $('.result').html(res + " USD");
            
        
    });
    
    /******* Focus Event ****/
    
    $('.focusInput').focus(function () {
       
        $(this).animate({
           
            width: '150px'
            
        }, 600);
        
    });
    
    /******* Blur Event ****/
    
    $('.focusInput').blur(function () {
       
        $(this).animate({
           
            width: '50px'
            
        }, 600);
        
    });
    
});