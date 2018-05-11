
import {User} from '../models/user';
let id = 0;

function getId(): number {
  return ++id;
}

const users: User[] = [
  {id: getId(), email: 'pvanson1@gmail.com', password: '12345678'},
  {id: getId(), email: 'pvanson2@gmail.com', password: '12345678'}
];


export class UserAPI {
  public async login(email: string, password: string): Promise<User> {
    const found = await users.find(x => x.email === email && x.password === password);

    return found ? new User(found.id, found.email) : null;
    }
}
