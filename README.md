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

## Deploy / update
1. Open the GitHub repository > **Add file > Upload files**, choose the new `index.html`, then **Commit changes**.
2. Vercel redeploys automatically in about a minute.
3. Open the site and press **Ctrl + Shift + R** (on a phone, close the tab and open the site again).

## One-time Firebase settings (already done)
- Authentication > Sign-in method: **Email/Password** enabled
- Authentication > Users: both accounts added
  - pentacledesignteam@gmail.com / Nith@2003 (employee login)
  - pentacleworkforce@gmail.com / Pentacle@#NEWYORK (admin login)
- Authentication > Settings > Authorized domains: `pentacleworkforce.vercel.app`
- Firestore > Rules: paste `firestore.rules` and **Publish**

## Sign in
The sign-in screen has two options. Each one accepts only its own account.

**Employee login**
- Email: pentacledesignteam@gmail.com / Password: Nith@2003
- Then the employee picks their department and name and signs in with their own username and password.
- Employees see only **Submit report**.

**Admin login**
- Email: pentacleworkforce@gmail.com / Password: Pentacle@#NEWYORK
- Sees **Dashboard, Team, Expenses** and every employee report, with no codes needed.

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

## Performance zones
The same rule applies to daily and monthly zones.

| Zone | Achievement |
|---|---|
| Green | 86–100% of target |
| Yellow | 21–85% of target |
| Red | 20% or below, or no report on a working day (Sundays excluded) |

## Downloads (admin)

**Dashboard: monthly employee report**
- **Download report (image)**: PNG with the company logo, summary boxes, a monthly zone table for every employee and all daily reports
- **PDF**: the same report on A4 pages, ready to print
- **CSV**: spreadsheet file for Excel

**Expenses**
- **Monthly expense report** (pick a month; image or PDF): totals, a list of expense names with amounts, comparison with last month, ledger heads, week-wise totals, payment modes, materials, the 10 largest payments, and every voucher with a running balance
- **Daily expense report** (pick a day; image or PDF): running expenses only (machinery, transport, material, utilities and so on), a list of expense names with amounts, comparison with the previous day, ledger heads, payment modes, materials and the vouchers of the day
  - Salary, wages, salary advances, bonus and incentives are **not** included in the daily report. They appear in the monthly report.
  - To keep salary out of the daily report automatically, use a ledger head with "Salary" or "Wages" in its name.
- **Download image / Print (PDF) / Download CSV**: statement for the From and To dates selected
- **Bill**: printable voucher for a single entry
- **Invoice numbers**: PNY-001, PNY-002, PNY-003 and so on (automatic)

## Troubleshooting
- **"Incorrect email or password"**: check the user exists in Firebase > Authentication > Users with exactly this password.
- **"Unable to reach Firebase"**: open the Vercel link (not the file on your computer) and press Ctrl + Shift + R.
- **Admin sees "Loading…" or a red banner**: publish `firestore.rules` again (it must list both emails).
- **Old version still showing**: press Ctrl + Shift + R, or close and reopen the tab.
