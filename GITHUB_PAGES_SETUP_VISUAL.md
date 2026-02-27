# 🔐 GitHub Pages SSL Certificate Provisioning Guide

## What You Need to Do (Step-by-Step Visual Guide)

### STEP 1: Go to GitHub Pages Settings

```
1. Open: https://github.com/kervens18/hope-foundation-platform
2. Click:  Settings (top right of repo)
3. Left Menu: Click "Pages"
```

---

### STEP 2: Configure Pages Source

Look for **"Build and deployment"** section:

**Source:**
- ✅ Branch: `main`
- ✅ Folder: `/ (root)`
- Click **Save** if needed

**Expected:**
```
Build and deployment
Source: Deploy from a branch
Branch: main / (root)
```

---

### STEP 3: Set Custom Domain

Look for **"Custom domain"** field:

```
Custom domain input box:
[  firstaidintconnect.org  ]
              ↓
         Click Save
```

**Steps:**
1. Click in the custom domain field
2. Type: `firstaidintconnect.org`
3. Click **Save**
4. GitHub will refresh page

---

### STEP 4: GitHub Creates Certificate (Wait Here! ⏳)

After clicking Save:

```
⏳ GitHub is provisioning SSL certificate...

Timeline:
- Immediately: CNAME file created automatically
- 5-15 min: Let's Encrypt certificate generated
- 10-15 min: Certificate deployed
- 15-20 min: "Enforce HTTPS" button appears
```

**What you'll see during provisioning:**

```
Custom domain
firstaidintconnect.org
[Default subdomain disabled]
[Enforce HTTPS] ← Button appears when ready
```

**Before ready (button greyed out):**
```
Custom domain
firstaidintconnect.org
[Default subdomain disabled]
Enforce HTTPS
⏳ Your certificate is being provisioned...
```

---

### STEP 5: Enable HTTPS Enforcement

Once "Enforce HTTPS" button appears:

```
☑ Enforce HTTPS ← Click this checkbox!
↓
GitHub will now:
- Force all HTTP → HTTPS
- Add security headers
- Use modern TLS 1.2+
```

---

## ✅ Verification Steps

### Quick Check: Is Certificate Ready?

Go to: https://www.ssllabs.com/ssltest/analyze.html?d=firstaidintconnect.org

```
While provisioning (0-15 min):
→ Shows "Assessment in progress"

After provisioning (15+ min):
→ Shows "A" or "A+" rating ✅
```

### Browser Check: Visit Your Site

Try: https://firstaidintconnect.org

**Certificate Ready:**
```
✅ Green lock icon
✅ Page loads normally
✅ No warnings
```

**Certificate NOT Ready:**
```
❌ Red warning
❌ "Your connection is not private"
❌ Error code shown
```

---

## 🚨 If Certificate Isn't Ready After 20 Minutes

### Check #1: Is CNAME File Present?

GitHub **automatically creates** a CNAME file when you set custom domain.

**To verify:**
1. Go to: https://github.com/kervens18/hope-foundation-platform
2. Code tab (main area)
3. Look for file named: **CNAME**
4. Click to open
5. Should contain: `firstaidintconnect.org`

**If CNAME missing:**
1. Click "Add file" → "Create new file"
2. Name: `CNAME`
3. Content: `firstaidintconnect.org`
4. Commit with message: "Add CNAME for custom domain"
5. Wait 5 minutes

### Check #2: GitHub Actions Deployment

Go to your repository and click **Actions** tab:

```
Recent workflow runs should show:
✅ "pages build and deployment" - Success (green checkmark)
```

**If showing ❌ Red X (Failed):**
1. Click on the failed run
2. Read error message
3. Usually indicates HTML syntax errors
4. Fix errors and push again

### Check #3: Verify Custom Domain in Settings

Go back to **Settings → Pages**:

**Should see:**
```
Custom domain: firstaidintconnect.org ✅
```

**If blank or highlighted in red:**
1. Enter domain again: `firstaidintconnect.org`
2. Click Save
3. Wait 15 minutes
4. Try again

