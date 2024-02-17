// Create a method in the Person class which returns how another person's age compares.
//
//
// Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
// return a sentence in the following format:
// 
// {other person name} is {older than / younger than / the same age as} me.


// declare age to compare to
// it should compare persons

const myAge = 24;
const otherAge = 24;
const other1Age = 24;


// create class

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if (this.age === other.age) {
			console.log(`${this.name} and ${other.name} are the same age`);
		}
		else if (this.age < other.age) {
			console.log(`${this.name} is younger than ${other.name}`);
		}
		else if (this.age > other.age) {
			console.log(`${this.name} is older than ${other.name}`);
		}
	}
}


// declare people

let pPaco = new Person('Paco', 50);
let pPepe = new Person('Pepe', 30);
let pJuan = new Person('Juan', 24);
let pCarl = new Person('Carl', 22);
let me = new Person('Manu', 24)
let veryOldPerson = new Person('el awelico', 99);
let zagalico = new Person('un puto bebe', 0);

// uncomment to log the objects
// compare people's age to mine

//  uncomment to log the objects
//  console.log(pPaco);
//  console.log(pPepe);
//  console.log(pJuan);
//  console.log(pCarl);

pPaco.compareAge(me);
pPepe.compareAge(me);
pJuan.compareAge(me);
pCarl.compareAge(me);


pPaco.compareAge(veryOldPerson);
pPepe.compareAge(veryOldPerson);
pJuan.compareAge(veryOldPerson);
pCarl.compareAge(veryOldPerson);

pPaco.compareAge(zagalico);
pPepe.compareAge(zagalico);
pJuan.compareAge(zagalico);
pCarl.compareAge(zagalico);





//
//	RESULT
//
//  Paco is older than Manu
//  Pepe is older than Manu
//  Juan and Manu are the same age
//  Carl is younger than Manu
//  Paco is younger than el awelico
//  Pepe is younger than el awelico
//  Juan is younger than el awelico
//  Carl is younger than el awelico
//  Paco is older than un puto bebe
//  Pepe is older than un puto bebe
//  Juan is older than un puto bebe
//  Carl is older than un puto bebe
//
//
//
//
//
//
//
//
//
//
//
