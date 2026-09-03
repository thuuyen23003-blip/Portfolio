document.addEventListener('DOMContentLoaded', function () {
  // Build the fullscreen overlay once
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<span class="lightbox-close">&times;</span><img alt="">';
  document.body.appendChild(overlay);
  var lbImg = overlay.querySelector('img');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    overlay.classList.add('active');
  }
  function closeLightbox() {
    overlay.classList.remove('active');
  }

  // Add a small "+" badge on every gallery image, and wire up the click
  document.querySelectorAll('.gallery figure').forEach(function (fig) {
    var img = fig.querySelector('img');
    if (!img) return;

    var badge = document.createElement('span');
    badge.className = 'zoom-badge';
    badge.textContent = '+';
    fig.appendChild(badge);

    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });

  overlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
