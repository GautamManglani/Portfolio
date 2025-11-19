# Deployment Guide for gautammanglani.in

This guide provides detailed step-by-step instructions for deploying your portfolio website to various hosting platforms and connecting your custom domain.

## 📋 Pre-Deployment Checklist

- [ ] All files are ready (index.html, CSS, JS)
- [ ] Domain name registered: `gautammanglani.in`
- [ ] Access to domain registrar's DNS settings
- [ ] GitHub account created (for GitHub Pages)
- [ ] Website tested locally

## 🚀 Deployment Options

---

## Option 1: GitHub Pages (Recommended - Free)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name: `gautammanglani-portfolio` (or any name)
4. Description: "Professional portfolio website"
5. Set to **Public**
6. Click "Create repository"

### Step 2: Upload Files to GitHub

**Option A: Using Git Command Line**
```bash
# Navigate to your project folder
cd /path/to/your/project

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/gautammanglani-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop**
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository
3. Select your project folder
4. Click "Publish repository"

**Option C: Upload Files via Browser**
1. On your repository page, click "uploading an existing file"
2. Drag and drop all your files
3. Commit changes

### Step 3: Enable GitHub Pages

1. Go to your repository
2. Click "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. Under "Source":
   - Select branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR_USERNAME.github.io/gautammanglani-portfolio/`

### Step 4: Connect Custom Domain

**A. DNS Configuration at Domain Registrar**

Go to your domain registrar (GoDaddy, Namecheap, etc.) and configure DNS:

**For Apex Domain (gautammanglani.in):**

Add these A records:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**B. Configure on GitHub Pages**

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `gautammanglani.in`
3. Click "Save"
4. Wait for DNS check (may take up to 24 hours)
5. Check "Enforce HTTPS" once available

### Step 5: Verify Deployment

1. Wait 10-30 minutes for DNS propagation
2. Visit: `https://gautammanglani.in`
3. Test on multiple devices

---

## Option 2: Netlify (Easy & Fast)

### Step 1: Sign Up

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up (can use GitHub account)

### Step 2: Deploy Site

**Method A: Drag & Drop**
1. Click "Add new site" → "Deploy manually"
2. Drag your project folder to the upload area
3. Wait for deployment (30 seconds)
4. Your site is live at: `random-name-123.netlify.app`

**Method B: Connect GitHub**
1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Authorize Netlify
4. Select your repository
5. Click "Deploy site"
6. Auto-deploys on every GitHub push!

### Step 3: Custom Domain

1. Go to site settings
2. Click "Domain management"
3. Click "Add custom domain"
4. Enter: `gautammanglani.in`
5. Click "Verify"

### Step 4: DNS Configuration

**Option A: Use Netlify DNS (Recommended)**
1. Netlify will show you nameservers like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
2. Go to your domain registrar
3. Replace nameservers with Netlify's nameservers
4. Save changes
5. Wait 2-24 hours for propagation

**Option B: Use External DNS**
Add these records at your registrar:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: YOUR_SITE_NAME.netlify.app
```

### Step 5: Enable HTTPS

1. Go to Domain settings → HTTPS
2. Click "Verify DNS configuration"
3. Click "Provision certificate"
4. HTTPS will be enabled automatically

---

## Option 3: Vercel

### Step 1: Sign Up

1. Go to [Vercel](https://vercel.com/)
2. Sign up with GitHub

### Step 2: Deploy

**Method A: Import from GitHub**
1. Click "Add New" → "Project"
2. Import your GitHub repository
3. Click "Deploy"
4. Live in 30 seconds!

**Method B: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd /path/to/project

# Deploy
vercel

# Follow prompts
```

### Step 3: Add Custom Domain

1. Go to project settings
2. Click "Domains"
3. Enter: `gautammanglani.in`
4. Click "Add"

### Step 4: Configure DNS

Add at your domain registrar:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 5: Wait & Verify

1. DNS propagation: 10 minutes - 24 hours
2. SSL certificate: Automatic
3. Visit: `https://gautammanglani.in`

---

## 🔧 DNS Configuration Details

### Common Domain Registrars

**GoDaddy:**
1. Login → My Products → Domain
2. Click DNS
3. Add/Edit records as specified above

**Namecheap:**
1. Domain List → Manage
2. Advanced DNS tab
3. Add/Edit records

**Google Domains:**
1. My Domains → Manage
2. DNS tab
3. Add/Edit records

**Cloudflare:**
1. Select domain
2. DNS tab
3. Add/Edit records

### DNS Record Types Explained

- **A Record**: Points domain to IP address
- **CNAME Record**: Points domain to another domain
- **TXT Record**: Used for verification
- **NS Record**: Nameserver records

---

## 📱 Post-Deployment Testing

### 1. Functionality Test
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Smooth scrolling functional
- [ ] LinkedIn sync working
- [ ] Mobile responsive
- [ ] All images load
- [ ] Links working

### 2. Performance Test
- [ ] Load time < 3 seconds
- [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test on [GTmetrix](https://gtmetrix.com/)

### 3. Cross-Browser Test
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Chrome
- [ ] Mobile Safari

### 4. SSL/HTTPS Test
- [ ] HTTPS working
- [ ] No mixed content warnings
- [ ] SSL certificate valid
- [ ] Test at [SSL Labs](https://www.ssllabs.com/ssltest/)

---

## 🔄 Updating Your Website

### GitHub Pages
```bash
# Make changes to files
git add .
git commit -m "Update description"
git push origin main
# Site updates automatically in 1-2 minutes
```

### Netlify
- **With GitHub**: Push to GitHub, auto-deploys
- **Manual**: Drag new files to Netlify dashboard

### Vercel
- Push to GitHub, auto-deploys

---

## 🐛 Troubleshooting

### Site Not Loading

**Check DNS Propagation:**
- Use [WhatsMyDNS](https://www.whatsmydns.net/)
- Enter: `gautammanglani.in`
- Wait if not propagated globally

**Clear Cache:**
```bash
# Clear browser cache
Ctrl + Shift + Delete (Windows)
Cmd + Shift + Delete (Mac)

# Or use incognito mode
Ctrl + Shift + N (Windows)
Cmd + Shift + N (Mac)
```

### HTTPS Not Working
- Wait 24 hours after DNS setup
- Force HTTPS in hosting settings
- Check certificate status

### 404 Error
- Verify `index.html` is in root directory
- Check deployment logs
- Ensure all files uploaded correctly

### LinkedIn Sync Not Working
- Check browser console (F12)
- Verify `linkedin-sync.js` loaded
- Check network connectivity
- Review JavaScript errors

---

## 📞 Support Resources

### GitHub Pages
- [Documentation](https://docs.github.com/en/pages)
- [Community Forum](https://github.community/)

### Netlify
- [Documentation](https://docs.netlify.com/)
- [Support](https://www.netlify.com/support/)

### Vercel
- [Documentation](https://vercel.com/docs)
- [Discord Community](https://vercel.com/discord)

---

## ✅ Final Checklist

- [ ] Website deployed successfully
- [ ] Custom domain connected
- [ ] HTTPS enabled
- [ ] All functionality tested
- [ ] Mobile responsive verified
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] SEO basics implemented
- [ ] Analytics added (optional)
- [ ] Shared on LinkedIn

---

**Congratulations! Your portfolio is now live! 🎉**

Visit: **https://gautammanglani.in**

Remember to:
1. Update LinkedIn regularly
2. Monitor website analytics
3. Keep content fresh
4. Share with your network
5. Add to your resume

---

*Last Updated: November 2024*
