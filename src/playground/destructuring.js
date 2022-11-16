//Object Destructuring

console.log('destructuring');

const person = {
    name: 'Andrei',
    age: 31,
    location: {
        city: 'Iasi',
        temp: 26
    }
};

const {name = 'Anonymus', age} = person; 
console.log(`${name} is ${age}.`);
//{} - in interiorul buclelor we provide lucrurile pe care vrem sa le luam din obiectul person, cum ar fi name, age, etc
// person -> obiectul pe care incercam sa l destructuram
//const {name, age} = person;  ESTE ACELASI LUCRU CU const name = person. name SI const age = person.age 
//const {name, age} -> we are looking for the person properties with name and age
//{name = 'Anonymus' } - we assign a default value for the name variable we are creating in case person.name has no value
//{name: firstName= 'Anonymus' }  we create a local variable named firstName, then we are grabing the value from person.name
//then if person.name has no value we assing 'Anonymus' as the value for the firstName variable that we created
const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}.`);
//person.location is an object just as person is an object. it is valid to destructure off an nested object


//Array Destructuring

const address = ['1299 S Juniper Street', 'Iasi', 'Rediu', '700717'];
const [strada, oras, judet, zip] = address;
console.log(`You are in ${oras}, ${judet}`);
//cream o variabibla, 4 variabile cu numele strada, oras, judet si zip si spunem ca vrem ca acestea sa preia valorile din array ul
//address. Spre deosebire de destructurarea unui obiect, in cazul destructurarii unui array, valorile variabilelor noi vor corespunde
//pozitiilor din array. De exempplu, variabila strada(prima definita) va corespunde primei valori din array, cea cu index 0.
//in cazul de fata const strada = '1299 S Juniper Street';
//Doar pentru ca in cazul de fata array ul nostru are 4 elemente in el, nu insamna ca trebuie sa le folosim/destructuram pe toate


//Sa spunem ca vrem sa cream variabile doar anumite elemente dintr un array, cum ar fi cele de la index 1(Iasi) si 2(Rediu)
//in cazul asta vom defini noile variabile in felul urmator const [, oras, judet] = address; --> prima virgula spune practic ca 
//ignoram pozitia din inainte iar pt ultima intrare din array nu mai vrem o variabila. Practic in expresia de mai sus spunem ca 
// din array ul nostru cu 4 pozitii DORIM ca prima intrare sa o ignoram , nu scriem nimic inaite de prima virgura
// a doua valoare o vom atribui unei variabile numita oras
//a treia valoare o vom atribui unei variabile numita judet
// iar ultima valoare o vom ignora nemai oferind un nume pentru o variabila la pozitia 4 din array. 
// Putem in acest fel sa destructuram array ul nostru si sa scoatem o singura valore din el

//ex: const [, , judet] = address; --> in cazul asta ignoram primele doua valori din array , preluam valoarea de la poz 3
//si ignoram valoarea de la pozitia 4
// const [, , judet = 'Iasi'] = address; --> default value pentru judet in situatia in care in array ul pe care vrem sa il 
// destructuram nu avem o valoare la pozitia 3 in cazul asta
//const address = []; --> const [, , judet] = address; --> console.log(`You are in ${judet}); --> cod valid 

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);