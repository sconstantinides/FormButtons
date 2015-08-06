$(function() {
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
      } else {
        input.css("width", width);
      }

      $(this).addClass("active");
      input.focus();
    }
  });
});