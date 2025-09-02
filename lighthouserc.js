// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:1313'],
      startServerCommand: 'hugo server --port 1313',
      startServerReadyPattern: 'Web Server is available',
      startServerReadyTimeout: 20000
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:pwa': ['warn', { minScore: 0.6 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};