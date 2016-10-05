(function($) {
  function handleIE() {
    var browser = window.navigator.userAgent;
    if (browser.indexOf('MSIE ') > 0 || browser.indexOf('Trident/') > 0) {
      console.log("I'm using an IE..");
      $('.ieLabel').attr('display', 'inline');
    } else {
      console.log("I'm not using an IE");
      $('.ieLabel').hide();
    }
  }

  handleIE();
})(jQuery);
