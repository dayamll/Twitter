window.onload = begin;

function begin() {
  var tweetArea = document.getElementById('tweet-area');
  var tweetBtn = document.getElementById('tweet-btn');
  var messages = document.getElementById('messages');
  var count = document.getElementById('count');
  var MAXCHARACTERS = 140;

  tweetBtn.addEventListener('click', message);
  tweetArea.addEventListener('keyup', changeText);

  function message(event) {
    event.preventDefault();

    if (tweetArea.value) {
      var div = document.createElement('div');
      var tweet = document.createElement('span');

      // agrega formato de hora
      tweet.innerHTML = tweetArea.value + '<i> Publicado: ' + moment().format('hh:mm') + '</i>';
      tweet.classList.add('tweet');

      div.classList.add('nuevo-mensaje');
      tweetArea.value = '';
      tweetArea.focus();

      div.appendChild(tweet);
      messages.insertBefore(div, messages.firstElementChild);
    } else {
      event.target.disabled = true;
    }
  }
