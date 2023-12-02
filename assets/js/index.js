import { animate, stagger } from 'motion';
import SplitType from 'split-type';

document.addEventListener('DOMContentLoaded', () => {
  const heading = new SplitType('#home_title');
  const para = new SplitType('#home_para');
  const footer = document.getElementById('footer');
  const heroElements = [...heading.words, ...para.lines, footer];

  animate(
    heroElements,
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
