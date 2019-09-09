function setCustomClosedMessage() {
  
 
  var existingForm = FormApp.openById('1o5ppaq9rDJA1WTNLpz7KjXp90GNZHBRK1L4JEAclrdE');
  existingForm.setCustomClosedFormMessage("Woops, I'm all out of keychains! I'll run a second round in the future if there's enough demand!");
}

function checkIfFull() {
  var resultsSheet = SpreadsheetApp.openById('16w53LFueLlFhXuVXtFGAQMZgSghdi83PZdcQifsoNdw');
  
  var range = resultsSheet.getRange('E2:E2');
  
  var data = range.getValue();
  Logger.log(data);
  //MailApp.sendEmail("delyaerricson@gmail.com", "[Remove Before Flight] Order added!", data+" total keychains ordered so far!")
  
  if (data >= 100)
  {
    closeForm(data);
  }
}

function closeForm(data) {
  MailApp.sendEmail("delyaerricson@gmail.com", "[Remove Before Flight] Ran out of keychains!", "We're plumb out, total ordered was "+data+" keychains.")
  var existingForm = FormApp.openById('1o5ppaq9rDJA1WTNLpz7KjXp90GNZHBRK1L4JEAclrdE');
  
  existingForm.setAcceptingResponses(false);
}

function sendConfirmationEmail() {
  var resultsSheet = SpreadsheetApp.openById('16w53LFueLlFhXuVXtFGAQMZgSghdi83PZdcQifsoNdw');
  
}


function sendConfirmationEmail() {

  var sheet = SpreadsheetApp.getActiveSheet();

  
  var dataRange = sheet.getRange(2,2, 100, 3);
  
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    
    var emailAddress = row[0];
    
    if (!emailAddress)
    {
      continue;
    }
    
    var name = row[1];       
    var numKeychains = row[2];
    
    subject = "[Remove Before Flight] The keychains are here!";
    
    price = numKeychains * 0.7;
      
    message = "Hi "+name+"!\n(If you've already picked up your keychains from me, feel free to ignore this email :) )\n\nThe keychains have arrived! You bought "+numKeychains+" keychain(s), which comes to $"+price.toFixed(2)+"! If you see me around on campus I should have them on me this coming week. I'll also be chilling around CMAS/Leo's on Tuesday from 11:30 until at least 2:00. Please bring change if you can, I cannot guarantee I will be able to break up 20 dollar bills. If you can't get your order on Tuesday just drop me a line to see when I'll be on campus.\n\nCheers,\nAldous"
    
    GmailApp.sendEmail(emailAddress, subject, message, {'from':'aldous.riceleech@gmail.com'})

  }
}