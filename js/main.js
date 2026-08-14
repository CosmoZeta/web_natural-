/**
 * Natural Web Store - Core Application Script
 * Refactored applying SOLID principles, Design Patterns (Mediator, Singleton, Controller), and ES6+ standards.
 */

'use strict';

// ==========================================
// 1. CONFIGURATION & CONSTANTS
// ==========================================
const CONFIG = Object.freeze({
  whatsapp: {
    phone: '+51967678197',
    defaultMessage: 'Hola, quisiera más información sobre sus productos',
    baseUrl: 'https://wa.me/'
  },
  carousel: {
    autoPlayIntervalMs: 4500
  },
  splash: {
    autoCloseDelayMs: 400
  },
  images: {
    defaultFallback: 'images/colagen_plus.jpg'
  },
  selectors: {
    whatsappBtn: '#whatsapp-btn',
    cartBtn: '#cart-btn',
    cartBubble: '#cart-bubble',
    partnerForm: '#partner-form, #contact-page-form',
    tabButtons: '.tab-btn',
    tabPanels: '.tab-panel',
    carouselSlides: '.carousel-slide',
    carouselDots: '.carousel-dot',
    carouselPrev: '#prevBtn, .carousel-control.prev',
    carouselNext: '#nextBtn, .carousel-control.next',
    productCardImages: '.product-card img',
    splashScreen: '#splash-screen',
    splashClose: '#splash-close',
    sortSelect: '#sort-products',
    productsGrid: '#store-grid-container',
    searchInput: '#header-search-input',
    searchTrigger: '#search-trigger'
  }
});

// ==========================================
// 2. DOM UTILITIES (Single Responsibility)
// ==========================================
class DOMUtils {
  static select(selector) {
    return document.querySelector(selector);
  }

  static selectAll(selector) {
    return Array.from(document.querySelectorAll(selector));
  }

  static addSafeEventListener(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
    }
  }

  static normalizeText(str) {
    if (!str) return '';
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }
}

// ==========================================
// 3. SERVICES & CONTROLLERS (SOLID Architecture)
// ==========================================

/**
 * Single Responsibility: Handles WhatsApp direct messaging redirection.
 */
class WhatsAppService {
  constructor(config = CONFIG.whatsapp) {
    this.config = config;
  }

  init(buttonSelector) {
    const btn = DOMUtils.select(buttonSelector);
    if (!btn) return;

    DOMUtils.addSafeEventListener(btn, 'click', () => this.sendMessage());
  }

