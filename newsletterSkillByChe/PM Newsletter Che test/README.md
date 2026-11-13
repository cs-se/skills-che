# Snoonu Product Newsletter Skill

A reusable Claude skill + template for creating weekly product newsletters as PNG images for Slack DM distribution.

## What's Included

| File | Purpose |
|------|---------|
| `NEWSLETTER_SKILL.md` | Claude skill prompt — attach to any project |
| `Newsletter Template.dc.html` | Data-driven newsletter template (Design Component) |
| `Genie Newsletter.dc.html` | Example: Genie project newsletter (filled) |
| `Restaurant Page Newsletter.dc.html` | Example: Restaurant Page project newsletter (filled) |

## Quick Start

### 1. Create a new Claude project
### 2. Copy `Newsletter Template.dc.html` into the project
### 3. Attach `NEWSLETTER_SKILL.md` as a skill (Project Settings → Skills → Add)
### 4. Tell Claude:

```
Create a newsletter for [Your Project Name].
Here are this week's updates: [paste Slack messages, bullet points, or link a Google Doc]
```

Claude will populate the template and export as PNG for Slack.

## How the Template Works

All content is driven by two methods in the logic class:

### `getProjectConfig()` — Set once per project

```js
{
  projectName: 'My Project',        // Project name (shown in header)
  accentColor: '#D90217',           // Brand color (hex)
  logoUrl: '',                      // Path to logo image ('' = auto initial)
  contactName: 'PM Name',           // Footer DM contact
  footerLine: 'Snoonu Product',     // Footer attribution
  timelineMonths: ['Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  showStatus: true,                 // Toggle: Status at a Glance
  showRoadmap: true,                // Toggle: Roadmap timeline
  showCTA: false,                   // Toggle: Call-to-action widget
  showCurrentStatus: true,          // Toggle: Current status checklist
}
```

### `getWeeklyData()` — Update every publish cycle

```js
{
  issueDate: 'Aug 10, 2026',
  issueLabel: 'Issue #1',
  headline: 'Project Update',

  // Status at a Glance
  targetLaunch: 'V1 — Sep 2026',
  scope: 'Describe scope here.',
  teams: [
    { name: 'Team A', type: 'primary' },   // accent-colored chip
    { name: 'Team B', type: 'secondary' },  // grey chip
  ],

  // Timeline
  progressPct: '30%',  // 0-100%, bump ~5%/week
  milestone: { pct: '57%', date: 'Sep 30', label: 'Target complete' },

  // Key dates
  keyDates: [
    { date: 'Aug 6', text: 'UX entry point done', color: '#22C55E' },
  ],

  // Status items
  statusItems: [
    { name: 'Task A', status: 'done' },
    { name: 'Task B', status: 'wip' },
    { name: 'Task C', status: 'due', dueDate: 'Due Sep 1' },
    { name: 'Task D', status: 'done', subItems: ['Part 1', 'Part 2'] },
  ],
}
```

## Status Types

| Status | Color | Badge |
|--------|-------|-------|
| `done` | Green `#22C55E` | DONE |
| `wip` | Amber `#E6960A` | WIP |
| `started` | Indigo `#6366F1` | STARTED |
| `due` | Amber `#E6960A` | Custom date string |

## Key Date Colors

- 🟢 Green `#22C55E` — Completed milestones
- 🔴 Red `#D90217` — Critical dates
- 🟠 Orange `#E6960A` — Upcoming/in-progress
- 🟣 Purple `#6366F1` — Planned/future

## Accent Color Presets

- Snoonu Red: `#D90217`
- Purple: `#6366F1`
- Blue: `#0EA5E9`
- Green: `#22C55E`
- Orange: `#E6960A`

## Export for Slack

PNG export at 2x resolution (1440px wide). For long newsletters, split into 2 parts so each image fills the Slack chat width without shrinking.

> **Note:** Links are not clickable in PNG — paste URLs separately in the Slack DM alongside the image.

## Examples

### Genie Newsletter
AI-powered search across food, grocery, pharmacy, marketplace. See `Genie Newsletter.dc.html`.

### Restaurant Page Newsletter
Redesigned merchant page with 6 iterations, +5.5% conversion lift. See `Restaurant Page Newsletter.dc.html`.
