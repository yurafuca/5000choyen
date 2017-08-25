const SETTINGS = (function() {
  return {
    TEXT_ORDER: function() {
      return document.querySelector('input[name="text-order"]:checked').value;
    },
    BACKGROUND_ORDER: function() {
      return document.querySelector('input[name="background-order"]:checked').value;
    }
  };
})();

window.SETTINGS = SETTINGS;
