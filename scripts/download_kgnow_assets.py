import os
import urllib.request
from PIL import Image

def download_and_optimize():
    output_dir = "/Users/rakaiwangsasatia/journey-web/public/images/screenshots"
    os.makedirs(output_dir, exist_ok=True)

    # Targeted screenshots from Play Store com.kgnow.official.android:
    # 1. Discovery Hub (Image 3)
    # 2. Live Streaming Player (Image 6)
    # 3. Offline Video Downloads (Image 7)
    # 4. Short Video Rolls (Image 5)
    targets = [
        (
            "kgnow_1.webp",
            "https://play-lh.googleusercontent.com/XhCNT0IXN2l0RZKPvO1o4rH0unZmzr-mxAvlJpgQMA_7hee9MbJKgoB7_XUflTsh3X1PLtejqdwfpDmyoXts-Q=w1000-h2000"
        ),
        (
            "kgnow_2.webp",
            "https://play-lh.googleusercontent.com/vDuvrc06SZfsKOs9eyg-9fazCs97V0k8P9-pvW1gLH-Ni3ThormrwaTciQno6hy6UKVC2MypF9BvJbo1bEAirhI=w1000-h2000"
        ),
        (
            "kgnow_3.webp",
            "https://play-lh.googleusercontent.com/MNfgvmCXVsCIBcJg8zrakuQ4mAkuwRndeJqYBre4UUL4zMm6kMtlGhxOLDVTg6cjATyKRS4kpJGLpIoowYrPug=w1000-h2000"
        ),
        (
            "kgnow_4.webp",
            "https://play-lh.googleusercontent.com/xoaw2YCvI8xjf6oAFjC5ErARJw5JQLPE7CSSZ9MdjdYXn4LfQ5x0Zflt-QVpd7tfanUYtHLMoPVl8f5PwaSBvw=w1000-h2000"
        ),
    ]

    for filename, url in targets:
        dst = os.path.join(output_dir, filename)
        tmp_dst = dst + ".tmp"
        print(f"Downloading {filename}...")
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
        with urllib.request.urlopen(req) as resp, open(tmp_dst, "wb") as f:
            f.write(resp.read())
        
        # Optimize with Pillow
        im = Image.open(tmp_dst).convert("RGB")
        im.save(dst, "WEBP", quality=90)
        os.remove(tmp_dst)
        print(f"Optimized and saved {filename}: size={im.size}, bytes={os.path.getsize(dst)}")

    print("All 4 KGNow! screenshots downloaded and optimized successfully.")

if __name__ == "__main__":
    download_and_optimize()
