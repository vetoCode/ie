//(function($) {
  function handleIE() {
    var browser = window.navigator.userAgent;

    if (browser.indexOf('MSIE ') > 0 || browser.indexOf('Trident/') > 0) {
      console.log("I'm using an IE..");
      $('h1').append("I'm using an IE..");
      //$('h1').innerHTML = "I'm using an IE..";
      $('h3').attr("style", "display: none;");
    } else {
      console.log("I'm not using an IE");
      $('h1').append("I'm not using an IE..");
      $('h2').hide();
    }
  }

  handleIE();
//})(jQuery);
