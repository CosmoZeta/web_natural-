// Main site script (migrated from script.js)
document.addEventListener('DOMContentLoaded',function(){
  console.log('Script cargado: tienda bÃ¡sica lista');

  var wa = document.getElementById('whatsapp-btn');
  if(wa){
    wa.addEventListener('click', function(){
      var phone = '+51967678197';
      var text = encodeURIComponent('Hola, quisiera mÃ¡s informaciÃ³n sobre sus productos');
      var url = 'https://wa.me/' + phone.replace(/[^0-9]/g,'') + '?text=' + text;
      window.open(url, '_blank');
    });
  }

  var cartBtn = document.getElementById('cart-btn');
  var bubble = document.getElementById('cart-bubble');
  if(cartBtn && bubble){
    cartBtn.addEventListener('click', function(){
      alert('Carrito: funcionalidad no implementada aÃºn.');
    });
  }

  var partnerForm = document.getElementById('partner-form');
  if(partnerForm){
    partnerForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Gracias â€” recibimos tu solicitud. Nos pondremos en contacto pronto.');
      partnerForm.reset();
    });
  }

  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');
  tabButtons.forEach(function(button){
    button.addEventListener('click', function(){
      tabButtons.forEach(function(btn){ btn.classList.remove('active'); });
      tabPanels.forEach(function(panel){ panel.classList.remove('active'); });
      button.classList.add('active');
      document.getElementById(button.getAttribute('data-target')).classList.add('active');
    });
  });

  // Carousel
  var slides = document.querySelectorAll('.carousel-slide');
  var dots = document.querySelectorAll('.carousel-dot');
  var prevBtn = document.querySelector('.carousel-control.prev');
  var nextBtn = document.querySelector('.carousel-control.next');
  var currentSlide = 0;
  var carouselInterval;

  function updateCarousel(index){
    slides.forEach(function(slide, i){
      slide.classList.toggle('active', i === index);
      if(dots[i]) dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide(){ updateCarousel((currentSlide + 1) % slides.length); }
  function prevSlide(){ updateCarousel((currentSlide - 1 + slides.length) % slides.length); }

  if(dots) dots.forEach(function(dot){ dot.addEventListener('click', function(){ updateCarousel(parseInt(dot.getAttribute('data-index'),10)); restartCarousel(); }); });
  if(nextBtn){ nextBtn.addEventListener('click', function(){ nextSlide(); restartCarousel(); }); }
  if(prevBtn){ prevBtn.addEventListener('click', function(){ prevSlide(); restartCarousel(); }); }

  function startCarousel(){ carouselInterval = setInterval(nextSlide, 5000); }
  function restartCarousel(){ clearInterval(carouselInterval); startCarousel(); }
  if(slides.length) startCarousel();

  // Image fallbacks
  function applyImageFallbacks(){
    var mainFallback = 'images/colagen_plus.jpg';
    var imgs = document.querySelectorAll('.product-card img');
    imgs.forEach(function(img){
      img.style.objectFit = img.style.objectFit || 'cover';
      img.addEventListener('error', function(){ img.src = mainFallback; });
    });
  }
  applyImageFallbacks();

  // Splash screen
  var splashScreen = document.getElementById('splash-screen');
  var splashClose = document.getElementById('splash-close');
  if(splashScreen){
    splashScreen.addEventListener('click', function(){
      splashScreen.style.display = 'none';
    });
  }
  if(splashClose){
    splashClose.addEventListener('click', function(event){
      event.stopPropagation();
      splashScreen.style.display = 'none';
    });
  }
  setTimeout(function(){
    if(splashScreen && splashScreen.style.display !== 'none'){
      splashScreen.style.display = 'none';
    }
  }, 6000);
});
