# DevProPortal.com

Welcome to the DevProPortal website repository. This is the source code for our technical blog focused on enterprise Java development, microservices, and modern software architecture.

## 🚀 Tech Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Theme**: Custom enterprise-focused design
- **Languages**: Go templates, HTML, CSS, JavaScript
- **Deployment**: GitHub Pages with GitHub Actions
- **Performance Testing**: Lighthouse CI, Size Limit

## 🛠 Development Setup

1. Install Hugo (extended version recommended):
   \```bash
   # macOS
   brew install hugo
   
   # Windows (using Chocolatey)
   choco install hugo-extended
   
   # Other systems: https://gohugo.io/installation/
   \```

2. Clone the repository:
   \```bash
   git clone https://github.com/DevProPortal/devproportal.com.git
   cd devproportal.com
   \```

3. Install dependencies:
   \```bash
   npm install
   \```

4. Start the development server:
   \```bash
   npm run dev
   \```

5. Open your browser to http://localhost:1313

## 📝 Content Creation

- Posts are written in Markdown and stored in `content/posts/`
- Each post requires front matter with title, date, tags, and other metadata
- Images should be placed in `static/images/` and optimized for web
- Use `draft: true` in front matter for unpublished posts

## 🧪 Testing

We have several automated tests to ensure quality:

- `npm test` - Run all tests
- `npm run test:build` - Verify site builds correctly
- `npm run test:performance` - Check performance metrics
- `npm run lighthouse` - Run Lighthouse audit
- `npm run size-check` - Validate asset sizes

## 🚀 Deployment

The site is automatically deployed via GitHub Actions when changes are pushed to the main branch. The workflow is defined in `.github/workflows/deploy.yml`.

Manual deployment can be done with:
\```bash
npm run build
\```

This generates the static site in the `public/` directory.

## 📊 Performance Monitoring

We use Lighthouse CI to monitor performance metrics. Reports are generated during testing and can be viewed in `reports/`.

## 🔐 License

This project is proprietary and all rights are reserved. Unauthorized copying or distribution is prohibited.

## 👥 Contributing

As this is a private blog, contributions are currently limited to the DevProPortal team. If you're interested in contributing, please contact us through our website.