# Rishabh Agrawal - Portfolio Website

A modern, responsive portfolio website inspired by Wix Template #3694, featuring smooth animations, clean design, and professional layout.

## 🌟 Features

- **Modern Design**: Wix-inspired aesthetic with professional color scheme
- **Smooth Animations**: Fade-in effects, hover animations, and scroll-triggered animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scroll Navigation**: Seamless scrolling between sections
- **Interactive Elements**: Hover effects on buttons, cards, and links
- **Skills Progress Bars**: Animated skill level indicators
- **Project Showcase**: Beautiful project cards with overlay effects
- **Blog Section**: Ready-to-use blog layout with placeholder articles
- **Contact Form**: Functional contact form with email integration
- **Mobile Menu**: Hamburger menu for mobile navigation

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
├── README.md           # Documentation (this file)
└── images/            # Folder for your images (create this)
    ├── profile.jpg    # Your profile photo
    ├── about.jpg      # About section photo
    └── projects/      # Project screenshots
```

## 🚀 Getting Started

### 1. Setup
- Simply open `index.html` in your web browser
- No build process or dependencies required
- All fonts and icons are loaded from CDN

### 2. Add Your Photos
Replace the placeholder images:
1. Create an `images` folder in the same directory
2. Add your profile photo
3. Update the image placeholders in `index.html`

```html
<!-- Replace line 64-67 with: -->
<img src="images/profile.jpg" alt="Rishabh Agrawal">
```

### 3. Customize Content
Update the following in `index.html`:
- **Email**: Line 417 - Replace `your.email@gmail.com` with your actual Gmail
- **Social Links**: Lines 429-440 - Update with your GitHub, LinkedIn, etc.
- **Project Links**: Update project card links with your actual project URLs
- **Location**: Update "India" with your specific city if desired

### 4. Customize Colors
Edit the CSS variables in `style.css` (lines 2-18):
```css
:root {
    --primary-color: #0066ff;      /* Main brand color */
    --secondary-color: #00d4ff;    /* Accent color */
    --accent-color: #ff6b6b;       /* Highlight color */
}
```

## 📧 Contact Form Setup

The contact form currently uses a `mailto:` link. To set it up:

1. Replace `your.email@gmail.com` in:
   - `index.html` (line 417)
   - `script.js` (line 121)

### Alternative Email Solutions:
- **FormSubmit**: Free service - no backend needed
- **EmailJS**: Free tier available with good features
- **Formspree**: Simple form endpoint service
- **Netlify Forms**: If hosting on Netlify

## 🎨 Customization Guide

### Change Fonts
Update lines 8-10 in `index.html` with Google Fonts of your choice:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Modify Animations
All animations are in `style.css` starting at line 850:
- `fadeInUp` - Entry animations
- `float` - Hero image floating effect
- `scroll` - Scroll indicator animation

### Add More Sections
Copy any section structure and customize:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your portfolio files
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create account at netlify.com
2. Drag & drop your portfolio folder
3. Get instant HTTPS URL
4. Automatic deployments on updates

### Option 3: Vercel (Free)
1. Sign up at vercel.com
2. Import your repository
3. Deploy with one click
4. Custom domain support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images**: Compress images before uploading (use TinyPNG or ImageOptim)
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Minify Files**: Use online tools to minify CSS/JS for production
4. **Use WebP**: Convert images to WebP format for better compression

## 🎯 SEO Optimization

Add these meta tags to `<head>` in index.html:
```html
<meta name="description" content="Rishabh Agrawal - Front-End Web Designer and MCA Student portfolio">
<meta name="keywords" content="web developer, front-end developer, portfolio">
<meta name="author" content="Rishabh Agrawal">
<meta property="og:title" content="Rishabh Agrawal | Portfolio">
<meta property="og:description" content="Front-End Web Designer & MCA Student">
<meta property="og:image" content="images/og-image.jpg">
```

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Vanilla JS - no frameworks
- **Font Awesome 6**: Icon library
- **Google Fonts**: Poppins & Playfair Display

## 📝 To-Do List

- [ ] Add your actual photos
- [ ] Update email addresses
- [ ] Add social media links
- [ ] Upload project screenshots
- [ ] Write blog articles
- [ ] Add resume/CV download link
- [ ] Set up analytics (Google Analytics)
- [ ] Test on all devices
- [ ] Deploy to hosting service

## 💡 Tips for Success

1. **Keep it Updated**: Regularly add new projects and skills
2. **Write Blog Posts**: Share your learning journey
3. **Add Testimonials**: Include feedback from clients/professors
4. **Optimize Loading**: Keep file sizes small
5. **Test Everywhere**: Check on different devices and browsers

## 🤝 Credits

- **Design Inspiration**: Wix Template #3694
- **Icons**: Font Awesome
- **Fonts**: Google Fonts
- **Created by**: Rishabh Agrawal

## 📄 License

This portfolio template is free to use for personal projects. Feel free to customize it to your needs!

---

## 🆘 Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Ensure all files are in the same directory
3. Verify all paths are correct
4. Make sure you're using a modern browser

## 🎉 Final Steps

1. Replace all placeholder content with your information
2. Add your real photos and project images
3. Test the contact form
4. Check responsiveness on mobile devices
5. Deploy to your favorite hosting platform
6. Share your portfolio with the world!

---

**Good luck with your portfolio! 🚀**

Made with ❤️ by Rishabh Agrawal
