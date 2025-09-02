export class ThemeSwitch {
  constructor() {
    this.init();
  }

  init() {
    const theme = localStorage.getItem('theme') || 'auto';
    this.setTheme(theme);
    this.bindEvents();
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  bindEvents() {
    const switcher = document.querySelector('.theme-switcher');
    if (switcher) {
      switcher.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next);
      });
    }
  }
}