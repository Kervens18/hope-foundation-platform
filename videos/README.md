# Videos Directory

This folder contains all video content used in the FIRST AID INTERNATIONAL, INC. platform.

## Blog Videos

Add your blog videos here with the following naming convention:

- `education.mp4` - Education project video
- `testimonial.mp4` - Testimonial video
- `water-project.mp4` - Water project video
- etc.

### Video Requirements

- **Format**: MP4 (H.264), WebM, or OGG
- **Resolution**: 1280x720px minimum (16:9 aspect ratio)
- **File Size**: Optimized for web (< 50MB per video)
- **Duration**: 30 seconds to 5 minutes recommended
- **Frame Rate**: 24-30 fps

## How to Add Videos to Blog

1. Place your video file in this directory
2. Update the `blogPosts` array in `js/config.js`:

```javascript
const blogPosts = [
  {
    title: 'Your Title',
    image: 'images/blog-1.jpg',        // Poster image (shown before play)
    video: 'videos/your-video.mp4',    // Add this line
    emoji: '📸',
    date: 'Il y a 2 jours',
    readTime: '5 min de lecture',
    excerpt: 'Your excerpt...',
    background: 'linear-gradient(...)'
  }
];
```

3. The video will automatically:
   - Display with a play button overlay
   - Show the poster image before clicking
   - Be fully responsive on mobile/desktop
   - Display "🎬 Avec vidéo" badge on the card

## Video Compression Tips

### Using FFmpeg:

```bash
# Compress video maintaining quality
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k output.mp4

# Reduce resolution for mobile
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 23 output.mp4

# Create WebM for better compression
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 0 -crf 30 output.webm
```

### Using Online Tools:
- CloudConvert.com
- Handbrake (free desktop app)
- MediaConverter.com

## Supported Formats

- ✓ MP4 (H.264) - Best browser support
- ✓ WebM (VP9) - Better compression
- ✓ OGG (Theora) - Firefox support

## Features

✅ **Automatic Play Button** - Shows ▶️ icon on hover
✅ **Poster Image** - Displays before video plays
✅ **Responsive** - Works on all screen sizes
✅ **Badge** - Shows "🎬 Avec vidéo" indicator
✅ **Native HTML5** - No external player needed

## Current Structure

```
videos/
├── README.md              (this file)
├── education.mp4         (add your videos here)
├── testimonial.mp4
└── ...
```

## Example Blog Post with Video

```javascript
{
  title: 'Éducation au Cambodge',
  image: 'images/blog-2.jpg',           // Thumbnail/poster
  video: 'videos/education.mp4',        // Video file
  emoji: '🎓',
  date: 'Il y a 5 jours',
  readTime: '8 min de lecture',
  excerpt: 'Regardez comment nous transformons l\'éducation...',
  background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)'
}
```

## Troubleshooting

**Video not playing?**
- Check file format (MP4 is most compatible)
- Verify file path is correct
- Ensure video is properly encoded

**Slow to load?**
- Compress video to reduce file size
- Use lower resolution if possible
- Optimize with FFmpeg

**No poster image?**
- Make sure `image` field is set in blogPosts
- Use JPG format for best compatibility
