# Pentacle Workforce

Daily employee report and expense website for **Pentacle Newyork Company**.

- Live site: https://pentacleworkforce.vercel.app
- Hosting: **Vercel** (deployed from this GitHub repository)
- Data: **Firebase** project `pentacleworkforce-64c35` (Firestore, Mumbai region, free Spark plan)

All employees, logins, reports and expenses are stored in Firebase. Updating `index.html` never deletes data.

> Keep this GitHub repository **private**. This file contains passwords.

## Files
- `index.html`: the website (already connected to Firebase)
- `vercel.json`: Vercel settings (always loads the newest version after an update)
- `firestore.rules`: copy of the Firebase security rules
- `README.md`: this guide
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`: make the website installable as a phone/computer app

## Deploy / update
1. Open the GitHub repository > **Add file > Upload files**, choose the new `index.html`, then **Commit changes**.
2. Vercel redeploys automatically in about a minute.
3. Open the site and press **Ctrl + Shift + R** (on a phone, close the tab and open the site again).

## Install as an app (free)
The website works as an app with the Pentacle logo icon, full screen and no browser bar. All files above must be uploaded to GitHub.
- **Android (Chrome):** open https://pentacleworkforce.vercel.app, tap **Install** on the bar at the bottom (or Chrome menu ⋮ > **Install app** / **Add to Home screen**).
- **iPhone / iPad (Safari):** open the site, tap **Share** > **Add to Home Screen** > Add.
- **Laptop (Chrome or Edge):** click the install icon at the right end of the address bar, or menu > **Install Pentacle Workforce**.
- The app always loads the newest version when online; data stays in Firebase. Sign in once inside the app.
- Google Play Store / Apple App Store listing is not needed. (Play Store needs a one-time USD 25 developer fee; App Store needs USD 99 per year.)

## Look and layout
- **Theme:** deep teal and mint, with a moving 3D teal silk banner on the home page. Fonts: Bricolage Grotesque (headings, names, big numbers) and Instrument Sans (text, menus, forms). Zone colours stay green, yellow and red.
- **One link, two layouts.** The site switches automatically by screen size:
  - **Laptop / desktop:** menu at the top, full tables and side-by-side panels.
  - **Phone:** slim header with the logo, a **menu bar at the bottom** (Submit report, Expenses, Dashboard, Team, with the red message count on Dashboard), and tables shown as **cards** with labelled lines (team daily reports, monthly records, Expenses tables).
  - On phones the "Pentacle Newyork Company" logo on the home banner is centred and sized to fit the screen; Admin and sign-out sit on the right of the top bar.
  - Tablets show the laptop view when wide and the phone view when narrow.
- The same logins and data work on both. A report submitted on a phone appears on the laptop at once.

## One-time Firebase settings (already done)
- Authentication > Sign-in method: **Email/Password** enabled
- Authentication > Users: both accounts added
  - pentacledesignteam@gmail.com / Nith@2003 (employee login)
  - pentacleworkforce@gmail.com / Pentacle@#NEWYORK (admin login)
- Authentication > Settings > Authorized domains: `pentacleworkforce.vercel.app`
- Firestore > Rules: paste `firestore.rules` and **Publish**

## Sign in
The sign-in screen has two options. Each one accepts only its own account; any other email or password shows "Invalid email or password".

**Employee login**
- Email: pentacledesignteam@gmail.com / Password: Nith@2003
- Then the employee picks their department and name and signs in with their own username and password.
- Employees see only **Submit report**.

**Admin login**
- Email: pentacleworkforce@gmail.com / Password: Pentacle@#NEWYORK
- Sees **Dashboard, Team, Expenses** and every employee report, with no codes needed.
- In **Submit report**, the admin opens any employee directly (no employee username or password) in a **view-only** page: the report form and Submit button are hidden, because only employees submit reports. The admin sees every day of the chosen month with the percentage, zone, tasks (done / target), shift, submission time, notes, folders, images and links. Working days with no report show "No report submitted".
- The admin stays signed in on that device after reloading, until **Sign out**.

**Codes (employee mode)**
- Authorisation codes: 232324 / 252524 / 262624
- Forgot-password PINs: 282829 / 292928 / 272728

## Employee logins
Usernames are permanent.

| Employee | Username | Password |
|---|---|---|
| Nithish V | NithishvPNY | Nith@2003 |
| Jem | JemPNY | Jem@3633 |
| Abinisha | AbinishaPNY | Abinisha@9503 |
| Charu | CharuPNY | Charu@1363 |
| Ayisha Hussain | AyishaPNY | Ayisha@6708 |
| Manoj | ManojPNY | Manoj@4253 |
| Praveen | PraveenPNY | Praveen@2458 |
| Kayathri | KayathriPNY | Kayathri@6700 |
| Santhiya | SanthiyaPNY | Santhiya@2797 |
| Vihas | VihasPNY | Vihas@5809 |
| Saravanan | SaravananPNY | Saravanan@4855 |
| Rishi | RishiPNY | Rishi@9676 |
| Monisha | MonishaPNY | Monisha@1110 |
| Namrutha | NamruthaPNY | Namrutha@2021 |
| Harish | HarishPNY | Harish@2026 |
| Midhun | MidhunPNY | Midhun@2026 |
| Iswarya (Technical) | IshwaryaPNY | Ishwarya@2026 |
| Shobika (Technical) | ShobikaPNY | Shobika@2026 |
| Padmanaban (Manager · Management) | PadmanabanPNY | Padmanaban@2026 |

Padmanaban is added to the new **Management** team automatically, and Iswarya's, Shobika's and Padmanaban's logins are set automatically, the first time the admin account opens the website after this update (the employee must already be added in the Team tab with the name Iswarya / Ishwarya or Shobika).

## Employee photos
Profile photos are built into `index.html` and replace the initials on the name selection screen, the employee's profile, the Dashboard and the Team page.
- Added: **Abinisha** (Designers), **Jem** (Designers), **Charu** (Technical), **Vihas** (Production)
- Other employees show their initials until a photo is added. To add more, send the photo with the employee's name and upload the new `index.html`.

## Daily targets (changed)
Off shift target is half of the day shift target.

| Department | Day shift | Off shift |
|---|---|---|
| Designers · Designs and mockups | 500 designs and 70 mockups | 250 designs and 35 mockups |
| Designers · Manual design (when manual design is available) | 35 manual designs | 18 manual designs |
| Designers · Manual mockup (no design work, manual mockups available) | 30 manual mockups | 15 manual mockups |
| Technical | 10 videos and digital marketing (compulsory) + ticked works: **Listing 30 per hour** | 5 videos and digital marketing + Listing 30 per hour |

## Design team: Cutting file (if available)
Every designer (including Nandhini and Karthika) has **Cutting file (if available)**. On days with cutting files the designer ticks it and enters the From – To time, **How many came today** and **How many completed**; percentage = completed ÷ came (10 of 10 = 100%), added as a line to the day's percentage. When not ticked it is not counted. The design and mockup targets stay as they are.

**Local orders (if available) — all designers except Nandhini and Karthika:** tick it on days with local orders, enter the working time, **How many came today** and **How many completed**; percentage = completed ÷ came (3 of 4 = 75%), added as a line to the day. Not ticked = not counted.

**Nandhini and Karthika:** no Local orders box and **no Desk-clean video tick** (the Daily checks box is hidden for them and not required to submit). They keep the Cutting file option.

## Name and login correction: Midhun
The first time the admin signs in with this version, the employee "Mithun" is renamed to **Midhun** and his login changes to username **MidhunPNY**, password **Midhun@2026** (the old MithunPNY login stops working). The page stores the new password only as a salted hash, never as plain text. Reports submitted before the change keep the old spelling.

## Balanced percentage and stars (all employees)
- **Extra work balances a shortfall:** each task can count up to 150% of its target, and the day is the average of the tasks, capped at 100%. Example (designer): designs 300/500 (60%) + mockups 90/70 (129%) = **94%**. Another: designs 500/500 + mockups 40/70 = 79%. Workflow updates count up to 3/3 only.
- **★ Star:** when **every** target of the day is met **and** at least one task is done beyond its target, the report gets **100% + 1 star**. Example: designs 550/500 + mockups 80/70 = 100% ★. The employee sees "★ 100% + 1 star" on the form and after submitting; the admin sees ★ in the Dashboard tables, in the employee's day list, and in the downloads (Stars column in the weekly/monthly report, ★ next to the achievement, a Star column in the CSV).
- Reports submitted before this update keep their old percentage.

## Several reports on the same day → merged into one
An employee may submit more than once a day (for example 12:12 PM and 3:42 PM). The Dashboard, the employee's day list, the monthly/weekly zones and all downloads show **one merged result per employee per day**:
- **Same task added together:** per-hour work (listing, production, research, calls) and "came / completed" works add both figures (30/30 + 30/30 = **60/60**); a fixed daily target (videos 10, designs 500…) stays the day's target while the done figures add up; Workflow updates take the highest count of the day.
- **Measured against a full working day (8 hours; off shift 4 hours):** when every task of the day is per-hour work, the hours entered in all reports are added (overlapping times counted once) and hours not entered count as not worked. Example (Midhun): listing 11:00–12:00 and 2:30–3:30 = **2 h of 8 h**, 60/60 listings → listing counts 100% × 2/8 = 25%; with Workflow 2/3 (67%) the day is **46%**, not 83%. A full 8 h of entered work at target = 100%.
- Employees who also have daily-count tasks (videos, designs, orders came/completed) are measured on their targets as usual (no 8-hour rule).
- The Dashboard row shows "12:12 pm + 3:42 pm · 2 reports merged · 2 h of 8 h entered" and a **Delete** button for each report. After the second submission the employee sees "Today's total (2 reports merged): …%".

## Today's total stays until midnight
After submitting, when the employee opens their report form again the same day, the circle shows **today's total** (label "today") instead of 0%, with the note "Today so far · 1 report submitted". The lines show the day's figures so far (for example Designs 300/500); new figures typed are added to today's total. At midnight (12:00 AM) the new day starts at 0%.

## One-time Workflow ticks given by the admin
- **Lakshmi, 19 Nov 2026:** the 11:30 AM and 3:00 PM Workflow update boxes are counted as ticked (shown as "Ticked at 11:29 am" and "Ticked at 2:59 pm", marked as given by the admin). Her report of that day is updated automatically (Workflow updates 2/3 and the matching percentage and zone). This is saved the first time the website opens on any signed-in device after the update. Other days and other employees are not changed; the 6:30 PM box works as usual.

## India time on every device (fix for closed Workflow boxes and wrong report dates)
- A laptop set to another **time zone** (for example UTC or US time) used to calculate a different day and time: its Workflow update boxes showed as closed, and reports could be saved under the wrong date — even though the same page looked correct on another laptop.
- Now every date and time in the website is **India time (Asia/Kolkata)** on every phone and laptop: today's date, the Workflow boxes (11:30 AM, 3:00 PM, 6:30 PM), report times, the 6:30 PM alerts, night work and chat times. Together with the server clock check, a wrong clock or a wrong time zone no longer changes anything. (Still, set the laptop's time zone to "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi" in Windows Settings → Time & language → Date & time.)

## Automatic update (no refresh needed)
- After you upload a new **index.html** (or sw.js) to GitHub, Vercel publishes it in about a minute. Every open page checks for a new version **once a minute** (a tiny check — nothing is downloaded until there is an update) and also whenever the page or app is opened again.
- When there is a new version, the page **reloads by itself** and shows "The website was updated to the newest version".
- It never interrupts work: while an employee is signed in to a report, typing a message, choosing evidence files, recording a voice message or in a call, a small bar says "A new version of the website is ready. It installs by itself when you finish." (with an **Update now** button). The update installs as soon as they finish (for example after signing out of the report).
- Changing only **README.md** does not change the website, so nothing reloads.
- One-time: this works after employees have this version once. The first time, they refresh one last time (Ctrl + Shift + R, or close and reopen the app).

## Speed
- Many updates arriving together are drawn once instead of many times.
- The moving 3D background now draws about 30 frames a second (15 on slower laptops) instead of 60, at a lighter quality, and pauses while CHAT is open or the tab is hidden. It looks the same.
- The folder-download tool (JSZip) loads only when a folder is downloaded, so the page opens faster.
- **sw.js (app):** if the network is slow, the saved copy opens at once (after 3.5 s at most) and the newest version is saved in the background for next time. Upload the new **sw.js** too.

## "Your zone" in percentages
- On an employee's report page, the three zone balls now show **percentages** instead of day counts: the share of this month's working days in Green, Yellow and Red (for example 7 of 16 days = 44%), with "7 of 16 days" under each ball.
- The highlighted **Your zone** follows the monthly average percentage, shown at the top right: "November 2026 · 90% monthly average · 12 days reported".

## Live status on the employee tiles
- Each employee tile (after choosing a team on Submit report) now shows **today's live status** first: "Today 92% · Green zone", "Today · not submitted yet" (grey), "Today · Outside" or "Today · season report sent". It updates by itself as soon as a report is submitted.
- Under it, the **Monthly average** (the photo ring colour) = the average percentage of the days the employee submitted this month, with the number of days: for example today 60% and yesterday 40% → "Monthly average 50% · 2 days". Days without a report are not counted in this average (the admin's day-by-day view still shows missed days in red).
- **Always up to date:** other phones and laptops read a small monthly summary (to stay within the free plan). It was refreshed only while the admin had the website open; now, if the summary is missing or older than 2 hours, any device rebuilds it once from the reports, so zones and monthly averages are correct even when the admin is offline.

## Correct date every day (even if a phone or laptop clock is wrong)
- The website now reads the **correct date and time from the server** and uses it everywhere (report date, day boxes 1–31, Today's total, 6:30 PM alerts, chat times). A laptop or phone with a wrong date (for example showing Tuesday 17 November on Thursday 19 November) no longer changes the report date. When the device clock is wrong, a message says "This device's date or time is wrong. The website now uses the correct date: …" — please also correct the device's date and time in its settings.
- **Date of work** is always today's date by default and changes to the new date by itself after midnight, even if the website stays open.
- **Changing the date:** the employee can change **Date of work** in the same box to any date they choose (for example to add or correct a previous day's report). The box looks the same as before; the next day it shows the new current date again by itself.

## Add evidence only (forgot a link, file or image — today or an earlier day)
- Forgot to add a link, file or image to a report you already submitted? Open your report, add the link, file or image in **Evidence**, then tap **Add evidence only to …** (or simply **Submit report** without entering any figures).
- **For an earlier day (for example yesterday):** first choose that day in **Date of work**. The button changes to "Add evidence only to the report of 16 Nov 2026". The evidence is added to that day's report; the figures and percentage stay as submitted.
- If no report was submitted for the chosen date, a message asks you to choose the date of your submitted report.

## Designers: manual design and manual mockup (extra tasks)
Designs (500) and mockups (70) are the **daily task**. **Manual design (if available)** — 35 per day — and **Manual mockup (if available)** — 30 per day (off shift half) — are **extra tasks**: they never lower the percentage, they add to it.
- Each extra task adds its share of a full day: 15 of 35 manual designs = +43%, 20 of 30 manual mockups = +67%. The day is capped at 100%.
- Daily task complete + any extra work done → **100% + 1 star**. Ticking an extra task and leaving it at 0 changes nothing.
- Examples: 500/500 + 70/70 = 100% · + manual design 5 = 100% ★ · 450/500 + 20/70 = 59% · + manual design 5 = 74% · + manual design 15 = 100% · manual design only 35/35 = 100%.
- Nandhini and Karthika have them too.

## Report downloads: daily, weekly, monthly
Dashboard → export row: **Daily** (image / PDF) for the chosen date, **Weekly** (image / PDF) for Monday–Sunday of the week of the chosen date, **Monthly** (image / PDF / CSV) for the chosen month. Weekly and monthly reports show each employee's zone, average %, days counted, green/yellow/red days and **stars**, followed by every daily report in that period.

## Hour-based work (From – To time)
Hour-based work has a **Working time** box. For **From** and **To** the employee chooses the hour, the minutes (5-minute steps) and **AM** (left) or **PM** (right), for example 10 : 00 AM to 1 : 30 PM. AM/PM is filled in automatically (7–11 → AM, 12–6 → PM) and can be changed with one tap. **+ Add another time** adds a second session (for example after lunch); **×** removes one. The total hours are shown, and the target is calculated from those hours, so it is the same on day and off shift.

| Work | Per hour |
|---|---|
| Metal cutting | 25 small **or** 4 big pieces |
| Powder coating | 25 small **or** 4 big pieces |
| UV printing | 30 small **or** 6 big pieces |
| Packing | 40 small **or** 30 big pieces |
| Listing (Technical team, Harish, Midhun, Rishi) | 30 listings |
| Product research (Technical team, Rishi) | 300 products researched |
| Calls (Marketing) | 30 calls |
| DTF heat press (Vihas) | 50 per 8-hour day (about 6 per hour) |

- **Small and Big tick boxes:** every production work (metal cutting, powder coating, UV printing, packing) has one Working time and two tick boxes next to the counts, **Small** and **Big**. The count box opens only when its size is ticked.
  - Only **Big** ticked: target = hours × big rate. Example: powder coating 10 AM – 12 PM (2 h × 4) = 8 big; 8 done = 100%.
  - Only **Small** ticked: target = hours × small rate. Example: 9 AM – 12 PM metal cutting (3 h × 25) = 75 small.
  - **Both** ticked: big pieces are converted to small (metal cutting / powder coating 1 big = 6.3 small, UV 1 big = 5 small, packing 1 big = 1.3 small) and compared with hours × small rate. Example: 3 h metal cutting, 20 small + 10 big = 82.5 / 75 → 100%.
  - The report cannot be submitted until Small, Big or both is ticked.
- **Rules checked before submitting:** both From and To must be filled and To must be later than From. **Times may not overlap**, with one exception: the **Production team** often runs several works at the same time, so a production employee may enter the same time for different works (for example metal cutting 11:30 AM – 12:30 PM and packing 11:30 AM – 12:30 PM). Within one work the times still may not overlap. All other teams cannot enter the same hour twice.
- The admin sees the times in every report, for example "Product listings 90 / 90 · 10:00 AM – 1:00 PM · 3 h".
- Reports submitted before this update keep the percentage they had.

## Production is one team
Production no longer shows separate Metal Cutting / Powder Coating / UV Print / Packing cards. Clicking **Production** (in Submit report) opens one list of all production employees, and the Dashboard shows one **Production** team card with all of them, because the same people do all these works. Each person's report still uses their own task list.

## Personal daily task lists
Some employees have their own task checklist under **My daily tasks** in the report form. Each task has a tick box and a **Count** box (how many done, e.g. 25 listings, 12 CSV updates). Typing a count ticks the task automatically. They tick each task when it is done; the ticked count is a target line ("Daily tasks 5 / 8") in the percentage and zone. The admin sees ✓ done (with the count, e.g. "✓ Listing — 25") and ✗ not done for every report.

| Employee | Team | Report shows |
|---|---|---|
| Namrutha (NamruthaPNY) | Technical | Only her task list, **hour-based** (no listing/video targets) + Workflow boxes |
| Saravanan | Production · Metal cutting | His works, hour-based (tick type) + Workflow boxes |
| Vihas | **Moved to Production** (no listing) | His works, hour-based + Workflow boxes |
| Santhiya | DTF | Her works (DTF print, listing, billing, packing) + Workflow boxes |
| Rishi | **Moved to Technical** | His works, hour-based (tick type) + Workflow boxes |
| Ayisha, Charu, Manoj, Praveen (all Technical except Namrutha and Rishi) | Technical | Videos and digital marketing (compulsory, always shown) + **Today's works** tick boxes + Workflow boxes |
| Monisha | Marketing | Calls (with From – To time) and digital marketing + her task list + a "Messages sent" box + Workflow boxes |

- **Namrutha (tick type, like Santhiya):** the card shows only tick boxes; ticking a work opens its Working time (From – To) and boxes. Works: **CSV forward and CSV update in Excel**, **Metal file**, **Source create**, **Shop dummy, USPS, direct and UK tracking ID update**, **Bag file check** — each with **How many came today** and **How many completed** (percentage = completed ÷ came) — plus **Listing** (30 per hour), **Product research** (300 per hour) and **Customer messages** (came / replied). Shop handling is removed. She can enter the same time for several works done together. Her day's percentage = average of the works she ticked + Workflow updates.
- **Saravanan (tick type, like Midhun) — no time entry:** he ticks the works he did today and enters only the counts (no From – To time). UV printing and Packing (Small / Big tick boxes) share his working day: one work ticked = full day (8 h; off shift 4 h), two works = 4 h each, so the target is that share × the per-hour rate.
  - **UV printing** and **Packing** — same as Midhun: small and big pieces, per-hour targets (UV 30 small or 6 big; packing 40 small or 30 big).
  - **Cutting file** and **Metal file checking** — time plus count; together they form one line, "Other works", which is complete when the time is entered.
  - **Local orders** — time, **Orders received today** and **Orders completed today**. Percentage = completed ÷ received: all done (8 of 8) = 100%, a few done (5 of 8) = 63%, none done (0 of 8) = 0%. Completed cannot be more than received.
  - **Machine problem solving (when needed)** — time plus a required **note** describing the problem and how it was solved; the admin sees the note in the report. Not counted in the percentage.
  - Removed (now done in the office Workflow website, covered by his 11:30 AM, 3:00 PM and 6:30 PM Workflow boxes): Shipment number update; UK, US and Canada number update; New products; Box and order photos.
  - **His percentage** = average of UV printing, Packing, Other works and Workflow updates (done / 3) — only the works he ticked are included. Example: UV 60/60, packing 40/40, other works 1/1, workflow 3/3 = 100%; with workflow 0/3 = 75%.
- **Rishi:** 360 rotary water bottle printing; Listing; All production work.
- **Monisha:** every task has a Working time box (From – To) and a Count box: Shop CSV updated, CSV sent, tracking ID; Shop listing and follow-ups; Franchise contacts, link sharing, details and follow-ups; Stitching department QC and counting; New local orders taken from calls; Bags packing. Her calls also use From – To time (30 calls per hour).
  - **Messages sent (customers and franchise) — when needed:** tick the box, enter the time and how many messages were sent. Target **100 messages per hour**; when ticked it is a target line in her percentage (example: 2:00–3:00 PM, 80 sent = 80 / 100). When not ticked it is not counted.
  - Her times may not overlap (for example, calls 10–11 AM and CSV 11 AM–12 PM is fine; calls 10–11 and CSV 10:30–12 is not).
- **Flexible workers — Harish, Midhun, Vihas and Santhiya:** they do different works on different days. They **tick the works they did today**; each ticked work opens a **Working time** box (From – To) and the count boxes. The target follows the hours entered (rates in *Hour-based work* above). The day's percentage is the average of the works ticked plus the Workflow boxes.
  - **Harish:** Metal cutting, Powder coating, UV printing, Packing, Listing (30 per hour), Stock maintenance.
  - **Harish — Travelling (outside):** tick **Travelling (outside)** and enter the travel time. Travel time is shown as **Outside** and is **not counted** in his percentage. Travel + some work on the same day → his percentage is calculated only from the works he ticked (each work's target follows its own hours), and the report also lists the travel time. **Only travelling all day** → the report shows **Outside** (grey), no percentage, no workflow requirement, and that day is **not counted** in his monthly/weekly average (like a Sunday), so it never makes him red.
  - **Stock maintenance (Workflow) — Harish and Vihas:** a tick box with From – To time and an **Upload stock photo** button. A photo is required when ticked (it is saved in Evidence in a "Stock maintenance" folder). Not counted in the percentage.
  - **Midhun:** **Listing done by me** and **Listing split to the technical team** (400 per hour), entered separately, Metal cutting, Powder coating, UV printing, Packing.
  - **Vihas:** DTF heat press, Metal cutting, Powder coating, UV printing, Packing, Stock maintenance. No listing.
  - **Santhiya:** **DTF print** (two boxes: only DTF print 70 m / with other works 35 m), **DTF machine run** and **Packing (box)** (time + count, targets to be added later), **Listing** (30 per hour), and these "came / completed" works — **Heat press**, **File upload**, **Canva and Photoshop file upload**, **Customer messages (if available)**, **US, UK and Canada number update (if available)**, **Billing (when needed)**, **Packing (bag)**: for each she enters the working time, **How many came today** and **How many completed**; percentage = completed ÷ came (all done = 100%, some done = part, none done = 0%). She can enter the **same time for several works** done together (for example 12–2 PM heat press and 12–2 PM file upload).
  - Example (Vihas): heat press 9:00 AM – 1:00 PM (4 h → target 25), 20 done = 80%; packing 2:00 – 4:00 PM with only Small ticked (2 h → target 80), 72 done = 90%.
  - **Rishi:** Metal cutting, Powder coating, UV printing, Packing (all production work), **360 rotary water bottle printing when orders are available** (400 per 8-hour day = 50 per hour), Listing (30 per hour), Product research (300 per hour), Customer messages (came / replied).
  - **Technical team (Ayisha, Charu, Manoj, Praveen):** *Today's works* has three tick boxes — **Listing** (30 per hour, counted), **Product research** (300 per hour, counted) and **Customer messages (when available)** — working time, **How many messages came today** and **How many you replied**; percentage = replied ÷ came (20 of 25 = 80%). Each ticked work has its own From – To time. **Videos made (10)** and **Digital marketing** (Instagram, Facebook, Pinterest) are compulsory every day, so they have no "did you do it" tick; they are always on the form and counted. Namrutha keeps her own hour-based list.
- **Why the percentage did not go up after ticking Desk-clean video:** the desk-clean tick is a required check (the report cannot be submitted without it) but it is not part of the percentage. The percentage is the average of the work lines plus **Workflow updates (done / 3)**. Example: Listing 30 / 30 (100%) + Workflow 0 / 3 (0%) = 50%; after all 3 workflow boxes it becomes 100%.
- Rishi's and Vihas's team moves happen automatically the first time the admin signs in with the new version.
- The task list is matched by the employee's first name, so keep these names as they are in Team.

## Personal working hours and new works (latest update)
- **Lakshmi — 9:30 AM to 4:00 PM (6 h 30 min):** her daily targets are set for 6.5 hours instead of 8 (for example 500 designs → 407, 70 mockups → 57; per-hour works follow the hours she enters). The day's hour check uses 6.5 hours as a full day. Times she enters must be within 9:30 AM – 4:00 PM. Her report shows "Your working time: 9:30 AM – 4:00 PM".
- **Iswarya — 9:30 AM to 5:00 PM (7 h 30 min):** daily targets are set for 7.5 hours instead of 8; per-hour works (listing, research…) follow the hours she enters; times must be within 9:30 AM – 5:00 PM.
- **Maanasa — night work, any time of the 24 hours:** she can enter any From – To time, including past midnight (for example 10:00 PM – 2:00 AM = 4 hours, shown as "(next day)"). If she opens her report before 6:00 AM, the report date is set to the previous day automatically (she can change it).
- **Santhiya:** "DTF print" is removed (it was the same as "DTF machine run", which stays).
- **Santhiya — new works (each: how many came / how many completed, percentage = completed ÷ came):** US and UK tracking updates · Photoshop file (now separate) · Canva file upload (now separate) · Dummy tracking · Excel updates.
- **Saravanan:**
  - New work **Mani, UK and US number update**: tick it, then tick **Mani**, **UK** or **US**. The other two hide (untick to choose another). Then enter how many came and how many completed. The report line shows, for example, "UK number update 8/10". For two of them on one day, submit twice — the reports are merged.
  - **No evidence section** for Saravanan: the photo, file, folder and link upload is removed and the report submits without evidence.

## Manager — Padmanaban (Management)
- A new **Management** team tile (first on the Submit report page) holds the manager **Padmanaban** (username PadmanabanPNY).
- His works (tick each one he did, then enter the From – To time):
  - **Listing** — 30 listings per hour (enter the time and how many done).
  - **Workflow reports checking** — notes box: what he checked and what needs attention.
  - **Team head reports** — notes box, and a live list of the three team heads only (**Lakshmi, Iswarya, Shobika** — Padmanaban himself is not listed) with each team's members in green (submitted) or red (not submitted) and a count like 2/3.
  - **Material order report** — notes box: which materials were ordered or are needed.
  - Each notes work counts as done (1/1) when its notes are written; the notes appear in his report for the admin.
- **Team heads card:** when Padmanaban signs in to his report, a **Team heads** card (same as the team heads' "My team" card) shows Lakshmi's, Iswarya's and Shobika's reports for the chosen date: percentage, what they did, what they uploaded, and under each name how many of her team submitted (for example "team 2/3 submitted (Santhiya, Namrutha, Joshitha)"). After 6:30 PM he also gets the alert if a team head has not submitted.
- **Daily checks:** the desk-clean video tick and the three **Workflow updates** ticks (11:30 AM, 3:00 PM, 6:30 PM), same as other teams.

## Team head alerts
- **Teams** (matched by first name):
  - **Lakshmi** (head): Santhiya, Namrutha, Joshitha (Jositha also works)
  - **Iswarya** (head): Rishi, Charu, Manoj
  - **Shobika** (head): Monisha, Harish, Ayisha Hussain
- Each head gets the alert below for her own team members.
- **Teammate reports (work for Lakshmi, Iswarya and Shobika):** in their own report, a new tick box **Teammate reports** is added to their works. Tick it, enter the From – To time and write notes ("what did your teammates report?"). Under the notes, a live list shows each teammate with Submitted / Not submitted, how many evidence items they uploaded, and their percentage. It counts as done (1/1) when the notes are written, and the notes go into the head's report.
- **My team (on the head's report page):** when a team head signs in to her own report, a **My team** card appears under "Your zone". It shows, for the chosen date (today by default; change the Date to see an earlier day):
  - how many members submitted, the average percentage, and how many have not submitted;
  - for each member: photo, name, percentage (green / yellow / red, ★ when earned), submitted time (several reports are merged), **what they did** — each task with done / target, a progress bar, time and notes — and **what they uploaded** — files and folders (tap to open or download) and links;
  - "Not submitted yet" for members without a report.
  - It is view only: the head cannot change or delete members' reports.
- **After 6:30 PM** (Monday–Saturday), if any of the three has not submitted today's report, Lakshmi gets an alert on **her own phone or laptop** — the device where she signs in to her report (or chats). It shows "Team alert · 6:30 PM — Joshitha and Santhiya have not submitted today's report" with their photos.
- **Message them** opens CHAT: for one person, her private chat with that person; for several, the Pentacle Team group with each of them @tagged and "please submit today's report" ready to send. **OK** closes the alert.
- The alert appears once a day, and again only if the list of missing people changes. It needs the website or app to be open (any page); with notifications turned on it also shows as a phone/computer notification when the site is in the background.
- The admin's own 6:30 PM missing-report alert on the Dashboard is unchanged.

## Daily read limit (free Firebase plan) — how the website saves reads
- The free plan allows **50,000 reads a day** (resets about 1:30 PM India time). Every time a phone or laptop opened the website it used to read the whole month of reports and the last 600 chat messages, so the limit was crossed by noon.
- Now:
  - **Admin account** only: reads the whole month (Dashboard, downloads) and keeps a small summary document **stats/<month>** up to date (one line per employee per day: percentage, ★, outside, desk video).
  - **All other phones and laptops** read only that one summary document plus **today's** reports. Full reports of an earlier day load only when needed (a team head chooses a date, an employee adds evidence to an earlier report, or opens "My uploads").
  - **Chat** keeps only the latest 120 messages live; tap **Load earlier messages** at the top of a chat for older ones.
  - Photos, voice messages and videos are kept on the device after the first view, and the website keeps a saved copy of data on each device, so reopening it reads much less.
- About 5 times fewer reads per opening. Open the admin account (Dashboard) at least once a day so the summary stays complete; employees' own submissions also update it.
- **No data is deleted automatically.** Reports, photos, links, chat messages, voice messages and desk-clean videos are all kept (the old automatic removal of desk videos after 60 days is switched off). Only the admin or the sender can delete something by hand.
- If the limit is still crossed some day, nothing is lost: saving works again after the daily reset. Firebase console → Usage shows the Reads bar.

## Evidence (required for every report)
- Every employee must add evidence before **Submit report** works: images or files, a folder, or one or more work links.
- Add as many links as needed (up to 50). Several links can be pasted at once.
- A status line above the Submit button shows "Evidence required" (red) or "Evidence added: files · links" (green).
- **Submitted files:** everything an employee uploads on the same day (folders and links) is merged into one box for that day, showing the best percentage and the number of submissions.
- **Delete rule:** an employee can delete a report and its evidence only on the day it was uploaded (Submitted files > Delete removes all of that day's submissions). From the next day it is **locked** and cannot be deleted by the employee. Only the admin login can delete older reports.
- Admin: Dashboard > choose a team > Daily reports > Attachments. Click any link (or its Open button) to open it directly in a new tab.

## Missing-report alert (admin Dashboard, every day after 6:30 PM)
- From 6:30 PM, the admin Dashboard shows a red box listing every employee who has not submitted a report today, grouped by designation, with their photos.
- The **Dashboard** tab shows a red number badge with how many reports are missing, and a pop-up message appears once when the alert starts.
- The page checks every minute, so the alert appears at 6:30 PM even if the Dashboard is already open. It disappears as each employee submits.
- Pick a past date to see who missed that day. Sundays are skipped. Only the admin login sees this alert.

## Daily checks (required for every employee)
- **Desk-clean video:** the video is uploaded in the office Workflow website, not here. Under **Daily checks** the employee ticks **"Desk-clean video uploaded — I have uploaded today's desk-clean video in the office Workflow website"**. The report cannot be submitted without this tick (once a day; a second report the same day is already ticked). The admin sees "Desk video uploaded in Workflow ✓". Older reports that had a video uploaded here still show it.
- **Workflow updates (3 times a day) — for Technical, Production (all sections), DTF, 360 Rotary and Marketing.** Designers and Stitching do not see these boxes, and their percentage does not include workflow. Under Daily checks there are three boxes: **11:30 AM**, **3:00 PM** and **6:30 PM** (India time). After updating the Workflow website, the employee signs in and ticks the box.
  - 11:30 AM box: open until 11:30 AM. 3:00 PM box: opens 11:30 AM, closes 3:00 PM. 6:30 PM box: opens 3:00 PM, closes 6:30 PM.
  - Each box **closes** at its time (11:31 is refused). The time is checked with Firebase's clock, so changing the phone's clock does not help.
  - A tick is saved immediately (it does not wait for Submit). If ticked by mistake (work not finished), the employee can **untick** it while that box is still open; once the time passes, the box is locked and cannot be changed.
  - **Counts in the zone:** "Workflow updates done / 3" is one of the day's target lines, averaged with the task targets. Example (Technical): listings, videos and digital marketing all complete plus 2/3 workflow = 92% (Green); with 0/3 workflow = 75% (Yellow). If a box is ticked after the report was submitted, the report's percentage updates automatically.
  - Season-time reports show the workflow count but the admin still sets the percentage.
- Admin sees "Workflow 2/3" (or "Workflow 3/3 ✓") and "Desk video ✓" in the team table and in each employee's view-only page.
- **Watching desk videos:** Dashboard > choose the team > the video plays in the employee's row (also in Submit report > team > employee). Each video has a **Download video** link.
  - New videos are saved as MP4 where the phone supports it, so they play on iPhone, Android and laptops.
  - If a phone shows "cannot play this video format" (some older videos from Android phones on iPhone), use **Download video** and open the file.

## Season time
- A third option next to Day shift / Off shift. There is no task type and no target: the employee writes the work done (required), optional hours, adds evidence, the desk video and the Workflow tick, then submits.
- Until the admin sets a percentage, the day shows "Season time · awaiting %" and is **not** counted as red or in any average.
- **Admin sets the percentage:** Submit report > choose the team > click the employee > on that day enter 0–100 > **Save %**. The day then gets its zone (Green 86–100, Yellow 21–85, Red 20 or below) and counts in all averages and downloads.

## Messages (automatic alerts on the admin Dashboard)
A **Messages** box on the admin Dashboard fills in by itself, with no setup and no email:
- **Shows today only.** Each new day starts empty.
- **Report not submitted:** at 6:30 PM (except Sunday), a message lists the employees who did not submit a report today.
- **Workflow box missed:** after 11:30 AM, 3:00 PM and 6:30 PM, a message lists the Technical, Production, DTF and 360 Rotary employees who did not tick that box.
- Newest messages are at the top. Messages disappear on their own when the employee submits (for a report). Only the admin sees them.

## Pages and the Back button
Every screen now has its own page address, so the browser **Back** and **Forward** buttons (and the Android back button) move between screens inside the website instead of leaving it. Reloading the page stays on the same screen.

| Page | Address (after pentacleworkforce.vercel.app/) |
|---|---|
| Submit report — team tiles | `#/report` |
| A team's employee list (e.g. Designers, Production) | `#/report/designers`, `#/report/production` |
| An employee's report form | `#/report/designers/<employee>` |
| Expenses | `#/expenses` |
| Dashboard (admin) | `#/dashboard` |
| A team's room in the Dashboard | `#/dashboard/technical` |
| Team (admin) | `#/team` |
| CHAT group list | `#/chat` |
| A CHAT group | `#/chat/business`, `#/chat/design` … |