---

## 🔍 Visual Checklist

When you go to **Settings → Pages**, you should see:

```
┌─────────────────────────────────────┐
│ Build and deployment               │
│ Source: Deploy from a branch       │
│ Branch: main / (root)              │
├─────────────────────────────────────┤
│ Custom domain                       │
│ [firstaidintconnect.org] [Save]   │
│ ☑ Enforce HTTPS                    │
│ ✓ Certificate is valid             │
│                                     │
│ Your site is published at:         │
│ https://firstaidintconnect.org    │
└─────────────────────────────────────┘
```

---

## ⚡ Certificate Provisioning Timeline

```
0 min  → You click "Save" on custom domain
         ↓
1-2 min → CNAME file auto-created in repo
         ↓
5-10 min → Let's Encrypt issues certificate
         ↓
10-15 min → GitHub deploys certificate to CDN
         ↓
15-20 min → "Enforce HTTPS" button becomes available
         ↓
20-30 min → Browser trusts certificate ✅
         ↓
Result  → https://firstaidintconnect.org works perfectly!
```

---

## 🔄 If You Accidentally Delete CNAME

**Don't worry! GitHub will recreate it:**

1. Go to **Settings → Pages**
2. Custom domain field will show the domain
3. Click **Save** again
4. GitHub recreates CNAME automatically
5. Wait 5-10 minutes

---

## 📊 Status After Each Step

### After Step 1-2: Pages Source Set
```
Status: ✅ GitHub Pages enabled
URL: https://kervens18.github.io/hope-foundation-platform/
HTTPS: ✅ Works (GitHub default)
```

### After Step 3: Custom Domain Added
```
Status: ✅ Custom domain set
URL: https://firstaidintconnect.org (provisioning)
HTTPS: ⏳ Certificate pending
Visible: CNAME file created in repo
```

### After Step 5: HTTPS Enforced
```
Status: ✅ Fully configured
URL: https://firstaidintconnect.org
HTTPS: ✅ Active & enforced
Certificate: ✅ Valid (Let's Encrypt)
```

---

## 🎯 Final Verification

Once everything is set up, test:

1. **Homepage:** https://firstaidintconnect.org
   - [ ] Loads without warnings
   - [ ] Green lock icon
   
2. **Donation Page:** https://firstaidintconnect.org/donate.html
   - [ ] Loads fully
   - [ ] Payment form visible
   
3. **Shop Page:** https://firstaidintconnect.org/shop.html
   - [ ] Loads fully
   - [ ] Products visible

4. **www Subdomain:** https://www.firstaidintconnect.org
   - [ ] Redirects to main domain
   - [ ] No SSL errors

---

## 📞 Still Not Working?

### Last Resort Troubleshooting

**Option 1: Start Fresh**
1. Remove custom domain (leave blank, click Save)
2. Wait 5 minutes
3. Add custom domain again: `firstaidintconnect.org`
4. Click Save
5. Wait 20 minutes
6. Enable HTTPS

**Option 2: Check DNS (if using custom DNS)**
```powershell
nslookup firstaidintconnect.org
```

Should show GitHub IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Option 3: Contact GitHub Support**
- Go to: https://support.github.com/request
- Provide repository URL
- Show screenshot of error
- Include steps taken

---

## ✨ Success Indicators

You'll know it's working when:

✅ **Visual Indicator:**
- Green lock icon in browser URL bar
- No red warning messages

✅ **URL Works:**
- https://firstaidintconnect.org loads
- https://www.firstaidintconnect.org works
- Both show no warnings

✅ **Certificate Info (Chrome):**
- Click lock icon
- Shows "Certificate (Valid)"
- Issued by: "Let's Encrypt"

✅ **SSL Rating:**
- https://www.ssllabs.com/ssltest/ shows A or A+

---

**Timeline to Success:** 20-30 minutes from clicking Save  
**Cost:** $0 (Certificate is free via Let's Encrypt)  
**Maintenance:** Automatic renewal every 90 days  

🎉 **You're done!**
