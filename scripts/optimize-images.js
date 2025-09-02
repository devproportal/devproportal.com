// scripts/optimize-images.js
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  console.log('🖼️ Starting image optimization...');
  
  // 优化并转换为 WebP
  await imagemin(['static/images/*.{jpg,jpeg,png}'], {
    destination: 'static/images/webp',
    plugins: [
      imageminWebp({
        quality: 85,
        method: 6
      })
    ]
  });

  // 优化原始 JPEG
  await imagemin(['static/images/*.{jpg,jpeg}'], {
    destination: 'static/images/optimized',
    plugins: [
      imageminMozjpeg({
        quality: 85,
        progressive: true
      })
    ]
  });

  // 优化原始 PNG
  await imagemin(['static/images/*.png'], {
    destination: 'static/images/optimized',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log('✅ Image optimization completed!');
}

optimizeImages().catch(console.error);