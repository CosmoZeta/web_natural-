// Script mÃ­nimo para interacciÃ³n futura
document.addEventListener('DOMContentLoaded',function(){
  // Placeholder: aquÃ­ puedes aÃ±adir filtros, ordenamiento o carrito
  console.log('Script cargado: tienda bÃ¡sica lista');

  // WhatsApp button
  var wa = document.getElementById('whatsapp-btn');
  if(wa){
    wa.addEventListener('click', function(){
      var phone = '+51967678197';
      var text = encodeURIComponent('Hola, quisiera mÃ¡s informaciÃ³n sobre sus productos');
      var url = 'https://wa.me/' + phone.replace(/[^0-9]/g,'') + '?text=' + text;
      window.open(url, '_blank');
    });
  }

  // Cart button (example): open cart or increment
  var cartBtn = document.getElementById('cart-btn');
  var bubble = document.getElementById('cart-bubble');
  if(cartBtn && bubble){
    cartBtn.addEventListener('click', function(){
      alert('Carrito: funcionalidad no implementada aÃºn.');
    });
  }

  // Partner form submit handler
  var partnerForm = document.getElementById('partner-form');
  if(partnerForm){
    partnerForm.addEventListener('submit', function(e){
      e.preventDefault();
      // Simple UX feedback - here you would send the data to a server
      alert('Gracias â€” recibimos tu solicitud. Nos pondremos en contacto pronto.');
      partnerForm.reset();
    });
  }

  // Tab switching logic
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

  // Carousel logic for hero images
  var slides = document.querySelectorAll('.carousel-slide');
  var dots = document.querySelectorAll('.carousel-dot');
  var prevBtn = document.querySelector('.carousel-control.prev');
  var nextBtn = document.querySelector('.carousel-control.next');
  var currentSlide = 0;
  var carouselInterval;

  function updateCarousel(index){
    slides.forEach(function(slide, i){
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide(){
    updateCarousel((currentSlide + 1) % slides.length);
  }

  function prevSlide(){
    updateCarousel((currentSlide - 1 + slides.length) % slides.length);
  }

  dots.forEach(function(dot){
    dot.addEventListener('click', function(){
      updateCarousel(parseInt(dot.getAttribute('data-index'), 10));
      restartCarousel();
    });
  });

  if(nextBtn){ nextBtn.addEventListener('click', function(){ nextSlide(); restartCarousel(); }); }
  if(prevBtn){ prevBtn.addEventListener('click', function(){ prevSlide(); restartCarousel(); }); }

  function startCarousel(){
    carouselInterval = setInterval(nextSlide, 2000);
  }

  function restartCarousel(){
    clearInterval(carouselInterval);
    startCarousel();
  }

  startCarousel();

  // Add simple fallback: if a local image fails to load, use the local backup assets
  function applyImageFallbacks(){
    var mainFallback = 'images/colagen_plus.jpg';
    var overlayFallback = 'images/citrato_magnesio.png';
    var imgs = document.querySelectorAll('.product-card img');
    imgs.forEach(function(img){
      img.style.objectFit = img.style.objectFit || 'cover';
      img.addEventListener('error', function(){
        if(img.classList.contains('overlay-img')){
          img.style.display = 'none';
        } else {
          img.src = mainFallback;
        }
      });
    });
  }
  applyImageFallbacks();
});




