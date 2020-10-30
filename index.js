let $btn = $('.date-btn');
let $btnWidget = $('.date-widget');

let $btnWidgetText = $('.date-widget p');

function date() {
  $btnWidgetText.text(new Date().toLocaleTimeString());
  console.log('<--------------');
}
let startTime;

function stopTime() {
  clearInterval(startTime);
}

$btn.mouseenter(() => {
  startTime = setInterval(date, 100);
  $btnWidget.fadeIn();
});

$btnWidget.mouseleave(() => {
  stopTime(startTime);
  $btnWidget.fadeOut();
});
