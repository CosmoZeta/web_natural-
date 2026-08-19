// Load HTML partials (header/footer) into placeholders securely
document.addEventListener('DOMContentLoaded', function(){
  'use strict';

  // Whitelist of allowed partial paths to prevent SSRF / arbitrary file inclusion
  var ALLOWED_PARTIALS = ['partials/header.html', 'partials/footer.html'];

  function getDepthPrefix() {
    var path = window.location.pathname.toLowerCase();
    if (path.indexOf('/pages/') !== -1 || path.indexOf('\\pages\\') !== -1) {
      return '../';
    }
    return '';
  }

  function resolvePartialUrl(url){
    if (ALLOWED_PARTIALS.indexOf(url) === -1) {
      console.warn('Security Warning: Partial URL not allowed:', url);
      return null;
    }
    var prefix = getDepthPrefix();
    return prefix + url;
  }

  function loadPartial(selector, url){
    var el = document.querySelector(selector);
    if (!el) return;
    var resolvedUrl = resolvePartialUrl(url);
    if (!resolvedUrl) return;

    fetch(resolvedUrl).then(function(res){
      if (res.ok) return res.text();
      throw new Error('Failed to load partial: ' + url);
    }).then(function(html){
      // Parse HTML safely
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      // Strip any accidental script elements for security
      var scripts = doc.querySelectorAll('script');
      scripts.forEach(function(s) { s.remove(); });

      // Insert head elements (styles/fonts) along with body structure
      el.innerHTML = doc.head.innerHTML + doc.body.innerHTML;
      var prefix = getDepthPrefix();
      if (prefix) {
        // Adjust links and image paths inside the partial for subfolder pages
        el.querySelectorAll('img[src], a[href]').forEach(function(node){
          var attr = node.tagName === 'IMG' ? 'src' : 'href';
          var val = node.getAttribute(attr);
          if (val && !val.startsWith('http') && !val.startsWith('#') && !val.startsWith('mailto:') && !val.startsWith('tel:')) {
            if (val.startsWith('/')) {
              node.setAttribute(attr, prefix + val.substring(1));
            }
          }
        });
      }
      // Dispatch custom event when partials are loaded
      document.dispatchEvent(new CustomEvent('partialLoaded', { detail: { selector: selector } }));
    }).catch(function(err){
      console.error('Error loading partial:', err);
    });
  }

  loadPartial('#site-header', 'partials/header.html');
  loadPartial('#site-footer', 'partials/footer.html');
});
