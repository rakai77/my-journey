import os
import urllib.request
from PIL import Image

def download_and_standardize_livin_assets():
    output_dir = "/Users/rakaiwangsasatia/journey-web/public/images/screenshots"
    os.makedirs(output_dir, exist_ok=True)

    targets = [
        (
            "livin_1.webp",
            "https://play-lh.googleusercontent.com/AdevuB1McvJ-1-P5Vth-ekSV1rILnO1gclSLriiJKogYlil1kw1ZYLwfe5weGJqqt3FKrTbvLPRiRBlRvNJ0KpE=w1000-h2000"
        ),
        (
            "livin_2.webp",
            "https://play-lh.googleusercontent.com/plKMYLwcQ7Al5awNEzyRR-wtWnJYlLv8rZDAb-iibm0tLkef5HsisIcRPD8Y61R-FFuE8q1_7ogMc0zJ2MnJxA=w1000-h2000"
        ),
        (
            "livin_3.webp",
            "https://play-lh.googleusercontent.com/QwnEmh917LoiHkfMz1O8-qmMEZ0TRyYT9qR97yfyG9nUyNKx2n6tBzFWDzLeV0IN3u2dPXn6CfkNoxWux5wZZJQ=w1000-h2000"
        ),
        (
            "livin_4.webp",
            "https://play-lh.googleusercontent.com/uxj6iTfxve8e0RDGZnH88sD_aYgchJ4K7MINcUjWXn0PZlTnZzO6NOWb175FYIl4A0ZHnH5FDdVn7WiaTBVxPw=w1000-h2000"
        ),
        (
            "livin_5.webp",
            "https://play-lh.googleusercontent.com/B-yLOOeK4m5dDGEo5VugN7g7xUqQe55O-e13vAt_5fVtzYOk8ZWDJzwlIcE7-pRk1xGbuUwNBNdC6h7yTkWcRA=w1000-h2000"
        ),
    ]

    target_w = 1000
    target_h = 1778  # Standard 9:16 aspect ratio

    for filename, url in targets:
        dst = os.path.join(output_dir, filename)
        tmp_dst = dst + ".tmp"
        print(f"Downloading {filename} from Play Store CDN...")
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
        with urllib.request.urlopen(req) as resp, open(tmp_dst, "wb") as f:
            f.write(resp.read())
        
        # Load and resize to exact 1000x1778 standard 9:16 card
        im = Image.open(tmp_dst).convert("RGB")
        im_resized = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
        im_resized.save(dst, "WEBP", quality=92)
        os.remove(tmp_dst)
        print(f"Saved {filename}: dimensions={im_resized.size}, bytes={os.path.getsize(dst)}")

    print("All 5 Livin' Merchant screenshots downloaded and standardized successfully.")

if __name__ == "__main__":
    download_and_standardize_livin_assets()