  sendMessage() {
    const cleanPhone = this.config.phone.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(this.config.defaultMessage);
    const url = `${this.config.baseUrl}${cleanPhone}?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Single Responsibility: Manages cart interactions and bubble indicators.
 */
class CartController {
  init(btnSelector, bubbleSelector) {
    const btn = DOMUtils.select(btnSelector);
    const bubble = DOMUtils.select(bubbleSelector);
    if (!btn || !bubble) return;

    DOMUtils.addSafeEventListener(btn, 'click', () => this.handleClick());
  }

  handleClick() {
    alert('Carrito: funcionalidad no implementada aún.');
  }
}

/**
 * Single Responsibility: Handles Partner Form submissions and UX feedback.
 */
class PartnerFormController {
  init(formSelector) {
    const form = DOMUtils.select(formSelector);
    if (!form) return;

    DOMUtils.addSafeEventListener(form, 'submit', (event) => this.handleSubmit(event, form));
  }

  handleSubmit(event, form) {
    event.preventDefault();
    alert('Gracias — recibimos tu solicitud. Nos pondremos en contacto pronto.');
    form.reset();
  }
}

/**
 * Single Responsibility: Manages Tab component toggling and state.
 */
class TabNavigationComponent {
  init(buttonSelector, panelSelector) {
    this.buttons = DOMUtils.selectAll(buttonSelector);
    this.panels = DOMUtils.selectAll(panelSelector);

    if (!this.buttons.length || !this.panels.length) return;

    this.buttons.forEach((btn) => {
      DOMUtils.addSafeEventListener(btn, 'click', () => this.setActiveTab(btn));
    });
  }

  setActiveTab(selectedButton) {
    const targetId = selectedButton.getAttribute('data-target');
    if (!targetId) return;

    const targetPanel = document.getElementById(targetId);
    if (!targetPanel) return;

    this.buttons.forEach((btn) => btn.classList.remove('active'));
    this.panels.forEach((panel) => panel.classList.remove('active'));

    selectedButton.classList.add('active');
    targetPanel.classList.add('active');
  }
}

/**
 * Single Responsibility: Hero Image Carousel with auto-advance and navigation.
 */
class HeroCarouselComponent {
  constructor(config = CONFIG.carousel) {
    this.config = config;
    this.currentIndex = 0;
    this.timer = null;
  }

  init(slidesSel, dotsSel, prevSel, nextSel) {
    this.slides = DOMUtils.selectAll(slidesSel);
    this.dots = DOMUtils.selectAll(dotsSel);
    this.prevBtn = DOMUtils.select(prevSel);
    this.nextBtn = DOMUtils.select(nextSel);

    if (!this.slides.length) return;

    this.bindEvents();
    this.startAutoPlay();
  }

  bindEvents() {
    this.dots.forEach((dot) => {
      DOMUtils.addSafeEventListener(dot, 'click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
          this.goToSlide(index);
          this.restartAutoPlay();
        }
      });
    });

    if (this.nextBtn) {
      DOMUtils.addSafeEventListener(this.nextBtn, 'click', () => {
        this.next();
        this.restartAutoPlay();
      });
    }

    if (this.prevBtn) {
      DOMUtils.addSafeEventListener(this.prevBtn, 'click', () => {
        this.prev();
        this.restartAutoPlay();
      });
    }
  }

  goToSlide(index) {
    if (index < 0 || index >= this.slides.length) return;

    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      if (this.dots[i]) {
        this.dots[i].classList.toggle('active', i === index);
      }
    });

    this.currentIndex = index;
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.timer = setInterval(() => this.next(), this.config.autoPlayIntervalMs);
  }

  stopAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}

/**
 * Single Responsibility: Manages image error fallbacks across product cards.
 */
class ImageFallbackHandler {
  constructor(config = CONFIG.images) {
    this.config = config;
  }

  init(imgSelector) {
    const images = DOMUtils.selectAll(imgSelector);
    images.forEach((img) => {
      img.style.objectFit = img.style.objectFit || 'cover';
      DOMUtils.addSafeEventListener(img, 'error', () => this.handleError(img));
    });
  }

  handleError(img) {
    if (img.classList.contains('overlay-img')) {
      img.style.display = 'none';
    } else {
      img.src = this.config.defaultFallback;
    }
  }
}

/**
 * Single Responsibility: Handles product search logic across the store.
 */
class SearchController {
  static isInitialized = false;

  init(triggerSel, inputSel, gridSel) {
    if (SearchController.isInitialized) return;
    SearchController.isInitialized = true;

    this.triggerSel = triggerSel;
    this.inputSel = inputSel;
    this.gridSel = gridSel;

    // Toggle input visibility on search trigger click (event delegation for async partials)
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest(this.triggerSel);
      const input = DOMUtils.select(this.inputSel);

      if (trigger && input) {
        e.stopPropagation();
        const isHidden = getComputedStyle(input).display === 'none';
        input.style.display = isHidden ? 'block' : 'none';
        if (isHidden) input.focus();
      } else if (input && input.style.display !== 'none' && !input.contains(e.target)) {
        input.style.display = 'none';
      }
    });

    // Real-time search filter on input event
    document.addEventListener('input', (e) => {
      if (e.target.matches(this.inputSel)) {
        this.performSearch(e.target);
      }
    });
  }

  performSearch(inputElement) {
    const grid = DOMUtils.select(this.gridSel);
    if (!grid) return; // Search only works if on a page with a product grid

    const searchTerm = DOMUtils.normalizeText(inputElement.value);
    const cards = Array.from(grid.querySelectorAll('.product-card'));

    cards.forEach(card => {
      const titleEl = card.querySelector('h3');
      if (!titleEl) return;
      const productName = DOMUtils.normalizeText(titleEl.textContent);
      const isMatch = productName.includes(searchTerm);
      card.style.display = isMatch ? '' : 'none';
    });
  }
}

/**
 * Single Responsibility: Handles product sorting logic in the store grid.
 */
class ProductSorter {
  init(selectSelector, gridSelector) {
    this.select = DOMUtils.select(selectSelector);
    this.grid = DOMUtils.select(gridSelector);

    if (!this.select || !this.grid) return;

    DOMUtils.addSafeEventListener(this.select, 'change', () => this.sort());
  }

  sort() {
    const value = this.select.value;
    const cards = Array.from(this.grid.querySelectorAll('.product-card'));

    const sortedCards = cards.sort((a, b) => {
      if (value === 'name-asc') {
        const nameA = a.querySelector('h3').textContent.trim().toLowerCase();
        const nameB = b.querySelector('h3').textContent.trim().toLowerCase();
        return nameA.localeCompare(nameB);
      }

      if (value === 'price-asc' || value === 'price-desc') {
        const priceA = this.parsePrice(a.querySelector('.price').textContent);
        const priceB = this.parsePrice(b.querySelector('.price').textContent);
        return value === 'price-asc' ? priceA - priceB : priceB - priceA;
      }

      return 0; // Default or unsorted
    });

    // Re-append sorted elements
    this.grid.innerHTML = '';
    sortedCards.forEach(card => this.grid.appendChild(card));
  }

  parsePrice(priceString) {
    // Extracts numeric value from strings like "S/30.00"
    return parseFloat(priceString.replace(/[^\d.]/g, '')) || 0;
  }
}

/**
 * Single Responsibility: Handles Splash Screen popup modal display & auto-hide timer.
 */
class SplashScreenController {
  constructor(config = CONFIG.splash) {
    this.config = config;
    this.autoCloseTimer = null;
  }

  init(screenSelector, closeBtnSelector) {
    this.screen = DOMUtils.select(screenSelector);
    this.closeBtn = DOMUtils.select(closeBtnSelector);

    if (!this.screen) return;

    DOMUtils.addSafeEventListener(this.screen, 'click', () => this.hide());

    if (this.closeBtn) {
      DOMUtils.addSafeEventListener(this.closeBtn, 'click', (event) => {
        event.stopPropagation();
        this.hide();
      });
    }

    this.scheduleAutoClose();
  }

  hide() {
    if (this.screen && this.screen.style.display !== 'none') {
      this.screen.style.opacity = '0';
      setTimeout(() => {
        if (this.screen) this.screen.style.display = 'none';
      }, 300);
      if (this.autoCloseTimer) {
        clearTimeout(this.autoCloseTimer);
        this.autoCloseTimer = null;
      }
    }
  }

  scheduleAutoClose() {
    this.autoCloseTimer = setTimeout(() => this.hide(), this.config.autoCloseDelayMs);
  }
}

// ==========================================
// 4. APPLICATION BOOTSTRAP (Mediator / Facade)
// ==========================================
class App {
  static init() {
    console.log('App initialized: Tienda Natural');

    new WhatsAppService().init(CONFIG.selectors.whatsappBtn);
    new CartController().init(CONFIG.selectors.cartBtn, CONFIG.selectors.cartBubble);
    new PartnerFormController().init(CONFIG.selectors.partnerForm);
    new TabNavigationComponent().init(CONFIG.selectors.tabButtons, CONFIG.selectors.tabPanels);

    new HeroCarouselComponent().init(
      CONFIG.selectors.carouselSlides,
      CONFIG.selectors.carouselDots,
      CONFIG.selectors.carouselPrev,
      CONFIG.selectors.carouselNext
    );

    new ImageFallbackHandler().init(CONFIG.selectors.productCardImages);
    new SplashScreenController().init(CONFIG.selectors.splashScreen, CONFIG.selectors.splashClose);
    new ProductSorter().init(CONFIG.selectors.sortSelect, CONFIG.selectors.productsGrid);
    new SearchController().init(CONFIG.selectors.searchTrigger, CONFIG.selectors.searchInput, CONFIG.selectors.productsGrid);
  }
}

// Escuchar la carga de los partials para reinicializar componentes que dependen del Header
document.addEventListener('partialLoaded', (e) => {
  if (e.detail.selector === '#site-header') {
    new SearchController().init(CONFIG.selectors.searchTrigger, CONFIG.selectors.searchInput, CONFIG.selectors.productsGrid);
  }
});

// Self-initialization on DOMReady
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

