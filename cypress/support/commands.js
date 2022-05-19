import REQUEST from './lib/api/request';
/**
 * new
 */
 Cypress.Commands.add('req', (params) => {

	params.headers = {
		'Content-Type': 'application/json',
    }

	return new REQUEST(Cypress.env('url'), params).triggered();
});


Cypress.Commands.add('verifyTextLabels', (textData = []) => {
    textData.forEach(function (data) {
        cy.get(data[0]).invoke('text').then((text) => {
            expect(text.trim()).equal(data[1])
        });
    })
    
})

/*
* Login to a page
*/

Cypress.Commands.add('loginPage', (username, password) => {
    cy.get('#username').type(username); //CSS selector: 
    // cy.get("input[id='password']").type('T3st2022@#$');
    cy.get('#password').type(password); //CSS selector: 
    cy.get("span[class='element']").eq(0).click(); //click to uncheck the checkbox for remember me
    cy.get("span[class='element']").eq(1).click(); // chck to check the checkbox for agree to storage...
    cy.get("button[name='login']").click()
    
})
/*
* GEnerate access token from Azure AD 
*/
Cypress.Commands.add("loginAD", (overrides = {}) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
     <s:Header>
        <a:Action s:mustUnderstand="1">http://schemas.xmlsoap.org/ws/2005/02/trust/RST/Issue</a:Action>
        <a:ReplyTo>
           <a:Address>http://www.w3.org/2005/08/addressing/anonymous</a:Address>
        </a:ReplyTo>
        <a:To s:mustUnderstand="1">https://login.microsoftonline.com/extSTS.srf</a:To>
        <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:mustUnderstand="1">
           <o:UsernameToken>
              <o:Username>${Cypress.env('username')}</o:Username>
              <o:Password>${Cypress.env('password')}</o:Password>
           </o:UsernameToken>
        </o:Security>
     </s:Header>
     <s:Body>
        <t:RequestSecurityToken xmlns:t="http://schemas.xmlsoap.org/ws/2005/02/trust">
           <wsp:AppliesTo xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy">
              <a:EndpointReference>
                 <a:Address>https://${Cypress.env('tenantId')}.sharepoint.com/</a:Address>
              </a:EndpointReference>
           </wsp:AppliesTo>
           <t:KeyType>http://schemas.xmlsoap.org/ws/2005/05/identity/NoProofKey</t:KeyType>
           <t:RequestType>http://schemas.xmlsoap.org/ws/2005/02/trust/Issue</t:RequestType>
           <t:TokenType>urn:oasis:names:tc:SAML:1.0:assertion</t:TokenType>
        </t:RequestSecurityToken>
     </s:Body>
  </s:Envelope>`

const headers = { Authorization: "" };
const xmlHeaders = {} // { 'Content-Type', 'application/xml'}
const cookieHeaders = {
  Host: `${Cypress.env('tenantId')}.sharepoint.com`
}
cy.request({
  method: "POST",
  url: `https://login.microsoftonline.com/d70890a4-3ec5-4da3-b812-61e6b3ff4ae7/oauth2/token`,
  header: {
    "cache-control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  form: true,
  body: {
    // grant_type: "client_credentials",
    client_id: Cypress.env('clientId'),
    grant_type: "client_credentials",
    // client_secret: "x6gbHZt3BEDkeVYRPxHZkfVVWRGUuxwwGynmeUJ14wk=",
    // scope: "2ff814a6-3304-4ab8-85cb-cd0e6f879c1d%2F.default",
    // resource: "https%3A%2F%2Fmanagement.core.windows.net%2F",
    scope: 'https://graph.microsoft.com/.default',
    client_secret: Cypress.env('client_secret'),
    },
  }).then(response => {
      const ADALToken = response.body.access_token;
      const expiresOn = response.body.expires_on;
      // console.log(ADALToken)
    //   localStorage.setItem("adal.token.keys", `${Cypress.config("clientId")}|`);
    //   localStorage.setItem(`adal.access.token.key${Cypress.config("clientId")}`, ADALToken);
    //   localStorage.setItem(`adal.expiration.key${Cypress.config("clientId")}`, expiresOn);
    //   localStorage.setItem("access_token", ADALToken);
      // window.sessionStorage.setItem("expiration_key", expiresOn);
      // window.sessionStorage.setItem("access_token", ADALToken);
      // localStorage.setItem("expiration_key", expiresOn);
      // localStorage.setItem("access_token", ADALToken);
      headers.Authorization = `Bearer ${ADALToken}`;
    
      console.log(xml);
      cy.request({
        method: 'POST',
        url: 'https://login.microsoftonline.com/extSTS.srf',
        headers: xmlHeaders,
        form: false,
        body: xml,
      }).then(xmlresponse => {
        // console.log(xmlresponse.body)
        var oParser = new DOMParser();
        var oDOM = oParser.parseFromString(xmlresponse.body, "application/xml");
        cy.log(oDOM);
        var tokens = oDOM.getElementsByTagName('wsse:BinarySecurityToken');
        // console.log(tokens);
        // const magicString = tokens[0].innerHTML;
      //   cy.log(magicString);
      //   cy.request({
      //       method: 'POST',
      //       url: `https://${Cypress.env('tenantId')}.sharepoint.com/_forms/default.aspx?wa=wsignin1.0`,
      //       headers: cookieHeaders,
      //       form: false,
      //       body: magicString,
      //     }).then(cookieResponse => {
      //       cy.log(cookieResponse)
      // });
    });
  })
})

  /*
* GEnerate access token from Azure AD 
*/
Cypress.Commands.add("authenticateUsingToken", () => {
    cy.request({
      method: "POST",
      url: `https://login.microsoftonline.com/d70890a4-3ec5-4da3-b812-61e6b3ff4ae7/oauth2/token`,
      header: {
        "cache-control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: true,
      body: {
        grant_type: "client_credentials",
        username: "jocero@future-processing.com",
        password: "T3st2022@#$",
        client_id: "fd10d2bc-91a1-4115-b8c2-409d4eb42334",
        client_secret: "x6gbHZt3BEDkeVYRPxHZkfVVWRGUuxwwGynmeUJ14wk=",
        scope: "api://TeamsAllocationManagerApi/Users.Read"
      },
    }).then(response => {
      const ADALToken = response.body.access_token;
      const expiresOn = response.body.expires_on;
      console.log(ADALToken)
      window.sessionStorage.setItem("expiration_key", expiresOn);
      window.sessionStorage.setItem("access_token", ADALToken);
      window.sessionStorage.setItem("X-ZUMO-AUTH", Cypress.env('X-ZUMO-AUTH'));
      window.sessionStorage.setItem("X-MS-TOKEN-AAD-ACCESS-TOKEN", Cypress.env('X-MS-TOKEN-AAD-ACCESS-TOKEN'));
    });
  })



  /*
* GEnerate access token from Azure AD 
*/
Cypress.Commands.add("loginAD2", () => {
 
cy.request({
  method: "POST",
  url: `https://login.microsoftonline.com/${Cypress.env('tenantId')}/oauth2/token`,
  header: {
    "cache-control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  form: true,
  body: {
    grant_type: 'password',
    client_id: Cypress.env('clientId'),
    client_secret: Cypress.env('client_secret'),
    resource: "https%3A%2F%2Fteamsallocationmanager.z16.web.core.windows.net%2F",
    username: Cypress.env('username'),
    password: Cypress.env('password')
    },
  }).then(response => {
      const accessToken = response.body.access_token;
      const expiresOn = response.body.expires_on;
      cy.window().then((crntWindow) => {
        crntWindow.sessionStorage.setItem(`adal.token.keys`, `${config.resource}|`);
        crntWindow.sessionStorage.setItem(`adal.expiration.key${config.resource}`, expires);
        crntWindow.sessionStorage.setItem(`adal.access.token.key${config.resource}`, accessToken);
        crntWindow.sessionStorage.setItem('X-ZUMO-AUTH', Cypress.env('X-ZUMO-AUTH'));
        crntWindow.sessionStorage.setItem('X-MS-TOKEN-AAD-ACCESS-TOKEN', Cypress.env('X-MS-TOKEN-AAD-ACCESS-TOKEN'));
        // cy.visit(Cypress.env('tamURL'))
    });
  })
})
