$(function() {
  //flag to prevent focusout of form-button when icon is clicked
  var flag=0;
  $('.form-button').mousedown(function(e){
    if($(e.target).parent('label.cta').parent('div.form-button').hasClass('active')) {
      flag=1;
    }
  });
  $(".form-button").click(function(event) {
    if(!$(event.target).is("label") &&
       !$(event.target).parent().is("label") &&
       !$(this).hasClass("active")) {
      var fullWidth = $(this).hasClass("full-width");
      var containerWidth = $(this).outerWidth();
      if(fullWidth) {
        containerWidth = $(this).parent().width();
      }
      var input = $(this).find(".input");
      var width = containerWidth - $(this).find(".icon").outerWidth() - $(this).find(".submit").outerWidth() - (input.outerWidth() - input.width());
      if(fullWidth) {
        input.animate({ width: width });
        //fixes funny behaviour in mozilla
        input.css({"display": "inline-block"});
      } else {
        input.css("width", width);
      }
      $(this).addClass("active");
      input.focus();
    }
  });
  $(".form-button").focusout(function(e){
    if(flag){
      flag=0;
      return;
    }
    if($(this).hasClass('auto-close') || $(this).hasClass('auto-close-on-empty')) {
      if(!$(e.relatedTarget).is(".form-button, .form-button *")){
        var input = $(this).find(".input");
        if($(this).hasClass('auto-close-on-empty')) {
          if(input.val().length){
            return;
          }
        }
        var fullWidth = $(this).hasClass("full-width");
        var width = input.siblings('label.cta').children('span.text').outerWidth()-input.siblings('button.submit').outerWidth();
        if(fullWidth){
          input.animate({ width: width },function(){
              $(this).parent('div.form-button').removeClass('active');
              //fixes funny behaviour in mozilla
              $(this).css({'display':'none'});          
          });
        } else {
          $(this).removeClass('active');       
        }
      }
    }
  });
});
