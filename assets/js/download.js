import { animate, stagger } from 'motion';

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.download_link');
  const footer = document.getElementById('footer');

  animate(
    links,
    {
      scale: [0, 1],
      opacity: [0, 1],
      delay: stagger(0.2),
    },
    {
      duration: 0.8,
    }
  );

  animate(
    footer,
    {
      y: [28, 0],
      opacity: [0, 1],
      delay: stagger(0.05),
    },
    {
      duration: 0.8,
    }
  );
});
