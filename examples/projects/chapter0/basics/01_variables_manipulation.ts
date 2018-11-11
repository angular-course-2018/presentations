const numbers = [1, 2, 3, 4, 5];

const [one, two, three, four] = [...numbers];

const user = {
  name: 'Danny',
  age: 36
};

console.log(user);

const userWithCoutry = {
  ...user,
  country: 'Israel'
};

console.log(userWithCoutry);

function logAll(first: number, ...rest: number[]) {
  console.log('rest', rest);
  console.log(first);

  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
logAll(1, 2, 3, 4, 5, 6);
console.log('-------------------------');
logAll(0, ...numbers);

