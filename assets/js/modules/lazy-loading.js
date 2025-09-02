// assets/js/modules/lazy-loading.js
export class LazyLoader {
  constructor() {
    this.images = document.querySelectorAll('img[loading="lazy"]');
    this.imageObserver = null;
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            this.imageObserver.unobserve(img);
          }
        });
      });

      this.images.forEach(img => this.imageObserver.observe(img));
    }
  }
}