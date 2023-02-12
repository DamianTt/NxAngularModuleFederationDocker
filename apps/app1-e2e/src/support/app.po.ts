export const getDescription = () => {
  return cy.get('work-hello').shadow().find('.app1-container .e2e-desc');
};
