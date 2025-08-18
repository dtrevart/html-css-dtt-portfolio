document.querySelectorAll('.timeline_toggle_btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.disabled) return;
    button.disabled = true;

    const details = button.closest('.content').querySelector('.timeline_item_details');
    const isOpen = details.classList.contains('open');

    if (isOpen) {
      details.style.maxHeight = details.scrollHeight + 'px';
      requestAnimationFrame(() => {
        details.style.maxHeight = '0';
      });
      details.classList.remove('open');
      button.textContent = 'Show Details';

      details.addEventListener('transitionend', () => {
        button.disabled = false;
      }, { once: true });

    } else {
      details.style.maxHeight = details.scrollHeight + 'px';
      details.classList.add('open');
      button.textContent = 'Hide Details';

      details.addEventListener('transitionend', () => {
        details.style.maxHeight = 'none';
        button.disabled = false; 
      }, { once: true });
    }
  });
});