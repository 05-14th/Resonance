document.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.transform = 'translateZ(-1px) scale(2) translateY(' + scrollTop * 0.5 + 'px)';
  });
  