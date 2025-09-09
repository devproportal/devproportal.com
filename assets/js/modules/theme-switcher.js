// 模块化ES6写法（符合Hugo资源管道）
export class ThemeSwitcher {
  constructor() {
    this.themeButton = document.getElementById('theme-toggle'); // 精准匹配ID
    this.supportedThemes = ['light', 'dark'];
    this.defaultTheme = 'light'; // 与Hugo config默认一致
    this.init();
  }

  init() {
    // 1. 优先级：用户选择 > 手动切换 > 系统主题
    const userTheme = localStorage.getItem('preferred-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = userTheme || this.defaultTheme;

    // 2. 初始化主题（带过渡动画）
    this.applyTheme(initialTheme, true);
    
    // 3. 绑定按钮事件（防重复绑定）
    if (this.themeButton && !this.themeButton.dataset.bound) {
      this.themeButton.addEventListener('click', this.toggleTheme.bind(this));
      this.themeButton.dataset.bound = true;
    }

    // 4. 监听系统主题变化（仅当用户未手动选择时）
    if (!userTheme) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.applyTheme(e.matches ? 'dark' : 'light');
      });
    }
  }

  applyTheme(theme, initial = false) {
    const html = document.documentElement;
    const isDark = theme === 'dark';

    // 核心：强制覆盖浏览器默认样式（解决Chrome强制暗黑）
    html.style.colorScheme = theme; // 优先级高于系统设置
    html.classList.toggle('dark', isDark);

    // 过渡动画（现代浏览器View Transitions API）
    if ('viewTransitions' in document) {
      document.startViewTransition(() => {
        html.dataset.theme = theme;
      });
    }

    // 持久化存储（仅记录手动切换）
    if (!initial) localStorage.setItem('preferred-theme', theme);

    // 日志与调试（保留在生产环境需注释）
    console.debug(`[ThemeSwitch] 切换至 ${theme} 模式`, {
      userAgent: navigator.userAgent,
      colorScheme: html.style.colorScheme,
      classList: Array.from(html.classList)
    });

    // 触发Mermaid重绘（保留您的定制逻辑）
    if (window.renderMermaid) window.renderMermaid();
  }

  toggleTheme() {
    const current = localStorage.getItem('preferred-theme') || this.defaultTheme;
    const next = current === 'light' ? 'dark' : 'light';
    this.applyTheme(next);
  }
}

// 初始化（仅执行一次）
if (!window.themeSwitcher) {
  window.themeSwitcher = new ThemeSwitcher();
  console.log('[ThemeSwitch] 初始化完成', new Date().toISOString());
}