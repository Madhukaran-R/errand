from PIL import Image
import os

base_dir = os.path.join(os.getcwd(), 'public')
images = [
    ('og-image-poster.png', [(1200,630),(600,315)]),
    ('og-image-square-poster.png', [(800,800),(400,400)])
]

os.makedirs(os.path.join(base_dir,'og_variants'), exist_ok=True)

for name, sizes in images:
    src = os.path.join(base_dir, name)
    if not os.path.exists(src):
        print('missing', src)
        continue
    img = Image.open(src).convert('RGB')
    for w,h in sizes:
        out_png = os.path.join(base_dir, 'og_variants', f"{os.path.splitext(name)[0]}_{w}x{h}.png")
        out_webp = os.path.join(base_dir, 'og_variants', f"{os.path.splitext(name)[0]}_{w}x{h}.webp")
        resized = img.resize((w,h), Image.LANCZOS)
        resized.save(out_png, format='PNG', optimize=True)
        resized.save(out_webp, format='WEBP', quality=80, method=6)
        print('created', out_png, out_webp)

# Also create compressed versions of originals (re-save optimized)
for name,_ in images:
    src = os.path.join(base_dir, name)
    if not os.path.exists(src):
        continue
    img = Image.open(src).convert('RGB')
    optimized_png = os.path.join(base_dir, f"{os.path.splitext(name)[0]}.opt.png")
    optimized_webp = os.path.join(base_dir, f"{os.path.splitext(name)[0]}.webp")
    img.save(optimized_png, format='PNG', optimize=True)
    img.save(optimized_webp, format='WEBP', quality=80, method=6)
    print('optimized', optimized_png, optimized_webp)
