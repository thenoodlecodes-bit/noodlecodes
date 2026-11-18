// Google Apps Script for the enquiry sheet. Paste into the script editor, set SHEET_ID,
// then Deploy > Manage deployments > Edit > New version, so the /exec URL stays the same.
//
// Columns: submittedAt, name, email, company, role, service, budget, timeline, source, message, phone, country
// Add "phone" and "country" headers after "message" in row 1 of the sheet.

const SHEET_ID = 'YOUR_SHEET_ID';
const SHEET_NAME = 'Sheet1'; // change if you renamed the tab
const NOTIFY = 'thenoodlecodes@gmail.com'; // who gets an email for each enquiry; '' to turn off

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.role || '',
      data.service || '',
      data.budget || '',
      data.timeline || '',
      data.source || '',
      data.message || '',
      data.phone || '',
      data.country || '',
    ]);

    // The row is saved even if the email fails.
    try {
      if (NOTIFY) notify(data);
    } catch (mailErr) {
      console.error(mailErr);
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, err: String(err) });
  }
}

function notify(data) {
  const lines = [
    'Name: ' + (data.name || ''),
    'Email: ' + (data.email || ''),
    'WhatsApp or phone: ' + (data.phone || 'Not given'),
    'Company: ' + (data.company || 'Not given'),
    'Interested in: ' + (data.service || ''),
    'Budget: ' + (data.budget || 'Not given'),
    'Timeline: ' + (data.timeline || 'Not given'),
    'Source: ' + (data.source || ''),
    'Country: ' + (data.country || 'Unknown'),
    '',
    data.message || '',
  ];
  MailApp.sendEmail({
    to: NOTIFY,
    replyTo: data.email || NOTIFY,
    subject: 'New ' + (data.service === 'Newsletter' ? 'subscriber' : 'enquiry') + ': ' + (data.name || data.email || 'website'),
    body: lines.join('\n'),
  });
}

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

// For sanity-checking the deploy in a browser
function doGet() {
  return ContentService.createTextOutput('NoodleCodes contact webhook is live.').setMimeType(ContentService.MimeType.TEXT);
}
