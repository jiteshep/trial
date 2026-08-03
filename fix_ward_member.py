import os

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("Potential Ward Member Candidates (Goal)", "Potential Candidates for Ward Member (Goal)")
content = content.replace("suitable ward member candidates", "suitable candidates for ward member")

with open('src/translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)
