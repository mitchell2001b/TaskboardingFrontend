describe('Project Form End-to-End Test', () => {
  it('should create a new project successfully', () => {
   //cy.visit('http://localhost:3001/project/create');
   //cy.visit('http://taskboarding-frontend.localhost:9080/project/create');
   cy.visit('http://taskboarding-frontend-service:80/project/create');
   //yarn cy.visit('http://10.42.0.98:3001/profile');

    // Intercept the HTTP request and respond with a known message
    cy.intercept('POST', 'http://api-gateway.localhost:9080/newproject').as('postRequest');
    //cy.intercept('POST', 'http://api-gateway-service:80/newproject').as('postRequest');
       
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });
    
    cy.captureConsoleLogs().as('consoleLogs');

    // Fill in the form
    cy.get('#projectname').type('Test Project');
    cy.get('#projectdescription').type('Test Project Description');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check for the correct response body
    cy.wait('@postRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      console.log('Interception:', interception);
      //console.log('Response Body:', interception.response.body);
      cy.log('Check for the correct response body');
      //expect(interception.response.body).to.deep.equal('Project created successfully');
      cy.url().should('include', '/profile');
    });

  });
});