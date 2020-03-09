Drupal.behaviors.tabs = {
  attach(context) {
    const mouseOverContent = context.querySelector('.hero-custom');
    const maskSize = 200;
    const maskedContent = context.querySelector('.heaven');

    mouseOverContent.classList.add('foo');

    mouseOverContent.addEventListener('mouseover', () => {
      maskedContent.classList.add('has-mask');
    });

    mouseOverContent.addEventListener('mousemove', e => {
      maskedContent.style.setProperty('--x', `${e.clientX - maskSize}px`);
      maskedContent.style.setProperty('--y', `${e.clientY - maskSize * 1.5}px`);
    });

    mouseOverContent.addEventListener('mouseleave', () => {
      maskedContent.classList.remove('has-mask');
    });
  },
};
