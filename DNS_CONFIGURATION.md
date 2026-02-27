# 🌐 DNS Configuration Guide by Registrar

Your domain: **firstaidintconnect.org**

---

## 📝 DNS Records Required

```
Type   | Name | Value
-------|------|------------------------------------------
A      | @    | 185.199.108.153
A      | @    | 185.199.109.153
A      | @    | 185.199.110.153
A      | @    | 185.199.111.153
CNAME  | www  | kervens18.github.io
```

**OR (Alternative - Simpler):**

```
Type   | Name   | Value
-------|--------|---------------------------
CNAME  | @      | kervens18.github.io
CNAME  | www    | kervens18.github.io
```

---

## 🔧 Step-by-Step for Each Registrar

### 🏆 GoDaddy (Most Popular)

1. **Login** to https://godaddy.com
2. Click **Manage My Domains**
3. Find **firstaidintconnect.org**, click it
4. Under "DNS", click **Manage DNS**
5. Scroll to **DNS Records** section
6. Edit or delete existing A records
7. Add the 4 A records shown above:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.108.153`
   - (Repeat for other 3 IPs)
8. Add CNAME record:
   - Type: `CNAME`
   - Name: `www`
   - Value: `kervens18.github.io`
9. Click **Save**
10. Wait 24-48 hours for propagation

---

### 🔐 Namecheap

1. **Login** to https://namecheap.com
2. Click **Domain List**
3. Find **firstaidintconnect.org**, click **Manage**
4. Click **Advanced DNS** tab
5. Under "Host Records", remove existing A records
6. Click **Add New Record**
7. Add the 4 A records:
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.108.153`
   - (Repeat for other 3 IPs)
8. For CNAME:
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `kervens18.github.io`
9. Click **Save All Changes**
10. Wait 24-48 hours

---

### 🔍 Google Domains

1. **Login** to https://domains.google.com
2. Click **firstaidintconnect.org**
3. Left menu → **DNS**
4. Scroll down to **Custom Records**
5. Delete any existing A records
6. Click **Create New Record**
7. Add 4 A records:
   - Type: `A`
   - Name: `@` or leave blank
   - IPv4: `185.199.108.153`
   - (Repeat for other 3 IPs)
8. Add CNAME record:
   - Type: `CNAME`
   - Name: `www`
   - Data: `kervens18.github.io`
9. Click **Create** for each
10. Click **Save**
11. Wait 24-48 hours

---

### ⚡ Cloudflare

1. **Login** to https://dash.cloudflare.com
2. Select **firstaidintconnect.org**
3. Go to **DNS** tab
4. Remove existing A records
5. Add 4 A records:
   - Type: `A`
   - Name: `firstaidintconnect.org`
   - IPv4: `185.199.108.153`
   - TTL: `Auto`
   - Proxy: Can be `Proxied` or `DNS only`
   - (Repeat for other 3 IPs)
6. Add CNAME record:
   - Type: `CNAME`
   - Name: `www`
   - Target: `kervens18.github.io`
   - Proxy: `DNS only`
7. Click **Save**
8. Wait 24-48 hours

**Note:** Cloudflare may offer free SSL even with Proxied records.

---

### 📲 Bluehost

1. **Login** to https://www.bluehost.com
2. Click **Domains**
3. Find **firstaidintconnect.org**, click **Manage**
4. Click **DNS Records**
5. Delete existing A records
6. Add 4 A records:
   - Type: `A`
   - Name: `@`
   - IPv4: `185.199.108.153`
   - (Repeat for other 3 IPs)
7. Add CNAME record:
   - Type: `CNAME`
   - Name: `www`
   - Value: `kervens18.github.io`
8. Click **Save** for each
9. Wait 24-48 hours

---

### 🌍 Other Registrars (General Process)

**For any registrar not listed above:**

1. Login to your registrar account
2. Find "Domains" or "My Domains"
3. Select **firstaidintconnect.org**
4. Look for "DNS Settings", "Manage DNS", or "Advanced DNS"
5. Find "DNS Records" or "Zone File"
6. Delete any existing A records pointing to old hosting
7. Add the DNS records shown at top of this guide
8. Save/Apply changes
9. Wait 5 minutes to 48 hours for propagation

---

## ✅ Verification After Setup

### Check DNS Propagation (Windows PowerShell)

```powershell
# Check if DNS is resolving
nslookup firstaidintconnect.org

# Expected output should show GitHub IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### Online DNS Checkers

1. https://www.whatsmydns.net/ - Enter `firstaidintconnect.org`
2. https://dnschecker.org/ - Check DNS propagation globally
3. https://mxtoolbox.com/ - Comprehensive DNS check

### Test HTTPS

```
Navigate to: https://firstaidintconnect.org
Expected: Green lock + page loads ✅
```

---

## ⏱️ DNS Propagation Timeline

| Time | Status |
|------|--------|
| Immediately | Changes saved at registrar |
| 5-30 min | ISP name servers updated |
| 1-4 hours | Most regions propagated |
| 24 hours | ~90% global coverage |
| 48 hours | Full global propagation |

**Meanwhile:** GitHub Pages keeps your old IP active, so your site stays online!

---

## 🆘 Common DNS Issues & Fixes

### Issue: "Domain not found" after 48 hours

**Fix:**
1. Double-check DNS records entered correctly
2. Verify all 4 A records are added
3. Check CNAME record is correct
4. Remove any conflicting old records
5. Clear browser DNS cache: `ipconfig /flushdns`
6. Try different DNS: Google (8.8.8.8) or Cloudflare (1.1.1.1)

### Issue: SSL Certificate Not Working

**Fix:**
1. Ensure GitHub Pages "Enforce HTTPS" is checked
2. Wait 15 minutes if recently enabled
3. Verify custom domain is set in GitHub
4. Check DNS is properly configured
5. Verify CNAME exists in repository

### Issue: "DNS_PROBE_FINISHED_NXDOMAIN" Error

**Fix:**
1. Wait 24-48 hours for DNS to propagate
2. Check registrar DNS records
3. Verify you edited the correct domain
4. Try again from different network/device
5. Clear browser cache completely

---

## 📊 DNS Record Explanation

### A Records (IPv4 Address)
- Points domain directly to IP address
- GitHub provides 4 IPs for redundancy
- If one fails, others keep site online

### CNAME Record (Alias)
- Points `www` subdomain to GitHub
- Allows GitHub to manage infrastructure
- Recommended for GitHub Pages

---

## 🔐 Security Recommendation

**Option 1: Use DNS Only (Recommended for GitHub Pages)**
```
If using Cloudflare, set records to "DNS only"
(Not proxied - GitHub handles SSL)
```

**Option 2: Use Registrar's Default**
```
Most registrars default to correct settings
Just follow the "Simpler Alternative" records
```

---

## 📚 Additional Resources

**GitHub Official Docs:**
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

**DNS Tutorial:**
https://support.google.com/domains/answer/3251147

**Nameserver Information:**
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

---

## ✨ You're Ready!

Once DNS is configured correctly:

✅ https://firstaidintconnect.org → LIVE  
✅ https://www.firstaidintconnect.org → LIVE  
✅ All pages accessible  
✅ HTTPS working  
✅ Domain active  

**Questions?** Check GitHub's documentation or contact your registrar support!

---

**Setup Date:** February 12, 2026  
**Domain:** firstaidintconnect.org  
**Hosting:** GitHub Pages  
**HTTPS:** Automatic (Let's Encrypt)
