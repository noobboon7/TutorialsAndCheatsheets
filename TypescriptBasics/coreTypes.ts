/*============ */
/// Objects//////
/*============ */

// const person: {
//  name: string; 
//  age: number;
// } = {
 // inference version
const personOBJ = {
 name: "JerrSonJefferson",
 age: 2000,
 hobbies: ['fitness', 'music']
}; 
console.log(person.name);

/*============ */
/// Arrays//////
/*============ */

//types
let favActivities: string[]
// let favActivities: any[]
// let favActivities: number[]

favActivities = ['sports']

for (const hobby  of personOBJ.hobbies) {
 console.log(hobby.toUpperCase())
}
/*============= */
///// Tuple//////
/*============= */


const personTPL: {
 name: string; 
 age: number;
 hobbies: string[];
 role: [number, string];
} = {
 name: "JerrSonJefferson",
 age: 2000,
 hobbies: ['fitness', 'music'],
 role: [6,'software developer']
}; 

/*============= */
///// ENUMS//////
/*============= */

enum Role {ADMIN, READ_ONLY, AUTHOR}
// can customize enums core types
// enum Role {ADMIN = 	ADMIN, READ_ONLY = READ, AUTHOR = IS_AUTHOR}

const personENUM = {
	name: "JerrSonJefferson",
	age: 2000,
	hobbies: ["fitness", "music"],
	role: Role.ADMIN,
}; 

/*============= */
///// ANY//////
/*============= */
/*caution using this core type */

let anyArray: any[]

