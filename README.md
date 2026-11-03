# Pentacle Workforce

Website hosted on **Vercel**. All data (employees, logins, reports, expenses) is stored in **Firebase** (project `pentacleworkforce-64c35`).

## Files
- `index.html`: the website (already connected to Firebase)
- `vercel.json`: Vercel settings (always loads the newest version after an update)
- `firestore.rules`: copy of the Firebase security rules

## Deploy / update
1. Upload these files to the GitHub repository (Add file > Upload files > Commit changes).
2. Vercel redeploys automatically.

## One-time Firebase settings
- Authentication > Users > Add user: pentacleworkforce@gmail.com / Pentacle@#NEWYORK (admin)
- Firestore > Rules: paste `firestore.rules` and Publish
- Authentication > Settings > Authorized domains > Add domain, then your Vercel address (e.g. `pentacle-workforce.vercel.app`).

## Sign in
- **Employee login:** pentacledesignteam@gmail.com / Nith@2003, then each employee signs in with their own username
- **Admin login:** pentacleworkforce@gmail.com / Pentacle@#NEWYORK: Dashboard, Team, Expenses and every report, with no codes needed
- Authorisation codes (employee mode): 232324 / 252524 / 262624
- Forgot password PINs: 282829 / 292928 / 272728

Updating `index.html` never deletes data; the data lives in Firebase.
