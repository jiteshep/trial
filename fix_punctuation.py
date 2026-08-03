import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 1 & 2: Remove every em dash and en dash, replace with natural punctuation.
    # Note: En dash (–) and Em dash (—)
    
    # In some places they were used as separators. We can replace with comma or just space.
    content = content.replace("–", " to ") # Like in ages 21–35 -> 21 to 35
    content = content.replace("—", ",") # Like in "Rural development NGOs, women's SHG networks, FPOs and cooperatives — the richest pipeline" -> "...cooperatives, the richest pipeline"
    content = content.replace(" - ", ", ") # Space hyphen space
    content = content.replace(" – ", ", ")
    content = content.replace(" — ", ", ")
    
    # 6: Remove hyphens from specific words to rewrite them naturally.
    content = content.replace("ward-level", "ward level")
    content = content.replace("Ward-Level", "Ward Level")
    content = content.replace("ward-member", "ward member")
    content = content.replace("Ward-Member", "Ward Member")
    
    content = content.replace("technology-supported", "technology supported")
    content = content.replace("merit-driven", "merit driven")
    content = content.replace("merit-based", "merit based")
    content = content.replace("Self-help", "Self help")
    content = content.replace("self-help", "self help")
    content = content.replace("Technology-Led", "Technology Led")
    content = content.replace("panchayat-level", "panchayat level")
    
    content = content.replace("service-oriented", "service oriented")
    content = content.replace("participation-related", "participation related")
    content = content.replace("civic-tech", "civic tech")
    content = content.replace("election-process", "election process")
    content = content.replace("capacity-building", "capacity building")
    content = content.replace("election-related", "election related")
    content = content.replace("self-governance", "self governance")
    content = content.replace("youth (aged 21 to 35)", "youth aged 21 to 35")
    content = content.replace("youth (ages 21-35)", "youth aged 21 to 35")
    content = content.replace("21-35", "21 to 35")
    
    # Kannada hyphens
    content = content.replace("ಸ್ವ-ಆಡಳಿತದ", "ಸ್ವ ಆಡಳಿತದ")
    content = content.replace("ಸ್ವ-ಸಹಾಯ", "ಸ್ವ ಸಹಾಯ")
    content = content.replace("ತಂತ್ರಜ್ಞಾನ-ಆಧಾರಿತ", "ತಂತ್ರಜ್ಞಾನ ಆಧಾರಿತ")
    content = content.replace("21-35 ವರ್ಷ", "21 ರಿಂದ 35 ವರ್ಷ")

    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.html', '.css', '.json', '.md')):
            process_file(os.path.join(root, file))
            
# Also check root level files
for file in ['index.html', 'README.md', 'package.json', 'vite.config.ts']:
    if os.path.exists(file):
        process_file(file)

