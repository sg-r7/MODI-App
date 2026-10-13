from PIL import Image
from pathlib import Path

source = Path('/home/ubuntu/webdev-static-assets/scorekeeper-icon.png')
output_dir = Path('/home/ubuntu/scorekeeper-ar/assets/images')
image = Image.open(source).convert('RGBA')
image.thumbnail((768, 768), Image.Resampling.LANCZOS)
for name in ['icon.png', 'splash-icon.png', 'favicon.png', 'android-icon-foreground.png']:
    image.save(output_dir / name, format='PNG', optimize=True, compress_level=9)
