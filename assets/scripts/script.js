$(document).ready(function onDocumentReady() {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('illustration'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/data.json'
  });
});
window.dataLayer = window.dataLayer || [];

$('#menuAtividades').hover(
  function () {
    $(this).addClass('active')
  },
  function () {
    $(this).removeClass('active')
  }
)

$('#menuCronograma').hover(
  function () {
    $(this).addClass('active')
  },
  function () {
    $(this).removeClass('active')
  }
)

$('#menuPatrocionio').hover(
  function () {
    $(this).addClass('active')
  },
  function () {
    $(this).removeClass('active')
  }
)

$('#menuLocal').hover(
  function () {
    $(this).addClass('active')
  },
  function () {
    $(this).removeClass('active')
  }
)

$('#menuFAQ').hover(
  function () {
    $(this).addClass('active')
  },
  function () {
    $(this).removeClass('active')
  }
)

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-143516100-1');