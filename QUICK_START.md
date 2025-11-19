# Quick Start Guide 🚀

Get your portfolio website live in just 5 minutes!

## ⚡ Fastest Way to Deploy

### 1. Download Project Files ✅
You already have all the files needed!

### 2. Choose Your Platform (Pick One)

---

## 🎯 Option 1: GitHub Pages (5 Minutes)

**Best for**: Complete control, version history, free hosting

### Steps:
1. **Create GitHub account** at [github.com](https://github.com) (if you don't have one)

2. **Create new repository**
   - Click "+" → "New repository"
   - Name it: `portfolio` or `gautammanglani.in`
   - Make it Public
   - Click "Create repository"

3. **Upload files**
   - Click "uploading an existing file"
   - Drag ALL your project files to the page
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: `main` branch
   - Click Save
   - Your site is live at: `https://YOUR_USERNAME.github.io/portfolio/`

5. **Add custom domain** (Optional)
   - In Pages settings, add: `gautammanglani.in`
   - Update DNS at your domain registrar (see DEPLOYMENT.md)

✅ **Done! Your site is live!**

---

## 🎯 Option 2: Netlify (3 Minutes)

**Best for**: Drag & drop simplicity, instant deployment

### Steps:
1. Go to [netlify.com](https://www.netlify.com/)

2. Sign up with email or GitHub

3. Click "Add new site" → "Deploy manually"

4. **Drag your entire project folder** to the upload area

5. Wait 30 seconds... **Done!**
   - Your site is live at: `random-name.netlify.app`

6. **Add custom domain** (Optional)
   - Site settings → Domain management
   - Add domain: `gautammanglani.in`
   - Follow DNS setup instructions

✅ **Done! Your site is live!**

---

## 🎯 Option 3: Vercel (3 Minutes)

**Best for**: Professional deployment, GitHub integration

### Steps:
1. Go to [vercel.com](https://vercel.com/)

2. Sign up with GitHub

3. Click "Add New" → "Project"

4. If using GitHub:
   - Import your repository
   - Click "Deploy"
   
   Or upload manually:
   - Use Vercel CLI (see DEPLOYMENT.md)

5. **Done!** Site live at: `project-name.vercel.app`

6. Add custom domain in project settings

✅ **Done! Your site is live!**

---

## 🌐 Connecting Your Domain

### At Your Domain Registrar (GoDaddy, Namecheap, etc.):

**For GitHub Pages:**
Add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For Netlify:**
Use their nameservers or:
```
A Record: 75.2.60.5
```

**For Vercel:**
```
A Record: 76.76.21.21
```

**Note**: DNS changes take 1-24 hours to propagate globally.

---

## 📱 Test Your Website

1. Open in browser: `https://gautammanglani.in`
2. Test on mobile phone
3. Check all sections load correctly
4. Verify LinkedIn sync is working

---

## 🔄 How to Update Your Website

### GitHub Pages:
```bash
# Make changes to your files
git add .
git commit -m "Updated content"
git push
```

### Netlify:
- Push to GitHub (if connected), or
- Drag new files to Netlify dashboard

### Vercel:
- Push to GitHub, auto-updates

---

## ✅ Post-Launch Checklist

- [ ] Website loads correctly
- [ ] Mobile responsive
- [ ] All sections working
- [ ] LinkedIn sync functional
- [ ] HTTPS enabled
- [ ] Add to resume
- [ ] Share on LinkedIn
- [ ] Update LinkedIn with new skills/certs

---

## 🆘 Need Help?

### Common Issues:

**Site not loading?**
- Wait for DNS propagation (up to 24 hours)
- Check [whatsmydns.net](https://www.whatsmydns.net/)
- Clear browser cache

**404 Error?**
- Ensure `index.html` is in root folder
- Check if files uploaded correctly
- Verify repository is public (GitHub)

**LinkedIn sync not working?**
- Open browser console (F12)
- Check for JavaScript errors
- Ensure `linkedin-sync.js` is loaded

**HTTPS not working?**
- Wait 24 hours after DNS setup
- Check hosting platform's SSL settings
- Try accessing with `https://` explicitly

### More Help:
- See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions
- See [README.md](README.md) for technical details
- Check hosting platform documentation

---

## 📞 Share Your Success!

Once live:
1. Add website URL to LinkedIn profile
2. Add to resume
3. Share with connections
4. Keep LinkedIn updated → Website auto-updates!

---

## 🎉 You're All Set!

Your professional portfolio is now live and will automatically sync with your LinkedIn profile!

**Next Steps:**
1. Regularly update LinkedIn
2. Add new projects and certifications
3. Monitor website traffic (add Google Analytics)
4. Keep content fresh

---

**Website**: https://gautammanglani.in  
**LinkedIn**: https://linkedin.com/in/gautammanglani

*Happy networking! 🚀*