- **Always starts on the team tiles:** opening or reloading the website (and signing in to the company account) always shows the **Submit report** team tiles. It never jumps by itself into Production, Designers, Technical or the last person's report — each employee taps their own team and name.
- **Website sign-in stays, employee report sign-in does not:** Back, Forward and reload keep the website (company account) signed in. An employee's report form always asks for that employee's **username and password** every time it is opened — after Back, Forward, reload or choosing the name again — so nobody can open another employee's report without their password.
- Pop-ups (sign-in box, photo viewer, group editor) close with Back.

## CHAT (team group chat)
- A **Chat** tab (top menu on laptop, bottom bar on phone) opens **CHAT** full screen, WhatsApp style.
- **Groups (8):** Pentacle Team (all earlier messages are here), Business Planning Group, Preview Group, Design Group, Heat Press Group, Cutting File Group, Domestic Group, Local Order Group. All employees and the admin can read and send in every group.
- **Laptop:** group list on the left (last message, time and unread count, newest first, with a search box), conversation on the right.
- **Phone:** the group list fills the screen; tap a group to open it full screen (the bottom menu hides), tap **‹** to go back to the list.
- **Photos:** tap the photo button left of the message box, choose a photo, type a message (optional) and tap send — the photo and the message go together, like WhatsApp. Photos are compressed automatically. Tap a photo to view it full screen and **Download** it. Deleting your own photo message also deletes the photo.
- **Admin only — create and rename groups:** signed in as admin, CHAT shows **Create new group** above the group list (name, optional short description, colour) and an **Edit** button in every open group to change its name, description and colour. Names must be unique. Employees see the new names and new groups immediately but cannot create or rename groups. Messages stay in their group after a rename. The voice call stays with the Business Planning Group even if it is renamed.
- **Voice call — Business Planning Group only:** open the Business Planning Group and tap **Call** (top right). The browser asks for the microphone once. Everyone else gets a pop-up "📞 Started a voice call · tap to join" (and a phone notification if notifications are on), and the group shows a green bar **Voice call in progress · Join**. It is a group call: everyone who joins hears everyone. The call panel shows the people in the call, the time, **Mute** and **Leave**; the panel can be made smaller with **–**. The call ends when the last person leaves. Other groups have no call button.
  - **Incoming call card:** when someone starts the call, every other open device shows a small call card on top of whatever page is open (report form, Dashboard, Expenses, Chat…) — bottom-right on a laptop, at the top of the screen on a phone — with the caller's photo and name, the group, "Incoming voice call…", the **Pentacle ringtone** (a bright marimba melody, every 3 seconds) and vibration, and two buttons: **Decline** (red) and **Attend** (green). Attend opens the Business group and joins the call; Decline closes the card (the green "Join" bar stays in the Business group, so you can still join later). The card closes by itself after 45 seconds or when the call ends. If the website is in the background and notifications are on, a phone notification appears instead. Phones can play the ringtone only after the website has been tapped at least once since it was opened.
  - **Calls while you work in other tabs or apps:** while the website is open in the browser (even in a background tab or minimised, while you use a design app or other apps), an incoming call shows a **system notification on top of any tab or app** — "📞 Incoming voice call · Jem is calling · Business Planning Group" — with **Attend** and **Decline** buttons. It stays on screen until you answer it (on laptops) and the browser tab title flashes "📞 Jem is calling…". Attend brings the website to the front and joins the call. Chat messages also notify when the website is not in front.
  - **Turn notifications on once per device:** a "Turn on notifications" bar appears at the bottom of the website until notifications are allowed (also in CHAT). Tap **Turn on → Allow**. If it was blocked earlier: click the lock icon left of the address → Notifications → Allow. On Windows, also check Settings → System → Notifications → Google Chrome is on, and Focus assist / Do not disturb is off.
  - **Check it works — CHAT → "Call notifications: on" → Test:** a sample call notification appears after 5 seconds (switch to another tab or app meanwhile). If you hear the ringtone but see nothing on screen, the computer/phone is hiding Chrome's pop-ups: **Windows** — Settings → System → Notifications → Google Chrome on + "Show notification banners", and Do not disturb / Focus off; **Mac** — System Settings → Notifications → Google Chrome → Alerts; **Android** — Settings → Apps → Chrome → Notifications → allow, site notifications "Pop on screen". A red "blocked" dot means notifications were blocked for the website: lock icon → Notifications → Allow, then reload.
  - **Limit (free plan):** notifications work while the website is open somewhere in the browser (any tab, or the installed app running). If the browser or app is fully closed, no call can reach the device — that would need a paid push server. Tip: keep the website open in one pinned Chrome tab (right-click the tab → Pin) or install it as the app.
  - Each phone, laptop or browser tab joins the call as its own device, so the same person (or the admin) can be signed in on two devices without hearing their own voice back. Tip: when two devices are in the same room, use earphones or keep them apart, otherwise the speaker sound is picked up again by the other microphone (echo).
  - **Ringtone:** while the website/app is open on screen, the call plays the Pentacle ringtone (marimba melody) with vibration. When it is in the background, the phone notification ("📞 Incoming voice call", repeated every 6 seconds) plays the phone's notification sound; on Android it can be changed per website: long-press the notification → Settings → Sound.
  - **Voice quality:** calls use the Opus voice codec at up to 64 kbps (studio-clear speech), with loss protection (FEC) so short network drops do not cut words, no silence cut-outs, echo cancellation, noise suppression and automatic volume. Best results: earphones or a headset, devices not in the same room, Wi-Fi or a good 4G/5G signal.
  - Calls are free and go directly between the phones/computers (WebRTC, free Google STUN servers); Firebase only carries the connection set-up. On some mobile networks a direct connection is not possible and a person may stay on "Connecting…" or "Could not connect"; switching to Wi-Fi usually fixes it. If this happens often, a TURN relay can be added (Metered.ca has a free plan): put its server details in `PNY_TURN` inside index.html.
