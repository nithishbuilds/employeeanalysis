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
Every designer has a **Cutting file** card. On days with cutting files the designer ticks **Cutting file (if available)**, enters the From – To time and how many cutting files were done. Target **15 cutting files per hour**, added as a line to the day's percentage. When not ticked it is not counted. The design and mockup targets stay as they are.

## Name and login correction: Midhun
The first time the admin signs in with this version, the employee "Mithun" is renamed to **Midhun** and his login changes to username **MidhunPNY**, password **Midhun@2026** (the old MithunPNY login stops working). The page stores the new password only as a salted hash, never as plain text. Reports submitted before the change keep the old spelling.

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

- **Namrutha (hour-based):** every task has a Working time box (From – To) and a Count box. Entering a time ticks the task. Her percentage = hours logged on tasks ÷ 8 hours (off shift: ÷ 4). Example: 6 hours logged → 75% for the tasks line (then averaged with the Workflow boxes). Tasks: CSV forward and CSV update in Excel; Metal file; Source create; Shop dummy, USPS, direct and UK tracking ID update; Listing; Product research; Bag file check; Shop handling.
- **Saravanan (tick type, like Midhun):** he ticks the works he did today and enters the From – To time for each.
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
  - **Stock maintenance (Workflow) — Harish and Vihas:** a tick box with From – To time and an **Upload stock photo** button. A photo is required when ticked (it is saved in Evidence in a "Stock maintenance" folder). Not counted in the percentage.
  - **Midhun:** **Listing done by me** and **Listing split to the technical team** (400 per hour), entered separately, Metal cutting, Powder coating, UV printing, Packing.
  - **Vihas:** DTF heat press, Metal cutting, Powder coating, UV printing, Packing, Stock maintenance. No listing.
  - **Santhiya:** **DTF print** — two boxes: Only DTF print today (70 metres) or DTF print with other works (35 metres); **Listing** — 30 per hour; and time + count boxes (targets to be added later, after confirmation): **DTF machine run**, **Heat press**, **Packing (box)**, **File upload**, **Customer messages (if messages are available)**, **US, UK and Canada number update (if available)**. These time + count boxes form one "Other works" line, complete when the time is entered. **Billing (when needed)** is recorded only.
  - Example (Vihas): heat press 9:00 AM – 1:00 PM (4 h → target 25), 20 done = 80%; packing 2:00 – 4:00 PM with only Small ticked (2 h → target 80), 72 done = 90%.
  - **Rishi:** Metal cutting, Powder coating, UV printing, Packing (all production work), **360 rotary water bottle printing when orders are available** (400 per 8-hour day = 50 per hour), Listing (30 per hour), Product research (300 per hour).
  - **Technical team (Ayisha, Charu, Manoj, Praveen):** *Today's works* has three tick boxes — **Listing** (30 per hour, counted), **Product research** (300 per hour, counted) and **Customer messages (when available)** (time and count recorded, not counted in the percentage). Each ticked work has its own From – To time. **Videos made (10)** and **Digital marketing** (Instagram, Facebook, Pinterest) are compulsory every day, so they have no "did you do it" tick; they are always on the form and counted. Namrutha keeps her own hour-based list.
- **Why the percentage did not go up after ticking Desk-clean video:** the desk-clean tick is a required check (the report cannot be submitted without it) but it is not part of the percentage. The percentage is the average of the work lines plus **Workflow updates (done / 3)**. Example: Listing 30 / 30 (100%) + Workflow 0 / 3 (0%) = 50%; after all 3 workflow boxes it becomes 100%.
- Rishi's and Vihas's team moves happen automatically the first time the admin signs in with the new version.
- The task list is matched by the employee's first name, so keep these names as they are in Team.

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

- **Employee sign-in is kept while moving between pages:** Back, Forward and reload no longer sign the employee out of their report. It lasts until **Sign out** is tapped or the browser tab is closed. If someone opens an employee's form page without being signed in, the sign-in box opens first.
- Pop-ups (sign-in box, photo viewer, group editor) close with Back.

