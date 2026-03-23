# Nand Kishor Portfolio

## About Portfolio

This portfolio is designed as a proof-driven engineering portfolio rather than a claims-based showcase.
It highlights a focused set of flagship projects and gives each one a structured technical breakdown:

- overview
- problem
- architecture
- working
- challenges
- role
- proof
- code availability

The frontend is built with React, Vite, Tailwind CSS, and Framer Motion.

## Engineering Focus

Primary focus areas:

- Embedded Systems
- IoT Systems
- PCB Design
- Sensors and Actuators
- Robotics
- Motor Control
- Power Electronics
- Device and Workflow Automation

## Projects Overview

Current flagship projects:

- Solar Monitoring & Environmental Analytics System
- Bio-Signal Amplifier
- Custom High-Torque Smart Servo Motor

These projects were chosen because they best support an embedded and systems engineering profile.

## Proof Structure

Project proof assets live under `public/assets/projects/`.

Structure:

```text
public/
  assets/
    projects/
      solar-monitoring/
        images/
        videos/
      bio-amplifier/
        images/
        videos/
      custom-servo/
        images/
        videos/
```

Project content and proof metadata live in `src/data/projects.js`.

Skills are maintained in `src/data/skills.js`.

## How to Add Project Proof

1. Put image files into the correct `images/` folder.
2. Put video files into the correct `videos/` folder.
3. Open `src/data/projects.js`.
4. Find the matching project by `slug`.
5. Add filenames to `proof.imageFiles` and `proof.videoFiles`.
6. If public code can be shared, add the repo link in `codeAvailability.href`.

Example:

```js
proof: {
  summary: 'Add board photos, oscilloscope captures, and demo videos.',
  imageFiles: ['board-front.jpg', 'scope-capture.png'],
  videoFiles: ['demo.mp4'],
},
codeAvailability: {
  label: 'Code available on request',
  note: 'Private firmware and hardware files are not exposed publicly.',
  // TODO: Add GitHub repo link or "Available on request"
  href: '',
},
```

## Code Availability Policy

This portfolio does not expose private firmware, hardware design files, or customer-sensitive automation code by default.

Policy:

- Public code links can be added when safe to share.
- Otherwise, projects should show `Code available on request`.
- The portfolio should prioritize proof assets and technical credibility over raw code exposure.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
