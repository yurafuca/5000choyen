window.onload = function() {
  const result = document.getElementById('result');
  const data = window.location.href.split('?=')[1];
  result.setAttribute('src', data);
}
