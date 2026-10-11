import os
from PIL import Image, ImageDraw, ImageFont

def get_font(font_name, size):
    paths = [
        f"/System/Library/Fonts/Supplemental/{font_name}.ttf",
        f"/System/Library/Fonts/{font_name}.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNS.ttf"
    ]
    for p in paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

def process_screenshots():
    source_dir = "/Users/rakaiwangsasatia/.gemini/antigravity-ide/brain/0c23ecb2-64ae-4a54-972d-614204e86479/.user_uploaded/"
    output_dir = "/Users/rakaiwangsasatia/journey-web/public/images/screenshots"
    os.makedirs(output_dir, exist_ok=True)

    bold_36 = get_font("Arial Bold", 36)
    bold_18 = get_font("Arial Bold", 18)
    bold_15 = get_font("Arial Bold", 15)
    bold_13 = get_font("Arial Bold", 13)
    regular_12 = get_font("Arial", 12)
    regular_11 = get_font("Arial", 11)
    avatar_font = get_font("Arial Bold", 16)

    # 1. Screen 5 -> tring_1.webp (1st Versary Landing & Biometrics)
    print("Processing Screen 5 -> tring_1.webp...")
    im5 = Image.open(os.path.join(source_dir, "media_1791740979053.png")).convert("RGB")
    im5.save(os.path.join(output_dir, "tring_1.webp"), "WEBP", quality=92)

    # 2. Screen 3 -> tring_2.webp (Main Emas Dashboard)
    print("Processing Screen 3 -> tring_2.webp...")
    im3 = Image.open(os.path.join(source_dir, "media_1791740979009.png")).convert("RGBA")
    draw3 = ImageDraw.Draw(im3)

    # 2a. Avatar circle: center (55, 103), radius 22
    avatar_bg = (107, 170, 151, 255)
    draw3.ellipse([33, 81, 77, 125], fill=avatar_bg)
    draw3.text((44, 94), "BP", font=avatar_font, fill=(255, 255, 255, 255))

    # 2b. Dropdown pill text area (x: 114 to 330, y: 82 to 126)
    pill_bg_3 = (40, 126, 53, 255)
    draw3.rectangle([114, 82, 330, 126], fill=pill_bg_3)
    draw3.text((116, 84), "Bianca Putri Ramadhani", font=bold_15, fill=(255, 255, 255, 255))
    draw3.text((116, 107), "CIF 1032 4892 14", font=regular_11, fill=(167, 243, 208, 255))

    # 2c. Mathematical horizontal gradient interpolation for seamless dashboard background
    # Helper to generate interpolated gradient patch
    def fill_interpolated_gradient(img, x_start, x_end, y_start, y_end):
        width = x_end - x_start
        total_width = 310 - 15
        for y in range(y_start, y_end):
            c_left = img.getpixel((15, y))
            c_right = img.getpixel((310, y))
            for x in range(x_start, x_end):
                factor = (x - 15) / total_width
                r = int(c_left[0] * (1 - factor) + c_right[0] * factor)
                g = int(c_left[1] * (1 - factor) + c_right[1] * factor)
                b = int(c_left[2] * (1 - factor) + c_right[2] * factor)
                img.putpixel((x, y), (r, g, b, 255))

    # Patch 1: Area behind '0,0100 gr' (leaves eye icon at x=228..265 untouched)
    fill_interpolated_gradient(im3, 25, 224, 198, 252)

    # Patch 2: Area behind valuation and return
    fill_interpolated_gradient(im3, 25, 305, 254, 280)

    # Re-instantiate draw after per-pixel updates
    draw3 = ImageDraw.Draw(im3)

    # Draw dummy balance text
    draw3.text((28, 208), "24,5000 gr", font=bold_36, fill=(248, 197, 27, 255))

    # Draw valuation
    draw3.text((28, 261), "Senilai Rp57.869.000", font=regular_12, fill=(220, 252, 231, 255))

    # Info (i) icon circle
    draw3.ellipse([160, 262, 172, 274], outline=(220, 252, 231, 255), width=1)
    draw3.text((164, 262), "i", font=regular_11, fill=(220, 252, 231, 255))

    # Positive return upward triangle and text
    draw3.polygon([(182, 272), (187, 263), (192, 272)], fill=(74, 222, 128, 255))
    draw3.text((196, 260), "(+8,45%)", font=bold_13, fill=(74, 222, 128, 255))

    im3 = im3.convert("RGB")
    im3.save(os.path.join(output_dir, "tring_2.webp"), "WEBP", quality=92)

    # 3. Screen 2 -> tring_3.webp (Portofolio)
    print("Processing Screen 2 -> tring_3.webp...")
    im2 = Image.open(os.path.join(source_dir, "media_1791740979001.png")).convert("RGBA")
    draw2 = ImageDraw.Draw(im2)

    # 3a. Avatar circle
    draw2.ellipse([33, 81, 77, 125], fill=avatar_bg)
    draw2.text((44, 94), "BP", font=avatar_font, fill=(255, 255, 255, 255))

    # 3b. Dropdown pill text area
    pill_bg_2 = (67, 149, 159, 255)
    draw2.rectangle([114, 82, 330, 126], fill=pill_bg_2)
    draw2.text((116, 84), "Bianca Putri Ramadhani", font=bold_15, fill=(255, 255, 255, 255))
    draw2.text((116, 107), "CIF 1032 4892 14", font=regular_11, fill=(204, 251, 241, 255))

    # 3c. Total Kekayaan subcard: cover lines at y: 532 to 585
    kekayaan_bg = (248, 248, 248, 255)
    draw2.rectangle([62, 532, 240, 584], fill=kekayaan_bg)
    draw2.text((64, 536), "24,5000 gr", font=bold_18, fill=(30, 41, 59, 255))
    draw2.text((64, 565), "Senilai Rp57.869.000", font=regular_11, fill=(100, 116, 139, 255))

    im2 = im2.convert("RGB")
    im2.save(os.path.join(output_dir, "tring_3.webp"), "WEBP", quality=92)

    # 4. Screen 1 -> tring_4.webp (Beli Tabungan Emas)
    print("Processing Screen 1 -> tring_4.webp...")
    im1 = Image.open(os.path.join(source_dir, "media_1791740978992.png")).convert("RGB")
    im1.save(os.path.join(output_dir, "tring_4.webp"), "WEBP", quality=92)

    # 5. Screen 4 -> tring_5.webp (Level & Poin)
    print("Processing Screen 4 -> tring_5.webp...")
    im4 = Image.open(os.path.join(source_dir, "media_1791740979040.png")).convert("RGBA")
    draw4 = ImageDraw.Draw(im4)

    # Mask '0' and draw '2.450'
    poin_bg = (29, 125, 141, 255)
    draw4.rectangle([18, 255, 80, 305], fill=poin_bg)
    draw4.text((20, 258), "2.450", font=bold_36, fill=(255, 255, 255, 255))

    im4 = im4.convert("RGB")
    im4.save(os.path.join(output_dir, "tring_5.webp"), "WEBP", quality=92)

    print("Success: all 5 WebP images generated flawlessly.")

if __name__ == "__main__":
    process_screenshots()