- **Paste:** copied words paste into the message box as normal (even if you paste while the cursor is elsewhere in the chat). A copied photo — from another browser tab, a screenshot (Win + Shift + S / Print Screen), Photoshop/Canva or any image app — pastes with **Ctrl + V** and becomes a photo ready to send; type a message if you want, then send. On a laptop you can also drag a photo file into the chat.
- **Edit your message:** every message you sent (text, or the text under a photo) has **Edit** next to Delete. Tap Edit, change the text, tap send — the message shows "edited". Voice messages cannot be edited (delete and record again).
- **Private chats (one-to-one with the admin):** the chat list has two parts — **Private chats** on top and **Groups** below, like WhatsApp.
  - **Employee:** sees one private chat called **Admin** (with a small lock). Tap it to message the admin privately — text, photos and voice messages. Only that employee and the admin see this chat; other employees never see it.
  - **Admin:** sees one private chat per employee who has written (their photo with a lock, last message, unread count). **+ New private chat** opens the employee list to start a private chat with anyone.
  - Employee messages to the admin are stored in a separate place (`chatpriv`) that only the admin account can read — **publish the new `firestore.rules`** for this protection. The employee sees their own sent private messages on the device they sent them from. The admin's replies are hidden from other employees in the website (all employees share one company sign-in, so they are not locked the same way).
