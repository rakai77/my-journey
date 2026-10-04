import urllib.request
import re

def download_images(package_name, prefix):
    url = f"https://play.google.com/store/apps/details?id={package_name}&hl=en&gl=US"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Play Store screenshots are in <img srcset="..."> or similar, but the URL pattern
        # is usually https://play-lh.googleusercontent.com/[a-zA-Z0-9_\-]+
        # For screenshots, they usually have =w... parameters or are large.
        # Let's just find the URLs that contain certain identifiers if possible, or grab all and add the sizing param.
        # It's better to just regex specifically for the main screenshots.
        # In Play Store HTML, screenshots are usually inside a <div data-screenshot-item-index=...> or similar, but regexing the URLs directly:
        img_urls = re.findall(r'(https://play-lh\.googleusercontent\.com/[a-zA-Z0-9_\-]+)=w[0-9]+-h[0-9]+', html)
        if not img_urls:
            img_urls = re.findall(r'(https://play-lh\.googleusercontent\.com/[a-zA-Z0-9_\-]+)', html)
            
        unique_urls = []
        for u in img_urls:
            if u not in unique_urls:
                unique_urls.append(u)
        
        # Skip the first few which are usually icons
        unique_urls = unique_urls[3:]
        
        count = 1
        for u in unique_urls:
            if count > 3:
                break
            # Add sizing parameter to get high res
            hires_url = u + "=w1000-h2000"
            try:
                urllib.request.urlretrieve(hires_url, f"public/images/screenshots/{prefix}_{count}.webp")
                print(f"Downloaded {prefix}_{count}.webp")
                count += 1
            except Exception as e:
                print(f"Failed to download {u}: {e}")
    except Exception as e:
        print(f"Failed to fetch page for {package_name}: {e}")

# Try to find Bale by BTN package name
try:
    search_url = "https://play.google.com/store/search?q=bale+by+btn&c=apps&hl=en&gl=US"
    req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # look for details?id=
    match = re.search(r'href="/store/apps/details\?id=([^"]+)"', html)
    if match:
        bale_package = match.group(1)
        print(f"Found Bale by BTN package: {bale_package}")
        download_images(bale_package, "bale")
    else:
        print("Could not find Bale by BTN package from search")
except Exception as e:
    print(f"Search failed: {e}")

download_images("id.co.btn.smartresidence", "smartres")
