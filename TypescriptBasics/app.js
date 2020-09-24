/*============ */
/// Objects//////
/*============ */
// const person: {
//  name: string; 
//  age: number;
// } = {
// inference version
var person = {
    name: "JerrSonJefferson",
    age: 2000,
    hobbies: ['fitness', 'music']
};
console.log(person.name);
/*============ */
/// Arrays//////
/*============ */
//types
var favActivities;
// let favActivities: any[]
// let favActivities: number[]
favActivities = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
