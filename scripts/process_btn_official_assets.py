import os
from PIL import Image

def process_btn_assets():
    source_dir = "/Users/rakaiwangsasatia/.gemini/antigravity-ide/brain/0c23ecb2-64ae-4a54-972d-614204e86479/scratch/btn"
    output_dir = "/Users/rakaiwangsasatia/journey-web/public/images/screenshots"
    os.makedirs(output_dir, exist_ok=True)

    mappings = [
        ("btn_official_1.jpg", "bale_4.webp"),
        ("btn_official_5.jpg", "bale_5.webp")
    ]

    for src_name, dst_name in mappings:
        src_path = os.path.join(source_dir, src_name)
        dst_path = os.path.join(output_dir, dst_name)
        if not os.path.exists(src_path):
            print(f"Error: {src_path} not found")
            continue

        im = Image.open(src_path).convert("RGB")
        im.save(dst_path, "WEBP", quality=92)
        print(f"Converted: {src_name} -> {dst_path} (size: {im.size})")

if __name__ == "__main__":
    process_btn_assets()
