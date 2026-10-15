import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def get_system_font(name: str, size: int):
    candidates = [
        f"/System/Library/Fonts/Supplemental/{name}.ttf",
        f"/System/Library/Fonts/{name}.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNS.ttf"
    ]
    for p in candidates:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

def create_tring_card(
    source_img_path: str,
    title: str,
    subtitle: str,
    output_path: str
):
    card_w, card_h = 1000, 1778
    card = Image.new("RGB", (card_w, card_h), (3, 30, 24))
    draw = ImageDraw.Draw(card)

    # 1. Rich Vertical Emerald Gradient (Pegadaian Brand Colors)
    for y in range(card_h):
        f = y / card_h
        # From vibrant emerald (#059669) to deep forest spruce (#022c22)
        r = int(5 * (1 - f) + 2 * f)
        g = int(150 * (1 - f) + 40 * f)
        b = int(105 * (1 - f) + 28 * f)
        draw.line([(0, y), (card_w, y)], fill=(r, g, b))

    # 2. Ambient Radial Glow Behind Device
    glow = Image.new("RGBA", (card_w, card_h), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([80, 420, 920, 1560], fill=(16, 185, 129, 70))
    glow = glow.filter(ImageFilter.GaussianBlur(110))
    card.paste(glow, (0, 0), glow)

    # 3. Load & Scale App Screenshot
    ss = Image.open(source_img_path).convert("RGBA")
    ss_w, ss_h = ss.size
    phone_h = 1350
    phone_w = int(ss_w * (phone_h / ss_h))
    ss_resized = ss.resize((phone_w, phone_h), Image.Resampling.LANCZOS)

    phone_x = (card_w - phone_w) // 2
    phone_y = 350

    # 4. Device Chassis Dimensions
    bezel_padding = 10
    bezel_w = phone_w + bezel_padding * 2
    bezel_h = phone_h + bezel_padding * 2
    bezel_x = phone_x - bezel_padding
    bezel_y = phone_y - bezel_padding
    bezel_radius = 48

    # 5. Volumetric Contact Drop Shadow
    shadow = Image.new("RGBA", (card_w, card_h), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle(
        [bezel_x, bezel_y + 18, bezel_x + bezel_w, bezel_y + bezel_h + 18],
        radius=bezel_radius,
        fill=(0, 0, 0, 160)
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(26))
    card.paste(shadow, (0, 0), shadow)

    # 6. Draw Sleek Device Bezel
    card_draw = ImageDraw.Draw(card)
    card_draw.rounded_rectangle(
        [bezel_x, bezel_y, bezel_x + bezel_w, bezel_y + bezel_h],
        radius=bezel_radius,
        fill=(15, 23, 42),
        outline=(255, 255, 255, 75),
        width=3
    )

    # 7. Rounded Screen Mask
    mask = Image.new("L", (phone_w, phone_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, phone_w, phone_h], radius=40, fill=255)

    card.paste(ss_resized, (phone_x, phone_y), mask)

    # 8. Typography & Headers
    bold_font = get_system_font("Arial Bold", 60)
    sub_font = get_system_font("Arial", 32)
    brand_font = get_system_font("Arial Bold", 36)

    # Top Brand Badge
    brand_text = "TRING! by Pegadaian"
    bbox_b = card_draw.textbbox((0, 0), brand_text, font=brand_font)
    bw = bbox_b[2] - bbox_b[0]
    card_draw.text(((card_w - bw) // 2, 75), brand_text, font=brand_font, fill=(245, 158, 11))

    # Feature Title
    bbox_t = card_draw.textbbox((0, 0), title, font=bold_font)
    tw = bbox_t[2] - bbox_t[0]
    card_draw.text(((card_w - tw) // 2, 140), title, font=bold_font, fill=(255, 255, 255))

    # Subtitle
    bbox_s = card_draw.textbbox((0, 0), subtitle, font=sub_font)
    sw = bbox_s[2] - bbox_s[0]
    card_draw.text(((card_w - sw) // 2, 230), subtitle, font=sub_font, fill=(209, 250, 229))

    # Save Output
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    card.save(output_path, "WEBP", quality=92)
    print(f"Generated: {output_path} ({card_w}x{card_h})")

def main():
    target_dir = "/Users/rakaiwangsasatia/journey-web/public/images/screenshots"
    # The source raw sanitized screenshots are stored temporarily or backed up
    # Let's read from the current tring_*.webp files before overwriting them
    cards = [
        (
            "tring_1.webp",
            "1st Anniversary Milestone",
            "Terima Kasih >7 Juta Nasabah • Biometrics & Auth"
        ),
        (
            "tring_2.webp",
            "Tabungan & Cicil Emas",
            "Investasi Real-Time dengan Spread Transparan"
        ),
        (
            "tring_3.webp",
            "Portofolio & Aset Finansial",
            "Ringkasan Total Aset Emas & Pinjaman Gadai"
        ),
        (
            "tring_4.webp",
            "Beli Tabungan Emas Instan",
            "Mulai Investasi dengan Mudah dari Rp 10.000"
        ),
        (
            "tring_5.webp",
            "Loyalty & Poin Reward",
            "Kumpulkan Poin Transaksi & Tukarkan Hadiah"
        ),
    ]

    # Save to a temporary dir first, then move into target_dir
    tmp_out = "/Users/rakaiwangsasatia/.gemini/antigravity-ide/brain/0c23ecb2-64ae-4a54-972d-614204e86479/scratch/tring_cards"
    os.makedirs(tmp_out, exist_ok=True)

    for filename, title, subtitle in cards:
        src = os.path.join(target_dir, filename)
        tmp_dst = os.path.join(tmp_out, filename)
        create_tring_card(src, title, subtitle, tmp_dst)

    # Now copy all generated cards over target_dir
    for filename, _, _ in cards:
        src = os.path.join(tmp_out, filename)
        dst = os.path.join(target_dir, filename)
        im = Image.open(src)
        im.save(dst, "WEBP", quality=92)
        print(f"Updated in public: {dst} (size: {im.size})")

if __name__ == "__main__":
    main()
