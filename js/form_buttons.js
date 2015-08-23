$(function() {
  $(".form-button").click(function(e) {
    if(!$(this).hasClass("active")) {
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
      input.css("display", "inline-block");
      $(this).addClass("active");
      input.focus();
    }
  });

  $(document).click(function(e) {
    if(!$(e.target).hasClass("form-button") &&
       !$(e.target).parents().is(".form-button")) {
      $.each($(".form-button.auto-close.active"), function() {
        var input = $(this).find(".input");
        input.css({
          width: 0,
          display: "none"
        });
        $(this).removeClass("active");
      });
    }
  });
});
