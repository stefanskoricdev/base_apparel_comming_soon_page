$(document).ready(function(){
    
function validateMail(){
    
    var email=$('#email').val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(reg.test(email)){
        
        return true;
       
       }else{
           
           return false;
       
       }
    
}
    $('#email').keyup(function(){
    if(validateMail()){
       
        $('.email-wrapper .error').removeClass('active');
        $('.email-wrapper .not-valid').text("Email valid!");
        $('.email-wrapper .not-valid').removeClass('active');
        
       }else{
       
           $('.email-wrapper .error').addClass('active');
           $('.email-wrapper .not-valid').text('Email form is not valid!');
           $('.email-wrapper .not-valid').addClass('active');
       }    
    
    });

});