- **Private chats between employees:** every employee can now message any colleague privately (not only the admin).
  - Tap **+ New private chat**, type a name in the search box and choose the person — or type the name in **Search chats** at the top of the list; matching people appear under **People**, tap one to start.
  - The chat shows the colleague's photo with a lock and "Private chat · only you and <name>". Only those two employees see it in the website; other employees do not. The admin's list does not show employee-to-employee chats.
  - Text, photos (attach or paste) and voice messages all work. Calls stay in the Business group only.
- **Message ticks (everyone):** your own messages show **✓** (sent), **✓✓ grey** (seen by some) or **✓✓ blue** (seen by everyone in that chat). Tap the ticks to open **Message info**: who has seen it and who has not seen it yet. A message counts as seen when the person opens that chat.
- **Group photo (admin only):** in Create new group or Edit, tap **Choose photo** (the photo is cropped to a circle); **Remove photo** goes back to the colour and icon. The photo shows in the chat list and the chat header.
- **Reply to a message:** tap the small reply arrow next to any message (phone: you can also swipe the message to the right). The message appears above the typing box with an orange line and an ✕ to cancel. Send your reply — it shows the quoted message on top; tap the quote to jump to the original message (it flashes orange). Works for text, photos and voice messages.
- **Create a group (admin only):** in CHAT, the admin taps **Create new group** at the top of the chat list, types the name, picks a colour and chooses **Who can see this group**: **Everyone**, or **Selected members** (search names and tick them). Only the selected members (and the admin) see a members-only group and its messages and alerts. Open a group and tap **Edit** to rename it or change its members.
- **Reactions (👍😂👆😍😊😁❤️👌🤞🙌💖🤗🫡🤔):** tap the small smiley next to any message, then tap an emoji. Laptop: double-click a message for a quick 👍.
  - Reactions show under the message with a count; tap or hover to see who reacted. Each person has one reaction per message — tap the same emoji again to remove it, or choose another to change it.
  - When someone reacts to your message you get a pop-up, for example "😍 reacted to: Submit reports everyone".
