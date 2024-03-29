//Thanks for the help DeltaF1 :)

function sendAllFollowupEmailsFromForms() {

  var form = FormApp.openByUrl(
    'https://docs.google.com/forms/d/1nMYUm562PXBXwo7rNa9jOGX2scaiQC8QW0dsgF5TG9Y/edit'
   );

  var responses = form.getResponses();
  var composedEmails = responses.map(__createDnDFollowupEmails);
  var i;
  for (i = 54; i < responses.length; i++) {
    __sendEmail(composedEmails[i]);
  }

}

function testSendDnDEmail() {
  var form = FormApp.openByUrl(
    'https://docs.google.com/forms/d/1nMYUm562PXBXwo7rNa9jOGX2scaiQC8QW0dsgF5TG9Y/edit'
   );

  var responses = form.getResponses();
  var emailObj = __createDnDFollowupEmails(responses[4]);
  
  try {
    GmailApp.createDraft(
      emailObj.emailAddress,
      'Intro to D&D Night is today!',
      "You are not capable of rendering html",
      {
        'noReply': 'true',
        'htmlBody': emailObj.emailContents,
      }
    );
  } catch(e) {
    //
  }
}

// Takes form response objects and returns objects with an email address and email html
function __createDnDFollowupEmails(response) {
  var itemResponses = response.getItemResponses();
  
  // getResponse returns the String email here
  var emailAddress = itemResponses[0].getResponse();

  // getResponse returns a String[] of the choices here
  if (itemResponses[1]) {
    var emailChoiceStrings = itemResponses[1].getResponse();
    var emailChoiceItem0 = emailChoiceStrings.indexOf('A one time email about the Wednesday board game nights') > -1;
    var emailChoiceItem1 = emailChoiceStrings.indexOf('A one time email about the intro to D&D event') > -1;
    var emailChoiceItem2 = emailChoiceStrings.indexOf('A one time email about the upcoming board game tournament') > -1;
    var emailChoiceItem3 = emailChoiceStrings.indexOf('Keep me in the loop about everything!') > -1;
    
    var emailChoiceBools = [
      emailChoiceItem0,
      emailChoiceItem1,
      emailChoiceItem2,
      emailChoiceItem3
    ]
    if (!emailChoiceStrings[1] || !emailChoiceStrings[3]) { // if not interested in DnD
      return null;
    }
    if (emailChoiceStrings[3]) { 
      emailChoiceBools = [true, true, true, true]; 
    }
  } else {
    var emailChoiceBools = [true, true, true, true]
  }
  
  // Make the email
  var emailContents = "<!DOCTYPE html><!-- saved from url=(0052)https://colorlib.com/etc/email-template/1/index.html --><html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office' class='gr__colorlib_com'>   <head>      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>      <meta name='viewport' content='width=device-width'>      <meta http-equiv='X-UA-Compatible' content='IE=edge'>      <meta name='x-apple-disable-message-reformatting'>      <title></title>      <link href='./template_files/css' rel='stylesheet'>      <style>   footer a { width:1%; }      html,         body {         background-color: margin: 0 auto !important;         padding: 0 !important;         height: 100% !important;         width: 70% !important;     background-color:#f1f1f1    background: #f1f1f1;		 font-family: arial;         }         /* What it does: Stops email clients resizing small text. */         * {         -ms-text-size-adjust: 100%;         -webkit-text-size-adjust: 100%;         }         /* What it does: Centers email on Android 4.4 */         div[style*='margin: 16px 0'] {         margin: 0 !important;         }         /* What it does: Stops Outlook from adding extra spacing to tables. */         table,         td {         mso-table-lspace: 0pt !important;         mso-table-rspace: 0pt !important;         }         /* What it does: Fixes webkit padding issue. */         table {         border-spacing: 0 !important;         border-collapse: collapse !important;         table-layout: fixed !important;         margin: 0 auto !important;         }         /* What it does: Uses a better rendering method when resizing images in IE. */         img {         -ms-interpolation-mode:bicubic;         }         /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */         a {         text-decoration: none;         }         /* What it does: A work-around for email clients meddling in triggered links. */         *[x-apple-data-detectors],  /* iOS */         .unstyle-auto-detected-links *,         .aBn {         border-bottom: 0 !important;         cursor: default !important;         color: inherit !important;         text-decoration: none !important;         font-size: inherit !important;         font-family: inherit !important;         font-weight: inherit !important;         line-height: inherit !important;         }         /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */         .a6S {         display: none !important;         opacity: 0.01 !important;         }         /* What it does: Prevents Gmail from changing the text color in conversation threads. */         .im {         color: inherit !important;         }         /* If the above doesn't work, add a .g-img class to any image in question. */         img.g-img + div {         display: none !important;         }         /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */         /* Create one of these media queries for each additional viewport size you'd like to fix */         /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */         @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {         u ~ div .email-container {         min-width: 320px !important;         }         }         /* iPhone 6, 6S, 7, 8, and X */         @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {         u ~ div .email-container {         min-width: 375px !important;         }         }         /* iPhone 6+, 7+, and 8+ */         @media only screen and (min-device-width: 414px) {         u ~ div .email-container {         min-width: 414px !important;         }         }	.	 footer {			width: 100%;		 }		 footer img {			width: 50px;			padding: 5px;			height					 }      </style>	  <style>		html, body {			width: 50%;			background-color: #e9ebee;		}	  </style>   </head>   <header style='text-align:center'>	<img style='width:45em; height:auto;' src='https://www.prawn.wtf/cusctransparent.png' height=100% width=100%>   </header>      <body>	<h1> Welcome to Carleton Strategy Club!</h1>	Thanks for visiting us at the expo last week, we loved meeting everyone!	We are the Carleton University Strategy Club (CUSC) and we are Carleton University's oldest and greatest gaming club. "; // fix
  emailContents += "You told us you were interested in ";
  if (emailChoiceBools[3]) {
      emailContents += "everything we have to offer!"
  }
  else if (emailChoiceBools[0] && emailChoiceBools[1] && emailChoiceBools[2]) {
      emailContents += "everything we have to offer!"
  }
  else {
    if (emailChoiceBools[0]) {
      emailContents += "our board game nights";
    } 
    if (emailChoiceBools[0] && emailChoiceBools[1]) {
      emailContents += " and ";
    }
    if (emailChoiceBools[1]) {
      emailContents += "the D&D intro night";
    }
    emailContents += "!";
  }
  emailContents += " So, that information is present below."
  
  if (emailChoiceBools[0] || emailChoiceBools[3]) {
    emailContents += "<h2>Wednesday Game Nights</h2>	This Wednesday September 11th will be our first game night of the year.	Feel free to drop by anytime from 5:30 pm - 11:00 pm to hang out, play some games. Snacks will be provided free of charge. 	We meet near the Tim Hortons in University Centre. 	Follow the signs to find our space, or check out our <a target='_blank' href='https://www.facebook.com/CUSCGaming/'>Facebook</a> page for a map.";
  }
  if (emailChoiceBools[1] || emailChoiceBools[3]) {
    emailContents += "<h2>Dungeons and Dragons Intro Night</h2>	Next Friday September 20th, the club will be holding a D&D intro night.	Whether you’re completely new to the game or you’ve been playing for years, all are welcome to come enjoy a night of adventure and excitement!	From 6:00 pm – 7:00 pm we’ll be going over rules and character creation, if you know how to play and made a character ahead of time feel free to come by at 7:00 when we’ll start breaking into groups to play.</div>	<div>For more information, or to RSVP, please check out our <a target='_blank' href='https://www.facebook.com/events/390129231886556/'>Facebook Event</a>.</div>	<div>If you're interested in DMing, please fill out our <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSeCxf0f2DQdwKMk2N-646dLCtd1gFGMTFbLl6kvL7CA5mT6rQ/viewform?usp=sf_link'>signup form</a>.</div>";
  }
  
  emailContents += "</body>      <hr>      <footer style='display:inline-block float:left text-align:center'>   <div>Follow us on social media!</div>	<span style:'margin:10px;' class='center'><a target='_blank' href='https://discord.gg/MWk2sxA'><img style='width:4.5em' class='external-logo' src='http://prawn.wtf/discord_logo_colour.png'></a></span>	<span style:'margin:10px;' class='center'><a target='_blank' href='https://www.facebook.com/CUSCGaming/'><img style='width:4.7em' class='external-logo' src='http://prawn.wtf/f_logo_colour.png'></a></span>		   </footer></html>";
  
  //return an object with the email and content
  var returnObject = { 
    'emailAddress':emailAddress,
	'emailContents':emailContents,
    'emailChoices':emailChoiceBools
  }
  
  return returnObject; 
}

// Takes an object with an email address and email html and sends it
function __sendEmail(emailObj) {
  try {
    GmailApp.sendEmail(
      emailObj.emailAddress,
      'Welcome to CUSC Gaming!',
      "You are not capable of rendering html",
      {
        'noReply': 'true',
        'htmlBody': emailObj.emailContents,
      }
    );
  } catch(e) {
    //
  }
}