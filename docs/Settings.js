window.Settings = {
  get: function(name) {
    if (name === 'TEXT_ORDER') {
      return document.querySelector('input[name="text-order"]:checked').value;
    } else if (name === 'BACKGROUND_ORDER') {
      return document.querySelector('input[name="background-order"]:checked').value;
    }
  }
};
