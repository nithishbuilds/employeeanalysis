# Pentacle Workforce: hosting on Vercel with Firebase

The website files run on **Vercel**. All data (employees, logins, reports, proof photos, expenses) is saved in **your own Google Firebase** project (free Spark plan).

## Files in this folder
| File | What it is |
|---|---|
| `index.html` | The website |
| `firebase-config.js` | Your Firebase settings (paste them in, see step 4) |
| `seed.enc.json` | Your 13 employees and their logins, encrypted with the company password. They are imported automatically on the first sign-in. |
| `firestore.rules` | Security rules: only the company account can read or write data |

## Step 1: Create the Firebase project
1. Go to https://console.firebase.google.com and click **Create a project** (name it e.g. `pentacle-workforce`). Google Analytics is not needed.

## Step 2: Turn on sign-in and create the company account
1. **Build > Authentication > Get started**, choose **Email/Password**, then **Enable** and **Save**.
2. Open the **Users** tab, then **Add user**:
   - Email: `pentacledesignteam@gmail.com`
   - Password: `Nith@2003`
   Use this exact password the first time, because it unlocks the employee import. You can change it later.

## Step 3: Create the database and set the rules
1. **Build > Firestore Database > Create database**. Choose location **asia-south1 (Mumbai)** and **production mode**.
2. Open the **Rules** tab, replace everything with the contents of `firestore.rules`, and click **Publish**.

## Step 4: Connect the website to Firebase
1. **Project settings** (gear icon) > **Your apps** > click the **</>** (Web) icon, name it `pentacle-web` and click **Register app**. Firebase Hosting is not needed.
2. Copy the `firebaseConfig = { ... }` values into `firebase-config.js`, replacing the placeholder values. This config is safe to publish, because the rules protect the data.

## Step 5: Put it on Vercel
1. Sign in at https://vercel.com, then **Add New > Project**.
2. Upload this folder: either drag the folder in, or push it to a GitHub repository and import it. Framework preset: **Other**. No build command is needed.
3. Click **Deploy**. Vercel gives you a link like `pentacle-workforce.vercel.app`.

## Step 6: Allow your Vercel link in Firebase
1. Firebase **Authentication > Settings > Authorized domains > Add domain**, then add your Vercel domain (e.g. `pentacle-workforce.vercel.app`).

## Step 7: First sign-in
1. Open your Vercel link and sign in with `pentacledesignteam@gmail.com` / `Nith@2003`.
2. The 13 employees and their usernames/passwords are imported automatically.
3. After that, you may delete `seed.enc.json` from the project and redeploy (optional).

## Daily use
- **Every device** signs in once with the company account. It stays signed in until **Sign out** is pressed.
- **Admin** button (top right): enter an authorisation code to show **Dashboard** and **Team** on that device. Press **Exit admin** to hide them again. Use it only on your and your boss's devices.
- **Authorisation codes:** 232324, 252524, 262624 (Admin, Add employee, Manage, Expenses)
- **Security PINs for Forgot password:** 282829, 292928, 272728

## Updating the website later
Replace `index.html` and redeploy on Vercel. **Your data is not touched by updates**: it stays in Firebase.

## Notes
- Proof uploads: photos and folders of photos are supported, and links can be added. PDF and video files are not stored in this version (use a Drive link for those).
- Free plan limits (Firebase Spark): 1 GB of data, 50,000 reads and 20,000 writes per day. That is far more than daily reporting for this team needs.
- Back up monthly: Dashboard > **Export monthly report** (CSV) and Expenses > **Download CSV / Print (PDF)**.
