document.addEventListener("DOMContentLoaded", function() {
   
    window.addEventListener('scroll', function() {
        let atWindowHeight = window.scrollY;
        let navbar = this.document.getElementById('nav-scroll');
        atWindowHeight === 0 ?
         navbar.classList.remove('nav-shadow') :
         navbar.classList.add('nav-shadow')
      });
  });