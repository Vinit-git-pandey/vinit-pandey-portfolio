// basic interactive behaviors: smooth scroll and year
document.addEventListener('DOMContentLoaded', function(){
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
