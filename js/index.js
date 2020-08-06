let body = document.querySelector('body');

window.addEventListener('load',() => {
    body.classList.add("loaded")  
  });

(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.animation-hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('animation-hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init); 

  init();
  checkPosition();
})();




const links = document.querySelectorAll('#scroll-anim');

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}


