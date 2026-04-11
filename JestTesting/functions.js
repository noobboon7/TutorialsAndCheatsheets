const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: () => false,
  checkUser: () => {
    const user = {firstName: 'j'};
    user['lastName'] = "vee";
    return user;
  },
  fetchUser: () => fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .catch(err => "error")
};

module.exports = functions;