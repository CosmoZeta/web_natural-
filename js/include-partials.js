// Load HTML partials (header/footer) into placeholders
document.addEventListener('DOMContentLoaded', function(){
  function loadPartial(selector, url){
    var el = document.querySelector(selector);
    if(!el) return;
    fetch(url).then(function(res){
      if(res.ok) return res.text();
      throw new Error('Failed to load ' + url);
    }).then(function(html){
      el.innerHTML = html;
      // After loading header we may need to re-run some UI init
      if(selector === '#site-header'){
        // re-run any header-related setup if needed
      }
    }).catch(function(err){
      console.error(err);
    });
  }

  loadPartial('#site-header','/partials/header.html');
  loadPartial('#site-footer','/partials/footer.html');
});
