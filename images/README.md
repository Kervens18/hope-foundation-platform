# Images Directory

This folder contains all images used in the FIRST AID INTERNATIONAL, INC. platform.

## Blog Images

Add your blog images here with the following naming convention:

- `blog-1.jpg` - First blog post image
- `blog-2.jpg` - Second blog post image  
- `blog-3.jpg` - Third blog post image

### Image Requirements

- **Format**: JPG, PNG, WebP
- **Dimensions**: Minimum 300x220px (aspect ratio 16:9 recommended)
- **File Size**: Optimized for web (< 500KB per image)
- **Quality**: High resolution for desktop and mobile

## Project Images

When adding project images, use:

- `project-1.jpg` - Water project
- `project-2.jpg` - Education project
- `project-3.jpg` - Health project
- etc.

## How to Add Images

1. Place your image files in this directory
2. Update the `blogPosts` array in `js/config.js` with the image path
3. The platform will automatically display the image
4. If image fails to load, it shows the emoji fallback

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress images
- Use JPG for photos, PNG for graphics
- Convert to WebP for better compression (with JPG fallback)
- Keep file sizes under 200KB for optimal performance

## Example

```javascript
// In js/config.js
const blogPosts = [
  {
    title: 'Your Blog Title',
    image: 'images/blog-1.jpg',  // Add this line
    emoji: '📸',
    date: 'Il y a 2 jours',
    readTime: '5 min de lecture',
    excerpt: 'Your excerpt...',
    background: 'linear-gradient(...)'
  }
];
```

## Current Structure

```
images/
├── README.md           (this file)
├── blog-1.jpg         (add your images here)
├── blog-2.jpg
├── blog-3.jpg
└── ...
```
