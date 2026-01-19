# AIFORSEA — Ship Android Games

We are a small, focused game studio: ship Android games fast, make money, and learn along the way.
No pitching. No long roadmaps. Build, ship, iterate.

## Mission
- Build and publish small, well-polished Android games that generate revenue.
- Learn by shipping: launch small, measure, repeat.
- Keep scope tiny; prioritize polish and retention.

## Guiding principles
- Ship fast: prototypes -> playable build -> soft-launch.
- Monetize early: ads and simple IAPs where appropriate.
- Keep teams tiny: one or two people per game.
- Reuse and fork templates to reduce time-to-market.

## Quick start (developer)
- Repo root contains studio-level docs and per-game folders.
- Start each new game in folder: `game 1 - <code-name>/`
- Each game should include:
  - engine/choice note (Godot/Unity/LibGDX/other)
  - minimal build that exports to Android
  - playtest build (.apk) + changelog
  - monetization integration notes (ad provider, IAP)
  - analytics & release checklist

## Project structure (example)
- README.md
- LICENSE
- CONTRIBUTING.md
- game 1 - XXX/
  - docs/
  - src/ (engine project)
  - builds/
  - monetization.md
  - checklist.md
- game 2 - ...
- tools/ (scripts for building/exporting)
- .github/workflows/ (CI for builds/tests)

## Goals for game 1
- Pick the absolute fastest-to-ship small game idea.
- Deliver an internal playable APK in 3–7 days.
- Monetize with ads first (AdMob/other) and add a small IAP later.
- Soft-launch to a small market, iterate based on metrics.

## TODO (initial, prioritized)
High priority
- [ ] Commit this README and repo-level files (LICENSE, CONTRIBUTING).
- [ ] Create folder `game 1 - XXX/` and add a minimal engine project scaffold.
- [ ] Produce a playable APK (internal build) as fast as possible (prototype -> playtest).
- [ ] Instrument basic analytics and ad SDK for revenue data.

Near-term dev tasks
- [ ] Choose engine and document why (fastest to ship).
- [ ] Implement core loop (one or two screens, simple input).
- [ ] Create release checklist for Android (keystore, versioning, privacy).
- [ ] Set up CI to build APKs automatically (optional smoke build).

Growth & ops
- [ ] Add monetization strategy and initial implementation (ads, then IAP).
- [ ] Prepare store listing assets and small soft-launch plan.
- [ ] Track retention and monetization metrics; iterate.

## Suggested labels for issues
- good first issue
- high
- medium
- low
- chore
- monetization
- build

## How I will proceed (after your confirmation)
- Commit README.md and create `game 1 - XXX/` scaffold.
- Open initial issues for the high-priority items above so we can assign and track work.
- Start the fastest prototype in the chosen engine (I'll follow up to confirm engine choice or pick a default if you want me to decide).

## Contact / Owner
- Studio owner: cragtlab
- For immediate action: reply "commit and open issues" or tell me which step to run first.
