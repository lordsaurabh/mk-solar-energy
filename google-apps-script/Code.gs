/**
 * MK Solar Energy website lead collector.
 *
 * Use this script from a Google Sheet:
 * Extensions -> Apps Script -> replace Code.gs with this file.
 * Deploy as a Web app, execute as you, allow access to anyone.
 */
function doPost(e) {
  const sheet = getLeadSheet_();
  const p = (e && e.parameter) ? e.parameter : {};

  // Honeypot spam check.
  if (p.website) {
    return HtmlService.createHtmlOutput('OK');
  }

  const name = clean_(p.name);
  const phone = clean_(p.phone);
  const city = clean_(p.city);
  const capacity = clean_(p.capacity) || 'Not specified';
  const message = clean_(p.message);
  const source = clean_(p.source) || 'MK Solar Energy Website';

  // Basic validation.
  if (!name || !phone || !city) {
    return HtmlService.createHtmlOutput('Missing required fields');
  }

  sheet.appendRow([
    new Date(),
    name,
    phone,
    city,
    capacity,
    message,
    source
  ]);

  return HtmlService.createHtmlOutput('Lead received');
}

function getLeadSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Leads');

  if (!sheet) {
    sheet = ss.insertSheet('Leads');
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Mobile',
      'City / Location',
      'Required Capacity',
      'Message',
      'Source'
    ]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function clean_(value) {
  return String(value || '').trim().slice(0, 2000);
}