- **@ Mentions (tag a person):** type **@** in the message box — a list of people appears (Admin and every employee). Keep typing to filter, then tap a name (laptop: arrow keys + Enter or Tab). The message shows **@Name** highlighted.
  - When it is sent, the tagged person gets an alert even if they are on another chat or page: a pop-up "**Abinisha mentioned you · Design Group**" with an orange @ badge, and a phone/computer notification (if notifications are turned on) that stays until they tap it.
  - In the chat list, a chat with an unread message that mentions you shows an orange **@** count. Your own name is highlighted in orange inside messages.
  - Use **@Admin** to tag the admin. Several people can be tagged in one message.
- Notifications and the pop-up show the group name, for example "Design Group · Jem: 📷 New mockup".
- **Employees:** open Submit report, choose your name and sign in once; after that you can chat from that phone. Your name, team and photo show on your messages. **Sign out** on your page stops chatting from that phone.
- **Admin:** the admin login can read and reply straight away; admin messages show as "Admin".
- Messages appear instantly on every phone and laptop. Links in messages can be tapped. Shift+Enter makes a new line on a laptop; Enter sends.
- A red number on the Chat tab shows new messages since you last opened Chat.
- **Delete:** each person can delete **only their own** messages (tap Delete twice). Nobody else, including the admin, can delete someone else's message.
- **Notifications:**
  - While the website or app is open on any page, a new message shows a pop-up at the top with the sender's name and the message; tap it to open CHAT. The Chat tab also shows a red count.
  - Tap **Turn on notifications** in CHAT (once per device) to also get a phone/computer notification when the site is open in the background. Tapping it opens CHAT.
  - Free limitation: when the website/app is fully closed, no notification can be sent (that needs a paid Firebase plan). On iPhone, notifications work only in the installed app (Add to Home Screen), iOS 16.4 or newer.
