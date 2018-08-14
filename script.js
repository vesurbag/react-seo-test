var title = document.getElementsByTagName("title")[0];
title.innerHTML = "External js title";
var content = document.getElementById("content");
content.innerHTML = "External js content";

var xhr = new XMLHttpRequest()
xhr.open('GET', 'data.json', true)
xhr.onload = function (e) {
  xhr = JSON.parse(xhr.response)
  title.innerHTML = xhr.title
  content.innerHTML = xhr.content
}
xhr.send(null)