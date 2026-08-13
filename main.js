document.addEventListener('DOMContentLoaded', function(){
  console.log('Script cargado: tienda basica lista');

  // =========================================
  // 0. CARGAR HEADER Y FOOTER AUTOMÁTICAMENTE
  // =========================================
  function loadPartials() {
    var headerDiv = document.getElementById('site-header');
    if (headerDiv) {
      fetch('/partials/header.html')
        .then(function(response) { return response.text(); })
        .then(function(data) { headerDiv.innerHTML = data; })
        .catch(function(err) { console.error('Error cargando el header:', err); });
    }

    var footerDiv = document.getElementById('site-footer');
    if (footerDiv) {
      fetch('/partials/footer.html')
        .then(function(response) { return response.text(); })
        .then(function(data) { footerDiv.innerHTML = data; })
        .catch(function(err) { console.error('Error cargando el footer:', err); });
    }
  }
  loadPartials();

  // =========================================
  // 1. BOTON DE WHATSAPP
  // =========================================
  var wa = document.getElementById('whatsapp-btn');
  if(wa){
    wa.addEventListener('click', function(){
      var phone = '+51967678197';
      var text = encodeURIComponent('Hola, quisiera mas informacion sobre sus productos');
      var url = 'https://wa.me/' + phone.replace(/[^0-9]/g,'') + '?text=' + text;
      window.open(url, '_blank');
    });
  }

  // =========================================
  // 2. BOTON DE CARRITO
  // =========================================
  var cartBtn = document.getElementById('cart-btn');
  var bubble = document.getElementById('cart-bubble');
  if(cartBtn && bubble){
    cartBtn.addEventListener('click', function(){
      alert('Carrito: funcionalidad no implementada aun.');
    });
  }

  // =========================================
  // 3. FORMULARIO DE CONTACTO (COLABORA)
  // =========================================
  var partnerForm = document.getElementById('partner-form');
  if(partnerForm){
    partnerForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Gracias - recibimos tu solicitud. Nos pondremos en contacto pronto.');
      partnerForm.reset();
    });
  }

  var contactPageForm = document.getElementById('contact-page-form');
  if(contactPageForm){
    contactPageForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Gracias por escribirnos. Nos pondremos en contacto contigo pronto.');
      contactPageForm.reset();
    });
  }

  // =========================================
  // 4. LOGICA DE LAS PESTANAS (TABS)
  // =========================================
  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');
  
  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach(function(button){
      button.addEventListener('click', function(){
        tabButtons.forEach(function(btn){ btn.classList.remove('active'); });
        tabPanels.forEach(function(panel){ panel.classList.remove('active'); });
        
        button.classList.add('active');
        var targetId = button.getAttribute('data-target');
        var targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
      });
    });
  }

  // =========================================
  // 5. LOGICA DE ORDENAMIENTO EN LA TIENDA
  // =========================================
  var sortSelect = document.getElementById('sort-products');
  var productsGrid = document.getElementById('store-grid-container');

  if (sortSelect && productsGrid) {
    sortSelect.addEventListener('change', function() {
      var products = Array.from(productsGrid.children);
      var sortValue = this.value;

      products.sort(function(a, b) {
        var priceElA = a.querySelector('.price');
        var priceElB = b.querySelector('.price');

        if (!priceElA || !priceElB) return 0;

        var priceA = parseFloat(priceElA.textContent.replace(/[^0-9.]/g, '')) || 0;
        var priceB = parseFloat(priceElB.textContent.replace(/[^0-9.]/g, '')) || 0;
        
        var nameElA = a.querySelector('h3');
        var nameElB = b.querySelector('h3');
        var nameA = nameElA ? nameElA.textContent.trim() : '';
        var nameB = nameElB ? nameElB.textContent.trim() : '';

        if (sortValue === 'price-asc') {
          return priceA - priceB;
        } else if (sortValue === 'price-desc') {
          return priceB - priceA;
        } else if (sortValue === 'name-asc') {
          return nameA.localeCompare(nameB);
        }
        
        return 0;
      });

      productsGrid.innerHTML = '';
      products.forEach(function(product) {
        productsGrid.appendChild(product);
      });
    });
  }

  // =========================================
  // 6. RESPALDO DE IMAGENES (FALLBACKS)
  // =========================================
  function applyImageFallbacks(){
    var isInsidePages = window.location.pathname.includes('/pages/');
    var mainFallback = isInsidePages ? '../images/colagen_plus.jpg' : 'images/colagen_plus.jpg';
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