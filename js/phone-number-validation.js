window.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector('form');
  var phoneInput = document.getElementById('phone-input');

  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___)___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      });
    i = new_value.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i)
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
      function (a) {
        return "\\d{1," + a.length + "}"
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58)
      this.value = new_value;
    if (event.type == "blur" && this.value.length < 5) this.value = ""
  }

  function validateForm(event) {
    if (!phoneInput.checkValidity()) {
      event.preventDefault();
      // Дополнительные действия при невалидной форме
    }
  }

  phoneInput.addEventListener("input", mask, false);
  phoneInput.addEventListener("focus", mask, false);
  phoneInput.addEventListener("blur", mask, false);
  phoneInput.addEventListener("keydown", mask, false);

  form.addEventListener("submit", validateForm, false);
});
