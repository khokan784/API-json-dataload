const user = { id: 2, name: 'khokan', job: 'programmer'};
const stringified = JSON.stringify(user);
console.log(user);
const parseUser = JSON.parse(stringified);
console.log(stringified);
console.log(parseUser);