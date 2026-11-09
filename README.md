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

## Employee photos
Profile photos are built into `index.html` and replace the initials on the name selection screen, the employee's profile, the Dashboard and the Team page.
- Added: **Jem** (Designers), **Charu** (Technical), **Vihas** (DTF)
- Other employees show their initials until a photo is added. To add more, send the photo with the employee's name and upload the new `index.html`.

## Daily targets (changed)
Off shift target is half of the day shift target.

| Department | Day shift | Off shift |
|---|---|---|
| Designers | 500 designs and 70 mockups | 250 designs and 35 mockups |
| Technical (no customer messages) | 90 listings, 10 videos, digital marketing | 45 listings, 5 videos, digital marketing |
| Technical (customer messages available) | 60 listings, 10 videos, digital marketing | 30 listings, 5 videos, digital marketing |

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
- **Desk-clean video:** once a day, each employee records or uploads a short video of their clean desk (about 8 seconds) under **Daily checks**. On a phone, the button opens the camera. Videos longer than 30 seconds are refused; only the first 10 seconds are kept. The video is compressed automatically to a small size (about 100–300 KB).
  - The report cannot be submitted without it. A second report on the same day does not need another video.
  - To save free Firebase space, desk videos older than 60 days are removed automatically when the admin signs in. The report keeps "Desk video ✓".
- **Workflow updates (3 times a day) — only for Technical, Production (all sections), DTF and 360 Rotary.** Designers, Stitching and Marketing do not see these boxes, and their percentage does not include workflow. Under Daily checks there are three boxes: **11:30 AM**, **3:00 PM** and **6:30 PM** (India time). After updating the Workflow website, the employee signs in and ticks the box.
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

## CHAT (team group chat)
- A **Chat** tab (top menu on laptop, bottom bar on phone) opens **CHAT**, one group for all employees and the admin, like a WhatsApp group.
- **Employees:** open Submit report, choose your name and sign in once; after that you can chat from that phone. Your name, team and photo show on your messages. **Sign out** on your page stops chatting from that phone.
- **Admin:** the admin login can read and reply straight away; admin messages show as "Admin".
- Messages appear instantly on every phone and laptop. Links in messages can be tapped. Shift+Enter makes a new line on a laptop; Enter sends.
- A red number on the Chat tab shows new messages since you last opened Chat.
- Delete: anyone can delete their own message; the admin can delete any message (tap Delete twice).
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
- **"Incorrect email or password"**: check the user exists in Firebase > Authentication > Users with exactly this password.
- **"Unable to reach Firebase"**: open the Vercel link (not the file on your computer) and press Ctrl + Shift + R.
- **Admin sees "Loading…" or a red banner**: publish `firestore.rules` again (it must list both emails).
- **Old version still showing**: press Ctrl + Shift + R, or close and reopen the tab.
