// ============================================================
// FIX: Chrome on iOS dynamically changes 100vh
// ============================================================
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();
window.addEventListener('resize', setVH);

// ============================================================
// VOLUNTEER MODALS — using jQuery (already loaded by Bootstrap)
// ============================================================
$(document).ready(function() {

  // ✅ Open modal when volunteer icon clicked
  $('.modal-trigger').on('click', function() {
    var modalId = $(this).data('modal');
    $('#' + modalId).fadeIn(200);
    $('body').css('overflow', 'hidden');
  });

  // ✅ Close modal when X clicked
  $('.modal-close').on('click', function() {
    var modalId = $(this).data('modal');
    $('#' + modalId).fadeOut(200);
    $('body').css('overflow', '');
  });

  // ✅ Close modal when clicking dark overlay
  $('.custom-modal').on('click', function(e) {
    if ($(e.target).hasClass('custom-modal')) {
      $(this).fadeOut(200);
      $('body').css('overflow', '');
    }
  });

  // ✅ Close modal on Escape key
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      $('.custom-modal').fadeOut(200);
      $('body').css('overflow', '');
    }
  });

});
