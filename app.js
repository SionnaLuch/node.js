  const fs = require('fs');
  const genders = ['Male', 'Female'];
  const maleNames= ['Jakub', 'Jurek', 'Krystian', 'Kuba', 'Franek','Michal','Gabriel', 'Hugon','Bozydar','Alexy','Aleksander','Leon'];
  const femaleName = ['Jadwiga', 'Julia', 'Krystyna', 'Grazyna', 'Rut', 'Katarzyna','Michalina','Weronika','Małgorzata','Bozena'];
  const lastNames = ['Kowalski', 'Nowak', 'Bogdanski', 'Slubowski', 'Jakubowski','Sobiepanski','Majewski','Krajewski'];

const randChoice=(arr) =>{
    return arr[Math.floor(Math.random()* arr.length)]
};
const people = []

for(loop = 0; loop <20; loop ++){
    const gender = randChoice(genders);
    const firstName = gender ==='Male' ? randChoice(maleNames) : randChoice(femaleName);
    const lastName = randChoice(lastNames)
    const peopleAge = Math.floor(Math.random() * 60) + 18;
    const person = {
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        age: peopleAge,
    };
    people.push(person);



}
const arrayToJSON = JSON.stringify(people);
  
  fs.writeFile('people.json', arrayToJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });