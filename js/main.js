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
    autoPlayIntervalMs: 2000
  },
  splash: {
    autoCloseDelayMs: 6000
  },
  images: {
    defaultFallback: 'images/colagen_plus.jpg'
  },
  selectors: {
    whatsappBtn: '#whatsapp-btn',
    cartBtn: '#cart-btn',
    cartBubble: '#cart-bubble',
    partnerForm: '#partner-form',
    tabButtons: '.tab-btn',
    tabPanels: '.tab-panel',
    carouselSlides: '.carousel-slide',
    carouselDots: '.carousel-dot',
    carouselPrev: '.carousel-control.prev',
    carouselNext: '.carousel-control.next',
    productCardImages: '.product-card img',
    splashScreen: '#splash-screen',
    splashClose: '#splash-close'
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
      this.screen.style.display = 'none';
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
  }
}

// Self-initialization on DOMReady
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

