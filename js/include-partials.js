// Load HTML partials (header/footer) into placeholders
document.addEventListener('DOMContentLoaded', function(){
  function getDepthPrefix() {
    var path = window.location.pathname.replace(/\/$/, '');
    var segments = path.split('/').filter(Boolean);
    // If inside a subfolder like /pages/
    var isSubdir = segments.length >= 2 && segments[segments.length - 2] === 'pages';
    return isSubdir ? '../' : '';
  }

  function resolvePartialUrl(url){
    if(url.startsWith('http')) return url;
    var prefix = getDepthPrefix();
    return prefix + url;
  }

  function loadPartial(selector, url){
    var el = document.querySelector(selector);
    if(!el) return;
    fetch(resolvePartialUrl(url)).then(function(res){
      if(res.ok) return res.text();
      throw new Error('Failed to load ' + url);
    }).then(function(html){
      el.innerHTML = html;
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
      console.error(err);
    });
  }

  loadPartial('#site-header','partials/header.html');
  loadPartial('#site-footer','partials/footer.html');
});
