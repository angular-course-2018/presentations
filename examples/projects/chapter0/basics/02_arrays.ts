import { User } from './04_classes';

const users = [new User('Danny')];

for (const user of users) {
  user.walk();
}

users.forEach((user) => {
  user.walk();
});
