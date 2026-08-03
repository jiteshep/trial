import os

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("ನಾಗರಿಕ-ತಂತ್ರಜ್ಞಾನ", "ನಾಗರಿಕ ತಂತ್ರಜ್ಞಾನ")
content = content.replace("21 to 35 ವರ್ಷ", "21 ರಿಂದ 35 ವರ್ಷ")
content = content.replace("ತಂತ್ರಜ್ಞಾನ-ಆಧಾರಿತ", "ತಂತ್ರಜ್ಞಾನ ಆಧಾರಿತ")
content = content.replace("ಸ್ವ-ಸಹಾಯ", "ಸ್ವ ಸಹಾಯ")
content = content.replace("ಸ್ವ-ಆಡಳಿತದ", "ಸ್ವ ಆಡಳಿತದ")

with open('src/translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)
