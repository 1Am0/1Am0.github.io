# Project: <name>

Copy this file into `inbox/<project-name>/info.md` for each project. Rough notes and bullet points are perfect;
Claude writes the polished version. Numbers (voltages, currents, sizes, times, costs) are what make an
engineering write-up convincing, so include any you have.

## The basics

- **Name:**
- **One sentence: what does it do?**
- **Why did you build it?** (a problem you had, a class, curiosity, a competition…):
- **When:** (start → finish, or "ongoing"):
- **Status:** complete / in progress / prototype works but rev B planned
- **Solo or team?** If team: how many people, and what exactly was **your** part:
- **What are you proudest of in it?**

## How it works

- **Big picture:** the main blocks and how they connect (e.g. "battery → buck converter → ESP32 → reads
  BME280 over I²C → sends to phone over BLE"):
- **Main parts:** microcontroller, sensors, chips, motors, displays, with part numbers if you know them:
- **Power:** input (battery / USB / wall), voltages, regulators, current draw, battery life:
- **Board:** breadboard / perfboard / custom PCB? If PCB: tool (KiCad…), layers, size, where you ordered it,
  how many revisions:
- **Firmware / software:** language, framework (Arduino, ESP-IDF, MicroPython…), the interesting parts
  (interrupts, state machine, drivers, filtering), repo link:
- **Mechanical / enclosure:** 3D printed? Fusion? Materials?

## Engineering story (the most valuable part)

- **2–4 design decisions and why** (e.g. "chose a buck converter over an LDO because the LDO would waste 1.2 W
  as heat"):
- **What went wrong, and how you found and fixed it** (wrong footprint, swapped TX/RX, noise, overheating, a
  bug…):
- **Testing & results:** what you measured and the numbers (accuracy vs a reference, current draw, range,
  frequency response, speed…). Scope captures or graphs are gold.
- **What you'd change in the next version:**
- **Rough cost / parts count** (optional):

## Links

- **Code repo:**
- **Other links** (video, Hackaday/Instructables page, competition page…):

## Files in this folder

List what each file is, e.g.:

- `finished.jpg`: the main photo of the finished build
- `schematic.pdf`: full schematic, rev A
- `board.glb`: 3D model from KiCad
- `demo.mp4`: keys playing a C major scale

**Which view should open first** on the project page (3D model, schematic, photo or demo)?

**Files to offer for download** (schematic PDF, Gerbers, BOM…):
