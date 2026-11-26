# Grid Operator — Version Log

Nov 24, 2026 · @Nate

Grid Operator went from a one-screen frequency-balancing prototype to a 50-day grid sim with a market, disasters, an autopilot and a fusion ending in four days (Nov 21–24, 2026). It runs offline as an iPhone home-screen app from GitHub Pages.

Numbering: the original is v0.0. A new feature, a change to how the game plays, or a release that put the game in new hands adds 0.1; a bug fix or small tweak adds 0.01. The game is at v0.81; the last major release was **v0.8**. The game itself printed different labels (“Version 3” to “Version 6”); each section notes them.

| Version | Date | In-game label | Headline |
| --- | --- | --- | --- |
| 0.81 | Nov 26 | v0.81 | Fix: staged pricing for builds, upgrades and repairs |
| 0.8 | Nov 24 | Version 6 | Project Infinite fusion ending; alert bar pinned |
| 0.7 | Nov 23 | Version 5 | Workforce upgrades; The Expansion (market, tie line, contract) |
| 0.6 | Nov 23 | Version 4 | Real-time autopilot; plant tabs; plant upgrades; combined cycle |
| 0.52 | Nov 22 | Version 3.1 | Fix: status bar and forecast layout |
| 0.51 | Nov 22 | none | Fix: phone app stuck on a stale cached copy |
| 0.5 | Nov 22 | Version 3 | 3-hour forecast; AGC on every plant; faster ramps |
| 0.4 | Nov 21 | none | Offline iPhone home-screen app: the game goes public |
| 0.3 | Nov 21 | none | Natural disasters from day 5 |
| 0.21 | Nov 21 | none | ½× speed and auto slow-motion |
| 0.2 | Nov 21 | none | Battery levels, charge taper, reservoir upgrade, 5-upgrade bonus |
| 0.13 | Nov 21 | none | Tweak: wind back to a Curtail switch; new solar and wind start curtailed |
| 0.12 | Nov 21 | none | Fix: new plants start at 0 MW after a wind-farm blackout |
| 0.11 | Nov 21 | none | Pinned status bar; daily sunrise and sunset |
| 0.1 | Nov 21 | none | Build shop |
| 0.0 | Nov 21 | none | Original Grid Operator |

## Prologue: Tray Table (before Grid Operator)

The first game built for the flight to Chicago was **Tray Table**, an 8×8 block puzzle. You dragged pieces onto the board and cleared full rows and columns for points, with no timer, a saved best score and offline play once loaded. The request that followed, to make the game about managing power like a power plant, replaced it with Grid Operator.

## v0.0: the original Grid Operator (Nov 21)

You dispatch a small grid to keep frequency at 60 Hz while demand moves through the day. The screen was styled as a high-performance HMI: grey when normal, colour only for trouble.

- **Plants:** nuclear 600 MW (min 300, slow ramp), coal 400 MW (25 s start), gas peaker 300 MW (6 s start, pricey fuel), hydro 250 MW with a 1,300 MWh reservoir, solar 380 MW, battery 200 MW / 300 MWh with frequency-response auto mode.
- **Physics:** frequency moves with generation minus demand, with load damping and system inertia.
- **Protection:** under-frequency relays shed customers in 150 MW blocks below 59.3 Hz, restored by hand. Below 59 Hz or above 61 Hz for a second is a blackout and the run ends.
- **Events:** clouds over the solar farm, a coal trip or nuclear runback, and heat waves from day 3. Demand grows 5% a day.
- **Economy:** $60 per MWh delivered minus fuel; $1,000 per unserved MWh.
- **Interface:** frequency gauge, demand vs generation trend, alarm line, unit faceplates with setpoint sliders, 1×/2×/3× speed, a day summary, best-run record, and auto-pause when you switch apps. A day took about 4 minutes.

## v0.1–v0.21: building out the grid (Nov 21)

**v0.1 Build shop.** Buy a gas peaker (200 MW, $1.2M), solar expansion (+200 MW, $1.0M), wind farm (200 MW, $1.4M), battery expansion (+100 MW / +200 MWh, $0.9M), coal unit (300 MW, $2.0M) or small modular reactor (300 MW, $3.5M). Everything comes online the next morning. Solar and wind got Curtail switches.

