import os

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("capable ward level representatives", "capable representatives at the ward level")
content = content.replace("progressive ward level development agendas", "progressive development agendas at the ward level")
content = content.replace("solve ward level issues", "solve issues at the ward level")
content = content.replace("trained ward level leadership", "trained leadership at the ward level")
content = content.replace("participate in ward level governance", "participate in governance at the ward level")
content = content.replace("Why Ward Level Leadership Matters", "Why Leadership at the Ward Level Matters")

with open('src/translations.ts', 'w', encoding='utf-8') as f:
    f.write(content)
