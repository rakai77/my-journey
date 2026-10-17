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

def generate_card_rm_satu(output_path: str):
    w, h = 1000, 1778
    img = Image.new("RGB", (w, h), (11, 15, 29))
    draw = ImageDraw.Draw(img)

    # 1. Background Gradient (Deep Navy to Rich Indigo/Violet)
    for y in range(h):
        f = y / h
        r = int(10 * (1 - f) + 20 * f)
        g = int(14 * (1 - f) + 16 * f)
        b = int(28 * (1 - f) + 48 * f)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Ambient Glows
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([100, 350, 900, 1200], fill=(59, 130, 246, 50))
    g_draw.ellipse([250, 700, 850, 1500], fill=(139, 92, 246, 45))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    img.paste(glow, (0, 0), glow)

    draw = ImageDraw.Draw(img)

    # Fonts
    title_font = get_system_font("Arial Bold", 52)
    sub_font = get_system_font("Arial", 28)
    badge_font = get_system_font("Arial Bold", 26)
    section_font = get_system_font("Arial Bold", 32)
    mono_font = get_system_font("Courier Bold", 22)
    body_font = get_system_font("Arial", 22)

    # Header Texts
    brand = "BANK MANDIRI ENTERPRISE"
    card_title = "RM Satu Tools"
    card_sub = "Compose Multiplatform • Relationship Manager Suite"

    draw.text((w // 2, 80), brand, font=badge_font, fill=(6, 182, 212), anchor="mm")
    draw.text((w // 2, 145), card_title, font=title_font, fill=(255, 255, 255), anchor="mm")
    draw.text((w // 2, 210), card_sub, font=sub_font, fill=(196, 181, 253), anchor="mm")

    # Main Device Container (Simulating Phone & CMP Shell)
    cx1, cy1, cx2, cy2 = 80, 280, 920, 1680
    draw_glass_panel(draw, [cx1, cy1, cx2, cy2], (15, 23, 42, 230), (71, 85, 105, 180), radius=44, border_width=3)

    # Status Bar
    draw.text((120, 320), "09:41", font=badge_font, fill=(226, 232, 240))
    draw.text((880, 320), "5G  100%", font=badge_font, fill=(226, 232, 240), anchor="ra")

    # App Bar
    draw_glass_panel(draw, [110, 360, 890, 440], (30, 41, 59, 220), (51, 65, 85), radius=20)
    draw.text((140, 400), "RM Satu Hub • Corporate & Commercial", font=badge_font, fill=(255, 255, 255), anchor="lm")
    draw.rectangle([820, 385, 860, 415], fill=(59, 130, 246))
    draw.text((840, 400), "CMP", font=mono_font, fill=(255, 255, 255), anchor="mm")

    # Metric Cards Row
    m1_box = [110, 465, 485, 605]
    draw_glass_panel(draw, m1_box, (30, 58, 138, 140), (59, 130, 246, 160), radius=24)
    draw.text((135, 500), "ACTIVE PORTFOLIO", font=mono_font, fill=(147, 197, 253))
    draw.text((135, 545), "Rp 48.6 B", font=title_font, fill=(255, 255, 255))
    draw.text((135, 580), "+14.2% MoM Expansion", font=body_font, fill=(52, 211, 153))

    m2_box = [515, 465, 890, 605]
    draw_glass_panel(draw, m2_box, (46, 16, 101, 140), (168, 85, 247, 160), radius=24)
    draw.text((540, 500), "PIPELINE LEADS", font=mono_font, fill=(216, 180, 254))
    draw.text((540, 545), "42 Enterprise", font=title_font, fill=(255, 255, 255))
    draw.text((540, 580), "8 Ready for Approval", font=body_font, fill=(245, 158, 11))

    # Pipeline Funnel Visualization
    draw.text((115, 640), "CREDIT SIMULATION & PIPELINE FUNNEL", font=section_font, fill=(248, 250, 252))
    funnel_box = [110, 675, 890, 940]
    draw_glass_panel(draw, funnel_box, (15, 23, 42, 220), (51, 65, 85, 200), radius=26)

    stages = [
        ("1. Data Ingestion & KYC", "Auto-verified via e-KYC service", (59, 130, 246)),
        ("2. Multi-Tier Credit Rating", "Scoring: AA+ (Risk Ratio 1.8%)", (16, 185, 129)),
        ("3. Limit & Tenor Simulation", "Dynamic Cash Flow Projection", (245, 158, 11)),
        ("4. Committee Approval Sync", "Digital Dossier Ready for Review", (168, 85, 247))
    ]
    for i, (st_name, st_detail, st_color) in enumerate(stages):
        sy = 700 + i * 56
        draw.ellipse([140, sy + 6, 162, sy + 28], fill=st_color)
        draw.text((180, sy + 7), st_name, font=mono_font, fill=(255, 255, 255))
        draw.text((520, sy + 7), st_detail, font=body_font, fill=(148, 163, 184))

    # Compose Multiplatform Architecture Highlights
    draw.text((115, 975), "COMPOSE MULTIPLATFORM (CMP) FOUNDATION", font=section_font, fill=(248, 250, 252))
    cmp_box = [110, 1010, 890, 1340]
    draw_glass_panel(draw, cmp_box, (30, 41, 59, 180), (71, 85, 105, 180), radius=26)

    cmp_features = [
        ("100% Shared Kotlin UI", "Zero UI divergence between Android tablet and desktop apps."),
        ("Reactive State Flow", "MVI architecture ensuring atomic state updates across threads."),
        ("Offline-First Room KMP", "Local cache synchronizing RM drafts seamlessly with central server."),
        ("Enterprise Security", "Hardware keystore encryption & biometric session lock.")
    ]
    for i, (f_title, f_desc) in enumerate(cmp_features):
        fy = 1030 + i * 72
        draw_glass_panel(draw, [130, fy, 870, fy + 60], (15, 23, 42, 190), (51, 65, 85, 160), radius=16)
        draw.text((150, fy + 16), f_title, font=mono_font, fill=(6, 182, 212))
        draw.text((430, fy + 18), f_desc, font=body_font, fill=(203, 213, 225))

    # Action Footnote
    draw_glass_panel(draw, [110, 1365, 890, 1485], (88, 28, 135, 140), (168, 85, 247, 180), radius=22)
    draw.text((140, 1400), "DEPLOYMENT: INTERNAL MANDIRI PRODUCTION", font=mono_font, fill=(233, 213, 255))
    draw.text((140, 1440), "Empowering 2,500+ Relationship Managers nationwide", font=body_font, fill=(255, 255, 255))

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "WEBP", quality=92)
    print(f"Generated {output_path}")

def generate_card_code_review(output_path: str):
    w, h = 1000, 1778
    img = Image.new("RGB", (w, h), (10, 14, 26))
    draw = ImageDraw.Draw(img)

    for y in range(h):
        f = y / h
        r = int(12 * (1 - f) + 22 * f)
        g = int(10 * (1 - f) + 14 * f)
        b = int(28 * (1 - f) + 40 * f)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Glows
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([80, 300, 920, 1100], fill=(139, 92, 246, 55))
    g_draw.ellipse([200, 800, 850, 1550], fill=(6, 182, 212, 45))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    img.paste(glow, (0, 0), glow)

    draw = ImageDraw.Draw(img)

    title_font = get_system_font("Arial Bold", 52)
    sub_font = get_system_font("Arial", 28)
    badge_font = get_system_font("Arial Bold", 26)
    section_font = get_system_font("Arial Bold", 32)
    mono_font = get_system_font("Courier Bold", 22)
    mono_small = get_system_font("Courier", 20)
    body_font = get_system_font("Arial", 22)

    draw.text((w // 2, 80), "AUTONOMOUS AGENTIC WORKFLOW", font=badge_font, fill=(168, 85, 247), anchor="mm")
    draw.text((w // 2, 145), "AI Code Review & PR", font=title_font, fill=(255, 255, 255), anchor="mm")
    draw.text((w // 2, 210), "Claude Code • Google Antigravity • Codex", font=sub_font, fill=(165, 243, 252), anchor="mm")

    cx1, cy1, cx2, cy2 = 80, 280, 920, 1680
    draw_glass_panel(draw, [cx1, cy1, cx2, cy2], (15, 23, 42, 230), (71, 85, 105, 180), radius=44, border_width=3)

    # Top Terminal Header
    draw_glass_panel(draw, [110, 310, 890, 375], (30, 41, 59, 220), (51, 65, 85), radius=18)
    draw.ellipse([135, 335, 151, 351], fill=(239, 68, 68))
    draw.ellipse([163, 335, 179, 351], fill=(245, 158, 11))
    draw.ellipse([191, 335, 207, 351], fill=(34, 197, 94))
    draw.text((230, 343), "agy & claude-code: pr-review --strict-banking", font=mono_font, fill=(226, 232, 240))

    # Code Diff Window
    draw.text((115, 400), "INTELLIGENT DIFF ANALYSIS & SECURITY AUDIT", font=section_font, fill=(248, 250, 252))
    diff_box = [110, 440, 890, 860]
    draw_glass_panel(draw, diff_box, (10, 15, 30, 240), (51, 65, 85, 200), radius=22)

    diff_lines = [
        ("@@ -142,8 +142,12 @@ fun calculateTenorQuota(...) {", (148, 163, 184)),
        ("-   val rawRate = interestRate * amount / 12", (248, 113, 113)),
        ("+   // Refactored with high-precision BigDecimal for financial safety", (74, 222, 128)),
        ("+   val preciseAmount = BigDecimal.valueOf(amount)", (74, 222, 128)),
        ("+   val rawRate = preciseAmount.multiply(interestRate)", (74, 222, 128)),
        ("+       .divide(BigDecimal.valueOf(12), 4, RoundingMode.HALF_UP)", (74, 222, 128)),
        ("    return rawRate.toPlainString()", (226, 232, 240)),
        ("@@ AGY Agent Insight: Zero Floating-Point Precision Loss Guaranteed @@", (192, 132, 252)),
        (">> Automated Unit Tests Synthesized: 6 test cases (100% boundary check)", (56, 189, 248))
    ]
    for i, (line, col) in enumerate(diff_lines):
        draw.text((130, 465 + i * 41), line, font=mono_small, fill=col)

    # PR Automation Box
    draw.text((115, 895), "AUTONOMOUS PULL REQUEST (PR) SYNTHESIS", font=section_font, fill=(248, 250, 252))
    pr_box = [110, 935, 890, 1260]
    draw_glass_panel(draw, pr_box, (30, 41, 59, 180), (71, 85, 105, 180), radius=24)

    pr_items = [
        ("Title Auto-Generated:", "feat(rm-tools): high-precision credit calculation & CMP migration"),
        ("Changelog Extraction:", "Replaced Float math with BigDecimal; verified nullability safety."),
        ("Test Verification Plan:", "Ran ./gradlew testCMP - 48 passed, 0 failed, 100% coverage."),
        ("Compliance Check:", "OWASP Mobile Top 10 + Bank Mandiri Secure Coding standards verified.")
    ]
    for i, (lbl, val) in enumerate(pr_items):
        py = 955 + i * 72
        draw.text((135, py), lbl, font=mono_font, fill=(168, 85, 247))
        draw.text((135, py + 28), val, font=body_font, fill=(226, 232, 240))

    # Impact Statistics Box
    draw.text((115, 1290), "DAILY VELOCITY ACCELERATION", font=section_font, fill=(248, 250, 252))
    stat_box = [110, 1325, 890, 1495]
    draw_glass_panel(draw, stat_box, (15, 23, 42, 220), (59, 130, 246, 160), radius=22)

    stats = [
        ("-60%", "PR Cycle Time", (56, 189, 248)),
        ("0", "Lint Defects", (74, 222, 128)),
        ("100%", "Test Clarity", (192, 132, 252))
    ]
    for i, (num, label, color) in enumerate(stats):
        bx = 140 + i * 255
        draw.text((bx + 100, 1380), num, font=title_font, fill=color, anchor="mm")
        draw.text((bx + 100, 1440), label, font=badge_font, fill=(203, 213, 225), anchor="mm")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "WEBP", quality=92)
    print(f"Generated {output_path}")

def generate_card_jenkins(output_path: str):
    w, h = 1000, 1778
    img = Image.new("RGB", (w, h), (10, 15, 26))
    draw = ImageDraw.Draw(img)

    for y in range(h):
        f = y / h
        r = int(10 * (1 - f) + 16 * f)
        g = int(18 * (1 - f) + 32 * f)
        b = int(32 * (1 - f) + 48 * f)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([100, 350, 900, 1150], fill=(16, 185, 129, 50))
    g_draw.ellipse([250, 750, 850, 1550], fill=(59, 130, 246, 45))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    img.paste(glow, (0, 0), glow)

    draw = ImageDraw.Draw(img)

    title_font = get_system_font("Arial Bold", 52)
    sub_font = get_system_font("Arial", 28)
    badge_font = get_system_font("Arial Bold", 26)
    section_font = get_system_font("Arial Bold", 32)
    mono_font = get_system_font("Courier Bold", 22)
    body_font = get_system_font("Arial", 22)

    draw.text((w // 2, 80), "AUTOMATED ORCHESTRATION", font=badge_font, fill=(52, 211, 153), anchor="mm")
    draw.text((w // 2, 145), "Jenkins CI/CD Automation", font=title_font, fill=(255, 255, 255), anchor="mm")
    draw.text((w // 2, 210), "Agentic Triggering • Build Verification • Release", font=sub_font, fill=(187, 247, 208), anchor="mm")

    cx1, cy1, cx2, cy2 = 80, 280, 920, 1680
    draw_glass_panel(draw, [cx1, cy1, cx2, cy2], (15, 23, 42, 230), (71, 85, 105, 180), radius=44, border_width=3)

    # Pipeline Trigger Status
    draw_glass_panel(draw, [110, 320, 890, 420], (30, 41, 59, 220), (51, 65, 85), radius=20)
    draw.text((140, 350), "Pipeline: RM-Satu-Tools-CMP-Multiplatform", font=mono_font, fill=(255, 255, 255))
    draw.text((140, 385), "Trigger: Autonomous AI Agent Hook (Build #1842)", font=body_font, fill=(52, 211, 153))
    draw_glass_panel(draw, [760, 345, 870, 395], (16, 185, 129, 200), (34, 197, 94), radius=12)
    draw.text((815, 370), "SUCCESS", font=mono_font, fill=(255, 255, 255), anchor="mm")

    # Pipeline Stages Flowchart
    draw.text((115, 460), "MULTI-STAGE PIPELINE EXECUTION", font=section_font, fill=(248, 250, 252))
    p_box = [110, 500, 890, 980]
    draw_glass_panel(draw, p_box, (15, 23, 42, 220), (51, 65, 85, 200), radius=26)

    stages = [
        ("Stage 1: Declarative Lint & Code Quality", "1m 12s", "SonarQube & Detekt - 0 Critical Issues", (34, 197, 94)),
        ("Stage 2: Composite Unit Tests", "2m 45s", "100% Android & JVM Desktop Tests Passed", (34, 197, 94)),
        ("Stage 3: Compose Multiplatform Assemble", "4m 10s", "APK (Android) & DMG/Jar (Desktop) Built", (34, 197, 94)),
        ("Stage 4: Automated Security & Keystore Sign", "1m 30s", "Enterprise Mandiri Signature Embedded", (34, 197, 94)),
        ("Stage 5: Notification & Artifact Archive", "20s", "Nexus Registry & Slack Deployment Bot Sent", (34, 197, 94))
    ]
    for i, (s_title, s_dur, s_desc, s_color) in enumerate(stages):
        sy = 525 + i * 88
        draw_glass_panel(draw, [130, sy, 870, sy + 74], (30, 41, 59, 180), (51, 65, 85, 160), radius=16)
        draw.ellipse([150, sy + 25, 172, sy + 47], fill=s_color)
        draw.text((190, sy + 22), s_title, font=mono_font, fill=(255, 255, 255))
        draw.text((760, sy + 22), s_dur, font=mono_font, fill=(148, 163, 184))
        draw.text((190, sy + 48), s_desc, font=body_font, fill=(203, 213, 225))

    # Agent Automation Benefits
    draw.text((115, 1020), "AGENTIC ORCHESTRATION ADVANTAGES", font=section_font, fill=(248, 250, 252))
    adv_box = [110, 1060, 890, 1420]
    draw_glass_panel(draw, adv_box, (30, 41, 59, 180), (71, 85, 105, 180), radius=24)

    advs = [
        ("Hands-Free Triggering:", "Dispatch builds from CLI using Claude Code & Antigravity scripts."),
        ("Log Analysis AI Agent:", "Instantly extracts stack traces and diagnoses root causes if tests fail."),
        ("Automated Deployment Hooks:", "Publishes build artifacts directly to internal beta testing channels."),
        ("Zero Context Switching:", "Engineers stay in their editor while CI completes end-to-end.")
    ]
    for i, (a_head, a_desc) in enumerate(advs):
        ay = 1085 + i * 82
        draw.text((140, ay), a_head, font=mono_font, fill=(52, 211, 153))
        draw.text((140, ay + 28), a_desc, font=body_font, fill=(226, 232, 240))

    # Bottom Tag
    draw_glass_panel(draw, [110, 1450, 890, 1530], (16, 185, 129, 140), (52, 211, 153, 180), radius=20)
    draw.text((w // 2, 1490), "Fully Automated CI/CD Lifecycle • Zero Manual Dispatch", font=badge_font, fill=(255, 255, 255), anchor="mm")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "WEBP", quality=92)
    print(f"Generated {output_path}")

def generate_card_jira(output_path: str):
    w, h = 1000, 1778
    img = Image.new("RGB", (w, h), (14, 15, 27))
    draw = ImageDraw.Draw(img)

    for y in range(h):
        f = y / h
        r = int(14 * (1 - f) + 24 * f)
        g = int(16 * (1 - f) + 20 * f)
        b = int(36 * (1 - f) + 54 * f)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([80, 350, 920, 1150], fill=(245, 158, 11, 45))
    g_draw.ellipse([200, 800, 850, 1550], fill=(59, 130, 246, 50))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    img.paste(glow, (0, 0), glow)

    draw = ImageDraw.Draw(img)

    title_font = get_system_font("Arial Bold", 52)
    sub_font = get_system_font("Arial", 28)
    badge_font = get_system_font("Arial Bold", 26)
    section_font = get_system_font("Arial Bold", 32)
    mono_font = get_system_font("Courier Bold", 22)
    body_font = get_system_font("Arial", 22)

    draw.text((w // 2, 80), "SPRINT HYGIENE & BACKLOG FLOW", font=badge_font, fill=(251, 191, 36), anchor="mm")
    draw.text((w // 2, 145), "Jira Daily Ticket & Sync", font=title_font, fill=(255, 255, 255), anchor="mm")
    draw.text((w // 2, 210), "Codex • Backlog Grooming • Automated Linking", font=sub_font, fill=(253, 230, 138), anchor="mm")

    cx1, cy1, cx2, cy2 = 80, 280, 920, 1680
    draw_glass_panel(draw, [cx1, cy1, cx2, cy2], (15, 23, 42, 230), (71, 85, 105, 180), radius=44, border_width=3)

    # Active Ticket Header
    draw_glass_panel(draw, [110, 320, 890, 470], (30, 41, 59, 220), (51, 65, 85), radius=22)
    draw.text((140, 355), "JIRA-4812 • BANK MANDIRI RM SPRINT 24", font=mono_font, fill=(251, 191, 36))
    draw.text((140, 395), "Implement Offline Cache for RM Client Portfolio in CMP", font=section_font, fill=(255, 255, 255))
    draw.text((140, 435), "Status: IN REVIEW • Assignee: Mid-Senior Mobile Engineer", font=body_font, fill=(148, 163, 184))

    # Acceptance Criteria Checklist
    draw.text((115, 505), "AUTOMATED ACCEPTANCE CRITERIA DECOMPOSITION", font=section_font, fill=(248, 250, 252))
    ac_box = [110, 545, 890, 880]
    draw_glass_panel(draw, ac_box, (15, 23, 42, 220), (51, 65, 85, 200), radius=24)

    checks = [
        ("[DONE] Define Room KMP database schema for local portfolio entities", (34, 197, 94)),
        ("[DONE] Implement Mutex-protected Flow queries for background refresh", (34, 197, 94)),
        ("[DONE] Unit test offline fallback when cellular connection drops", (34, 197, 94)),
        ("[DONE] Ensure Keystore biometric auth required before local decrypt", (34, 197, 94)),
        ("[DONE] Link PR #348 and automated Jenkins build artifacts to ticket", (34, 197, 94))
    ]
    for i, (chk, col) in enumerate(checks):
        draw.text((135, 575 + i * 58), chk, font=body_font, fill=col)

    # Daily Standup AI Synthesis
    draw.text((115, 915), "AUTOMATED DAILY STANDUP & COMMIT LINKING", font=section_font, fill=(248, 250, 252))
    su_box = [110, 955, 890, 1310]
    draw_glass_panel(draw, su_box, (30, 41, 59, 180), (71, 85, 105, 180), radius=24)

    standup_points = [
        ("Yesterday Completed:", "Shipped 3 CMP modules, closed JIRA-4810, verified PR #347."),
        ("Today Focus:", "Finalize Room KMP cache synchronization and PR review for JIRA-4812."),
        ("Blockers:", "None. Jenkins CI build passing consistently across targets."),
        ("Git Traceability:", "100% commits linked with Jira ticket IDs automatically via CLI hooks.")
    ]
    for i, (lbl, val) in enumerate(standup_points):
        sy = 980 + i * 80
        draw.text((140, sy), lbl, font=mono_font, fill=(251, 191, 36))
        draw.text((140, sy + 28), val, font=body_font, fill=(226, 232, 240))

    # Summary Benefit
    draw.text((115, 1345), "ENGINEERING VELOCITY IMPACT", font=section_font, fill=(248, 250, 252))
    ben_box = [110, 1385, 890, 1515]
    draw_glass_panel(draw, ben_box, (46, 16, 101, 160), (168, 85, 247, 180), radius=22)
    draw.text((140, 1425), "Saves 45+ minutes daily of administrative Jira overhead", font=badge_font, fill=(255, 255, 255))
    draw.text((140, 1465), "Ensures total alignment between sprint boards and git repositories", font=body_font, fill=(216, 180, 254))

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "WEBP", quality=92)
    print(f"Generated {output_path}")

def generate_card_journey_web(output_path: str):
    w, h = 1000, 1778
    img = Image.new("RGB", (w, h), (9, 13, 24))
    draw = ImageDraw.Draw(img)

    for y in range(h):
        f = y / h
        r = int(9 * (1 - f) + 18 * f)
        g = int(13 * (1 - f) + 20 * f)
        b = int(24 * (1 - f) + 48 * f)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse([80, 300, 920, 1100], fill=(6, 182, 212, 50))
    g_draw.ellipse([200, 800, 850, 1550], fill=(236, 72, 153, 45))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    img.paste(glow, (0, 0), glow)

    draw = ImageDraw.Draw(img)

    title_font = get_system_font("Arial Bold", 52)
    sub_font = get_system_font("Arial", 28)
    badge_font = get_system_font("Arial Bold", 26)
    section_font = get_system_font("Arial Bold", 32)
    mono_font = get_system_font("Courier Bold", 22)
    body_font = get_system_font("Arial", 22)

    draw.text((w // 2, 80), "AGENTIC CO-ENGINEERED 3D WEB", font=badge_font, fill=(6, 182, 212), anchor="mm")
    draw.text((w // 2, 145), "Interactive 3D Portfolio", font=title_font, fill=(255, 255, 255), anchor="mm")
    draw.text((w // 2, 210), "Three.js • React • Tailwind • Google Antigravity", font=sub_font, fill=(251, 207, 232), anchor="mm")

    cx1, cy1, cx2, cy2 = 80, 280, 920, 1680
    draw_glass_panel(draw, [cx1, cy1, cx2, cy2], (15, 23, 42, 230), (71, 85, 105, 180), radius=44, border_width=3)

    # 3D Canvas Mockup Frame
    draw_glass_panel(draw, [110, 320, 890, 500], (30, 41, 59, 220), (51, 65, 85), radius=22)
    draw.text((140, 355), "CANVAS STAGE: THREE.JS & REACT THREE FIBER", font=mono_font, fill=(6, 182, 212))
    draw.text((140, 400), "Physics-Driven Drag & Tilt • 60 FPS", font=section_font, fill=(255, 255, 255))
    draw.text((140, 445), "Specular Glare • Multi-Layer Parallax • Ambient Aura", font=body_font, fill=(148, 163, 184))

    # Architecture Breakdown
    draw.text((115, 535), "ARCHITECTURAL LAYERS & DESIGN TOKENS", font=section_font, fill=(248, 250, 252))
    arch_box = [110, 575, 890, 940]
    draw_glass_panel(draw, arch_box, (15, 23, 42, 220), (51, 65, 85, 200), radius=24)

    tech_layers = [
        ("Layer 1: 3D Graphics Core", "R3F canvas, stars field, photorealistic studio lighting."),
        ("Layer 2: Interactive Showcase", "Pointer tracking, spring damping, touch-drag inertia."),
        ("Layer 3: Single Source of Truth", "TypeScript data contracts, strict timeline isolation."),
        ("Layer 4: Responsive Glassmorphism", "Tailwind tokens, backdrop-filter, retina WebP assets.")
    ]
    for i, (t_title, t_desc) in enumerate(tech_layers):
        ty = 600 + i * 80
        draw_glass_panel(draw, [130, ty, 870, ty + 66], (30, 41, 59, 180), (51, 65, 85, 160), radius=16)
        draw.text((150, ty + 18), t_title, font=mono_font, fill=(236, 72, 153))
        draw.text((450, ty + 20), t_desc, font=body_font, fill=(226, 232, 240))

    # Co-Engineering Highlights
    draw.text((115, 975), "AI CO-ENGINEERING METHODOLOGY", font=section_font, fill=(248, 250, 252))
    meth_box = [110, 1015, 890, 1375]
    draw_glass_panel(draw, meth_box, (30, 41, 59, 180), (71, 85, 105, 180), radius=24)

    meths = [
        ("Google Antigravity Agent:", "Pair programming for fast component scaffolding & 3D math."),
        ("Rigorous Planning Protocol:", "Executing with /plan and /grill-me for rock-solid UX."),
        ("Asset Optimization Pipeline:", "Automated WebP generation script ensuring ultra-fast load times."),
        ("Strict Lint & Type Safety:", "Zero any types, strict separation between 2D and 3D layers.")
    ]
    for i, (m_head, m_desc) in enumerate(meths):
        my = 1040 + i * 82
        draw.text((140, my), m_head, font=mono_font, fill=(6, 182, 212))
        draw.text((140, my + 28), m_desc, font=body_font, fill=(226, 232, 240))

    # Bottom Tag
    draw_glass_panel(draw, [110, 1410, 890, 1500], (6, 182, 212, 140), (56, 189, 248, 180), radius=20)
    draw.text((w // 2, 1455), "Modern Software Engineer Journey • Production-Ready Portfolio", font=badge_font, fill=(255, 255, 255), anchor="mm")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "WEBP", quality=92)
    print(f"Generated {output_path}")

def main():
    out_dir = "/Users/rakaiwangsasatia/journey-web/public/images/screenshots"
    generate_card_rm_satu(os.path.join(out_dir, "ai_1.webp"))
    generate_card_code_review(os.path.join(out_dir, "ai_2.webp"))
    generate_card_jenkins(os.path.join(out_dir, "ai_3.webp"))
    generate_card_jira(os.path.join(out_dir, "ai_4.webp"))
    generate_card_journey_web(os.path.join(out_dir, "ai_5.webp"))
    print("All Phase 6 AI Engineering showcase cards generated successfully!")

if __name__ == "__main__":
    main()
