// assets/js/main.js
import { LazyLoader } from './modules/lazy-loading.js';
import { ThemeSwitch } from './modules/theme-switcher.js';

// 性能监控
const performanceObserver = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime);
    }
  });
});

performanceObserver.observe({ entryTypes: ['largest-contentful-paint'] });

// 初始化模块
document.addEventListener('DOMContentLoaded', () => {
  new LazyLoader();
  new ThemeSwitch();
  
  // 预连接到外部域名
  const preconnectLinks = [
    'https://fonts.googleapis.com',
    'https://www.google-analytics.com'
  ];
  
  preconnectLinks.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  });
});