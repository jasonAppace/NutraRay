# NutraRay — Deployment Playbook

> **App:** NutraRay
> **Server:** `root@144.91.74.217` · **Port:** `9000`
> **Preview URL:** https://demo.sourapps.com/nutraray/
> **App URL:** https://demo.sourapps.com/nutraray/app/

---

## Step 1 — Local Configuration

Make sure the following are set before building.

### 1.1 `app.json` — Web Base URL

Add or update the `web` and `experiments` objects in your `app.json`:

```json
"web": {
  "bundler": "metro",
  "output": "single",
  "favicon": "./assets/images/favicon.png",
  "baseUrl": "/nutraray/app"
},
"experiments": {
  "typedRoutes": true,
  "reactCompiler": true,
  "baseUrl": "/nutraray/app"
}
```

### 1.2 `.gitignore`

Ensure these entries are present:

```
.metro-cache/
node_modules/
.expo/
dist/
```

### 1.3 `preview.html` (Optional)

The preview phone frame is served at the root `/nutraray/` so no filename appears in the URL.
Set `PREVIEW_URL` inside `preview.html` to the app sub-path:

```
https://demo.sourapps.com/nutraray/app/
```

---

## Step 2 — VPS Deployment

SSH into the server and run the following:

```bash
# 1. Clone the repository
cd /var/www
git clone https://github.com/SH-Appace/NutraRay.git
cd /var/www/NutraRay

# 2. Install dependencies & build
npm install
npx expo export --platform web

# 3. Inject subpath routing patch
sed -i 's#</head>#<script>(function(){var b="/nutraray/app",p=location.pathname;if(p===b||p.startsWith(b+"/")){history.replaceState(null,"",p.slice(b.length)||"/")}})()</script></head>#' dist/index.html

# 4. Start with PM2 on port 9000
pm2 start "npx serve /var/www/NutraRay/dist -p 9000 --single" --name nutraray
pm2 save
```

---

## Step 3 — Nginx Configuration

Edit: `nano /etc/nginx/sites-available/default`

Add the following **inside** the `server { ... }` block:

```nginx
# NutraRay — Phone frame preview (served at root, no filename in URL)
location = /nutraray/ {
    alias      /var/www/NutraRay/preview.html;
    add_header Content-Type text/html;
}

# NutraRay — Expo App
location /nutraray/app/ {
    proxy_pass         http://localhost:9000/;
    proxy_http_version 1.1;
    proxy_set_header   Host $host;
}

# NutraRay — Asset Fallback
location @assets_nutraray {
    root       /var/www/NutraRay/dist;
    try_files  $uri =404;
}

# NutraRay — Expo Bundle Fallback
location @expo_nutraray {
    root       /var/www/NutraRay/dist;
    try_files  $uri =404;
}
```

### Apply Changes

```bash
nginx -t && systemctl restart nginx
```

---

## Step 4 — Verification

| Check            | URL                                                   |
| ---------------- | ----------------------------------------------------- |
| 📱 Preview Frame | https://demo.sourapps.com/nutraray/                   |
| 🟢 Live App      | https://demo.sourapps.com/nutraray/app/               |

---

## Port Reference

| App                  | Port     |
| -------------------- | -------- |
| timble-candle        | 8082     |
| lightcore-app        | 8084     |
| estimate-builder-pro | 8086     |
| pioneer-mobile-app   | 8087     |
| NCSuperCars          | 8088     |
| EntomoMech           | 8089     |
| octane-fuelworx      | 8095     |
| octane-fuelworxrider | 8096     |
| quickbuys            | 8097     |
| findmypplvendor      | 8098     |
| nest                 | 8099     |
| **NutraRay**         | **9000** |

---

## Redeploy / Update

When pushing new changes, re-run on the server:

```bash
cd /var/www/NutraRay
git pull
npm install
npx expo export --platform web
sed -i 's#</head>#<script>(function(){var b="/nutraray/app",p=location.pathname;if(p===b||p.startsWith(b+"/")){history.replaceState(null,"",p.slice(b.length)||"/")}})()</script></head>#' dist/index.html
pm2 restart nutraray
```