- **Voice messages:** when the message box is empty, the round button is a **microphone**. Tap it, allow the microphone the first time, speak, then tap **send** (or the bin icon to cancel). Up to 2 minutes per voice message. Others tap the play button to listen; a Download link appears if a phone cannot play a recording.
- Deleting a voice message also removes its recording.
- The last 200 messages are shown.

## Performance zones
The same rule applies to daily and monthly zones.

| Zone | Achievement |
|---|---|
| Green | 86–100% of target |
| Yellow | 21–85% of target |
| Red | 20% or below, or no report on a working day (Sundays excluded) |

## Dashboard percentages
- **Team circle** (Designers, Technical and so on): average of **all** employees in that team for the selected day. An employee without a report counts as 0%; if an employee submitted more than once, the best report counts. Example: 1 of 3 designers at 100% shows 33%.
- **Average achievement (all employees)**: the same rule across every employee. Example: 1 of 13 employees at 100% shows 8%.
- The circle shows "–" until at least one person in the team has reported that day.
- The tick on a team circle appears only when every employee in the team has met their target.

## Sign-in screen
- Shows only the logo, the Employee login / Admin login buttons, the email and password fields and the Sign in button.
- A wrong email, a wrong password, or using the admin account in Employee login (or the employee account in Admin login) all show the same message: "Invalid email or password. Please try again."

