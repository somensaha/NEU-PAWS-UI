document.addEventListener("DOMContentLoaded", function() {

  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var clickTarget = this.getAttribute('data-link');
      window.location = clickTarget;
    });
  }

  // document.querySelectorAll('button').addEventListener('click', function(){
  //   var clickTarget = this.getAttribute('data-link');
  //   window.location = clickTarget;
  //   console.log('clickTarget');
  // });

});
