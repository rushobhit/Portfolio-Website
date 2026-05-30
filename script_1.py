from pathlib import Path
p = Path('output/shobhit-react-portfolio/README.txt')
p.write_text('Run: npm install\nThen: npm run dev\n')
print(p.exists())