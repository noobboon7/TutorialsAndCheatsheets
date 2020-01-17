const functions = require('./functions');

// beforeEach(()=> initDatabase());
// afterEach(()=> closeDatabase());

// beforeAll(()=> initDatabase());
// afterAll(()=> closeDatabase());

// const initDatabase = () => console.log('Database Initialized');
// const closeDatabase = () => console.log('Database Closed');

const nameCheck = () => console.log('Checking Name...')

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toEqual('Jeff')
  });


  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toEqual('Karen')
  });
})



// toBe compares primitive types
test('Adds 2+2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});

// add not 
test('Adds 2+2 to NOT equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5);
});

// toBeNull 
test('Should be null ', () => {
  expect(functions.isNull(null)).toBeNull();
});

// toBeFalsy
test('Should be Falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// toEqual compares objects and arrays 
test('User should be object', () => {
  expect(functions.checkUser()).toEqual({
    firstName: 'j',
    lastName: 'vee'
  });
});

// Less than and greater than 
test('should be under 1600 or equal', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex
test('There should be no I in team', () => {
  expect('team').not.toMatch(/I/i);
})

// Arrays 
test('Admin should be in usernames', () => {
  usernames =['jerry', 'shawn', 'kev', 'admin'];
  expect(usernames).toContain("admin");
})

// working with async data
// promise
test('User test data should be Leanne Graham', () => {
  expect.assertions(1); 
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// async 
test('User test data should be Leanne Graham', async () => {
  expect.assertions(1); 
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

