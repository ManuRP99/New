// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):
// 
// An attribute called fullname which returns the first and last names.
// An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.
//




// Create a class 'Name' with fname and lname properties
class Name {
	constructor (fname, lname) {
		this.fname = fname;
		this.lname = lname;
	}
	//attr. fullname = fname_lname
	
	fullname () {
		return `${this.fname} ${this.lname}`
	}
	
	//attr. initials = lname[0].lname[0]
	
	initials () {
		let fInitial = this.fname.charAt(0);
		let lInitial = this.lname.charAt(0);
		return `${fInitial}.${lInitial}`;
	}

}


let name1 = new Name ('Manu', 'Ramos');
let name2 = new Name ('Yisel', 'Ibañez');
let name3 = new Name ('John', 'Doe');
let name4 = new Name ('Someone', 'Someoneson');
let name5 = new Name ('Persona', 'Personez');

console.log(name1.fullname());
console.log(name1.initials());
console.log(name2.fullname());
console.log(name2.initials());
console.log(name3.fullname());
console.log(name3.initials());
console.log(name4.fullname());
console.log(name4.initials());
console.log(name5.fullname());
console.log(name5.initials());




// 
//		RESULTS
//
//
// Manu Ramos
// M.R
// Yisel Ibañez
// Y.I
// John Doe
// J.D
// Someone Someoneson
// S.S
// Persona Personez
// P.P
//