## Downloads (admin)

**Dashboard: daily employee report** (uses the Date box)
- **Daily report (image)** / **PDF**: every employee for that day with task, work done/target, achievement and zone ("Red · No report" if nothing was submitted on a working day)

**Dashboard: monthly employee report** (pick any month in the Month box)
- **Download report (image)**: PNG with the company logo, summary boxes, a monthly zone table for every employee and all daily reports
- **PDF**: the same report on A4 pages, ready to print
- **CSV**: spreadsheet file for Excel

**Expenses**
- **Monthly expenses** (pick a month; image or PDF): totals, a list of expense names with amounts, comparison with last month, ledger heads, week-wise totals, payment modes, materials, the 10 largest payments, and every voucher with a running balance
- **Daily expenses** (pick a day; image or PDF): running expenses only (machinery, transport, material, utilities and so on), a list of expense names with amounts, comparison with the previous day, ledger heads, payment modes, materials and the vouchers of the day
  - Salary, wages, salary advances, bonus and incentives are **not** included in daily expenses. They appear in the monthly expenses.
  - To keep salary out of daily expenses automatically, use a ledger head with "Salary" or "Wages" in its name.
- **Download image / Download PDF**: statement for the From and To dates selected (expenses download only as image or PDF)
- **Bill**: printable voucher for a single entry
- **Invoice numbers**: PNY-001, PNY-002, PNY-003 and so on (automatic)

## Troubleshooting
- **Sign-in screen flashing / page jumping back to the top after sign-in:** fixed. Signing in no longer reloads the page, so you stay where you are. Once a device is signed in, the website and app open straight into Pentacle Workforce without showing the sign-in box. Signing out reloads once and shows the sign-in box. If the Firebase sign-in on a device has ended, the sign-in box appears again so you can sign in.
- **"Incorrect email or password"**: check the user exists in Firebase > Authentication > Users with exactly this password.
- **"Unable to reach Firebase"**: open the Vercel link (not the file on your computer) and press Ctrl + Shift + R.
- **Admin sees "Loading…" or a red banner**: publish `firestore.rules` again (it must list both emails).
- **Old version still showing**: press Ctrl + Shift + R, or close and reopen the tab.
