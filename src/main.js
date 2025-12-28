document.addEventListener('click', (event) => {
  const toggleButton = event.target.closest('.field__button');
  if (!toggleButton) return;

  const field = toggleButton.closest('.field');
  if (!field) return;

  const input = field.querySelector('.field__input');
  if (!input) return;

  const isPassword = input.type === 'password';

  input.type = isPassword ? 'text' : 'password';
  toggleButton.classList.toggle('is-hide', isPassword);
});
