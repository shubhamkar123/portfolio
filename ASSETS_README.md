# Replacing the Hero Video & Avatar

Your portfolio is fully built and rebranded with your CV content, in a
premium blue/black "automotive OEM" theme. Two placeholders are still
in place until you generate your cartoon avatar + talking video:

## 1. Hero background video (autoplay, muted, with Play Reel button)
File: `src/assets/hero video/yusuf-hero.mp4`
→ Replace this file with your Veo 3 talking-avatar MP4.
→ Keep the same filename, OR rename it and update the import path in
  `src/components/Hero.jsx` (line: `import heroVideo from '../assets/hero video/yusuf-hero.mp4';`)

## 2. About section photo (ID badge card)
File: `src/assets/about/yusuf-avatar.png`
→ Replace with your ChatGPT-generated cartoon image (16:9, PNG).
→ Currently this is your real uploaded photo as a placeholder so the
  layout previews correctly.

## 3. Resume
File: `public/Shubham_Karne_Resume.pdf`
→ Already your real CV — no action needed unless you update it.

After swapping files, run:
```
npm install
npm run dev      # preview locally
npm run build    # production build — should show 0 errors
```

Then follow Step 8 of the original guide to push to GitHub and deploy
on Vercel (Build Command: `npm run build`, Output Folder: `dist`).
