const url = 'http://localhost:3030/ceWeekEnd.html';

const FakeUser = require('../utils/FakeUser');

describe('Vérification du formulaire ce week-end', () => {
  beforeEach(() => {
    // ...
  })

  it('cas passant - quand le formulaire est correct, popin succès', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    //fakeUser contient les attributs nom / prenom / telephone / email
    // ...
  })

  it('cas non passant - email et téléphone non renseigné', () => {
    let fakeUser = new FakeUser();
    // ...
  })

  it('le titre change bien quand on change de ville', () => {
    // ...
  })
})