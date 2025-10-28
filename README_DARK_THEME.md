# Rishabh Agrawal - Futuristic Dark Portfolio

A stunning dark-themed, futuristic portfolio website inspired by Wix Template #3694, featuring neon glows, animated video background, and cyberpunk aesthetics.

## 🌟 New Futuristic Features

- **Dark Cyberpunk Theme**: Deep space blacks with neon cyan and purple accents
- **Animated Video Background**: Loop-playing video in hero section with gradient overlay
- **Real-Time Digital Clock**: Live clock display in futuristic Orbitron font
- **Neon Glow Effects**: All text and buttons have soft cyan/purple glows
- **Smooth Neon Hover Effects**: Interactive glowing animations on navigation and buttons
- **Futuristic Typography**: Orbitron for headings, Poppins for body text
- **Fully Responsive**: Dark theme works beautifully on all devices

## 🎨 Color Scheme

```css
Primary (Neon Cyan):    #00f0ff
Secondary (Purple):     #7000ff
Accent (Magenta):       #ff00ff
Dark Background:        #0a0a0f
Darker Background:      #050508
Card Background:        rgba(15, 15, 25, 0.8)
Text White:            #ffffff
Text Gray:             #a0a0b0
```

## 📁 Updated File Structure

```
portfolio/
│
├── index.html          # Main HTML with video background
├── style.css           # Dark futuristic styling
├── script.js           # Interactive effects + digital clock
├── README_DARK_THEME.md # This file
└── video/             # Create this folder
    └── background.mp4 # Your looping video (see below)
```

## 🎥 Setting Up Video Background

### Step 1: Create Video Folder
```bash
mkdir video
```

### Step 2: Add Your Video
Place your video file as `video/background.mp4`

### Recommended Video Specifications:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 10-30 seconds (will loop)
- **Style**: Technology, particles, digital rain, circuits, space, abstract
- **File Size**: Under 5MB (compress if larger)

### Where to Find Free Videos:
1. **Pexels Videos** - https://www.pexels.com/videos/
   - Search: "technology", "digital", "particles", "circuit board"
2. **Pixabay** - https://pixabay.com/videos/
   - Search: "futuristic", "abstract", "digital background"
3. **Coverr** - https://coverr.co/
   - Search: "technology", "abstract"

### Step 3: Animated Background (Built-in!)
The portfolio now includes a **built-in animated gradient and particle background** that looks amazing!

**Current Status:** Your site has a stunning animated background right now:
- ✨ Shifting color gradients (cyan → purple → magenta)
- ✨ Floating particle effects
- ✨ Smooth 15-second animation loop

**Optional:** You can still add a video for even more impact:
- Video will play over the animated background
- Creates layered depth effect
- Video is completely optional - current background looks great!

### Optional: Use a Different Video Path
Edit line 40 in `index.html`:
```html
<source src="your-path/your-video.mp4" type="video/mp4">
```

## ⏰ Digital Clock Feature

The hero section displays a real-time clock that updates every second:
- Format: HH:MM:SS (24-hour format)
- Font: Orbitron with neon cyan glow
- Automatically starts on page load

To customize the clock format, edit `script.js` lines 254-265.

## 🎨 Customizing the Theme

### Change Neon Colors
Edit CSS variables in `style.css` (lines 2-23):

```css
:root {
    --primary-color: #00f0ff;      /* Neon cyan - change to your color */
    --secondary-color: #7000ff;    /* Purple - change to your color */
    --accent-color: #ff00ff;       /* Magenta - change to your color */
}
```

### Adjust Glow Intensity
Modify these variables:
```css
--glow: 0 0 20px rgba(0, 240, 255, 0.6);              /* Soft glow */
--glow-strong: 0 0 30px rgba(0, 240, 255, 0.8), 
               0 0 60px rgba(112, 0, 255, 0.5);       /* Strong glow */
```

### Change Video Opacity
In `style.css` line 174:
```css
.hero-video {
    opacity: 0.3;  /* Change between 0.1 (subtle) to 0.5 (prominent) */
}
```

## 🚀 Quick Start

### 1. Open Portfolio
Simply open `index.html` in your browser

### 2. Add Your Content
Update these in `index.html`:
- Line 417: Your email address
- Lines 429-440: Your social media links
- Replace project links and descriptions

### 3. Add Your Photos
Create `images` folder and replace placeholders with:
```html
<img src="images/profile.jpg" alt="Rishabh Agrawal">
```

### 4. Add Video Background
- Create `video` folder
- Add `background.mp4`
- Refresh page to see it

## 🎯 What Changed from Original

