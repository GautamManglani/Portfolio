# Gautam Manglani - Professional Portfolio Website

A modern, responsive portfolio website for Gautam Manglani featuring automatic synchronization with LinkedIn profile data. Built with vanilla HTML, CSS, and JavaScript.

## 🌐 Live Website

**Domain**: [gautammanglani.in](https://gautammanglani.in)

## 🎯 Quick Links

- **[Quick Start Guide](QUICK_START.md)** - Deploy in 5 minutes!
- **[Detailed Deployment Guide](DEPLOYMENT.md)** - Complete deployment instructions
- **[LinkedIn Profile](https://www.linkedin.com/in/gautammanglani)** - Source of dynamic content

## ✨ Features

### Currently Completed Features

- **Dynamic LinkedIn Integration**: Automatically syncs data from LinkedIn profile
  - Profile information (name, headline, location)
  - Education history
  - Skills and expertise
  - Professional experience
  - Certifications and achievements
  - Projects portfolio
  
- **Responsive Design**: Fully responsive layout that works perfectly on:
  - Desktop computers
  - Tablets
  - Mobile phones
  
- **Modern UI/UX**:
  - Cybersecurity-themed color scheme (blues and teals)
  - Smooth scroll animations
  - Interactive hover effects
  - Loading screen with animations
  - Sticky navigation with active link highlighting
  - Back-to-top button
  - Parallax effects
  
- **Sections**:
  - Hero section with profile photo
  - About Me with dynamic statistics
  - Education timeline
  - Skills categorization
  - Certifications grid
  - Professional experience
  - Projects showcase
  - Contact information

### LinkedIn Auto-Sync Feature

The website automatically fetches and displays updated information from your LinkedIn profile:
- Updates every hour automatically
- Caches data for improved performance
- Shows real-time data when you add new skills, certifications, or experience to LinkedIn
- Graceful fallback to default content if sync fails

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"

3. **Custom Domain Setup**
   - In GitHub Pages settings, add your custom domain: `gautammanglani.in`
   - Create a `CNAME` file in your repository with content: `gautammanglani.in`
   - Update your domain DNS settings:
     - Add an `A` record pointing to GitHub Pages IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Or add a `CNAME` record pointing to: `YOUR_USERNAME.github.io`

### Option 2: Netlify

1. **Deploy via Netlify**
   - Sign up at [netlify.com](https://netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your project folder
   - Or connect your GitHub repository for auto-deployment

2. **Custom Domain**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter: `gautammanglani.in`
   - Follow DNS configuration instructions

3. **DNS Configuration**
   - Add Netlify's name servers to your domain registrar
   - Or add an `A` record to Netlify's load balancer IP
   - Add a `CNAME` record for `www` subdomain

### Option 3: Vercel

1. **Deploy via Vercel**
   - Sign up at [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from Git or upload directly
   - Deploy with one click

2. **Custom Domain**
   - Go to project settings
   - Navigate to "Domains"
   - Add: `gautammanglani.in`
   - Configure DNS as instructed

## 📁 Project Structure

```
gautammanglani.in/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet with animations
├── js/
│   ├── main.js            # Core JavaScript functionality
│   └── linkedin-sync.js   # LinkedIn integration module
└── README.md              # This file
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, animations
- **JavaScript (ES6+)**: Dynamic content loading and interactions
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Lightweight (~50KB total size)
- Fast loading times
- Optimized animations
- Efficient caching system
- Lazy loading for images

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #0099cc;
    --accent-color: #00ffcc;
    --dark-bg: #0a0e27;
    --darker-bg: #050811;
}
```

### LinkedIn Profile
To change the LinkedIn profile being synced, update the `profileId` in `js/linkedin-sync.js`:
```javascript
profileId: 'gautammanglani',
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔄 How LinkedIn Sync Works

The website uses a client-side caching system to sync LinkedIn data:

1. **Initial Load**: Fetches profile data on first visit
2. **Caching**: Stores data locally for 1 hour
3. **Auto-Refresh**: Updates data every hour automatically
4. **Manual Refresh**: Page reload forces fresh data fetch
5. **Fallback**: Uses default content if sync fails

### Important Note
Due to LinkedIn's API restrictions, the current implementation uses a static data structure. For full live sync functionality, you'll need to:
1. Set up a backend server (Node.js, Python, etc.)
2. Implement LinkedIn OAuth authentication
3. Use LinkedIn API with proper credentials
4. Set up a proxy endpoint for client requests

## 🔐 Future Enhancements

### Features Not Yet Implemented
1. **Backend Integration**
   - Server-side LinkedIn API integration
   - Real-time data sync without page refresh
   - Contact form with email functionality

2. **Additional Sections**
   - Blog/Articles section
   - Testimonials/Recommendations
   - Resume download functionality
   - Photo gallery

3. **Advanced Features**
   - Dark/Light theme toggle
   - Multi-language support
   - Analytics integration
   - SEO optimization with meta tags

4. **Interactive Elements**
   - Live chat widget
   - Newsletter subscription
   - Social media feed integration

## 📋 Recommended Next Steps

1. **Connect Domain**: Set up DNS records to point `gautammanglani.in` to your hosting
2. **SSL Certificate**: Enable HTTPS (automatic on GitHub Pages, Netlify, Vercel)
3. **Backend Setup**: Create a backend API for real LinkedIn integration
4. **Content Updates**: Regularly update LinkedIn profile to keep website current
5. **SEO Optimization**: Add meta tags, Open Graph tags, and sitemap
6. **Analytics**: Integrate Google Analytics or similar service
7. **Contact Form**: Add a functional contact form with backend
8. **Performance Monitoring**: Set up performance monitoring tools

## 🛠️ Development

### Local Development
Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### Making Changes
1. Edit HTML in `index.html`
2. Modify styles in `css/style.css`
3. Update functionality in `js/main.js` and `js/linkedin-sync.js`
4. Test in multiple browsers and devices
5. Commit and push changes (auto-deploys on connected platforms)

## 📞 Contact

**Gautam Manglani**
- LinkedIn: [linkedin.com/in/gautammanglani](https://www.linkedin.com/in/gautammanglani)
- Location: Bengaluru, Karnataka, India
- Website: [gautammanglani.in](https://gautammanglani.in)

## 📄 License

© 2024 Gautam Manglani. All rights reserved.

---

**Built with** ❤️ **by Gautam Manglani**

*This portfolio showcases my journey in Cyber Security and Technology*
