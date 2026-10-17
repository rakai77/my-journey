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

def draw_glass_panel(draw, bbox, fill_color, border_color, radius=24, border_width=2):
    draw.rounded_rectangle(bbox, radius=radius, fill=fill_color, outline=border_color, width=border_width)

def create_desktop_window_card(
    src_img_path: str,
    badge_text: str,
    title_text: str,
    subtitle_text: str,
    output_path: str,
    url_text: str = "https://rakai.dev/portfolio • 60 FPS WebGL",
    feature_bullets: list = None,
    accent_color = (6, 182, 212),
    glow_color = (139, 92, 246)
):
    w, h = 1000, 1778
    img = Image.new("RGB", (w, h), (11, 15, 29))
    draw = ImageDraw.Draw(img)

    # 1. Dark Gradient Background
    for y in range(h):
        f = y / h
        r = int(10 * (1 - f) + 20 * f)
        g = int(14 * (1 - f) + 16 * f)
        b = int(28 * (1 - f) + 48 * f)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Ambient Glows
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([80, 250, 920, 1050], fill=(glow_color[0], glow_color[1], glow_color[2], 55))
    g_draw.ellipse([180, 750, 850, 1550], fill=(accent_color[0], accent_color[1], accent_color[2], 45))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    img.paste(glow, (0, 0), glow)

    draw = ImageDraw.Draw(img)

    # Fonts
    title_font = get_system_font("Arial Bold", 50)
    sub_font = get_system_font("Arial", 28)
    badge_font = get_system_font("Arial Bold", 26)
    section_font = get_system_font("Arial Bold", 30)
    mono_font = get_system_font("Courier Bold", 20)
    body_font = get_system_font("Arial", 22)

    # Top Header Texts
    draw.text((w // 2, 75), badge_text, font=badge_font, fill=accent_color, anchor="mm")
    draw.text((w // 2, 140), title_text, font=title_font, fill=(255, 255, 255), anchor="mm")
    draw.text((w // 2, 205), subtitle_text, font=sub_font, fill=(216, 180, 254), anchor="mm")

    # Outer Container Glass Chassis
    cx1, cy1, cx2, cy2 = 60, 265, 940, 1695
    draw_glass_panel(draw, [cx1, cy1, cx2, cy2], (15, 23, 42, 230), (71, 85, 105, 180), radius=40, border_width=3)

    # Browser Window Mockup Frame
    bx1, by1, bx2, by2 = 90, 305, 910, 930
    draw_glass_panel(draw, [bx1, by1, bx2, by2], (20, 27, 45, 255), (71, 85, 105, 220), radius=24, border_width=2)

    # Browser Title Bar
    draw_glass_panel(draw, [bx1, by1, bx2, by1 + 52], (30, 41, 59, 255), (51, 65, 85, 200), radius=24)
    # Window Dots
    draw.ellipse([bx1 + 22, by1 + 18, bx1 + 38, by1 + 34], fill=(239, 68, 68))
    draw.ellipse([bx1 + 48, by1 + 18, bx1 + 64, by1 + 34], fill=(245, 158, 11))
    draw.ellipse([bx1 + 74, by1 + 18, bx1 + 90, by1 + 34], fill=(34, 197, 94))

    # URL Bar in Window
    draw_glass_panel(draw, [bx1 + 120, by1 + 10, bx2 - 20, by1 + 42], (15, 23, 42, 220), (51, 65, 85, 180), radius=12)
    draw.text((bx1 + 140, by1 + 26), url_text, font=mono_font, fill=(148, 163, 184), anchor="lm")

    # Load & Paste Desktop Screenshot inside Browser Window
    if os.path.exists(src_img_path):
        src_im = Image.open(src_img_path).convert("RGBA")
        win_content_w = bx2 - bx1
        win_content_h = by2 - (by1 + 52)
        
        # Crop or fit keeping aspect ratio
        src_w, src_h = src_im.size
        scale = max(win_content_w / src_w, win_content_h / src_h)
        nw, nh = int(src_w * scale), int(src_h * scale)
        resized = src_im.resize((nw, nh), Image.Resampling.LANCZOS)
        
        # Center crop
        left = (nw - win_content_w) // 2
        top = (nh - win_content_h) // 2
        cropped = resized.crop((left, top, left + win_content_w, top + win_content_h))
        
        # Bottom rounded mask
        mask = Image.new("L", (win_content_w, win_content_h), 255)
        m_draw = ImageDraw.Draw(mask)
        m_draw.rectangle([0, win_content_h - 24, win_content_w, win_content_h], fill=255)
        
        img.paste(cropped, (bx1, by1 + 52))

    draw = ImageDraw.Draw(img)

    # Feature Bullets Panel
    draw.text((95, 960), "ARCHITECTURAL HIGHLIGHTS & CAPABILITIES", font=section_font, fill=(248, 250, 252))
    bullets_box = [90, 1000, 910, 1500]
    draw_glass_panel(draw, bullets_box, (15, 23, 42, 220), (51, 65, 85, 200), radius=26)

    bullets = feature_bullets or [
        ("Three.js & React Three Fiber:", "Real-time 3D canvas stage with photorealistic studio lighting."),
        ("Physics Drag & Tilt:", "Pointer tracking with spring damping, specular sheen, and parallax."),
        ("Strict Clean Architecture:", "Decoupled 2D UI and 3D graphics layers adhering to AGENTS.md rules."),
        ("Ultra-Fast Performance:", "Optimized bundle splitting, Draco/WebP textures, and 60 FPS fluidity.")
    ]

    for i, (b_title, b_desc) in enumerate(bullets):
        by = 1030 + i * 110
        draw_glass_panel(draw, [115, by, 885, by + 90], (30, 41, 59, 180), (51, 65, 85, 160), radius=18)
        draw.text((140, by + 22), b_title, font=mono_font, fill=accent_color)
        draw.text((140, by + 54), b_desc, font=body_font, fill=(226, 232, 240))

    # Bottom Tag
    draw_glass_panel(draw, [90, 1535, 910, 1640], (88, 28, 135, 140), (168, 85, 247, 180), radius=22)
    draw.text((w // 2, 1570), "LIVE PRODUCTION APPLICATION", font=mono_font, fill=(233, 213, 255), anchor="mm")
    draw.text((w // 2, 1605), "Co-Engineered with Google Antigravity Autonomous Agent", font=body_font, fill=(255, 255, 255), anchor="mm")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "WEBP", quality=92)
    print(f"Generated {output_path}")

def create_mobile_device_card(
    src_img_path: str,
    badge_text: str,
    title_text: str,
    subtitle_text: str,
    output_path: str,
    feature_bullets: list = None,
    accent_color = (6, 182, 212),
    glow_color = (236, 72, 153)
):
    w, h = 1000, 1778
    img = Image.new("RGB", (w, h), (11, 15, 29))
    draw = ImageDraw.Draw(img)

    for y in range(h):
        f = y / h
        r = int(12 * (1 - f) + 22 * f)
        g = int(10 * (1 - f) + 14 * f)
        b = int(28 * (1 - f) + 40 * f)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([80, 250, 920, 1050], fill=(glow_color[0], glow_color[1], glow_color[2], 55))
    g_draw.ellipse([180, 750, 850, 1550], fill=(accent_color[0], accent_color[1], accent_color[2], 45))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    img.paste(glow, (0, 0), glow)

    draw = ImageDraw.Draw(img)

    title_font = get_system_font("Arial Bold", 50)
    sub_font = get_system_font("Arial", 28)
    badge_font = get_system_font("Arial Bold", 26)
    section_font = get_system_font("Arial Bold", 30)
    mono_font = get_system_font("Courier Bold", 20)
    body_font = get_system_font("Arial", 22)

    draw.text((w // 2, 75), badge_text, font=badge_font, fill=accent_color, anchor="mm")
    draw.text((w // 2, 140), title_text, font=title_font, fill=(255, 255, 255), anchor="mm")
    draw.text((w // 2, 205), subtitle_text, font=sub_font, fill=(251, 207, 232), anchor="mm")

    cx1, cy1, cx2, cy2 = 60, 265, 940, 1695
    draw_glass_panel(draw, [cx1, cy1, cx2, cy2], (15, 23, 42, 230), (71, 85, 105, 180), radius=40, border_width=3)

    # Smartphone Chassis Frame
    phone_w = 480
    phone_h = 1040
    phone_x = (w - phone_w) // 2
    phone_y = 300

    bezel_pad = 12
    bx1 = phone_x - bezel_pad
    by1 = phone_y - bezel_pad
    bx2 = phone_x + phone_w + bezel_pad
    by2 = phone_y + phone_h + bezel_pad
    draw_glass_panel(draw, [bx1, by1, bx2, by2], (15, 23, 42), (71, 85, 105, 200), radius=44, border_width=3)

    if os.path.exists(src_img_path):
        mob_im = Image.open(src_img_path).convert("RGBA")
        resized_mob = mob_im.resize((phone_w, phone_h), Image.Resampling.LANCZOS)
        
        mask = Image.new("L", (phone_w, phone_h), 0)
        m_draw = ImageDraw.Draw(mask)
        m_draw.rounded_rectangle([0, 0, phone_w, phone_h], radius=34, fill=255)
        
        img.paste(resized_mob, (phone_x, phone_y), mask)

    draw = ImageDraw.Draw(img)

    # Bottom Highlights
    draw.text((95, 1375), "MOBILE RESPONSIVE ARCHITECTURE", font=section_font, fill=(248, 250, 252))
    mob_box = [90, 1415, 910, 1650]
    draw_glass_panel(draw, mob_box, (15, 23, 42, 220), (51, 65, 85, 200), radius=24)

    mob_items = [
        ("Adaptive Layout Tokens:", "Seamless breakpoint scaling from mobile touch screens to 4K displays."),
        ("Touch Drag & Inertia:", "Hardware-accelerated touch swipe gestures and instant snap navigation.")
    ]
    for i, (m_h, m_d) in enumerate(mob_items):
        my = 1435 + i * 95
        draw_glass_panel(draw, [110, my, 890, my + 80], (30, 41, 59, 180), (51, 65, 85, 160), radius=16)
        draw.text((130, my + 18), m_h, font=mono_font, fill=accent_color)
        draw.text((130, my + 46), m_d, font=body_font, fill=(226, 232, 240))

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "WEBP", quality=92)
    print(f"Generated {output_path}")

def main():
    scratch_dir = "/Users/rakaiwangsasatia/.gemini/antigravity-ide/brain/0c23ecb2-64ae-4a54-972d-614204e86479/scratch"
    out_dir = "/Users/rakaiwangsasatia/journey-web/public/images/screenshots"

    shot1 = os.path.join(scratch_dir, "shot_1_overview.png")
    shot2 = os.path.join(scratch_dir, "shot_2_detail.png")
    shot3 = os.path.join(scratch_dir, "shot_3_architecture.png")
    shot4 = os.path.join(scratch_dir, "shot_4_contact.png")
    shot5 = os.path.join(scratch_dir, "shot_5_mobile.png")

    # Card 1: Desktop 3D Portfolio Stage & Hero
    create_desktop_window_card(
        src_img_path=shot1,
        badge_text="INTERACTIVE 3D WEB PORTFOLIO",
        title_text="3D Stage & Overview",
        subtitle_text="Three.js Canvas • React Three Fiber • Physics Drag & Tilt",
        output_path=os.path.join(out_dir, "ai_1.webp"),
        url_text="https://rakai.dev/portfolio • 3D Stage Active",
        feature_bullets=[
            ("Three.js & React Three Fiber:", "Real-time 3D canvas stage with photorealistic studio lighting."),
            ("Physics Drag & Tilt:", "Pointer tracking with spring damping, specular sheen, and parallax."),
            ("Clean Architecture:", "Strictly decoupled 2D UI and 3D graphics layers per AGENTS.md rules."),
            ("60 FPS WebGL Performance:", "Optimized scene tree, ambient stars, and GPU-driven rendering.")
        ],
        accent_color=(6, 182, 212),
        glow_color=(139, 92, 246)
    )

    # Card 2: Deep Dive Architecture Explorer
    create_desktop_window_card(
        src_img_path=shot2,
        badge_text="MULTI-TAB ENGINEERING EXPLORER",
        title_text="Deep Dive Architecture",
        subtitle_text="Executive Summary • Responsibilities • Challenges & Solutions",
        output_path=os.path.join(out_dir, "ai_2.webp"),
        url_text="https://rakai.dev/portfolio#deep-dive",
        feature_bullets=[
            ("Single Source of Truth:", "Domain data strictly isolated in journeyData.ts and TypeScript types."),
            ("Granular Engineering Tabs:", "Executive mission, core deliverables, metrics, and technical decisions."),
            ("Measurable Impact Cards:", "Quantified results on production scaling, users served, and adoption."),
            ("Instant State Synchrony:", "Zero latency between slide navigation and 3D camera transitions.")
        ],
        accent_color=(168, 85, 247),
        glow_color=(59, 130, 246)
    )

    # Card 3: Mobile Responsive Interface
    create_mobile_device_card(
        src_img_path=shot5,
        badge_text="RESPONSIVE MOBILE ENGINE",
        title_text="Adaptive Mobile Interface",
        subtitle_text="Fluid Design Tokens • Touch Gestures • Zero Layout Shift",
        output_path=os.path.join(out_dir, "ai_3.webp"),
        accent_color=(236, 72, 153),
        glow_color=(6, 182, 212)
    )

    # Card 4: Skills Matrix & Engineering Terminal
    create_desktop_window_card(
        src_img_path=shot4,
        badge_text="CORE COMPETENCIES & METRICS",
        title_text="Skills Matrix & Profile",
        subtitle_text="Mobile Engineering • Clean Architecture • AI & Emerging Tech",
        output_path=os.path.join(out_dir, "ai_4.webp"),
        url_text="https://rakai.dev/portfolio#contact",
        feature_bullets=[
            ("Mobile Engineering:", "Kotlin, Jetpack Compose, Android SDK, KMM, Java legacy systems."),
            ("Architecture & Design:", "Clean Architecture, MVVM & MVI, Multi-Module, Offline-First Room KMP."),
            ("Hardware & Core Protocols:", "Bluetooth BLE, ESC/POS thermal printers, EMV card dongles & EDC."),
            ("AI & Agentic Workflows:", "Claude Code, Google Antigravity, prompt engineering, CI/CD automation.")
        ],
        accent_color=(34, 197, 94),
        glow_color=(16, 185, 129)
    )

    # Card 5: Full 3D Canvas & Parallax Experience
    create_desktop_window_card(
        src_img_path=shot3,
        badge_text="AGENTIC CO-ENGINEERED 3D WEB",
        title_text="Autonomous AI Co-Dev",
        subtitle_text="Google Antigravity • Three.js • Continuous Verification",
        output_path=os.path.join(out_dir, "ai_5.webp"),
        url_text="https://rakai.dev/portfolio • Co-Engineered with AI",
        feature_bullets=[
            ("Google Antigravity Agent:", "Autonomous pair programming with rigorous planning and execution."),
            ("Continuous Build Validation:", "Automated linting and zero-error TypeScript builds at every step."),
            ("Retina Asset Generation:", "Automated WebP asset pipelines producing lightweight, crisp graphics."),
            ("State-of-the-Art UX:", "Dark glassmorphism, glowing neons, and fluid micro-animations.")
        ],
        accent_color=(245, 158, 11),
        glow_color=(139, 92, 246)
    )

    print("All 5 website screenshot cards generated successfully!")

if __name__ == "__main__":
    main()
