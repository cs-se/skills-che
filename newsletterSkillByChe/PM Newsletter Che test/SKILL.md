---
name: Product Newsletter
description: Use when a PM asks to create or update a weekly/biweekly product newsletter for Slack distribution. More details under readme.md
---
# Skill: Product Newsletter

## When to use
When a PM asks to create or update a weekly/biweekly product newsletter for Slack distribution.

## How it works
The project contains `Newsletter Template.dc.html` — a fully data-driven newsletter template. All content is configured in two methods inside the logic class:

### `getProjectConfig()` — Set once per project
- `projectName` — Product/project name
- `accentColor` — Brand hex color (e.g. `#D90217`)
- `logoUrl` — Path to logo image (or `''` for auto-generated initial)
- `contactName` — PM name for the footer DM prompt
- `footerLine` — Attribution line (e.g. `Snoonu Product · Team Name`)
- `timelineMonths` — Array of month abbreviations for the roadmap timeline
- `showStatus` / `showRoadmap` / `showCTA` / `showCurrentStatus` — Toggle sections

### `getWeeklyData()` — Update every publish cycle
- `issueDate`, `issueLabel`, `headline`, `subheadline`
- `targetLaunch`, `launchNotes`, `scope`
- `teams[]` — `{ name, type: 'primary'|'secondary' }`
- `progressPct` — Timeline progress (`'30%'`)
- `milestone` — `{ pct, date, label }` or `null`
- `topPhases[]` / `bottomPhases[]` — `{ label, sublabel, color, flex }` or `{ spacer: true, flex }`
- `keyDates[]` — `{ date, text, color }` (green `#22C55E`, red `#D90217`, orange `#E6960A`, purple `#6366F1`)
- `statusItems[]` — `{ name, status: 'done'|'wip'|'started'|'due', dueDate?, subItems? }`
- `cta` — `{ title, link, subtext, sampleQueries[] }` or `null`

## Workflow

1. **Setup**: Copy `Newsletter Template.dc.html` into the PM's project. Update `getProjectConfig()` with their project details, logo, and accent color.

2. **Weekly update**: The PM provides updates (via chat, Slack messages, or Google Doc links). Parse the updates and modify `getWeeklyData()`:
   - Increment `issueLabel`
   - Update `issueDate` to current date
   - Bump `progressPct` (~5% per week for a 5-month timeline)
   - Update `statusItems` statuses (flip `wip` → `done`, add new items)
   - Add/update `keyDates`
   - Update `launchNotes` and any changed fields

3. **Export**: Capture as PNG for Slack DM distribution:
   - For a single image: `snapshot_element('#newsletter', scale: 2)`
   - For split images (better Slack readability): hide sections with `display:none`, capture parts separately, restore
   - Always export at 2x scale for retina clarity

## Status color reference
| Status | Background | Icon | Badge |
|--------|-----------|------|-------|
| `done` | Green `#F0FDF4` | ✓ `#22C55E` | `DONE` |
| `wip` | Amber `#FFF7E6` | ● `#E6960A` | `WIP` |
| `started` | Indigo `#EEF2FF` | — `#6366F1` | `STARTED` |
| `due` | Amber `#FFF7E6` | ● `#E6960A` | Custom date |

## Accent color presets
- Snoonu Red: `#D90217`
- Purple: `#6366F1`
- Blue: `#0EA5E9`
- Green: `#22C55E`
- Orange: `#E6960A`

## Notes
- PNG images in Slack DMs: split into 2 parts if the full image exceeds ~1600px height, so each part fills the chat width and remains readable without zooming.
- Links are not clickable in PNG — paste the URL separately in the Slack message alongside the image.
- The template auto-generates a letter initial in the header if no `logoUrl` is provided.