**v0.11 Pinned status bar and the sun.** A bar pinned to the top shows time, frequency, MW balance and bank, plus the Build, speed and Pause buttons. Sunrise and sunset now vary by day, and the day summary forecasts them with solar peak time and MW. Fixed a bug that had kept the reservoir and battery bars from ever filling.

**v0.12 Safer commissioning (fix).** A new wind farm came online at full output at midnight and blacked out the grid. New plants now start at 0 MW, the wind farm got an output-limit slider that reset to 0 after each expansion, and wind ramps at 25 MW/s.

**v0.13 Curtail switch restored (tweak).** At your request the slider went back to an on/off Curtail switch. New solar and wind now start the day curtailed instead.

**v0.2 Batteries, reservoir and bonuses.** Battery charge joined the status bar. Charging and discharging now taper over the last 20% to stop the balance spike when a battery hits full, with near-full and near-empty warnings. Added a reservoir upgrade (+400 MWh, $0.8M). Every 5 upgrades of one kind adds +100 MW max to all matching plants. Batteries level up to level 5, then the next expansion adds a new battery at level 1.

**v0.21 Slow-motion.** Speed now cycles ½×, 1×, 2×, 3×. If the power balance passes ±100 MW the game drops to ½× on its own and returns to 1× after 3 seconds back within ±30 MW.

## v0.3–v0.4: disasters and the phone app (Nov 21)

**v0.3 Natural disasters.** From day 5, each day rolls for disasters, with odds set by how common they are.

| Disaster | Daily odds | Warning | Effect |
| --- | --- | --- | --- |
| Thunderstorm | 10% | none | Lightning damages a plant |
| Ice storm | 6% | forecast | Wind iced to 0, demand +8%, may damage a plant |
| Drought | 6% | forecast | Reservoir refills to only 40% |
| Wildfire | 5% | forecast | Solar halved all day; may damage a plant or burn 200 MW of panels |
| Tornado | 4% | \~1 h alarm | Damages or downgrades 1–2 plants |
| Flood | 3% | forecast | Reservoir at 140%; a thermal plant damaged or downgraded |
| Earthquake | 2% | none | Trips 2 units, downgrades one, drains 30% of the reservoir |
| Geomagnetic storm | 2% | forecast | Transformer failure downgrades a big plant |
| Meteor strike | 1% | none | You carry +300 MW or more of a neighbor’s load for \~6 h |

Damaged plants go offline until you pay for a repair. Downgrades cut 100 MW off a plant for good, take a battery down a level or remove 200 MW of solar or wind; a plant pushed below its minimum is destroyed. The day summary gained an incident log.

**v0.4 Offline iPhone app.** The game was packaged as a home-screen web app with an icon, a manifest and an offline cache, hosted on GitHub Pages. This is the release that made the game public. Its first offline cache could keep serving an old copy after an update; that was fixed in v0.51.

## v0.5–v0.52: seeing what’s coming (Nov 22)

**v0.5 Forecast and AGC (in-game “Version 3”).** Your coal plant seemed to do nothing in the evening because it was cancelling out the sunset while the battery quietly drained. This version made that visible and controllable.

- **AGC checkbox on every plant:** it follows demand automatically.
- **3-hour forecast** drawn as dashed lines on the trend, plus a “Next hour” readout of demand change, solar change and what your plants must add, and how long the battery has left.
- **Faster thermal ramps:** coal 8 → 20 MW/s, nuclear 3 → 6, small reactor 4 → 8.
- **Calmer demand:** random wobble halved.
- **Chart fix:** the generation line had always drawn black, the same as demand; it now shows only your plants’ output, in blue.

**v0.51 Phone app update fix.** v0.5 wouldn’t load on the phone: the offline cache had stored the old game and kept serving it. The new cache loads the game fresh whenever you’re online and only falls back to the saved copy offline, so later updates show up on the next launch.

**v0.52 Layout fixes (in-game “Version 3.1”).** The status bar uses fixed columns that scale to the screen, so the bank no longer gets cut off. The forecast readout became three fixed boxes with a battery line under them, so it no longer jumps between one and two lines.

## v0.6: autopilot, tabs and plant upgrades (Nov 23)

*In-game label: “Version 4”.*

