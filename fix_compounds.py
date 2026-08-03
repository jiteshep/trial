import os

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("technology supported governance", "governance supported by technology")
content = content.replace("merit driven participation", "participation driven by merit")
content = content.replace("merit based participation", "participation based on merit")
content = content.replace("service oriented mindset", "mindset oriented towards service")
content = content.replace("participation related purposes", "purposes related to participation")
content = content.replace("election process awareness", "awareness of the election process")
content = content.replace("capacity building initiative", "initiative for capacity building")
content = content.replace("capacity building and leadership initiative", "initiative for capacity building and leadership")
content = content.replace("election related eligibility", "eligibility related to elections")

with open('src/translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)
