      var splash = document.getElementById('splash');
      var element = document.getElementsByClassName('img-box');
      var splashImg = document.getElementById('splash-image');
      var thumbnail;
      for (var i = 0; i < element.length; i++) {
          element[i].addEventListener("click", function() {
              thumbnail = this.getElementsByTagName("IMG")[0];
              splash.style.display = "flex";
              splashImg.src = thumbnail.src;
          });
      }
      var close = document.getElementById("close");
      close.onclick = function() {
          splash.style.display = "none"
      };