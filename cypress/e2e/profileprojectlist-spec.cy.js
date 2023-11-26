describe('Profile Page Test', () => {
    it('should display user projects', () => {
        
      // Visit the profile page
      cy.visit('http://localhost:3001/profile');
  
      // Wait for the projects to load
      cy.get('table tbody tr').should('have.length.greaterThan', 0);
  
    });
  });