function initVkUser() {
  await window.vkBridge.send('VKWebAppInit');
  const vkUser = await window.vkBridge.send('VKWebAppGetUserInfo');

  vkUserId = vkUser?.id || null;

  console.log('vk-id:', vkUserId);
}

initVkUser()

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
