(function() {
  function initCustomScrollbar() {
    const scrollContainer = document.getElementById('scroll-container');
    const thumb = document.getElementById('custom-scrollbar-thumb');
    const scrollbar = document.getElementById('custom-scrollbar');

    if (!scrollContainer || !thumb || !scrollbar) {
      setTimeout(initCustomScrollbar, 50);
      return;
    }

    thumb.style.pointerEvents = 'auto';

  function updateThumb() {
    const scrollTop = scrollContainer.scrollTop;
    const pageHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const trackHeight = scrollbar.clientHeight;
    const thumbHeight = Math.max((scrollContainer.clientHeight / scrollContainer.scrollHeight) * trackHeight, 30);
    thumb.style.height = thumbHeight + 'px';
    thumb.style.top = (scrollTop / pageHeight) * (trackHeight - thumbHeight) + 'px';

    if (window.ScrollTrigger) {
      ScrollTrigger.update();
  }
}

    scrollContainer.addEventListener('scroll', updateThumb);
    scrollContainer.addEventListener('wheel', updateThumb, { passive: true });
    window.addEventListener('resize', updateThumb);
    updateThumb();

    // Dragging
    let isDragging = false;
    let startY = 0;
    let startTop = 0;

    thumb.addEventListener('mousedown', e => {
      isDragging = true;
      startY = e.clientY;
      startTop = parseFloat(thumb.style.top) || 0;
      document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const delta = e.clientY - startY;
      const trackHeight = scrollbar.clientHeight;
      const thumbHeight = thumb.clientHeight;
      const pageHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

      let newTop = startTop + delta;
      newTop = Math.max(0, Math.min(newTop, trackHeight - thumbHeight));

      thumb.style.top = newTop + 'px';
      scrollContainer.scrollTop = (newTop / (trackHeight - thumbHeight)) * pageHeight;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      document.body.style.userSelect = '';
    });

    // Keyboard support
    thumb.addEventListener('keydown', e => {
      const step = 40;
      switch (e.key) {
        case 'ArrowDown':
          scrollContainer.scrollBy({ top: step, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'ArrowUp':
          scrollContainer.scrollBy({ top: -step, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'PageDown':
          scrollContainer.scrollBy({ top: scrollContainer.clientHeight, behavior: 'smooth' });
          e.preventDefault();
          break;
        case 'PageUp':
          scrollContainer.scrollBy({ top: -scrollContainer.clientHeight, behavior: 'smooth' });
          e.preventDefault();
          break;
      }
    });

    // Click on track
    scrollbar.addEventListener('click', e => {
      if (e.target === thumb) return;

      const rect = scrollbar.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const trackHeight = scrollbar.clientHeight;
      const thumbHeight = thumb.clientHeight;
      const pageHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const newScroll = ((clickY - thumbHeight / 2) / (trackHeight - thumbHeight)) * pageHeight;

      scrollContainer.scrollTo({ top: newScroll, behavior: 'smooth' });
    });

    // Observe page changes
    const observer = new MutationObserver(updateThumb);
    observer.observe(scrollContainer, { childList: true, subtree: true, attributes: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCustomScrollbar);
  } else {
    initCustomScrollbar();
  }
})();