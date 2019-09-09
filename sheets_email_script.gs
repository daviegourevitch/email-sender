//Thanks for the help DeltaF1 :)

function sendAllEmails() {

  var form = FormApp.openByUrl(
    'https://docs.google.com/forms/d/1nMYUm562PXBXwo7rNa9jOGX2scaiQC8QW0dsgF5TG9Y/edit'
   );

  var responses = form.getResponses();
  var composedEmails = responses.map(__createEmails);
  composedEmails.forEach(__sendEmail);

}

// Takes form response objects and returns objects with an email address and email html
function __createEmails(response) {
  var itemResponses = response.getResponses();
  
  // getResponse returns the String email here
  var emailAddress = itemResponses[0].getResponse();

  // getResponse returns a String[] of the choices here
  var emailChoiceStrings = itemResponses[1].getResponse();
  var emailChoiceBools = [
	emailChoiceStrings.includes('A one time email about the Wednesday board game nights'),
	emailChoiceStrings.includes('A one time email about the intro to D&D event'),
	emailChoiceStrings.includes('A one time email about the upcoming board game tournament'),
	emailChoiceStrings.includes('Keep me in the loop about everything!'),
  ]
  
  var emailContents = ""; // fix
  
  
  //return an object with the email and content
  var returnObject = { 
    'emailAddress':emailAddress,
	'emailContents':emailContents,
  }
  
  return returnObject; 
}

// Takes an object with an email address and email html and sends it
function __sendEmail(emailObj) {
	GmailApp.sendEmail(
	  emailobj.emailAddress, 
	  'subject':'CUSC Gaming',
	  emailObj.emailContents, 
	  'from':'CarletonStrategyClub@gmail.com',
	);
}