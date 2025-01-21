document.addEventListener("DOMContentLoaded", function() {
  const revealElements = document.querySelectorAll(".content-block");
    
  function reveal() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
            
      if (elementTop < windowHeight - 150) {
        element.classList.add("active");
      }
    });
  }
    
  window.addEventListener("scroll", reveal);
  reveal(); 
});