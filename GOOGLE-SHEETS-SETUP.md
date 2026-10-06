# Google Sheets lead integration

The website form can save every enquiry into a Google Sheet and also open WhatsApp for the sales team.

## 1. Create the lead sheet

Create a Google Sheet, for example:

**MK Solar Energy - Website Leads**

You can leave the sheet empty. The script creates a `Leads` tab and headers automatically.

## 2. Add Apps Script

Open the Google Sheet and go to:

**Extensions -> Apps Script**

Replace the contents of `Code.gs` with the code in:

`google-apps-script/Code.gs`

Save it.

## 3. Deploy as a web app

In Apps Script:

**Deploy -> New deployment**

Choose **Web app**.

Use:

- Execute as: **Me**
- Who has access: **Anyone**

Deploy and authorize the script if Google asks for permission.

Copy the generated **Web app URL**. It will look similar to:

`https://script.google.com/macros/s/XXXXXXXXXXXX/exec`

## 4. Put the URL into the website

Open `index.html` and find:

`const GOOGLE_SHEETS_WEB_APP_URL='PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';`

Replace the placeholder with your Apps Script Web app URL.

Example:

`const GOOGLE_SHEETS_WEB_APP_URL='https://script.google.com/macros/s/XXXXXXXXXXXX/exec';`

Do not add quotes around the URL other than the existing single quotes.

## 5. Test

Open the website and submit the consultation form.

The enquiry should:

1. Be added to the `Leads` sheet.
2. Open a WhatsApp message to MK Solar Energy with the same enquiry details.

## Important

Keep the Apps Script deployment URL public because the website is public. Do not put Google account passwords, API keys, service-account JSON files, or private credentials in the website repository.

If you change the Apps Script code later, update the existing versioned deployment so the public web-app URL remains the same.
