/* FAQ accordion logic */
(function () {
  'use strict';

  document.querySelectorAll('.faq-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Toggle current
      btn.setAttribute('aria-expanded', !isOpen);
      answer.classList.toggle('open', !isOpen);
    });
  });
})();
