# FIRST AID INTERNATIONAL, INC. - Site Configuration

## Domain Configuration

**Domain:** firstaidintconnect.org
**Status:** Active
**Type:** Non-profit Organization Website

## Site URLs

- **Main Site:** https://firstaidintconnect.org
- **Donation Page:** https://firstaidintconnect.org/#donate
- **Projects:** https://firstaidintconnect.org/#projects
- **About:** https://firstaidintconnect.org/#about
- **Blog:** https://firstaidintconnect.org/#blog
- **Volunteer:** https://firstaidintconnect.org (Volunteer Modal)

## Technical Configuration

### Meta Tags (SEO)
```html
<title>FIRST AID INTERNATIONAL, INC. - Donation Platform</title>
<meta name="description" content="FIRST AID INTERNATIONAL, INC. - Serving children and young adults in Haiti">
<meta name="keywords" content="charity, Haiti, education, food, shelter, non-profit, donation">
<meta name="og:site_name" content="FIRST AID INTERNATIONAL, INC.">
<meta name="og:url" content="https://firstaidintconnect.org">
```

### Domain Nameservers

To use this domain, update your domain registrar with these nameservers:
- **For GitHub Pages:** 
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

- **For Netlify:**
  - Update DNS records at your registrar

- **For other hosting:**
  - Contact your hosting provider for nameserver details

### DNS Records

```
Type    Name                    Value
CNAME   www                     firstaidintconnect.org
A       @                       (Your hosting IP)
CNAME   mail                    (Your mail provider)
```

## Deployment Instructions

### Option 1: GitHub Pages

1. Push code to GitHub repository
2. In repository settings → Pages
3. Set custom domain: `firstaidintconnect.org`
4. Enable HTTPS
5. Update DNS CNAME record

### Option 2: Netlify

1. Connect GitHub repository
2. Build settings:
   - Build command: `(none - static site)`
   - Publish directory: `/`
3. Domain settings → Add custom domain
4. Point DNS to Netlify nameservers

### Option 3: Self-Hosted

1. Upload files to web server
2. Configure DNS A record to server IP
3. Set up SSL certificate (Let's Encrypt)
4. Configure web server (Apache/Nginx)

## Email Configuration

Set up organizational email:
- `info@firstaidintconnect.org`
- `donations@firstaidintconnect.org`
- `volunteer@firstaidintconnect.org`

Contact your email provider (Gmail Workspace, Microsoft 365, etc.)

## SSL Certificate

**Status:** Required for production
**Provider:** Let's Encrypt (Free) or commercial
**Auto-renewal:** Enable automatic renewal

## Analytics & Tracking

### Google Analytics

Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Backup & Security

- Daily backups recommended
- SSL/HTTPS enabled
- Content Security Policy configured
- Regular updates to dependencies

## Support & Maintenance

For issues or questions regarding domain configuration:
- Contact domain registrar support
- Check hosting provider documentation
- Review DNS propagation (can take 24-48 hours)

## Checklist Before Launch

- [ ] Domain pointed to correct hosting
- [ ] SSL certificate installed
- [ ] All pages accessible via domain
- [ ] Email working
- [ ] Analytics tracking active
- [ ] Backup system in place
- [ ] Security headers configured
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags updated
- [ ] Robots.txt and sitemap.xml created

---

**Last Updated:** January 16, 2026
**Organization:** FIRST AID INTERNATIONAL, INC.
