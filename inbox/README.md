# Inbox: hand your info and files to Claude

Nothing in this folder is published to the website. Put your answers and raw files here; Claude turns them
into the real pages, optimizes the images, models and videos, puts them in the right places, and then empties
this folder.

## Steps

1. **About you:** fill in [`about-me.md`](about-me.md). Skip anything you don't know yet.
2. **Each project:** make a folder per project and copy the project form into it:

   ```
   inbox/
     about-me.md
     resume.pdf                 ← optional
     headshot.jpg               ← optional
     piano/
       info.md                  ← copy of project-template.md, filled in
       photo-finished.jpg
       schematic.pdf
       pcb-layout.png
       piano.glb                ← or .fbx / .step / .obj, see below
       keys-demo.mp4
     weather-station/
       info.md
       ...
   ```

   Name files however you like; a few words in `info.md` saying what each one is helps.

3. **Send it:** pick whichever is easiest.

   - **Push it to GitHub (best for big files).** In PowerShell, in your repo folder, run these one at a time:

     ```
     git checkout claude/admiring-tesla-0925as
     git pull origin claude/admiring-tesla-0925as
     git add inbox
     git commit -m "Add project info"
     git push origin claude/admiring-tesla-0925as
     ```

     Then tell Claude "inbox is pushed".
   - **Paste it in the chat.** Answers as text; photos and screenshots can be attached directly. (3D models,
     videos and PDFs usually can't be attached; use one of the other options for those.)
   - **Google Drive.** Put everything in a Drive folder and paste the link in the chat.

You don't have to do everything at once: one project at a time works fine, and short rough answers are fine.
Claude writes the polished text and will ask about anything unclear.

## File tips

| What | Best format | Notes |
| --- | --- | --- |
| Photos of the build | JPG/PNG from your phone | Any size; Claude resizes. Good light, plain background, one "hero" shot of the finished thing. |
| Schematic | PDF or SVG (KiCad: File → Plot) | PNG is fine too if it's large (2000 px+ wide). |
| PCB layout | SVG/PNG (KiCad: File → Plot, or 3D Viewer → export PNG) | Top copper + silkscreen is the classic view. |
| 3D model, still | GLB (KiCad 8+: File → Export → GLB) | FBX/OBJ/STEP: send it anyway and Claude will try converting. |
| 3D model, animated | GLB with animation, from Blender | See README → "Interactive 3D models" for the Fusion → Blender steps. |
| Demo video | Phone video, 5–30 s, landscape | Claude trims and compresses it. |
| Design files to offer for download | PDF, ZIP of Gerbers, CSV BOM | Or just a link to a GitHub release. |
| Software screenshots | PNG | A screenshot of each app makes the home page much stronger. |