## CHAT (team group chat)
- A **Chat** tab (top menu on laptop, bottom bar on phone) opens **CHAT** full screen, WhatsApp style.
- **Groups (8):** Pentacle Team (all earlier messages are here), Business Planning Group, Preview Group, Design Group, Heat Press Group, Cutting File Group, Domestic Group, Local Order Group. All employees and the admin can read and send in every group.
- **Laptop:** group list on the left (last message, time and unread count, newest first, with a search box), conversation on the right.
- **Phone:** the group list fills the screen; tap a group to open it full screen (the bottom menu hides), tap **‹** to go back to the list.
- **Photos:** tap the photo button left of the message box, choose a photo, type a message (optional) and tap send — the photo and the message go together, like WhatsApp. Photos are compressed automatically. Tap a photo to view it full screen and **Download** it. Deleting your own photo message also deletes the photo.
- **Admin only — create and rename groups:** signed in as admin, CHAT shows **Create new group** above the group list (name, optional short description, colour) and an **Edit** button in every open group to change its name, description and colour. Names must be unique. Employees see the new names and new groups immediately but cannot create or rename groups. Messages stay in their group after a rename. The voice call stays with the Business Planning Group even if it is renamed.
- **Voice call — Business Planning Group only:** open the Business Planning Group and tap **Call** (top right). The browser asks for the microphone once. Everyone else gets a pop-up "📞 Started a voice call · tap to join" (and a phone notification if notifications are on), and the group shows a green bar **Voice call in progress · Join**. It is a group call: everyone who joins hears everyone. The call panel shows the people in the call, the time, **Mute** and **Leave**; the panel can be made smaller with **–**. The call ends when the last person leaves. Other groups have no call button.
  - **Incoming call card:** when someone starts the call, every other open device shows a small call card on top of whatever page is open (report form, Dashboard, Expenses, Chat…) — bottom-right on a laptop, at the top of the screen on a phone — with the caller's photo and name, the group, "Incoming voice call…", a ringtone and vibration, and two buttons: **Decline** (red) and **Attend** (green). Attend opens the Business group and joins the call; Decline closes the card (the green "Join" bar stays in the Business group, so you can still join later). The card closes by itself after 45 seconds or when the call ends. If the website is in the background and notifications are on, a phone notification appears instead. Phones can play the ringtone only after the website has been tapped at least once since it was opened.
  - **Calls while you work in other tabs or apps:** while the website is open in the browser (even in a background tab or minimised, while you use a design app or other apps), an incoming call shows a **system notification on top of any tab or app** — "📞 Incoming voice call · Jem is calling · Business Planning Group" — with **Attend** and **Decline** buttons. It stays on screen until you answer it (on laptops) and the browser tab title flashes "📞 Jem is calling…". Attend brings the website to the front and joins the call. Chat messages also notify when the website is not in front.
  - **Turn notifications on once per device:** a "Turn on notifications" bar appears at the bottom of the website until notifications are allowed (also in CHAT). Tap **Turn on → Allow**. If it was blocked earlier: click the lock icon left of the address → Notifications → Allow. On Windows, also check Settings → System → Notifications → Google Chrome is on, and Focus assist / Do not disturb is off.
  - **Limit (free plan):** notifications work while the website is open somewhere in the browser (any tab, or the installed app running). If the browser or app is fully closed, no call can reach the device — that would need a paid push server. Tip: keep the website open in one pinned Chrome tab (right-click the tab → Pin) or install it as the app.
  - Each phone, laptop or browser tab joins the call as its own device, so the same person (or the admin) can be signed in on two devices without hearing their own voice back. Tip: when two devices are in the same room, use earphones or keep them apart, otherwise the speaker sound is picked up again by the other microphone (echo).
  - Calls are free and go directly between the phones/computers (WebRTC, free Google STUN servers); Firebase only carries the connection set-up. On some mobile networks a direct connection is not possible and a person may stay on "Connecting…" or "Could not connect"; switching to Wi-Fi usually fixes it. If this happens often, a TURN relay can be added (Metered.ca has a free plan): put its server details in `PNY_TURN` inside index.html.
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
