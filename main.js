// Минимальная логика: открытие и закрытие модального окна
document.querySelectorAll('[data-open]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.getElementById(btn.dataset.open).hidden = false;
  });
});
document.querySelectorAll('.modal').forEach(function (modal) {
  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.hasAttribute('data-close')) modal.hidden = true;
  });
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') document.querySelectorAll('.modal').forEach(function (m) { m.hidden = true; });
});
