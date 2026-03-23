# Proof Requirements

This file defines how to add recruiter-grade project proof to the portfolio.

## Asset Locations

Store assets inside `public/assets/projects/`.

Required structure:

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

## Naming Conventions

Use lowercase file names with hyphens.

Recommended image names:

- `hardware-front.jpg`
- `hardware-installed.jpg`
- `pcb-top.png`
- `pcb-bottom.png`
- `dashboard-overview.png`
- `architecture-diagram.png`
- `oscilloscope-capture.png`

Recommended video names:

- `demo.mp4`
- `field-test.mp4`
- `torque-test.mp4`
- `signal-demo.mp4`

## Where to Register Assets

After adding files, open `src/data/projects.js`.

For each project:

- add image file names to `proof.imageFiles`
- add video file names to `proof.videoFiles`
- update `proof.summary` if needed
- paste a GitHub link into `codeAvailability.href` only if the code is safe to expose

Example:

```js
proof: {
  summary: 'Hardware images, PCB screenshots, and test video added.',
  imageFiles: ['hardware-front.jpg', 'pcb-top.png'],
  videoFiles: ['demo.mp4'],
},
codeAvailability: {
  label: 'Code available on request',
  note: 'Private firmware and design files remain private.',
  // TODO: Add GitHub repo link or "Available on request"
  href: '',
},
```

## Required Proof Per Project

### Solar Monitoring System

- hardware enclosure or installation photos
- LCD display photos
- dashboard screenshots
- architecture diagram
- short end-to-end demo video
- optional sensor wiring or PCB images

### Bio-Signal Amplifier

- board photos
- schematic or PCB screenshots
- oscilloscope or waveform screenshots
- architecture or signal-chain diagram
- short live-signal demo video

### Custom Servo Motor

- motor assembly photos
- gearbox photos
- driver board or PCB screenshots
- architecture diagram
- torque or motion demo video

## Proof Quality Standard

Every flagship project should aim to show:

- what was built
- how it was built
- that it worked
- what technical complexity was involved

If code cannot be shared, proof assets must carry the credibility.
