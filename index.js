const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    }
  });
}, { threshold: 1.0 }); // Only trigger when 100% of the element is visible

const scrollScale = document.querySelectorAll('.scroll-scale')
scrollScale.forEach((el)=>observer.observe(el))

const scrollBottom = document.querySelectorAll('.scroll-bottom')
scrollBottom.forEach((el)=>observer.observe(el))

const scrollTop = document.querySelectorAll('.scroll-top')
scrollTop.forEach((el)=>observer.observe(el))