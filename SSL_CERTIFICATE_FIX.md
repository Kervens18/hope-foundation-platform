# 🔧 Fix: net::ERR_CERT_COMMON_NAME_INVALID Error

## ⚠️ The Problem

You're seeing:
```
Your connection is not private
Attackers might be stealing your information
Error: net::ERR_CERT_COMMON_NAME_INVALID
```

This means the SSL certificate doesn't match the domain you're visiting.

---

## ✅ Solution (4 Quick Fixes)

### Fix #1: GitHub Pages Configuration (Most Common Fix)

**Check if custom domain is properly set in GitHub:**

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Look for **Custom domain** field
4. Ensure it shows: `firstaidintconnect.org`
5. If missing or wrong, enter: `firstaidintconnect.org`
6. Click **Save**
7. ⏳ **Wait 5-15 minutes** for GitHub to provision SSL certificate
8. Ensure ✅ **"Enforce HTTPS"** appears (appears after certificate is ready)

---

### Fix #2: Check CNAME File Exists

**Verify CNAME file is in your repository root:**

```
File: CNAME
Content: firstaidintconnect.org
```

1. In your repository, look for `CNAME` file
2. It should contain exactly: `firstaidintconnect.org`
3. If missing, create it
4. Push changes to GitHub
5. GitHub will use it for certificate

---

### Fix #3: Test with GitHub Pages Temporary URL

**While waiting for SSL certificate:**

```
Visit: https://kervens18.github.io/hope-foundation-platform/
```

This uses GitHub's built-in SSL (no custom domain).

- Should load without SSL errors ✅
- Confirms site itself works
- Custom domain certificate is provisioning

---

### Fix #4: Force Browser Cache Clear

**Clear browser SSL cache:**

**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete` → Clear browsing data
2. Select date range: **All time**
3. Check: **Cookies and other site data**
4. Check: **Cached images and files**
5. Click **Clear data**
6. Try again: https://firstaidintconnect.org

**Firefox:**
1. Press `Ctrl + Shift + Delete`
2. Select: **All** (time range)
3. Check: **Cache**
4. Click **Clear Now**

**Safari:**
1. Menu: **Develop** → **Clear Caches**
2. Or: Settings → Privacy → Manage Website Data
3. Find domain, click **Remove**

---

## 📋 Diagnostic Checklist

After making changes, go through each:

- [ ] GitHub Pages Settings → Custom domain is set to `firstaidintconnect.org`
- [ ] GitHub Pages "Enforce HTTPS" checkbox is ✅ checked
- [ ] CNAME file exists in repository root with correct content
- [ ] Pushed all changes to GitHub (git push)
- [ ] Waited at least 10 minutes
- [ ] Cleared browser cache completely
- [ ] Tried in incognito/private window (to skip cache)
- [ ] GitHub Actions shows successful deploy (check Actions tab)

---

## ⏱️ Timeline to Resolution

| Steps | Time |
|-------|------|
| Set custom domain in GitHub | Immediate |
| GitHub generates Let's Encrypt cert | 5-15 min |
| Certificate deployed to CDN | 5-15 min |
| Browser receives certificate | 1-5 min |
| **Total** | **15-30 min** |

---

## 🔍 Check Certificate Status

### Online SSL Checker

```
Visit: https://www.ssllabs.com/ssltest/analyze.html?d=firstaidintconnect.org
```

After 15 minutes:
- If shows: **A or A+** → Certificate is valid ✅
- If shows: **Error** → Still provisioning ⏳
- If shows: **Mismatch** → Go to Fix #1

### Manual Check (Chrome)

1. Visit https://firstaidintconnect.org
2. Click lock icon next to URL
3. Click **Certificate (Valid)** → Details
4. Look for **Subject Alternative Names**
5. Should include: `firstaidintconnect.org`

---

## 🆘 Still Getting Error After 30 Minutes?

### Troubleshooting Steps

**Step 1: Check GitHub Actions**
1. Go to repository
2. Click **Actions** tab
3. Look for recent deployments
4. If shows ❌ **Red X**: Deploy failed
5. Click on failed build to see error details

**Step 2: Verify DNS (if using custom DNS)**
```powershell
nslookup firstaidintconnect.org
```

Expected output: GitHub IP addresses
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Step 3: Check Repository Settings**

1. Settings → Pages
2. Verify:
   - ✅ Source: Branch `main` / folder `/`
   - ✅ Custom domain: `firstaidintconnect.org`
   - ✅ "Enforce HTTPS" checked

**Step 4: Delete & Recreate CNAME**

1. Delete existing CNAME file in repository
2. Commit and push
3. Create new CNAME file with: `firstaidintconnect.org`
4. Commit and push
5. Wait 5 minutes
6. GitHub will reprovision certificate

---

## 📞 If Problem Persists

### Contact GitHub Support

Go to: https://support.github.com/contact

**Include:**
- Repository URL
- Custom domain
- Screenshots of error
- Steps you've taken

---

## ✨ Quick Reference

### Before Domain Works:
```
Still getting error? → 
  1. Set custom domain in GitHub Pages
  2. Wait 15 minutes
  3. Clear browser cache
  4. Try again
```

### While Waiting:
```
Want to test the site? →
  Visit temporary GitHub URL:
  https://kervens18.github.io/hope-foundation-platform/
```

### After 15 Minutes Still Error? →
```
  1. Check GitHub Pages settings again
  2. Verify CNAME file in repository
  3. Check GitHub Actions for deploy errors
  4. Try clearing cookies completely
  5. Try different browser
```

---

## 🎯 Expected Result

After fixes applied (15-30 minutes):

✅ https://firstaidintconnect.org loads  
✅ Green lock icon appears  
✅ No SSL warning  
✅ Page displays fully  
✅ All features work  

---

## 📊 Common Causes & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| net::ERR_CERT_COMMON_NAME_INVALID | Custom domain not set in GitHub | Set domain in Pages settings |
| Certificate pending | GitHub provisioning certificate | Wait 15 minutes |
| Wrong domain in cert | CNAME file incorrect | Update CNAME to correct domain |
| Deploy failed | Syntax error in files | Check GitHub Actions for errors |

---

**Status:** Troubleshooting Guide Created  
**Domain:** firstaidintconnect.org  
**Next Step:** Follow the fixes above (usually Fix #1 resolves it)
