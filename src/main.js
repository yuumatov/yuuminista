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

// Select компонент
document.addEventListener('click', (event) => {
  const select = event.target.closest('.select');
  const trigger = event.target.closest('.select__trigger');
  const option = event.target.closest('.select__option');
  
  // Если клик по опции
  if (option) {
    const selectContainer = option.closest('.select');
    if (!selectContainer) return;
    
    const valueElement = selectContainer.querySelector('.select__value');
    const hiddenInput = selectContainer.querySelector('.select__input');
    const dropdown = selectContainer.querySelector('.select__dropdown');
    const arrow = selectContainer.querySelector('.select__arrow');
    
    // Получаем значение и текст опции
    const value = option.getAttribute('data-value');
    const label = option.textContent.trim();

    // Сбрасываем активный класс со всех опций внутри этого select
    const allOptions = selectContainer.querySelectorAll('.select__option');
    allOptions.forEach((opt) => {
      opt.classList.remove('is-active');
    });

    // Добавляем активный класс текущей опции
    option.classList.add('is-active');
    
    // Обновляем отображаемое значение
    if (valueElement) {
      valueElement.textContent = label;
    }

    // Добавляем класс, что выбран какой-то вариант
    selectContainer.classList.add('is-selected');
    
    // Записываем value в скрытый input
    if (hiddenInput) {
      hiddenInput.value = value;
    }
    
    // Закрываем dropdown
    selectContainer.classList.remove('is-open');
    if (arrow) {
      arrow.style.transform = 'rotate(0deg)';
    }
    
    return;
  }
  
  // Если клик по триггеру
  if (trigger) {
    const selectContainer = trigger.closest('.select');
    if (!selectContainer) return;
    
    const dropdown = selectContainer.querySelector('.select__dropdown');
    const arrow = selectContainer.querySelector('.select__arrow');
    
    // Переключаем состояние
    const isOpen = selectContainer.classList.toggle('is-open');
    
    // Поворачиваем стрелку
    if (arrow) {
      arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      arrow.style.transition = 'transform 0.3s ease';
    }
    
    return;
  }
  
  // Если клик вне select - закрываем все открытые select
  const allSelects = document.querySelectorAll('.select.is-open');
  allSelects.forEach((selectContainer) => {
    selectContainer.classList.remove('is-open');
    const arrow = selectContainer.querySelector('.select__arrow');
    if (arrow) {
      arrow.style.transform = 'rotate(0deg)';
    }
  });
});