### Visual Changes
✅ Dark space-themed backgrounds (#0a0a0f, #050508)
✅ Neon cyan (#00f0ff) replacing blue
✅ Purple accents (#7000ff) for gradients
✅ White text with cyan glows
✅ All cards have semi-transparent dark backgrounds
✅ Neon borders on all interactive elements

### New Features
✅ Video background in hero section
✅ Real-time digital clock
✅ Enhanced glow effects on hover
✅ Futuristic Orbitron font for headings
✅ Cyberpunk-style animations

### Maintained Features
✅ Same layout structure
✅ Same navigation style
✅ Same smooth scroll animations
✅ Same responsive design
✅ Same section order and flow

## 📱 Responsive Design

The dark theme adapts perfectly to all screen sizes:
- **Desktop**: Full video background, side-by-side layouts
- **Tablet**: Stacked sections, adjusted font sizes
- **Mobile**: Hamburger menu, optimized spacing, reduced glows

## 🌐 Deployment

### Option 1: GitHub Pages
```bash
git init
git add .
git commit -m "Dark futuristic portfolio"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```
Enable Pages in Settings > Pages

### Option 2: Netlify
1. Drag & drop the `portfolio` folder
2. Automatic HTTPS and deployment
3. Video will work perfectly

### Option 3: Vercel
1. Import repository
2. Deploy instantly
3. Custom domain support

## ⚡ Performance Tips

### Optimize Video
```bash
# Use ffmpeg to compress (optional)
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset fast background.mp4
```

### Lazy Load Video
Add `preload="none"` to video tag:
```html
<video preload="none" autoplay muted loop playsinline>
```

### Reduce Glow on Mobile
Add to CSS media query:
```css
@media (max-width: 600px) {
    .hero-title {
        text-shadow: none; /* Remove glow on small screens */
    }
}
```

## 🎨 Recommended Video Themes

Perfect video backgrounds for this portfolio:
1. **Digital Particles** - Floating geometric shapes
2. **Circuit Board** - Electronic circuit animations
3. **Matrix Rain** - Falling code/numbers
4. **Space/Stars** - Slowly moving starfield
5. **Abstract Waves** - Flowing neon lines
6. **Holographic Grid** - 3D wireframe animations

## 🛠️ Technical Stack

- **HTML5**: Semantic markup + video element
- **CSS3**: Custom properties, gradients, animations, glows
- **JavaScript (ES6+)**: Vanilla JS for clock and interactions
- **Fonts**: Orbitron (display), Poppins (body)
- **Icons**: Font Awesome 6 with neon styling

## 🎯 Customization Checklist

- [ ] Add your video to `video/background.mp4`
- [ ] Update email and social links
- [ ] Add your photos
- [ ] Customize neon colors if desired
- [ ] Adjust video opacity
- [ ] Test on mobile devices
- [ ] Deploy to hosting

## 💡 Tips for Best Results

1. **Video Selection**: Choose subtle, slow-moving videos (avoid busy/fast videos)
2. **Keep Opacity Low**: 0.2-0.3 works best for readability
3. **Compress Video**: Keep under 5MB for fast loading
4. **Test Glows**: View in dark room to see neon effects properly
5. **Mobile Testing**: Ensure text is readable on small screens

## 🔧 Troubleshooting

### Video Not Playing?
- Check if `video` folder exists
- Verify file is named `background.mp4`
- Check browser console for errors
- Gradient fallback will show automatically

### Clock Not Updating?
- Open browser console (F12)
- Check for JavaScript errors
- Refresh page

### Text Hard to Read?
- Increase text-shadow glow
- Reduce video opacity
- Increase overlay gradient opacity

## 📧 Contact Form Setup

Same as original - uses `mailto:` link. Update:
- `index.html` line 417: `your.email@gmail.com`
- `script.js` line 121: `your.email@gmail.com`

For better contact forms: FormSubmit, EmailJS, or Formspree

## 🎉 Final Touches

1. **Favicon**: Add a neon-themed favicon
2. **Meta Tags**: Update OG image for social sharing
3. **Analytics**: Add Google Analytics if needed
4. **Custom Domain**: Connect your own domain
5. **HTTPS**: Ensure SSL certificate (automatic with Netlify/Vercel)

---

## 🌟 Dark Theme Features Summary

| Feature | Status |
|---------|--------|
| Dark Backgrounds | ✅ |
| Neon Glow Effects | ✅ |
| Video Background | ✅ |
| Digital Clock | ✅ |
| Futuristic Fonts | ✅ |
| Smooth Animations | ✅ |
| Responsive Design | ✅ |
| Neon Hover Effects | ✅ |
| Same Layout Flow | ✅ |

---

**Transform your web presence with this cyberpunk aesthetic! 🚀**

Made with ⚡ by Rishabh Agrawal
Theme: Futuristic Dark Mode
