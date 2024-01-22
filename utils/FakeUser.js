import { fakerFR as faker } from '@faker-js/faker'

class FakeUser {
  constructor() {
    this.generateFakeUser();
  }

  generateFakeUser() {
    this.nom = faker.person.lastName();
    this.prenom = faker.person.firstName();
    this.telephone = faker.phone.number();
    this.email = this.nom+'.'+this.prenom+'@mail.com';
    // Mettre la chaine de caractères en minuscule puis
    // Suppression des caractères accentués dans la chaine de caractère et des espaces
    this.email = this.email.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]|\s/g, "");
  }
}
module.exports = FakeUser;