- **Real-time autopilot:** when the app is closed, the grid keeps running at 1 game hour per real hour, capped at 72 hours, simulated in a fraction of a second when you return. The autopilot runs every plant on AGC, repairs damage, starts the cheapest unit when headroom gets thin, shuts down the priciest when others can cover, saves hydro water for when the rest are maxed, and can’t black out the grid. You get a “While you were away” report.
- **Plant tabs:** Base load (nuclear, coal, small reactors), Swing (gas, combined cycle) and Green (hydro, solar, wind), each with a live MW total. Batteries and load shed show on every tab.
- **Plant upgrades:** 3–6 real engineering upgrades per plant, such as an economizer, larger boiler feed pumps, an extra pulverizer mill, gray control rods, inlet fogging, single-axis trackers and blade de-icing. They install overnight, count toward the 5-upgrade bonus and each carries a “How it works” explanation, repeated in the morning report.
- **Combined-cycle plant:** 450 MW for $2.6M, $45/MWh fuel, 45 s start, with its own upgrades: HRSG duct burners, a once-through HRSG, a steam turbine retrofit, inlet chillers and a condenser and cooling-tower upgrade.
- Plant cards now list each unit’s actual ramp rate, minimum, fuel cost and start time.

## v0.7: workforce and The Expansion (Nov 23)

*In-game label: “Version 5”.*

**Workforce and reliability** (immediate effect, each with “How it works”):

- Two repair-crew tiers, each 40% faster and 25% cheaper.
- Operator training: days with a unit trip drop from 55% to 35%, then 20% with simulator training.
- Predictive maintenance: about an hour’s warning before a trip; ease the unit below 70% or take it offline and the trip never happens.
- Spare transformers and parts: disasters that would permanently downgrade equipment only damage it half the time.

Trips can now hit any running thermal unit. Before, they always picked the original coal plant, so parking coal made trips disappear.

**The Expansion** unlocks at day 30:

- A 400 MW tie line to the regional grid, upgradable +300 MW for $2M.
- A firm evening contract, 16:00–21:00 with a 30-minute ramp each side: 200 MW to start, +15 MW a day, $90/MWh, $400 per MWh short.
- An hourly market: about $25 overnight, about $95 at the evening peak, spikes of $300–450 when the neighbor loses a plant.
- Auto-trade imports when power is cheaper than your costliest running unit, exports when it pays more, and unwinds imports before the contract window.

## v0.81: staged pricing (Nov 26)

*Balance fix. In-game label: “v0.81: Project Infinite”.*

The early game had become a death spiral: a nuclear runback or damage could take out half the grid, a $900k repair was out of reach, and shedding penalties sank the bank. Prices now rise in stages per kind of equipment, counted across builds and upgrades of that kind:

| Stage | Purchases of that kind | Price | Repair cost and time |
| --- | --- | --- | --- |
| 1 | 1st–5th | 50% | 50% |
| 2 | 6th–10th | 100% | 100% |
| 3 | 11th on | 150% | 150% |

A day-1 nuclear repair dropped from $900k and 40 s to $450k and 20 s; a late-game one is $1.35M and 60 s. The shop and upgrade sheets show each kind’s stage.

## v0.8: Project Infinite (Nov 24)

*In-game label: “Version 6” at release, renamed “v0.8: Project Infinite”. The shop shows only “???” until you earn clearance, then reveals the name.*

- **Fusion as the win condition.** It unlocks at day 50 or later with 10 nuclear units (the original plus small reactors) and all 4 upgrades on the original nuclear plant. At 2 of 3 you get a “Rumors” hint and a locked checklist in the Build shop.
- **Building it:** $40M over two nights. On first-plasma morning fusion ramps up while your reactors drop to minimum and your gas, combined-cycle and coal units are released one by one.
- **The ending:** once fusion has run for a game hour, carries at least half the load and frequency is stable, an animated night skyline plays with your run stats, a “How fusion works” explanation, your fastest win, and a choice to keep playing or start a new grid.
- **Alert bar pinned** under Build, speed and Pause, at a fixed two-line height.

**Next: v0.9.** Candidates already discussed: trip odds tied to load (high near 100% and near minimum) and wear from cycling; plant aging with scheduled overhauls; big-customer contracts; grid hardening; carbon pricing and a reliability score.
